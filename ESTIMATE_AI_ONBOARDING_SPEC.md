# ESTIMATEPROS.AI ONBOARDING FLOW SPECIFICATION

---

## Overview

**Route:** `/onboarding`

**Purpose:** Guide new users through account setup and initial configuration after signing up. Collect essential information to customize their EstimatePros.ai experience.

**Flow Type:** Multi-step wizard with progress indicator

**Total Steps:** 5

---

## User Flow

```
Sign Up → Step 1: Profile → Step 2: Company → Step 3: Trades → Step 4: Workflow → Step 5: Complete
```

---

## Step 1: Profile Setup

**Section Label:** // STEP_01

**Headline:** "Let's get you set up"

**Subhead:** "First, tell us a bit about yourself."

**Fields:**

| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| Full Name | text | Yes | "John Smith" |
| Email | email | Yes | "john@company.com" |
| Phone | tel | No | "(555) 555-5555" |
| Password | password | Yes | "Create a password" |
| Confirm Password | password | Yes | "Confirm your password" |

**Validation:**
- Email must be valid format
- Password minimum 8 characters, at least one number
- Passwords must match

**CTA Button:** "Continue →"

---

## Step 2: Company Information

**Section Label:** // STEP_02

**Headline:** "Tell us about your business"

**Subhead:** "This helps us tailor EstimatePros.ai to your operation."

**Fields:**

| Field | Type | Required | Options/Placeholder |
|-------|------|----------|---------------------|
| Company Name | text | Yes | "Pacific Siding Co." |
| Years in Business | select | Yes | "Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years" |
| Team Size | select | Yes | "Just me", "2-5 employees", "6-10 employees", "11-25 employees", "25+ employees" |
| Monthly Estimates | select | Yes | "1-10", "11-25", "26-50", "50+" |
| State/Region | select | Yes | List of US states |

**CTA Button:** "Continue →"

**Back Link:** "← Back"

---

## Step 3: Trade Selection

**Section Label:** // STEP_03

**Headline:** "What exterior work do you do?"

**Subhead:** "Select all that apply. We'll configure your database for these trades."

**Trade Options (Checkbox Cards):**

```
□ Fiber Cement Siding
  HardiePlank, Artisan, and similar products

□ LP SmartSide
  Engineered wood siding and trim

□ Vinyl Siding
  Vinyl and aluminum products

□ Cedar & Wood
  Natural wood siding and shakes

□ Asphalt Shingles
  Standard and architectural shingles

□ Metal Roofing
  Standing seam, corrugated, metal tiles

□ Windows & Doors
  Replacement and new construction

□ Gutters & Downspouts
  Seamless gutters, gutter guards
```

**Validation:** At least one trade must be selected

**CTA Button:** "Continue →"

**Back Link:** "← Back"

---

## Step 4: Current Workflow

**Section Label:** // STEP_04

**Headline:** "How do you work today?"

**Subhead:** "Understanding your current process helps us make the transition seamless."

**Fields:**

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Primary Measurement Source | select | Yes | "HOVER", "EagleView", "Manual measurements", "Blueprints/Plans", "Other" |
| Current Estimating Tool | select | Yes | "Excel/Spreadsheets", "Pen and paper", "Other software", "None—I'm starting fresh" |
| Biggest Challenge | select | Yes | "Takeoffs take too long", "Inconsistent pricing", "Difficult to scale", "Too many errors", "Other" |

**Optional Text Area:**
```
Label: "Anything else we should know?"
Placeholder: "Tell us about your specific needs or challenges..."
Rows: 3
```

**CTA Button:** "Complete Setup →"

**Back Link:** "← Back"

---

## Step 5: Setup Complete

**Section Label:** // WELCOME

**Headline:** "You're all set!"

**Subhead:** "Your EstimatePros.ai account is ready. Here's what happens next:"

**Next Steps (Numbered List with Icons):**

```
1. Upload Your First Project
   Drop a HOVER PDF or blueprint to see EstimatePros.ai in action.

2. Configure Your Pricing
   Add your material costs, labor rates, and markup percentages.

3. Generate Your First Estimate
   Watch as AI creates a complete takeoff in minutes.
```

**CTA Button:** "Go to Dashboard →"

**Secondary Link:** "Watch a quick tutorial (3 min)"

---

## Progress Indicator

**Style:** Horizontal step indicator at top of form area

**States:**
- Completed: Filled circle with checkmark, cyan accent
- Current: Filled circle with step number, cyan border + glow
- Upcoming: Empty circle with step number, muted border

**Labels:** Show step labels on desktop, hide on mobile

```
Profile → Company → Trades → Workflow → Complete
   ●         ●         ○         ○         ○
```

---

## Component Specifications

### Onboarding Container
```
Max-width: 640px (single column form)
Padding: space-8 (48px) on desktop, space-6 (32px) on mobile
Background: bg-secondary with border-default
Border-radius: radius-lg
Centered horizontally
```

