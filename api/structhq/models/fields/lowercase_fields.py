from django.db import models


class LowercaseEmailField(models.EmailField):
    """
    Override EmailField to convert emails to lowercase before saving.
    """

    def to_python(self, value):
        value = super(LowercaseEmailField, self).to_python(value)

        if isinstance(value, str):
            return value.lower()

        return value


class LowercaseTextField(models.TextField):
    """
    Override TextField to convert emails to lowercase before saving.
    """

    def to_python(self, value):
        value = super(LowercaseTextField, self).to_python(value)

        if isinstance(value, str):
            return value.lower()

        return value
