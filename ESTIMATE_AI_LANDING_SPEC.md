# ESTIMATE.AI LANDING PAGE SPECIFICATION
## Complete Design & Development Guide

---

# PART 1: BRAND & MESSAGING

## Brand Identity
- **Name:** Estimate.ai
- **Tagline:** "3 days to 3 minutes."
- **Secondary:** "Your expertise. Encoded."
- **Voice:** Confident, direct, technical but accessible. Speaks to tradespeople, not tech bros.

## Target Audience
- **Primary:** Siding company owners (5-20 employees)
- **Secondary:** Exterior finish contractors, GCs doing exterior work
- **Their world:** Trucks, job sites, supplier runs, crew management
- **Their pain:** Spending DAYS on takeoffs, losing bids because they can't turn quotes fast enough

## Core Value Proposition
**Before Estimate.ai:** Takeoffs take 2-3 days. Manual measurements. Spreadsheet hell. Miss bids because you can't quote fast enough.

**After Estimate.ai:** Upload a HOVER PDF, get a complete takeoff in minutes. Price it, send it, win it.

## Key Claims (all must be defensible)
1. **"3 days to 3 minutes"** - Primary claim, the hook
2. **"Exterior-focused"** - Not generic construction software
3. **"Every line item traceable"** - Provenance tracking differentiator
4. **"Your pricing, your rules"** - Customizable to their methodology
5. **"Excel formulas, not static values"** - Transparency for clients

## Competitive Positioning
- Blueprint Pro AI = service-based, multi-trade, enterprise
- Estimate.ai = software for exterior specialists, YOUR tool, YOUR pricing

---

# PART 2: DESIGN SYSTEM

## Color Palette

### Primary Colors
```
--bg-primary: #08080c          /* Near black, slightly blue */
--bg-secondary: #0f0f14        /* Cards, elevated surfaces */
--bg-tertiary: #16161f         /* Hover states, borders */
```

### Accent Colors
```
--accent-primary: #00e5ff      /* Cyan - primary actions, highlights */
--accent-primary-dim: rgba(0, 229, 255, 0.1)  /* Cyan glow backgrounds */
--accent-primary-bright: #5ff5ff  /* Hover state */

--accent-secondary: #ff4d00    /* Orange - urgency, secondary CTA */
```

### Text Colors
```
--text-primary: #ffffff        /* Headlines, primary content */
--text-secondary: #9ca3af      /* Body copy, descriptions */
--text-muted: #4b5563          /* Labels, captions, metadata */
--text-accent: #00e5ff         /* Links, highlighted text */
```

### Semantic Colors
```
--border-default: rgba(255, 255, 255, 0.06)
--border-hover: rgba(255, 255, 255, 0.12)
--border-accent: rgba(0, 229, 255, 0.3)
```

## Typography

### Font Stack
```css
/* Headlines - Bold, geometric, confident */
--font-display: 'Space Grotesk', sans-serif;

/* Body - Clean, readable */
--font-body: 'Inter', sans-serif;

/* Monospace - Technical details, numbers, code-like elements */
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale
```css
--text-hero: 4.5rem;      /* 72px - Main hero headline only */
--text-h1: 3.5rem;        /* 56px - Section headlines */
--text-h2: 2.5rem;        /* 40px - Sub-section headlines */
--text-h3: 1.5rem;        /* 24px - Card titles */
--text-h4: 1.25rem;       /* 20px - Small headings */
--text-body: 1.125rem;    /* 18px - Body copy */
--text-small: 0.875rem;   /* 14px - Captions, labels */
--text-xs: 0.75rem;       /* 12px - Metadata, tags */
```

### Font Weights
```css
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

## Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 5rem;     /* 80px */
--space-16: 8rem;     /* 128px */
```

## Border & Radius
```css
--radius-none: 0;
--radius-sm: 2px;     /* Buttons, inputs */
--radius-md: 4px;     /* Cards */
--radius-lg: 8px;     /* Modals, large containers */
```

## Shadows & Effects
```css
/* Subtle elevation */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);

/* Card elevation */
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.5);

/* Accent glow (for buttons, highlights) */
--glow-accent: 0 0 40px rgba(0, 229, 255, 0.3);

/* Blueprint grid pattern */
--grid-pattern: 
  linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px);
