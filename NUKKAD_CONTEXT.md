# NUKKAD — Product Context Document
## For AI assistants: read this fully before answering any questions about the project.

---

## What is Nukkad?

Nukkad is an AI-powered marketing SaaS built specifically for India's Tier 2/3 small business owners — boutique owners, kirana stores, sweet shops, salons, and similar neighbourhood businesses.

The name "Nukkad" means "street corner" in Hindi — where these shops live.

The core insight: India has 63 million small businesses. 74% have no marketing team. Most owners are on WhatsApp all day but have no time or skill to run Instagram/Facebook/WhatsApp marketing. They miss every festival sale opportunity because they have no system.

---

## The Problem (in depth)

A boutique owner in Indore:
- Knows Navratri is coming — but doesn't know when to post, what to say, or which customers to target
- Has customers' numbers in WhatsApp groups but no way to segment them
- Would post something if someone wrote it for her — but nobody does
- Ends up doing nothing, while a competitor two streets away sends a Navratri offer and sells out

This is repeated across every festival, every week, for every small shop.

---

## What Nukkad Does (core features)

### 1. Festival Calendar
- Tracks 60+ Indian festivals relevant to the user's city and business type
- Shows upcoming festivals and counts down days
- Suggests how many posts to prepare and when to send them

### 2. AI Post Writer
- User selects: festival + customer segment + platform (WhatsApp / Instagram / Facebook)
- Nukkad generates 3 caption variants in seconds
- Variants come in different styles: short & punchy / story-style / direct offer
- User approves or edits — one tap to schedule

### 3. Customer CRM
- Built around WhatsApp import: user exports their WhatsApp Business chat, Nukkad extracts signals
- Auto-segments customers into: Champions / Loyal / Inactive / New / Birthday
- Privacy-first: raw chat content is never stored — only derived signals (order count, category, recency)
- Opt-in broadcast: user can send messages to segments

### 4. Broadcast
- After selecting a customer segment, user previews a WhatsApp-style message bubble
- One tap to approve and schedule
- Green CTA buttons deliberately reference WhatsApp's visual language (users already trust it)

### 5. Insights
- Weekly summary: posts sent, customers reached, replies received
- Posting streak counter (gamification — like Duolingo)
- Top-performing post shown image-first
- Nudge toward next festival opportunity

---

## Tech Stack

- **Framework**: Next.js 16 with App Router, TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **i18n**: next-intl v4 with `[locale]` URL segments — supports English (`en`) and Hindi (`hi`)
- **Auth**: localStorage-based session (`nk_session` key) — demo mode, not real auth
- **Data**: All data is static mock data — no real API yet
- **Deployment**: Vercel
- **Repo**: https://github.com/vaibhavProductCode/Nukkad-marketing

---

## Brand & Design

