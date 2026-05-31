import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { MapPin, Tags, Images, FileText, Globe, User, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-stack.jpg";
import { buildCarouselSlots } from "@/data/use-cases";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recall — Capture anything. Recall it later." },
      { name: "description", content: "Recall is your second brain. Save text, links, photos or places. When you need it, Recall it!" },
      { property: "og:title", content: "Recall — Capture anything. Recall it later." },
      { property: "og:description", content: "Recall is your second brain. Save text, links, photos or places. When you need it, Recall it!" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  // Compute once per session/page-load so the random selection is stable.
  const slots = useMemo(() => buildCarouselSlots(), []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                Coming soon
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Capture anything. <span className="text-primary">Recall it later.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Recall is your second brain for anything you want to remember — a thought, a website, that Insta post, some photos, a place. Save it in seconds. Recall it later.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" id="get-app">
                <a
                  href="/"
                  className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Coming soon
                </a>
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

        <section id="what-is-a-recall" className="border-y border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What is a Recall?</h2>
              <p className="mt-3 text-muted-foreground">
                A Recall is more than just a note. It's everything your memory needs — kept in your second brain.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: FileText, title: "Text", body: "Write a thought, an observation, some notes - anything really." },
                { icon: Images, title: "Images", body: "Attach images. Recall will analyse them; ready when you need anything from them." },
                { icon: MapPin, title: "A place", body: "Pin a location so you remember where it happened." },
                { icon: Globe, title: "Links", body: "Include a URL and the content will be available for you to Recall." },
                { icon: User, title: "People", body: "Recall surfaces and tags people mentioned anywhere - even in the images." },
                { icon: Tags, title: "Categories", body: "Create a category just by describing it. Recall keeps everything organised." },
               // { icon: MessageCircle, title: "Chat", body: "Chat with your Recall; interrogate it, get it to look up information on the web, come back to it later." },
               // { icon: Search, title: "Instant search", body: "Ask a question, Recall does the answering." },
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

        <section id="use-cases" className="border-b border-border/60 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What to use Recall for?</h2>
              <p className="mt-3 text-muted-foreground">
                A few of the things people use Recall for. Slide through to see what it could do for you.
              </p>
            </div>
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="mt-12"
            >
              <CarouselContent>
                {slots.map((slot, idx) =>
                  slot.kind === "use-case" ? (
                    <CarouselItem key={`${slot.useCase.id}-${idx}`}>
                      <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                          <img
                            src={slot.useCase.image}
                            alt={`Illustration for the ${slot.useCase.title} use case`}
                            width={1280}
                            height={960}
                            loading="lazy"
                            className="rounded-xl border border-border"
                          />
                          <div>
                            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{slot.useCase.title}</h3>
                            <div className="mt-6">
                              <div className="text-xs font-mono uppercase tracking-wider text-primary">The use case</div>
                              <p className="mt-2 text-sm text-muted-foreground md:text-base">{slot.useCase.about}</p>
                            </div>
                            <div className="mt-6">
                              <div className="text-xs font-mono uppercase tracking-wider text-primary">Recall it</div>
                              <p className="mt-2 text-sm text-muted-foreground md:text-base">{slot.useCase.recall}</p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </CarouselItem>
                  ) : (
                    <CarouselItem key={`see-more-${idx}`}>
                      <Link
                        to="/use-cases"
                        className="group flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/40 p-10 text-center transition-all hover:border-primary/60 hover:shadow-lg md:min-h-[420px]"
                      >
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform group-hover:scale-110">
                          <ArrowRight className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">See more use cases</h3>
                        <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
                          Explore every way people use Recall — from cookbooks and collectibles to dream homes and dream holidays.
                        </p>
                        <span className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground group-hover:bg-primary/90">
                          Browse all use cases
                        </span>
                      </Link>
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>
            </Carousel>
            <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Use case slides">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-selected={current === i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    current === i ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
            <p className="mt-3 text-muted-foreground">Two steps. It's all you need.</p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Create", d: "Add a Recall - some text, a URL, photos, a location." },
              { n: "02", t: "Recall", d: "Search anything — a word, that place, those people, ask a question. It surfaces." },
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
              The smart way to never forget
            </h2>
            
            <a
              href="/"
              className="mt-7 inline-flex h-11 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground hover:bg-background/90"
            >
              Coming soon
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
