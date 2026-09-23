"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const CLIPS = [
  { label: "b-roll", width: 28, tone: "bg-ember/70" },
  { label: "interview", width: 34, tone: "bg-ink/70" },
  { label: "music bed", width: 16, tone: "bg-pine/70" },
  { label: "colour grade", width: 22, tone: "bg-ember-ink/60" },
];

function useTimecode() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 1000 / 24);
    return () => clearInterval(id);
  }, []);

  const totalSeconds = Math.floor(frame / 24);
  const hh = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const ss = String(totalSeconds % 60).padStart(2, "0");
  const ff = String(frame % 24).padStart(2, "0");
  return `${hh}:${mm}:${ss}:${ff}`;
}

export function Hero() {
  const timecode = useTimecode();

  return (
    <section id="top" className="grain relative overflow-hidden bg-cream pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-2 font-mono text-[0.75rem] text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          rec · {timecode}
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Footage becomes film in this room.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          I cut trailers, brand films, and social edits for teams who need
          their footage to land the first time — {site.tagline.toLowerCase()}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button asChild variant="primary" size="lg">
            <a href="#contact">Start a project</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#work">See the work</a>
          </Button>
        </div>

        {/* Timeline scrubber — stands in for the generic hero visual */}
        <div className="mt-16 rounded-md border border-ink/15 bg-paper p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[0.7rem] text-ink-soft">
            <span>timeline.mov</span>
            <span className="tabular-nums">{timecode}</span>
          </div>

          <div className="relative mt-3 h-14 overflow-hidden rounded-sm bg-ink/[0.06]">
            <div className="flex h-full w-full">
              {CLIPS.map((clip) => (
                <div
                  key={clip.label}
                  style={{ width: `${clip.width}%` }}
                  className={`relative flex h-full items-center border-r border-cream/40 px-2 ${clip.tone}`}
                >
                  <span className="truncate font-mono text-[0.65rem] text-paper/90">
                    {clip.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.div
              className="absolute top-0 h-full w-[2px] bg-ink"
              initial={{ left: "0%" }}
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="mt-2 flex justify-between font-mono text-[0.65rem] text-ink-soft/70">
            <span>00:00</span>
            <span>00:24</span>
          </div>
        </div>
      </div>
    </section>
  );
}
