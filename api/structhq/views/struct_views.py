from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from structhq.lib.has_workspace_permission import HasWorkspace
from structhq.services.struct_service import StructService
from structhq.tasks.advance_struct_request_task import advance_struct_request


class StructCreateView(APIView):
    permission_classes = [HasWorkspace, permissions.IsAuthenticated]

    struct_service: StructService = None

    def post(self, request):
        owner = request.profile

        url = request.data.get("url", None)
        if not url:
            return Response(data="url is required", status=status.HTTP_400_BAD_REQUEST)

        instructions = request.data.get("instructions", None)
        data_schema = request.data.get("data_schema", None)

        struct_request = self.struct_service.initialize(
            owner=owner,
            url=url,
            instructions=instructions,
            data_schema=data_schema,
        )

        advance_struct_request.apply_async(
            kwargs={"struct_request_id": str(struct_request.id)},
        )

        return Response(data=struct_request.id, status=status.HTTP_201_CREATED)
