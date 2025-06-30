# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the BoringSalesGrowth project.

## Project Overview
**Domain**: BoringSalesGrowth.com
**Mission**: Help traditional B2B companies (manufacturing, distribution, wholesale) adopt AI without fear or disruption
**Target Buyer**: C-suite executives (CEOs, Presidents, Owners) at $5M-$500M B2B companies
**Value Prop**: "Help your sales team close 40% more deals without hiring more people"

## Tech Stack & Commands

### Development Setup
```bash
# Install dependencies
npm install

# Development server
npm run dev        # Start on http://localhost:3000

# Production
npm run build      # Build for production
npm run start      # Start production server

# Code quality
npm run lint       # ESLint check
npm run type-check # TypeScript validation
```

### Technology Choices
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (conservative palette)
- **Components**: shadcn/ui (professional variants)
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Plausible (privacy-focused)
- **CMS**: MDX for case studies/blog if added
- **Deployment**: Vercel

## Site Architecture

### Core Pages (Keep It Simple)
```
/                     # Homepage - single page focus
/results              # Case studies/ROI calculator
/get-started          # Consultation booking
/resources            # Simple guides (optional)
/privacy              # Privacy policy
/terms                # Terms of service
```

### Key Components
```
components/
├── sections/
│   ├── Hero.tsx           # "AI that works like you do"
│   ├── Problems.tsx       # Pain points we solve
│   ├── Solutions.tsx      # How we help
│   ├── ROICalculator.tsx  # Show the money
│   ├── Testimonials.tsx   # Real sales people
│   └── CTA.tsx           # Book consultation
├── ui/                    # shadcn components
└── layout/               # Header, Footer
```

## Design Principles

### Visual Design
- **Colors**: Navy, gray, accent green (trust + growth)
- **Typography**: Clear, readable, professional
- **Images**: Real people, real factories, no stock photos
- **Icons**: Simple, functional, no trendy illustrations

### Content Voice
- Executive-level strategic focus
- Business outcomes over technical features
- Risk mitigation and ROI focused
- Conservative, trustworthy tone
- Use their language: "revenue growth", "competitive advantage", "operational efficiency"

## Key Features to Implement

### 1. ROI Calculator
```typescript
// Simple inputs they understand
- Current close rate
- Average deal size  
- Follow-up frequency
// Show potential gains with AI
```

### 2. Consultation Booking
- Calendly embed or similar
- Pre-qualify with simple questions
- "Talk to a real person" messaging

### 3. Trust Builders
- Years in business counter
- Customer logos (with permission)
- Industry certifications
- "No contracts, cancel anytime"

### 4. Demo Videos
- 2-minute "Day in the Life" scenarios
- Show actual UI, not mockups
- Feature real salespeople, not actors

## Conversion Strategy

### Primary CTA: "See How It Works"
- Leads to 15-min demo booking
- No aggressive popups
- Persistent but subtle header CTA

### Secondary CTAs
- "Calculate Your ROI"
- "Read Success Stories"
- "Get the Executive Brief" (PDF)

## Content Requirements

### Homepage Sections
1. **Hero**: Problem-aware messaging
2. **The Challenge**: Their current struggles
3. **Our Approach**: Simple, non-disruptive
4. **Results**: Hard numbers from clients
5. **How It Works**: 3-step process
6. **FAQs**: Address fears directly
7. **CTA**: Book a consultation

### Trust Elements
- Privacy guarantee
- "Your data stays yours"
- "No AI replacing humans"
- Money-back guarantee

## Development Guidelines

### Code Patterns
- Server components by default
- Client components only for interactivity
- Metadata for SEO on all pages
- Error boundaries for resilience

### Performance
- Lighthouse score >90 all categories
- Images: WebP with fallbacks
- Fonts: Variable fonts, subset

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader tested
- High contrast mode support

## Future Enhancements
- Blog for SEO (start simple)
- Email course: "AI for Sales Teams"
- Partner portal for referrals
- Industry-specific landing pages

## Important Notes
- This is NOT a tech product - it's a business solution
- Every feature must pass the "Would Bob use this?" test
- Start simple, prove value, then expand
- The "boring" positioning is intentional - embrace it