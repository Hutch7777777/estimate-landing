"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  subtitle: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
  note?: string;
  onCtaClick?: () => void;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  subtitle,
  features,
  cta,
  highlighted = false,
  badge,
  note,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-md border p-6 transition-all duration-300 lg:p-8",
        highlighted
          ? "border-accent-primary bg-bg-secondary shadow-[0_0_40px_rgba(0,255,136,0.1)] scale-[1.02] z-10"
          : "border-border-default bg-bg-secondary hover:border-border-hover"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-sm bg-accent-primary px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-bg-primary">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={cn("text-center", badge && "mt-2")}>
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {name}
        </h3>
        <p className="mt-1 font-body text-sm text-text-muted">{subtitle}</p>
      </div>

      {/* Price */}
      <div className="mt-6 text-center">
        {price === "Custom" ? (
          <span className="font-mono text-4xl font-bold text-text-primary lg:text-5xl">
            Custom
          </span>
        ) : (
          <div className="flex items-baseline justify-center">
            <span className="font-mono text-2xl font-medium text-text-muted">
              $
            </span>
            <span className="font-mono text-4xl font-bold text-text-primary lg:text-5xl">
              {price.replace("$", "")}
            </span>
            {period && (
              <span className="ml-1 font-body text-base text-text-muted">
                {period}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-primary-dim">
              <Check className="h-3 w-3 text-accent-primary" />
            </div>
            <span className="font-body text-sm text-text-secondary">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-8">
        <button
          onClick={onCtaClick}
          className={cn(
            "w-full rounded-sm px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.05em] transition-all duration-200 ease-out",
            highlighted
              ? "bg-accent-primary text-bg-primary hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]"
              : "border border-border-default bg-transparent text-text-primary hover:border-accent-primary hover:text-accent-primary"
          )}
        >
          {cta}
        </button>
      </div>

      {/* Note */}
      {note && (
        <p className="mt-4 text-center font-body text-xs text-text-muted">
          {note}
        </p>
      )}
    </div>
  );
}
