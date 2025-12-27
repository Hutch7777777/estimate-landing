"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function PricingCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-6 py-24 lg:py-32">
      {/* Background accent elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle radial gradient */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.03] blur-3xl" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-50" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Section Label */}
        <FadeIn>
          <span className="section-label">// GET_STARTED</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Not sure which plan is right?
          </h2>
        </FadeIn>

        {/* Subhead */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            Book a 15-minute call. We&apos;ll analyze your workflow and
            recommend the best fit—no pressure.
          </p>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Link
              href="/#hero"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent-primary px-10 py-5 font-mono text-base font-semibold uppercase tracking-[0.05em] text-bg-primary transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(0,255,136,0.4)]"
            >
              Schedule a Call
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />
    </section>
  );
}
