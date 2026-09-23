"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { categories, projects, type Project } from "@/data/projects";

const FILTERS = ["All", ...categories] as const;

function ProjectFrame({ project }: { project: Project }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{
        background: `linear-gradient(155deg, ${project.grade[0]}, ${project.grade[1]})`,
      }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper/90 text-ink transition-transform group-hover:scale-105">
        <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
      </span>

      <span className="absolute left-3 top-3">
        <Badge variant="onDark">{project.category}</Badge>
      </span>

      <span className="absolute bottom-3 right-3 font-mono text-[0.7rem] text-paper/80">
        {project.duration}
      </span>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-3 pt-6">
        <p className="font-display text-base font-medium leading-tight text-paper">
          {project.title}
        </p>
        <p className="font-mono text-[0.7rem] text-paper/70">{project.client}</p>
      </div>
    </div>
  );
}

function ProjectModalBody({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-sm">
      <div
        className="relative aspect-video w-full"
        style={{
          background: `linear-gradient(155deg, ${project.grade[0]}, ${project.grade[1]})`,
        }}
      >
        {project.embedUrl ? (
          <iframe
            src={project.embedUrl}
            className="h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-paper/80">
            <Play className="h-8 w-8" />
            <p className="font-mono text-[0.7rem]">
              Drop a YouTube/Vimeo embed or hosted .mp4 here
            </p>
            <p className="max-w-xs font-mono text-[0.65rem] text-paper/50">
              set project.embedUrl in src/data/projects.ts
            </p>
          </div>
        )}
      </div>
      <div className="bg-reel-paper p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-cream">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[0.7rem] text-cream/50">
            {project.duration}
          </span>
        </div>
        <p className="mt-1 font-mono text-[0.7rem] text-cream/50">{project.client}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
          {project.blurb}
        </p>
      </div>
    </div>
  );
}

export function WorkShowcase() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="bg-reel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              Recent work
            </h2>
            <p className="mt-2 max-w-md text-cream/60">
              A mix of brand films, trailers, and social cuts — filtered by
              type below.
            </p>
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as (typeof FILTERS)[number])}>
            <TabsList>
              {FILTERS.map((f) => (
                <TabsTrigger
                  key={f}
                  value={f}
                  className="border-paper/20 text-cream/60 data-[state=active]:border-paper data-[state=active]:bg-paper data-[state=active]:text-ink"
                >
                  {f}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <button
                  className={`group mb-4 block w-full overflow-hidden rounded-md border border-paper/10 text-left transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${
                    project.aspect === "tall" ? "aspect-[9/14]" : "aspect-video"
                  }`}
                  style={{ breakInside: "avoid" }}
                >
                  <ProjectFrame project={project} />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg overflow-hidden p-0 sm:max-w-xl">
                <DialogTitle>{project.title}</DialogTitle>
                <ProjectModalBody project={project} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
