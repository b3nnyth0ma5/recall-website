
# Recall — Marketing Website Plan

A clean marketing site for **Recall**, an app that lets users create, view, search, and categorize "Recalls" (notes made of text, images, and/or a location). This is a **marketing/informational website** — the actual app functionality (creating recalls, etc.) lives in the mobile/app product. The website's job is to explain it, build trust, and provide required legal/support pages.

If you actually want the website itself to be the working app (with login, database for recalls, image upload, map, search), say so and I'll switch the plan to a full-stack build with Lovable Cloud.

## Pages (separate routes, SSR + SEO friendly)

- `/` — Landing page
  - Hero: name, tagline, primary CTA
  - Features section: **Capture** (text + images), **Locate** (attach a place), **Categorize** (tags/folders), **Search** (find any recall fast)
  - How it works (3 steps)
  - FAQ teaser + CTA band
- `/features` — Deeper feature breakdown with visuals
- `/support` — Help center: contact form (mailto for now), FAQ, response-time expectations
- `/privacy` — Privacy policy (standard template tailored to Recall: what data is collected, image/location handling, retention, contact)
- `/terms` — Terms of service (light, paired with privacy — common to ship together)
- 404 + error pages (already scaffolded)

Shared header (logo + nav + CTA) and footer (links, legal, contact) across all routes.

## Design direction

Warm, memory-themed: soft off-white background, deep ink text, single warm accent (amber/terracotta). Generous whitespace, modern sans typography, subtle card shadows, rounded corners. Hero uses a stylized "stack of recalls" visual (text card + photo card + map pin card overlapping).

I'll generate hero/feature illustrations with the image tool.

## Hosting & deployment

Lovable hosts the site automatically. After build:
1. Click **Publish** (top-right) → site goes live at `your-project.lovable.app`.
2. Optional: connect a custom domain from **Project Settings → Domains** (buy through Lovable or connect one you own).

No external hosting setup needed.

## Technical notes

- TanStack Start, file-based routing under `src/routes/` (`index.tsx`, `features.tsx`, `support.tsx`, `privacy.tsx`, `terms.tsx`).
- Each route sets its own `head()` meta (title, description, og:title, og:description) for SEO.
- Design tokens in `src/styles.css` (oklch); shadcn components for buttons/cards/accordion (FAQ).
- Support contact: simple form posting to a `mailto:` link initially. If you want real form submissions, I can add Lovable Cloud + an email-sending serverless function in a follow-up.
- No backend/database needed for the marketing site as scoped.

## Quick clarifications (optional — I can pick defaults)

1. Support contact: **mailto link** (no backend) or **real form + email** (needs Lovable Cloud)?
2. Should I include a **Download / App Store** CTA in the hero, or just a "Join waitlist" / "Learn more"?
3. Accent color preference, or pick the warm amber default?
