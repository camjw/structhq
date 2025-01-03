import json
from dataclasses import dataclass
from typing import Dict, List, Optional

import tiktoken

from structhq.models.chat import ChatMessageType, ChatProvider


@dataclass
class ChatMessageToolCall:
    id: str
    arguments: str
    name: str

    def to_dict(self) -> Dict[str, str]:
        return {
            "id": self.id,
            "type": "function",
            "function": {"arguments": self.arguments, "name": self.name},
        }


@dataclass
class ChatMessage:
    role: ChatMessageType
    content: Optional[str] = None
    tool_calls: Optional[List[ChatMessageToolCall]] = None
    tool_call_id: Optional[str] = None

    def to_dict(self) -> Dict[str, str]:
        if self.role == ChatMessageType.TOOL:
            return {"role": self.role.value, "content": self.content, "tool_call_id": self.tool_call_id}

        if self.tool_calls:
            return {"role": self.role.value, "tool_calls": [tool_call.to_dict() for tool_call in self.tool_calls]}

        return {"role": self.role.value, "content": self.content}

    def __str__(self):
        return f"{self.role.value}: {self.content}"


class ChatEncodingRouter:
    @classmethod
    def get_encoding_for_provider(cls, provider: ChatProvider):
        # CAMERON: Only GPT-4o is supported for now
        return tiktoken.encoding_for_model("gpt-4o")


def count_tokens(messages: List[ChatMessage], provider: ChatProvider) -> int:
    encoding = ChatEncodingRouter.get_encoding_for_provider(provider)

    num_tokens = 0
    for message in messages:
        num_tokens += 4  # every message follows <im_start>{role/name}\n{content}<im_end>\n
        num_tokens += len(encoding.encode(message.role.value))
        num_tokens += len(encoding.encode(message.content))

    num_tokens += 2  # every reply is primed with <im_start>assistant
    return num_tokens


def count_tokens_for_string(x: str, provider: ChatProvider) -> int:
    encoding = ChatEncodingRouter.get_encoding_for_provider(provider)

    return len(encoding.encode(x))
