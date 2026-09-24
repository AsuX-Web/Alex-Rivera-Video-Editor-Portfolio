import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grain flex min-h-screen flex-col items-center justify-center bg-cream px-5 text-center">
      {/* Timecode-style label */}
      <p className="font-mono text-[0.7rem] tracking-widest text-ink-soft uppercase">
        error · 404
      </p>

      <h1 className="mt-4 font-display text-[5rem] font-semibold leading-none tracking-tight text-ink sm:text-[7rem]">
        404
      </h1>

      <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
        This frame doesn&apos;t exist in the timeline. The page you&apos;re
        looking for has been cut or moved.
      </p>

      {/* Decorative clip bar */}
      <div className="mt-8 flex w-48 items-center gap-1">
        <span className="h-1.5 flex-[2] rounded-full bg-ember/60" />
        <span className="h-1.5 flex-[1] rounded-full bg-ink/20" />
        <span className="h-1.5 flex-[3] rounded-full bg-pine/40" />
        <span className="h-1.5 flex-[1] rounded-full bg-ink/20" />
        <span className="h-1.5 flex-[2] rounded-full bg-ember-ink/50" />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-ember px-7 text-sm font-medium text-paper transition-colors hover:bg-ember-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Back to home
        </Link>
        <Link
          href="/#work"
          className="inline-flex h-11 items-center rounded-full border border-ink/30 bg-transparent px-7 text-sm font-medium text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          See the work
        </Link>
      </div>

      <p className="mt-12 font-mono text-[0.65rem] text-ink-soft/50">
        cut · 00:04:04:00
      </p>
    </div>
  );
}
