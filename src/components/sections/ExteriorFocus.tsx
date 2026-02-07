"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import {
  PanelTop,
  TreePine,
  Layers2,
  TreeDeciduous,
  Home,
  Factory,
  DoorOpen,
  Pipette,
} from "lucide-react";

const trades = [
  {
    name: "Fiber Cement Siding",
    subtitle: "HardiePlank, Artisan, etc.",
    icon: PanelTop,
  },
  {
    name: "LP SmartSide",
    subtitle: "Engineered wood siding",
    icon: Layers2,
  },
  {
    name: "Vinyl & Aluminum",
    subtitle: "Traditional siding options",
    icon: Home,
  },
  {
    name: "Cedar & Wood",
    subtitle: "Natural wood finishes",
    icon: TreeDeciduous,
  },
  {
    name: "Asphalt Shingles",
    subtitle: "GAF, CertainTeed, Owens Corning",
    icon: TreePine,
  },
  {
    name: "Metal Roofing",
    subtitle: "Standing seam, corrugated",
    icon: Factory,
  },
  {
    name: "Windows & Doors",
    subtitle: "Rough openings, trim",
    icon: DoorOpen,
  },
  {
    name: "Gutters & Downspouts",
    subtitle: "Seamless, sectional",
    icon: Pipette,
  },
];

export function ExteriorFocus() {
  return (
    <section id="exterior-focus" className="bg-bg-secondary px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            {/* Section Label */}
            <FadeIn>
              <span className="section-label">// EXTERIOR_SPECIALISTS</span>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                We only do exteriors.
                <br />
                <span className="text-accent-primary">That&apos;s the point.</span>
              </h2>
            </FadeIn>

            {/* Body Copy */}
            <FadeIn delay={0.2}>
              <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-text-secondary">
                <p>
                  Generic takeoff software tries to do everything—framing,
                  electrical, plumbing, HVAC. They&apos;re a mile wide and an inch
                  deep.
                </p>
                <p>
                  EstimatePros.ai goes deep on what you actually do:{" "}
                  <span className="text-text-primary">James Hardie specs</span>,{" "}
                  <span className="text-text-primary">LP SmartSide waste factors</span>,{" "}
                  <span className="text-text-primary">GAF shingle calculations</span>,{" "}
                  <span className="text-text-primary">window rough openings</span>,{" "}
                  <span className="text-text-primary">gutter runs</span>. The details
                  that matter for exterior work.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Trades Grid */}
          <div>
            <FadeIn delay={0.2}>
              <p className="mb-6 font-mono text-sm uppercase tracking-wider text-text-muted">
                Trades we support
              </p>
            </FadeIn>

            <StaggerContainer
              className="grid grid-cols-2 gap-3 sm:gap-4"
              staggerDelay={0.05}
            >
              {trades.map((trade) => (
                <StaggerItem key={trade.name}>
                  <div className="group flex items-start gap-3 rounded-md border border-border-default bg-bg-primary p-4 transition-all duration-300 ease-out hover:border-border-accent hover:bg-bg-tertiary">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent-primary-dim">
                      <trade.icon className="h-5 w-5 text-accent-primary" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="font-display text-sm font-semibold text-text-primary">
                        {trade.name}
                      </h3>
                      <p className="mt-0.5 font-body text-xs text-text-muted">
                        {trade.subtitle}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
