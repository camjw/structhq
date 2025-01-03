"use client";

import { HeroSection } from "@/components/landing/hero";
import { CTA } from "@/components/landing/cta";
import { HowItWorksSection } from "@/components/landing/how_it_works";
import { BenefitsSection } from "@/components/landing/benefits";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CTA />
    </>
  );
}
