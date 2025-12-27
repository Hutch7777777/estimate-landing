"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's the difference between R&R Pro and Construction Plans?",
    answer:
      "R&R Pro is designed for repair and replace work using HOVER measurement reports. Construction Plans uses advanced AI vision to read architectural blueprints and plan sheets—perfect for new construction projects.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. Upgrade or downgrade anytime. We'll prorate the difference.",
  },
  {
    question: "What counts as an \"estimate\"?",
    answer:
      "One estimate = one project. Upload a HOVER PDF or blueprint set, get a complete takeoff. Multi-page documents count as one estimate.",
  },
  {
    question: "Do you offer annual pricing?",
    answer:
      "Yes. Pay annually and get 2 months free on any plan.",
  },
  {
    question: "What file formats do you support?",
    answer:
      "R&R Pro supports HOVER PDFs. Construction Plans supports PDF blueprints, CAD files, and multi-page plan sets.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Absolutely. Every plan includes a 14-day free trial. No credit card required to start.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-md border border-border-default bg-bg-secondary overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-bg-primary/50"
      >
        <span className="font-display text-base font-semibold text-text-primary sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-text-muted transition-transform duration-300",
            isOpen && "rotate-180 text-accent-primary"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-border-default px-6 py-5">
              <p className="font-body text-base leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-bg-secondary px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center">
            <span className="section-label">// FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <StaggerContainer className="mt-12 space-y-4" staggerDelay={0.1}>
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.question}>
              <FAQAccordionItem
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