```

---

# PART 3: COMPONENT SPECIFICATIONS

## Navigation
```
Height: 72px
Background: Transparent → bg-primary on scroll
Logo: "ESTIMATE" in font-mono weight-bold, ".ai" in accent-primary
Links: font-body text-small weight-medium text-secondary
CTA Button: "Get Free Demo" - filled accent-primary
Behavior: Sticky, adds background + border-bottom on scroll
```

## Hero Section
```
Layout: Two columns (60/40 split)
Left: Headline, subhead, stats row
Right: Demo request form
Min-height: 100vh
Background: Blueprint grid pattern, subtle
```

## Primary Button
```
Padding: 16px 32px
Background: accent-primary
Text: bg-primary, font-mono, weight-semibold, uppercase, letter-spacing 0.05em
Border: none
Radius: radius-sm (2px)
Hover: Scale 1.02, glow-accent shadow
Transition: all 0.2s ease-out
```

## Secondary Button
```
Padding: 16px 32px
Background: transparent
Text: text-primary, font-mono, weight-semibold, uppercase
Border: 1px solid border-default
Hover: border-accent, text-accent
```

## Form Inputs
```
Padding: 14px 16px
Background: bg-secondary
Border: 1px solid border-default
Text: text-primary, font-body
Placeholder: text-muted
Focus: border-accent, glow ring (accent-primary-dim)
Radius: radius-sm
```

## Section Label
```
Font: font-mono
Size: text-xs
Weight: weight-medium
Color: accent-primary
Transform: uppercase
Letter-spacing: 0.2em
Margin-bottom: space-4
Format: "// SECTION_NAME"
```

## Feature Card
```
Background: bg-secondary
Border: 1px solid border-default
Padding: space-6
Hover: border-accent (transition 0.3s)
Layout: Icon left (48px), content right
Icon container: 48x48, bg accent-primary-dim, border accent (subtle)
```

## Stat Block
```
Value: font-mono, text-h1 or larger, accent-primary, weight-bold
Label: font-body, text-small, text-muted, uppercase, letter-spacing 0.1em
Layout: Flex column, value on top
```

---

# PART 4: PAGE SECTIONS & COPY

## Section 1: Navigation
```
Logo: ESTIMATE.ai
Links: How It Works | Features | Pricing | Contact
CTA: Get Free Demo
```

## Section 2: Hero
**Layout:** Split - content left, form right

**Headline (font-display, text-hero):**
```
3 days to 3 minutes.
```

**Subhead (font-body, text-body, text-secondary):**
```
AI-powered takeoffs built for exterior contractors. Upload your HOVER measurements, get a complete material list and estimate before your coffee gets cold.
```

**Stats Row (3 items):**
```
99.7%     |  3 min      |  100%
Faster    |  Average    |  Line Item
Takeoffs  |  Turnaround |  Traceability
```

**Form (right side):**
```
Label: "REQUEST_FREE_DEMO" (styled as code comment)
Title: "See it with your own plans"
Subtitle: "We'll run a takeoff on your actual project—free."

Fields:
- Full Name (text)
- Company Name (text)
- Email (email)
- Phone (tel, optional)
- Monthly Estimates (dropdown: 1-10, 11-25, 26-50, 50+)

Button: "Get My Free Demo →"
```

## Section 3: Pain Point / Problem
**Section Label:** // THE PROBLEM

**Headline:**
```
Takeoffs shouldn't take days.
```

**Body:**
```
You're a siding contractor, not a spreadsheet jockey. But here you are—
measuring PDFs, counting windows, triple-checking linear feet, manually 
pricing every line item. Three days later, you finally send the quote.

By then, your competitor already won the job.
```

**Visual:** Split screen showing "The Old Way" vs "The Estimate.ai Way"
- Old: Calendar showing 3 days crossed out, spreadsheet chaos
- New: Simple flow diagram, 3 minutes, done

## Section 4: How It Works
**Section Label:** // HOW_IT_WORKS

**Headline:**
```
Three steps. Three minutes.
```

**Steps:**

**Step 01: Upload**
```
Title: Drop your HOVER PDF
Body: No manual measurements. No data entry. Just drag, drop, done.
Our AI extracts every dimension—facade areas, window perimeters, 
linear feet, roof pitches.
```

**Step 02: Review**
```
Title: AI generates your takeoff
Body: Trained on YOUR pricing methodology. Materials, labor, waste 
factors—calculated automatically. Every line item traces back to 
source measurements.
```

**Step 03: Send**
```
Title: Export and close the deal
Body: Download a professional Excel takeoff with real formulas—not 
static values. Your clients see exactly how you got there.
```

## Section 5: Proof Banner (social proof moment)
**Layout:** Full-width, accent background treatment

**Quote:**
```
"I used to spend entire weekends on takeoffs. Now I quote jobs 
from my truck between sites."
```

**Attribution:**
```
— Mike R., Owner, Pacific Siding Co.
   23 years in business
