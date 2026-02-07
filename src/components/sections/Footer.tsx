"use client";

import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Get Started", href: "/onboarding" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center">
              <span className="font-mono text-xl font-bold tracking-tight text-text-primary">
                ESTIMATEPROS
              </span>
              <span className="font-mono text-xl font-bold tracking-tight text-accent-primary">
                .ai
              </span>
            </Link>

            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-text-secondary">
              AI-powered takeoffs built for exterior contractors. From 3 days to
              3 minutes.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-default bg-bg-primary text-text-muted transition-all duration-200 hover:border-border-accent hover:text-accent-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-default pt-8 sm:flex-row">
          <p className="font-body text-sm text-text-muted">
            &copy; {new Date().getFullYear()} EstimatePros.ai. All rights
            reserved.
          </p>

          <p className="font-mono text-xs text-text-muted">
            Built for contractors, by contractors.
          </p>
        </div>
      </div>
    </footer>
  );
}
