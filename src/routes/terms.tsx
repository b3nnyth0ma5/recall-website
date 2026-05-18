import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Recall" },
      { name: "description", content: "The terms that apply when you use Recall." },
      { property: "og:title", content: "Terms of Service — Recall" },
      { property: "og:description", content: "The terms that apply when you use Recall." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Using Recall</h2>
            <p className="mt-2 text-muted-foreground">
              By creating an account, you agree to these terms. Use Recall lawfully and don't attempt to disrupt the service or access other people's data.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Your content</h2>
            <p className="mt-2 text-muted-foreground">
              You own the recalls you create. You grant us the limited rights necessary to store and serve them back to you.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Availability</h2>
            <p className="mt-2 text-muted-foreground">
              We aim for high uptime but cannot guarantee uninterrupted access. We may update or change features over time.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Termination</h2>
            <p className="mt-2 text-muted-foreground">
              You can stop using Recall and delete your account at any time. We may suspend accounts that violate these terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-muted-foreground">
              Questions? Email <a href="mailto:hello@recall.app" className="text-primary hover:underline">hello@recall.app</a>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
