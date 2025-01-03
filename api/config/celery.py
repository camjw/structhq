import os

from celery import Celery
from config.environment import Environment

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

Environment.load()

app = Celery("structhq", broker=os.environ.get("redis:endpoint", "redis://"))
app.config_from_object("django.conf:settings", namespace="CELERY")

app.conf.broker_connection_retry_on_startup = True

app.autodiscover_tasks(["structhq"])
