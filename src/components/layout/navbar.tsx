"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-ink/10 bg-cream/90 backdrop-blur-sm"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            {site.name}
          </span>
          <span className="hidden font-mono text-[0.7rem] text-ink-soft sm:inline">
            / {site.role.toLowerCase()}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {site.available && (
            <span className="hidden items-center gap-1.5 font-mono text-[0.7rem] text-ink-soft sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-pine" />
              Open for projects
            </span>
          )}
          <Button asChild size="sm" variant="primary">
            <a href="#contact">Start a project</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
