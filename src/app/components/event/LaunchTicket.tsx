"use client";

import { useRef } from "react";
import { Users } from "lucide-react";
import Countdown, { useCountdown } from "./Countdown";
import { LAUNCH, launchDateLong, launchTime } from "../../lib/launch";
import e from "./event.module.css";

/** The event ticket on the events page: live countdown, key facts, and a gentle 3D tilt. */
export default function LaunchTicket() {
  const left = useCountdown(LAUNCH.startsAt);
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  // Tilt toward the pointer (mouse and pen only, so touch scrolling is never affected).
  const onMove = (ev: React.PointerEvent<HTMLDivElement>) => {
    if (ev.pointerType === "touch") return;
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (ev.clientX - r.left) / r.width - 0.5;
    const y = (ev.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.classList.add(e.ticketTilting);
      el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.classList.remove(e.ticketTilting);
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  const date = launchDateLong();
  const live = left?.total === 0;

  return (
    <div className={e.ticketScene} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className={e.ticketNote}>
        <span className={e.ticketNoteIcon} aria-hidden>
          <Users size={14} />
        </span>
        Limited seats
      </div>

      <div ref={ref} className={e.ticket}>
        <div className={e.ticketMain}>
          <div className={e.ticketTop}>
            <span className={e.ticketBrand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" width={28} height={28} />
              Phantomire
            </span>
            <span className={e.admit}>ADMIT ONE</span>
          </div>

          <p className={e.ticketKind}>{LAUNCH.kind}</p>
          <p className={e.ticketName}>{LAUNCH.name}</p>

          <div className={e.ticketCd}>
            {live ? (
              <p className="text-center text-[20px] font-bold text-[#7b24e3]">Happening now</p>
            ) : (
              <Countdown left={left} size="ticket" />
            )}
          </div>

          <dl className={e.ticketFacts}>
            <div className={e.factWide}>
              <dt className={e.factLabel}>Date</dt>
              <dd className={e.factValue}>
                {date.split(", ")[1]}
                <span className={e.factSub}>{date.split(", ")[0]}</span>
              </dd>
            </div>
            <div>
              <dt className={e.factLabel}>Time</dt>
              <dd className={e.factValue}>
                {LAUNCH.timeConfirmed ? launchTime() : "To be confirmed"}
                {LAUNCH.timeConfirmed && <span className={e.factSub}>West Africa Time</span>}
              </dd>
            </div>
            <div>
              <dt className={e.factLabel}>Where</dt>
              <dd className={e.factValue}>
                {LAUNCH.venueConfirmed ? LAUNCH.venue : LAUNCH.city.split(",")[0]}
                {!LAUNCH.venueConfirmed && (
                  <span className={e.factSub}>Venue TBA</span>
                )}
              </dd>
            </div>
          </dl>
        </div>

        <div className={e.ticketStub} aria-hidden>
          <div>
            <p className={e.stubCode}>PH · LAUNCH · 2026</p>
            <p className={e.stubDate}>11 · 12 · 26</p>
          </div>
          <span className={e.barcode} />
        </div>
      </div>
    </div>
  );
}
