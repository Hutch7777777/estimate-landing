# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EstimatePros.ai landing page - a marketing site for an AI-powered estimating tool for exterior contractors. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router
- **React 19** with TypeScript 5
- **Tailwind CSS 4** via PostCSS (uses `@theme inline` in globals.css, not tailwind.config.js)
- **Framer Motion** for scroll-triggered animations
- **Lucide React** for icons

### Project Structure

```
/src
  /app
    layout.tsx            # Root layout with fonts, metadata
    globals.css           # CSS variables, Tailwind theme, base styles
    page.tsx              # Homepage
    /about/page.tsx       # About page
    /pricing/page.tsx     # Pricing page
    /onboarding/page.tsx  # Multi-step onboarding flow

  /components
    /ui/                # Reusable primitives (Button, Input, Select)
    /sections/          # Page sections (Navigation, Hero, Features, Footer, etc.)
    /forms/             # Form components (DemoRequestForm)
    /animations/        # Animation wrappers (FadeIn, Counter)
    /pricing/           # Pricing page components
    /about/             # About page components
    /onboarding/        # Onboarding flow components (steps, progress)

  /lib
    utils.ts            # cn() helper (clsx + tailwind-merge)

  /hooks
    useScrollPosition.ts  # Scroll detection hook
    useOnboarding.ts      # Onboarding state management hook
```

### Design System

CSS variables are defined in `/src/app/globals.css`:
- **Primary accent:** `#00ff88` (green)
- **Secondary accent:** `#ff4d00` (orange)
- **Background:** `#08080c` (near black)
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (mono)

### Patterns

- Client components use `"use client"` directive
- Animation pattern: wrap sections with `FadeIn` component for scroll-triggered animations
- Path alias: `@/*` maps to `./src/*`
- All pages share `Navigation` and `Footer` components

## Key Files

- `/ESTIMATE_AI_LANDING_SPEC.md` - Complete brand/design specification document
- `/ESTIMATE_AI_PRICING_SPEC.md` - Pricing page specification
- `/ESTIMATE_AI_ONBOARDING_SPEC.md` - Onboarding flow specification
