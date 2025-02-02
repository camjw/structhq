import React from "react";

import { BookOpen02Icon } from "@/icons/outline/book-open-02";
import { Dataflow03Icon } from "@/icons/outline/dataflow-03";
import { User01Icon } from "@/icons/outline/user-01";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyH4 } from "@/components/ui/typography-h4";
import { TypographyP } from "@/components/ui/typography-p";
import { COMPANY_NAME } from "@/lib/constants";
import { HeartIcon } from "@/icons/outline/heart";
import { CalendarCheck01Icon } from "@/icons/outline/calendar-check-01";
import { Tool01Icon } from "@/icons/outline/tool-01";
import { FastForwardIcon } from "@/icons/outline/fast-forward";
import { BracketsEllipsesIcon } from "@/icons/outline/brackets-ellipses";

type Benefit = {
  title: string;
  description: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const benefits: Benefit[] = [
  {
    title: "1. Set up a scraper",
    description: [
      "To get started, all you need is a JSON schema that describes the data you want to extract and a list of URLs.",
      "You can create scrapers from our UI, through our Python or TypeScript clients, or by using our API.",
    ],
    icon: BracketsEllipsesIcon,
  },
  {
    title: `2. ${COMPANY_NAME} compiles a scraper`,
    description: [
      `Using the JSON schema and the URLs, ${COMPANY_NAME} figures out how to extract the right data.`,
      `This can take a few minutes while the LLM works through the structure.`,
    ],
    icon: Dataflow03Icon,
  },
  {
    title: "3. Use the compiled scraper",
    description: [
      "Once the scraper is compiled, you can run it on any similar webpage.",
      "You can run the scrapers on a schedule, or on-demand. The data can be sent to any webhook or API. We handle proxies and other infrastructure for you.",
      "Because the LLM has already compiled, this is much faster - i.e. the performance is the same as a scraper you might write by hand.",
    ],
    icon: FastForwardIcon,
  },
  {
    title: `4. ${COMPANY_NAME} scrapers self-heal`,
    description: [
      "If the scraper fails to find the data on a subsequent run it’ll self-heal by updating its internal code, and explain to you what went wrong.",
      "No more maintenance, no more annoying broken scrapers, no more wasted time.",
    ],
    icon: Tool01Icon,
  },
];

export function BenefitsSection() {
  return (
    <div
      className="flex flex-col space-y-10 px-12 items-center w-full pt-32 pb-32 bg-gray-2"
      id="how-it-works"
    >
      <TypographyH2 size={"lg"}>
        How does <span className="text-primary-10">{COMPANY_NAME}</span> work?
      </TypographyH2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto pt-10">
        {benefits.map((benefit, index) => (
          <div
            className="flex flex-col items-start space-y-4 bg-white rounded-xl px-8 py-6 text-gray-11 max-w-md"
            key={index}
          >
            <benefit.icon className="w-8 h-8 text-gray-9" />

            <TypographyH4 size={"lg"}>{benefit.title}</TypographyH4>
            {benefit.description.map((description, index) => (
              <TypographyP key={index}>{description}</TypographyP>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
