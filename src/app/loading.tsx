export default function Loading() {
  return (
    <div className="grain flex min-h-screen items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-6">
        {/* Film-strip loader */}
        <div className="flex items-center gap-1.5">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="h-10 w-2 rounded-sm bg-ink/15 animate-pulse"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>

        {/* Mono label */}
        <p className="font-mono text-[0.7rem] tracking-widest text-ink-soft uppercase">
          loading reel…
        </p>
      </div>
    </div>
  );
}
