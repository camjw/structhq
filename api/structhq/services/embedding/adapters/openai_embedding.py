import os
from datetime import datetime

import openai
import urllib3
from loguru import logger
from openai import OpenAI
from retry import retry

from structhq.services.embedding.adapters.base import BaseEmbeddingResponse

TEXT_EMBEDDING_ADA_002_MODEL_NAME = "text-embedding-ada-002"

OPENAI_API_KEY = os.environ.get("openai:api_key")


class OpenAIEmbeddingAdapter:
    client: openai.OpenAI

    def __init__(
        self,
    ) -> None:
        self.client = OpenAI(
            api_key=OPENAI_API_KEY,
        )

    @retry((urllib3.exceptions.ProtocolError, ConnectionResetError), tries=3, delay=1, backoff=2, logger=logger)  # type: ignore
    def get_embedding(
        self,
        text: str,
    ) -> BaseEmbeddingResponse:
        start = datetime.now()

        text = text.replace("\n", " ")

        embedding = (
            self.client.embeddings.create(
                input=[text],
                model=TEXT_EMBEDDING_ADA_002_MODEL_NAME,
            )
            .data[0]
            .embedding
        )

        end = datetime.now()

        return BaseEmbeddingResponse(
            execution_time=(end - start).total_seconds(),
            embedding=embedding,
        )
