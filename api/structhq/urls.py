from django.urls import path
from rest_framework import routers

from structhq import services
from structhq.views.auth_views import AuthTokenObtainView, AuthTokenRefreshView
from structhq.views.profile_views import (
    CurrentProfileDetailsView,
    ProfileCreateView,
    ProfileListView,
    ProfileRetrieveView,
)
from structhq.views.struct_views import StructCreateView
from structhq.views.user_views import CurrentUserDetailsView, UserCanJoinWorkspacesView, UserWorkspacesView
from structhq.views.workflow_views import (
    WorkflowCreateView,
    WorkflowDeleteView,
    WorkflowListView,
    WorkflowRequestAdvanceView,
    WorkflowRequestInitializeView,
    WorkflowRequestListView,
    WorkflowRequestMessagesView,
    WorkflowRequestRetrieveView,
    WorkflowRequestTicketDataViewSet,
    WorkflowRequestTicketSubmitView,
    WorkflowViewSet,
)
from structhq.views.workspace_views import (
    WorkspaceAPIKeyCreateView,
    WorkspaceAPIKeyDeleteView,
    WorkspaceAPIKeyListView,
    WorkspaceAvatarImageView,
    WorkspaceBySlugView,
    WorkspaceChatBackendsCreateView,
    WorkspaceChatBackendsListView,
    WorkspaceChatBackendsRetrieveView,
    WorkspaceCheckInviteLinkView,
    WorkspaceCheckSlugAvailabilityView,
    WorkspaceCompleteWelcomeView,
    WorkspaceEmailDomainRetrieveView,
    WorkspaceEmailDomainsView,
    WorkspaceInviteListView,
    WorkspaceJoinFromLinkView,
    WorkspaceJoinView,
    WorkspaceRetrieveCurrentView,
    WorkspaceUserListView,
    WorkspaceViewSet,
)

auth_urls = [
    path("auth/token/obtain/", AuthTokenObtainView.as_view(), name="auth_token_obtain"),
    path("auth/token/refresh/", AuthTokenRefreshView.as_view(), name="auth_token_refresh"),
    # path("auth/saml/", AuthSAMLView.as_view(), name="auth_saml_url"),
    # path("auth/saml/callback/", AuthSAMLCallbackView.as_view(), name="auth_saml_url_callback"),
]

user_urls = [
    path("users/me/", CurrentUserDetailsView.as_view(), name="user_me"),
    path("users/me/workspaces/", UserWorkspacesView.as_view(), name="user_workspaces"),
    path("users/me/workspaces/can_join/", UserCanJoinWorkspacesView.as_view(), name="user_workspaces_can_join"),
]

workspace_urls = [
    path("workspaces/check_slug_availability/", WorkspaceCheckSlugAvailabilityView.as_view(), name="workspace_check_slug_availability"),
    path("workspaces/by_slug/<str:slug>/", WorkspaceBySlugView.as_view(), name="workspace_by_slug"),
    path("workspaces/<uuid:workspace_id>/complete_welcome/", WorkspaceCompleteWelcomeView.as_view(), name="workspace_complete_welcome"),
    path("workspaces/invites/", WorkspaceInviteListView.as_view(), name="workspace_invite_list"),
    path("workspaces/users/", WorkspaceUserListView.as_view(), name="workspace_user_list"),
    path("workspaces/email_domains/", WorkspaceEmailDomainsView.as_view(), name="workspace_email_domains"),
    path("workspaces/email_domains/<uuid:domain_id>/", WorkspaceEmailDomainRetrieveView.as_view(), name="workspace_email_domain_retrieve"),
    path("workspaces/current/", WorkspaceRetrieveCurrentView.as_view(), name="workspace_update"),
    path("workspaces/api-keys/list/", WorkspaceAPIKeyListView.as_view(), name="workspace_api_key_list"),
    path("workspaces/api-keys/new/", WorkspaceAPIKeyCreateView.as_view(), name="workspace_api_key_create"),
    path("workspaces/api-keys/<uuid:api_key_id>/", WorkspaceAPIKeyDeleteView.as_view(), name="workspace_api_key_delete"),
    path("workspaces/chat_backends/list/", WorkspaceChatBackendsListView.as_view(), name="workspace_chat_backend_list"),
    path("workspaces/chat_backends/new/", WorkspaceChatBackendsCreateView.as_view(), name="workspace_chat_backend_create"),
    path("workspaces/chat_backends/<uuid:chat_backend_id>/", WorkspaceChatBackendsRetrieveView.as_view(), name="workspace_chat_backend_retrieve"),
    path("workspaces/check_invite_link/", WorkspaceCheckInviteLinkView.as_view(), name="workspace_check_invite_link"),
    path("workspaces/avatar_image/", WorkspaceAvatarImageView.as_view(), name="workspace_avatar_image"),
    path("workspaces/<uuid:workspace_id>/join/", WorkspaceJoinView.as_view(), name="workspace_join"),
    path("workspaces/join/from_link/", WorkspaceJoinFromLinkView.as_view(), name="workspace_join_from_link"),
]

profile_urls = [
    path("profiles/me/", CurrentProfileDetailsView.as_view(), name="profile_me"),
    path("profiles/new/", ProfileCreateView.as_view(), name="profile_create"),
    path("profiles/<uuid:profile_id>/", ProfileRetrieveView.as_view(), name="profile_retrieve_view"),
    path("profiles/list/", ProfileListView.as_view(), name="profile_list"),
]


workflow_urls = [
    path("workflows/create/", WorkflowCreateView.as_view(), name="workflow_create"),
    path("workflows/list/", WorkflowListView.as_view(), name="workflow_list"),
    path("workflows/delete/", WorkflowDeleteView.as_view(), name="workflow_delete"),
    path(
        "workflows/requests/initialize/",
        WorkflowRequestInitializeView.as_view(
            workflow_request_service=services.workflow_request_service,
            emit_service=services.emit_service,
        ),
        name="workflow_request_initialize",
    ),
    path(
        "workflows/requests/advance/",
        WorkflowRequestAdvanceView.as_view(
            workflow_request_service=services.workflow_request_service,
            emit_service=services.emit_service,
        ),
        name="workflows_request_advance",
    ),
    path("workflows/requests/<uuid:workflow_request_id>/", WorkflowRequestRetrieveView.as_view(), name="workflow_request_retrieve"),
    path("workflows/requests/<uuid:workflow_request_id>/messages/", WorkflowRequestMessagesView.as_view(), name="workflow_request_messages"),
    path("workflows/requests/tickets/submit/<uuid:ticket_id>/", WorkflowRequestTicketSubmitView.as_view(), name="workflow_request_ticket_submit"),
    path("workflows/requests/list/", WorkflowRequestListView.as_view(), name="workflow_request_list"),
]

struct_urls = [
    path("struct/new/", StructCreateView.as_view(struct_service=services.struct_service), name="struct_create"),
]


router = routers.SimpleRouter()
router.register(r"workspaces", WorkspaceViewSet, basename="workspaces")
router.register(r"workflows", WorkflowViewSet, basename="workflows")
router.register(r"workflows/requests/tickets", WorkflowRequestTicketDataViewSet, basename="workflow_tickets")

urlpatterns = [
    *auth_urls,
    *user_urls,
    *workspace_urls,
    *profile_urls,
    *workflow_urls,
    *router.urls,
]
