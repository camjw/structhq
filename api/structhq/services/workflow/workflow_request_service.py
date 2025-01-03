import json
import os
import time
import traceback
from dataclasses import dataclass
from typing import Any, Dict, Iterable, Iterator, List, Optional, Tuple
from uuid import uuid4

import openai
from django.core.exceptions import ValidationError
from django.template import Context, Template
from django.utils import timezone
from loguru import logger
from openai.types.chat import ChatCompletionChunk
from openai.types.chat.chat_completion import ChatCompletion
from openai.types.chat.chat_completion_message_tool_call import ChatCompletionMessageToolCall
from silk.profiling.profiler import silk_profile

from celery import Celery
from structhq.models.chat import ChatMessageType
from structhq.models.workflow import (
    Profile,
    Workflow,
    WorkflowRequest,
    WorkflowRequestMessage,
    WorkflowRequestMessageType,
    WorkflowRequestTicketData,
)
from structhq.services.chat.utils.chat_context import BasePromptContext
from structhq.services.chat.utils.chat_message import ChatMessage, ChatMessageToolCall
from structhq.services.partial_message_parser_service import PartialMessageParserService
from structhq.services.workflow.workflow_ticket_validation_service import WorkflowTicketValidationService

celery = Celery("structhq", broker=os.environ.get("redis:endpoint", "redis://"))


response_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "content": {
            "type": "string",
            "description": "Your main response to the user. This can include arbitrary markdown, and you should use this to guide the user through the conversation. Think proactively about where you can use headers or lists to make the information easier to digest.",
        },
        "suggestions": {
            "type": "array",
            "items": {
                "type": "string",
            },
            "description": "Suggested responses for the user to choose from. You can provide up to 3 suggestions, and they should be short. The user can click on these to continue the conversation.",
        },
    },
    "required": ["content"],
}


