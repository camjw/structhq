from celery import shared_task
from structhq.models.workflow import WorkflowRequest
from structhq.services import workflow_request_title_service


@shared_task(bind=True, acks_late=True)
def enrich_workflow_request(self, workflow_request_id):
    workflow_request = WorkflowRequest.objects.get(id=workflow_request_id)

    if workflow_request.title is not None and workflow_request.title != "":
        return

    generated_title = workflow_request_title_service.generate_title(workflow_request)
    workflow_request.title = generated_title
    workflow_request.save()
