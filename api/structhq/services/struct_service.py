import json
import os
import pprint
import time
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from typing import Any, Dict, List, Optional
from uuid import uuid4

import openai
import requests
import tiktoken
from bs4 import BeautifulSoup
from django.template import Context, Template
from loguru import logger
from openai.types.chat.chat_completion import ChatCompletion

from structhq.lib.result import Result
from structhq.models.chat import ChatMessageType
from structhq.models.profile import Profile
from structhq.models.struct import (
    StructRequest,
    StructRequestChunk,
    StructRequestMessage,
    StructRequestMessageType,
    StructRequestStatus,
)
from structhq.services.chat.utils.chat_message import ChatMessage, ChatMessageToolCall

HEADLESS = os.getenv("python_env", "development") == "production"

OPENAI_API_KEY = os.getenv("openai:api_key")

BROWSER_ROOT_URL = os.getenv("structhq:browser_url")
BROWSER_URL = f"{BROWSER_ROOT_URL}/website/scrape"

MAX_NUM_INTERACTIONS = 16

NUM_RETRIES = 3

HTML_CHUNK_SIZE = 10_000

OPENAI_MODEL = "gpt-4o"

old_system_message_template = Template(
    """\
<assistant_information>
    You are an administrative assistant whose job is to scrape relevant information from a website, which will be later used for a variety of purposes.
    You're in a team of other assistants who are also scraping the same website, and you will need to work together to scrape the entire website. You each get given a small part of the website to scrape.
    It's okay for you to only find part of the information that you need - your colleagues will find the rest and your supervisor will stitch it all together.

    You will be provided with part of the html of the website and a variety of tools which you can use to interact with the website.
    Because you are an assistant and because websites can be very large, you will only be shown a small part of the website at a time - {{ HTML_CHUNK_SIZE }} tokens worth to be precise.
    You can use these tools to click on elements and visit new pages.
    You will also be told more details about the tools you have available to you, and how to use them.

    {% if instructions %}
    Your colleague, who has asked for this data to be procured, has also provided you with some instructions and context which you should follow:
                                   
    {{ instructions }}{% endif %}

    You should only use the content response for your thoughts and planning, you must always use at least one tool in all of your interactions.
    Try to be thorough and learn as much information as possible, and use your response to think about what information you might still be able to learn by clicking around.
</assistant_information>

<tool_information>
    You have been given access to three tools: `click_element`, `visit_page`, `complete`.
                                   
    <click_element_information>
        You can use this tool to click on an element on the page. For instance, if there are multiple variants of a product, you can use this tool to click on each variant and learn more about the different variants. 
        You must specify a CSS selector which selects exactly one element on the page - if your selector returns more than one element this function will fail and you will receive an error.
        If this function succeeds then it will return the currently rendered HTML.

        The element you want to click on should actually exist on the page - you shouldn't try to guess selectors or click on elements that you don't know are there. If you try to click on an invalid selector then this function will fail and you will receive an error.

        You should only click on elements that you think will lead to more information that you need to learn - clicking on a random div isn't going to change the web page, but a button might.
                                   
        You should not use this tool to navigate away from the page, i.e. you should not try to go to the next page of search results using this tool, or back to a directory page.

        Similar to when you visited the page, you will only be shown a small part of the website after clicking on the element. You will be told which chunk of html you are looking at, and you will need to use the tools again to learn more information. Your colleagues will be given the other chunks.
    </click_element_information>

    <visit_page_information>
        You can use this tool to visit a new web page. This page must be on the same subdomain as the original URL you were passed, or this function will fail.
        If this function succeeds then it will return the currently rendered HTML.

        You'll only need to use this tool once, at the beginning of the scraping process, to visit the initial page.
        Do not use this tool more than once, or you will receive an error.
    </visit_page_information>

    <complete_information>
        The complete tool should be used in the final step of the scraping process, when you have learned all the information you need.
        You must return all the data that you found from the website in a JSON format. You do not have to find all the data - whatever you find will be passed on to your supervisor to be processed.
        You should structure the data in a way that makes sense for the objects that you are trying to model. Do not just return a markdown string or a list of strings - you should return a JSON object with keys that model the domain appropriately.

        {% if data_schema %}
        You will shortly be shown a JSON schema for the data that you need to return - if your returned data doesn't match this schema then you will be shown an error and you will need to try again.
        {% endif %}

        Try to fill out the data as much as possible, but if you're convinced that some piece of information doesn't exist or can't be found then just leave it out.
    </complete_information>
</tool_information>

{% if data_schema %}
<data_schema_information>
    {% if data_schema %}
    Here is a JSON schema for the data that you need to return from the website:

    {{ data_schema }}
    {% else %}
    There is no specific structure that you need to return the data as, but you should return as much information as possible in a structured format that properly represents the objects that your colleague has asked for, or you feel are the best way to model the page.
    {% endif %}

    Remember that you are only being shown part of the website at a time, so you only need to partially fill out the schema. Your supervisor will stitch together all of the data from all of the colleagues to create a complete dataset.
</data_schema_information>
{% endif %}
                                   
The URL that you need to scrape is: {{ url }}
Begin.
"""
)