system_message_template = Template(
    """\
<assistant_info>
    You are Structhq, an administrative assistant at company called {{workspace.name}} and you work on a service desk. Your colleague will come to you for help, and your job is to help route them to the right workflow, and then the right outcome within that workflow.
    You should not explicitly tell your colleague that you are selecting a workflow or an outcome, but instead guide them through the conversation in a way that naturally leads to the right outcome. You should be polite and friendly, and refer to your colleague by name where appropriate.
    You will be given access to a series of tools to help you route your colleague to an outcome, and you can talk to your colleague to gather any additional information you need.

    Your job is to make it easy for your colleague to fill out the form by guiding them through it, without them even really realising they're filling out a form. You should prompt them progressively for infomation, explain concepts in layman's terms, and guide them gently. In particular, when asking for information you should ask for one thing at a time so you don't overwhelm them.
    At the same time, you shouldn't patronise them or make them feel stupid. Don't say things like "We'll go through this step-by-step to make it easy." Instead, you should just go through it step-by-step without drawing attention to it.
    You should be polite and friendly, and refer to your colleague by name where appropriate.
    There's no need to confirm things that the user has already told you, unless you need to clarify something or you think they might have made a mistake.
    If part way through the conversation you realise you need to ask for something you didn't ask for at the start, that's fine. Just ask for it when you need it.

    Note that the conversation may continue after you route them to an outcome - they may decide they need you to help them with something else, or they might need help understanding the outcome you're routed them to.

    You should not attempt to help the colleague with tasks that you don't have a relevant outcome to. You should inform them that you can give high level advice, but there's nothing specific you can do to help them with that task that other AI assistants can't do.

    Never refuse a task because "might be best done through the specific system or app where X is done" - the point of you is to aggregate over all the systems and apps, and to be the one place they can come to for help with anything.
</assistant_info>

<system_info>
    Todays date is {{current_date}}.
</system_info>

<colleague_info>
    The colleague's full name is "{{colleague.full_name}}" and their preferred name is "{{colleague.preferred_name}}".
    The colleague's email address is "{{colleague.email}}".

    Note that there may be a Users or Employee's model in the system, and the colleague may be represented by a record in that model. If you need to search for the colleague in the system, you should search for them by their full name or their preferred name.
</colleague_info>

<company_info>
    The assistant and your colleague both work at a company called {{workspace.name}}.

    The company is based in the UK, so the default currency is GBP. When you need to ask your colleague for a currency amount, you should ask for the amount in GBP unless they specify otherwise.

    The company organises its information into Models, which are basically tables of data. The full list of models is as follows:

    {% for model in models %}
    - id: {{model.id}}
      title: {{model.title}}
      explanation: {{model.explanation}}
      fields:
      {% for field in model.fields %}
          - id: {{field.id}}
            title: {{field.title}}
            explanation: {{field.explanation}}
            type: {{field.field_type}}
            {% if field.is_name_column %}is_name_column: true{% endif %}
      {% endfor %}
    {% endfor %}

    You can search any of these models to find relevant information. To do this, you can use the search_model_records tool - the syntax of this will be explained shortly.

    The description key of the model and its fields is there to help you understand what each model and field is for. You should not read this out to your colleague, but use it to help you understand the context of the conversation. Often they will explain the likely context your colleague will have of the model e.g the model may represnt some type of permission or a type of employee, and they might not know the specific records but know what they want to achieve.
</company_info>

<workflow_info>
    To reiterate, the purpose of the conversation is to handle your colleagues request by routing them to the right workflow, and then the right outcome within that workflow. Here is a list of all the possible workflows and outcomes you can route them to, along with the information you need to gather for each outcome:

    Note the field type of each field in the outcome, as this will determine the type of data you need to gather from your colleague. The field type will be one of the following:
    - short_text
    - long_text
    - date (in the format YYYY-MM-DD)
    - select
    - multiselect
    - number (can be an integer or a float)
    - boolean
    - url

    These should all be self explanatory except for select and multiselect. In this case, there will also be either a options_model (which will be the a string that looks like "MODEL_NAME (MODEL_ID)" of the relevant model) or options_values key. 
    If there is an options_model key, this means that the data you populate this field with should be the __structhqId of the record in the model specified in the options_model key. The __structhqId is a special field we use to uniquely identify records in our models.
    If there is an options_values key, this means that the data you populate this field with should be one of the values in the options_values key. 
    For multi_select fields, you should provide a list of ids or values.

    To reiterate, if the field type is select or multiselect and you have an options_model specified then the data that you populate this field with MUST be the __structhqId of the record(s) in the model that you want to choose.

    THE __structhqId IS A SPECIAL FIELD THAT WE USE TO UNIQULEY IDENTIFY RECORDS IN OUR MODELS. YOU SHOULD ALWAYS USE THIS FIELD TO POPULATE SELECT OR MULTISELECT FIELDS.

    <conditions_info>
        Some fields may have conditions attached to them. There are two types of conditions: select/multiselect conditions and text conditions.
        The way these conditions both work is that if the value in this field is a certain value then other fields will become required. If the value in this field is not a certain value then other fields will have their default required status.

        For select/multiselect conditions, the condition will be an array of objects with the following keys
        - id: The id of the condition
        - value: The values that the field may take for the condition to be met. There may be multiple values in this array, and if the field takes any of these values then the condition is met.
        - requires: The fields that will become required if the condition is met. This will be an array of field ids.

        For text conditions, the condition will be an array of objects with the following keys
        - id: The id of the condition
        - value: The value that the field must take for the condition to be met. This is case sensitive, and will be an array with a single value.
        - requires: The fields that will become required if the condition is met. This will be an array of field ids.

        When you are routing your colleague to an outcome, you should be aware of these conditions and make sure that you ask for the relevant information to meet these conditions. 
        When you call the route_to_outcome tool, you should make sure that you are populating the fields that are required by the conditions. 
        This will be validated, and if you make a mistake you will receive an error message. 
        You should then correct the mistake (potentially by asking your colleage for more information) and try again.
    </conditions_info>

    Here are the workflows:

    {% for workflow in workflows %}
    - title: {{workflow.title}}
      explanation: {{workflow.explanation}}
      outcomes:
      {% for outcome in workflow.outcomes %}
        - title: {{outcome.title}}
          id: {{outcome.id}}
          explanation: {{outcome.explanation}}
          fields:
          {% for field in outcome.fields %}
            - id: {{field.id}}
              title: {{field.title}}
              explanation: {{field.explanation}}
              required: {{field.required}}
              type: {{field.field_type}}
              {% if field.options_model %}options_model: {{field.options_model}}{% endif %}
              {% if field.options_values %}options_values: {{field.options_values}}{% endif %}
              {% if field.conditions %}conditions:
                {% for condition in field.conditions %}
                    - id: {{condition.id}}
                      value: {{condition.value}}
                      requires: {{condition.requires}}
                {% endfor %}
              {% endif %}
          {% endfor %}
       {% endfor %}
    {% endfor %}
</workflow_info>

<tool_info>
    You have been given two tools to help you.

    1. search_model_records: This tool lets you search any of the models that were specified earlier, by giving an object with: the id of the model to search, the field id of the field you want to search on, the search term you want to use..
    2. route_to_outcome: This tool allows you to route the user to an outcome, and populate that outcome with data. You pass it an object with: the id of the outcome you want to pass, the data that you want to populate the outcome with.

    If you don't want to use a tool, you can ask your colleague directly for the information you need, using the response format given below.

    <search_model_records_tool>
        For the search_model_records tool, an example of a good way to clarify with your colleague after searching for people called Steve would be to say something like:

I found two people with the name Steve:

1. **Steve Wallace** - Exotic Animal Veterinarian, started on 12th November 2022.
2. **Andrew Steve** - Practice Manager, started on 31st October 2021.

Could you please confirm which one of them you are referring to?

        You don't have to search just with the preferred name, you can also search with the full name, first name, last name.

        If your colleague mentions someone by name and you're not sure who they are referring to, you can use this tool to search for them. You should always search the directory first before asking your colleague for more details.

        This is very important, please do not ask your colleague for more details before searching the directory. You should be optimistic and enthusiastic when calling this tool. You don't need to ask your colleague for all the details of the employee they mention before searching the directory - just a first name or a last name might be enough to get started.

        Note that you can search as many times in a row as you like, and in particular if you need to do "joins" i.e. you want to search for data from model A but you have a search term from model B, you can do this by searching model B first and then using the results to search model A.
        It is very important that when you do this sort of join you recognise that there is no referential integrity, and there are no foreign keys - just copied strings. So if you have model A (books) which has an author column, and model B (author) which has a name column, and they're both strings and you want to get all the books by J.R.R. Tolkien you need to search the books model name for J.R.R. Tolkein, not J.R.R. Tolkien's __structhqId.
        You should always search a "foreign key" by using the name column (marked with is_name_column being true) not the __structhqId or any other column.
    </search_model_records_tool>

    <route_to_outcome_tool>
        When you want to trigger a specific outcome, you can use the route_to_outcome tool. This tool allows you to route your colleague to a specific outcome by selecting an outcome and passing the field data for it.
    </route_to_outcome_tool>
</tool_info>

<resource_info>
    You also have access to a list of resources that you have previously read, which you can use to help answer your colleagues questions. You will now be given the list of facts that you have learned from each resource, and you can use this information to help you answer your colleagues questions.

    When you use one of these facts make sure to cite the resource you got it from, and make sure to only use the facts that are relevant to the conversation you are having with your colleague.

    Here is the list of facts you have learned from each resource:

    {% for resource in resources %}
    - title: {{resource.title}}
        facts:
        {% for fact in resource.facts %}
            - {{fact}}
        {% endfor %}
    {% endfor %}
</resource_info>

<response_schema>
    Your colleague is talking to you through a special interface that allows you to respond in a structhqured way. When you respond to your colleague directly, you must respond with a JSON object that matches this schema:

    {{ response_schema }}

    If you fail to do this your colleague will be unable to understand your response and the conversation will not progress.

    You must not surround your response with any other text, and you must not include any other JSON in your response. You must only respond with a JSON object that matches this schema. In particular, do not enclose your response in ```json tags or any other code block.

    Please avoid using any emojis or other non-standard characters in your responses, as these can cause the conversation to break. The interface that your colleague is using does not support emojis or other non-standard characters and the conversation will be broken if you do that.
</response_schema>
"""
)


