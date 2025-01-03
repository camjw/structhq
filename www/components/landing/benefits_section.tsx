import React from "react";

import { BookOpen02Icon } from "@/icons/outline/book-open-02";
import { Dataflow03Icon } from "@/icons/outline/dataflow-03";
import { User01Icon } from "@/icons/outline/user-01";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyH4 } from "@/components/ui/typography-h4";
import { TypographyP } from "@/components/ui/typography-p";
import { COMPANY_NAME } from "@/lib/constants";
import { HeartCircleIcon } from "@/icons/outline/heart-circle";
import { HeartIcon } from "@/icons/outline/heart";
import { CalendarCheck01Icon } from "@/icons/outline/calendar-check-01";

type Benefit = {
  title: string;
  description: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const benefits: Benefit[] = [
  // {
  //   title: "Declarative data extraction",
  //   description: [
  //     `With ${COMPANY_NAME}, you don't need to write complex scrapers that extract data from the entire page.`,
  //     `Instead, you just pass a JSON schema that describes the data you want and ${COMPANY_NAME} does the rest.`,
  //   ],
  //   icon: Dataflow03Icon,
  // },
  // {
  //   title: "Automatic self-healing",
  //   description: [
  //     "Web pages change all the time, which can break hand-written scrapers.",
  //     `${COMPANY_NAME}'s Structors automatically update themselves when they encounter new data structures, so you don't have to worry about maintenance.`,
  //   ],
  //   icon: HeartIcon,
  // },
  // {
  //   title: "Easy scheduling",
  //   description: [
  //     "If you want the data once you often want it again.",
  //     `${COMPANY_NAME} allows you to schedule runs so you can get the data you need every hour, day, week, etc.`,
  //   ],
  //   icon: CalendarCheck01Icon,
  // },
  {
    title: "1. Set up a scraper",
    description: [
      "To get started, all you need is a JSON schema that describes the data you want to extract and a list of URLs.",
      "You can create scrapers from our UI, through our Python or TypeScript clients, or by using our API.",
    ],
    icon: Dataflow03Icon,
  },
  {
    title: `2. ${COMPANY_NAME} compiles this`,
    description: [
      `Using the JSON schema and the URLs, ${COMPANY_NAME} figures out how to extract the right data.`,
      `This can take a few minutes while the LLM works through the structure.`,
    ],
    icon: Dataflow03Icon,
  },
  {
    title: "3. The compiled scraper can be used.",
    description: [
      "Once the scraper is compiled, you can run it on any URL you like.",
      "Because the LLM has already figured out the structure, this is much faster - comparable to the performance you would get from a traditional scraper.",
      "We handle proxies and other infrastructure for you.",
    ],
    icon: Dataflow03Icon,
  },
  {
    title: `4. ${COMPANY_NAME} heals the scrapers`,
    description: [
      "After each interaction, Struct records the new information it has learned.",
      "This information is used to improve the knowledge graph, and the personas, making all of your tools more powerful over time. Struct also learns about individual humans, making it more effective at helping them.",
    ],
    icon: Dataflow03Icon,
  },
];

export function BenefitsSection() {
  return (
    <div className="flex flex-col space-y-10 px-12 items-center w-full pt-20 pb-32 bg-gray-2">
      <TypographyH2 size={"lg"}>Why use {COMPANY_NAME}</TypographyH2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto pt-12">
        {benefits.map((benefit, index) => (
          <div
            className="flex flex-col items-start space-y-4 bg-white rounded-xl px-8 py-10 text-gray-11"
            key={index}
          >
            <benefit.icon className="w-8 h-8 text-gray-9" />

            <TypographyH4 size={"lg"} className="pb-2">
              {benefit.title}
            </TypographyH4>
            {benefit.description.map((description, index) => (
              <TypographyP size={"lg"} key={index}>
                {description}
              </TypographyP>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
