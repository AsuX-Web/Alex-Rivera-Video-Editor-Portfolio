import { projects } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";

export function TrustedBy() {
  const clients = Array.from(new Set(projects.map((p) => p.client)));

  return (
    <section className="border-y border-ink/10 bg-cream py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-mono text-[0.7rem] text-ink-soft">
            edited for
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="font-display text-lg font-medium text-ink-soft/70 transition-colors hover:text-ink"
              >
                {client}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
