from django.test.runner import DiscoverRunner

from structhq.tests.utils.colour_runner.runner import ColourRunnerMixin


class StructhqTestRunner(ColourRunnerMixin, DiscoverRunner):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
