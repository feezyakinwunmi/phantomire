"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Layers3, Palette } from "lucide-react";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";

const SERVICES = [
  {
    n: "01",
    icon: Code2,
    title: "Software development",
    text: "Web and mobile products engineered to solve real business problems and grow with you.",
    tags: ["Web apps", "Mobile apps", "SaaS"],
    image: "/home/service-software.webp",
    alt: "An engineer checking a laptop between rows of servers",
    position: "62% 40%",
  },
  {
    n: "02",
    icon: BrainCircuit,
    title: "AI & intelligent solutions",
    text: "Automation, assistants and smart features that take the busywork out of your day.",
    tags: ["AI products", "Automation", "Insights"],
    image: "/home/service-ai.webp",
    alt: "The letters AI rendered in glass above a field of connected points",
    position: "50% 50%",
  },
  {
    n: "03",
    icon: Layers3,
    title: "Digital product development",
    text: "From first idea to launch: strategy, user experience and engineering under one roof.",
    tags: ["Strategy", "UX / UI", "Launch"],
    image: "/home/service-product.webp",
    alt: "A designer sketching app wireframes on a tablet",
    position: "55% 50%",
  },
  {
    n: "04",
    icon: Palette,
    title: "Creative & brand",
    text: "Identity, interfaces and content that help people understand you and trust you.",
    tags: ["Branding", "Interfaces", "Content"],
    image: "/home/service-creative.webp",
    alt: "Colour swatches beside interface designs on a tablet",
    position: "50% 42%",
  },
];

const STEPS = [
  ["01", "Discover", "We get to know the problem, the people who have it and what success looks like."],
  ["02", "Design", "We turn the idea into a clear experience, tested with the people it is for."],
  ["03", "Build", "Our engineers develop, test and refine until it works in the real world."],
  ["04", "Launch", "We ship, measure what happens and keep improving with you."],
];

const AUTO_MS = 5000;

export default function Services() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [auto, setAuto] = useState(true); // cycles by itself until the visitor picks one
  const [visible, setVisible] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const select = (i: number) => {
    setAuto(false);
    if (i === active) return;
    setPrev(active);
    setActive(i);
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => {
      setPrev(active);
      setActive((active + 1) % SERVICES.length);
    }, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [auto, visible, active]);

  const current = SERVICES[active];
  const CurrentIcon = current.icon;

  return (
    <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="services-title">
      <div className={`${s.wrap} ${s.padArc}`}>
        <div className={s.svcGrid}>
          {/* ---------- Heading ---------- */}
          <div className={`${s.over} ${s.svcHead}`}>
            <Reveal>
              <p className={s.eyebrow}>What we build</p>
              <h2 id="services-title" className={`${s.title} mt-4`}>
                Four ways we turn problems into <span className={s.grad}>working technology.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                Engineering, design and AI under one roof. A technology partner, not just a
                vendor.
              </p>
            </Reveal>
          </div>

          {/* ---------- Capability list ---------- */}
          <div className={`${s.over} ${s.svcListCell}`}>
            <Reveal delay={120}>
              <div role="tablist" aria-label="What we build" aria-orientation="vertical">
                {SERVICES.map((sv, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={sv.n}
                      type="button"
                      role="tab"
                      id={`service-tab-${i}`}
                      aria-selected={on}
                      aria-controls="service-panel"
                      className={`${s.svcRow} ${on ? s.svcRowOn : ""}`}
                      onMouseEnter={() => select(i)}
                      onFocus={() => select(i)}
                      onClick={() => select(i)}
                    >
                      <span className={s.svcNum}>{sv.n}</span>
                      <span className={s.svcName}>{sv.title}</span>
                      <ArrowRight size={20} className={s.svcIcon} aria-hidden />
                      <span className={s.svcText}>
                        <span className={s.svcTextInner}>
                          <span className={s.svcDesc}>{sv.text}</span>
                        </span>
                      </span>
                      {on && auto && visible && (
                        <span className={s.svcProgress} aria-hidden>
                          <i style={{ "--dur": `${AUTO_MS}ms` } as CSSProperties} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <Link href="/services" className={`${s.link} mt-8`}>
                Explore our capabilities <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>

          {/* ---------- Image stage ---------- */}
          <Reveal from="right" className={s.svcStageCell}>
            <div
              ref={stageRef}
              className={s.svcStage}
              id="service-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${active}`}
            >
              <div className={s.svcFrame}>
                {SERVICES.map((sv, i) => (
                  <div
                    key={sv.n}
                    aria-hidden={i !== active}
                    className={`${s.svcSlide} ${i === active ? s.svcSlideOn : i === prev ? s.svcSlidePrev : ""}`}
                  >
                    <Image
                      src={sv.image}
                      alt={i === active ? sv.alt : ""}
                      fill
                      sizes="(min-width: 1024px) 520px, 100vw"
                      style={{ objectPosition: sv.position }}
                    />
                  </div>
                ))}
                <div className={s.svcShade} aria-hidden />
                <div key={active} className={s.svcCap}>
                  <span className={s.svcCapIcon} aria-hidden>
                    <CurrentIcon size={20} />
                  </span>
                  {current.tags.map((t) => (
                    <span key={t} className={s.chipDark}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- How we work ---------- */}
        <div className={`${s.over} mt-16 lg:mt-20`}>
          <Reveal>
            <p className={s.eyebrow}>How we work</p>
            <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.02em] lg:text-[26px]">
              From a problem to a working solution.
            </h3>
          </Reveal>
          <div className={`${s.steps} mt-8`}>
            {STEPS.map(([n, title, text], i) => (
              <Reveal key={n} delay={i * 90}>
                <div className={s.step}>
                  <p className={s.stepNum}>{n}</p>
                  <h4 className="mt-5 text-[18px] font-semibold">{title}</h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
