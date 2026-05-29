
## Goal

Add a new "Use Cases for Recall" section to `src/routes/index.tsx`, placed between the existing "What is a Recall?" section and the "How it works" section. The section uses the existing shadcn `Carousel` component (`src/components/ui/carousel.tsx`, embla-carousel) to slide through 7 use-case cards. Each slide has a generated brand-matching image plus two short text sub-sections.

## Use cases (7 slides)

For each, generate a dark-themed image styled like the current `hero-stack.jpg` (charcoal background, coral `#FF6B7A` accents, layered/stacked card composition), saved under `src/assets/`:

1. Inventory Management — `use-case-inventory.jpg`
2. Ideas — `use-case-ideas.jpg`
3. Receipts — `use-case-receipts.jpg`
4. Lists — `use-case-lists.jpg`
5. Wines — `use-case-wines.jpg`
6. Cookbooks I own — `use-case-cookbooks.jpg`
7. Things to do — `use-case-todo.jpg`

Use `imagegen--generate_image` (fast tier, 1280x960, .jpg) with prompts matched to the existing hero style.

## Slide layout

Each `CarouselItem` renders a card on `bg-card border border-border rounded-2xl`, two-column on `md+`, stacked on mobile:

- Left: the generated image, `rounded-xl border border-border`
- Right: title (`text-2xl font-semibold`) + two sub-sections stacked:
  - **The use case** — ~60–100 word description of what people capture for this use case
  - **Recall it** — ~60–100 word example of how to search/ask Recall to retrieve it (e.g. "Ask: 'which Bordeaux did I open last summer?'")

Each sub-section gets a small coral eyebrow label (`text-xs font-mono uppercase text-primary`) above its paragraph for hierarchy.

## Carousel wiring

- Wrap slides in `<Carousel opts={{ align: "start", loop: true }}>` with `CarouselContent` + 7 `CarouselItem`s.
- `CarouselItem` uses `basis-full` (one slide visible at a time — copy is long, so single-slide reads better than multi-slide).
- Include `CarouselPrevious` / `CarouselNext` arrows; on mobile they tuck inside the card edges via responsive classes.
- Section header mirrors existing sections: `text-3xl md:text-4xl font-semibold` title "Use cases for Recall" + muted-foreground subtitle.

## Technical notes

- Imports to add in `src/routes/index.tsx`:
  - `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` from `@/components/ui/carousel`
  - 7 image imports from `@/assets/use-case-*.jpg`
- No new routes, no new components extracted — keeps the change scoped to `index.tsx` + 7 new asset files.
- All styling via existing semantic tokens (`bg-card`, `text-primary`, `border-border`, etc.) — matches current dark coral brand.
- Section placement: insert immediately after the closing `</section>` of "What is a Recall?" (the `border-y border-border/60 bg-secondary/30` block) and before the `#how` section.

## Out of scope

- No changes to other routes, header, footer, or design tokens.
- No autoplay plugin (keep manual nav for readability).
- No copy edits to existing sections.
