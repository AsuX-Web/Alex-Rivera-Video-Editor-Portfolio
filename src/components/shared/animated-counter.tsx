"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function AnimatedCounter({
  value,
  duration = 1.4,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, value, duration, shouldReduceMotion]);

  // Reduced-motion viewers get the final number immediately, derived
  // straight from render rather than routed through another setState.
  const shown = inView && shouldReduceMotion ? value : display;

  return <span ref={ref}>{shown}</span>;
}
