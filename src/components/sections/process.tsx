import { processSteps } from "@/data/process";
import { Reveal } from "@/components/shared/reveal";

export function Process() {
  return (
    <section id="process" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            How a project runs
          </h2>
          <p className="mt-2 max-w-md text-ink-soft">
            Four passes, same as a real timeline — nothing gets polished before
            the story is locked.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-4 sm:gap-6">
          <div className="absolute left-0 right-0 top-[0.55rem] hidden h-px bg-ink/15 sm:block" />

          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08}>
              <div className="relative">
                <div className="flex items-center gap-3 sm:block">
                  <span className="relative z-10 flex h-[1.1rem] w-[1.1rem] shrink-0 items-center justify-center rounded-full bg-ember">
                    <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                  </span>
                  <span className="font-mono text-[0.7rem] text-ink-soft sm:mt-3 sm:block">
                    {step.index}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink sm:mt-3">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
