from django.shortcuts import get_object_or_404
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from structhq.lib.has_workspace_permission import HasWorkspace
from structhq.models.profile import Profile
from structhq.serializers.profile_serializers import ProfileSerializer


class CurrentProfileDetailsView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        return Response(ProfileSerializer(request.profile).data)


class ProfileRetrieveView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request, profile_id):
        profile = get_object_or_404(Profile, id=profile_id, workspace=request.workspace)

        return Response(ProfileSerializer(profile).data)

    def patch(self, request, profile_id):
        workspace = request.workspace

        profile = get_object_or_404(Profile, id=profile_id, workspace=workspace)

        profile.preferred_name = request.data.get("preferred_name", profile.preferred_name)
        profile.full_name = request.data.get("full_name", profile.full_name)

        profile.save()

        return Response(ProfileSerializer(profile).data, status=status.HTTP_201_CREATED)


class ProfileCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def post(self, request):
        workspace = request.workspace

        profile = Profile.objects.create(workspace=workspace, **request.data)

        return Response(ProfileSerializer(profile).data, status=status.HTTP_201_CREATED)


class ProfileListView(APIView):
    permission_classes = [permissions.IsAuthenticated, HasWorkspace]

    def get(self, request):
        workspace_profiles = Profile.objects.filter(workspace=request.workspace)

        return Response(data=ProfileSerializer(workspace_profiles, many=True).data, status=status.HTTP_200_OK)
