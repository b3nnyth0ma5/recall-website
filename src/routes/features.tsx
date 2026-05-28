import { createFileRoute } from "@tanstack/react-router";
import { Images, MapPin, Tags, Search, Shield, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Features — Recall" },
      { name: "description", content: "Capture text, images, and locations. Categorize and search across every recall you've ever made." },
      { property: "og:title", content: "Features — Recall" },
      { property: "og:description", content: "Everything Recall does to help you remember." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
});

const features = [
  { icon: Images, title: "Rich recalls", body: "Combine free-form text with one or many images. Layouts adapt automatically — a single photo blooms full-width, a set becomes a clean grid." },
  { icon: MapPin, title: "Place-aware", body: "Attach a location to anchor a Recall to the world. Tap the pin later to open a map and remember exactly where you were." },
  { icon: Tags, title: "Flexible categories", body: "Describe your cateogry and let Recall do the rest. Browse a category like a small private exhibition." },
  { icon: Search, title: "Search that just works", body: "One search bar across text, captions, places, and tags. Type a fragment, ask a question and the right Recall floats to the top." },
  { icon: Shield, title: "Yours alone", body: "Your recalls belong to you. Private by default, encrypted in transit, and never sold or scanned for ads." },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Built for the way you remember.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Recall keeps the small details together — so you can find them when they matter.
          </p>
        </header>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <article key={f.title} className="rounded-xl border border-border bg-card p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
