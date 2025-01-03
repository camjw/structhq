import uuid
from copy import deepcopy
from typing import List, Optional

from django.db import models
from django.utils import timezone


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, blank=False)

    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False)
    updated_at = models.DateTimeField(auto_now=True, null=False, blank=False)

    class Meta:
        abstract = True

    fields_ignored_on_has_changed: List[str]

    @classmethod
    def from_db(cls, db, field_names, values):
        instance = super().from_db(db, field_names, values)
        instance._state.adding = False
        instance._state.db = db
        instance._initial_values = dict(zip(field_names, values))

        return instance

    def _get_fields_to_check(self, fields: Optional[List[str]] = None):
        if fields is not None:
            return fields

        fields_to_skip = self.fields_ignored_on_has_changed or []
        non_foreign_key_fields = [f for f in self._meta.fields if not f.is_relation]

        return [f.name for f in non_foreign_key_fields if f.name not in fields_to_skip]

    def has_changed(self, fields: Optional[List[str]] = None):
        """
        Checks if the model has been changed since it was first loaded from the db. Either you can pass in a list of fields to check,
        or you can specify the default_update_fields on the model. If neither of these are specified, it will check all fields.
        """

        fields_to_check = self._get_fields_to_check(fields)

        if hasattr(self, "_initial_values"):
            if not self.pk or not self._initial_values:
                return True

            for field in fields_to_check:
                if self._initial_values[field] is None:
                    continue

                if getattr(self, field) != self._initial_values[field]:
                    return True

            return False

        return True

    def save(self, *args, **kwargs):
        # check if we're currently creating the object
        is_creating = self._state.adding

        if is_creating:
            self.before_create()

        super(BaseModel, self).save(*args, **kwargs)

        if is_creating:
            self.on_create()

    def on_create(self):
        pass

    def before_create(self):
        pass

    # https://stackoverflow.com/a/16727397
    def copy(self, new_id=None, new_created_at=None, new_updated_at=None):
        id = uuid() if new_id is None else new_id
        obj = deepcopy(self)
        obj.pk = id
        obj.id = id
        obj.created_at = timezone.now() if new_created_at is None else new_created_at
        obj.updated_at = timezone.now() if new_updated_at is None else new_updated_at
        return obj
