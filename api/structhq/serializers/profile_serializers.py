from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from structhq.models.profile import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "id",
            "workspace",
            "user",
            "created_at",
            "updated_at",
            "subscribe_to_changelog",
            "full_name",
            "preferred_name",
            "avatar_color",
            "avatar_image",
        ]


class ProfilePublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "id",
            "workspace",
            "created_at",
            "updated_at",
            "full_name",
            "preferred_name",
        ]

    id = serializers.UUIDField(help_text="The unique identifier of the profile.")

    workspace = serializers.UUIDField(help_text="The unique identifier of the workspace. This will be the same for all of your profiles.")

    created_at = serializers.DateTimeField(help_text="The date and time the profile was created.")

    updated_at = serializers.DateTimeField(help_text="The date and time the profile was last updated.")

    full_name = serializers.CharField(help_text="This profile's full name.", required=False)

    preferred_name = serializers.CharField(help_text="What this profile likes to be called.", required=False)
