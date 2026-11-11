"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";

const VOICES = [
  {
    name: "Chisom Okeke",
    role: "Frontend student",
    text: "Phantomire didn't just teach me code, they taught me how to use tech responsibly. The emotional intelligence classes changed how I approach projects.",
  },
  {
    name: "Tunde Adebayo",
    role: "Alumnus & freelancer",
    text: "Thanks to Phantomire, I'm now earning on Upwork. Pearlvix inspired me to build trust-focused apps for Nigerian clients.",
  },
  {
    name: "Alpha & Omega College",
    role: "School administrator",
    text: "Partnering with Phantomire brought digital skills to our students. The ethics focus aligns perfectly with our values.",
  },
  {
    name: "Aisha Mohammed",
    role: "UI/UX student",
    text: "The community support and mentorship at Phantomire gave me confidence. I'm now designing for local startups!",
  },
];

const ROTATE_MS = 7000;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

export default function Voices() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [touched, setTouched] = useState(false); // stop auto-rotating once the visitor takes over
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (touched || hovering || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIndex((index + 1) % VOICES.length), ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [index, hovering, visible, touched]);

  const go = (step: number) => {
    setTouched(true);
    setIndex((index + step + VOICES.length) % VOICES.length);
  };

  const voice = VOICES[index];

  return (
    <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="voices-title">
      <div className={`${s.wrap} ${s.padArc}`}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className={s.eyebrow}>Voices</p>
            <h2 id="voices-title" className={`${s.title} mt-4`}>
              Built with people. <span className={s.grad}>Trusted by people.</span>
            </h2>
            <p className={`${s.lede} mt-5`}>
              What students, alumni and partner schools say about working with us.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button type="button" className={s.navBtn} onClick={() => go(-1)} aria-label="Previous testimonial">
                <ArrowLeft size={20} />
              </button>
              <button type="button" className={s.navBtn} onClick={() => go(1)} aria-label="Next testimonial">
                <ArrowRight size={20} />
              </button>
              <div className="ml-2 flex items-center gap-2" aria-hidden>
                {VOICES.map((v, i) => (
                  <span key={v.name} className={`${s.pip} ${i === index ? s.pipOn : ""}`} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal from="right">
            <div
              ref={cardRef}
              className={s.quoteCard}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              aria-roledescription="carousel"
              aria-label="Testimonials"
            >
              <p className={s.quoteMark} aria-hidden>
                &ldquo;
              </p>
              <div key={index} className={s.quoteSlide} aria-live={touched ? "polite" : "off"}>
                <blockquote className={`${s.quoteText} min-h-[140px] lg:min-h-[120px]`}>{voice.text}</blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <span className={s.avatar} aria-hidden>
                    {initials(voice.name)}
                  </span>
                  <div>
                    <p className="text-[16px] font-bold">{voice.name}</p>
                    <p className="text-[14px] text-white/60">{voice.role}</p>
                  </div>
                  <p className="ml-auto text-[13px] tabular-nums text-white/45" aria-hidden>
                    {String(index + 1).padStart(2, "0")} / {String(VOICES.length).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
