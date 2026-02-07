import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { FounderStory } from "@/components/about/FounderStory";
import { CompanyValues } from "@/components/about/CompanyValues";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | EstimatePros.ai",
  description:
    "Built by a contractor, for contractors. Learn about the story behind EstimatePros.ai and our mission to simplify exterior estimating.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <FounderStory />
        <CompanyValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
