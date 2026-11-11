"use client";

import { useEffect, useRef } from "react";
import s from "./hero.module.css";

/**
 * A slot-machine reel for the hero headline.
 *
 * The words are stacked in a column (repeated COPIES times) behind a one-row window.
 * Every few seconds the reel tugs back, spins down a full turn with motion blur,
 * overshoots the next word and clunks back into place. When it stops it silently
 * jumps to the same word in the last copy, so it can always spin the same way.
 */

const COPIES = 3;
/** Height of one reel row in em. Keep in sync with `.reelItem` / `.slot` in hero.module.css. */
const STEP = 1.4;
const SPIN_MS = 1300;

const rowY = (row: number) => `translateY(${(-row * STEP).toFixed(3)}em)`;
/** Resting row of word i: its copy in the last repeat of the list. */
const restRow = (i: number, count: number) => (COPIES - 1) * count + i;

function spinFrames(from: number, to: number): Keyframe[] {
  const travel = to - from; // negative: rows move down past the window
  return [
    { transform: rowY(from), filter: "blur(0em)", easing: "ease-out" },
    // lever pull: a small tug the other way, then accelerate
    { transform: rowY(from + 0.14), filter: "blur(0em)", offset: 0.09, easing: "cubic-bezier(.5,0,.8,.4)" },
    // full speed, then a long slow-down
    { transform: rowY(from + travel * 0.55), filter: "blur(0.07em)", offset: 0.4, easing: "cubic-bezier(.1,.5,.3,1)" },
    // overshoot the word, bounce back, settle
    { transform: rowY(to - 0.16), filter: "blur(0em)", offset: 0.8, easing: "ease-in-out" },
    { transform: rowY(to + 0.05), filter: "blur(0em)", offset: 0.91, easing: "ease-in-out" },
    { transform: rowY(to), filter: "blur(0em)" },
  ];
}

type Props = {
  words: readonly string[];
  /** Time before the first spin, ms. */
  firstDelay?: number;
  /** Time a word rests between spins, ms. */
  pause?: number;
};

export default function RollingWord({ words, firstDelay = 2000, pause = 2000 }: Props) {
  const windowRef = useRef<HTMLSpanElement>(null);
  const reelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const win = windowRef.current;
    const reel = reelRef.current;
    const count = words.length;
    if (!win || !reel || count < 2) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current = 0;
    let visible = true;
    let timer = 0;
    let anim: Animation | null = null;

    const settle = (i: number) => {
      reel.style.transform = rowY(restRow(i, count));
    };
    const schedule = (ms: number) => {
      timer = window.setTimeout(tick, ms);
    };

    function tick() {
      // Don't spin while the hero is off screen or the tab is in the background.
      if (!visible || document.hidden) {
        schedule(600);
        return;
      }
      const next = (current + 1) % count;

      if (reduce.matches || typeof reel!.animate !== "function") {
        // Reduced motion: swap the word with a soft fade, no movement.
        settle(next);
        current = next;
        if (typeof reel!.animate === "function") {
          anim = reel!.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, easing: "ease-out" });
        }
        schedule(pause + SPIN_MS);
        return;
      }

      const from = restRow(current, count);
      // One full turn, landing one word further on.
      const to = from - (2 * count - 1);
      anim = reel!.animate(spinFrames(from, to), { duration: SPIN_MS, fill: "forwards" });
      anim.onfinish = () => {
        settle(next);
        anim?.cancel();
        anim = null;
        current = next;
        schedule(pause);
      };
    }

    const io =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
          });
    io?.observe(win);

    settle(0);
    schedule(firstDelay);

    return () => {
      window.clearTimeout(timer);
      anim?.cancel();
      io?.disconnect();
    };
  }, [words, firstDelay, pause]);

  return (
    <span ref={windowRef} className={s.slot} aria-hidden="true">
      <span ref={reelRef} className={s.reel} style={{ transform: rowY(restRow(0, words.length)) }}>
        {Array.from({ length: COPIES }, (_, copy) =>
          words.map((word, i) => (
            <span key={`${copy}-${i}`} className={s.reelItem}>
              {word}
            </span>
          )),
        )}
      </span>
    </span>
  );
}