### Step Header
```
Section label: font-mono, text-xs, accent-primary, uppercase, tracking-wider
Headline: font-display, text-h2, text-primary, weight-bold
Subhead: font-body, text-body, text-secondary
Margin-bottom: space-8
```

### Checkbox Card (Trade Selection)
```
Layout: Grid, 2 columns on desktop, 1 on mobile
Padding: space-4
Background: bg-tertiary (unselected), accent-primary-dim (selected)
Border: border-default (unselected), border-accent (selected)
Border-radius: radius-md
Cursor: pointer
Transition: all 0.2s

Content:
- Checkbox: Custom styled, accent-primary when checked
- Title: font-body, text-base, weight-medium, text-primary
- Description: font-body, text-small, text-muted
```

### Progress Indicator
```
Container: Full width, padding space-4, margin-bottom space-8
Layout: Flex, justify-between, items-center
Line: 2px height connecting circles, bg-bg-tertiary (incomplete), accent-primary (complete)

Circle (completed):
- Size: 32px
- Background: accent-primary
- Icon: Checkmark, bg-primary color

Circle (current):
- Size: 32px
- Background: bg-secondary
- Border: 2px solid accent-primary
- Text: Step number, accent-primary, font-mono

Circle (upcoming):
- Size: 32px
- Background: bg-secondary
- Border: 1px solid border-default
- Text: Step number, text-muted, font-mono
```

### Form Navigation
```
Layout: Flex, justify-between, margin-top space-8
Back link: font-body, text-small, text-secondary, hover:text-primary
Continue button: Full primary button style
```

---

## Animations

### Step Transitions
```
Exit: Fade out + slide left (opacity 1→0, x 0→-20) over 0.2s
Enter: Fade in + slide from right (opacity 0→1, x 20→0) over 0.3s
Stagger form fields by 0.05s
```

### Progress Indicator
```
Circle completion: Scale pulse (1→1.1→1) on complete
Line fill: Width animates from left to right
```

### Checkbox Cards
```
Selection: Border color transition 0.2s, background color transition 0.2s
Hover: Subtle lift (translateY -2px)
```

### Success Screen
```
Checkmark icon: Draw-in animation (SVG stroke-dashoffset)
Next steps: Stagger in 0.1s apart
```

---

## Responsive Behavior

### Mobile (< 640px)
- Progress indicator: Numbers only, no labels
- Checkbox cards: Single column
- Form padding: space-5 (24px)
- Headline: text-h3 size
- Full-width buttons

### Tablet (640px - 1023px)
- Checkbox cards: 2 columns
- Progress indicator: Abbreviated labels

### Desktop (≥ 1024px)
- Full progress labels visible
- Checkbox cards: 2 columns with more padding
- Form max-width maintained for readability

---

## Validation & Error States

### Field Validation
- Validate on blur (when user leaves field)
- Show error message below field in accent-secondary color
- Highlight field border in accent-secondary

### Step Validation
- Validate all required fields before allowing "Continue"
- Scroll to first error if validation fails
- Disable continue button while form is invalid (optional: show why)

### Error Messages
```
Email: "Please enter a valid email address"
Password: "Password must be at least 8 characters with one number"
Password match: "Passwords don't match"
Required field: "This field is required"
Trade selection: "Please select at least one trade"
```

---

## Data Persistence

- Save progress to localStorage after each step
- Allow users to resume if they leave and return
- Clear localStorage on successful completion
- Send data to backend on Step 4 submission

---

## File Structure

```
src/app/onboarding/
  page.tsx                    # Onboarding page wrapper

src/components/onboarding/
  OnboardingContainer.tsx     # Main wrapper with progress
  OnboardingProgress.tsx      # Step indicator component
  StepProfile.tsx             # Step 1: Profile setup
  StepCompany.tsx             # Step 2: Company info
  StepTrades.tsx              # Step 3: Trade selection
  StepWorkflow.tsx            # Step 4: Current workflow
  StepComplete.tsx            # Step 5: Success screen
  TradeCard.tsx               # Selectable trade checkbox card

src/hooks/
  useOnboarding.ts            # State management for onboarding flow
```

---

## Navigation Integration

- Hide main Navigation component during onboarding (clean, focused flow)
- Show simple header with logo only
- No footer during onboarding steps

---

## Implementation Order

1. Create /onboarding route and page.tsx
2. Build OnboardingContainer with progress indicator
3. Build OnboardingProgress component
4. Build StepProfile with form validation
5. Build StepCompany
6. Build TradeCard component
7. Build StepTrades with card grid
8. Build StepWorkflow
9. Build StepComplete success screen
10. Add step transition animations
11. Implement useOnboarding hook for state management
12. Add localStorage persistence
13. Test responsive behavior
14. Connect to backend API

---

## Success Metrics

- Track completion rate per step (analytics events)
- Track time spent on each step
- Track which trades are most commonly selected
- Track drop-off points

---

END OF SPECIFICATION
