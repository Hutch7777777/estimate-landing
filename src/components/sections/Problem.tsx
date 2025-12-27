"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import {
  Calendar,
  FileSpreadsheet,
  Clock,
  AlertTriangle,
  Upload,
  Cpu,
  FileDown,
  CheckCircle2,
  X
} from "lucide-react";

export function Problem() {
  return (
    <section id="problem" className="bg-bg-secondary px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <FadeIn>
          <span className="section-label">// THE_PROBLEM</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Takeoffs shouldn&apos;t take days.
          </h2>
        </FadeIn>

        {/* Body Copy */}
        <FadeIn delay={0.2}>
          <div className="mt-6 max-w-3xl space-y-4 font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            <p>
              You&apos;re a siding contractor, not a spreadsheet jockey. But here you
              are—measuring PDFs, counting windows, triple-checking linear feet,
              manually pricing every line item. Three days later, you finally send
              the quote.
            </p>
            <p className="text-text-primary font-medium">
              By then, your competitor already won the job.
            </p>
          </div>
        </FadeIn>

        {/* Visual Comparison */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* The Old Way */}
          <FadeIn delay={0.3}>
            <div className="relative rounded-md border border-border-default bg-bg-primary p-6 lg:p-8">
              {/* Red accent line */}
              <div className="absolute left-0 top-0 h-1 w-full rounded-t-md bg-accent-secondary" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent-secondary/10">
                  <X className="h-5 w-5 text-accent-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  The Old Way
                </h3>
              </div>

              {/* Time badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent-secondary/10 px-3 py-1.5">
                <Clock className="h-4 w-4 text-accent-secondary" />
                <span className="font-mono text-sm font-semibold text-accent-secondary">
                  3 DAYS
                </span>
              </div>

              {/* Steps */}
              <div className="mt-6 space-y-4">
                <OldWayStep
                  icon={<FileSpreadsheet className="h-5 w-5" />}
                  text="Manually gather measurements"
                />
                <OldWayStep
                  icon={<Calendar className="h-5 w-5" />}
                  text="Enter into spreadsheet, double-check formulas"
                />
                <OldWayStep
                  icon={<AlertTriangle className="h-5 w-5" />}
                  text="Look up pricing, calculate waste factors"
                />
                <OldWayStep
                  icon={<Clock className="h-5 w-5" />}
                  text="Format quote, hope you didn't miss anything"
                />
              </div>

              {/* Result */}
              <div className="mt-6 border-t border-border-default pt-6">
                <p className="font-body text-sm text-text-muted">
                  Result: Exhausted, second-guessing your numbers, and hoping the
                  client hasn&apos;t already signed with someone else.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* The Estimate.ai Way */}
          <FadeIn delay={0.4}>
            <div className="relative rounded-md border border-border-accent bg-bg-primary p-6 lg:p-8">
              {/* Cyan accent line */}
              <div className="absolute left-0 top-0 h-1 w-full rounded-t-md bg-accent-primary" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent-primary-dim">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  The Estimate.ai Way
                </h3>
              </div>

              {/* Time badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent-primary-dim px-3 py-1.5">
                <Clock className="h-4 w-4 text-accent-primary" />
                <span className="font-mono text-sm font-semibold text-accent-primary">
                  3 MINUTES
                </span>
              </div>

              {/* Steps */}
              <div className="mt-6 space-y-4">
                <NewWayStep
                  number="01"
                  icon={<Upload className="h-5 w-5" />}
                  text="Upload your plans"
                />
                <NewWayStep
                  number="02"
                  icon={<Cpu className="h-5 w-5" />}
                  text="AI extracts measurements & generates takeoff"
                />
                <NewWayStep
                  number="03"
                  icon={<FileDown className="h-5 w-5" />}
                  text="Export professional quote with real formulas"
                />
              </div>

              {/* Result */}
              <div className="mt-6 border-t border-border-accent/30 pt-6">
                <p className="font-body text-sm text-text-secondary">
                  Result: Quote sent before lunch. Client impressed.
                  <span className="text-accent-primary font-medium"> Job won.</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function OldWayStep({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-bg-tertiary text-text-muted">
        {icon}
      </div>
      <p className="font-body text-sm text-text-secondary pt-1">{text}</p>
    </div>
  );
}

function NewWayStep({
  number,
  icon,
  text
}: {
  number: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-accent-primary-dim text-accent-primary">
        {icon}
      </div>
      <div className="pt-1">
        <span className="font-mono text-xs text-text-muted">STEP {number}</span>
        <p className="font-body text-sm text-text-primary">{text}</p>
      </div>
    </div>
  );
}
