"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TradeCardProps {
  id: string;
  title: string;
  description: string;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function TradeCard({
  id,
  title,
  description,
  selected,
  onToggle,
}: TradeCardProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      className={cn(
        "flex w-full cursor-pointer items-start gap-3 rounded-md border p-4 text-left transition-all duration-200",
        selected
          ? "border-border-accent bg-accent-primary-dim"
          : "border-border-default bg-bg-tertiary hover:border-border-hover hover:-translate-y-0.5"
      )}
    >
      {/* Custom Checkbox */}
      <div
        className={cn(
          "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border transition-all duration-200",
          selected
            ? "border-accent-primary bg-accent-primary"
            : "border-border-default bg-bg-secondary"
        )}
      >
        {selected && (
          <Check className="h-3.5 w-3.5 text-bg-primary" strokeWidth={3} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <span className="block font-body text-base font-medium text-text-primary">
          {title}
        </span>
        <span className="mt-1 block font-body text-sm text-text-muted">
          {description}
        </span>
      </div>
    </button>
  );
}
