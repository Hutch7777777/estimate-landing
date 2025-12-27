"use client";

import { Check, Minus } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

type CellValue = string | boolean;

interface FeatureRow {
  feature: string;
  rrPro: CellValue;
  construction: CellValue;
  enterprise: CellValue;
}

const features: FeatureRow[] = [
  {
    feature: "Monthly estimates",
    rrPro: "30",
    construction: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "HOVER PDF processing",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Blueprint/CAD processing",
    rrPro: false,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Siding",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Roofing",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Windows & Doors",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Gutters",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Excel export (real formulas)",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Line item traceability",
    rrPro: true,
    construction: true,
    enterprise: true,
  },
  {
    feature: "Users included",
    rrPro: "1",
    construction: "3",
    enterprise: "Unlimited",
  },
  {
    feature: "Additional users",
    rrPro: "$50/ea",
    construction: "$50/ea",
    enterprise: "Included",
  },
  {
    feature: "Custom pricing database",
    rrPro: false,
    construction: false,
    enterprise: true,
  },
  {
    feature: "API access",
    rrPro: false,
    construction: false,
    enterprise: true,
  },
  {
    feature: "White-label",
    rrPro: false,
    construction: false,
    enterprise: true,
  },
  {
    feature: "Dedicated account manager",
    rrPro: false,
    construction: false,
    enterprise: true,
  },
  {
    feature: "SSO/SAML",
    rrPro: false,
    construction: false,
    enterprise: true,
  },
  {
    feature: "Support",
    rrPro: "Email",
    construction: "Priority Email",
    enterprise: "Dedicated",
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-accent-primary" />
    ) : (
      <Minus className="mx-auto h-5 w-5 text-text-muted" />
    );
  }
  return (
    <span className="font-body text-sm text-text-secondary">{value}</span>
  );
}

export function PricingTable() {
  return (
    <section className="bg-bg-primary px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center">
            <span className="section-label">// COMPARE_PLANS</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Feature comparison
            </h2>
          </div>
        </FadeIn>

        {/* Table Container - horizontal scroll on mobile */}
        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              {/* Header */}
              <thead>
                <tr className="border-b border-border-default">
                  <th className="pb-4 text-left font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Feature
                  </th>
                  <th className="pb-4 text-center font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                    R&R Pro
                  </th>
                  <th className="pb-4 text-center font-mono text-xs font-semibold uppercase tracking-wider text-accent-primary">
                    Construction Plans
                  </th>
                  <th className="pb-4 text-center font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Enterprise
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {features.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-border-default transition-colors duration-200",
                      index % 2 === 0 ? "bg-bg-primary" : "bg-bg-secondary/50"
                    )}
                  >
                    <td className="py-4 pr-4 font-body text-sm text-text-primary">
                      {row.feature}
                    </td>
                    <td className="py-4 text-center">
                      <CellContent value={row.rrPro} />
                    </td>
                    <td className="py-4 text-center">
                      <CellContent value={row.construction} />
                    </td>
                    <td className="py-4 text-center">
                      <CellContent value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
