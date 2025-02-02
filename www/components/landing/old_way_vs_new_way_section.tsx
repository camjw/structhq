import React from "react";

import { BookOpen02Icon } from "@/icons/outline/book-open-02";
import { Dataflow03Icon } from "@/icons/outline/dataflow-03";
import { User01Icon } from "@/icons/outline/user-01";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyH4 } from "@/components/ui/typography-h4";
import { TypographyP } from "@/components/ui/typography-p";
import { COMPANY_NAME } from "@/lib/constants";

type Benefit = {
  title: string;
  description: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const benefits: Benefit[] = [
  {
    title: "Enrich LLMs with real-time knowledge",
    description: [
      "LLMs are powerful, but they need to understand your business to be useful. Sonata provides that context.",
      "Knowing your organization's goals, structure, and terminology makes LLMs more effective and easier to use.",
    ],
    icon: Dataflow03Icon,
  },
  {
    title: "Maintain context and personal memory between tools",
    description: [
      "Every human user has their own Sonata profile, which can be shared with any internal tool.",
      "No need to retrain models or re-enter information. If one tool knows about your quarterly goals, they all do - automatically.",
    ],
    icon: User01Icon,
  },
  {
    title: "Consistency with a single source of truth",
    description: [
      "Sonata's knowledge graph spans your entire organization, providing a comprehensive foundation for adoption.",
      "Building useful tools on top of Sonata is easy, because they all share the same knowledge.",
    ],
    icon: BookOpen02Icon,
  },
];

export function OldWayVsNewWaySection() {
  return (
    <div className="flex flex-col space-y-10 px-12 items-center w-full pt-20 pb-32 bg-gray-2">
      <TypographyH2 size={"lg"}>Why not build your own scrapers?</TypographyH2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-start space-y-4 bg-white rounded-xl px-8 py-6 text-gray-11">
          <TypographyH4 size={"lg"}>With Puppeteer</TypographyH4>
        </div>
        <div className="flex flex-col items-start space-y-4 bg-white rounded-xl px-8 py-6 text-gray-11">
          <TypographyH4 size={"lg"}>With {COMPANY_NAME}</TypographyH4>
        </div>
      </div>
    </div>
  );
}
