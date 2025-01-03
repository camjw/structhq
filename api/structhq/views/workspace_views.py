import re

from django.shortcuts import get_object_or_404
from django.utils.crypto import get_random_string
from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from structhq.lib.has_workspace_permission import HasWorkspace
from structhq.models.workspace import Workspace, WorkspaceAPIKey, WorkspaceChatBackend, WorkspaceEmailDomain, WorkspaceInvite
from structhq.serializers.user_serializers import UserSerializer
from structhq.serializers.workspace_serializers import (
    WorkspaceAPIKeyOnCreationSerializer,
    WorkspaceAPIKeyPrivateSerializer,
    WorkspaceChatBackendSerializer,
    WorkspaceEmailDomainSerializer,
    WorkspaceInviteSerializer,
    WorkspaceSerializer,
)


class WorkspaceCheckSlugAvailabilityView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        slug = request.GET.get("slug")

        if not slug:
            return Response({"error": "No slug provided"}, status=400)

        return Response({"available": not Workspace.objects.filter(slug=slug.lower()).exists()})


class WorkspaceRetrieveCurrentView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def patch(self, request):
        workspace = request.workspace

        workspace.name = request.data.get("name", workspace.name)
        workspace.slug = request.data.get("slug", workspace.slug)
        workspace.description = request.data.get("description", workspace.description)

        workspace.save()

        return Response(WorkspaceSerializer(workspace).data)

    def delete(self, request):
        workspace = request.workspace

        workspace.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class WorkspaceBySlugView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, slug):
        workspace = get_object_or_404(Workspace, slug=slug)

        if request.user not in workspace.members.all():
            return Response({"error": "You are not a member of this workspace"}, status=status.HTTP_403_FORBIDDEN)

        return Response(WorkspaceSerializer(workspace).data)


class WorkspaceCompleteWelcomeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, workspace_id):
        workspace = get_object_or_404(Workspace, id=workspace_id)

        if request.user not in workspace.members.all():
            return Response({"error": "You are not a member of this workspace"}, status=status.HTTP_403_FORBIDDEN)

        workspace.is_setup_complete = True
        workspace.save()

        profile = request.profile
        profile.subscribe_to_changelog = request.data.get("subscribe_to_changelog", False)
        profile.save()

        return Response(status=status.HTTP_201_CREATED)


class WorkspaceViewSet(viewsets.ModelViewSet):
    queryset = Workspace.objects.all()
    serializer_class = WorkspaceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Workspace.objects.filter(members=self.request.user)

    # Check if the workspace slug is available
    def create(self, request, *args, **kwargs):
        if Workspace.objects.filter(slug=request.data.get("slug").lower()).exists():
            return Response({"error": "Slug already exists"}, status=status.HTTP_409_CONFLICT)

        return super().create(request, *args, **kwargs)

    def perform_create(self, serializer):
        workspace = serializer.save()
        workspace.members.add(self.request.user)
        workspace.save()


class WorkspaceInviteListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workspace_invite_set = WorkspaceInvite.objects.filter(workspace=request.workspace)

        return Response(data=WorkspaceInviteSerializer(workspace_invite_set, many=True).data, status=status.HTTP_200_OK)


class WorkspaceUserListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workspace_members = request.workspace.members.all()

        return Response(data=UserSerializer(workspace_members, many=True).data, status=status.HTTP_200_OK)


class WorkspaceEmailDomainsView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workspace_email_domains = WorkspaceEmailDomain.objects.filter(workspace=request.workspace)

        return Response(
            data=WorkspaceEmailDomainSerializer(workspace_email_domains, many=True).data,
            status=status.HTTP_200_OK,
        )

    def post(self, request):
        workspace = request.workspace

        domain = request.data.get("domain")

        if not re.match(r"^[a-zA-Z0-9.-]*$", domain):
            return Response({"error": "Invalid domain"}, status=status.HTTP_400_BAD_REQUEST)

        workspace_email_domain = WorkspaceEmailDomain.objects.create(
            workspace=workspace,
            domain=domain,
        )

        return Response(data=WorkspaceEmailDomainSerializer(workspace_email_domain).data, status=status.HTTP_201_CREATED)


