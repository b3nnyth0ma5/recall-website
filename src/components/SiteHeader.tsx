import { Link } from "@tanstack/react-router";
import recallLogo from "@/assets/recall-logo.png";

export function SiteHeader() {
  const linkClass = "text-sm text-foreground/70 hover:text-foreground transition-colors";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img
            src={recallLogo}
            alt="Recall logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span>Recall</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/use-cases" className={linkClass} activeProps={{ className: "text-foreground font-medium" }}>Use Cases</Link>
        </nav>
        <a
          href="#get-app"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Coming soon
        </a>
      </div>
    </header>
  );
}
