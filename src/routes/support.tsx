import { createFileRoute } from "@tanstack/react-router";
import { Mail, LifeBuoy, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support — Recall" },
      { name: "description", content: "Get help with Recall. Answers to common questions and how to reach the team." },
      { property: "og:title", content: "Support — Recall" },
      { property: "og:description", content: "Get help with Recall." },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
});

const faqs = [
  { q: "How do I create a recall?", a: "Open Recall and tap the plus button. Add text, attach photos from your library, and optionally drop a location." },
  { q: "Can I edit a recall after saving?", a: "Yes — open any recall and tap edit. Change the text, add or remove images, or update the location any time." },
  { q: "How does search work?", a: "Search looks across your text, image captions, place names, and category tags. Partial words match." },
  { q: "Is my data private?", a: "Yes. Recalls are private to your account, encrypted in transit, and never used for advertising. See our Privacy Policy for the full detail." },
  { q: "How do I delete my account?", a: "Email support@recall.app from the address tied to your account and we'll remove everything within 7 days." },
];

function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Support</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stuck on something, or just have a question? We're a small team and we read every message.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <Mail className="h-5 w-5 text-primary" />
            <div className="mt-3 text-sm font-medium">Email us</div>
            <a href="mailto:support@recall.app" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
              support@recall.app
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <Clock className="h-5 w-5 text-primary" />
            <div className="mt-3 text-sm font-medium">Response time</div>
            <div className="mt-1 text-sm text-muted-foreground">Usually within 1 business day.</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <LifeBuoy className="h-5 w-5 text-primary" />
            <div className="mt-3 text-sm font-medium">Account issues</div>
            <div className="mt-1 text-sm text-muted-foreground">Email from your account address for fastest help.</div>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently asked</h2>
          <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((f) => (
              <div key={f.q} className="p-6">
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="text-xl font-semibold">Still need help?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Send us a note with as much detail as you can — what you were doing, what you expected, and what happened instead.
          </p>
          <a
            href="mailto:support@recall.app?subject=Recall%20support"
            className="mt-5 inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Email support
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