system_message_template = Template(
    """\
<assistant_information>
    You are an administrative assistant whose job is to scrape relevant information from a website, which will be later used for a variety of purposes.
    You're in a team of other assistants who are also scraping the same website, and you will need to work together to scrape the entire website. You each get given a small part of the website to scrape.
    It's okay for you to only find part of the information that you need - your colleagues will find the rest and your supervisor will stitch it all together.

    Because you are an assistant and because websites can be very large, you will only be shown a small part of the website at a time - {{ HTML_CHUNK_SIZE }} tokens worth to be precise.
    You will also be told more details about the tools you have available to you, and how to use them.

    {% if instructions %}
    Your colleague, who has asked for this data to be procured, has also provided you with some instructions and context which you should follow:
                                   
    {{ instructions }}{% endif %}

    You should only use the content response for your thoughts and planning, you must always use at least one tool in all of your interactions.
    Try to be thorough and learn as much information as possible, and use your response to think about what information you might still be able to learn by clicking around.
</assistant_information>

<tool_information>
    You have been given access to two tools: `get_chunk`, `complete`.
                                   
    <get_chunk_information>
        You can use this tool to get your chunk of the web page. 

        You'll only need to use this tool once, at the beginning of the scraping process, to get your chunk.
        Do not use this tool more than once, or you will receive an error.
    </get_chunk_information>

    <complete_information>
        The complete tool should be used in the final step of the scraping process, when you have learned all the information you need.
        {% if data_schema %}
        You will shortly be shown a JSON schema for the data that you need to return - if your returned data doesn't match this schema then you will be shown an error and you will need to try again.
        {% endif %}

        Try to fill out the data as much as possible, but if you're convinced that some piece of information doesn't exist or can't be found then just leave it out.
    </complete_information>
</tool_information>

{% if data_schema %}
<data_schema_information>
    {% if data_schema %}
    Here is a JSON schema for the data that you need to return from the website:

    {{ data_schema }}
    {% else %}
    There is no specific structure that you need to return the data as, but you should return as much information as possible in a structured format that properly represents the objects that your colleague has asked for, or you feel are the best way to model the page.
    {% endif %}

    Remember that you are only being shown part of the website at a time, so you only need to partially fill out the schema. Your supervisor will stitch together all of the data from all of the colleagues to create a complete dataset.
</data_schema_information>
{% endif %}
                                   
The URL that you need to scrape is: {{ url }}
Begin.
"""
)


