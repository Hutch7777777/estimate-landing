"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function AboutHero() {
  return (
    <section className="relative bg-bg-primary px-6 pb-16 pt-32 lg:pb-20 lg:pt-40">
      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Section Label */}
        <FadeIn>
          <span className="section-label">// ABOUT</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Built by a contractor,{" "}
            <span className="text-accent-primary">for contractors.</span>
          </h1>
        </FadeIn>

        {/* Subhead */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            Estimate.ai isn&apos;t another tech company trying to
            &ldquo;disrupt&rdquo; construction. It&apos;s a tool built by
            someone who&apos;s actually done the work.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
