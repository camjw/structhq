import os

from google.auth import exceptions
from google.auth.transport import requests
from google.oauth2 import id_token
from loguru import logger
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenViewBase

from structhq.models.user import User, UserAccount

# workos_client = WorkOSClient(
#     api_key=os.environ.get("workos:api_key"),
#     client_id=os.environ.get("workos:client_id"),
# )


# Next Auth calls this endpoint with a token and an account to get a jwt back
class AuthTokenObtainView(APIView):
    permission_classes = [permissions.AllowAny]

    def _validate_google_account(self, account):
        id_token_data = account.get("id_token", None)

        try:
            id_token.verify_oauth2_token(
                id_token=id_token_data,
                request=requests.Request(),
                audience=os.getenv("google:oauth:client_id"),
            )

            return True
        except exceptions.GoogleAuthError:
            logger.info("AuthTokenObtain: GoogleAuthError")
            return False

        except ValueError:
            logger.info("AuthTokenObtain: ValueError")
            return False

        except Exception as e:
            logger.info(f"AuthTokenObtain: {e}")
            return False

    def post(self, request):
        account_data = request.data.get("account", None)
        profile_data = request.data.get("profile", None)

        if not account_data or not profile_data:
            return Response({"error": "account and profile are required"}, status=status.HTTP_400_BAD_REQUEST)

        if account_data.get("provider") == "google":
            if not self._validate_google_account(account_data):
                return Response({"error": "invalid google account"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "unsupported provider"}, status=status.HTTP_400_BAD_REQUEST)

        user, _ = User.objects.get_or_create(
            email=profile_data.get("email"),
            defaults={
                "default_full_name": profile_data.get("name"),
                "default_preferred_name": profile_data.get("given_name"),
            },
        )

        UserAccount.objects.update_or_create(
            user=user,
            provider=account_data.get("provider"),
            defaults={
                "provider_account_id": account_data.get("provider_account_id"),
                "access_token": account_data.get("access_token"),
                "refresh_token": account_data.get("refresh_token"),
                "scope": account_data.get("scope"),
                "id_token": account_data.get("id_token"),
                "session_state": account_data.get("session_state"),
                "expires_at": account_data.get("expires_at"),
            },
        )

        token = RefreshToken.for_user(user)

        return Response(
            {
                "refresh": str(token),
                "access": str(token.access_token),
            },
            status=status.HTTP_201_CREATED,
        )


class AuthTokenRefreshView(TokenViewBase):
    def post(self, request, *args, **kwargs):
        token_serializer = TokenRefreshSerializer(data=request.data)

        try:
            token_serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(token_serializer.validated_data, status=status.HTTP_200_OK)


# class AuthSAMLView(APIView):
#     permission_classes = [permissions.AllowAny]

#     def post(self, request, *args, **kwargs):
#         email = request.data.get("email")
#         email_domain = email.split("@")[1]

#         organizations = workos_client.organizations.list_organizations(domains=[email_domain])

#         if len(organizations.data) == 0:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         organization = organizations.data[0]

#         redirect_uri = f"{os.getenv('structhq:app_url')}/login/saml/callback"

#         state = base64.b64encode(json.dumps({"email": email}).encode()).decode()

#         authorization_url = workos_client.sso.get_authorization_url(
#             organization_id=organization.id,
#             redirect_uri=redirect_uri,
#             state=state,
#         )

#         return Response(
#             {
#                 "url": authorization_url,
#             }
#         )


# class AuthSAMLCallbackView(APIView):
#     permission_classes = [permissions.AllowAny]

#     def _get_slug_from_workspace_name(self, workspace_name):
#         if not Workspace.objects.filter(slug=workspace_name).exists():
#             return workspace_name

#         for _ in range(100):
#             random_four_digit_number = random.randint(1000, 9999)
#             new_slug = f"{workspace_name}{random_four_digit_number}"

#             if not Workspace.objects.filter(slug=new_slug).exists():
#                 return new_slug

#         slug_id = str(uuid4())
#         return f"{workspace_name}{slug_id}"

#     def _get_or_create_workspace(self, organization_id):
#         matching_company_set = Workspace.objects.filter(workos_organization_id=organization_id)

#         if matching_company_set.exists():
#             matching_company = matching_company_set.first()
#             matching_company.workos_organization_id = organization_id
#             matching_company.save()

#             return matching_company

#         workos_organization = workos_client.organizations.get_organization(organization_id)

#         slug = self._get_slug_from_workspace_name(workos_organization.name)

#         return Workspace.objects.create(
#             name=workos_organization.name,
#             slug=slug,
#             workos_organization_id=organization_id,
#         )

#     def _get_cached_or_new_workos_data(self, workos_code):
#         # CAMERON: TODO: figure out if this caching is actually necessary
#         existing_response_set = WorkOSProfileAndToken.objects.filter(workos_code=workos_code)

#         if existing_response_set.exists():
#             return existing_response_set.first().workos_profile_and_token

#         workos_profile_and_token = workos_client.sso.get_profile_and_token(workos_code).dict()

#         WorkOSProfileAndToken.objects.create(
#             workos_code=workos_code,
#             workos_profile_and_token=workos_profile_and_token,
#         )

#         return workos_profile_and_token

#     def post(self, request, *args, **kwargs):
#         code = request.data.get("code")

#         workos_profile_and_token = self._get_cached_or_new_workos_data(code)

#         workos_profile = workos_profile_and_token["profile"]
#         workos_email = workos_profile["email"]

#         organization_id = workos_profile["organization_id"]

#         user, _ = User.objects.get_or_create(
#             email=workos_email,
#             defaults={
#                 "default_full_name": f"{workos_profile['first_name']} {workos_profile['last_name']}",
#                 "default_preferred_name": workos_profile["first_name"],
#             },
#         )

#         workspace = self._get_or_create_workspace(organization_id)

#         Profile.objects.update_or_create(
#             workspace=workspace,
#             user=user,
#             defaults={
#                 "full_name": f"{workos_profile['first_name']} {workos_profile['last_name']}",
#                 "preferred_name": workos_profile["first_name"],
#             },
#         )

#         token = RefreshToken.for_user(user)

#         return Response(
#             {
#                 "token": {
#                     "refresh": str(token),
#                     "access": str(token.access_token),
#                 },
#                 "workspace": WorkspaceSerializer(workspace).data,
#             }
#         )
