"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import s from "./ui.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Where the element travels in from. */
  from?: "up" | "left" | "right" | "scale";
  /** Stagger in ms. */
  delay?: number;
};

/**
 * Scroll reveal. Content is rendered visible (so it works without JavaScript and never
 * flashes); only elements still below the fold are hidden on mount and animated in when
 * they scroll into view. One IntersectionObserver is shared by every instance.
 */
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer?.unobserve(el);
        el.classList.remove(s.pre);
        el.classList.add(s.in);
        // Drop the transition afterwards so it can't slow down hover effects on the same element.
        const wait = 1400 + (parseInt(el.style.getPropertyValue("--d"), 10) || 0);
        window.setTimeout(() => el.classList.remove(s.in), wait);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  return observer;
}

export default function Reveal({ children, className, from = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    if (!el || !io) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already on screen

    el.classList.add(s.pre);
    io.observe(el);
    return () => {
      io.unobserve(el);
      el.classList.remove(s.pre, s.in);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={from}
      className={className}
      style={delay ? ({ "--d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
