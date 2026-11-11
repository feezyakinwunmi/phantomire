"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CalendarPlus, Minus, Rocket } from "lucide-react";
import Countdown, { CompactCountdown, useCountdown } from "./Countdown";
import { LAUNCH, launchDateShort } from "../../lib/launch";
import e from "./event.module.css";

const STORE_KEY = "phantomire-launch-popup";
/** Pages where the floating card would be redundant or in the way. */
const HIDDEN_ON = ["/events", "/admin", "/register"];

type View = "hidden" | "card" | "pill";

const readStored = (): View | null => {
  try {
    const v = window.localStorage.getItem(STORE_KEY);
    return v === "pill" || v === "card" ? v : null;
  } catch {
    return null;
  }
};

const store = (v: View) => {
  try {
    window.localStorage.setItem(STORE_KEY, v);
  } catch {
    /* private mode: the choice just isn't remembered */
  }
};

/**
 * Floating countdown to the launch event, bottom right on every page.
 * Opens as a card a moment after the page loads; minimising turns it into a small pill
 * (remembered across visits), and the pill opens the card again.
 */
export default function LaunchPopup() {
  const pathname = usePathname() || "/";
  const left = useCountdown(LAUNCH.startsAt, LAUNCH.endsAt);
  const [view, setView] = useState<View>("hidden");

  useEffect(() => {
    const stored = readStored();
    // First visit: give the page a moment before the card arrives. Returning visitors
    // who minimised it get the pill straight away.
    const wait = stored === "pill" ? 600 : 2200;
    const t = window.setTimeout(() => setView(stored ?? "card"), wait);
    return () => window.clearTimeout(t);
  }, []);

  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  if (view === "hidden" || !left || left.over) return null;

  const live = left.total === 0;

  const minimise = () => {
    setView("pill");
    store("pill");
  };
  const expand = () => {
    setView("card");
    store("card");
  };

  if (view === "pill") {
    return (
      <div className={e.popWrap}>
        <button type="button" onClick={expand} className={e.pill} aria-label={`Show the ${LAUNCH.name} countdown`}>
          <span className={e.pillIcon} aria-hidden>
            <Rocket size={15} />
          </span>
          <span className={e.pillText}>
            <span className={e.pillTitle}>{live ? "Happening now" : `Launch · ${launchDateShort()}`}</span>
            {!live && <CompactCountdown left={left} />}
          </span>
          <span className={e.liveDot} aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <div className={e.popWrap}>
      <aside className={e.pop} aria-labelledby="launch-pop-title">
        <span className={e.popGlow} aria-hidden />
        <span className={e.popDots} aria-hidden />

        <div className={e.popHead}>
          <span className={e.popTag}>
            <span className={e.liveDot} aria-hidden />
            {live ? "Happening now" : `Coming ${launchDateShort()}`}
          </span>
          <button type="button" onClick={minimise} className={e.popClose} aria-label="Minimise event countdown">
            <Minus size={16} />
          </button>
        </div>

        <div className={e.popBody}>
          <p className={e.popKind}>{LAUNCH.kind}</p>
          <h2 id="launch-pop-title" className={e.popTitle}>
            {LAUNCH.name}
          </h2>
        </div>

        {!live && (
          <div className={e.popCd}>
            <Countdown left={left} size="card" />
          </div>
        )}

        <div className={e.popActions}>
          <Link href="/events#launch" className={e.popBtn} onClick={minimise}>
            See the event <ArrowRight size={16} />
          </Link>
          <a href="/events/launch.ics" className={e.popIconBtn} aria-label="Add the event to your calendar" title="Add to calendar">
            <CalendarPlus size={18} />
          </a>
        </div>
      </aside>
    </div>
  );
}
