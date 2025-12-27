"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function PricingHero() {
  return (
    <section className="relative bg-bg-primary px-6 pb-12 pt-32 lg:pb-16 lg:pt-40">
      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Section Label */}
        <FadeIn>
          <span className="section-label">// PRICING</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="mt-4 font-display text-4xl font-bold text-text-primary sm:text-5xl md:text-6xl lg:text-[4rem]">
            Simple pricing.
            <br />
            <span className="text-accent-primary">Serious results.</span>
          </h1>
        </FadeIn>

        {/* Subhead */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            Whether you&apos;re a one-truck crew or a 50-person operation,
            there&apos;s a plan that fits.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
