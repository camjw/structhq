from rest_framework.permissions import BasePermission


class HasAPIKey(BasePermission):
    """
    Allows access only when the workspace is set by an API.
    """

    def has_permission(self, request, view):
        return bool(request.api_workspace) and bool(request.structhq_api_key)
