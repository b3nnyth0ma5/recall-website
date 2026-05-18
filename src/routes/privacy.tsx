import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Recall" },
      { name: "description", content: "How Recall collects, uses, and protects your data." },
      { property: "og:title", content: "Privacy Policy — Recall" },
      { property: "og:description", content: "How Recall handles your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-muted-foreground">
              Recall ("we", "us") makes an app for creating, viewing, searching and categorizing personal notes called "recalls". This policy explains what we collect, why, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">What we collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
              <li><strong className="text-foreground">Account data:</strong> your email address and a hashed password (or sign-in token if you use a social provider).</li>
              <li><strong className="text-foreground">Recall content:</strong> the text, images, and locations you choose to save. This is your data — we store it so you can retrieve it.</li>
              <li><strong className="text-foreground">Usage data:</strong> basic, anonymized metrics (e.g. crash reports, feature counts) to improve reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How we use it</h2>
            <p className="mt-2 text-muted-foreground">
              We use your data only to operate Recall: storing and serving your recalls, securing your account, and improving the product. We do not sell your data, we do not show ads, and we do not scan your recalls for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Location data</h2>
            <p className="mt-2 text-muted-foreground">
              Location is only attached to a recall when you explicitly add it. The app requests location permission only at that moment. You can remove a location from any recall at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Images</h2>
            <p className="mt-2 text-muted-foreground">
              Images you attach are stored securely and served only to you. We do not analyze image content for advertising or share it with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Storage and security</h2>
            <p className="mt-2 text-muted-foreground">
              Data is encrypted in transit using TLS and stored with industry-standard providers. Access is restricted to systems and personnel that strictly need it to operate the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Retention and deletion</h2>
            <p className="mt-2 text-muted-foreground">
              You can delete any recall from within the app. To delete your entire account and all associated data, email <a href="mailto:support@recall.app" className="text-primary hover:underline">support@recall.app</a>. We will remove your data within 7 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Your rights</h2>
            <p className="mt-2 text-muted-foreground">
              Depending on where you live, you may have rights to access, correct, export, or delete your data. Email us and we will respond within a reasonable time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-muted-foreground">
              Questions? Email <a href="mailto:privacy@recall.app" className="text-primary hover:underline">privacy@recall.app</a>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
