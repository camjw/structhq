import json

from bs4 import BeautifulSoup
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Parses location data from HTML file and outputs structhqured data"

    def parse_hours(self, hours_text):
        """Parse hours string into opening and closing times"""
        try:
            # Remove any extra whitespace and split on "to"
            hours_parts = hours_text.strip().split("to")
            if len(hours_parts) != 2:
                return None, None

            opening_time = hours_parts[0].strip()
            closing_time = hours_parts[1].strip()

            return opening_time, closing_time
        except Exception:
            self.stdout.write(self.style.WARNING(f"Error parsing hours: {hours_text}"))
            return None, None

    def handle(self, *args, **options):
        # Read the HTML file
        try:
            with open("wingstop_locations.html", "r", encoding="utf-8") as file:
                html_content = file.read()
        except FileNotFoundError:
            self.stdout.write(self.style.ERROR(f'File not found: {options["html_file"]}'))
            return
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error reading file: {str(e)}"))
            return

        # Parse HTML with BeautifulSoup
        soup = BeautifulSoup(html_content, "html.parser")

        # Find all location cards
        location_cards = soup.find_all("div", class_="location-card__header")

        locations_data = []

        for card in location_cards:
            try:
                # Extract name and check for delivery only
                name_tag = card.find("h3")
                if not name_tag:
                    continue

                full_name = name_tag.text.strip()
                is_delivery_only = "(Delivery Only)" in full_name
                name = full_name.replace("(Delivery Only)", "").strip()

                # Extract address
                address_tag = card.find("address")
                address = address_tag.find("a").text.strip() if address_tag and address_tag.find("a") else None

                # Extract hours - updated to handle the new structhqure
                hours_label = card.find("div", class_="location-card__hours-label")
                if hours_label:
                    # Look for span with clock icon sibling
                    hours_span = hours_label.find("span", class_="mb-0 location-card-variant")
                    if not hours_span:
                        # Try finding any span that contains time
                        all_spans = hours_label.find_all("span")
                        for span in all_spans:
                            if "AM" in span.text or "PM" in span.text:
                                hours_span = span
                                break

                    hours_text = hours_span.text.strip() if hours_span else None
                else:
                    hours_text = None

                opening_time, closing_time = self.parse_hours(hours_text) if hours_text else (None, None)

                # Debug output for troubleshooting
                if not opening_time or not closing_time:
                    self.stdout.write(self.style.WARNING(f"Debug - Name: {name}\n" f"Hours span found: {hours_span is not None}\n" f"Hours text: {hours_text}"))

                location_data = {"Name": name, "Address": address, "Opening time": opening_time, "Closing time": closing_time, "Delivery only?": is_delivery_only}

                locations_data.append(location_data)

            except Exception as e:
                self.stdout.write(self.style.WARNING(f"Error processing card: {str(e)}"))
                continue

        # Output the results as JSON
        self.stdout.write(json.dumps(locations_data, indent=2))
        self.stdout.write(self.style.SUCCESS(f"Successfully processed {len(locations_data)} locations"))

        # em = EntityModel.objects.get(id="0d673889-2ac8-4f50-973c-a26900271408")

        # for location in locations_data:
        #     EntityModelRecord.objects.create(
        #         entity_model=em,
        #         data=location,
        #     )
