"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { OnboardingProgress } from "./OnboardingProgress";
import { StepProfile } from "./StepProfile";
import { StepCompany } from "./StepCompany";
import { StepTrades } from "./StepTrades";
import { StepWorkflow } from "./StepWorkflow";
import { StepComplete } from "./StepComplete";
import { useOnboarding } from "@/hooks/useOnboarding";

export function OnboardingContainer() {
  const {
    currentStep,
    data,
    isLoading,
    isSubmitting,
    submitError,
    updateData,
    nextStep,
    prevStep,
    submitForm,
  } = useOnboarding();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-primary">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary">
      {/* Simple Header */}
      <header className="flex h-16 items-center border-b border-border-default px-6">
        <Link href="/" className="font-mono text-lg font-bold text-text-primary">
          ESTIMATE<span className="text-accent-primary">.ai</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:py-12">
        <div className="w-full max-w-xl">
          {/* Progress Indicator - hide on success step */}
          {currentStep < 5 && <OnboardingProgress currentStep={currentStep} />}

          {/* Form Container */}
          <div className="rounded-lg border border-border-default bg-bg-secondary p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <StepProfile
                  key="profile"
                  data={data}
                  onUpdate={updateData}
                  onNext={nextStep}
                />
              )}
              {currentStep === 2 && (
                <StepCompany
                  key="company"
                  data={data}
                  onUpdate={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 3 && (
                <StepTrades
                  key="trades"
                  data={data}
                  onUpdate={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 4 && (
                <StepWorkflow
                  key="workflow"
                  data={data}
                  onUpdate={updateData}
                  onSubmit={submitForm}
                  onBack={prevStep}
                  isSubmitting={isSubmitting}
                  submitError={submitError}
                />
              )}
              {currentStep === 5 && <StepComplete key="complete" />}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
