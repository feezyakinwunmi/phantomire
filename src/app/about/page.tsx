import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  Plus,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import PageHero, { Grad } from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import CountUp from "../components/site/CountUp";
import FinalCta from "../components/home/FinalCta";
import s from "../components/site/ui.module.css";

export const metadata: Metadata = {
  title: "About Phantomire Technologies | Technology with a conscience",
  description:
    "Phantomire Technologies builds software, AI and digital products for businesses, organizations and people, and trains Nigeria's next generation of builders, with empathy and integrity at the core.",
};

const VALUES = [
  { icon: Heart, title: "Empathy first", text: "Technology that understands the people who use it." },
  { icon: ShieldCheck, title: "Integrity always", text: "Trust built into every line of code." },
  { icon: Lightbulb, title: "Purposeful innovation", text: "Solving real problems, creatively." },
  { icon: Users, title: "Inclusive by design", text: "Opportunity without barriers." },
  { icon: HeartHandshake, title: "Community impact", text: "Lifting others as we rise." },
];

const STATS = [
  { value: 200, suffix: "+", label: "Learners trained" },
  { value: 7, suffix: "", label: "Solutions built" },
  { value: 15, suffix: "+", label: "Partner schools" },
  { value: 20, suffix: "+", label: "Community partners" },
];

const TEAM = [
  {
    name: "Akinwunmi Femi",
    role: "Founder & CEO",
    bio: "Builds technology that solves Nigerian problems. 7+ years in software development and tech education.",
    image: "/founder.jpeg",
    position: "50% 0%",
  },
  {
    name: "Stephen Bolaji",
    role: "Co-founder & Brand Strategist",
    bio: "Helps businesses define their identity and communicate their value through creative thinking, market insight and strategic storytelling.",
    image: "/stephen.jpeg",
    position: "50% 30%",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <PageHero
        crumb="About"
        eyebrow="About Phantomire"
        title={
          <>
            Technology with a conscience, <Grad>built in Nigeria.</Grad>
          </>
        }
        lede="We build software, AI and digital products for businesses, organizations and people, and we train the next generation of builders. Everything we make starts with one question: will this leave people better off?"
        actions={
          <>
            <Link href="/contact" className={s.btn}>
              Work with us <ArrowRight size={17} />
            </Link>
            <Link href="/solutions" className={s.btnGhost}>
              See our solutions
            </Link>
          </>
        }
        image={{ src: "/pages/about-hero.webp", alt: "Three colleagues laughing together while working on their laptops" }}
        badge={{ icon: Heart, title: "Tech, used right", text: "People before screens" }}
      />

      {/* ---------- Story ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="story-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className={s.split}>
            <Reveal className={s.over}>
              <p className={s.eyebrow}>Our story</p>
              <h2 id="story-title" className={`${s.title} mt-4`}>
                Technology should heal, <span className={s.grad}>not harm.</span>
              </h2>
              <div className={`${s.lede} mt-5 space-y-4`}>
                <p>
                  Nigeria&rsquo;s digital economy is full of potential, but it is also held back by
                  scams, burnout and unequal access. We started Phantomire to build a different kind
                  of technology company.
                </p>
                <p>
                  We design products that earn people&rsquo;s trust, from Pearlvix, our escrow
                  platform that protects online buyers and sellers, to tools for schools, businesses
                  and creators.
                </p>
                <p>
                  Through Phantomire Academy, we train young people to build with the same values:
                  real skills, empathy and integrity.
                </p>
              </div>
            </Reveal>

            <Reveal from="right">
              <div className={s.splitArt}>
                <div className={s.splitFrame}>
                  <Image
                    src="/pstudents.jpeg"
                    alt="Phantomire Academy students in their Phantomire t-shirts, smiling together in class"
                    fill
                    sizes="(min-width: 1024px) 520px, 92vw"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className={s.floatCard}>
                  <span className={s.floatIcon} aria-hidden>
                    <GraduationCap size={20} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold leading-tight">Phantomire Academy</span>
                    <span className="mt-0.5 block text-[12.5px] text-[#5a5766]">200+ learners trained</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Vision, mission, values ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="values-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <Reveal className="max-w-[640px]">
            <p className={s.eyebrow}>What drives us</p>
            <h2 id="values-title" className={`${s.title} mt-4`}>
              A clear purpose, <span className={s.grad}>shared values.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className={s.card}>
                <span className={s.cardIcon} aria-hidden>
                  <Compass size={22} />
                </span>
                <h3 className={s.cardTitle}>Our vision</h3>
                <p className={s.cardText}>
                  A Nigeria where everyone uses technology with empathy, integrity and imagination,
                  building solutions that heal communities and compete on the global stage.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={s.card}>
                <span className={s.cardIcon} aria-hidden>
                  <Target size={22} />
                </span>
                <h3 className={s.cardTitle}>Our mission</h3>
                <p className={s.cardText}>
                  To build trustworthy technology for businesses, organizations and people, and to
                  train the next generation to do the same, combining real skills with emotional
                  intelligence and ethics.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className={s.card}>
                  <span className={s.cardIcon} aria-hidden>
                    <v.icon size={21} />
                  </span>
                  <h3 className={s.cardTitle}>{v.title}</h3>
                  <p className={s.cardText}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Impact ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="impact-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <Reveal>
              <p className={s.eyebrow}>Our impact</p>
              <h2 id="impact-title" className={`${s.title} mt-4`}>
                Real change, <span className={s.grad}>one solution at a time.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Our alumni freelance for global clients and launch their own startups. Our partners
                reach more people with less effort. And our products protect everyday Nigerians
                online.
              </p>
            </Reveal>
          </div>

          <div className={`${s.stats} mt-12`}>
            {STATS.map((st, i) => (
              <Reveal key={st.label} delay={i * 80} className={s.stat}>
                <p className={`${s.statNum} ${s.grad}`}>
                  <CountUp value={st.value} suffix={st.suffix} />
                </p>
                <p className={s.statLabel}>{st.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="team-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <Reveal className="max-w-[640px]">
            <p className={s.eyebrow}>Meet the team</p>
            <h2 id="team-title" className={`${s.title} mt-4`}>
              The people behind <span className={s.grad}>Phantomire.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid max-w-[1040px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <article className={s.person}>
                  <div className={s.personPhoto}>
                    <Image
                      src={m.image}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 92vw"
                      style={{ objectPosition: m.position }}
                    />
                  </div>
                  <div className={s.personBody}>
                    <p className={s.personRole}>{m.role}</p>
                    <h3 className={s.personName}>{m.name}</h3>
                    <p className={s.personBio}>{m.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <Link href="/contact" className={s.solCta}>
                <span className={s.solCtaIcon} aria-hidden>
                  <Plus size={22} />
                </span>
                <span>
                  <span className="block text-[20px] font-bold leading-tight tracking-[-0.02em]">
                    We&rsquo;re growing.
                  </span>
                  <span className="mt-2 block text-[14px] leading-relaxed text-white/70">
                    Developers, designers and educators who care about people: we would love to hear
                    from you.
                  </span>
                </span>
                <span className={s.solCtaGo}>
                  Get in touch <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
