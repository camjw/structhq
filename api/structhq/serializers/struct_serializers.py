from rest_framework import serializers

from structhq.models.struct import StructRequest, StructRequestMessage


class StructRequestMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StructRequestMessage
        fields = "__all__"


class StructRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = StructRequest
        fields = "__all__"
