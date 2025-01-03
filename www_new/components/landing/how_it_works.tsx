"use client";

import codeImage from "@/public/assets/landing/code.png";
import factsImage from "@/public/assets/landing/facts.png";
import learnedFactImage from "@/public/assets/landing/learned_fact.png";
import personasImage from "@/public/assets/landing/persona.png";
import Image from "next/image";

import IntegrationCodeBlock from "@/components/landing/integration_code_block.mdx";
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
    name: "Sonata builds your knowledge graph",
    description: [
      "Sonata automatically understands, enriches, annotates and curates information from across your company.",
      "This knowledge graph can be shared across all of your tools, making them instantly context-aware.",
    ],
    visual: FactsImage,
  },
  {
    name: "You build personas to control access",
    description: [
      "Personas are a subset of your knowledge graph, with some additional metadata.",
      "This lets you control who can access what information in your knowledge graph, and focus the underlying LLMs on their tasks.",
    ],

    visual: PersonasImage,
  },
  {
    name: "Then integrate Sonata by changing one URL",
    description: [
      "To use Sonata in your tools all you need to do is point to Sonata's API rather than OpenAI or Anthropic's.",
      "This URL contains the persona you want to use, the human the persona is interacting with, and all the usual information you’d send to OpenAI or Anthropic.",
      "Sonata injects all the context from the knowledge graph into your tool.",
    ],
    visual: CodeImage,
  },
  {
    name: "And Sonata improves itself automatically",
    description: [
      "After each interaction, Sonata records the new information it has learned.",
      "This information is used to improve the knowledge graph, and the personas, making all of your tools more powerful over time. Sonata also learns about individual humans, making it more effective at helping them.",
    ],
    visual: LearnedFactImage,
  },
];

function FactsImage() {
  return (
    <div className="py-2 bg-white rounded-xl border-gray-4 border shadow-lg">
      <Image src={factsImage} alt="Sonata facts" />
    </div>
  );
}

function PersonasImage() {
  return (
    <div className="overflow-hidden rounded-xl border-gray-4 border shadow-lg">
      <Image src={personasImage} alt="Sonata personas" />
    </div>
  );
}

function LearnedFactImage() {
  return (
    <div className="overflow-hidden rounded-xl border-gray-4 border shadow-lg">
      <Image src={learnedFactImage} alt="Sonata learned fact" />
    </div>
  );
}

function CodeImage() {
  return (
    <div className="overflow-hidden rounded-xl border-gray-4 border shadow-lg">
      <Image src={codeImage} alt="Sonata code snippet" />
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <div className="py-28">
      <div className="flex flex-col items-center space-y-20">
        <TypographyH2 size={"lg"}>How does {COMPANY_NAME} work?</TypographyH2>

        <div className="flex flex-col space-y-12 w-full">
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
          className,
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
        <div className="hidden md:block" />
        <div className="col-span-1 md:col-span-4">
          <feature.visual />
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
          className,
        )}
        {...props}
      >
        <div className="hidden md:block col-span-4">
          <feature.visual />
        </div>
        <div className="hidden md:block" />
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
        <div className="col-span-1 md:hidden">
          <feature.visual />
        </div>
      </div>
    </div>
  );
}
