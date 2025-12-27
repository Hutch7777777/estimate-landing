# ESTIMATE.AI PRICING PAGE SPECIFICATION

---

## Page Structure

**Route:** `/pricing`

**Sections:**
1. Hero (headline + subhead)
2. Pricing Cards (3 tiers)
3. Feature Comparison Table
4. FAQ
5. Final CTA
6. Footer (reuse existing)

---

## Section 1: Pricing Hero

**Headline:** "Simple pricing. Serious results."

**Subhead:** "Whether you're a one-truck crew or a 50-person operation, there's a plan that fits."

---

## Section 2: Pricing Cards

### Tier 1: R&R Pro
**Price:** $99/month
**Subtitle:** "For repair & replace contractors using HOVER"

**Features:**
- ✓ Up to 30 estimates/month
- ✓ HOVER PDF processing
- ✓ Siding, roofing, gutters, windows
- ✓ Excel export with real formulas
- ✓ Full line item traceability
- ✓ Email support

**CTA Button:** "Start Free Trial"

**Note below:** "$50/user after 3 users"

---

### Tier 2: Construction Plans (HIGHLIGHTED/RECOMMENDED)
**Badge:** "MOST POPULAR"
**Price:** $349/month
**Subtitle:** "For contractors working from blueprints"

**Features:**
- ✓ Unlimited estimates
- ✓ AI vision for construction blueprints
- ✓ All exterior trades included
- ✓ PDF, CAD, and plan sheet support
- ✓ Excel export with real formulas
- ✓ Full line item traceability
- ✓ 3 users included
- ✓ Priority email support

**CTA Button:** "Start Free Trial"

**Note below:** "$50/user after 3 users"

---

### Tier 3: Enterprise
**Price:** "Custom"
**Subtitle:** "Your business. Your database. Your rules."

**Features:**
- ✓ Everything in Construction Plans
- ✓ Custom-built database for your business
- ✓ Your pricing rules encoded permanently
- ✓ Unlimited users
- ✓ Dedicated account manager
- ✓ API access for integrations
- ✓ White-label options
- ✓ Custom workflow automation
- ✓ Advanced analytics & reporting
- ✓ SSO/SAML authentication
- ✓ Priority feature requests
- ✓ On-site training available

**CTA Button:** "Contact Sales"

---

## Section 3: Feature Comparison Table

| Feature                        | R&R Pro | Construction Plans | Enterprise |
|--------------------------------|---------|-------------------|------------|
| Monthly estimates              | 30      | Unlimited         | Unlimited  |
| HOVER PDF processing           | ✓       | ✓                 | ✓          |
| Blueprint/CAD processing       | —       | ✓                 | ✓          |
| Siding                         | ✓       | ✓                 | ✓          |
| Roofing                        | ✓       | ✓                 | ✓          |
| Windows & Doors                | ✓       | ✓                 | ✓          |
| Gutters                        | ✓       | ✓                 | ✓          |
| Excel export (real formulas)   | ✓       | ✓                 | ✓          |
| Line item traceability         | ✓       | ✓                 | ✓          |
| Users included                 | 1       | 3                 | Unlimited  |
| Additional users               | $50/ea  | $50/ea            | Included   |
| Custom pricing database        | —       | —                 | ✓          |
| API access                     | —       | —                 | ✓          |
| White-label                    | —       | —                 | ✓          |
| Dedicated account manager      | —       | —                 | ✓          |
| SSO/SAML                       | —       | —                 | ✓          |
| Support                        | Email   | Priority Email    | Dedicated  |

---

## Section 4: FAQ

**Q: What's the difference between R&R Pro and Construction Plans?**
A: R&R Pro is designed for repair and replace work using HOVER measurement reports. Construction Plans uses advanced AI vision to read architectural blueprints and plan sheets—perfect for new construction projects.

**Q: Can I switch plans later?**
A: Yes. Upgrade or downgrade anytime. We'll prorate the difference.

**Q: What counts as an "estimate"?**
A: One estimate = one project. Upload a HOVER PDF or blueprint set, get a complete takeoff. Multi-page documents count as one estimate.

**Q: Do you offer annual pricing?**
A: Yes. Pay annually and get 2 months free on any plan.

**Q: What file formats do you support?**
A: R&R Pro supports HOVER PDFs. Construction Plans supports PDF blueprints, CAD files, and multi-page plan sets.

**Q: Can I try before I buy?**
A: Absolutely. Every plan includes a 14-day free trial. No credit card required to start.

---

## Section 5: Final CTA

**Headline:** "Not sure which plan is right?"

**Subhead:** "Book a 15-minute call. We'll analyze your workflow and recommend the best fit—no pressure."

**CTA Button:** "Schedule a Call →"

---

## Design Notes

### Card Styling
- Dark cards (bg-bg-secondary) with border
- Middle card (Construction Plans) highlighted:
  - Cyan border
  - "MOST POPULAR" badge
  - Slightly elevated (scale or shadow)
  
### Price Display
- Dollar sign smaller than number
- "/month" in muted text
- Font-mono for numbers

### Checkmarks
- Cyan checkmark icon for included features
- Gray dash for not included

### Responsive
- 3-column on desktop
- Stacked on mobile (recommended plan first)

### Animations
- Cards fade up on load (staggered)
- Table rows animate in on scroll

---

## File Structure

```
src/app/pricing/page.tsx       # Pricing page
src/components/pricing/
  PricingHero.tsx
  PricingCard.tsx              # Reusable card component
  PricingTable.tsx             # Comparison table
  PricingFAQ.tsx
  PricingCTA.tsx
```

---

## Navigation Update

Add "Pricing" link to Navigation.tsx that routes to /pricing

---

## Implementation Order

1. Create /pricing route and page.tsx
2. Build PricingHero
3. Build PricingCard component
4. Create the 3-card grid
5. Build PricingTable
6. Build PricingFAQ
7. Build PricingCTA
8. Update Navigation with Pricing link
9. Test responsive behavior

