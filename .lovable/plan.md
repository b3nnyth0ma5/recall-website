## Goal

Apply the attached `commonStyles.ts` (dark theme, coral/pink accent, Geist font) as the website's brand system, so the marketing site matches the Recall app's visual identity.

## Changes

### 1. Design tokens — `src/styles.css`
Rewrite `:root` to be dark-by-default using oklch equivalents of the app palette:
- `--background` ← `#1A1A1A`
- `--card` / `--popover` ← `#2A2A2A`
- `--secondary` / `--muted` ← `#242424`
- `--foreground` ← `#FFFFFF`, `--muted-foreground` ← `#B0B0B0`
- `--primary` ← `#FF6B7A` (coral), `--primary-foreground` ← `#FFFFFF`
- `--accent` ← coral at 15% over card
- `--border` / `--input` ← `#3A3A3A`
- `--ring` ← coral
- `--destructive` ← `#FF3B30`
- `--radius` stays `0.625rem` (cards use 8–12px in the app — close enough)
Keep `.dark` block in sync (mirror the new tokens) so toggling theme doesn't break.

### 2. Typography — Geist font
- Add Geist via `<link>` in `src/routes/__root.tsx` head (Google Fonts: Geist + Geist Mono).
- In `styles.css`, set `body { font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }` and apply the same stack as a Tailwind base on `html`.

### 3. Hero image
Current `hero-stack.jpg` is warm/cream-toned and will clash with the dark coral brand. Regenerate it as a dark-mode composition (charcoal background, coral accents, stack of cards: note + photo + map pin) and overwrite `src/assets/hero-stack.jpg`.

### 4. Component polish (token-only, no structural changes)
Most components already use semantic tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`, etc.), so the token swap re-skins them automatically. Spot-fixes:
- `src/components/SiteHeader.tsx` — logo tile already `bg-primary`; verify contrast on dark.
- `src/routes/index.tsx` CTA band uses `bg-primary` with `text-primary-foreground` — keep, but soften the hero glow (`bg-accent/40 blur-2xl`) which will now be coral-tinted on dark.
- Feature card icon chips (`bg-primary/10 text-primary`) translate fine to dark.
- Footer `bg-secondary/40` becomes a subtle dark band — good.

No layout/markup changes beyond these; the design system change drives the rebrand.

## Out of scope
- No new pages or content changes.
- No light/dark toggle (site becomes dark-only, matching the app).
- No animation/motion additions.
