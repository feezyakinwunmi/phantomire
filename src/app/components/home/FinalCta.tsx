import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";
import { START_PROJECT } from "../../lib/site";

export default function FinalCta() {
  return (
    <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="cta-title">
      <div className={s.ctaGlow} aria-hidden />

      <div className={`${s.wrap} ${s.padArc} text-center`}>
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <p className={`${s.eyebrow} justify-center`}>Let&rsquo;s build what comes next</p>
            <h2 id="cta-title" className={`${s.title} mt-5`}>
              Have a problem worth solving? <span className={s.grad}>Let&rsquo;s build it right.</span>
            </h2>
            <p className={`${s.lede} mx-auto mt-5`}>
              Whether you need a digital product, an intelligent solution or a team to bring
              your idea to life, we are ready to build with you.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={s.btn}>
              <MessageCircle size={17} /> Start a project
            </a>
            <Link href="/contact" className={s.btnGhost}>
              Other ways to reach us <ArrowRight size={17} />
            </Link>
          </Reveal>

          <p className="mt-8 text-[12px] uppercase tracking-[0.22em] text-white/45">
            Built from Nigeria, for the world
          </p>
        </div>
      </div>
    </section>
  );
}
