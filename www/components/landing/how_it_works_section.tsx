import { TypographyH1 } from "../ui/typography-h1";
import { TypographyH2 } from "../ui/typography-h2";
import { TypographyP } from "../ui/typography-p";

import IntegrationCodeBlock from "./integration_code_block.mdx";

const bullets = [
  "The main concept in Struct is a Structor. A Structor is a self-healing web scraper which extracts structured data from any web page.",
  "You create a new Structor with list of urls and a json schema that describes the data you want to extract.",
  "It takes a few minutes for Struct to create the Structor, but once it’s figured out the right structure you can rerun it on whatever URLs you like and it’s a lot faster.",
  "If the structor fails to find the data on a subsequent run it’ll self-heal by updating its internal code.",
  "You can also set up scheduled runs if you know that, for instance, you want to get some data from a website every hour, day, week, etc.",
  "Struct gives you the data back as a list of JSON objects.",
];

const sections = [
  {
    title: "Setting up a Structor",
    description: [
      "You create a new Structor with list of urls and a json schema that describes the data you want to extract.",
      "It takes a few minutes for Struct to create the Structor, but once it’s figured out the right structure you can rerun it on whatever URLs you like and it’s a lot faster.",
    ],
  },
  {
    title: "Self-healing",
    description: [
      "If the structor fails to find the data on a subsequent run it’ll self-heal by updating its internal code.",
    ],
  },
  {
    title: "Scheduled runs",
    description: [
      "You can also set up scheduled runs if you know that, for instance, you want to get some data from a website every hour, day, week, etc.",
    ],
  },
  {
    title: "Data output",
    description: ["Struct gives you the data back as a list of JSON objects."],
  },
];

export function HowItWorksSection() {
  return (
    <div className="flex flex-col w-full bg-gray-2">
      <div className="flex flex-col items-start px-32 w-full py-32 space-y-12">
        <div className="flex flex-col items-center space-y-4 w-full">
          <span className="uppercase text-sm text-primary-10 font-mono font-bold tracking-wide">
            Features
          </span>
          <TypographyH2 size={"lg"}>Data without the headaches</TypographyH2>
        </div>

        {bullets.map((bullet, index) => (
          <TypographyP className="max-w-2xl" size={"lg"}>
            {bullet}
          </TypographyP>
        ))}
      </div>
    </div>
  );
}
