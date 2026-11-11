import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, ChevronRight, MessageCircle, Users } from "lucide-react";
import Reveal from "../components/site/Reveal";
import { COMMUNITY_URL, whatsapp } from "../lib/site";
import s from "../components/site/ui.module.css";
import c from "../components/courses/courses.module.css";

/*
 * Registration is closed between batches. The previous registration form (with Paystack
 * checkout) lives in git history: `git log -- src/app/register/page.tsx` to restore it.
 */

export const metadata: Metadata = {
  title: "Register | Next batch coming soon | Phantomire Academy",
  description:
    "Registration for the next Phantomire Academy batch opens soon. Join the community to be the first to know.",
};

const STEPS = [
  { title: "Join the community", text: "Get early notice, updates and opportunities from Phantomire.", on: true },
  { title: "Get the call", text: "We announce the next batch to the community first, with dates and fees." },
  { title: "Pick your course", text: "Choose your track and register before seats run out." },
];

export default function RegisterPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <section className={`${s.section} ${s.dark} ${c.closed}`} aria-labelledby="register-title">
        <div className={c.closedPhoto} aria-hidden>
          <Image src="/pstudents.jpeg" alt="" fill priority sizes="100vw" style={{ objectPosition: "50% 35%" }} />
        </div>
        <div className={`${s.dots} ${s.lgOnly}`} style={{ left: "4%", top: "12%", width: 260, height: 220 }} aria-hidden />
        <div className={`${s.dots} ${s.lgOnly}`} style={{ right: "4%", bottom: "14%", width: 260, height: 220 }} aria-hidden />

        <div className={`${s.wrap} w-full py-16 text-center lg:py-24`}>
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] text-white/55">
                <Link href="/" className="transition-colors hover:text-[#d3adff]">
                  Home
                </Link>
                <ChevronRight size={14} aria-hidden />
                <span aria-current="page" className="font-medium text-white">
                  Register
                </span>
              </nav>

              <p className="mt-8">
                <span className={c.status}>
                  <span className={c.noticeDot} aria-hidden /> Registration closed
                </span>
              </p>

              <h1 id="register-title" className={`${c.closedTitle} mt-6`}>
                The next batch is <span className={s.grad}>on its way.</span>
              </h1>
              <p className={`${s.lede} mx-auto mt-6 !max-w-[560px] !text-[17px]`}>
                We aren&rsquo;t taking registrations right now. Join the Phantomire community and
                stay tuned: you&rsquo;ll be the first to know when the next batch opens.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={`${s.btn} !h-[54px] !px-7 !text-[15.5px]`}>
                <Users size={18} /> Join the community
              </a>
              <Link href="/courses" className={`${s.btnGhost} !h-[54px] !px-7`}>
                Explore the courses <ArrowRight size={17} />
              </Link>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 inline-flex items-center gap-2 text-[13.5px] text-white/55">
                <BellRing size={15} aria-hidden /> Stay tuned for the next batch.
              </p>
            </Reveal>
          </div>

          <div className={`${c.steps} mx-auto mt-14 max-w-[980px]`}>
            {STEPS.map((st, i) => (
              <Reveal key={st.title} delay={220 + i * 90}>
                <div className={`${c.stepCard} ${st.on ? c.stepOn : ""}`}>
                  <p className={c.stepNum}>STEP {String(i + 1).padStart(2, "0")}</p>
                  <h2 className={c.stepName}>{st.title}</h2>
                  <p className={c.stepText}>{st.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-[13.5px] text-white/50">
            Questions about a course?{" "}
            <a
              href={whatsapp("Hi Phantomire! I have a question about the next batch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#d3adff] underline-offset-4 hover:underline"
            >
              <MessageCircle size={14} aria-hidden /> Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
