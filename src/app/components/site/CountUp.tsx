"use client";

import { useEffect, useRef } from "react";

type Props = { value: number; suffix?: string; duration?: number };

/** Counts up from 0 the first time it scrolls into view. Renders the final value on the server. */
export default function CountUp({ value, suffix = "", duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already on screen

    const show = (n: number) => {
      el.textContent = `${n}${suffix}`;
    };
    let raf = 0;
    show(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          show(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      show(value);
    };
  }, [value, suffix, duration]);

  return <span ref={ref}>{`${value}${suffix}`}</span>;
}
