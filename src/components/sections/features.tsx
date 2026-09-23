import { features } from "@/data/features";
import { Reveal } from "@/components/shared/reveal";

export function Features() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-md font-display text-3xl font-semibold text-ink sm:text-4xl">
            Why teams keep coming back
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
          {features.map((f, i) => (
            <Reveal key={f.tag} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-2 py-7 sm:grid-cols-[7rem_1fr_2fr] sm:gap-x-10">
                <span className="font-mono text-[0.7rem] tracking-tight text-ember-ink sm:pt-1">
                  {f.tag}
                </span>
                <h3 className="col-start-2 font-display text-xl font-semibold text-ink sm:col-start-2">
                  {f.title}
                </h3>
                <p className="col-span-2 text-[0.95rem] leading-relaxed text-ink-soft sm:col-span-1 sm:col-start-3">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
