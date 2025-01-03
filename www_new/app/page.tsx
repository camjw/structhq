import { BenefitsSection } from "@/components/landing/benefits";
import { CTA } from "@/components/landing/cta";
import { HeroSection } from "@/components/landing/hero";
import { HowItWorksSection } from "@/components/landing/how_it_works";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTA />
    </>
  );
}
