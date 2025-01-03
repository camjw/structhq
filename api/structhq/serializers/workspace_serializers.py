from rest_framework import serializers

from structhq.models.workspace import Workspace, WorkspaceAPIKey, WorkspaceChatBackend, WorkspaceEmailDomain, WorkspaceInvite


class WorkspaceSerializer(serializers.ModelSerializer):
    num_profiles = serializers.SerializerMethodField()

    def get_num_profiles(self, obj):
        return obj.members.count()

    class Meta:
        model = Workspace
        fields = [
            "id",
            "name",
            "slug",
            "created_at",
            "updated_at",
            "is_setup_complete",
            "avatar_color",
            "avatar_image",
            "invite_link_id",
            "invite_link_enabled",
            "num_profiles",
            "zendesk_subdomain",
            "zendesk_email",
            "zendesk_api_key",
        ]


class WorkspaceInviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkspaceInvite
        fields = [
            "id",
            "sender",
            "email",
            "workspace",
            "accepted",
            "created_at",
            "updated_at",
        ]


class WorkspaceEmailDomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkspaceEmailDomain
        fields = [
            "id",
            "domain",
            "created_at",
            "updated_at",
        ]


class WorkspaceAPIKeyOnCreationSerializer(serializers.ModelSerializer):
    """Should only be used when creating a new API key to show the key _once_"""

    class Meta:
        model = WorkspaceAPIKey
        fields = [
            "id",
            "workspace",
            "label",
            "created_at",
            "updated_at",
            "key",
        ]


class WorkspaceAPIKeyPrivateSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkspaceAPIKey
        fields = [
            "id",
            "workspace",
            "label",
            "created_at",
            "updated_at",
        ]


class WorkspaceChatBackendSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkspaceChatBackend
        fields = [
            "id",
            "created_at",
            "updated_at",
            "workspace",
            "name",
            "provider",
            "model",
            "api_key",
        ]
