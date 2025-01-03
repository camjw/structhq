import requests
from loguru import logger
from requests.auth import HTTPBasicAuth

from celery import shared_task
from structhq.models.workflow import WorkflowHook, WorkflowRequestMessageType, WorkflowRequestTicketData, WorkflowRequestTicketHookResult


def send_workflow_webhook_hook(hook: WorkflowHook, ticket_data: WorkflowRequestTicketData):
    workflow_outcome = ticket_data.outcome
    workflow = workflow_outcome.workflow

    payload = {
        "workflow_id": str(workflow.id),
        "outcome_id": str(workflow_outcome.id),
        "data": ticket_data.submitted_data,
        "profile": {
            "id": str(ticket_data.submitted_by.id),
            "full_name": ticket_data.submitted_by.full_name,
            "email": ticket_data.submitted_by.user.email,
        },
    }

    try:
        response = requests.post(
            hook.url,
            json=payload,
            headers={
                "Content-Type": "application/json",
            },
        )

        status_code = response.status_code
        response_data = response.json()

        WorkflowRequestTicketHookResult.objects.create(
            ticket=ticket_data,
            hook=hook,
            status_code=status_code,
            response_data=response_data,
        )
    except Exception as e:
        logger.error(e)
        WorkflowRequestTicketHookResult.objects.create(
            ticket=ticket_data,
            hook=hook,
            status_code=500,
            response_data={"error": str(e)},
        )


def _get_chat_name_for_message(message):
    if message.message_type == WorkflowRequestMessageType.USER_TEXT:
        return "COLLEAGUE"

    if message.message_type == WorkflowRequestMessageType.ASSISTANT_TEXT:
        return "STRUCTHQ"


def _get_chat_message_content(message):
    if message.message_type == WorkflowRequestMessageType.USER_TEXT:
        return message.content

    if message.message_type == WorkflowRequestMessageType.ASSISTANT_TEXT:
        return message.content["content"]


def send_zendesk_webhook_hook(hook: WorkflowHook, ticket_data: WorkflowRequestTicketData):
    workspace = ticket_data.workspace

    workflow_request = ticket_data.request

    zendesk_subdomain = workspace.zendesk_subdomain
    zendesk_api_key = workspace.zendesk_api_key

    zendesk_email = workspace.zendesk_email

    auth = HTTPBasicAuth(f"{zendesk_email}/token", zendesk_api_key)

    zendesk_url = f"https://{zendesk_subdomain}.zendesk.com/api/v2/tickets.json"

    chat_messages = list(workflow_request.messages.order_by("created_at").all())

    conversation = "\n\n".join(
        [
            f"{_get_chat_name_for_message(message)}: {_get_chat_message_content(message)}"
            for message in chat_messages
            if message.message_type == WorkflowRequestMessageType.USER_TEXT or message.message_type == WorkflowRequestMessageType.ASSISTANT_TEXT
        ]
    )

    payload = {
        "ticket": {
            "subject": f"Workflow Request Ticket #{ticket_data.id}",
            "comment": {"body": conversation},
            "tags": ["structhq", hook.zendesk_tag],
        },
    }

    try:
        response = requests.post(
            zendesk_url,
            json=payload,
            auth=auth,
            headers={
                "Content-Type": "application/json",
            },
        )

        status_code = response.status_code
        response_data = response.json()

        WorkflowRequestTicketHookResult.objects.create(
            ticket=ticket_data,
            hook=hook,
            status_code=status_code,
            response_data=response_data,
        )
    except Exception as e:
        logger.error(e)
        WorkflowRequestTicketHookResult.objects.create(
            ticket=ticket_data,
            hook=hook,
            status_code=500,
            response_data={"error": str(e)},
        )


@shared_task(bind=True)
def send_workflow_hooks(self, ticket_data_id: str):
    ticket_data = WorkflowRequestTicketData.objects.get(id=ticket_data_id)
    workflow_outcome = ticket_data.outcome

    workflow = workflow_outcome.workflow

    for hook in workflow.hooks.all():
        send_workflow_webhook_hook(hook, ticket_data)
