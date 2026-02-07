"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps?: number;
}

const steps = [
  { number: 1, label: "Profile" },
  { number: 2, label: "Company" },
  { number: 3, label: "Trades" },
  { number: 4, label: "Workflow" },
  { number: 5, label: "Complete" },
];

export function OnboardingProgress({
  currentStep,
  totalSteps = 5,
}: OnboardingProgressProps) {
  return (
    <div className="mb-8 w-full px-4">
      <div className="flex items-center justify-between">
        {steps.slice(0, totalSteps).map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isUpcoming = currentStep < step.number;

          return (
            <div key={step.number} className="flex flex-1 items-center">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm transition-all duration-300",
                    isCompleted && "bg-accent-primary text-bg-primary",
                    isCurrent &&
                      "border-2 border-accent-primary bg-bg-secondary text-accent-primary shadow-[0_0_20px_rgba(0,255,136,0.3)]",
                    isUpcoming &&
                      "border border-border-default bg-bg-secondary text-text-muted"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" strokeWidth={3} />
                  ) : (
                    step.number
                  )}
                </div>
                {/* Label - hidden on mobile */}
                <span
                  className={cn(
                    "mt-2 hidden text-xs sm:block",
                    isCompleted && "text-accent-primary",
                    isCurrent && "font-medium text-text-primary",
                    isUpcoming && "text-text-muted"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector Line */}
              {index < totalSteps - 1 && (
                <div className="relative mx-2 h-0.5 flex-1 bg-bg-tertiary sm:mx-4">
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 bg-accent-primary transition-all duration-500",
                      currentStep > step.number ? "w-full" : "w-0"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
