import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingTable } from "@/components/pricing/PricingTable";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Pricing | EstimatePros.ai",
  description:
    "Simple, transparent pricing for AI-powered takeoffs. Plans for repair & replace contractors and new construction teams.",
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        <PricingHero />
        <PricingCards />
        <PricingTable />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
