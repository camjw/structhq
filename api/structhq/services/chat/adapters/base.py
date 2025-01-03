import enum
from typing import Any, Dict, Iterable, List, Optional

from structhq.services.chat.utils.chat_message import ChatMessage


class ChatMode(enum.Enum):
    JSON = "json"
    XML = "xml"


class BaseStreamingChatResponse:
    def get_partials_stream(self) -> Iterable:
        raise NotImplementedError

    def get_complete_response(self) -> str:
        raise NotImplementedError


class BaseChatAdapter:
    def get_streaming_response(
        self,
        messages: List[ChatMessage],
        mode: ChatMode,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> BaseStreamingChatResponse:
        raise NotImplementedError
