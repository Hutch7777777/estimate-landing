"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

const testimonials = [
  {
    quote:
      "I used to spend entire weekends on takeoffs. Now I quote jobs from my truck between sites.",
    name: "Mike R.",
    title: "Owner, Pacific Siding Co.",
    years: "23 years in business",
  },
  {
    quote:
      "We went from 3 estimates a week to 3 estimates a day. Game changer for our sales pipeline.",
    name: "Sarah T.",
    title: "Operations Manager, Summit Exteriors",
    years: "15 years in business",
  },
  {
    quote:
      "The line item traceability sold me. My clients can see exactly where every number comes from.",
    name: "Dave K.",
    title: "Owner, Precision Siding LLC",
    years: "8 years in business",
  },
  {
    quote:
      "Finally, software that understands exterior work. No more forcing our workflow into generic tools.",
    name: "Carlos M.",
    title: "Estimator, Northwest Contractors",
    years: "12 years in business",
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % testimonials.length);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  }, [currentIndex, goToSlide]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative overflow-hidden bg-bg-secondary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top accent border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <FadeIn>
          <div className="text-center">
            {/* Decorative quote icon */}
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-border-accent bg-accent-primary-dim">
              <Quote className="h-8 w-8 text-accent-primary" />
            </div>

            {/* Quote carousel */}
            <div className="relative min-h-[200px] sm:min-h-[180px]">
              {/* Navigation arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-primary/80 text-text-muted transition-all duration-200 hover:border-border-accent hover:text-accent-primary sm:-left-4 lg:-left-12"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-primary/80 text-text-muted transition-all duration-200 hover:border-border-accent hover:text-accent-primary sm:-right-4 lg:-right-12"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Quote content with fade transition */}
              <blockquote className="relative px-8 sm:px-12">
                {/* Opening quote mark */}
                <span
                  className="absolute -left-2 -top-4 font-display text-7xl leading-none text-accent-primary/10 sm:text-8xl lg:-left-8 lg:-top-8 lg:text-[10rem]"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div
                  className={cn(
                    "transition-all duration-500 ease-out",
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  )}
                >
                  <p className="relative font-display text-xl font-medium leading-relaxed text-text-primary sm:text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-[1.3]">
                    {currentTestimonial.quote}
                  </p>
                </div>

                {/* Closing quote mark */}
                <span
                  className="absolute -bottom-6 -right-2 font-display text-7xl leading-none text-accent-primary/10 sm:text-8xl lg:-bottom-10 lg:-right-8 lg:text-[10rem]"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </blockquote>

              {/* Attribution */}
              <footer
                className={cn(
                  "mt-8 transition-all duration-500 ease-out delay-100",
                  isAnimating ? "opacity-0" : "opacity-100"
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  <cite className="not-italic">
                    <span className="font-body text-lg font-medium text-text-primary">
                      — {currentTestimonial.name}
                    </span>
                    <span className="font-body text-lg text-text-secondary">
                      , {currentTestimonial.title}
                    </span>
                  </cite>
                  <span className="font-mono text-sm uppercase tracking-wider text-text-muted">
                    {currentTestimonial.years}
                  </span>
                </div>
              </footer>
            </div>

            {/* Dot indicators */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-accent-primary"
                      : "w-2 bg-text-muted/30 hover:bg-text-muted/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
    </section>
  );
}
