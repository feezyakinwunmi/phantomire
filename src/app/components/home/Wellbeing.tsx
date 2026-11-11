import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, HeartHandshake, HeartPulse, Leaf } from "lucide-react";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";

const PRINCIPLES = [
  {
    icon: Brain,
    title: "Good for the mind",
    text: "Clear, calm interfaces designed for focus, not for endless scrolling.",
  },
  {
    icon: HeartHandshake,
    title: "Kind to emotions",
    text: "No dark patterns and no manufactured pressure. Technology people can trust.",
  },
  {
    icon: Leaf,
    title: "Better for health",
    text: "From food to finance, we build tools that support healthier everyday choices.",
  },
];

export default function Wellbeing() {
  return (
    <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="wellbeing-title">
      <div className={`${s.wrap} ${s.padArc}`}>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ---------- Artwork ---------- */}
          <Reveal from="left">
            <div className={s.wellArt}>
              <div className={s.wellFrame}>
                <Image
                  src="/home/wellbeing.webp"
                  alt="A woman with her eyes closed and a calm expression, city lights glowing behind her"
                  fill
                  sizes="(min-width: 1024px) 360px, 92vw"
                  style={{ objectPosition: "70% 22%" }}
                />
              </div>

              <div className={s.wellCard}>
                <span className={s.wellCardIcon} aria-hidden>
                  <HeartPulse size={21} />
                </span>
                <span>
                  <span className="block text-[14px] font-bold leading-tight text-[#14121c]">
                    Tech, used right
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-[#5a5766]">
                    Built around people, not screens
                  </span>
                </span>
              </div>

              <div className={s.wellPill}>
                <i aria-hidden />
                Mind · Emotions · Health
              </div>
            </div>
          </Reveal>

          {/* ---------- Message ---------- */}
          <div className={s.over}>
            <Reveal>
              <p className={s.eyebrow}>Tech, used right</p>
              <h2 id="wellbeing-title" className={`${s.title} mt-4`}>
                Technology should leave people <span className={s.grad}>better off.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                Every product shapes how people think, feel and live. So before we write a
                line of code, we ask what it will do to the person using it: their focus,
                their emotions, their health.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <div className={s.principle}>
                    <span className={s.principleIcon} aria-hidden>
                      <p.icon size={23} />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-bold tracking-[-0.01em]">{p.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-[#5a5766]">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150} className="mt-8">
              <Link href="/about" className={s.link}>
                How we think about technology <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
