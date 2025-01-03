from django.utils.functional import SimpleLazyObject

from structhq.models.workspace import WorkspaceAPIKey


class APIKeyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def _get_api_workspace(self, request):
        structhq_api_key = request.headers.get("structhq-api-key", None)

        if not structhq_api_key:
            return None

        try:
            workspace_api_key = WorkspaceAPIKey.objects.get(key=structhq_api_key)

            return workspace_api_key.workspace

        except WorkspaceAPIKey.DoesNotExist:
            return None

    def __call__(self, request):
        request.api_workspace = SimpleLazyObject(lambda: self._get_api_workspace(request))
        request.structhq_api_key = SimpleLazyObject(lambda: request.headers.get("structhq-api-key", None))

        response = self.get_response(request)
        return response