@dataclass
class StructRequestChunkPromptContext:
    chunk: StructRequestChunk

    def format_tools(self) -> List[Dict[str, Any]]:
        return [
            # {
            #     "type": "function",
            #     "function": {
            #         "name": "click_element",
            #         "description": "Click an element on the currently rendered page. You must specify a CSS selector which selects exactly one element on the page - if your selector returns more than one element this function will fail and you will receive an error. If this function succeeds then it will return the currently rendered HTML.",
            #         "parameters": {
            #             "type": "object",
            #             "properties": {
            #                 "selector": {
            #                     "type": "string",
            #                     "description": "The CSS selector of the button you want to click on",
            #                 },
            #             },
            #             "required": ["selector"],
            #             "additionalProperties": False,
            #         },
            #     },
            # },
            # {
            #     "type": "function",
            #     "function": {
            #         "name": "visit_page",
            #         "description": "Visit a new web page. This page must be on the same subdomain as the original URL you were passed, or this function will fail. If this function succeeds then it will return the currently rendered HTML",
            #         "parameters": {
            #             "type": "object",
            #             "properties": {
            #                 "url": {
            #                     "type": "string",
            #                     "description": "The URL that you want to visit.",
            #                 },
            #             },
            #             "required": ["url"],
            #             "additionalProperties": False,
            #         },
            #     },
            # },
            {
                "type": "function",
                "function": {
                    "name": "get_chunk",
                    "strict": True,
                    "description": "Get your chunk of the web page.",
                    "parameters": {
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "additionalProperties": False,
                    },
                },
            },
            {
                "type": "function",
                "function": {
                    "name": "complete",
                    "strict": True,
                    "description": "Complete the scraping process. You should only use this function when you have learned all the information you need.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "results": {
                                "type": "object",
                                "description": "All of the data that you have found from the website. This is not optional, and should simply be an empty object if you can't find anything at all. You do not have to find all the data - whatever you find will be passed on to your supervisor to be processed. This must be a JSON object and should have keys which model the domain appropriately.",
                            },
                        },
                        "required": ["results"],
                        "additionalProperties": False,
                    },
                },
            },
        ]

    def format_prompt(self) -> List[ChatMessage]:
        context = {}

        context["url"] = self.chunk.request.url
        context["chunk_index"] = self.chunk.chunk_index

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
        ] + [self._convert_to_chat_message(message) for message in self.chunk.messages.order_by("created_at").all()]

        prompt = [m for m in prompt if m is not None]

        return prompt

    def _convert_to_chat_message(self, message: StructRequestMessage) -> Optional[ChatMessage]:
        message_type = message.message_type

        if message_type == StructRequestMessageType.USER:
            return ChatMessage(
                role=ChatMessageType.USER,
                content=json.dumps(message.content, indent=4),
            )

        if message_type == StructRequestMessageType.ASSISTANT:
            return ChatMessage(
                role=ChatMessageType.ASSISTANT,
                content=json.dumps(message.content, indent=4),
                tool_calls=[ChatMessageToolCall(**tool_call) for tool_call in message.tool_calls] if message.tool_calls else None,
            )

        if message_type == StructRequestMessageType.ASSISTANT_TOOL_RESPONSE:
            return ChatMessage(
                role=ChatMessageType.TOOL,
                content=json.dumps(message.content["results"]),
                tool_call_id=message.content["tool_call_id"],
            )

        logger.error(f"Unknown message type: {message_type}")


combine_chunks_system_message = Template(
    """\
<assistant_information>
    You are the supervisor of a team of administrative assistants who are scraping relevant information from a website, which will be later used for a variety of purposes.
    Each assistant has been given a small part of the website to scrape, and you will need to stitch together all of the data that they have collected to create a complete dataset.

    You must use the complete function to return a consolidated JSON object, representing all of the data that the assistants have found.
    You should think carefully about how to structure the data and whether there are any contradictions in the chunks that you need to resolve (if there are, you should use your best judgement to resolve them) or any partial results that you need to merge.
    Try to make the finally outputted data clean and structured, and make sure that it is in a format that is easy to work with.
</assistant_information>

<tool_information>
    You have been given access to one tool: `complete`.

    <complete_information>
        The complete tool should be used in the final step of the scraping process, when all of the assistants have learned all the information they need.
        {% if data_schema %}
        You will shortly be shown a JSON schema for the data that you need to return - if your returned data doesn't match this schema then you will be shown an error and you will need to try again.
        {% endif %}
    </complete_information>
</tool_information>

<chunks>
    Here are the chunks of data that the assistants have found:
    {% for chunk in chunks %}
    <chunk>
        {{ chunk }}
    </chunk>

    {% endfor %}
</chunks>

Begin.
"""
)


