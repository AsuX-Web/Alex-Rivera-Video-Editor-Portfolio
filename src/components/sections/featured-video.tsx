"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);
  const { showreel } = site;

  return (
    <section className="bg-reel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-[0.75rem] text-cream/50">now screening</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cream sm:text-4xl">
            {showreel.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-md border border-paper/10 bg-reel-paper">
            {playing && showreel.embedUrl ? (
              <iframe
                src={showreel.embedUrl}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                disabled={!showreel.embedUrl}
                className="group flex h-full w-full flex-col items-center justify-center gap-4 disabled:cursor-not-allowed"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-ink transition-transform group-hover:scale-105 group-disabled:group-hover:scale-100">
                  <Play className="ml-1 h-6 w-6" fill="currentColor" />
                </span>
                <span className="font-mono text-[0.75rem] text-cream/50">
                  {showreel.embedUrl
                    ? showreel.duration
                    : "set site.showreel.embedUrl in src/data/site.ts"}
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}