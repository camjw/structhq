from structhq.models.chat import ChatProvider
from structhq.services.embedding.adapters.base import BaseEmbeddingAdapter, BaseEmbeddingResponse
from structhq.services.embedding.adapters.openai_embedding import OpenAIEmbeddingAdapter


class EmbeddingService:
    def __init__(self):
        self.openai_embedding_adapter = OpenAIEmbeddingAdapter()

    def _get_adapter(self, provider: ChatProvider) -> BaseEmbeddingAdapter:
        if provider == ChatProvider.OPENAI:
            return self.openai_embedding_adapter

        else:
            raise NotImplementedError(f"Unsupported chat provider: {provider}")

    def get_embedding(self, text: str, provider: ChatProvider) -> BaseEmbeddingResponse:
        embedding_adapter = self._get_adapter(provider)

        return embedding_adapter.get_embedding(text)
