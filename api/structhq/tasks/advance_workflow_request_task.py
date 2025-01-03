from django.core.cache import cache

from celery import shared_task
from structhq.models.workflow import WorkflowRequest
from structhq.services import workflow_request_service


@shared_task(bind=True, acks_late=True)
def advance_workflow_request(self, workflow_request_id):
    workflow_request = WorkflowRequest.objects.get(id=workflow_request_id)
    cache_key = f"workflow_request:{workflow_request_id}:messages"

    cache.delete(cache_key)
    cache.delete(f"workflow_request:{workflow_request_id}:completed")

    for partial_message in workflow_request_service.advance(workflow_request):
        cached_messages = cache.get(cache_key, [])
        cached_messages.append(partial_message)
        cache.set(cache_key, cached_messages, timeout=300)

    cache.set(
        f"workflow_request:{workflow_request_id}:completed",
        True,
        timeout=300,
    )
