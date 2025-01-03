from rest_framework import serializers

from structhq.models.audit import AuditLogEvent


class AuditLogEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditLogEvent
        fields = "__all__"
