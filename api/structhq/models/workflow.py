from django.contrib.postgres.fields import ArrayField
from django.db import models

from structhq.models.base_model import BaseModel
from structhq.models.fields.json_field import JSONField
from structhq.models.profile import Profile


class WorkflowResourceType(models.TextChoices):
    PDF = "pdf"
    CSV = "csv"


class WorkflowResource(BaseModel):
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="workflow_resources", null=True, blank=True)

    title = models.TextField()
    description = models.TextField()
    resource_file = models.FileField(upload_to="workflow_resources", null=True, blank=True)
    resource_type = models.TextField(choices=WorkflowResourceType.choices)

    name_column = models.TextField(null=True, blank=True)
    all_columns = models.JSONField(null=True, blank=True)

    is_published = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Workflow Resource"
        verbose_name_plural = "Workflow Resources"
        ordering = ["-created_at"]


class Workflow(BaseModel):
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE)
    workspace = models.ForeignKey("Workspace", on_delete=models.CASCADE, related_name="workflows")

    title = models.TextField()
    subtitle = models.TextField(null=True, blank=True)
    explanation = models.TextField(null=True, blank=True)

    published_at = models.DateTimeField(null=True, blank=True)
    unpublished_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = "Workflow"
        verbose_name_plural = "Workflows"
        ordering = ["-created_at"]


class WorkflowFieldType(models.TextChoices):
    SHORT_TEXT = "short_text"
    LONG_TEXT = "long_text"
    DATE = "date"
    SELECT = "select"
    MULTISELECT = "multiselect"
    NUMBER = "number"
    BOOLEAN = "boolean"
    URL = "url"


class WorkflowFieldItemOptionsType(models.TextChoices):
    MODEL = "model"
    VALUES = "values"


class WorkflowOutcome(BaseModel):
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE, related_name="outcomes")

    title = models.TextField()
    explanation = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Workflow Outcome"
        verbose_name_plural = "Workflow Outcomes"
        ordering = ["created_at"]


class WorkflowField(BaseModel):
    outcome = models.ForeignKey(WorkflowOutcome, on_delete=models.CASCADE, related_name="fields")

    title = models.TextField()
    subtitle = models.TextField(null=True, blank=True)
    explanation = models.TextField(null=True, blank=True)
    required = models.BooleanField(default=False)

    field_type = models.TextField(choices=WorkflowFieldType.choices)

    options_type = models.TextField(choices=WorkflowFieldItemOptionsType.choices)
    options_values = JSONField(null=True, blank=True)

    class Meta:
        verbose_name = "Workflow Field"
        verbose_name_plural = "Workflow Fields"
        ordering = ["created_at"]


class WorkflowFieldCondition(BaseModel):
    field = models.ForeignKey(WorkflowField, on_delete=models.CASCADE, related_name="conditions")

    value = ArrayField(models.TextField(), default=list)
    requires = ArrayField(models.UUIDField(), default=list)

    class Meta:
        verbose_name = "Workflow Field Condition"
        verbose_name_plural = "Workflow Field Conditions"
        ordering = ["created_at"]


class WorkflowHookType(models.TextChoices):
    WEBHOOK = "webhook"
    EMAIL = "email"
    ZENDESK = "zendesk"
    HARRI = "harri"
    FOURTH = "fourth"
    HUBSPOT = "hubspot"


class WorkflowHook(BaseModel):
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE, related_name="hooks")

    title = models.TextField()
    hook_type = models.TextField(choices=WorkflowHookType.choices, default=WorkflowHookType.WEBHOOK)

    endpoint = models.TextField(null=True, blank=True)
    zendesk_tag = models.TextField(null=True, blank=True)
    is_zendesk_integration_hook = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Workflow Hook"
        verbose_name_plural = "Workflow Hooks"
        ordering = ["-created_at"]


class WorkflowRequest(BaseModel):
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE)

    system_message = models.TextField(null=True, blank=True)

    title = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Workflow Request"
        verbose_name_plural = "Workflow Requests"
        ordering = ["-created_at"]

        indexes = [
            models.Index(fields=["owner"], name="workflow_request_owner"),
        ]


class WorkflowRequestMessageType(models.TextChoices):
    USER_TEXT = "user_text"
    ASSISTANT_TEXT = "assistant_text"
    ASSISTANT_TOOL_CALL = "assistant_tool_call"
    ASSISTANT_TOOL_RESPONSE = "assistant_tool_response"


class WorkflowRequestMessage(BaseModel):
    request = models.ForeignKey(WorkflowRequest, on_delete=models.CASCADE, related_name="messages")

    content = models.JSONField()
    message_type = models.TextField(choices=WorkflowRequestMessageType.choices)

    class Meta:
        verbose_name = "Workflow Request Message"
        verbose_name_plural = "Workflow Request Messages"
        ordering = ["-created_at"]


class WorkflowTicketStatus(models.TextChoices):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CANCELLED = "cancelled"


class WorkflowRequestTicketData(BaseModel):
    workspace = models.ForeignKey("Workspace", on_delete=models.CASCADE, related_name="workflow_request_tickets")
    request = models.ForeignKey(WorkflowRequest, on_delete=models.CASCADE, related_name="created_tickets")
    outcome = models.ForeignKey(WorkflowOutcome, on_delete=models.CASCADE, related_name="request_tickets")

    results = JSONField()

    submitted_data = JSONField(null=True, blank=True)
    submitted_at = models.DateTimeField(null=True, blank=True)
    submitted_by = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="submitted_tickets", null=True, blank=True)

    class Meta:
        verbose_name = "Workflow Request Ticket Data"
        verbose_name_plural = "Workflow Request Ticket Data"
        ordering = ["-created_at"]


class WorkflowRequestTicketHookResult(BaseModel):
    ticket = models.ForeignKey(WorkflowRequestTicketData, on_delete=models.CASCADE, related_name="hook_results")
    hook = models.ForeignKey(WorkflowHook, on_delete=models.CASCADE, related_name="hook_results")

    status_code = models.IntegerField()
    response_data = JSONField()

    class Meta:
        verbose_name = "Workflow Request Ticket Hook Result"
        verbose_name_plural = "Workflow Request Ticket Hook Results"
        ordering = ["-created_at"]