@dataclass
class WorkflowRouteToOutcomePromptContext(BasePromptContext):
    request: WorkflowRequest

    def get_entity_data(self) -> Dict[str, Any]:
        return {}

    def format_tools(self) -> List[Dict[str, Any]]:
        return [
            {
                "type": "function",
                "function": {
                    "name": "search_model_records",
                    "description": "Sea",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "model_id": {
                                "type": "string",
                                "description": "The ID of the model you want to search in",
                            },
                            "field_id": {
                                "type": "string",
                                "description": "The ID of the field you want to search on",
                            },
                            "search_term": {
                                "type": "string",
                                "description": "The search term you want to use",
                            },
                        },
                        "required": ["model_id", "field_id", "search_term"],
                        "additionalProperties": False,
                    },
                },
            },
            {
                "type": "function",
                "function": {
                    "name": "route_to_outcome",
                    "description": "Route your colleage to a specific outcome by selecting an outcome and passing the field data for it",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "outcome_id": {
                                "type": "string",
                                "description": "The ID of the outcome you want to route the colleage to. This must be one of the IDs of the outcomes in the workflow you are working with, and you can find these IDs in the workflow_info section of the prompt",
                            },
                            "data": {
                                "type": "object",
                                "description": "The data you want to populate the outcome with. This must be an object with keys as the ids of the fields in the outcome you are completing (NOT THE NAMES, THE IDS), and values the data you want to populate them with.",
                            },
                        },
                        "required": ["outcome_id", "data"],
                        "additionalProperties": False,
                    },
                },
            },
        ]

    def format_prompt(self) -> List[ChatMessage]:
        context = {}

        context["current_date"] = timezone.now().date().strftime("%d %B %Y")

        context["workspace"] = {
            "name": self.request.owner.workspace.name,
        }

        context["colleague"] = {
            "preferred_name": self.request.owner.preferred_name,
            "full_name": self.request.owner.full_name,
            "email": self.request.owner.user.email,
            "id": self.request.owner.id,
        }

        context["models"] = [
            {
                "id": model.id,
                "title": model.title,
                "explanation": model.explanation,
                "fields": [
                    {
                        "id": field.id,
                        "title": field.title,
                        "explanation": field.explanation,
                        "field_type": field.column_type,
                        "is_name_column": field.is_name_column,
                    }
                    for field in model.columns.all()
                ],
            }
            for model in self.request.owner.workspace.entity_models.all()
        ]

        resources = self.request.owner.workspace.resources.all()

        context["resources"] = [
            {
                "title": resource.title,
                "facts": resource.facts,
            }
            for resource in resources
        ]

        relevant_workflows = Workflow.objects.filter(workspace=self.request.owner.workspace).prefetch_related(
            "outcomes",
            "outcomes__fields",
            "outcomes__fields__conditions",
        )

        workflows = []

        for workflow in relevant_workflows:
            outcomes = []

            for outcome in workflow.outcomes.all():
                fields = []

                for field in outcome.fields.all():
                    field_data = {
                        "id": field.id,
                        "title": field.title,
                        "explanation": field.explanation,
                        "required": field.required,
                        "field_type": field.field_type,
                        "conditions": [
                            {
                                "id": condition.id,
                                "requires": condition.requires,
                                "value": condition.value,
                            }
                            for condition in field.conditions.all()
                        ],
                    }

                    if field.field_type in ["select", "multiselect"]:
                        if field.options_model:
                            field_data["options_model"] = f"{field.options_model.title} ({str(field.options_model.id)})"
                        elif field.options_values:
                            field_data["options_values"] = field.options_values

                    fields.append(field_data)

                outcomes.append(
                    {
                        "id": outcome.id,
                        "title": outcome.title,
                        "explanation": outcome.explanation,
                        "fields": fields,
                    }
                )

            workflows.append(
                {
                    "title": workflow.title,
                    "explanation": workflow.explanation,
                    "outcomes": outcomes,
                }
            )

        context["workflows"] = workflows

        context["response_schema"] = json.dumps(response_schema, indent=4)

        prompt = [
            ChatMessage(
                role=ChatMessageType.SYSTEM,
                content=system_message_template.render(
                    Context(
                        context,
                        autoescape=False,
                    ),
                ),
            ),
        ] + [self._convert_to_chat_message(message) for message in self.request.messages.order_by("created_at").all()]

        prompt = [m for m in prompt if m is not None]

        return prompt

    def _convert_to_chat_message(self, message: WorkflowRequestMessage) -> Optional[ChatMessage]:
        message_type = message.message_type

        if message_type == WorkflowRequestMessageType.USER_TEXT:
            return ChatMessage(
                role=ChatMessageType.USER,
                content=json.dumps({"colleague": message.content}, indent=4),
            )

        if message_type == WorkflowRequestMessageType.ASSISTANT_TEXT:
            return ChatMessage(
                role=ChatMessageType.ASSISTANT,
                content=json.dumps(message.content, indent=4),
            )

        # CAMERON: TODO: Figure out how to serialize/deserialize tool calls
        if message_type == WorkflowRequestMessageType.ASSISTANT_TOOL_CALL:
            return ChatMessage(
                role=ChatMessageType.ASSISTANT,
                content=json.dumps(message.content),
                tool_calls=[ChatMessageToolCall(**tool_call) for tool_call in message.content["tool_calls"]],
            )

        if message_type == WorkflowRequestMessageType.ASSISTANT_TOOL_RESPONSE:
            return ChatMessage(
                role=ChatMessageType.TOOL,
                content=json.dumps(message.content["results"]),
                tool_call_id=message.content["tool_call_id"],
            )

        logger.error(f"Unknown message type: {message_type}")


