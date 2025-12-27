"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Upload, Cpu, FileDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload your plans",
    description:
      "No manual measurements. No data entry. Just drag, drop, done. Our AI extracts every dimension from your blueprints—facade areas, window perimeters, linear feet, roof pitches.",
    icon: Upload,
  },
  {
    number: "02",
    title: "AI generates your takeoff",
    description:
      "Trained on YOUR pricing methodology. Materials, labor, waste factors—calculated automatically. Every line item traces back to source measurements.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Export and close the deal",
    description:
      "Download a professional Excel takeoff with real formulas—not static values. Your clients see exactly how you got there.",
    icon: FileDown,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-primary px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <FadeIn>
          <span className="section-label">// HOW_IT_WORKS</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Three steps. Three minutes.
          </h2>
        </FadeIn>

        {/* Steps Grid */}
        <StaggerContainer
          className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8"
          staggerDelay={0.15}
        >
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative h-full rounded-md border border-border-default bg-bg-secondary p-6 transition-all duration-300 ease-out hover:border-border-accent lg:p-8">
                {/* Step Number Badge */}
                <div className="inline-flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold text-accent-primary">
                    STEP
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent-primary-dim font-mono text-sm font-bold text-accent-primary">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-sm border border-border-default bg-bg-tertiary transition-all duration-300 group-hover:border-border-accent group-hover:bg-accent-primary-dim">
                  <step.icon className="h-6 w-6 text-text-secondary transition-colors duration-300 group-hover:text-accent-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-display text-xl font-semibold text-text-primary lg:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
                  {step.description}
                </p>

                {/* Decorative corner accent on hover */}
                <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden rounded-br-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -bottom-8 -right-8 h-16 w-16 rotate-45 bg-gradient-to-t from-accent-primary/10 to-transparent" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Connecting line visual (desktop only) */}
        <FadeIn delay={0.5} className="hidden md:block">
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-default to-transparent" />
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Upload → Process → Done
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-default to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
