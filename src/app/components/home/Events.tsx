import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";

export type HomeEvent = {
  id: string | number;
  title: string;
  date?: string | null;
  location?: string | null;
  short_desc?: string | null;
  image_url?: string | null;
};

const formatDate = (value?: string | null) => {
  if (!value) return "Date to be announced";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
};

/** Upcoming events from Supabase. Renders nothing when there are none. */
export default function Events({ events }: { events: HomeEvent[] }) {
  if (!events.length) return null;

  return (
    <section className={`${s.section} ${s.light}`} aria-labelledby="events-title">
      <div className={`${s.wrap} pb-20 lg:pb-28`}>
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-black/10 pt-16 lg:pt-20">
          <Reveal>
            <p className={s.eyebrow}>What&rsquo;s happening</p>
            <h2 id="events-title" className={`${s.title} mt-4`}>
              Ideas <span className={s.grad}>in motion.</span>
            </h2>
          </Reveal>
          <Link href="/events" className={s.link}>
            View all events <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={i * 110}>
              <Link href="/events" className={s.event}>
                <div className={s.eventMedia}>
                  {event.image_url ? (
                    // Event images live on external storage, so they bypass next/image.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={event.image_url} alt="" loading="lazy" />
                  ) : (
                    <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#3b1a78,#14121c_70%)] text-white/70">
                      <CalendarDays size={44} aria-hidden />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className={s.chip}>
                      <CalendarDays size={14} className="mr-1.5" aria-hidden />
                      {formatDate(event.date)}
                    </span>
                    <span className={s.chip}>
                      <MapPin size={14} className="mr-1.5" aria-hidden />
                      {event.location || "Nigeria"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[22px] font-bold leading-tight tracking-[-0.02em]">{event.title}</h3>
                  {event.short_desc && (
                    <p className="mt-2 text-[15px] leading-relaxed text-[#5a5766]">{event.short_desc}</p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
