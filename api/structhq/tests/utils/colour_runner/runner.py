from unittest import runner

from structhq.tests.utils.colour_runner.result import ColourTextTestResult


class ColourTextTestRunner(runner.TextTestRunner):
    """A test runner that uses colour in its output"""

    resultclass = ColourTextTestResult

    def __init__(self, *args, **kwargs):
        self.no_colour = kwargs.pop("no_colour", False)
        super(ColourTextTestRunner, self).__init__(*args, **kwargs)

    def _makeResult(self):
        return self.resultclass(self.stream, self.descriptions, self.verbosity, self.no_colour)


class ColourRunnerMixin(object):
    test_runner = ColourTextTestRunner

    def __init__(self, *args, **kwargs):
        self.no_colour = kwargs.get("no_color", False)
        super(ColourRunnerMixin, self).__init__(*args, **kwargs)

    def run_suite(self, suite, **kwargs):
        return self.test_runner(
            verbosity=self.verbosity,
            failfast=self.failfast,
            no_colour=self.no_colour,
        ).run(suite)
