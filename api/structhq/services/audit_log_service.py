import json
from typing import Dict

from rest_framework.utils.encoders import JSONEncoder

from structhq.models.audit import AuditLogEvent, AuditLogEventType
from structhq.models.profile import Profile
from structhq.models.workflow import Workflow


class AuditLogService:
    def __init__(self):
        pass

    def _prepare_serialized_data(self, serialized_data: Dict) -> Dict:
        return json.loads(json.dumps(serialized_data, cls=JSONEncoder))

    def log_workflow_create_event(self, profile: Profile, workflow: Workflow, serialized_data: Dict) -> AuditLogEvent:
        prepared_data = self._prepare_serialized_data(serialized_data)

        return AuditLogEvent.objects.create(
            owner=profile,
            object_workflow=workflow,
            event_type=AuditLogEventType.CREATED,
            event_data=prepared_data,
        )

    def log_workflow_update_event(self, profile: Profile, workflow: Workflow, before_serialized_data: Dict, after_serialized_data: Dict) -> AuditLogEvent:
        prepared_before_data = self._prepare_serialized_data(before_serialized_data)
        prepared_after_data = self._prepare_serialized_data(after_serialized_data)

        return AuditLogEvent.objects.create(
            owner=profile,
            object_workflow=workflow,
            event_type=AuditLogEventType.UPDATED,
            event_data={"before": prepared_before_data, "after": prepared_after_data},
        )
