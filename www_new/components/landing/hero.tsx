import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";

import { COMPANY_DEMO_FORM_URL, COMPANY_NAME } from "@/lib/constants";

export function HeroSection() {
  return (
    <div className="bg-white flex flex-col items-center justify-center max-w-5xl w-full mx-auto pt-24 pb-36 px-12 md:px-0 text-center space-y-12">
      <div>

      <TypographyH1 size={"lg"}>
Scrape the internet
      </TypographyH1>
      <TypographyH1 size={"lg"} className="text-primary-10">
declaratively.
      </TypographyH1>
      </div>
      <h3 className="text-gray-11 text-x md:text-2xl max-w-lg leading-8 md:leading-8">
        We use LLMs to automatically build self-healing web scrapers that extract exactly the data you need.
      </h3>
      <div className="pt-8">
        <Button asChild variant={"outline"} size="hero" textVariant={"hero"}>
          Watch a demo
        </Button>
        <Button asChild size="hero" textVariant={"hero"}>
          <Link href={COMPANY_DEMO_FORM_URL}>Get started</Link>
        </Button>
      </div>
    </div>
  );
}
