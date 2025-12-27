"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { cn } from "@/lib/utils";

const monthlyEstimateOptions = [
  { value: "1-10", label: "1-10" },
  { value: "11-25", label: "11-25" },
  { value: "26-50", label: "26-50" },
  { value: "50+", label: "50+" },
];

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  monthlyEstimates: string;
}

export function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    monthlyEstimates: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Form submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <div className="rounded-md border border-border-accent bg-bg-secondary p-8 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary-dim">
          <svg
            className="h-6 w-6 text-accent-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-text-primary">
          Request received
        </h3>
        <p className="font-body text-text-secondary">
          We&apos;ll be in touch within 24 hours to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border-default bg-bg-secondary p-6 lg:p-8">
      {/* Form Label */}
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-primary">
        // REQUEST_FREE_DEMO
      </span>

      {/* Form Title */}
      <h3 className="mt-4 font-display text-2xl font-semibold text-text-primary">
        See it with your own plans
      </h3>

      {/* Form Subtitle */}
      <p className="mt-2 font-body text-text-secondary">
        We&apos;ll run a takeoff on your actual project—free.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="John Smith"
          required
          value={formData.fullName}
          onChange={handleChange("fullName")}
        />

        <Input
          label="Company Name"
          name="companyName"
          type="text"
          placeholder="Smith Siding Co."
          required
          value={formData.companyName}
          onChange={handleChange("companyName")}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@smithsiding.com"
          required
          value={formData.email}
          onChange={handleChange("email")}
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange("phone")}
        />

        <Select
          label="Monthly Estimates"
          name="monthlyEstimates"
          required
          placeholder="Select range..."
          options={monthlyEstimateOptions}
          value={formData.monthlyEstimates}
          onChange={handleChange("monthlyEstimates")}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "mt-2 flex w-full items-center justify-center gap-2 rounded-sm bg-accent-primary px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-bg-primary transition-all duration-200 ease-out",
            "hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Get My Free Demo
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
