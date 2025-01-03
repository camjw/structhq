from django.utils.functional import SimpleLazyObject

from structhq.models.profile import Profile
from structhq.models.workspace import Workspace


class WorkspaceMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def _get_workspace(self, request):
        workspace_id = request.headers.get("X-Workspace-Id", None)

        if not workspace_id or not request.user.is_authenticated:
            return None

        try:
            workspace = Workspace.objects.get(id=workspace_id)

            if request.user in workspace.members.all():
                return workspace
            else:
                return None
        except Workspace.DoesNotExist:
            return None

    def _get_profile(self, request):
        workspace_id = request.headers.get("X-Workspace-Id", None)

        if not workspace_id or not request.user.is_authenticated:
            return None

        try:
            workspace = Workspace.objects.get(id=workspace_id)

            if request.user in workspace.members.all():
                return Profile.objects.get(workspace=workspace, user=request.user)
            else:
                return None
        except Workspace.DoesNotExist:
            return None

    def __call__(self, request):
        request.workspace = SimpleLazyObject(lambda: self._get_workspace(request))
        request.profile = SimpleLazyObject(lambda: self._get_profile(request))

        response = self.get_response(request)
        return response
