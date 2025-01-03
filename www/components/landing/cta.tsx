import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";

import { COMPANY_DEMO_FORM_URL, COMPANY_NAME } from "@/lib/constants";

export function CTA() {
  return (
    <div className="flex flex-col space-y-14 items-center py-48">
      <div className="flex flex-col items-center space-y-4">
        <TypographyH2 size={"xl"}>
          <span className="text-primary-10">Declarative</span> web scraping
        </TypographyH2>
        <TypographyH2 size={"lg"} className="text-gray-11 font-normal">
          With no more maintenance
        </TypographyH2>
      </div>
      <Button asChild size={"hero"}>
        <a href={COMPANY_DEMO_FORM_URL}>
          <span className="px-0.5 text-2xl font-medium">Get started</span>
        </a>
      </Button>
    </div>
  );
}
