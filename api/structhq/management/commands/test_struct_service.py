import os

from django.core.management.base import BaseCommand

from structhq.services import struct_service

os.environ.setdefault("DJANGO_ALLOW_ASYNC_UNSAFE", "true")


class Command(BaseCommand):
    help = "Parses location data from HTML file and outputs structhqured data"

    def handle(self, *args, **options):
        struct_request = struct_service._run(
            url="https://www.net-a-porter.com/en-gb/shop/product/stella-mccartney/clothing/gowns/asymmetric-cape-effect-stretch-satin-gown/1647597350512993",
            instructions="Get me the title, description, main product url, anything else you think is important",
            data_schema=None,
        )

        print(struct_request)
