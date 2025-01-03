from dataclasses import dataclass
from typing import List


@dataclass
class BaseEmbeddingResponse:
    execution_time: float
    embedding: List[float]


class BaseEmbeddingAdapter:
    def get_embedding(
        self,
        text: str,
    ) -> BaseEmbeddingResponse:
        raise NotImplementedError
