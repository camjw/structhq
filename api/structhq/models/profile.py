from django.db import models

from structhq.models.base_model import BaseModel
from structhq.models.color import Color


class Profile(BaseModel):
    workspace = models.ForeignKey("Workspace", on_delete=models.CASCADE, related_name="profiles")
    user = models.ForeignKey("User", on_delete=models.CASCADE, null=True, blank=True)

    subscribe_to_changelog = models.BooleanField(default=False)

    full_name = models.TextField(default="", blank=True)
    preferred_name = models.TextField(default="", blank=True)

    avatar_color = models.TextField(choices=Color.choices, default=Color.get_random_color)
    avatar_image = models.ImageField(upload_to="user_avatar_images", null=True, blank=True)

    job_title = models.TextField(default="", blank=True)
    responsibilities = models.TextField(default="", blank=True)
    goals = models.TextField(default="", blank=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["workspace", "user"], name="unique_profile"),
        ]
        indexes = [
            models.Index(fields=["workspace"], name="profile_workspace"),
            models.Index(fields=["user"], name="profile_user"),
        ]

    def __str__(self) -> str:
        if self.full_name is not None and self.full_name != "":
            return self.full_name

        return f"Profile ({self.id})"

    def get_team_names(self):
        return ", ".join(t.name for t in self.teams.all())
