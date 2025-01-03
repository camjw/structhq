from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from structhq.models.workspace import Workspace, WorkspaceEmailDomain
from structhq.serializers.user_serializers import UserSerializer
from structhq.serializers.workspace_serializers import WorkspaceSerializer


class CurrentUserDetailsView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(UserSerializer(request.user).data)


class UserWorkspacesView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(WorkspaceSerializer(Workspace.objects.filter(members=request.user), many=True).data)


class UserCanJoinWorkspacesView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        email = request.user.email

        email_domain = email.split("@")[1]

        matching_workspace_domains = WorkspaceEmailDomain.objects.filter(domain__iexact=email_domain)
        matching_workpaces = [domain.workspace for domain in matching_workspace_domains]

        return Response(WorkspaceSerializer(matching_workpaces, many=True).data)
