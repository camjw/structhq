from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from structhq.services.struct_service import StructService
from structhq_api.lib.has_api_key_permission import HasAPIKey

# This endpoint is the main endpoint for the v1 product really.


class StructCreateView(APIView):
    permission_classes = [HasAPIKey]
    struct_service: StructService = None

    @extend_schema(
        description="Create a struct using a URL and optionally instructions and a data schema.",
        parameters=[
            OpenApiParameter(
                name="profile_id",
                description="The ID of the profile (or human) that is interacting with the Persona. This is optional, and used to populate the short term context for the Persona.",
                type={"type": "string"},
                style="form",
                required=False,
            ),
            OpenApiParameter(
                name="persona_id",
                description="The ID of the persona that you want to interact with.",
                type={"type": "string"},
                style="form",
                required=True,
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
    def post(self, request):
        return Response(status=status.HTTP_200_OK)
