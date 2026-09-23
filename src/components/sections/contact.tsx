"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { categories } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";

export function Contact() {
  const [service, setService] = useState<string>(categories[0]);
  const [note, setNote] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`New project — ${service}`);
    const bodyLines = [
      `Type of project: ${service}`,
      "",
      note || "(add a line or two about the project)",
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [service, note]);

  return (
    <section id="contact" className="grain bg-reel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-lg font-display text-4xl font-semibold text-cream sm:text-5xl">
            Let&apos;s cut something worth watching.
          </h2>
          <p className="mt-4 max-w-md text-cream/60">
            {site.available
              ? "Open for new projects right now."
              : "Booked for the next few weeks, but reach out anyway."}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-md border border-paper/15 bg-reel-paper p-6 sm:p-8">
              <p className="font-mono text-[0.7rem] text-cream/50">
                pick a service
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setService(c)}
                    className={`rounded-full border px-4 py-1.5 font-mono text-[0.75rem] transition-colors ${
                      service === c
                        ? "border-paper bg-paper text-ink"
                        : "border-paper/20 text-cream/60 hover:border-paper/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <label
                className="mt-6 block font-mono text-[0.7rem] text-cream/50"
                htmlFor="note"
              >
                a line about the project (optional)
              </label>
              <textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="e.g. 90-second launch film, footage ready, need it in 2 weeks"
                className="mt-2 w-full resize-none rounded-sm border border-paper/15 bg-reel px-3 py-2 text-sm text-cream placeholder:text-cream/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              />

              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-6 w-full sm:w-auto"
              >
                <a href={mailtoHref}>
                  <Mail className="h-4 w-4" />
                  Email this over
                </a>
              </Button>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="font-mono text-[0.7rem] text-cream/50">direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block font-display text-xl font-medium text-cream hover:text-cream/80"
                >
                  {site.email}
                </a>
                <p className="mt-1 text-sm text-cream/50">{site.location}</p>
              </div>

              <div>
                <p className="font-mono text-[0.7rem] text-cream/50">
                  elsewhere
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {site.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="group flex items-center gap-1.5 text-sm text-cream/70 hover:text-cream"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
