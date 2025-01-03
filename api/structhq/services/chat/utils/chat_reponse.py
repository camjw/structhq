import json
from abc import ABC
from dataclasses import dataclass
from typing import Any, Dict

from structhq.models.chat import ChatProvider

MAX_TOKENS_BY_MODEL = {
    ChatProvider.GPT_4_O.value: 128_000,
}


@dataclass
class BaseChatResponse(ABC):
    model_name: str

    execution_time: float

    total_token_count: int

    finish_reason: str
    """The finish reason. https://platform.chat.com/docs/guides/gpt/chat-completions-response-format"""

    def __json__(self) -> str:
        return json.dumps(self.to_dict())

    def to_dict(self) -> Dict[str, Any]:
        return self.__dict__

    def to_json(self) -> str:
        return self.__json__()

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "BaseChatResponse":
        return cls(**data)

    @classmethod
    def from_json(cls, data: str) -> "BaseChatResponse":
        return cls.from_dict(json.loads(data))


@dataclass
class ChatResponse(BaseChatResponse):
    completion: str


@dataclass
class ChatStructhquredResponse(BaseChatResponse):
    parsed: Dict[str, Any]
