from structhq.services.audit_log_service import AuditLogService
from structhq.services.chat.chat_service import ChatService
from structhq.services.embedding.embedding_service import EmbeddingService
from structhq.services.emit_service import EmitService
from structhq.services.partial_message_parser_service import PartialMessageParserService
from structhq.services.struct_service import StructService
from structhq.services.workflow.workflow_request_service import WorkflowRequestService
from structhq.services.workflow.workflow_request_title_service import WorkflowRequestTitleService
from structhq.services.workflow.workflow_ticket_validation_service import WorkflowTicketValidationService

chat_service = ChatService()

embedding_service = EmbeddingService()

partial_message_parser_service = PartialMessageParserService()

emit_service = EmitService()


audit_log_service = AuditLogService()

workflow_ticket_validation_service = WorkflowTicketValidationService()

workflow_request_service = WorkflowRequestService(
    partial_message_parser_service=partial_message_parser_service,
    workflow_ticket_validation_service=workflow_ticket_validation_service,
)

workflow_request_title_service = WorkflowRequestTitleService(chat_service=chat_service)

struct_service = StructService()
