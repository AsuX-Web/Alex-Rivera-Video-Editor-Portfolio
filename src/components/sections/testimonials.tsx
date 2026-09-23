"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/shared/reveal";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                On the record
              </h2>
              <p className="mt-2 max-w-md text-ink-soft">
                A few notes from the review board — pulled straight from client
                feedback threads.
              </p>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Scroll testimonials left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Scroll testimonials right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="w-[85%] shrink-0 snap-start rounded-md border border-ink/10 bg-paper p-6 sm:w-[360px]"
            >
              <Quote className="h-5 w-5 text-ember" />
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="font-mono text-[0.7rem] text-ink-soft">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
