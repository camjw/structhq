from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from structhq.models.user import User


def get_list_display():
    starting_list_display = [
        "email",
    ]

    protected_fields = ["password", "totp_secret"]

    unordered_list_display = [field.name for field in User._meta.fields if field.name not in protected_fields and field.name not in starting_list_display]

    return starting_list_display + unordered_list_display


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = get_list_display()
    ordering = ["-created_at"]


# class CustomUserAdmin(UserAdmin):
#     model = User

#     list_display = get_list_display()
#     list_filter = ["created_at"]

#     ordering = ["-created_at"]

#     fieldsets = (
#         (
#             None,
#             {"fields": ("email", "password")},
#         ),
#         (
#             "Personal details",
#             {"fields": ("full_name", "preferred_name", "avatar_color", "avatar_image")},
#         ),
#         ("Permissions", {"fields": ("is_staff", "is_active", "is_author", "is_demo")}),
#         ("Groups", {"fields": ("groups",)}),
#     )

#     add_fieldsets = (
#         (
#             None,
#             {
#                 "classes": ("wide",),
#                 "fields": (
#                     "email",
#                     "is_staff",
#                     "is_active",
#                     "company",
#                     "preferred_name",
#                     "full_name",
#                 ),
#             },
#         ),
#     )

#     exclude = ("username",)
#     add_exclude = ("username",)

#     formfield_overrides = {
#         models.CharField: {"widget": TextInput(attrs={"size": "20"})},
#         models.TextField: {"widget": Textarea(attrs={"rows": 4, "cols": 40})},
#     }

#     search_fields = ("email", "full_name")

#     def get_queryset(self, request):
#         return super().get_queryset(request)
