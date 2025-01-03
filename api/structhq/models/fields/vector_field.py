import json

from django.db import models
from django.db.backends.postgresql.base import DatabaseWrapper
from psycopg2.extensions import AsIs


class VectorField(models.Field):
    def __init__(self, dimensions, *args, **kwargs):
        self.dimensions = dimensions
        super().__init__(*args, **kwargs)

    def db_type(self, connection):
        if isinstance(connection, DatabaseWrapper):
            return f"vector({self.dimensions})"
        else:
            raise NotImplementedError("This field type is only supported in PostgreSQL")

    def from_db_value(self, value, expression, connection):
        if value is None:
            return value
        return json.loads(value)

    def to_python(self, value):
        if isinstance(value, list):
            return value
        if value is None:
            return value
        return json.loads(value)

    def get_prep_value(self, value):
        value = super().get_prep_value(value)
        if value is None:
            return None
        return json.dumps(value)

    def deconstructhq(self):
        name, path, args, kwargs = super().deconstructhq()
        # Only include kwarg if it's not the default
        if self.dimensions != 3:
            kwargs["dimensions"] = self.dimensions
        return name, path, args, kwargs
