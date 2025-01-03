from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

from structhq.models.base_model import BaseModel
from structhq.models.color import Color
from structhq.models.fields.lowercase_fields import LowercaseEmailField


class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError("The Email must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_staffuser(self, email, password, **extra_fields):
        """
        Create and save a StaffUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        return self.create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin, BaseModel):
    username = None
    email = LowercaseEmailField(max_length=512, unique=True, null=False, blank=False)
    is_email_verified = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_author = models.BooleanField(default=False)
    is_demo = models.BooleanField(default=False)

    # CAMERON: We get these from google, makes sense imo to cache these and use them when creating a new user
    default_full_name = models.TextField(default="", blank=True)
    default_preferred_name = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        ordering = ["-created_at"]

        constraints = [
            models.UniqueConstraint(
                fields=[
                    "email",
                ],
                name="user_unique_email",
            ),
        ]

        indexes = [
            models.Index(fields=["email"], name="user_email"),
        ]


class UserAccountType(models.TextChoices):
    """
    Enum for the type of user account.
    """

    GOOGLE = "google"


class UserAccount(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="accounts")

    type = models.TextField(choices=UserAccountType.choices)
    provider = models.TextField(choices=UserAccountType.choices)
    provider_account_id = models.TextField()

    refresh_token = models.TextField(null=True, blank=True)
    access_token = models.TextField(null=True, blank=True)
    expires_at = models.IntegerField(null=True, blank=True)
    token_type = models.TextField(null=True, blank=True)
    scope = models.TextField(null=True, blank=True)
    id_token = models.TextField(null=True, blank=True)
    session_state = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "User Account"
        verbose_name_plural = "User Accounts"
        ordering = ["-created_at"]

        indexes = [
            models.Index(fields=["user"], name="user_account_user"),
        ]
