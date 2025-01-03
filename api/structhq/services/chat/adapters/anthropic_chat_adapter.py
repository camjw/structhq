from typing import Any, Dict, Iterable, List, Optional

from anthropic import Anthropic
from django.utils import timezone
from loguru import logger

from structhq.models.chat import ChatBackendUsageRecord, ChatMessageType, ChatProvider
from structhq.services.chat.adapters.base import BaseChatAdapter, BaseStreamingChatResponse, ChatMode
from structhq.services.chat.utils.chat_message import (
    ChatMessage,
    count_tokens,
)

ANTHROPIC_DEFAULT_SEED = 42

ANTHROPIC_DEFAULT_TEMPERATURE = 0.5

ANTHROPIC_DEFAULT_MAX_TOKENS = 8192


class AnthropicChatStreamingResponse(BaseStreamingChatResponse):
    def __init__(
        self,
        messages: List[ChatMessage],
        client: Anthropic,
        metadata: Optional[Dict[str, Any]],
        model: str,
    ):
        self.messages = messages
        self.client = client
        self.metadata = metadata if metadata is not None else {}
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

        system_messages = [message for message in self.messages if message.role == ChatMessageType.SYSTEM]

        system_message = system_messages[0] if system_messages else None

        non_system_messages = [message for message in self.messages if message.role != ChatMessageType.SYSTEM]

        with self.client.messages.stream(
            model=self.model,
            messages=[message.to_dict() for message in non_system_messages],
            max_tokens=ANTHROPIC_DEFAULT_MAX_TOKENS,
            system=system_message.content if system_message else None,
        ) as response_stream:
            partial_response_accumulator = ""

            for content in response_stream.text_stream:
                if content:
                    partial_response_accumulator += content

                    yield partial_response_accumulator

            execution_time = (timezone.now() - start).total_seconds()

        ChatBackendUsageRecord.objects.create(
            backend=ChatProvider.ANTHROPIC,
            start_time=self.start,
            end_time=timezone.now(),
            prompt_tokens=count_tokens(self.messages, provider=ChatProvider.ANTHROPIC),
            completion_tokens=count_tokens(
                [
                    ChatMessage(
                        role=ChatMessageType.ASSISTANT,
                        content=partial_response_accumulator,
                    )
                ],
                provider=ChatProvider.ANTHROPIC,
            ),
            messages=[message.to_dict() for message in self.messages],
            completion=partial_response_accumulator,
            metadata=self.metadata,
        )

        self.finished = True
        self.complete_response = partial_response_accumulator

        logger.info(f"Anthropic streaming execution time: {execution_time} seconds")

    def get_complete_response(self) -> str:
        if not self.finished:
            logger.info("You called get_complete_response() on an unfinished response, waiting for completion...")
            for _ in self.get_partials_stream():
                pass

            ChatBackendUsageRecord.objects.create(
                backend=ChatProvider.ANTHROPIC,
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
                    provider=ChatProvider.ANTHROPIC,
                ),
                messages=[message.to_dict() for message in self.messages],
                completion=self.complete_response,
                metadata=self.metadata,
            )

        return self.complete_response.encode("unicode_escape").decode("utf-8")


class AnthropicChatAdapter(BaseChatAdapter):
    model: str
    anthropic_client: Anthropic

    def __init__(self, api_key: str, model: str):
        self.anthropic_client = Anthropic(
            api_key=api_key,
        )

        self.model = model

    def get_streaming_response(
        self,
        messages: List[ChatMessage],
        _mode: Optional[ChatMode] = ChatMode.JSON,  # I don't think this does anything for Anthropic
        metadata: Optional[Dict[str, Any]] = None,
    ) -> AnthropicChatStreamingResponse:
        return AnthropicChatStreamingResponse(
            messages,
            client=self.anthropic_client,
            metadata=metadata,
            model=self.model,
        )
