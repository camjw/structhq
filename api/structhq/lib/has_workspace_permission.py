from rest_framework.permissions import BasePermission


class HasWorkspace(BasePermission):
    """
    Allows access only when the workspace is set.
    """

    def has_permission(self, request, view):
        return bool(request.workspace) and bool(request.profile)
