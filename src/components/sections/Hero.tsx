"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const stats = [
  { value: 99.7, suffix: "%", label: "Faster", sublabel: "Takeoffs" },
  { value: 3, suffix: " min", label: "Average", sublabel: "Turnaround" },
  { value: 100, suffix: "%", label: "Line Item", sublabel: "Traceability" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="blueprint-grid relative min-h-screen pt-[72px]"
    >
      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-20">
        {/* Full-width headline */}
        <div className="mb-10 text-center lg:mb-12">
          <FadeIn duration={0.6}>
            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              AI Estimating built by Exterior Contractors{" "}
              <span className="text-accent-primary">for Exterior Contractors</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} duration={0.6}>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
              AI-powered takeoffs built for exterior contractors. Upload your
              construction documents, get a complete material list and estimate
              before your coffee gets cold.
            </p>
          </FadeIn>
        </div>

        {/* Two-column layout: Video left, Form right */}
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-12">
          {/* Left Column - Video (55%) */}
          <div className="w-full lg:w-[55%]">
            <FadeIn delay={0.2} duration={0.6}>
              <VideoPlayer
                title="See EstimatePros.ai in Action"
                // Add your video src here when ready:
                // src="/demo-video.mp4"
                // poster="/demo-poster.jpg"
              />
            </FadeIn>

            {/* Stats Row - below video */}
            <StaggerContainer
              className="mt-8 grid grid-cols-3 gap-4 sm:gap-8"
              staggerDelay={0.1}
            >
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col text-center lg:text-left">
                    <span className="font-mono text-2xl font-bold text-accent-primary sm:text-3xl md:text-4xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="mt-1 font-body text-xs uppercase tracking-[0.1em] text-text-muted sm:text-sm">
                      {stat.label}
                    </span>
                    <span className="font-body text-xs uppercase tracking-[0.1em] text-text-muted sm:text-sm">
                      {stat.sublabel}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column - Form (45%) */}
          <div className="w-full lg:w-[45%]">
            <FadeIn delay={0.3} duration={0.6}>
              <DemoRequestForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