class WorkspaceEmailDomainRetrieveView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def delete(self, request, domain_id):
        workspace_email_domain = get_object_or_404(WorkspaceEmailDomain, id=domain_id, workspace=request.workspace)
        workspace_email_domain.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class WorkspaceAPIKeyCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def post(self, request):
        workspace = request.workspace

        label = request.data.get("label")

        key = f"sct_api_{get_random_string(length=32)}"

        api_key = WorkspaceAPIKey.objects.create(
            workspace=workspace,
            key=key,
            label=label,
        )

        return Response(data=WorkspaceAPIKeyOnCreationSerializer(api_key).data, status=status.HTTP_201_CREATED)


class WorkspaceAPIKeyListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workspace_api_keys = WorkspaceAPIKey.objects.filter(workspace=request.workspace)

        return Response(data=WorkspaceAPIKeyPrivateSerializer(workspace_api_keys, many=True).data, status=status.HTTP_200_OK)


class WorkspaceAPIKeyDeleteView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def delete(self, request, api_key_id):
        workspace_api_keys = WorkspaceAPIKey.objects.filter(id=api_key_id, workspace=request.workspace)
        workspace_api_keys.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class WorkspaceChatBackendsListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workspace_chat_backends = WorkspaceChatBackend.objects.filter(workspace=request.workspace)

        return Response(data=WorkspaceChatBackendSerializer(workspace_chat_backends, many=True).data, status=status.HTTP_200_OK)


class WorkspaceChatBackendsCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def post(self, request):
        workspace = request.workspace

        name = request.data.get("name")
        provider = request.data.get("provider")
        model = request.data.get("model")
        api_key = request.data.get("api_key")

        workspace_chat_backend = WorkspaceChatBackend.objects.create(
            workspace=workspace,
            name=name,
            provider=provider,
            model=model,
            api_key=api_key,
        )

        return Response(data=WorkspaceChatBackendSerializer(workspace_chat_backend).data, status=status.HTTP_201_CREATED)


class WorkspaceChatBackendsRetrieveView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def delete(self, request, chat_backend_id):
        workspace_chat_backends = WorkspaceChatBackend.objects.filter(id=chat_backend_id, workspace=request.workspace)
        workspace_chat_backends.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, chat_backend_id):
        workspace_chat_backend = get_object_or_404(WorkspaceChatBackend, id=chat_backend_id, workspace=request.workspace)

        workspace_chat_backend.name = request.data.get("name", workspace_chat_backend.name)
        workspace_chat_backend.provider = request.data.get("provider", workspace_chat_backend.provider)
        workspace_chat_backend.model = request.data.get("model", workspace_chat_backend.model)
        workspace_chat_backend.api_key = request.data.get("api_key", workspace_chat_backend.api_key)

        workspace_chat_backend.save()

        return Response(WorkspaceChatBackendSerializer(workspace_chat_backend).data)


class WorkspaceCheckInviteLinkView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        workspace_slug = request.data.get("workspace_slug")
        invite_link_id = request.data.get("invite_link_id")

        workspace = get_object_or_404(Workspace, slug=workspace_slug, invite_link_id=invite_link_id)

        return Response(WorkspaceSerializer(workspace).data)


class WorkspaceAvatarImageView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def post(self, request):
        workspace = request.workspace

        workspace.avatar_image = request.data.get("avatar_image")
        workspace.save()

        return Response(WorkspaceSerializer(workspace).data)


class WorkspaceJoinView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def _user_can_join_workspace(self, request, workspace):
        email_domain = request.user.email.split("@")[1]

        if WorkspaceEmailDomain.objects.filter(workspace=workspace, domain=email_domain).exists():
            return True

        return False

    def post(self, request, workspace_id):
        workspace = Workspace.objects.get(id=workspace_id)

        if not self._user_can_join_workspace(request, workspace):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        workspace.members.add(request.user)

        return Response(WorkspaceSerializer(workspace).data)


class WorkspaceJoinFromLinkView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        workspace_slug = request.data.get("workspace_slug")
        invite_link_id = request.data.get("invite_link_id")

        workspace = get_object_or_404(Workspace, slug=workspace_slug, invite_link_id=invite_link_id)

        workspace.members.add(request.user)

        return Response(WorkspaceSerializer(workspace).data)
