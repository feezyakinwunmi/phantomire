"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Countdown, { useCountdown } from "./Countdown";
import Reveal from "../site/Reveal";
import { LAUNCH, launchDateLong } from "../../lib/launch";
import s from "../site/ui.module.css";
import e from "./event.module.css";

/** Home page strip announcing the launch event, with a live countdown. Hidden once the event is over. */
export default function LaunchBand() {
  const left = useCountdown(LAUNCH.startsAt, LAUNCH.endsAt);
  if (left?.over) return null;
  const live = left?.total === 0;

  return (
    <section className={`${s.section} ${s.light}`} aria-labelledby="launch-band-title">
      <div className={`${s.wrap} pb-16 lg:pb-24`}>
        <Reveal from="scale">
          <div className={e.band}>
            <div className={e.bandPhoto} aria-hidden>
              <Image src="/pages/events-hero.webp" alt="" fill sizes="(min-width: 1400px) 1340px, 100vw" />
            </div>

            <div>
              <p className={s.eyebrow} style={{ color: "#cfa8ff" }}>
                {live ? "Happening now" : "Coming soon"} · {LAUNCH.kind}
              </p>
              <h2 id="launch-band-title" className={`${e.bandTitle} mt-4`}>
                {LAUNCH.name}
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-white/70">{LAUNCH.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className={s.chipDark}>
                  <CalendarDays size={14} className="mr-1.5" aria-hidden /> {launchDateLong()}
                </span>
                <span className={s.chipDark}>
                  <MapPin size={14} className="mr-1.5" aria-hidden /> {LAUNCH.city}
                </span>
              </div>
              <Link href="/events#launch" className={`${s.btn} mt-7`}>
                See the event <ArrowRight size={17} />
              </Link>
            </div>

            {!live && (
              <div>
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">Starts in</p>
                <Countdown left={left} size="band" />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
