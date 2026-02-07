"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import type { OnboardingData } from "@/hooks/useOnboarding";

interface StepCompanyProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface Errors {
  companyName?: string;
  yearsInBusiness?: string;
  teamSize?: string;
  monthlyEstimates?: string;
  stateRegion?: string;
}

const yearsOptions = [
  { value: "less-than-1", label: "Less than 1 year" },
  { value: "1-3", label: "1-3 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" },
];

const teamSizeOptions = [
  { value: "1", label: "Just me" },
  { value: "2-5", label: "2-5 employees" },
  { value: "6-10", label: "6-10 employees" },
  { value: "11-25", label: "11-25 employees" },
  { value: "25+", label: "25+ employees" },
];

const monthlyEstimatesOptions = [
  { value: "1-10", label: "1-10" },
  { value: "11-25", label: "11-25" },
  { value: "26-50", label: "26-50" },
  { value: "50+", label: "50+" },
];

const stateOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export function StepCompany({
  data,
  onUpdate,
  onNext,
  onBack,
}: StepCompanyProps) {
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!data.companyName.trim()) {
      newErrors.companyName = "This field is required";
    }
    if (!data.yearsInBusiness) {
      newErrors.yearsInBusiness = "This field is required";
    }
    if (!data.teamSize) {
      newErrors.teamSize = "This field is required";
    }
    if (!data.monthlyEstimates) {
      newErrors.monthlyEstimates = "This field is required";
    }
    if (!data.stateRegion) {
      newErrors.stateRegion = "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
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
        <span className="section-label">{`// STEP_02`}</span>
        <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
          Tell us about your business
        </h1>
        <p className="mt-2 font-body text-base text-text-secondary sm:text-lg">
          This helps us tailor EstimatePros.ai to your operation.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        <Input
          label="Company Name"
          name="companyName"
          placeholder="Pacific Siding Co."
          value={data.companyName}
          onChange={(e) => onUpdate({ companyName: e.target.value })}
          error={errors.companyName}
          required
        />

        <Select
          label="Years in Business"
          name="yearsInBusiness"
          options={yearsOptions}
          placeholder="Select..."
          value={data.yearsInBusiness}
          onChange={(e) => onUpdate({ yearsInBusiness: e.target.value })}
          error={errors.yearsInBusiness}
          required
        />

        <Select
          label="Team Size"
          name="teamSize"
          options={teamSizeOptions}
          placeholder="Select..."
          value={data.teamSize}
          onChange={(e) => onUpdate({ teamSize: e.target.value })}
          error={errors.teamSize}
          required
        />

        <Select
          label="Monthly Estimates"
          name="monthlyEstimates"
          options={monthlyEstimatesOptions}
          placeholder="Select..."
          value={data.monthlyEstimates}
          onChange={(e) => onUpdate({ monthlyEstimates: e.target.value })}
          error={errors.monthlyEstimates}
          required
        />

        <Select
          label="State/Region"
          name="stateRegion"
          options={stateOptions}
          placeholder="Select..."
          value={data.stateRegion}
          onChange={(e) => onUpdate({ stateRegion: e.target.value })}
          error={errors.stateRegion}
          required
        />
      </div>

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
