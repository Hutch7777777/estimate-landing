"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { OnboardingData } from "@/hooks/useOnboarding";

interface StepProfileProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
}

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
}

export function StepProfile({ data, onUpdate, onNext }: StepProfileProps) {
  const [errors, setErrors] = useState<Errors>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "This field is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!validateEmail(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "This field is required";
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
        <span className="section-label">{`// STEP_01`}</span>
        <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
          Let&apos;s get started
        </h1>
        <p className="mt-2 font-body text-base text-text-secondary sm:text-lg">
          Tell us how to reach you.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="John Smith"
          value={data.fullName}
          onChange={(e) => onUpdate({ fullName: e.target.value })}
          error={errors.fullName}
          required
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          error={errors.email}
          required
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          value={data.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
          error={errors.phone}
          required
        />
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-end">
        <Button type="submit">Continue →</Button>
      </div>
    </motion.form>
  );
}
