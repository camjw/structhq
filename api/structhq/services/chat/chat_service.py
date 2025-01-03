import json
from typing import Dict, List, Optional

import jsonschema

from structhq.models.chat import ChatProvider
from structhq.models.workspace import WorkspaceChatBackend
from structhq.services.chat.adapters.anthropic_chat_adapter import AnthropicChatAdapter
from structhq.services.chat.adapters.base import BaseChatAdapter, BaseStreamingChatResponse, ChatMode
from structhq.services.chat.adapters.openai_chat_adapter import OpenAIChatAdapter
from structhq.services.chat.utils.chat_message import ChatMessage


class ChatService:
    def __init__(self):
        pass

    def _get_adapter(self, backend: Optional[WorkspaceChatBackend]) -> BaseChatAdapter:
        if backend is None:
            return OpenAIChatAdapter.build_default()

        if backend.provider == ChatProvider.OPENAI:
            return OpenAIChatAdapter(
                api_key=backend.api_key,
                model=backend.model,
            )

        if backend.provider == ChatProvider.ANTHROPIC:
            return AnthropicChatAdapter(
                api_key=backend.api_key,
                model=backend.model,
            )

        else:
            raise NotImplementedError(f"Unsupported chat backend: {backend.provider}")

    def get_streaming_response(self, messages: List[ChatMessage], backend: Optional[WorkspaceChatBackend], mode: ChatMode) -> BaseStreamingChatResponse:
        chat_adapter = self._get_adapter(backend)

        return chat_adapter.get_streaming_response(messages, mode)

    def get_completed_response(self, messages: List[ChatMessage], backend: Optional[WorkspaceChatBackend], mode: ChatMode) -> str:
        chat_adapter = self._get_adapter(backend)

        streaming_response = chat_adapter.get_streaming_response(messages, mode)

        return streaming_response.get_complete_response()

    def try_get_completed_response_json(self, messages: List[ChatMessage], backend: Optional[WorkspaceChatBackend], json_schema: Dict):
        complete_response_str = self.get_completed_response(messages, backend, mode=ChatMode.JSON)

        complete_response_object = json.loads(complete_response_str)

        jsonschema.validate(complete_response_object, json_schema)

        return complete_response_object
