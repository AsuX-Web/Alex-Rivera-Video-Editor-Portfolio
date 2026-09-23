import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-reel text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-cream/60">{site.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[0.7rem] text-cream/40">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
