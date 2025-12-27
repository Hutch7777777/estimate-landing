import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import { Features } from "@/components/sections/Features";
import { ExteriorFocus } from "@/components/sections/ExteriorFocus";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Testimonial />
        <Features />
        <ExteriorFocus />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
