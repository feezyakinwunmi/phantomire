import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Handshake,
  MessageCircle,
  PenTool,
  Rocket,
  Search,
  Target,
  Users,
  Wrench,
  Code2,
} from "lucide-react";
import PageHero, { Grad } from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import FinalCta from "../components/home/FinalCta";
import ServiceGrid from "../components/services/ServiceGrid";
import LaunchFaq, { type Faq } from "../components/event/LaunchFaq";
import { START_PROJECT } from "../lib/site";
import s from "../components/site/ui.module.css";
import v from "../components/services/services.module.css";

export const metadata: Metadata = {
  title: "Services | Software, AI, Product, Brand, Security & Data | Phantomire Technologies",
  description:
    "Phantomire builds software, AI solutions and digital products, and provides brand, cybersecurity and data analytics services for businesses, organizations and people across Nigeria and beyond.",
};

const TOOLS = ["React", "Next.js", "Node.js", "Python", "Flutter", "TypeScript", "Supabase", "PostgreSQL", "AWS", "Figma", "After Effects", "Power BI", "LLMs", "Docker"];

const MODELS = [
  {
    icon: Target,
    name: "Project build",
    text: "A clear scope, timeline and price. We design, build and launch, then hand over or stay on for support.",
    points: ["Fixed scope and milestones", "Weekly progress updates", "Launch and handover included"],
    best: "Websites, apps and MVPs with a defined goal.",
  },
  {
    icon: Users,
    name: "Dedicated team",
    tag: "Most flexible",
    text: "Designers and engineers who work as an extension of your team, month to month, on whatever matters most.",
    points: ["A team shaped around your needs", "Scale up or down monthly", "Works inside your tools and rituals"],
    best: "Growing businesses with an ongoing roadmap.",
  },
  {
    icon: Handshake,
    name: "Product partner",
    text: "We co-build with you long-term, from shaping the idea to scaling it, sharing the thinking as well as the work.",
    points: ["Strategy, design and engineering", "Product and growth advice", "Long-term technical partner"],
    best: "Founders turning an idea into a company.",
  },
];

const FLOW = [
  { icon: Search, name: "Discover", text: "We learn the problem, the people who have it and what success looks like.", time: "Week 1" },
  { icon: PenTool, name: "Design", text: "We turn the idea into a clear experience and test it with real users.", time: "Weeks 2–3" },
  { icon: Code2, name: "Build", text: "We develop in short cycles, so you see working software early and often.", time: "Ongoing" },
  { icon: Rocket, name: "Launch & grow", text: "We ship, measure what happens and keep improving with you.", time: "Launch +" },
];

const FAQS: Faq[] = [
  {
    q: "How quickly can you start?",
    a: "Usually within one to two weeks of agreeing on the scope, depending on the size of the project.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. We love working with founders and small teams, and we shape the engagement around your budget and stage.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on what you need. Tell us about the problem and we will recommend an approach and send a clear quote, with no obligation.",
  },
  {
    q: "What technologies do you use?",
    a: "Modern, proven tools: React, Next.js, Node.js, Python, Flutter and cloud platforms, chosen for what your project actually needs.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer maintenance and support so your product keeps running smoothly and keeps improving.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <PageHero
        crumb="Services"
        eyebrow="What we build"
        title={
          <>
            Engineering, design and AI, <Grad>under one roof.</Grad>
          </>
        }
        lede="We turn problems into working technology for businesses, organizations and people. A technology partner, not just a vendor, from the first conversation to long after launch."
        actions={
          <>
            <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={s.btn}>
              <MessageCircle size={17} /> Start a project
            </a>
            <a href="#software" className={s.btnGhost}>
              Explore services
            </a>
          </>
        }
        image={{ src: "/pages/services-hero.webp", alt: "A team gathered around a laptop, smiling as they review work together" }}
        badge={{ icon: Wrench, title: "6 core services", text: "One team, end to end" }}
      />

      {/* ---------- Tools marquee ---------- */}
      <section className={`${s.section} ${s.light}`} aria-label="Tools we build with">
        <div className={`${s.wrap} pb-6`}>
          <div className={v.marquee}>
            <div className={v.track}>
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <span key={i} className={v.tool} aria-hidden={i >= TOOLS.length}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className={`${s.section} ${s.light}`} aria-labelledby="services-list-title">
        <div className={`${s.wrap} pt-14 pb-20 lg:pt-16 lg:pb-28`}>
          <ServiceGrid />
        </div>
      </section>

      {/* ---------- Ways to work together ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="models-title">
        <div className={`${s.dots} ${s.lgOnly}`} style={{ right: "-2%", bottom: "8%", width: 300, height: 240 }} aria-hidden />
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <Reveal className={s.over}>
              <p className={s.eyebrow}>Ways to work together</p>
              <h2 id="models-title" className={`${s.title} mt-4`}>
                Pick the shape <span className={s.grad}>that fits you.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Every project is different, so is every partnership. Start with one and change as
                you grow.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {MODELS.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className={`${v.model} ${m.tag ? v.modelFeatured : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className={v.modelIcon} aria-hidden>
                      <m.icon size={22} />
                    </span>
                    {m.tag && <span className={v.modelTag}>{m.tag}</span>}
                  </div>
                  <h3 className={v.modelName}>{m.name}</h3>
                  <p className={v.modelText}>{m.text}</p>
                  <ul className={v.modelList}>
                    {m.points.map((p) => (
                      <li key={p}>
                        <Check size={15} strokeWidth={3} aria-hidden /> {p}
                      </li>
                    ))}
                  </ul>
                  <p className={v.modelBest}>
                    <b>Best for:</b> {m.best}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className={`${s.section} ${s.tint} ${s.arc} ${s.fromDark}`} aria-labelledby="flow-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <Reveal className="max-w-[640px]">
            <p className={s.eyebrow}>How we work</p>
            <h2 id="flow-title" className={`${s.title} mt-4`}>
              From a problem <span className={s.grad}>to a working solution.</span>
            </h2>
            <p className={`${s.lede} mt-5`}>
              A simple, transparent process. You always know what we are working on and what comes
              next.
            </p>
          </Reveal>

          <div className={`${v.flow} mt-10`}>
            {FLOW.map((f, i) => (
              <Reveal key={f.name} delay={i * 90}>
                <div className={v.flowStep}>
                  <div className={v.flowTop}>
                    <span className={v.flowNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={v.flowIcon} aria-hidden>
                      <f.icon size={20} />
                    </span>
                  </div>
                  <h3 className={v.flowName}>{f.name}</h3>
                  <p className={v.flowText}>{f.text}</p>
                  <p className={v.flowTime}>{f.time}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromTint}`} aria-labelledby="svc-faq-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal>
              <p className={s.eyebrow}>Good to know</p>
              <h2 id="svc-faq-title" className={`${s.title} mt-4`}>
                Questions, <span className={s.grad}>answered.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                Anything else? Message us on WhatsApp and a real person will reply.
              </p>
              <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={`${s.link} mt-6`}>
                Ask us on WhatsApp <ArrowRight size={16} />
              </a>
            </Reveal>
            <Reveal delay={100}>
              <LaunchFaq items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
