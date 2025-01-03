import enum

from django.db import models

from structhq.models.base_model import BaseModel
from structhq.models.profile import Profile
from structhq.models.workflow import Workflow


class AuditLogEventType(models.TextChoices):
    CREATED = "created"
    UPDATED = "updated"
    DELETED = "deleted"
    PUBLISHED = "published"
    UNPUBLISHED = "unpublished"


class AuditLogEventObjectType(enum.Enum):
    WORKFLOW = "workflow"


class AuditLogEvent(BaseModel):
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="audit_events")

    object_workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE, related_name="audit_events", null=True, blank=True)

    event_type = models.TextField(choices=AuditLogEventType.choices)
    event_data = models.JSONField()

    class Meta:
        verbose_name = "Audit Event"
        verbose_name_plural = "Audit Events"
        ordering = ["-created_at"]

        indexes = [
            models.Index(fields=["owner", "object_workflow"], name="audit_log_workflow_idx"),
        ]

    def save(self, *args, **kwargs):
        object_presences = [
            self.object_workflow,
        ]

        not_none_count = sum(1 for obj in object_presences if obj is not None)
        if not_none_count > 1:
            raise AssertionError("Audit Log Event can only be associated with one object")

        return super().save(*args, **kwargs)

    @property
    def object(self):
        if self.object_workflow is not None:
            return self.object_workflow

        raise AssertionError("Audit Log Event object is not set")

    @property
    def object_type(self):
        if self.object_workflow is not None:
            return AuditLogEventObjectType.WORKFLOW

        raise AssertionError("Audit Log Event object is not set")