```

*(Note: You'll need real testimonials eventually. Placeholder for now.)*

## Section 6: Features
**Section Label:** // CAPABILITIES

**Headline:**
```
Built for exterior. Nothing else.
```

**Subhead:**
```
This isn't generic construction software. Estimate.ai is purpose-built 
for siding, roofing, windows, and gutters.
```

**Feature Cards (2x3 grid):**

```
1. HOVER Integration
   Upload HOVER measurement PDFs directly. AI extracts facade areas, 
   window counts, linear feet—95%+ accuracy.

2. Your Pricing Rules
   Configure material costs, labor rates, waste factors, L&I 
   calculations. The system follows YOUR methodology.

3. Full Provenance
   Every calculation traces back to source. Answer "why is this 
   here?" for any line item, instantly.

4. Real Excel Formulas
   Export takeoffs with actual formulas, not static values. Change 
   a price, watch totals update. Full transparency.

5. Multi-Trade Support
   Siding, roofing, windows, gutters—one estimate. Separate tabs, 
   combined totals, professional output.

6. Pricing Snapshots
   Lock in material costs at estimate time. Regenerate quotes 
   months later with original pricing intact.
```

## Section 7: Exterior Focus
**Section Label:** // EXTERIOR_SPECIALISTS

**Headline:**
```
We only do exteriors. That's the point.
```

**Body:**
```
Generic takeoff software tries to do everything—framing, electrical, 
plumbing, HVAC. They're a mile wide and an inch deep.

Estimate.ai goes deep on what you actually do: James Hardie specs, 
LP SmartSide waste factors, GAF shingle calculations, window rough 
openings, gutter runs. The details that matter for exterior work.
```

**Trades supported (visual list):**
- Fiber Cement Siding (HardiePlank, Artisan, etc.)
- LP SmartSide
- Vinyl & Aluminum
- Cedar & Wood
- Asphalt Shingles
- Metal Roofing
- Windows & Doors
- Gutters & Downspouts

## Section 8: The Ask / CTA
**Section Label:** // GET_STARTED

**Headline:**
```
Stop measuring. Start closing.
```

**Subhead:**
```
See Estimate.ai run a takeoff on YOUR project. Upload your HOVER 
PDF, we'll do the rest. No commitment, no credit card.
```

**CTA Button:** "Get My Free Demo →"

**Below CTA (small text):**
```
Free demo includes a complete takeoff of your actual project.
```

## Section 9: Footer
```
Logo: ESTIMATE.ai

Columns:
- Product: How It Works, Features, Pricing, Roadmap
- Company: About, Contact, Careers
- Legal: Privacy Policy, Terms of Service

Bottom row:
- © 2025 Exterior Finishes LLC
- Social icons (LinkedIn, maybe YouTube for demo videos)
```

---

# PART 5: ANIMATIONS & INTERACTIONS

## Page Load
```
- Hero content fades up (opacity 0→1, y 20→0) over 0.6s
- Stats stagger in 0.1s apart
- Form fades in 0.2s after headline
```

## Scroll Animations
```
- Each section fades up when entering viewport (threshold 0.2)
- Stagger children elements by 0.1s
- Use framer-motion's useInView hook
```

## Stat Counter
```
- Numbers count up from 0 when visible
- Duration: 1.5s
- Easing: ease-out
```

## Button Hover
```
- Scale: 1.02
- Shadow: glow-accent
- Transition: 0.2s ease-out
```

## Card Hover
```
- Border color: border-default → border-accent
- Subtle lift: translateY(-2px)
- Transition: 0.3s ease-out
```

## Form Focus
```
- Input border: border-default → border-accent
- Glow ring appears (box-shadow)
- Transition: 0.2s
```

## NO bouncy/springy animations
```
All transitions use ease-out or custom bezier curves.
Nothing playful. Professional, precise, technical.
```

---

# PART 6: RESPONSIVE BREAKPOINTS

```css
/* Mobile first, then scale up */

/* Small mobile */
@media (max-width: 375px) { }

/* Mobile */
@media (min-width: 376px) and (max-width: 639px) { }

/* Tablet */
@media (min-width: 640px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) and (max-width: 1279px) { }

