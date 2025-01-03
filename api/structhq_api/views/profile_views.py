from django.shortcuts import get_object_or_404
from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response
from rest_framework.views import APIView
from structhq_api.lib.has_api_key_permission import HasAPIKey

from structhq.models.profile import Profile
from structhq.serializers.profile_serializers import ProfilePublicSerializer


class ProfileRetrieveView(APIView):
    permission_classes = [HasAPIKey]

    @extend_schema(
        responses={
            200: ProfilePublicSerializer,
        },
        description="Retrieve a profile by email address or ID",
        parameters=[
            OpenApiParameter(
                name="email",
                description="The email address of the profile to retrieve. Either `email` or `id` is required.",
                type={"type": "string"},
                style="form",
                explode=False,
                required=False,
            ),
            OpenApiParameter(
                name="id",
                description="The ID of the profile to retrieve. Either `email` or `id` is required.",
                type={"type": "string"},
                style="form",
                explode=False,
                required=False,
            ),
            OpenApiParameter(
                name="structhq-api-key",
                description="Your API key. This is required by all endpoints to access our API programatically. You can view your API keys using the 'API' tab in the settings page.",
                type=str,
                location=OpenApiParameter.HEADER,
                required=True,
            ),
        ],
        auth=[],
    )
    def get(self, request):
        email = request.query_params.get("email", None)
        id = request.query_params.get("id", None)

        if id:
            profile = get_object_or_404(Profile, id=id, workspace=request.api_workspace)
        elif email:
            profile = get_object_or_404(Profile, user__email=email, workspace=request.api_workspace)
        else:
            return Response({"error": "Profile email or id is required"}, status=status.HTTP_400_BAD_REQUEST)

        return Response(ProfilePublicSerializer(profile).data)

    def handle_exception(self, exc):
        if isinstance(exc, PermissionDenied):
            return Response(
                {
                    "detail": {
                        "status": "needs_authorization",
                        "message": "Neither authorization header nor xi-api-key received, please provide one.",
                    },
                },
                status=status.HTTP_401_UNAUTHORIZED,
            )
        return super().handle_exception(exc)
