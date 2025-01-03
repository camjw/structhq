from dataclasses import dataclass
from typing import Any, Dict, List, Type

from rest_framework.serializers import ModelSerializer

from structhq.services.chat.utils.chat_message import ChatMessage


@dataclass
class BasePromptContext:
    @classmethod
    def serializers(cls) -> Dict[str, Type[ModelSerializer]]:
        return {}

    def format_prompt(self) -> List[ChatMessage]:
        raise NotImplementedError("format_prompt method must be implemented in child classes")

    @classmethod
    def from_dict(cls, data: Dict[str, Any]):
        return cls(**data)

    def __str__(self) -> str:
        return prompt_to_string(self.format_prompt())


def prompt_to_string(prompt: List[ChatMessage]):
    return "\n\n".join([f"{message.role.value.upper()}:\n{message.content}" for message in prompt])
