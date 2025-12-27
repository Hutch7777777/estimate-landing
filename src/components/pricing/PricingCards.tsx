"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { PricingCard } from "./PricingCard";

const pricingTiers = [
  {
    name: "R&R Pro",
    price: "$99",
    period: "/month",
    subtitle: "For repair & replace contractors using HOVER",
    features: [
      "Up to 30 estimates/month",
      "HOVER PDF processing",
      "Siding, roofing, gutters, windows",
      "Excel export with real formulas",
      "Full line item traceability",
      "Email support",
    ],
    cta: "Start Free Trial",
    note: "$50/user after 3 users",
    highlighted: false,
  },
  {
    name: "Construction Plans",
    price: "$349",
    period: "/month",
    subtitle: "For contractors working from blueprints",
    features: [
      "Unlimited estimates",
      "AI vision for construction blueprints",
      "All exterior trades included",
      "PDF, CAD, and plan sheet support",
      "Excel export with real formulas",
      "Full line item traceability",
      "3 users included",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    badge: "MOST POPULAR",
    note: "$50/user after 3 users",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    subtitle: "Your business. Your database. Your rules.",
    features: [
      "Everything in Construction Plans",
      "Custom-built database for your business",
      "Your pricing rules encoded permanently",
      "Unlimited users",
      "Dedicated account manager",
      "API access for integrations",
      "White-label options",
      "Custom workflow automation",
      "Advanced analytics & reporting",
      "SSO/SAML authentication",
      "Priority feature requests",
      "On-site training available",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingCards() {
  return (
    <section className="bg-bg-primary px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <StaggerContainer
          className="grid gap-6 lg:grid-cols-3 lg:gap-8"
          staggerDelay={0.15}
        >
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <PricingCard
                name={tier.name}
                price={tier.price}
                period={tier.period}
                subtitle={tier.subtitle}
                features={tier.features}
                cta={tier.cta}
                highlighted={tier.highlighted}
                badge={tier.badge}
                note={tier.note}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trial note */}
        <p className="mt-10 text-center font-body text-sm text-text-muted">
          All plans include a{" "}
          <span className="text-text-secondary">14-day free trial</span>. No
          credit card required.
        </p>
      </div>
    </section>
  );
}
