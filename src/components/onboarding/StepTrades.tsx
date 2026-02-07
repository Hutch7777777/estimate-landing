"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TradeCard } from "./TradeCard";
import type { OnboardingData } from "@/hooks/useOnboarding";

interface StepTradesProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const trades = [
  {
    id: "fiber-cement",
    title: "Fiber Cement Siding",
    description: "HardiePlank, Artisan, and similar products",
  },
  {
    id: "lp-smartside",
    title: "LP SmartSide",
    description: "Engineered wood siding and trim",
  },
  {
    id: "vinyl",
    title: "Vinyl Siding",
    description: "Vinyl and aluminum products",
  },
  {
    id: "cedar-wood",
    title: "Cedar & Wood",
    description: "Natural wood siding and shakes",
  },
  {
    id: "asphalt-shingles",
    title: "Asphalt Shingles",
    description: "Standard and architectural shingles",
  },
  {
    id: "metal-roofing",
    title: "Metal Roofing",
    description: "Standing seam, corrugated, metal tiles",
  },
  {
    id: "windows-doors",
    title: "Windows & Doors",
    description: "Replacement and new construction",
  },
  {
    id: "gutters",
    title: "Gutters & Downspouts",
    description: "Seamless gutters, gutter guards",
  },
];

export function StepTrades({ data, onUpdate, onNext, onBack }: StepTradesProps) {
  const [error, setError] = useState<string | null>(null);

  const handleToggle = (tradeId: string) => {
    const currentTrades = data.trades || [];
    const newTrades = currentTrades.includes(tradeId)
      ? currentTrades.filter((t) => t !== tradeId)
      : [...currentTrades, tradeId];
    onUpdate({ trades: newTrades });
    if (newTrades.length > 0) {
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.trades || data.trades.length === 0) {
      setError("Please select at least one trade");
      return;
    }
    onNext();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Header */}
      <div className="mb-8">
        <span className="section-label">{`// STEP_03`}</span>
        <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
          What exterior work do you do?
        </h1>
        <p className="mt-2 font-body text-base text-text-secondary sm:text-lg">
          Select all that apply. We&apos;ll configure your database for these
          trades.
        </p>
      </div>

      {/* Trade Cards Grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {trades.map((trade) => (
          <TradeCard
            key={trade.id}
            id={trade.id}
            title={trade.title}
            description={trade.description}
            selected={data.trades?.includes(trade.id) || false}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-4 text-sm text-accent-secondary">{error}</p>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          ← Back
        </button>
        <Button type="submit">Continue →</Button>
      </div>
    </motion.form>
  );
}
