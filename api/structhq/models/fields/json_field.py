from django.db import models
from rest_framework.utils.encoders import JSONEncoder


class JSONField(models.JSONField):
    """
    Override JSONField to use rest_framework's JSONEncoder.
    """

    def __init__(self, *args, **kwargs):
        kwargs["encoder"] = JSONEncoder
        super(JSONField, self).__init__(*args, **kwargs)