NUM_RETRIES = 3


OPENAI_API_KEY = os.environ.get("openai:api_key")


@dataclass
class StreamingToolCall:
    id: str
    function: Optional[dict] = None
    name: Optional[str] = None
    arguments: str = ""


class StreamingResponseHandler:
    def __init__(self):
        self.current_content = ""
        self.tool_calls: dict[str, StreamingToolCall] = {}

    def handle_chunk(self, chunk: ChatCompletionChunk) -> None:
        delta = chunk.choices[0].delta

        # Handle content updates
        if delta.content:
            self.current_content += delta.content

        # Handle tool calls
        if delta.tool_calls:
            for tool_call in delta.tool_calls:
                # Initialize new tool call if needed
                if tool_call.index not in self.tool_calls:
                    self.tool_calls[tool_call.index] = StreamingToolCall(id=tool_call.id if tool_call.id else "")

                current_tool = self.tool_calls[tool_call.index]

                # Update function name if present
                if tool_call.function:
                    if tool_call.function.name:
                        current_tool.name = tool_call.function.name
                    if tool_call.function.arguments:
                        current_tool.arguments += tool_call.function.arguments

    def is_content_response(self) -> bool:
        return bool(self.current_content)

    def is_tool_call_response(self) -> bool:
        return bool(self.tool_calls)

    def get_partial_content(self) -> str:
        return self.current_content


