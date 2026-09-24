"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grain flex min-h-screen flex-col items-center justify-center bg-cream px-5 text-center">
      {/* Status label */}
      <p className="font-mono text-[0.7rem] tracking-widest text-ink-soft uppercase">
        render · failed
      </p>

      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Something went wrong.
      </h1>

      <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
        An unexpected error occurred while rendering this page. You can try
        again, or head back home.
      </p>

      {/* Corrupted clip visual */}
      <div className="mt-8 flex w-48 items-center gap-0.5 overflow-hidden rounded-sm">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="h-5 flex-1 rounded-[1px]"
            style={{
              background:
                i % 4 === 0
                  ? "var(--ember)"
                  : i % 3 === 0
                    ? "var(--ink)"
                    : "rgba(30,26,22,0.12)",
            }}
          />
        ))}
      </div>

      {error.digest && (
        <p className="mt-4 font-mono text-[0.65rem] text-ink-soft/50">
          digest: {error.digest}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => retry()}
          className="inline-flex h-11 items-center rounded-full bg-ember px-7 text-sm font-medium text-paper transition-colors hover:bg-ember-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full border border-ink/30 bg-transparent px-7 text-sm font-medium text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Back to home
        </Link>
      </div>

      <p className="mt-12 font-mono text-[0.65rem] text-ink-soft/50">
        frame · corrupted
      </p>
    </div>
  );
}
