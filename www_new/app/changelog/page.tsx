import { ArrowLeftIcon } from "@/icons/outline/arrow-left";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typography-p";

export default function Changelog() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-2 h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)]">
      <div className="container text-center flex flex-col gap-10 h-full items-center justify-center">
        <div className="flex flex-col gap-5">
          <TypographyH1 size="lg">Coming soon!</TypographyH1>
        </div>
        <Button asChild variant="tertiary" size="sm">
          <Link href="/" className="gap-2 w-fit mx-auto">
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            Return home
          </Link>
        </Button>
      </div>
    </section>
  );
}
