import random

from django.db import models


class Color(models.TextChoices):
    GRAY = ("gray",)
    SLATE = ("slate",)
    RED = ("red",)
    ORANGE = ("orange",)
    AMBER = ("amber",)
    YELLOW = ("yellow",)
    LIME = ("lime",)
    GREEN = ("green",)
    JADE = ("jade",)
    TEAL = ("teal",)
    CYAN = ("cyan",)
    SKY = ("sky",)
    BLUE = ("blue",)
    INDIGO = ("indigo",)
    VIOLET = ("violet",)
    PURPLE = ("purple",)
    PLUM = ("plum",)
    PINK = ("pink",)
    CRIMSON = ("crimson",)

    @classmethod
    def get_random_color(cls):
        return random.choices(Color.choices[: len(Color.choices)])[0][0]
