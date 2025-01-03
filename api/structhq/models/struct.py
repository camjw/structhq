from django.db import models

from structhq.models.base_model import BaseModel
from structhq.models.profile import Profile


class StructRequestStatus(models.TextChoices):
    PENDING = "pending"
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"


class StructRequest(BaseModel):
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="struct_requests")

    url = models.TextField()
    instructions = models.TextField(null=True, blank=True)
    data_schema = models.JSONField(null=True, blank=True)

    status = models.TextField(choices=StructRequestStatus.choices, default=StructRequestStatus.PENDING)
    results = models.JSONField(null=True, blank=True)

    class Meta:
        verbose_name = "Struct Request"
        verbose_name_plural = "Struct Requests"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.url} - {self.owner.full_name}"


class StructRequestChunk(BaseModel):
    request = models.ForeignKey(StructRequest, on_delete=models.CASCADE, related_name="chunks")
    chunk_index = models.IntegerField()
    chunk = models.TextField()

    results = models.JSONField(null=True, blank=True)

    class Meta:
        verbose_name = "Struct Request Chunk"
        verbose_name_plural = "Struct Request Chunks"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.request.url} - {self.owner.full_name}"


class StructRequestMessageType(models.TextChoices):
    USER = "user"
    ASSISTANT = "assistant"
    ASSISTANT_TOOL_RESPONSE = "assistant_tool_response"
    ERROR = "error"


class StructRequestMessage(BaseModel):
    chunk = models.ForeignKey(StructRequestChunk, on_delete=models.CASCADE, related_name="messages")

    content = models.JSONField(null=True, blank=True)
    tool_calls = models.JSONField(null=True, blank=True)
    message_type = models.TextField(choices=StructRequestMessageType.choices)

    class Meta:
        verbose_name = "Struct Request Message"
        verbose_name_plural = "Struct Request Messages"
        ordering = ["-created_at"]
