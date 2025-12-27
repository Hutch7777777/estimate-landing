"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export function FounderStory() {
  return (
    <section className="bg-bg-secondary px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Photo */}
          <FadeIn className="shrink-0">
            <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-accent-primary/50 shadow-[0_0_40px_rgba(0,255,136,0.15)]">
              <Image
                src="/About me pic.png"
                alt="Anthony Hutchinson"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Anthony Hutchinson
              </h2>
              <p className="mt-1 font-mono text-sm uppercase tracking-wider text-accent-primary">
                Founder, Estimate.ai
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-secondary md:text-lg">
                <p>
                  Hello, my name is Anthony—founder of Estimate.ai.
                </p>
                <p>
                  Over the past year, I&apos;ve been learning everything I
                  possibly can about AI and its applications to the construction
                  industry. As someone who&apos;s worked in exterior contracting
                  for years, I saw an opportunity to solve a problem that&apos;s
                  plagued our industry forever: the takeoff bottleneck.
                </p>
                <p>
                  Over the past several months, I built a tool that our team now
                  uses daily. The results speak for themselves—we spend 95% less
                  time on takeoffs, which means more time for thorough reviews,
                  tighter budgets, and winning more jobs.
                </p>
                <p>
                  There&apos;s no doubt in my mind that any exterior contracting
                  team would benefit from a tool like this. That&apos;s why
                  I&apos;m making it available to contractors like you.
                </p>
                <p>
                  This isn&apos;t just software. It&apos;s a competitive
                  advantage built by someone who understands exactly what
                  you&apos;re up against.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
