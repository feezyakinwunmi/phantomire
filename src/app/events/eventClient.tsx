"use client";

import { useEffect, useMemo, useState } from "react";
import { format, parseISO } from "date-fns";
import { ArrowUpRight, CalendarDays, ChevronDown, Clock, MapPin, Search } from "lucide-react";
import { supabase } from "../lib/supabase";
import Reveal from "../components/site/Reveal";
import s from "../components/site/ui.module.css";
import e from "../components/event/event.module.css";

export type EventRow = {
  id: number | string;
  title?: string | null;
  date: string;
  time?: string | null;
  location?: string | null;
  short_desc?: string | null;
  description?: string | null;
  image_url?: string | null;
  reg_url?: string | null; 
  host?: string | null;
  is_phantomire?: boolean | null;
};

/** The event's start, using its time when it has one, otherwise the end of that day. */
const startOf = (ev: EventRow): Date | null => {
  try {
    const d = parseISO(ev.date);
    if (Number.isNaN(d.getTime())) return null;
    const [h, m] = (ev.time ?? "").split(":");
    if (ev.time && !Number.isNaN(parseInt(h, 10))) d.setHours(parseInt(h, 10), parseInt(m || "0", 10));
    else d.setHours(23, 59);
    return d;
  } catch {
    return null;
  }
};

const regLink = (url?: string | null) => {
  const u = url?.trim();
  if (!u || u === "#") return null;
  return u.startsWith("http") ? u : `https://${u}`;
};

