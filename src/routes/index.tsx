import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, Tags, Images, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/hero-stack.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recall — Capture and rediscover what matters" },
      { name: "description", content: "Recall is a simple app for saving notes, photos, and places — then finding them again, instantly." },
      { property: "og:title", content: "Recall — Capture and rediscover what matters" },
      { property: "og:description", content: "Save notes, photos, and places. Categorize them. Search them. Remember them." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                Now in early access
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Capture the moment. <span className="text-primary">Recall it later.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Recall is a quiet notebook for the things worth remembering — a thought, a photo, a place. Save it in seconds. Find it in one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" id="get-app">
                <a
                  href="mailto:hello@recall.app?subject=Recall%20early%20access"
                  className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Get the app
                </a>
                <Link
                  to="/features"
                  className="inline-flex h-11 items-center rounded-md border border-border bg-card px-6 text-sm font-medium hover:bg-accent"
                >
                  See features <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-accent/40 blur-2xl" />
              <img
                src={heroImage}
                alt="A stack of recall cards: a handwritten note, a photo, and a map pin"
                width={1280}
                height={960}
                className="rounded-2xl border border-border shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything a memory needs.</h2>
              <p className="mt-3 text-muted-foreground">
                A Recall is more than a note. Add the words, the picture, the place — keep them together.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Images, title: "Text + images", body: "Write a thought. Attach one or many photos. No fuss." },
                { icon: MapPin, title: "A place", body: "Drop a location so you remember where it happened." },
                { icon: Tags, title: "Categories", body: "Group recalls by trip, project, mood — however you think." },
                { icon: Search, title: "Instant search", body: "Find any recall by word, place, or tag. Right now." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
            <p className="mt-3 text-muted-foreground">Three steps, then it's yours forever.</p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Create", d: "Open Recall, jot the moment, add photos, drop a pin." },
              { n: "02", t: "Categorize", d: "Tag it so future-you knows exactly where to look." },
              { n: "03", t: "Recall", d: "Search anything — a word, a place, a feeling. It surfaces." },
            ].map((s) => (
              <li key={s.n} className="border-l-2 border-primary pl-5">
                <div className="text-sm font-mono text-primary">{s.n}</div>
                <div className="mt-2 text-lg font-semibold">{s.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-2xl bg-primary px-8 py-12 text-primary-foreground md:px-14 md:py-16">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Start keeping the things you'd hate to forget.
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Join the early access list and we'll send you a link the moment Recall is ready.
            </p>
            <a
              href="mailto:hello@recall.app?subject=Recall%20early%20access"
              className="mt-7 inline-flex h-11 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground hover:bg-background/90"
            >
              Request access
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
