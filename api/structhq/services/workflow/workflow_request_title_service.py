import json
from dataclasses import dataclass
from typing import List, Optional

import jsonschema
from django.template import Context, Template
from loguru import logger

from structhq.models.chat import ChatMessageType
from structhq.models.workflow import WorkflowRequest
from structhq.services.chat.chat_service import ChatService
from structhq.services.chat.utils.chat_context import BasePromptContext
from structhq.services.chat.utils.chat_message import ChatMessage

workflow_request_title_response_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
        },
    },
    "required": ["title"],
}


system_message_template = Template(
    """\
You will be given a conversation that a Colleague had with Structhq. Your task is to generate a short, descriptive title for this conversation. Here is the conversation:

<conversation>
{{conversation}}
</conversation>

To create an effective title for this conversation, follow these guidelines:
1. Keep the title concise, ideally between 3-5 words.
2. Capture the main topic or theme of the conversation.
3. Use clear and straightforward language.
4. Mirror the language used in the conversation when possible, expecially the language of the Colleague
5. Make the title informative enough that someone could understand the general content of the conversation without reading it.

After analyzing the conversation, generate a short title that best summarizes its content. Output your response in a JSON with a title tag.

This title will be assigned to the ticket and will be read by a member of the support team, so make sure its useful to them.

Here's an example of a good title for a conversation about climate change solutions:
{"title": "Exploring Climate Change Solutions"}

A valid response will therefore be a JSON object that satisfies the following schema:
{{response_schema}}


Now, please generate an appropriate title for the given conversation."""
)


@dataclass
class WorkflowRequestTitlePromptContext(BasePromptContext):
    workflow_request: WorkflowRequest

    def format_prompt(self) -> List[ChatMessage]:
        context = {}

        chat_messages = list(self.workflow_request.messages.order_by("created_at").all())

        conversation = "\n\n".join([f"{self._get_chat_name_for_message(message)}: {message.content}" for message in chat_messages])

        context["conversation"] = conversation

        context["response_schema"] = json.dumps(workflow_request_title_response_schema, indent=4)

        prompt = [
            ChatMessage(
                role=ChatMessageType.SYSTEM,
                content=system_message_template.render(
                    Context(
                        context,
                        autoescape=False,
                    ),
                ),
            )
        ]

        prompt = [m for m in prompt if m is not None]

        return prompt


NUM_RETRIES = 5


class WorkflowRequestTitleService:
    chat_service: ChatService

    def __init__(self, chat_service: ChatService):
        self.chat_service = chat_service

    def generate_title(self, workflow_request: WorkflowRequest) -> Optional[str]:
        prompt_context = WorkflowRequestTitlePromptContext(
            workflow_request=workflow_request,
        )

        prompt_messages = prompt_context.format_prompt()

        for _ in range(NUM_RETRIES):
            try:
                complete_response = self.chat_service.try_get_completed_response_json(
                    prompt_messages,
                    backend=None,
                    json_schema=workflow_request_title_response_schema,
                )

                return complete_response.get("title", None)
            except jsonschema.ValidationError as e:
                logger.warning(f"Invalid response: {e}")
                continue

        logger.error(f"Failed to generate a valid title after {NUM_RETRIES} retries")
        return None
