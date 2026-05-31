import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="font-semibold tracking-tight">Recall</div>
          <p className="mt-2 text-sm text-muted-foreground">
              The smart way to never forget.
          </p>
        </div>
        <div>
          <div className="text-sm font-medium">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" hash="what-is-a-recall" className="hover:text-foreground">What is a Recall?</Link></li>
          </ul>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/use-cases" hash="use-cases" className="hover:text-foreground">Use Cases for Recall</Link></li>
          </ul>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" hash="how" className="hover:text-foreground">How it works</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/support" className="hover:text-foreground">Support</Link></li>
            <li><a href="mailto:hello@recall.app" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Recall. All rights reserved.
      </div>
    </footer>
  );
}
