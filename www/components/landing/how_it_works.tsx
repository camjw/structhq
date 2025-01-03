"use client";

import codeImage from "@/public/assets/landing/code.png";
import factsImage from "@/public/assets/landing/facts.png";
import learnedFactImage from "@/public/assets/landing/learned_fact.png";
import personasImage from "@/public/assets/landing/persona.png";
import Image from "next/image";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";

import { COMPANY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Feature {
  name: React.ReactNode;
  description: React.ReactNode[];
  visual: React.ComponentType;
}

const features: Array<Feature> = [
  {
    name: "1. Set up a scraper",
    description: [
      "To get started, all you need is a JSON schema that describes the data you want to extract and a list of URLs.",
      "You can create scrapers from our UI, through our Python or TypeScript clients, or by using our API.",
    ],
    visual: FactsImage,
  },
  {
    name: `2. ${COMPANY_NAME} compiles this`,
    description: [
      `Using the JSON schema and the URLs, ${COMPANY_NAME} figures out how to extract the right data.`,
      `This can take a few minutes while the LLM works through the structure.`,
    ],

    visual: PersonasImage,
  },
  {
    name: "3. The compiled scraper can be used.",
    description: [
      "Once the scraper is compiled, you can run it on any URL you like.",
      "Because the LLM has already figured out the structure, this is much faster - comparable to the performance you would get from a traditional scraper.",
      "We handle proxies and other infrastructure for you.",
    ],
    visual: CodeImage,
  },
  {
    name: `4. ${COMPANY_NAME} heals the scrapers`,
    description: [
      "After each interaction, Struct records the new information it has learned.",
      "This information is used to improve the knowledge graph, and the personas, making all of your tools more powerful over time. Struct also learns about individual humans, making it more effective at helping them.",
    ],
    visual: LearnedFactImage,
  },
];

function FactsImage() {
  return (
    <div className="py-2 bg-white rounded-xl border-gray-4 border shadow-lg">
      <Image src={factsImage} alt="Struct facts" />
    </div>
  );
}

function PersonasImage() {
  return (
    <div className="overflow-hidden rounded-xl border-gray-4 border shadow-lg">
      <Image src={personasImage} alt="Struct personas" />
    </div>
  );
}

function LearnedFactImage() {
  return (
    <div className="overflow-hidden rounded-xl border-gray-4 border shadow-lg">
      <Image src={learnedFactImage} alt="Struct learned fact" />
    </div>
  );
}

function CodeImage() {
  return (
    <div className="overflow-hidden rounded-xl border-gray-4 border shadow-lg">
      <Image src={codeImage} alt="Struct code snippet" />
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <div className="py-28">
      <div className="flex flex-col items-center space-y-20">
        <TypographyH2 size={"lg"}>How does {COMPANY_NAME} work?</TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {features.map((feature, featureIndex) => (
            <Feature
              key={featureIndex}
              feature={feature}
              side={featureIndex % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
  side,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  feature: Feature;
  side: "left" | "right";
}) {
  if (side === "left") {
    return <LeftFeature feature={feature} className={className} {...props} />;
  }

  return <RightFeature feature={feature} className={className} {...props} />;
}

function LeftFeature({
  feature,
  className,
  ...props
}: {
  feature: Feature;
  className?: string;
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex w-full bg-gray-2">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-7 max-w-7xl mx-auto px-8 py-20",
          className
        )}
        {...props}
      >
        <div className="flex flex-col space-y-8 col-span-1 md:col-span-2 pb-8">
          <TypographyH3 size={"lg"}>{feature.name}</TypographyH3>
          <div className="flex flex-col space-y-4">
            {feature.description.map((description, descriptionIndex) => (
              <TypographyP
                key={descriptionIndex}
                size={"lg"}
                className="text-gray-11"
              >
                {description}
              </TypographyP>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RightFeature({
  feature,
  className,
  ...props
}: {
  feature: Feature;
  className?: string;
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex w-full bg-white">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-7 mx-auto px-8 max-w-7xl py-20",
          className
        )}
        {...props}
      >
        <div className="flex flex-col space-y-8 col-span-1 md:col-span-2 pb-8">
          <TypographyH3 size={"lg"}>{feature.name}</TypographyH3>
          <div className="flex flex-col space-y-4">
            {feature.description.map((description, descriptionIndex) => (
              <TypographyP
                key={descriptionIndex}
                size={"lg"}
                className="text-gray-11"
              >
                {description}
              </TypographyP>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
