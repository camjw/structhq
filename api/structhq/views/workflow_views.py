from time import sleep

from django.core.cache import cache
from django.db import transaction
from django.http import StreamingHttpResponse
from django.shortcuts import get_object_or_404
from django.utils import timezone
from loguru import logger
from rest_framework import permissions, status, viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView
from silk.profiling.profiler import silk_profile

from structhq.lib.has_workspace_permission import HasWorkspace
from structhq.models.audit import AuditLogEvent
from structhq.models.workflow import (
    Workflow,
    WorkflowField,
    WorkflowHook,
    WorkflowOutcome,
    WorkflowRequest,
    WorkflowRequestMessage,
    WorkflowRequestMessageType,
    WorkflowRequestTicketData,
)
from structhq.serializers.audit_serializers import AuditLogEventSerializer
from structhq.serializers.workflow_serializers import (
    WorkflowFieldCondition,
    WorkflowFieldConditionSerializer,
    WorkflowFieldSerializer,
    WorkflowHookSerializer,
    WorkflowOutcomeSimpleSerializer,
    WorkflowRequestMessageSerializer,
    WorkflowRequestSerializer,
    WorkflowRequestTicketDataSerializer,
    WorkflowSerializer,
    WorkflowSimpleSerializer,
)
from structhq.services import audit_log_service
from structhq.services.emit_service import EmitService
from structhq.services.workflow.workflow_request_service import WorkflowRequestService
from structhq.tasks.advance_workflow_request_task import advance_workflow_request
from structhq.tasks.send_workflow_hooks_task import send_workflow_hooks


class WorkflowViewSet(viewsets.ModelViewSet):
    serializer_class = WorkflowSerializer
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get_queryset(self):
        workspace_workflows = Workflow.objects.filter(workspace=self.request.workspace)

        if self.action == "list" or self.action == "retrieve" or self.action == "partial_update":
            return workspace_workflows.prefetch_related(
                "hooks",
                "outcomes",
                "outcomes__fields",
                "outcomes__fields__conditions",
                "zendesk_form",
            )

        return workspace_workflows

    def partial_update(self, request, *args, **kwargs):
        with transaction.atomic():
            workflow_data = request.data
            outcome_data = workflow_data.pop("outcomes", [])
            hook_data = workflow_data.pop("hooks", [])

            workflow = self.get_object()
            before_serialized_data = WorkflowSerializer(workflow).data

            workflow_serializer = WorkflowSimpleSerializer(workflow, data=workflow_data, partial=True)

            if not workflow_serializer.is_valid():
                logger.error(workflow_serializer.errors)
                raise ValidationError(workflow_serializer.errors)

            workflow_serializer.save()

            outcome_ids = [o["id"] for o in outcome_data]
            outcomes_to_delete = WorkflowOutcome.objects.filter(workflow=workflow).exclude(id__in=outcome_ids)
            outcomes_to_delete.delete()

            for outcome_datum in outcome_data:
                field_data = outcome_datum.pop("fields")

                outcome_id = outcome_datum.pop("id")
                WorkflowOutcome.objects.update_or_create(id=outcome_id, defaults={**outcome_datum, "workflow": workflow})

                outcome = WorkflowOutcome.objects.get(id=outcome_id)

                field_ids = [f["id"] for f in field_data]
                fields_to_delete = WorkflowField.objects.filter(outcome=outcome).exclude(id__in=field_ids)
                fields_to_delete.delete()

                for field_datum in field_data:
                    options_model_id = field_datum.pop("options_model", None)
                    _zendesk_form_field = field_datum.pop("zendesk_form_field", None)  # CAMERON: This can't be updated
                    conditions_data = field_datum.pop("conditions", [])

                    field_id = field_datum.pop("id")

                    WorkflowField.objects.update_or_create(
                        id=field_id,
                        defaults={
                            **field_datum,
                            "outcome": outcome,
                            "options_model_id": options_model_id,
                        },
                    )

                    for condition_datum in conditions_data:
                        condition_id = condition_datum.pop("id")

                        WorkflowFieldCondition.objects.update_or_create(
                            id=condition_id,
                            defaults={**condition_datum, "field_id": field_id},
                        )

            hook_ids = [h["id"] for h in hook_data]
            hooks_to_delete = WorkflowHook.objects.filter(workflow=workflow).exclude(id__in=hook_ids)
            hooks_to_delete.delete()

            for hook_datum in hook_data:
                hook_id = hook_datum.pop("id")
                WorkflowHook.objects.update_or_create(id=hook_id, defaults={**hook_datum, "workflow": workflow})

        workflow.refresh_from_db()
        after_serialized_data = WorkflowSerializer(workflow).data

        audit_log_service.log_workflow_update_event(request.profile, workflow, before_serialized_data, after_serialized_data)

        return Response(WorkflowSerializer(workflow).data, status=status.HTTP_201_CREATED)


class WorkflowCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        with transaction.atomic():
            workflow_data = request.data
            outcome_data = workflow_data.pop("outcomes", [])

            hook_data = workflow_data.pop("hooks", [])

            workflow_serializer = WorkflowSimpleSerializer(
                data={
                    **workflow_data,
                    "owner": str(request.profile.id),
                    "workspace": str(request.profile.workspace.id),
                }
            )

            if not workflow_serializer.is_valid():
                logger.error(workflow_serializer.errors)
                raise ValidationError(workflow_serializer.errors)

            workflow = workflow_serializer.save()

            for outcome_datum in outcome_data:
                field_data = outcome_datum.pop("fields")

                workflow_outcome_serializer = WorkflowOutcomeSimpleSerializer(data={**outcome_datum, "workflow": str(workflow.id)})

                if not workflow_outcome_serializer.is_valid():
                    logger.error(workflow_outcome_serializer.errors)
                    raise ValidationError(workflow_outcome_serializer.errors)

                workflow_outcome = workflow_outcome_serializer.save()

                for field_datum in field_data:
                    options_model_id = field_datum.pop("options_model", None)
                    conditions_data = field_datum.pop("conditions", [])

                    workflow_field_serializer = WorkflowFieldSerializer(
                        data={
                            **field_datum,
                            "outcome": str(workflow_outcome.id),
                            "options_model_id": options_model_id,
                        }
                    )

                    if not workflow_field_serializer.is_valid():
                        logger.error(workflow_field_serializer.errors)
                        raise ValidationError(workflow_field_serializer.errors)

                    workflow_field_serializer.save()

                    for condition_datum in conditions_data:
                        workflow_field_condition_serializer = WorkflowFieldConditionSerializer(
                            data={
                                **condition_datum,
                                "field_id": str(workflow_field_serializer.instance.id),
                            }
                        )

                        if not workflow_field_condition_serializer.is_valid():
                            logger.error(workflow_field_condition_serializer.errors)
                            raise ValidationError(workflow_field_condition_serializer.errors)

                        workflow_field_condition_serializer.save()

            for hook_datum in hook_data:
                workflow_hook_serializer = WorkflowHookSerializer(data={**hook_datum, "workflow": str(workflow.id)})

                if not workflow_hook_serializer.is_valid():
                    logger.error(workflow_hook_serializer.errors)
                    raise ValidationError(workflow_hook_serializer.errors)

                workflow_hook_serializer.save()

            workflow.refresh_from_db()
            serialized_data = WorkflowSerializer(workflow).data

            audit_log_service.log_workflow_create_event(request.profile, workflow, serialized_data)

            return Response(serialized_data, status=status.HTTP_201_CREATED)


class WorkflowListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workflows = Workflow.objects.filter(workspace=request.workspace).prefetch_related(
            "hooks",
            "outcomes",
            "outcomes__fields",
            "outcomes__fields__conditions",
            "zendesk_form",
        )

        return Response(WorkflowSerializer(workflows, many=True).data)


class WorkflowAuditEventView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request, workflow_id):
        workflow = get_object_or_404(Workflow, id=workflow_id, workspace=request.workspace)
        workflow_audit_events = AuditLogEvent.objects.filter(object__workflow=workflow)

        return Response(AuditLogEventSerializer(workflow_audit_events, many=True).data)


class WorkflowDeleteView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def delete(self, request):
        ids_to_delete = request.data.get("ids", [])
        Workflow.objects.filter(id__in=ids_to_delete, workspace=request.workspace).delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


MAX_TIMEOUT = 5 * 60  # 5 minutes
MAX_SLEEP_TIME = 0.1  # 100ms


class WorkflowRequestInitializeView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]
    workflow_request_service: WorkflowRequestService = None
    emit_service: EmitService = None

    @silk_profile("WorkflowRequestInitializeView")
    def post(self, request):
        initial_message = request.data.get("message")
        new_request_id = request.data.get("new_request_id")
        new_message_id = request.data.get("new_message_id")

        workflow_request = self.workflow_request_service.initialize(
            owner=request.profile,
            message=initial_message,
            new_request_id=new_request_id,
            new_message_id=new_message_id,
        )

        advance_workflow_request.apply_async(
            kwargs={
                "workflow_request_id": str(workflow_request.id),
            }
        )

        def event_stream(workflow_request_id):
            cache_key = f"workflow_request:{workflow_request_id}:messages"

            timeout_counter = 0
            sleep_time = 0.01  # 10ms
            break_counter = 0

            while timeout_counter < MAX_TIMEOUT:
                cached_messages = cache.get(cache_key, [])

                if cached_messages:
                    message = cached_messages.pop(0)
                    cache.set(cache_key, cached_messages)
                    yield self.emit_service.emit_workflow_request_message(message)
                    sleep_time = 0.01
                else:
                    sleep(sleep_time)
                    sleep_time = min(sleep_time * 1.5, MAX_SLEEP_TIME)
                    timeout_counter += sleep_time

                if cache.get(f"workflow_request:{workflow_request_id}:completed"):
                    break_counter += 1

                    if break_counter > 10:
                        # TODO: Emit some sort of "completed" event?
                        break

        response = StreamingHttpResponse(
            streaming_content=event_stream(str(workflow_request.id)),
            content_type="text/event-stream",
        )

        response["Cache-Control"] = "no-cache"

        return response


