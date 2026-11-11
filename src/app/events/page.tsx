import { Fragment, type CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  CalendarPlus,
  Check,
  ChevronRight,
  Clock,
  Code2,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import {
  LAUNCH,
  launchDateLong,
  launchGoogleCalendar,
  launchPlace,
  launchRegisterHref,
  launchTime,
} from "../lib/launch";
import LaunchTicket from "../components/event/LaunchTicket";
import LaunchFaq, { type Faq } from "../components/event/LaunchFaq";
import Reveal from "../components/site/Reveal";
import EventsClient from "./eventClient";
import s from "../components/site/ui.module.css";
import e from "../components/event/event.module.css";

export const metadata: Metadata = {
  title: `${LAUNCH.name} · 11 December 2026 | Phantomire Technologies`,
  description: `${LAUNCH.kind} by Phantomire Technologies on ${launchDateLong()} in ${LAUNCH.city}. ${LAUNCH.tagline}`,
  openGraph: {
    title: `${LAUNCH.name} | Phantomire Technologies`,
    description: `${LAUNCH.kind} · ${launchDateLong()} · ${LAUNCH.city}`,
    url: "https://phantomiretechnologies.com/events",
    siteName: "Phantomire Technologies",
    images: [{ url: "/pages/events-hero.webp", width: 1200, height: 800 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${LAUNCH.name} | Phantomire`,
    description: `${LAUNCH.kind} · ${launchDateLong()}`,
    images: ["/pages/events-hero.webp"],
  },
};

export const revalidate = 60;

const MOMENTS = [
  {
    num: "01",
    tag: "Product launch",
    icon: Rocket,
    title: "See what we have been building.",
    text: "We take the wraps off our newest technology, live on stage, with the team that built it in the room.",
    points: ["The first public look, before anyone else", "Live demos you can try for yourself", "Early access for people in the room"],
    image: { src: "/home/service-product.webp", alt: "A designer sketching app screens on a tablet", position: "50% 50%" },
  },
  {
    num: "02",
    tag: "Tech gathering",
    icon: Handshake,
    title: "Meet the people building what comes next.",
    text: "Founders, developers, designers, students and partners in one room, talking about technology that leaves people better off.",
    points: ["Panel conversations on tech, used right", "Open networking with builders and founders", "A showcase of work from our community"],
    image: { src: "/pages/events-hero.webp", alt: "An audience watching a talk in a dark auditorium", position: "50% 70%" },
  },
];

const PROGRAMME = [
  { phase: "Doors open", title: "Arrival & networking", text: "Check in, settle in and meet the people around you." },
  { phase: "Opening", title: "Welcome keynote", text: "Why we build technology that leaves people better off." },
  { phase: "The moment", title: "The launch", text: "The reveal, live on stage: a first look at what is new from Phantomire.", highlight: true },
  { phase: "Hands on", title: "Live demos", text: "Try it yourself, with the people who built it beside you." },
  { phase: "Conversation", title: "Panel: Tech, used right", text: "Founders, builders and educators on technology, wellbeing and trust." },
  { phase: "Close", title: "Builders’ hangout", text: "Community showcase and open networking to end the day." },
];

const WHO = [
  { icon: Briefcase, label: "Founders & business owners" },
  { icon: Code2, label: "Developers & engineers" },
  { icon: Palette, label: "Designers & creatives" },
  { icon: GraduationCap, label: "Students & career switchers" },
  { icon: Handshake, label: "Partners & investors" },
  { icon: Mic2, label: "Media & community leaders" },
];

const FAQS: Faq[] = [
  {
    q: "What is being launched?",
    a: "We are keeping it under wraps until the day. Expect new technology from Phantomire, and the chance to be among the first to try it.",
  },
  {
    q: "Is it free to attend?",
    a: "Ticket details will be announced soon. Reserve your spot now and you will be the first to hear.",
  },
  {
    q: "Where is it happening?",
    a: `In ${LAUNCH.city}. We will share the exact venue with everyone who has reserved a spot.`,
  },
  {
    q: "Can my company partner, sponsor or exhibit?",
    a: "Yes. We welcome sponsors, exhibitors and community partners. Get in touch and we will share the partnership options.",
  },
  {
    q: "Can I bring a friend?",
    a: "Of course. Ask them to reserve their own spot so we can plan seating and refreshments for everyone.",
  },
];

export default async function EventsPage() {
  const { data: events, error } = await supabase.from("events").select("*").order("date", { ascending: true });
  if (error) console.error("Events fetch error:", error);

  const register = launchRegisterHref();
  const words = LAUNCH.name.split(" ");

  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      {/* ---------- Launch hero ---------- */}
      <section id="launch" className={`${s.section} ${s.dark} ${e.stage} scroll-mt-20`} aria-labelledby="launch-title">
        <div className={e.stagePhoto} aria-hidden>
          <Image src="/pages/events-hero.webp" alt="" fill priority sizes="100vw" />
        </div>
        <span className={e.bigDate} aria-hidden>
          11.12
        </span>
        <div className={`${s.dots} ${s.lgOnly}`} style={{ right: "4%", top: "8%", width: 280, height: 220 }} aria-hidden />

        <div className={`${s.wrap} pt-10 pb-24 lg:pt-14 lg:pb-32`}>
          <div className={e.stageGrid}>
            <div className={s.over}>
              <nav aria-label="Breadcrumb" className={`${e.stageCrumbs} ${e.stageIn}`}>
                <Link href="/">Home</Link>
                <ChevronRight size={14} aria-hidden />
                <span aria-current="page" className="font-medium text-white">
                  Events
                </span>
              </nav>

              <p className={`${s.eyebrow} ${e.stageIn} mt-8`} style={{ "--d": "80ms" } as CSSProperties}>
                Save the date · {LAUNCH.kind}
              </p>

              <h1 id="launch-title" className={`${e.stageTitle} mt-5`}>
                {words.map((w, i) => (
                  <Fragment key={i}>
                    <span className={e.word} style={{ "--i": i } as CSSProperties}>
                      <span className={i >= words.length - 2 ? s.grad : undefined}>{w}</span>
                    </span>
                    {i < words.length - 1 && " "}
                  </Fragment>
                ))}
              </h1>

              <p className={`${s.lede} ${e.stageIn} mt-6`} style={{ "--d": "500ms" } as CSSProperties}>
                {LAUNCH.tagline}
              </p>

              <div className={`${e.metaRow} ${e.stageIn} mt-7`} style={{ "--d": "600ms" } as CSSProperties}>
                <span className={e.meta}>
                  <CalendarDays size={16} aria-hidden /> {launchDateLong()}
                </span>
                <span className={e.meta}>
                  <Clock size={16} aria-hidden />
                  <span className={LAUNCH.timeConfirmed ? undefined : e.metaMuted}>{launchTime()}</span>
                </span>
                <span className={e.meta}>
                  <MapPin size={16} aria-hidden />
                  <span className={LAUNCH.venueConfirmed ? undefined : e.metaMuted}>{launchPlace()}</span>
                </span>
              </div>

              <div className={`${e.stageIn} mt-9 flex flex-col gap-3 sm:flex-row sm:items-center`} style={{ "--d": "700ms" } as CSSProperties}>
                <a href={register} target="_blank" rel="noopener noreferrer" className={s.btn}>
                  Reserve your spot <ArrowRight size={17} />
                </a>
                <a href={launchGoogleCalendar()} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                  <CalendarPlus size={17} /> Add to calendar
                </a>
              </div>
              <p className={`${e.stageIn} mt-4`} style={{ "--d": "760ms" } as CSSProperties}>
                <a href="/events/launch.ics" className={e.icsLink}>
                  Using Apple Calendar or Outlook? Download the .ics file
                </a>
              </p>
            </div>

            <LaunchTicket />
          </div>
        </div>
      </section>

      {/* ---------- Two moments ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="moments-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <Reveal>
              <p className={s.eyebrow}>What&rsquo;s happening</p>
              <h2 id="moments-title" className={`${s.title} mt-4`}>
                Two moments. <span className={s.grad}>One day.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Part launch, part homecoming. We unveil what is new, then open the floor to the
                community that makes this work worth doing.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.num} delay={i * 120}>
                <article className={e.moment}>
                  <div className={e.momentMedia}>
                    <Image
                      src={m.image.src}
                      alt={m.image.alt}
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      style={{ objectPosition: m.image.position }}
                    />
                    <span className={e.momentNum} aria-hidden>
                      {m.num}
                    </span>
                    <span className={e.momentTag}>
                      <m.icon size={14} aria-hidden /> {m.tag}
                    </span>
                  </div>
                  <div className={e.momentBody}>
                    <h3 className={e.momentTitle}>{m.title}</h3>
                    <p className={e.momentText}>{m.text}</p>
                    <ul className={e.momentList}>
                      {m.points.map((p) => (
                        <li key={p}>
                          <span className={e.tick} aria-hidden>
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Programme + who it's for ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="programme-title">
        <div className={`${s.dots} ${s.lgOnly}`} style={{ left: "-4%", bottom: "6%", width: 320, height: 260 }} aria-hidden />
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div className={`${s.over} lg:sticky lg:top-28 lg:self-start`}>
              <Reveal>
                <p className={s.eyebrow}>How the day runs</p>
                <h2 id="programme-title" className={`${s.title} mt-4`}>
                  A full day, <span className={s.grad}>well spent.</span>
                </h2>
                <p className={`${s.lede} mt-5`}>
                  The full programme and speakers will be announced closer to the day. Here is the
                  shape of it.
                </p>
              </Reveal>

              <Reveal delay={120} className="mt-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">Who should come</p>
                <ul className={`${e.who} mt-4`}>
                  {WHO.map((w) => (
                    <li key={w.label} className={e.whoChip}>
                      <w.icon size={15} aria-hidden /> {w.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className={e.agenda} role="list">
              {PROGRAMME.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div role="listitem" className={`${e.slot} ${p.highlight ? e.slotHighlight : ""}`}>
                    <span className={e.slotDot} aria-hidden>
                      {p.highlight ? <Sparkles size={16} /> : String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={e.slotCard}>
                      <p className={e.slotPhase}>{p.phase}</p>
                      <h3 className={e.slotTitle}>{p.title}</h3>
                      <p className={e.slotText}>{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="faq-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal>
              <p className={s.eyebrow}>Good to know</p>
              <h2 id="faq-title" className={`${s.title} mt-4`}>
                Questions, <span className={s.grad}>answered.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                More details are on the way. If your question isn&rsquo;t here, ask us directly.
              </p>

              <div className={`${e.helpCard} mt-8`}>
                <p className="text-[18px] font-bold tracking-[-0.02em]">Talk to the team</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">
                  Partnerships, press, or anything else about launch day.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/${LAUNCH.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${s.chipDark} gap-2 !px-3.5 !py-2 !text-[13px] font-semibold`}
                  >
                    <MessageCircle size={15} aria-hidden /> WhatsApp
                  </a>
                  <a href="mailto:info@phantomire@gmail.com" className={`${s.chipDark} gap-2 !px-3.5 !py-2 !text-[13px] font-semibold`}>
                    <Mail size={15} aria-hidden /> info@phantomire@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <LaunchFaq items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Other events ---------- */}
      <EventsClient initialEvents={events ?? []} />

      {/* ---------- Partner CTA ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromTint}`} aria-labelledby="partner-title">
        <div className={s.ctaGlow} aria-hidden />
        <div className={`${s.wrap} ${s.padArc} text-center`}>
          <div className="mx-auto max-w-[720px]">
            <Reveal>
              <p className={`${s.eyebrow} justify-center`}>Partner with us</p>
              <h2 id="partner-title" className={`${s.title} mt-5`}>
                Put your brand in the room <span className={s.grad}>where it starts.</span>
              </h2>
              <p className={`${s.lede} mx-auto mt-5`}>
                Sponsor the launch, exhibit your product, or host a Phantomire event in your
                community. We would love to build it with you.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className={s.btn}>
                Become a partner <ArrowRight size={17} />
              </Link>
              <a href={register} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                Reserve your spot
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
