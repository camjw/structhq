import json

import humps
from django.db.models.fields.related import ManyToManyRel, ManyToOneRel, OneToOneRel
from rest_framework.utils.encoders import JSONEncoder

from structhq.models.workflow import WorkflowRequestMessage, WorkflowRequestTicketData
from structhq.serializers.workflow_serializers import WorkflowRequestMessageSerializer, WorkflowRequestTicketDataSerializer


class EmitService:
    def __init__(self):
        pass

    def _get_model_fields(self, model):
        model_fields = [field.name for field in model._meta.fields]

        related_fields = [
            relation.get_accessor_name()
            for relation in model._meta.related_objects
            if isinstance(
                relation,
                (
                    ManyToOneRel,
                    OneToOneRel,
                    ManyToManyRel,
                ),
            )
        ]

        return model_fields + related_fields

    def emit_workflow_request_message(self, workflow_request_message: WorkflowRequestMessage) -> str:
        serialized_workflow_request_message = json.dumps(
            humps.camelize(WorkflowRequestMessageSerializer(workflow_request_message).data),
            cls=JSONEncoder,
        )

        return f"event: workflow_request_message\ndata: {serialized_workflow_request_message}\n\n"

    def emit_workflow_request_ticket_data(self, workflow_request_ticket_data: WorkflowRequestTicketData) -> str:
        serialized_data = WorkflowRequestTicketDataSerializer(workflow_request_ticket_data).data

        original_data = serialized_data["results"]["data"]
        data_copy = serialized_data.copy()

        camelized = humps.camelize(data_copy)
        camelized["results"]["data"] = original_data

        serialized_workflow_request_ticket_data = json.dumps(
            camelized,
            cls=JSONEncoder,
        )

        return f"event: workflow_request_ticket_data\ndata: {serialized_workflow_request_ticket_data}\n\n"
