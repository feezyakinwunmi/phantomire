"use client";

import { useEffect, useState } from "react";
import e from "./event.module.css";

export type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** Milliseconds left (0 once started). */
  total: number;
  /** True once `end` (if given) has passed. */
  over: boolean;
};

const split = (ms: number, over: boolean): Remaining => {
  const total = Math.max(0, ms);
  return {
    total,
    over,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor(total / 3_600_000) % 24,
    minutes: Math.floor(total / 60_000) % 60,
    seconds: Math.floor(total / 1000) % 60,
  };
};

/**
 * Time left until `target`. Returns null until the component has mounted, so the server
 * render and the first client render match (no hydration mismatch on a ticking clock).
 */
export function useCountdown(target: string, end?: string): Remaining | null {
  const [left, setLeft] = useState<Remaining | null>(null);

  useEffect(() => {
    const start = new Date(target).getTime();
    const finish = end ? new Date(end).getTime() : Infinity;
    let timer = 0;
    const tick = () => {
      const now = Date.now();
      setLeft(split(start - now, now > finish));
      // Re-align to the next whole second so every digit flips together.
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000) + 10);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [target, end]);

  return left;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** A number whose digits slide up from a mask whenever they change. */
export function Digits({ value, min = 2 }: { value: number | null; min?: number }) {
  const text = value === null ? "–".repeat(min) : String(value).padStart(min, "0");
  return (
    <span className={e.digits} aria-hidden>
      {text.split("").map((ch, i) => (
        // Keyed by position + character: only the digits that change re-mount and animate.
        <span key={`${text.length - i}-${ch}`} className={e.digit}>
          <span>{ch}</span>
        </span>
      ))}
    </span>
  );
}

const UNITS = [
  { key: "days", label: "Days", short: "d" },
  { key: "hours", label: "Hours", short: "h" },
  { key: "minutes", label: "Mins", short: "m" },
  { key: "seconds", label: "Secs", short: "s" },
] as const;

/** Spoken version for screen readers (updated once a minute, not every second). */
const spoken = (r: Remaining | null) =>
  r ? `${r.days} days, ${r.hours} hours and ${r.minutes} minutes to go` : "Countdown loading";

type Props = {
  left: Remaining | null;
  /** "ticket": large, events page. "card": the floating card. "band": home page strip. */
  size?: "ticket" | "card" | "band";
};

/** Days / hours / minutes / seconds cells. */
export default function Countdown({ left, size = "card" }: Props) {
  return (
    <div className={`${e.cd} ${e[`cd_${size}`]}`} role="timer" aria-live="off">
      <span className="sr-only">{spoken(left)}</span>
      {UNITS.map((u) => (
        <div key={u.key} className={e.cdCell}>
          <span className={e.cdNum}>
            <Digits value={left ? left[u.key] : null} min={2} />
          </span>
          <span className={e.cdLabel}>{u.label}</span>
        </div>
      ))}
    </div>
  );
}

/** "29d 04:12:33" for tight spaces. */
export function CompactCountdown({ left }: { left: Remaining | null }) {
  if (!left) return <span className={e.compact}>--d --:--:--</span>;
  return (
    <span className={e.compact} aria-label={spoken(left)}>
      {left.days}d {pad(left.hours)}:{pad(left.minutes)}:{pad(left.seconds)}
    </span>
  );
}
