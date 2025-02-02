import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";

import { COMPANY_DEMO_FORM_URL } from "@/lib/constants";
import Image from "next/image";
import React from "react";

import AppPreview from "@/public/assets/app_preview.png";

export function HeroSection() {
  const scrollToHowWeWork = React.useCallback(() => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl w-full mx-auto pt-[6.5rem] px-12 md:px-0 text-center space-y-12">
      <div className="flex flex-col items-center">
        <TypographyH1 size={"blog"}>Scrape the internet</TypographyH1>
        <TypographyH1 size={"blog"} className="text-primary-9">
          declaratively
        </TypographyH1>
      </div>
      <h3 className="text-gray-11 text-lg md:text-2xl max-w-xl leading-8 md:leading-[2rem] text-balance font-medium">
        We use LLMs to automatically build self-healing web scrapers that
        extract exactly the data you need.
      </h3>
      <div className="space-x-4">
        <Button asChild size={"hero"}>
          <a href={COMPANY_DEMO_FORM_URL}>
            <span className="px-0.5 font-semibold text-2xl">Get started</span>
          </a>
        </Button>
        <Button size={"hero"} variant={"tertiary"} onClick={scrollToHowWeWork}>
          <span className="px-0.5 font-medium text-2xl">See how it works</span>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center max-w-5xl w-full mx-auto pt-[6.5rem] px-12 md:px-0 text-center space-y-12">
        <div className="flex flex-col items-center bg-gray-3 p-4 rounded-3xl">
          <Image
            src={AppPreview}
            alt="App Review"
            width={1000}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
