"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function StepComplete() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-primary-dim"
      >
        <CheckCircle className="h-10 w-10 text-accent-primary" />
      </motion.div>

      {/* Header */}
      <div className="mb-8">
        <span className="section-label">{`// REQUEST_RECEIVED`}</span>
        <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
          Thank you!
        </h1>
        <p className="mt-4 font-body text-base text-text-secondary sm:text-lg">
          We&apos;ve received your information and will be in touch within 24
          hours to schedule your personalized demo.
        </p>
      </div>

      {/* What to expect */}
      <div className="mb-8 rounded-md border border-border-default bg-bg-tertiary p-6 text-left">
        <h2 className="mb-4 font-display text-lg font-semibold text-text-primary">
          What happens next?
        </h2>
        <ul className="space-y-3 font-body text-sm text-text-secondary">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-primary-dim text-xs font-medium text-accent-primary">
              1
            </span>
            <span>
              Our team will review your submission and prepare a customized demo
              based on your trades and workflow.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-primary-dim text-xs font-medium text-accent-primary">
              2
            </span>
            <span>
              You&apos;ll receive an email with available times to schedule a
              15-minute call.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-primary-dim text-xs font-medium text-accent-primary">
              3
            </span>
            <span>
              During the demo, we&apos;ll run a real takeoff using your
              measurements—see EstimatePros.ai in action.
            </span>
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <Button>Back to Homepage →</Button>
        </Link>
        <Link
          href="/pricing"
          className="font-body text-sm text-text-secondary transition-colors hover:text-accent-primary"
        >
          View pricing plans
        </Link>
      </div>
    </motion.div>
  );
}