/* Large desktop */
@media (min-width: 1280px) { }
```

## Mobile Adjustments
```
- Hero: Single column, form below content
- Stats: Stack vertically or 2x2 grid
- Features: Single column cards
- Navigation: Hamburger menu
- Text sizes: Reduce hero to 2.5rem, h1 to 2rem
```

---

# PART 7: FILE STRUCTURE

```
/src
  /app
    layout.tsx           # Root layout with fonts, metadata
    page.tsx             # Landing page (imports all sections)
    globals.css          # CSS variables, base styles, grid pattern
    
  /components
    /ui
      Button.tsx         # Primary, secondary, ghost variants
      Input.tsx          # Form input with label
      Select.tsx         # Dropdown select
      Card.tsx           # Base card component
      Badge.tsx          # Small labels/tags
      
    /sections
      Navigation.tsx     # Sticky nav with scroll behavior
      Hero.tsx           # Hero with form
      Problem.tsx        # Pain point section
      HowItWorks.tsx     # 3-step process
      Testimonial.tsx    # Quote banner
      Features.tsx       # Feature grid
      ExteriorFocus.tsx  # Trade specialization section
      FinalCTA.tsx       # Bottom call-to-action
      Footer.tsx         # Site footer
      
    /forms
      DemoRequestForm.tsx  # The main lead capture form
      
    /animations
      FadeIn.tsx         # Scroll-triggered fade up
      Counter.tsx        # Animated number counter
      
  /lib
    utils.ts             # cn() helper for className merging
    
  /hooks
    useScrollPosition.ts # For nav background change
```

---

# PART 8: IMPLEMENTATION ORDER

Build in this sequence for best results:

1. **Setup** - globals.css with all CSS variables, fonts
2. **Layout** - Root layout with metadata, font imports  
3. **Navigation** - Sticky nav component
4. **Hero** - Most important, get this right
5. **Problem** - Pain point section
6. **HowItWorks** - 3-step process
7. **Features** - Feature grid
8. **ExteriorFocus** - Trade specialization
9. **Testimonial** - Quote banner
10. **FinalCTA** - Bottom conversion section
11. **Footer** - Site footer
12. **Animations** - Add scroll animations last
13. **Mobile** - Responsive adjustments
14. **Polish** - Micro-interactions, fine-tuning

---

# PART 9: QUALITY CHECKLIST

Before considering "done":

## Visual
- [ ] Dark theme is consistent, no stray colors
- [ ] Blueprint grid is subtle, not distracting
- [ ] Typography hierarchy is clear
- [ ] Spacing is consistent (use the scale)
- [ ] No generic AI aesthetics (no purple gradients, no rounded everything)

## Functional
- [ ] Form validates required fields
- [ ] Form submits (even to console.log for now)
- [ ] All links work (even if placeholder)
- [ ] Scroll is smooth
- [ ] Nav changes on scroll

## Responsive
- [ ] Mobile nav works (hamburger)
- [ ] Hero stacks properly on mobile
- [ ] Forms are usable on mobile (input sizing)
- [ ] Text is readable at all sizes

## Performance
- [ ] Images optimized (use next/image)
- [ ] Fonts preloaded
- [ ] No layout shift on load
- [ ] Animations don't cause jank

## Polish
- [ ] Favicon added
- [ ] Meta title and description set
- [ ] OG image for social sharing
- [ ] 404 page (simple)

---

# QUICK START FOR CLAUDE CODE

Give Claude Code these instructions in sequence:

**Message 1:**
```
Read this entire spec document first. This is the design system and copy 
for the Estimate.ai landing page. Confirm you understand the:
1. Color palette
2. Typography system  
3. Component patterns
4. Page sections and copy

Don't start building yet—just confirm understanding.
```

**Message 2:**
```
Set up the project foundation:
1. Update globals.css with all CSS variables from the spec
2. Configure Tailwind with the custom colors and fonts
3. Create the layout.tsx with proper font imports and metadata
4. Create a utils.ts with the cn() helper function

Show me each file when done.
```

**Message 3:**
```
Build the Navigation component following the spec exactly:
- Sticky, transparent initially
- Background appears on scroll  
- Logo styled as specified
- "Get Free Demo" CTA button

Show me the component and add it to page.tsx.
```

**Message 4:**
```
Build the Hero section following the spec:
- Two column layout (content left, form right)
- "3 days to 3 minutes." headline
- Stats row with the three metrics
- Demo request form with all fields specified

This is the most important section—take your time.
```

*Continue section by section...*

---

END OF SPECIFICATION
