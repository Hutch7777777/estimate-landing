"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function AboutCTA() {
  return (
    <section className="relative bg-bg-secondary px-6 py-20 lg:py-28">
      {/* Top accent border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
            Want to see how it works?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Get a personalized demo with your actual project plans.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Link
              href="/#hero"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent-primary px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-bg-primary transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]"
            >
              Get a Free Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
    </section>
  );
}
