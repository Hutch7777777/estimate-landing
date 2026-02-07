"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import {
  FileUp,
  Sliders,
  GitBranch,
  FileSpreadsheet,
  Layers,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Document Processing",
    description:
      "Upload blueprints, plan sheets, or measurement PDFs. AI extracts facade areas, window counts, linear feet—95%+ accuracy.",
    icon: FileUp,
  },
  {
    title: "Your Pricing Rules",
    description:
      "Configure material costs, labor rates, waste factors, L&I calculations. The system follows YOUR methodology.",
    icon: Sliders,
  },
  {
    title: "Full Provenance",
    description:
      "Every calculation traces back to source. Answer 'why is this here?' for any line item, instantly.",
    icon: GitBranch,
  },
  {
    title: "Real Excel Formulas",
    description:
      "Export takeoffs with actual formulas, not static values. Change a price, watch totals update. Full transparency.",
    icon: FileSpreadsheet,
  },
  {
    title: "Multi-Trade Support",
    description:
      "Siding, roofing, windows, gutters—one estimate. Separate tabs, combined totals, professional output.",
    icon: Layers,
  },
  {
    title: "Pricing Snapshots",
    description:
      "Lock in material costs at estimate time. Regenerate quotes months later with original pricing intact.",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-bg-primary px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <FadeIn>
          <span className="section-label">// CAPABILITIES</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Built for exterior. Nothing else.
          </h2>
        </FadeIn>

        {/* Subhead */}
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            This isn&apos;t generic construction software. EstimatePros.ai is
            purpose-built for siding, roofing, windows, and gutters.
          </p>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
          staggerDelay={0.1}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group flex h-full gap-4 rounded-md border border-border-default bg-bg-secondary p-6 transition-all duration-300 ease-out hover:border-border-accent">
                {/* Icon Container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border-accent/50 bg-accent-primary-dim transition-all duration-300 group-hover:border-accent-primary group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
                  <feature.icon className="h-6 w-6 text-accent-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
