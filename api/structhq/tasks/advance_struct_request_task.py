from celery import shared_task
from structhq.models.struct import StructRequest, StructRequestStatus
from structhq.services import struct_service


@shared_task(bind=True, acks_late=True)
def advance_struct_request(self, struct_request_id):
    struct_request = StructRequest.objects.get(id=struct_request_id)
    struct_request.status = StructRequestStatus.RUNNING
    struct_request.save(update_fields=["status"])

    struct_service.advance(struct_request)
