"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Target, Eye, Focus } from "lucide-react";

const values = [
  {
    title: "Accuracy over speed",
    description: "We'd rather be right than fast. But we're usually both.",
    icon: Target,
  },
  {
    title: "Transparency always",
    description: "Every line item is traceable. No black boxes.",
    icon: Eye,
  },
  {
    title: "Built for exteriors",
    description: "We go deep, not wide. This is all we do.",
    icon: Focus,
  },
];

export function CompanyValues() {
  return (
    <section className="bg-bg-primary px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center">
            <span className="section-label">// OUR_VALUES</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              What we stand for
            </h2>
          </div>
        </FadeIn>

        {/* Values Grid */}
        <StaggerContainer
          className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-8"
          staggerDelay={0.1}
        >
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group rounded-md border border-border-default bg-bg-secondary p-6 text-center transition-all duration-300 hover:border-border-accent lg:p-8">
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border-accent/50 bg-accent-primary-dim transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
                  <value.icon className="h-7 w-7 text-accent-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-body text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
