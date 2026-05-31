import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { allUseCases } from "@/data/use-cases";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/use-cases")({
  component: UseCasesPage,
  head: () => ({
    meta: [
      { title: "Use Cases — Recall" },
      {
        name: "description",
        content:
          "Every way people use Recall — wines, cookbooks, collectibles, pets, plants, dream homes and literally anything else worth remembering.",
      },
      { property: "og:title", content: "Use Cases — Recall" },
      {
        property: "og:description",
        content:
          "Every way people use Recall — wines, cookbooks, collectibles, pets, plants, dream homes and literally anything else worth remembering.",
      },
    ],
    links: [{ rel: "canonical", href: "/use-cases" }],
  }),
});

function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Use Cases for <span className="text-primary">Recall</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A few of the things people use Recall for. Bottles, books, pets,
            plants, plans — the more you capture, the more your second brain
            has to draw on.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ul className="flex flex-col gap-12 md:gap-20">
            {allUseCases.map((uc, idx) => {
              const imageOnRight = idx % 2 === 1;
              return (
                <li key={uc.id}>
                  <article className="rounded-2xl border border-border bg-card p-5 md:p-8">
                    <div
                      className={cn(
                        "grid gap-6 md:gap-10 md:grid-cols-2 md:items-center",
                      )}
                    >
                      <img
                        src={uc.image}
                        alt={`Illustration for the ${uc.title} use case`}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className={cn(
                          "rounded-xl border border-border w-full h-auto",
                          imageOnRight && "md:order-2",
                        )}
                      />
                      <div className={cn(imageOnRight && "md:order-1")}>
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                          {uc.title}
                        </h2>
                        <div className="mt-5">
                          <div className="text-xs font-mono uppercase tracking-wider text-primary">
                            The use case
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground md:text-base">
                            {uc.about}
                          </p>
                        </div>
                        <div className="mt-5">
                          <div className="text-xs font-mono uppercase tracking-wider text-primary">
                            Recall it
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground md:text-base">
                            {uc.recall}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <div className="mt-16 rounded-2xl bg-primary px-8 py-12 text-primary-foreground md:px-14 md:py-16">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              The smart way to never forget
            </h2>
            <Link
              to="/"
              className="mt-7 inline-flex h-11 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground hover:bg-background/90"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}