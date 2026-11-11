import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clapperboard, Code2, GraduationCap, MessageCircle, PenTool, Server } from "lucide-react";
import CountUp from "../site/CountUp";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";

const PROGRAMS = [
  { icon: Code2, name: "Frontend Development" },
  { icon: Server, name: "Backend Development" },
  { icon: PenTool, name: "UI/UX Design" },
  { icon: Clapperboard, name: "Videography & Editing" },
];

const STATS = [
  { value: 200, suffix: "+", label: "Learners trained" },
  { value: 15, suffix: "+", label: "Partner schools" },
  { value: 20, suffix: "+", label: "Community organizations" },
  { value: 4, suffix: "", label: "Career programmes" },
];

export default function Academy() {
  return (
    <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromTint}`} aria-labelledby="academy-title">
      <div className={`${s.wrap} ${s.padArc}`}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Message ---------- */}
          <div className={s.over}>
            <Reveal>
              <p className={s.eyebrow}>Phantomire Academy</p>
              <h2 id="academy-title" className={`${s.title} mt-4`}>
                We also train the people <span className={s.grad}>who build what&rsquo;s next.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                Our academy gives young people practical digital skills, mentorship and the
                ethics to use them well, so they can solve problems in their own communities.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {PROGRAMS.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <div className={s.program}>
                    <p.icon size={20} aria-hidden />
                    {p.name}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className={s.btn}>
                Explore courses <ArrowRight size={18} />
              </Link>
              <Link href="/register" className={s.btnGhost}>
                Join the next cohort
              </Link>
            </Reveal>
          </div>

          {/* ---------- Real students ---------- */}
          <Reveal from="right">
            <div className={s.acadArt}>
              <div className={s.acadFrame}>
                <Image
                  src="/pstudents.jpeg"
                  alt="Phantomire Academy students in their Phantomire t-shirts, smiling together in class"
                  fill
                  sizes="(min-width: 1024px) 500px, 92vw"
                  style={{ objectPosition: "50% 40%" }}
                />
              </div>

              <div className={s.acadChip}>
                <span className={s.acadChipIcon} aria-hidden>
                  <GraduationCap size={22} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold leading-tight">200+ learners</span>
                  <span className="mt-0.5 block text-[12.5px] text-[#5a5766]">trained so far</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Numbers ---------- */}
        <div className={`${s.stats} ${s.over} mt-16 lg:mt-20`}>
          {STATS.map((st, i) => (
            <Reveal key={st.label} delay={i * 90} className={s.stat}>
              <p className={`${s.statNum} ${s.grad}`}>
                <CountUp value={st.value} suffix={st.suffix} />
              </p>
              <p className={s.statLabel}>{st.label}</p>
            </Reveal>
          ))}
        </div>

        {/* ---------- Partner band ---------- */}
        <Reveal className={`${s.over} mt-12 lg:mt-14`}>
          <div className={s.partner}>
            <p className="max-w-[640px] text-[16px] leading-relaxed text-white/80">
              <span className="font-semibold text-white">Schools, NGOs and companies partner with us</span>{" "}
              to bring digital skills to more young Nigerians, through coding clubs, community
              workshops and internships.
            </p>
            <a
              href="https://wa.me/2349161460898"
              target="_blank"
              rel="noopener noreferrer"
              className={`${s.btnGhost} flex-none`}
            >
              <MessageCircle size={18} /> Partner with us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
