"use client";

import { useState, useCallback, useEffect } from "react";

export interface OnboardingData {
  // Step 1: Contact Info
  fullName: string;
  email: string;
  phone: string;
  // Step 2: Company
  companyName: string;
  yearsInBusiness: string;
  teamSize: string;
  monthlyEstimates: string;
  stateRegion: string;
  // Step 3: Trades
  trades: string[];
  // Step 4: Workflow
  measurementSource: string;
  currentTool: string;
  biggestChallenge: string;
  additionalNotes: string;
}

const initialData: OnboardingData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  yearsInBusiness: "",
  teamSize: "",
  monthlyEstimates: "",
  stateRegion: "",
  trades: [],
  measurementSource: "",
  currentTool: "",
  biggestChallenge: "",
  additionalNotes: "",
};

const STORAGE_KEY = "estimate-onboarding";

// Webhook URL - configure this later
const WEBHOOK_URL = process.env.NEXT_PUBLIC_ONBOARDING_WEBHOOK_URL || "";

export function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed.data || initialData);
        setCurrentStep(parsed.step || 1);
      } catch {
        // Invalid data, start fresh
      }
    }
    setIsLoading(false);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (!isLoading && currentStep < 5) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ data, step: currentStep })
      );
    }
  }, [data, currentStep, isLoading]);

  const updateData = useCallback((updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    setCurrentStep(Math.min(Math.max(step, 1), 5));
  }, []);

  const clearProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setData(initialData);
    setCurrentStep(1);
  }, []);

  const submitForm = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // If webhook URL is configured, submit the data
      if (WEBHOOK_URL) {
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            submittedAt: new Date().toISOString(),
            source: "onboarding-form",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
      } else {
        // No webhook configured - just log to console
        console.log("Onboarding form submitted:", data);
      }

      // Clear localStorage on successful submission
      localStorage.removeItem(STORAGE_KEY);

      // Move to success step
      setCurrentStep(5);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [data]);

  return {
    currentStep,
    data,
    isLoading,
    isSubmitting,
    submitError,
    updateData,
    nextStep,
    prevStep,
    goToStep,
    clearProgress,
    submitForm,
  };
}
