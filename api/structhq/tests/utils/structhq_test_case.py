import os
import sys

from django.test import TestCase
from loguru import logger
from model_bakery import baker
from model_bakery.random_gen import gen_email, gen_json, gen_string

from structhq.models.fields.json_field import JSONField
from structhq.models.fields.lowercase_fields import LowercaseEmailField, LowercaseTextField

PYTHON_ENV = os.environ.get("PYTHON_ENV", "development")
tests_log_level = os.environ.get("tests:log_level", "ERROR")


class StructhqTestCase(TestCase):
    def setUp(self):
        logger.remove()
        logger.add(sys.stderr, level=tests_log_level)

        baker.generators.add(LowercaseEmailField, gen_email)
        baker.generators.add(LowercaseTextField, gen_string)
        baker.generators.add(JSONField, gen_json)

        super().setUp()

        self.maxDiff = None