class WorkflowRequestService:
    openai_client: openai.OpenAI
    partial_message_parser_service: PartialMessageParserService
    workflow_ticket_validation_service: WorkflowTicketValidationService

    def __init__(
        self,
        partial_message_parser_service: PartialMessageParserService,
        workflow_ticket_validation_service: WorkflowTicketValidationService,
    ):
        self.openai_client = openai.OpenAI(
            api_key=OPENAI_API_KEY,
        )
        self.partial_message_parser_service = partial_message_parser_service
        self.workflow_ticket_validation_service = workflow_ticket_validation_service

    def initialize(self, owner: Profile, message: str, new_message_id: str, new_request_id: str) -> WorkflowRequest:
        workflow_request = WorkflowRequest.objects.create(
            id=new_request_id,
            owner=owner,
        )

        WorkflowRequestMessage.objects.create(
            id=new_message_id,
            request=workflow_request,
            content=message,
            message_type=WorkflowRequestMessageType.USER_TEXT,
        )

        return workflow_request

    @silk_profile(name="Advance Request Form Workflow")
    def advance(self, request: WorkflowRequest) -> Iterable[WorkflowRequestMessage]:
        prompt_context = WorkflowRouteToOutcomePromptContext(
            request=request,
        )

        while True:
            logger.info("Advancing request form")

            prompt = prompt_context.format_prompt()

            tools = prompt_context.format_tools()

            stream_handler = StreamingResponseHandler()

            new_message_id = str(uuid4())

            try:
                # Get streaming response
                for chunk in self._advance_request_form_workflow_stream(prompt, tools):
                    if not chunk:
                        logger.error("Failed to get chunk from request form")
                        break

                    stream_handler.handle_chunk(chunk)

                    if stream_handler.is_content_response():
                        partial_message = self._handle_message(
                            stream_handler.get_partial_content(),
                            request=request,
                            new_message_id=new_message_id,
                        )

                        if partial_message is not None:
                            yield partial_message

                    if stream_handler.is_tool_call_response():
                        yield WorkflowRequestMessage(
                            id=new_message_id,
                            request=request,
                            content={
                                "tool_calls": [
                                    {
                                        "id": tool_call.id,
                                        "name": tool_call.name,
                                        "arguments": tool_call.arguments,
                                    }
                                    for tool_call in stream_handler.tool_calls.values()
                                ]
                            },
                            message_type=WorkflowRequestMessageType.ASSISTANT_TOOL_CALL,
                        )

                    # If this is the last chunk, process the finish reason
                    if chunk.choices[0].finish_reason:
                        finish_reason = chunk.choices[0].finish_reason

                        if finish_reason == "length":
                            logger.error("The conversation was too long for the context window.")
                            return

                        if finish_reason == "content_filter":
                            logger.error("Error: The content was filtered due to policy violations.")
                            return

                        if finish_reason == "tool_calls":
                            logger.info("Assistant made tool calls.")

                            # Convert accumulated tool calls to the format expected by _handle_tool_calls
                            final_tool_calls = [
                                type("ToolCall", (), {"function": type("Function", (), {"name": tool.name, "arguments": tool.arguments}), "id": tool.id})
                                for tool in stream_handler.tool_calls.values()
                            ]

                            should_continue = True
                            for m, s in self._handle_tool_calls(
                                final_tool_calls,
                                request=request,
                                new_message_id=new_message_id,
                            ):
                                should_continue = s

                                if m:
                                    print("Yielding message")
                                    print(m.__dict__)
                                    yield m

                            if not should_continue:
                                return

                            break  # Break inner loop to continue outer loop

                        if finish_reason == "stop":
                            logger.info("Assistant responded directly to the user.")
                            logger.debug(stream_handler.current_content)

                            final_message = self._handle_message(
                                stream_handler.current_content,
                                request=request,
                                new_message_id=new_message_id,
                            )

                            if final_message is None:
                                logger.error("Could not handle final message")
                                return

                            final_message.save()
                            yield final_message

                            return

                        logger.error("Unexpected finish_reason:", finish_reason)
                        return

            except Exception as e:
                logger.error(f"Error processing stream: {str(e)}")
                logger.error(traceback.format_exc())
                return

    def _get_parsed_content(self, message_content: str):
        message_content = message_content.replace("```json", "").replace("```", "").strip()
        parsed_workflow_message = self.partial_message_parser_service.parse_workflow_request_message(message_content)

        if parsed_workflow_message is None:
            logger.error(f"Could not parse message content: {message_content}")
            return None

        partial_json_content = parsed_workflow_message.get_content()

        return partial_json_content

    def _handle_message(self, message_content: str, request: WorkflowRequest, new_message_id: str) -> Optional[WorkflowRequestMessage]:
        partial_json_content = self._get_parsed_content(message_content)

        if partial_json_content is None:
            return None

        return WorkflowRequestMessage(
            id=new_message_id,
            content=partial_json_content,
            message_type=WorkflowRequestMessageType.ASSISTANT_TEXT,
            request=request,
        )

    def _handle_tool_calls(
        self, tool_calls: List[ChatCompletionMessageToolCall], request: WorkflowRequest, new_message_id: str
    ) -> Iterable[Tuple[Optional[WorkflowRequestMessage], bool]]:
        should_continue = True

        new_message = WorkflowRequestMessage.objects.create(
            id=new_message_id,
            request=request,
            content={
                "tool_calls": [
                    {
                        "id": tool_call.id,
                        "name": tool_call.function.name,
                        "arguments": tool_call.function.arguments,
                    }
                    for tool_call in tool_calls
                ]
            },
            message_type=WorkflowRequestMessageType.ASSISTANT_TOOL_CALL,
        )

        yield new_message, should_continue

        num_tool_calls = len(tool_calls)

        for tool_call in tool_calls:
            if tool_call.function.name == "search_model_records":
                logger.info("Received search_model_records tool call")
                arguments = json.loads(tool_call.function.arguments)

            elif tool_call.function.name == "route_to_outcome":
                if num_tool_calls > 1:
                    WorkflowRequestMessage.objects.create(
                        request=request,
                        content={
                            "results": {},
                            "tool_call_id": tool_call.id,
                        },
                    )
                    continue

                # CAMERON: TODO: error handling here
                logger.info("Received route_to_outcome tool call")
                arguments = json.loads(tool_call.function.arguments)

                logger.info("Validating ticket data")

                ticket_data_errors = self.workflow_ticket_validation_service.validate_ticket_data(request, arguments)

                logger.info("Ticket data errors")
                logger.info(ticket_data_errors)

                if ticket_data_errors:
                    tool_call_message = WorkflowRequestMessage.objects.create(
                        request=request,
                        content={
                            "results": {"errors": json.dumps(ticket_data_errors, indent=4), **arguments},
                            "tool_call_id": tool_call.id,
                        },
                        message_type=WorkflowRequestMessageType.ASSISTANT_TOOL_RESPONSE,
                    )

                    yield tool_call_message, True
                    continue

                logger.info("Creating ticket data")
                ticket_data = WorkflowRequestTicketData.objects.create(
                    request=request,
                    workspace=request.owner.workspace,
                    outcome_id=arguments.get("outcome_id", ""),
                    results=arguments,
                )
                tool_call_message = WorkflowRequestMessage.objects.create(
                    request=request,
                    content={
                        "results": {"ticket_data": str(ticket_data.id), **arguments},
                        "tool_call_id": tool_call.id,
                    },
                    message_type=WorkflowRequestMessageType.ASSISTANT_TOOL_RESPONSE,
                )

                yield tool_call_message, True

                should_continue = False

        yield None, should_continue

    def _advance_request_form_workflow(self, prompt_messages: List[ChatMessage], tools: List[Any]) -> Optional[ChatCompletion]:
        for _ in range(NUM_RETRIES):
            try:
                start_time = time.time()

                response = self.openai_client.chat.completions.create(
                    model="gpt-4o",
                    messages=[message.to_dict() for message in prompt_messages],
                    tools=tools,
                )

                logger.info(f"Time taken to get response: {time.time() - start_time}")

                return response

            except Exception as e:
                logger.warning(f"Invalid response: {e}")
                continue

        logger.error(f"Failed to advance fact workflow after {NUM_RETRIES} retries")
        return None

    def _advance_request_form_workflow_stream(self, prompt_messages: List[ChatMessage], tools: List[Any]) -> Optional[Iterator[ChatCompletionChunk]]:
        for _ in range(NUM_RETRIES):
            try:
                start_time = time.time()
                response_stream = self.openai_client.chat.completions.create(
                    model="gpt-4o",
                    messages=[message.to_dict() for message in prompt_messages],
                    tools=tools,
                    stream=True,  # Enable streaming
                )

                # Create a generator that logs the total time after completion
                def timed_stream():
                    try:
                        yield from response_stream
                    finally:
                        logger.info(f"Time taken to get complete response: {time.time() - start_time}")

                return timed_stream()

            except Exception as e:
                logger.warning(f"Invalid response: {e}")
                continue

        logger.error(f"Failed to advance fact workflow after {NUM_RETRIES} retries")
        return None