@dataclass
class StructRequestCombineChunksPromptContext:
    request: StructRequest

    def format_tools(self) -> List[Dict[str, Any]]:
        return [
            {
                "type": "function",
                "function": {
                    "name": "complete",
                    "description": "Complete the task by passing the consolidated data from all of the chunks as a JSON object.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "" "results": {
                                "type": "object",
                                "description": "The combined data from all of the chunks. You must return a JSON object which has keys that model the domain appropriately, and you must include this as the results parameter.",
                            },
                        },
                        "required": ["results"],
                        "additionalProperties": False,
                    },
                },
            },
        ]

    def format_prompt(self) -> List[ChatMessage]:
        context = {}

        context["chunks"] = [json.dumps(c, indent=4) for c in self.request.chunks.values_list("results", flat=True) if c is not None]

        prompt = [
            ChatMessage(
                role=ChatMessageType.SYSTEM,
                content=combine_chunks_system_message.render(
                    Context(
                        context,
                        autoescape=False,
                    ),
                ),
            ),
        ]

        return prompt


class StructService:
    def __init__(self):
        self.openai_client = openai.OpenAI(
            api_key=OPENAI_API_KEY,
        )
        self.tokenizer = tiktoken.encoding_for_model(OPENAI_MODEL)

    def chunk_html(self, html_text: str):
        tokens = self.tokenizer.encode(html_text)
        chunks = []

        for i in range(0, len(tokens), HTML_CHUNK_SIZE):
            chunk_tokens = tokens[i : i + HTML_CHUNK_SIZE]
            chunks.append(self.tokenizer.decode(chunk_tokens))

        return chunks

    def _click_element(self, struct_chunk: StructRequest, selector: str) -> Result[str, List[str]]:
        try:
            response = requests.post(
                BROWSER_URL,
                json={
                    "url": struct_chunk.request.url,
                    "selector": selector,
                },
            )

            results = response.json()
            with open("output.html", "w") as f:
                f.write(results.get("html", ""))
            html_chunks = self.chunk_html(results.get("html", ""))

            return Result.Ok(html_chunks[0])
        except Exception as e:
            logger.error(f"Failed to click element {selector}: {e}")
            return Result.Err(e)

    def _load_page_html_chunks(self, url: str) -> Result[str, List[str]]:
        try:
            response = requests.post(
                BROWSER_URL,
                json={
                    "url": url,
                },
            )

            results = response.json()

            with open("output.html", "w") as f:
                f.write(results.get("html", ""))

            html_chunks = self.chunk_html(results.get("html", ""))

            # Print the chunk sizes using the token count:
            for chunk in html_chunks:
                print(f"Chunk size: {len(self.tokenizer.encode(chunk))}")

            return Result.Ok(html_chunks)
        except Exception as e:
            logger.error(f"Failed to load page html {url}: {e}")
            return Result.Err(e)

    def initialize(
        self,
        url: str,
        owner: Profile,
        instructions: Optional[str],
        data_schema: Optional[str],
    ) -> StructRequest:
        struct_request = StructRequest.objects.create(
            url=url,
            owner=owner,
            instructions=instructions,
            data_schema=data_schema,
        )

        return struct_request

    def _advance_prompt(self, prompt_messages: List[ChatMessage], tools: List[Any]) -> Result[ChatCompletion, str]:
        last_exception = None
        for _ in range(NUM_RETRIES):
            try:
                start_time = time.time()

                response = self.openai_client.chat.completions.create(
                    model=OPENAI_MODEL,
                    messages=[message.to_dict() for message in prompt_messages],
                    tools=tools,
                    # temperature=0.0,
                    # response_format={"type": "json_object"},
                )

                logger.info(f"Time taken to get complete response: {time.time() - start_time}")
                return Result.Ok(response)

            except Exception as e:
                logger.warning(f"Invalid response: {e}")
                last_exception = e
                continue

        logger.error(f"Failed to advance after {NUM_RETRIES} retries")
        return Result.Err(f"Failed to advance after {NUM_RETRIES} retries: {last_exception}")

    def _run(self, url: str, instructions: Optional[str] = None, data_schema: Optional[str] = None) -> StructRequest:
        try:
            owner = Profile.objects.first()

            struct_request = self.initialize(url, owner, instructions, data_schema)
            self.advance(struct_request)

            print(struct_request.id)
            return struct_request
        except Exception as e:
            print(struct_request.id)
            raise e

    def advance(self, struct_request: StructRequest) -> StructRequest:
        initial_tool_call_id = str(uuid4())
        initial_page_html_chunks_result = self._load_page_html_chunks(struct_request.url)

        if not initial_page_html_chunks_result.is_ok():
            # StructRequestMessage.objects.create(
            #     chunk=struct_request,
            #     content={
            #         "tool_call_id": initial_tool_call_id,
            #         "results": initial_page_html_chunks_result.error(),
            #     },
            #     message_type=StructRequestMessageType.ASSISTANT_TOOL_RESPONSE,
            # )

            struct_request.status = StructRequestStatus.FAILED
            struct_request.save(update_fields=["status"])

            return struct_request

        with ThreadPoolExecutor() as executor:
            futures = []
            for chunk_index, chunk in enumerate(initial_page_html_chunks_result.value()):
                struct_chunk = StructRequestChunk.objects.create(
                    request=struct_request,
                    chunk_index=chunk_index,
                    chunk=chunk,
                )

                StructRequestMessage.objects.create(
                    chunk=struct_chunk,
                    tool_calls=[
                        {
                            "name": "get_chunk",
                            # "arguments": json.dumps({"url": struct_request.url}),
                            "arguments": "{}",
                            "id": initial_tool_call_id,
                        }
                    ],
                    message_type=StructRequestMessageType.ASSISTANT,
                )

                StructRequestMessage.objects.create(
                    chunk=struct_chunk,
                    content={
                        "tool_call_id": initial_tool_call_id,
                        "results": {
                            "chunk_index": chunk_index,
                            "html": initial_page_html_chunks_result.value()[chunk_index],
                        },
                    },
                    message_type=StructRequestMessageType.ASSISTANT_TOOL_RESPONSE,
                )

                futures.append(executor.submit(self._advance_chunk, struct_chunk))

            # Wait for all threads to complete
            for future in futures:
                future.result()

        self._combine_chunks(struct_request)

    def _combine_chunks(self, struct_request: StructRequest):
        non_empty_chunks = struct_request.chunks.exclude(results=None)

        if non_empty_chunks.count() == 0:
            logger.info("No chunks have been completed")
            struct_request.status = StructRequestStatus.FAILED
            struct_request.save(update_fields=["status"])
            return struct_request

        if non_empty_chunks.count() == 1:
            logger.info("Only one chunk has been completed")
            struct_request.results = non_empty_chunks.first().results
            struct_request.status = StructRequestStatus.SUCCEEDED
            struct_request.save(update_fields=["results", "status"])
            return struct_request

        prompt_context = StructRequestCombineChunksPromptContext(request=struct_request)

        prompt = prompt_context.format_prompt()
        tools = prompt_context.format_tools()

        for _ in range(MAX_NUM_INTERACTIONS):
            next_message_result = self._advance_prompt(prompt, tools)

            if next_message_result.is_err():
                logger.error(f"Error combining chunks: {next_message_result.error()}")
                struct_request.status = StructRequestStatus.FAILED
                struct_request.save(update_fields=["status"])
                return struct_request

            next_message_value = next_message_result.value().choices[0]
            print(next_message_value.message)

            tool_calls = next_message_value.message.tool_calls

            prompt.append(
                ChatMessage(
                    role=ChatMessageType.ASSISTANT,
                    content=json.dumps(next_message_value.message.content, indent=4),
                    tool_calls=[
                        ChatMessageToolCall(
                            id=tool_call.id,
                            name=tool_call.function.name,
                            arguments=tool_call.function.arguments,
                        )
                        for tool_call in tool_calls
                    ]
                    if tool_calls
                    else None,
                )
            )

            if not tool_calls:
                logger.error("No tool calls")
                struct_request.status = StructRequestStatus.FAILED
                struct_request.save(update_fields=["status"])
                return struct_request

            for tool_call in tool_calls:
                if tool_call.function.name == "complete":
                    arguments = json.loads(tool_call.function.arguments)
                    results = arguments.get("results")

                    if not results or len(results) == 0:
                        logger.error("No results provided")
                        prompt.append(
                            ChatMessage(
                                role=ChatMessageType.TOOL,
                                content={
                                    "results": "You must provide the 'results' key to complete the chunk",
                                },
                                tool_call_id=tool_call.id,
                            )
                        )

                    else:
                        struct_request.results = results
                        struct_request.status = StructRequestStatus.SUCCEEDED
                        struct_request.save(update_fields=["results", "status"])

                        return struct_request

    def _advance_chunk(self, struct_chunk: StructRequestChunk) -> StructRequestChunk:
        prompt_context = StructRequestChunkPromptContext(chunk=struct_chunk)

        for _ in range(MAX_NUM_INTERACTIONS):
            logger.info("Advancing request")

            prompt = prompt_context.format_prompt()
            tools = prompt_context.format_tools()

            next_message_id = str(uuid4())
            next_message_result = self._advance_prompt(prompt, tools)

            if next_message_result.is_err():
                StructRequestMessage.objects.create(
                    chunk=struct_chunk,
                    content={
                        "tool_call_id": next_message_id,
                        "results": next_message_result.error(),
                    },
                    message_type=StructRequestMessageType.ERROR,
                )

                break

            next_message_value = next_message_result.value().choices[0]

            tool_calls = next_message_value.message.tool_calls

            StructRequestMessage.objects.create(
                chunk=struct_chunk,
                content=next_message_value.message.content,
                tool_calls=[
                    {
                        "name": tool_call.function.name,
                        "arguments": tool_call.function.arguments,
                        "id": tool_call.id,
                    }
                    for tool_call in tool_calls
                ]
                if tool_calls
                else None,
                message_type=StructRequestMessageType.ASSISTANT,
            )

            if not tool_calls:
                logger.info("No tool calls")
                continue

            for tool_call in tool_calls:
                function_name = tool_call.function.name
                arguments = json.loads(tool_call.function.arguments)

                if function_name == "click_element":
                    logger.info("Clicking chunk element")

                    new_html_result = self._click_element(struct_chunk, arguments.get("selector"))

                    if not new_html_result.is_ok():
                        StructRequestMessage.objects.create(
                            chunk=struct_chunk,
                            content={
                                "tool_call_id": tool_call.id,
                                "results": new_html_result.error(),
                            },
                            message_type=StructRequestMessageType.ERROR,
                        )

                        struct_chunk.status = StructRequestStatus.FAILED
                        struct_chunk.save(update_fields=["status"])

                        return struct_chunk

                    StructRequestMessage.objects.create(
                        chunk=struct_chunk,
                        content={
                            "tool_call_id": tool_call.id,
                            "results": new_html_result.value(),
                        },
                        message_type=StructRequestMessageType.ASSISTANT_TOOL_RESPONSE,
                    )

                elif function_name == "visit_page" or function_name == "get_chunk":
                    StructRequestMessage.objects.create(
                        chunk=struct_chunk,
                        content={
                            "tool_call_id": tool_call.id,
                            "results": "This function has already been called and cannot be called again",
                        },
                        message_type=StructRequestMessageType.ASSISTANT_TOOL_RESPONSE,
                    )

                elif function_name == "complete":
                    logger.info("Completing chunk")
                    print(arguments)

                    data = arguments.get("results")

                    print(data)

                    if not data or len(data) == 0:
                        logger.info("No data provided")
                        StructRequestMessage.objects.create(
                            chunk=struct_chunk,
                            content={
                                "tool_call_id": tool_call.id,
                                "results": "You must provide the 'results' key to complete the chunk",
                            },
                            message_type=StructRequestMessageType.ASSISTANT_TOOL_RESPONSE,
                        )
                    else:
                        struct_chunk.results = data
                        struct_chunk.save(update_fields=["results"])

                        return struct_chunk

                else:
                    logger.error(f"Unknown function: {function_name}")
                    StructRequestMessage.objects.create(
                        chunk=struct_chunk,
                        content={
                            "tool_call_id": tool_call.id,
                            "results": f"Unknown function: {function_name}",
                        },
                        message_type=StructRequestMessageType.ERROR,
                    )
