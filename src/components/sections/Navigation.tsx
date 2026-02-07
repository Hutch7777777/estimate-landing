"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const isScrolled = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ease-out",
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-sm border-b border-border-default"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-mono text-xl font-bold tracking-tight text-text-primary">
            ESTIMATEPROS
          </span>
          <span className="font-mono text-xl font-bold tracking-tight text-accent-primary">
            .ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/#hero"
            className="inline-flex items-center justify-center rounded-sm bg-accent-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-bg-primary transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]"
          >
            Get Free Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-[72px] border-b border-border-default bg-bg-primary/98 backdrop-blur-sm transition-all duration-300 ease-out md:hidden",
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-4 py-3 font-body text-base font-medium text-text-secondary transition-colors duration-200 hover:bg-bg-secondary hover:text-text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-border-default pt-4">
            <Link
              href="/#hero"
              className="flex w-full items-center justify-center rounded-sm bg-accent-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-bg-primary transition-all duration-200 ease-out hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
