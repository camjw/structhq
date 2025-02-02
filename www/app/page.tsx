"use client";

import { HeroSection } from "@/components/landing/hero";
import { CTA } from "@/components/landing/cta";
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
