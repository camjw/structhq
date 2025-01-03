import os
from typing import Any, Dict, Iterable, List, Optional

from django.utils import timezone
from loguru import logger
from openai import OpenAI

from structhq.models.chat import ChatBackendUsageRecord, ChatMessageType, ChatProvider
from structhq.services.chat.adapters.base import BaseChatAdapter, BaseStreamingChatResponse, ChatMode
from structhq.services.chat.utils.chat_message import (
    ChatMessage,
    count_tokens,
)

DEFAULT_OPENAI_API_KEY = os.environ.get("openai:api_key")

DEFAULT_OPENAI_MODEL = "gpt-4o"

OPENAI_SEED = 42

OPENAI_DEFAULT_TEMPERATURE = 0.5


class OpenAIChatStreamingResponse(BaseStreamingChatResponse):
    def __init__(
        self,
        messages: List[ChatMessage],
        client: OpenAI,
        mode: ChatMode,
        metadata: Optional[Dict[str, Any]],
        model: str,
    ):
        self.messages = messages
        self.client = client
        self.metadata = metadata if metadata is not None else {}
        self.mode = mode
        self.model = model

        self.finished = False
        self.complete_response: str = ""

    def get_partials_stream(
        self,
        logging_context: Optional[Dict[str, Any]] = None,
    ) -> Iterable:
        if logging_context is None:
            logging_context = {}

        if self.finished:
            logger.error("get_partials_stream - Cannot call get_partials_stream() on a finished response")
            raise StopIteration

        start = timezone.now()
        self.start = start

        response_format = {"response_format": {"type": "json_object"}} if self.mode == ChatMode.JSON else {}

        self.response = self.client.chat.completions.create(
            model=self.model,
            messages=[message.to_dict() for message in self.messages],
            temperature=OPENAI_DEFAULT_TEMPERATURE,
            seed=OPENAI_SEED,
            stream=True,
            **response_format,
        )

        partial_response_accumulator = ""

        for chunk in self.response:
            chunk_message = chunk.choices[0].delta
            content = chunk_message.content

            if content:
                partial_response_accumulator += content

                yield partial_response_accumulator

        execution_time = (timezone.now() - start).total_seconds()

        ChatBackendUsageRecord.objects.create(
            backend=ChatProvider.OPENAI,
            start_time=self.start,
            end_time=timezone.now(),
            prompt_tokens=count_tokens(self.messages, provider=ChatProvider.OPENAI),
            completion_tokens=count_tokens(
                [
                    ChatMessage(
                        role=ChatMessageType.ASSISTANT,
                        content=partial_response_accumulator,
                    )
                ],
                provider=ChatProvider.OPENAI,
            ),
            messages=[message.to_dict() for message in self.messages],
            completion=partial_response_accumulator,
            metadata=self.metadata,
        )

        self.finished = True
        self.complete_response = partial_response_accumulator

        logger.info(f"OpenAI streaming execution time: {execution_time} seconds")

    def get_complete_response(self) -> str:
        if not self.finished:
            logger.info("You called get_complete_response() on an unfinished response, waiting for completion...")
            for _ in self.get_partials_stream():
                pass

            ChatBackendUsageRecord.objects.create(
                backend=ChatProvider.OPENAI,
                start_time=self.start,
                end_time=timezone.now(),
                prompt_tokens=count_tokens(self.messages, provider=ChatProvider.OPENAI),
                completion_tokens=count_tokens(
                    [
                        ChatMessage(
                            role=ChatMessageType.ASSISTANT,
                            content=self.complete_response,
                        )
                    ],
                    provider=ChatProvider.OPENAI,
                ),
                messages=[message.to_dict() for message in self.messages],
                completion=self.complete_response,
                metadata=self.metadata,
            )

        return self.complete_response


class OpenAIChatAdapter(BaseChatAdapter):
    model: str
    openai_client: OpenAI

    def __init__(self, api_key: str, model: str):
        self.openai_client = OpenAI(
            api_key=api_key,
        )

        self.model = model

    @classmethod
    def build_default(cls):
        return cls(
            api_key=DEFAULT_OPENAI_API_KEY,
            model=DEFAULT_OPENAI_MODEL,
        )

    def get_streaming_response(
        self,
        messages: List[ChatMessage],
        mode: Optional[ChatMode] = ChatMode.JSON,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> OpenAIChatStreamingResponse:
        return OpenAIChatStreamingResponse(
            messages,
            client=self.openai_client,
            mode=mode,
            metadata=metadata,
            model=self.model,
        )
