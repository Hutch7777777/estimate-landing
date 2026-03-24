"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden border-y border-border-default bg-bg-secondary px-6 py-20 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Label */}
        <FadeIn>
          <span className="section-label">// STAY_IN_THE_LOOP</span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Estimating tips from{" "}
            <span className="text-accent-primary">contractors who do it</span>
          </h2>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
            No spam. Practical advice on running a tighter exterior business —
            plus product updates as we launch.
          </p>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.3}>
          <div className="mt-8">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 rounded-sm border border-accent-primary/30 bg-accent-primary/[0.06] px-6 py-4">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent-primary" />
                <p className="font-body text-sm text-text-primary">
                  You&apos;re in. We&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:gap-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="h-12 flex-1 rounded-sm border border-border-default bg-bg-primary px-4 font-body text-sm text-text-primary placeholder-text-muted transition-colors duration-200 focus:border-border-accent focus:outline-none disabled:opacity-60 sm:rounded-r-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent-primary px-6 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-bg-primary transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-l-none"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Error */}
            {status === "error" && errorMsg && (
              <p className="mt-3 font-body text-sm text-accent-secondary">
                {errorMsg}
              </p>
            )}

            {/* Social proof */}
            {status !== "success" && (
              <p className="mt-4 font-body text-xs text-text-muted">
                Join contractors already on the waitlist. Unsubscribe any time.
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
