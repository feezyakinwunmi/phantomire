import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RollingWord from "./RollingWord";
import HeroOrbit from "./HeroOrbit";
import s from "./hero.module.css";
import { START_PROJECT } from "../../lib/site";

/** Who and what the solutions are for. Each one completes "Technology solutions for …". */
const ROLLING_WORDS = ["businesses.", "organizations.", "people.", "healthier lives."] as const;

/** Neon accent: a short bar followed by four ticks. */
function Dash({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`${s.dash} ${className}`}>
      <i />
      <b />
      <b />
      <b />
      <b />
    </span>
  );
}

/** Low-poly wireframe used in the corners. */
function Wire({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 260" className={`${s.wire} ${className}`}>
      <path d="M0 40 L92 96 L18 150 Z" />
      <path d="M92 96 L168 178 L18 150" />
      <path d="M18 150 L74 248 L168 178" />
      <path d="M0 214 L18 150 M0 40 L40 0 L92 96 M74 248 L0 260" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <Wire className={s.wireLeft} />

      <div className={s.inner}>
        {/* ---------- Copy ---------- */}
        <div className={s.copy}>

          <h1 id="hero-title" className={`${s.rise} ${s.d1} mt-6 lg:mt-7`}>
            <span className={s.lead}>Technology solutions</span>
            {/* The purple line rolls like a slot machine; screen readers get the full sentence instead. */}
            <span className={s.big} aria-hidden="true">
              <span className={s.bigStatic}>for</span>
              <RollingWord words={ROLLING_WORDS} />
            </span>
            <span className="sr-only">
              for businesses, organizations, people and healthier lives.
            </span>
          </h1>

          

          <p className={`${s.text} ${s.rise} ${s.d3} mt-6 lg:mt-7`}>
            We build software, AI and digital solutions for businesses, organizations
            and individuals, designed around how technology affects the mind, emotions
            and wellbeing of the people who use it. That&rsquo;s tech, used right.
          </p>

          <div className={`${s.rise} ${s.d4} mt-8 lg:mt-9`}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={s.cta}>
                Start a project
                <ArrowRight size={18} className={s.ctaArrow} />
              </a>
              <Link href="/solutions" className={s.ghost}>
                Explore solutions
              </Link>
            </div>
            <div className="mt-5 ml-10 hidden lg:block">
              <Dash />
            </div>
          </div>
        </div>

        {/* ---------- Artwork ---------- */}
        <div className={s.visual}>
          <div className={s.curve} aria-hidden />
          <div className={s.stage}>
            <div className={`${s.ring} ${s.ring3}`} aria-hidden />
            <div className={`${s.ring} ${s.ring2}`} aria-hidden />
            <div className={`${s.ring} ${s.ring1}`} aria-hidden />
            <div className={s.dots} aria-hidden />
            <div className={s.sun} aria-hidden />
            {/* White text panel (a giant disc whose right edge is the curve) and the product
                logos orbiting out from behind it, past her fingertips (desktop) */}
            <HeroOrbit />

            <div className={s.figure}>
              <div className={s.float}>
                <Image
                  src="/hero-figure.webp"
                  alt="A woman in a VR headset reaching forward out of a glowing purple hexagon"
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 104vw"
                  className="object-contain"
                />
              </div>
            </div>

            <span className={`${s.orbit} ${s.orbitA}`} aria-hidden />
            <span className={`${s.orbit} ${s.orbitB}`} aria-hidden />
            <Dash className={s.dashA} />
            <Dash className={s.dashB} />
          </div>
        </div>
      </div>

      {/* Corner decoration on the dark floor */}
      <Wire className={s.wireRight} />
      <div className={s.dotsCorner} aria-hidden />
    </section>
  );
}
