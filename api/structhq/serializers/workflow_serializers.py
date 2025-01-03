from rest_framework import serializers

from structhq.models.workflow import (
    Workflow,
    WorkflowField,
    WorkflowFieldCondition,
    WorkflowHook,
    WorkflowOutcome,
    WorkflowRequest,
    WorkflowRequestMessage,
    WorkflowRequestTicketData,
    WorkflowRequestTicketHookResult,
    WorkflowResource,
)


class WorkflowFieldConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkflowFieldCondition
        fields = "__all__"


class WorkflowFieldSerializer(serializers.ModelSerializer):
    conditions = WorkflowFieldConditionSerializer(many=True)

    class Meta:
        model = WorkflowField
        fields = "__all__"


class WorkflowOutcomeSerializer(serializers.ModelSerializer):
    fields = WorkflowFieldSerializer(many=True)

    class Meta:
        model = WorkflowOutcome
        fields = "__all__"


class WorkflowOutcomeSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkflowOutcome
        fields = "__all__"


class WorkflowHookSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkflowHook
        fields = "__all__"


class WorkflowSerializer(serializers.ModelSerializer):
    hooks = WorkflowHookSerializer(many=True)
    outcomes = WorkflowOutcomeSerializer(many=True)

    linked_zendesk_form_id = serializers.SerializerMethodField()

    def get_linked_zendesk_form_id(self, instance):
        return instance.zendesk_form.zendesk_id if instance.zendesk_form else None

    class Meta:
        model = Workflow
        fields = "__all__"


class WorkflowSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workflow
        fields = "__all__"


class WorkflowResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkflowResource
        fields = "__all__"


class WorkflowRequestMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkflowRequestMessage
        fields = "__all__"


class WorkflowRequestTicketDataSerializer(serializers.ModelSerializer):
    outcome = WorkflowOutcomeSimpleSerializer()

    class Meta:
        model = WorkflowRequestTicketData
        fields = "__all__"

    def to_representation(self, instance):
        # This prevents key transformation
        representation = super().to_representation(instance)
        representation["results"]["data"] = instance.results["data"]
        return representation


class WorkflowRequestTicketHookResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkflowRequestTicketHookResult
        fields = "__all__"


class WorkflowRequestTicketDataWithHookResultsSerializer(serializers.ModelSerializer):
    outcome = WorkflowOutcomeSimpleSerializer()

    hook_results = WorkflowRequestTicketHookResultSerializer(many=True)

    class Meta:
        model = WorkflowRequestTicketData
        fields = "__all__"

    def to_representation(self, instance):
        # This prevents key transformation
        representation = super().to_representation(instance)
        representation["results"] = instance.results
        return representation


class WorkflowRequestSerializer(serializers.ModelSerializer):
    created_tickets = WorkflowRequestTicketDataSerializer(many=True)

    class Meta:
        model = WorkflowRequest
        fields = "__all__"