class WorkflowRequestAdvanceView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]
    workflow_request_service: WorkflowRequestService = None
    emit_service: EmitService = None

    @silk_profile("WorkflowRequestAdvanceView")
    def post(self, request):
        workflow_request_id = request.data.get("request_id")
        new_message_id = request.data.get("message_id")
        message = request.data.get("message")

        workflow_request = get_object_or_404(
            WorkflowRequest,
            id=workflow_request_id,
        )

        WorkflowRequestMessage.objects.create(
            id=new_message_id,
            request=workflow_request,
            content=message,
            message_type=WorkflowRequestMessageType.USER_TEXT,
        )

        advance_workflow_request.apply_async(
            kwargs={
                "workflow_request_id": str(workflow_request.id),
            }
        )

        def event_stream(workflow_request_id):
            cache_key = f"workflow_request:{workflow_request_id}:messages"

            timeout_counter = 0
            sleep_time = 0.01  # 10ms
            break_counter = 0

            while timeout_counter < MAX_TIMEOUT:
                cached_messages = cache.get(cache_key, [])

                if cached_messages:
                    message = cached_messages.pop(0)
                    cache.set(cache_key, cached_messages)

                    yield self.emit_service.emit_workflow_request_message(message)

                    if message.content.get("results", {}).get("ticket_data", None) is not None:
                        print("EMITTING TICKET DATA")

                        ticket_data_id = message.content["results"]["ticket_data"]
                        ticket_data = WorkflowRequestTicketData.objects.get(id=ticket_data_id)

                        yield self.emit_service.emit_workflow_request_ticket_data(ticket_data)

                    sleep_time = 0.01
                else:
                    sleep(sleep_time)
                    sleep_time = min(sleep_time * 1.5, MAX_SLEEP_TIME)
                    timeout_counter += sleep_time

                if cache.get(f"workflow_request:{workflow_request_id}:completed"):
                    # CAMERON: this is some fuckery - basically just handles an annoying race condition.
                    break_counter += 1

                    if break_counter > 10:
                        # TODO: Emit some sort of "completed" event?
                        break

        response = StreamingHttpResponse(
            streaming_content=event_stream(str(workflow_request.id)),
            content_type="text/event-stream",
        )

        response["Cache-Control"] = "no-cache"

        return response


class WorkflowRequestRetrieveView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request, workflow_request_id):
        workflow_request = get_object_or_404(
            WorkflowRequest,
            id=workflow_request_id,
        )

        serialized_workflow_request = WorkflowRequestSerializer(workflow_request)

        return Response(serialized_workflow_request.data)


class WorkflowRequestMessagesView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request, workflow_request_id):
        workflow_request = get_object_or_404(
            WorkflowRequest,
            id=workflow_request_id,
        )

        messages = workflow_request.messages.order_by("created_at").all()

        serialized_messages = WorkflowRequestMessageSerializer(messages, many=True)

        return Response(serialized_messages.data)


class WorkflowRequestListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        requests = WorkflowRequest.objects.filter(owner__workspace=self.request.workspace).prefetch_related(
            "created_tickets",
            "created_tickets__hook_results",
            "created_tickets__outcome",
        )

        serialized_messages = WorkflowRequestSerializer(requests, many=True)

        return Response(serialized_messages.data)


class WorkflowRequestViewSet(viewsets.ModelViewSet):
    serializer_class = WorkflowRequestSerializer
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get_queryset(self):
        return WorkflowRequest.objects.filter(workspace=self.request.workspace)


class WorkflowRequestTicketDataViewSet(viewsets.ModelViewSet):
    serializer_class = WorkflowRequestTicketDataSerializer
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get_queryset(self):
        return WorkflowRequestTicketData.objects.filter(workspace=self.request.workspace).prefetch_related("outcome")


class WorkflowRequestTicketSubmitView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def post(self, request, ticket_id):
        ticket_data = WorkflowRequestTicketData.objects.get(id=ticket_id, workspace=request.workspace)

        ticket_data.submitted_data = request.data
        ticket_data.submitted_at = timezone.now()
        ticket_data.submitted_by = request.profile

        ticket_data.save()

        send_workflow_hooks.apply_async(
            kwargs={
                "ticket_data_id": str(ticket_data.id),
            }
        )

        return Response(data=WorkflowRequestTicketDataSerializer(ticket_data).data, status=status.HTTP_201_CREATED)