const groupByMonth = (list: { ev: EventRow; at: Date }[]) => {
  const map = new Map<string, { ev: EventRow; at: Date }[]>();
  for (const item of list) {
    const key = format(item.at, "MMMM yyyy");
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return Array.from(map.entries());
};

/** Every other event from Supabase: searchable, grouped by month, with past Phantomire events on request. */
export default function EventsClient({ initialEvents }: { initialEvents: EventRow[] }) {
  const [events, setEvents] = useState<EventRow[]>(initialEvents);
  const [query, setQuery] = useState("");
  const [showPast, setShowPast] = useState(false);
  // "now" is only known on the client; until then everything counts as upcoming (matches the server).
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setNow(Date.now()), 0);

    const channel = supabase
      .channel("events-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "events" }, () => {
        supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true })
          .then(({ data }) => setEvents((data as EventRow[] | null) ?? []));
      })
      .subscribe();

    return () => {
      window.clearTimeout(t);
      supabase.removeChannel(channel);
    };
  }, []);

  const { upcoming, past } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const up: { ev: EventRow; at: Date }[] = [];
    const old: { ev: EventRow; at: Date }[] = [];
    for (const ev of events) {
      const at = startOf(ev);
      if (!at) continue;
      if (q && ![ev.title, ev.location, ev.short_desc].some((f) => f?.toLowerCase().includes(q))) continue;
      if (now === null || at.getTime() >= now) up.push({ ev, at });
      else if (ev.is_phantomire) old.push({ ev, at });
    }
    old.sort((a, b) => b.at.getTime() - a.at.getTime());
    return { upcoming: groupByMonth(up), past: groupByMonth(old) };
  }, [events, query, now]);

  const pastCount = past.reduce((n, [, list]) => n + list.length, 0);

  return (
    <section className={`${s.section} ${s.tint} ${s.arc} ${s.fromLight}`} aria-labelledby="calendar-title">
      <div className={`${s.wrap} ${s.padArc}`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className={s.eyebrow}>The calendar</p>
            <h2 id="calendar-title" className={`${s.title} mt-4`}>
              More ways <span className={s.grad}>to show up.</span>
            </h2>
            <p className={`${s.lede} mt-4`}>
              Workshops, bootcamps and community gatherings, from us and the people we work with.
            </p>
          </Reveal>
          <Reveal delay={100} className="w-full lg:w-auto">
            <label className={e.search}>
              <Search size={18} aria-hidden />
              <span className="sr-only">Search events</span>
              <input
                type="search"
                placeholder="Search by name or location"
                value={query}
                onChange={(ev) => setQuery(ev.target.value)}
              />
            </label>
          </Reveal>
        </div>

        <div className="mt-12 space-y-12">
          {upcoming.length === 0 ? (
            <div className={e.empty}>
              <span className={s.cardIcon} aria-hidden>
                <CalendarDays size={22} />
              </span>
              <p className="mt-2 text-[18px] font-bold tracking-[-0.02em]">
                {query ? "No events match that search." : "The launch is our next big date."}
              </p>
              <p className="max-w-[420px] text-[14.5px] leading-relaxed text-[#5a5766]">
                {query
                  ? "Try a different name or location."
                  : "More workshops and community events will appear here as they are scheduled."}
              </p>
            </div>
          ) : (
            upcoming.map(([month, list]) => <MonthGroup key={month} month={month} list={list} />)
          )}
        </div>

        {pastCount > 0 && (
          <div className="mt-14">
            <button
              type="button"
              onClick={() => setShowPast((v) => !v)}
              className={`${s.btnGhost} ${e.evToggle} ${showPast ? e.evToggleOpen : ""} !text-[#14121c]`}
              aria-expanded={showPast}
            >
              Past Phantomire events ({pastCount}) <ChevronDown size={17} />
            </button>
            {showPast && (
              <div className="mt-10 space-y-12">
                {past.map(([month, list]) => (
                  <MonthGroup key={month} month={month} list={list} past />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function MonthGroup({ month, list, past = false }: { month: string; list: { ev: EventRow; at: Date }[]; past?: boolean }) {
  return (
    <div>
      <h3 className={e.monthLabel}>{month}</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(({ ev, at }, i) => (
          <Reveal key={ev.id} delay={(i % 3) * 90}>
            <EventCard ev={ev} at={at} past={past} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function EventCard({ ev, at, past }: { ev: EventRow; at: Date; past: boolean }) {
  const [open, setOpen] = useState(false);
  const link = regLink(ev.reg_url);
  const hasMore = Boolean(ev.description || (!ev.is_phantomire && ev.host));

  return (
    <article className={`${e.evCard} ${past ? e.evPast : ""}`}>
      <div className={e.evMedia}>
        {ev.image_url ? (
          // Event images live on external storage, so they bypass next/image.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={ev.image_url} alt="" loading="lazy" />
        ) : (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#3b1a78,#14121c_70%)] text-white/60">
            <CalendarDays size={40} aria-hidden />
          </div>
        )}
        <span className={e.evDate} aria-hidden>
          <span className={e.evDay}>{format(at, "d")}</span>
          <span className={e.evMon}>{format(at, "MMM")}</span>
        </span>
      </div>

      <div className={e.evBody}>
        <div className="flex flex-wrap gap-2">
          <span className={s.chip}>
            <Clock size={13} className="mr-1.5" aria-hidden />
            {ev.time ? format(at, "h:mm a") : "Full day"}
          </span>
          <span className={s.chip}>
            <MapPin size={13} className="mr-1.5" aria-hidden />
            {ev.location || "To be announced"}
          </span>
        </div>
        <h4 className={`${e.evTitle} mt-4`}>{ev.title}</h4>
        <p className="sr-only">{format(at, "EEEE, d MMMM yyyy")}</p>
        {ev.short_desc && <p className={e.evText}>{ev.short_desc}</p>}

        {hasMore && (
          <div className={`${e.evMore} ${open ? e.evMoreOpen : ""}`}>
            <div className={e.evMoreInner}>
              {ev.description && <p className={`${e.evText} pt-3`}>{ev.description}</p>}
              {!ev.is_phantomire && ev.host && (
                <p className="pt-3 text-[13.5px] text-[#5a5766]">
                  Hosted by <strong className="text-[#14121c]">{ev.host}</strong>
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`${e.evToggle} ${open ? e.evToggleOpen : ""}`}
              aria-expanded={open}
            >
              {open ? "Less" : "Details"} <ChevronDown size={15} />
            </button>
          ) : (
            <span />
          )}
          {!past &&
            (link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className={`${s.link} !text-[13.5px]`}>
                Register <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="text-[13px] font-medium text-[#8a8698]">Registration closed</span>
            ))}
        </div>
      </div>
    </article>
  );
}
