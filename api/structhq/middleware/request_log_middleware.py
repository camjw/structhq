import os
import time
import uuid

from django.http import StreamingHttpResponse
from loguru import logger


class RequestLogMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if os.getenv("TEST") is not None:
            return self.get_response(request)

        # Create a request ID
        request_id = str(uuid.uuid4())

        # Add context to all loggers in all views
        with logger.contextualize(request_id=request_id):
            request.start_time = time.time()

            response = self.get_response(request)

            elapsed = time.time() - request.start_time

            if isinstance(response, StreamingHttpResponse):
                response_size = "streaming"
            else:
                response_size = len(response.content) if response.content else "-"

            # After the response is received
            logger.bind(
                path=request.path,
                method=request.method,
                status_code=response.status_code,
                response_size=response_size,
                elapsed=elapsed,
            ).info(
                "'{method}': '{path}'",
                method=request.method,
                path=request.path,
            )

            response["X-Request-ID"] = request_id

            return response
