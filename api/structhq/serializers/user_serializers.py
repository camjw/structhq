from rest_framework import serializers

from structhq.models.user import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "created_at",
            "updated_at",
        ]