### Colors (Two-color theory)
- **Primary brand orange**: `#FF6B35` — CTAs, active states, highlights, brand marks
- **Navy**: `#1E293B` — sidebar, dark sections, headings
- **Cream background**: `#FFF9F2` — app background
- **WhatsApp green**: `#25D366` — ONLY for WhatsApp import/send buttons
- **Confirm green**: `#16A34A` — Approve / Schedule / Send actions (mimics WhatsApp's "go" signal)

### No emojis policy
- The app does NOT use emojis anywhere in the UI
- Text labels only for navigation, buttons, and headings

### Design principles
- Feels like a real product, not a portfolio demo
- WhatsApp-inspired UI patterns: green message bubbles (`#dcf8c6`), chat-list style contact lists
- Mobile-first: bottom nav on mobile, sidebar on desktop
- Every card has one dominant action (approve, send, schedule)

---

## Route Structure

```
src/app/
  [locale]/              → locale prefix (en or hi)
    page.tsx             → Landing page
    login/page.tsx       → OTP login (WhatsApp)
    onboarding/page.tsx  → 5-step onboarding
    (dashboard)/         → Authenticated layout group
      layout.tsx         → Sidebar + BottomNav + AuthGuard
      dashboard/page.tsx → Home / Today screen
      calendar/page.tsx  → Festival calendar grid
      crm/page.tsx       → Customer segments + broadcast
      create/page.tsx    → AI post generator flow
      insights/page.tsx  → Weekly summary
      settings/page.tsx  → Profile, language, plan, logout
    privacy/page.tsx     → Privacy policy (DPDP 2023)
    terms/page.tsx       → Terms of use
```

---

## Auth Flow (demo)

1. User goes to `/en/login`
2. Enters Indian mobile number (10 digits, starting 6-9)
3. "OTP sent on WhatsApp" (simulated — 1.2s delay)
4. Any 6-digit OTP works (000000 = error state for testing)
5. On success: `localStorage.setItem('nk_session', '1')` is set
6. Redirects to `/en/dashboard`
7. `AuthGuard` component on every dashboard route checks for `nk_session`
8. If missing, redirects back to `/[locale]/login`
9. Logout: clears ALL localStorage, sessionStorage, and cookies, then redirects to landing page

---

## Translation System

- Files: `messages/en.json` and `messages/hi.json`
- All UI strings use `useTranslations()` from next-intl
- Switching language navigates to `/[new-locale]/[same-page]` — full app language change
- Language switcher: in Sidebar (desktop) and Settings page
- Content (mock captions, festival names) may remain in Hinglish — that is intentional product content, not UI

### Translation namespaces
- `nav` — Navbar links
- `hero`, `stats`, `features`, `pricing` — Landing page
- `sidebar` — Navigation labels
- `home` — Dashboard/Today screen
- `crm` — Customer management
- `create` — Post creation flow
- `insights` — Weekly summary
- `settings` — Settings page
- `calendar` — Calendar page

---

## Mock Data

Located in `src/lib/constants.ts`:

- **MOCK_FESTIVALS**: 4 festivals — Navratri, Dussehra, Karva Chauth, Diwali. Each has: id, name, nameHi, date, daysAway, suggestedPosts, palette (2 colors)
- **MOCK_CONTACTS**: 8 contacts across segments — champion, loyal, at_risk, new, birthday. Fields: id, name, phoneLast4, segment, lastOrderAt, purchaseCategories, optedInBroadcast, hasBirthday
- **MOCK_POSTS**: 4 posts. Fields: id, caption, captionHi, platform, imageColor, status
- **SEGMENT_COLORS**: Color tokens for each segment badge
- **BUSINESS_TYPES**: Dropdown options for business type in settings
- **SUPPORTED_LOCALES**: [{code: "en", label: "English"}, {code: "hi", label: "हिंदी"}]

---

## Pricing (not yet live)

- **Free**: ₹0 — 5 AI posts/month, 30-day festival calendar, basic contacts
- **Starter**: ₹399/month — 30 posts, full calendar, 500 contacts, broadcasts
- **Growth**: ₹899/month — unlimited posts, WhatsApp API, 5,000 contacts, ad advisor

**Status**: Pricing shown as "Coming Soon" on the landing page. No payment flow built yet.

---

## What Is NOT Built Yet

- Real WhatsApp OTP authentication
- Real WhatsApp API integration for broadcasting
- Real AI caption generation (currently uses hardcoded mock variants)
- Actual WhatsApp chat import processing
- Payment / subscription flow
- Admin dashboard
- Push notifications
- Multi-city festival calendar API

---

## Target Users

**Primary persona**: "Meena Boutique" — a 35-year-old women's ethnic wear shop owner in Indore or Jaipur. Runs the shop herself. Uses WhatsApp daily. Has Instagram but barely posts. No marketing budget. Knows her regulars by name. Runs the business on her phone.

**Secondary persona**: A sweet shop or salon owner who does occasional festival promotions but has no system.

**NOT for**: Large retailers, chains, or anyone with a dedicated marketing team.

---

## Team (as shown on landing page)

- **Vaibhav Shukla** — Product & Strategy. Former growth lead at a D2C brand.
- **Priya Mehta** — Design. Background in fintech. Grew up watching her mother run a sari shop.
- **Arjun Nair** — Engineering. Built backend systems at a logistics startup.

---

## Key Decisions Made

1. **Language**: English + Hindi only (Marathi, Bengali, Tamil = Phase 2)
2. **No emojis** in the UI — text labels only
3. **Two-color brand**: Orange (#FF6B35) + Navy (#1E293B). Green only for WhatsApp-adjacent actions.
4. **WhatsApp-first UX**: Green message bubbles, chat-list contacts — users already understand this pattern
5. **No onboarding wall**: Users go directly to dashboard after login, not through a long onboarding flow
6. **Pricing hidden**: "Coming Soon" shown — real pricing not launched yet
7. **Auth clears on logout**: All browser storage wiped — each login is fresh

---

## What to work on next (suggested)

1. Wire real AI caption generation (Claude API / GPT-4o)
2. Build real WhatsApp OTP auth (Twilio / MSG91)
3. Festival calendar API — pull from a real dataset of Indian festivals by city
4. WhatsApp chat import parser — extract customer signals from .txt export
5. Payment integration (Razorpay)
6. Push notifications for festival reminders (PWA)
7. Expand to Hindi-first mobile UI (PWA install on Android)
