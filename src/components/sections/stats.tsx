import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-cream py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`pl-4 ${i > 0 ? "border-l border-ink/10" : ""}`}
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-ink">
                <AnimatedCounter value={stat.value} />
                <span className="text-ember">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm font-medium text-ink">{stat.label}</p>
              <p className="mt-0.5 font-mono text-[0.7rem] text-ink-soft">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
