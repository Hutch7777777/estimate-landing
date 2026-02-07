"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { OnboardingData } from "@/hooks/useOnboarding";

interface StepWorkflowProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  submitError: string | null;
}

interface Errors {
  measurementSource?: string;
  currentTool?: string;
  biggestChallenge?: string;
}

const measurementSourceOptions = [
  { value: "hover", label: "HOVER" },
  { value: "eagleview", label: "EagleView" },
  { value: "manual", label: "Manual measurements" },
  { value: "blueprints", label: "Blueprints/Plans" },
  { value: "other", label: "Other" },
];

const currentToolOptions = [
  { value: "excel", label: "Excel/Spreadsheets" },
  { value: "pen-paper", label: "Pen and paper" },
  { value: "other-software", label: "Other software" },
  { value: "none", label: "None—I'm starting fresh" },
];

const biggestChallengeOptions = [
  { value: "time", label: "Takeoffs take too long" },
  { value: "pricing", label: "Inconsistent pricing" },
  { value: "scale", label: "Difficult to scale" },
  { value: "errors", label: "Too many errors" },
  { value: "other", label: "Other" },
];

export function StepWorkflow({
  data,
  onUpdate,
  onSubmit,
  onBack,
  isSubmitting,
  submitError,
}: StepWorkflowProps) {
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!data.measurementSource) {
      newErrors.measurementSource = "This field is required";
    }
    if (!data.currentTool) {
      newErrors.currentTool = "This field is required";
    }
    if (!data.biggestChallenge) {
      newErrors.biggestChallenge = "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
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
        <span className="section-label">{`// STEP_04`}</span>
        <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
          How do you work today?
        </h1>
        <p className="mt-2 font-body text-base text-text-secondary sm:text-lg">
          Understanding your current process helps us tailor the demo to your
          needs.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        <Select
          label="Primary Measurement Source"
          name="measurementSource"
          options={measurementSourceOptions}
          placeholder="Select..."
          value={data.measurementSource}
          onChange={(e) => onUpdate({ measurementSource: e.target.value })}
          error={errors.measurementSource}
          required
        />

        <Select
          label="Current Estimating Tool"
          name="currentTool"
          options={currentToolOptions}
          placeholder="Select..."
          value={data.currentTool}
          onChange={(e) => onUpdate({ currentTool: e.target.value })}
          error={errors.currentTool}
          required
        />

        <Select
          label="Biggest Challenge"
          name="biggestChallenge"
          options={biggestChallengeOptions}
          placeholder="Select..."
          value={data.biggestChallenge}
          onChange={(e) => onUpdate({ biggestChallenge: e.target.value })}
          error={errors.biggestChallenge}
          required
        />

        {/* Optional Text Area */}
        <div className="w-full">
          <label
            htmlFor="additionalNotes"
            className="mb-2 block font-body text-sm font-medium text-text-secondary"
          >
            Anything else we should know?
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={3}
            placeholder="Tell us about your specific needs or challenges..."
            value={data.additionalNotes}
            onChange={(e) => onUpdate({ additionalNotes: e.target.value })}
            className={cn(
              "w-full resize-none rounded-sm border border-border-default bg-bg-secondary px-4 py-3.5 font-body text-base text-text-primary placeholder:text-text-muted transition-all duration-200",
              "focus:border-border-accent focus:outline-none focus:ring-2 focus:ring-accent-primary-dim"
            )}
          />
        </div>
      </div>

      {/* Error Message */}
      {submitError && (
        <p className="mt-4 text-sm text-accent-secondary">{submitError}</p>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary disabled:opacity-50"
        >
          ← Back
        </button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request →"}
        </Button>
      </div>
    </motion.form>
  );
}
