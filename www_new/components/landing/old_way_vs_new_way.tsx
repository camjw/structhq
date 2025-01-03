import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

import { COMPANY_NAME } from "@/lib/constants";

export function OldWayVsNewWaySection() {
  return (
    <div className="flex flex-col space-y-10 max-w-6xl mx-auto items-center">
      <TypographyH2 size={"lg"}>LLMs with context</TypographyH2>

      <TypographyP size={"lg"} className="text-gray-11">
        {COMPANY_NAME} is platform for building and curating a knowledge graph
        about your organisation, and then selectively sharing it with large
        language models. This means that every tool you company builds on top of
        an LLM will already know all about you, your team, your goals, and all
        the intricacies of your company.
      </TypographyP>
      <TypographyP size={"lg"} className="text-gray-11">
        {COMPANY_NAME} learns from every interaction with every connected tool
        and automatically updates the knowledge graph when it learns something
        new. A quick integration lets you expose a portion of your knowledge
        graph to any tool your organisation builds.
      </TypographyP>
    </div>
  );
}
