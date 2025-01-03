import os

from django.conf import settings
from django.http import JsonResponse


class HealthCheckMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path in [
            "/healthcheck/",
            "/healthcheck",
        ]:
            return self.healthcheck()
        return self.get_response(request)

    def _get_version(self):
        render_version = os.environ.get("RENDER_GIT_COMMIT", None)

        if render_version:
            return render_version

        try:
            with open(os.path.join(settings.BASE_DIR, ".version"), "r") as version_file:
                version = version_file.read()
                return version

        except FileNotFoundError:
            version = "unknown"
            return version

    def healthcheck(self):
        version = self._get_version()

        return JsonResponse({"version": version})
