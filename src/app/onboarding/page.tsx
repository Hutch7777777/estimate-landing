import { Metadata } from "next";
import { OnboardingContainer } from "@/components/onboarding/OnboardingContainer";

export const metadata: Metadata = {
  title: "Get Started | EstimatePros.ai",
  description:
    "Set up your EstimatePros.ai account and start generating AI-powered takeoffs in minutes.",
};

export default function OnboardingPage() {
  return <OnboardingContainer />;
}
