import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, Tags, Images, ArrowRight, FileText, Globe, User, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-stack.jpg";
import useCaseInventory from "@/assets/use-case-inventory.jpg";
import useCaseIdeas from "@/assets/use-case-ideas.jpg";
import useCaseReceipts from "@/assets/use-case-receipts.jpg";
import useCaseLists from "@/assets/use-case-lists.jpg";
import useCaseWines from "@/assets/use-case-wines.jpg";
import useCaseCookbooks from "@/assets/use-case-cookbooks.jpg";
import useCaseTodo from "@/assets/use-case-todo.jpg";

const useCases = [
  {
    title: "Inventory Management",
    image: useCaseInventory,
    about:
      "Keep track of what you own and where it lives. Snap a photo of the contents of a drawer, a storage box in the attic, or the shelf in the garage. Add a note about what's inside, condition, or when you bought it. Recall handles the rest — turning piles of stuff into a searchable, organised inventory you can actually find again.",
    recall:
      "Ask: 'where did I put the Christmas lights?' or 'do I still have spare HDMI cables?' Recall surfaces the photo, the note, and the location instantly. Search by what's in the image, not just by what you typed — Recall recognises the objects you've stored.",
  },
  {
    title: "Ideas",
    image: useCaseIdeas,
    about:
      "Every fleeting thought, half-formed concept, or shower-time epiphany — captured before it slips away. Jot down a sentence, dictate a voice memo, snap a sketch on a napkin. Recall preserves the spark and the context: when you had it, where you were, what triggered it.",
    recall:
      "Ask: 'what was that idea I had about the side project last month?' or 'show me everything I noted down about pricing.' Recall connects related ideas across time and surfaces the thread you were pulling on — even if you've forgotten the exact words.",
  },
  {
    title: "Receipts",
    image: useCaseReceipts,
    about:
      "Never lose a receipt again. Snap it the moment you're handed one — paper, email, or screen. Recall reads the merchant, the amount, the items and the date automatically, so you don't have to type anything. Expense reports, warranties, returns and tax season all get instantly easier.",
    recall:
      "Ask: 'how much did I spend on coffee last month?' or 'find the receipt from the hardware store in June.' Recall surfaces the image and the extracted details, ready to forward, file or claim.",
  },
  {
    title: "Lists",
    image: useCaseLists,
    about:
      "Shopping lists, packing lists, gift ideas, books to read, films to watch. All the running tallies that live on scraps of paper and half-finished notes apps — finally in one place. Add items in seconds, with photos or links if you want the extra context.",
    recall:
      "Ask: 'what's on my packing list for skiing?' or 'what books did I want to read this summer?' Recall pulls up the list, lets you check things off, and remembers what you finished — so the next time you start a similar list, it can suggest items.",
  },
  {
    title: "Wines",
    image: useCaseWines,
    about:
      "That bottle you loved at dinner. The one your friend recommended. The label you photographed at the vineyard. Snap a picture of the bottle and add a tasting note — even just 'liked it, peppery.' Recall pulls out the producer, vintage, and region from the label automatically.",
    recall:
      "Ask: 'which Bordeaux did I open last summer?' or 'show me the reds I rated highly under £20.' Recall finds the bottle, the note, the place — perfect for the next restaurant order or wine shop visit.",
  },
  {
    title: "Cookbooks I own",
    image: useCaseCookbooks,
    about:
      "Your physical cookbook shelf, made searchable. Snap the cover and a few favourite pages from each book. Recall indexes the recipes, ingredients and techniques inside — so a wall of cookbooks becomes a personal recipe database you can actually use mid-week.",
    recall:
      "Ask: 'which of my books has a good roast chicken recipe?' or 'what can I make with aubergines tonight?' Recall points you to the exact book and page — no more flipping through ten cookbooks to find the one you remember.",
  },
  {
    title: "Things to do",
    image: useCaseTodo,
    about:
      "The restaurant a friend mentioned. The hiking trail you saw on Instagram. The exhibition closing next month. All the 'we should do that sometime' moments — captured with a link, a photo, or a pinned location, so they don't fade into vague intentions.",
    recall:
      "Ask: 'what restaurants did I save in Lisbon?' or 'things to do this weekend nearby.' Recall surfaces ideas by place, by season, or by who suggested them — turning a backlog of intentions into actual plans.",
  },
];

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
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What is a Recall?</h2>
              <p className="mt-3 text-muted-foreground">
                A Recall is more than just a note. It's everything your memory needs — kept in your second brain.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: FileText, title: "Text", body: "Write a thought, an observation, some notes - anything really." },
                { icon: Images, title: "Images", body: "Attach images. Recall will analyse them; ready for when you need anything from them." },
                { icon: MapPin, title: "A place", body: "Pin a location so you remember where it happened." },
                { icon: Globe, title: "Links", body: "Include a URL and the content will be available for you to Recall." },
                { icon: User, title: "People", body: "Recall surfaces and tags people mentioned anywhere - even in the images." },
                { icon: Tags, title: "Categories", body: "Create a category just be describing it. Recall keeps everything organised." },
                { icon: MessageCircle, title: "Chat", body: "Chat with your Recall; interrogate it, get it to look up information on the web, come back to it later." },
                { icon: Search, title: "Instant search", body: "Ask a question, Recall does the answering." },
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
            <p className="mt-3 text-muted-foreground">Two steps. It's all you need.</p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Create", d: "Add a Recall - a note, a URL, some photos, a location." },
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
