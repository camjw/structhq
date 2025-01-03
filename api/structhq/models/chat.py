from django.db import models


class ChatProvider(models.TextChoices):
    OPENAI = "openai", "OpenAI"
    ANTHROPIC = "anthropic", "Anthropic"


class ChatMessageType(models.TextChoices):
    USER = "user"
    ASSISTANT = "assistant"
    TOOL = "tool"
    SYSTEM = "system"


class ChatBackendUsageRecord(models.Model):
    backend = models.TextField(choices=ChatProvider.choices)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    prompt_tokens = models.IntegerField()
    completion_tokens = models.IntegerField()
    messages = models.JSONField()
    completion = models.TextField()
    metadata = models.JSONField()

    class Meta:
        verbose_name = "Chat Usage Record"
        verbose_name_plural = "Chat Usage Records"
        ordering = ["-start_time"]
