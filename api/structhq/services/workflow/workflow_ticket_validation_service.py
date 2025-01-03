import json
from typing import Any, Dict, List

from loguru import logger

from structhq.models.workflow import WorkflowFieldType, WorkflowOutcome, WorkflowRequest


class WorkflowTicketValidationService:
    def __init__(self):
        pass

    def _is_condition_met(self, condition_value: List[str], field_data: Any, field_type: WorkflowFieldType) -> bool:
        if field_type == WorkflowFieldType.SHORT_TEXT or field_type == WorkflowFieldType.LONG_TEXT:
            return field_data in condition_value

        if field_type == WorkflowFieldType.SELECT:
            return field_data in condition_value

        if field_type == WorkflowFieldType.MULTISELECT:
            return len(set(field_data).intersection(set(condition_value))) > 0

        logger.info(f"Field type {field_type} is not supported for conditions")
        return False

    def _validate_conditions(self, data: Dict[str, Any], outcome: WorkflowOutcome) -> Dict[str, str]:
        errors = {}

        for field in outcome.fields.all():
            field_id = str(field.id)
            field_data = data.get(field_id)

            if field_data:
                for condition in field.conditions.all():
                    condition_value = condition.value
                    condition_requires = condition.requires

                    if not self._is_condition_met(condition_value, field_data, field.field_type):
                        continue

                    required_data = [data.get(str(x), None) for x in condition_requires]

                    if not all(required_data):
                        errors[field_id] = f"Field value {field_data} is set to {json.dumps(field_data)}, so requires fields {[str(x) for x in condition_requires]} to be set"

        return errors

    def validate_ticket_data(self, request: WorkflowRequest, ticket_data: Dict[str, Any]) -> Dict[str, str]:
        errors = {}

        outcome_id = ticket_data.get("outcome_id")
        data = ticket_data.get("data")

        outcome = WorkflowOutcome.objects.filter(id=outcome_id, workflow__workspace=request.owner.workspace).first()

        if not outcome:
            errors["outcome_id"] = "Invalid outcome ID"
            return errors

        for field in outcome.fields.all():
            field_id = str(field.id)
            field_data = data.get(field_id)

            if field.required and not field_data:
                errors[field_id] = "This field is required"

        # Want to find all keys in the ticket_data that are not in the outcome fields
        all_data_keys = list(data.keys())
        all_field_ids = [str(x) for x in outcome.fields.values_list("id", flat=True)]

        keys_which_are_not_fields = [key for key in all_data_keys if key not in all_field_ids]

        for key in keys_which_are_not_fields:
            errors[key] = "This field is not valid for the outcome - the keys in the data object MUST be the ids of the fields in the outcome"

        if len(errors) > 0:
            return errors

        errors = self._validate_conditions(data, outcome)

        return errors
