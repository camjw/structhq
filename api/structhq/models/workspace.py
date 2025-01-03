import uuid

from django.db import models

from structhq.models.base_model import BaseModel
from structhq.models.chat import ChatProvider
from structhq.models.color import Color
from structhq.models.fields.lowercase_fields import LowercaseEmailField, LowercaseTextField
from structhq.models.profile import Profile
from structhq.models.user import User


class Workspace(BaseModel):
    name = models.TextField()
    slug = LowercaseTextField()

    workos_organization_id = models.TextField(blank=True, null=True)
    stripe_customer_id = models.TextField(blank=True, null=True)

    url = models.URLField(null=True, default=None)
    description = models.TextField(null=True, default=None)

    is_setup_complete = models.BooleanField(default=False)

    members = models.ManyToManyField(User, through="Profile", related_name="workspaces")

    avatar_color = models.TextField(choices=Color.choices, default=Color.get_random_color)
    avatar_image = models.ImageField(upload_to="workspace_avatar_images", null=True, blank=True)

    invite_link_id = models.UUIDField(default=uuid.uuid4, blank=False)
    invite_link_enabled = models.BooleanField(default=True)

    zendesk_subdomain = models.TextField(null=True, blank=True)
    zendesk_api_key = models.TextField(null=True, blank=True)
    zendesk_email = models.TextField(null=True, blank=True)
    zendesk_last_synced_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        constraints = [models.UniqueConstraint(fields=["slug"], name="unique_workspace_slug")]

        indexes = [models.Index(fields=["slug"], name="workspace_slug")]


class WorkspaceInvite(BaseModel):
    sender = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="sent_invites")
    email = LowercaseEmailField(max_length=512, unique=True, null=False, blank=False)

    workspace = models.ForeignKey(
        Workspace,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="invites",
    )

    invite_url = models.TextField(unique=True, null=False, blank=False)
    accepted = models.BooleanField(default=False)

    class Meta:
        ordering = ["created_at"]
        indexes = [models.Index(fields=["email"], name="invited_email")]


class WorkspaceEmailDomain(BaseModel):
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name="email_domains")
    domain = models.TextField()

    class Meta:
        indexes = [
            models.Index(fields=["workspace"]),
            models.Index(fields=["domain"]),
        ]

        ordering = ["-created_at"]

    def __str__(self):
        return self.domain


class WorkspaceAPIKey(BaseModel):
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name="api_keys")
    key = models.TextField()
    label = models.TextField()

    class Meta:
        indexes = [
            models.Index(fields=["workspace"]),
            models.Index(fields=["key"]),
        ]

        constraints = [
            models.UniqueConstraint(fields=["key"], name="unique_api_key"),
            models.UniqueConstraint(fields=["workspace", "label"], name="unique_workspace_api_key_label"),
        ]

        ordering = ["-created_at"]

    def __str__(self):
        return self.key


class WorkspaceChatBackend(BaseModel):
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name="chat_backends")

    name = models.TextField()
    provider = models.TextField(choices=ChatProvider.choices)
    model = models.TextField()
    api_key = models.TextField()

    class Meta:
        indexes = [
            models.Index(fields=["workspace"]),
        ]

        ordering = ["-created_at"]
