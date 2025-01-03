import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";

import { COMPANY_DEMO_FORM_URL } from "@/lib/constants";

export function CTA() {
  return (
    <div className="flex flex-col space-y-14 items-center pb-32 pt-16">
      <TypographyH2 size={"lg"}>Book a demo today</TypographyH2>
      <Button size={"hero"} textVariant={"hero"} asChild>
        <Link href={COMPANY_DEMO_FORM_URL}>Get started</Link>
      </Button>
    </div>
  );
}
