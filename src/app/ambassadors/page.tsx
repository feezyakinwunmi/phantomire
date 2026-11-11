import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  GraduationCap,
  Megaphone,
  MessageCircle,
  Plus,
  Presentation,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import Reveal from "../components/site/Reveal";
import { AMBASSADORS, byCampus } from "../lib/ambassadors";
import { whatsapp } from "../lib/site";
import s from "../components/site/ui.module.css";
import a from "../components/ambassadors/ambassadors.module.css";

export const metadata: Metadata = {
  title: "Campus Ambassadors | Phantomire Technologies",
  description:
    "Meet Phantomire's campus ambassadors: the students representing Phantomire Technologies at universities across Nigeria, starting with Lagos State University, Epe Campus.",
};

const APPLY = whatsapp("Hi Phantomire! I'd like to become a campus ambassador for my university.");

const DUTIES = [
  { icon: Megaphone, title: "Represent Phantomire", text: "Be the face and voice of Phantomire on campus, online and in person." },
  { icon: Presentation, title: "Host tech sessions", text: "Bring workshops, meetups and info sessions to your department and clubs." },
  { icon: Users, title: "Connect students", text: "Link fellow students to our training, events and opportunities." },
  { icon: Rocket, title: "Grow with us", text: "Get mentorship, early access to what we build and a front-row seat at our events." },
];

const LOOKING_FOR = [
  "A current student at a Nigerian university or polytechnic",
  "Active in student leadership, clubs or associations",
  "Curious about technology and keen to grow",
  "Comfortable speaking, organising and bringing people together",
];

export default function AmbassadorsPage() {
  const campuses = byCampus();

  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      {/* ---------- Hero ---------- */}
      <section className={`${s.section} ${s.dark} ${a.hero}`} aria-labelledby="amb-title">
        <div className={a.heroGlow} aria-hidden />
        <div className={`${s.dots} ${s.lgOnly}`} style={{ left: "-3%", bottom: "8%", width: 300, height: 240 }} aria-hidden />
        <div className={`${s.wrap} pt-10 pb-24 lg:pt-14 lg:pb-32`}>
          <div className={a.heroGrid}>
            <Reveal className={s.over}>
              <nav aria-label="Breadcrumb" className={a.crumbs}>
                <Link href="/">Home</Link>
                <ChevronRight size={14} aria-hidden />
                <span aria-current="page" className="font-medium text-white">
                  Ambassadors
                </span>
              </nav>
              <p className={`${s.eyebrow} mt-8`}>Campus Ambassador Programme</p>
              <h1 id="amb-title" className={`${a.heroTitle} mt-5`}>
                The faces of Phantomire <span className={s.grad}>on campus.</span>
              </h1>
              <p className={`${s.lede} mt-6`}>
                Student leaders who bring Phantomire to their universities: hosting sessions,
                connecting classmates to opportunities and showing what technology, used right,
                can do.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className={a.stat}>
                  <b>{AMBASSADORS.length}</b> ambassadors
                </span>
                <span className={a.stat}>
                  <i aria-hidden /> {campuses.length === 1 ? AMBASSADORS[0].short : `${campuses.length} campuses`}
                </span>
                <span className={a.stat}>More universities joining soon</span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#ambassadors" className={s.btn}>
                  Meet them <ArrowRight size={17} />
                </a>
                <a href={APPLY} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                  Become an ambassador
                </a>
              </div>
            </Reveal>

            <div className={a.fan} aria-hidden>
              {AMBASSADORS.slice(0, 2).map((p) => (
                <div key={p.id} className={a.fanCard}>
                  <div className={a.fanPhoto}>
                    <Image src={p.photo} alt="" fill priority sizes="(min-width: 1024px) 290px, 60vw" style={{ objectPosition: p.focus }} />
                  </div>
                  <p className={a.fanName}>{p.firstName}</p>
                  <p className={a.fanRole}>{p.short}</p>
                </div>
              ))}
              <span className={a.welcome}>
                <span>
                  <Sparkles size={15} />
                </span>
                Welcome to the team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The ambassadors ---------- */}
      <section id="ambassadors" className={`${s.section} ${s.light} ${s.arc} ${s.fromDark} scroll-mt-16`} aria-labelledby="team-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <Reveal>
              <p className={s.eyebrow}>Our ambassadors</p>
              <h2 id="team-title" className={`${s.title} mt-4`}>
                Please welcome <span className={s.grad}>our first ambassadors.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Leaders in their faculties and student bodies, now representing Phantomire on
                campus. We&rsquo;re proud to have them.
              </p>
            </Reveal>
          </div>

          {campuses.map(([campus, people]) => (
            <div key={campus} className="mt-12">
              <Reveal className={a.campus}>
                <GraduationCap size={22} className="text-[#7b24e3]" aria-hidden />
                <h3 className={a.campusName}>{campus}</h3>
                <span className={a.campusCount}>
                  <i aria-hidden /> {people.length} {people.length === 1 ? "ambassador" : "ambassadors"}
                </span>
              </Reveal>

              <div className={`${a.grid} mt-8`}>
                {people.map((p, i) => (
                  <Reveal key={p.id} delay={i * 120}>
                    <article className={a.card} aria-labelledby={`${p.id}-name`}>
                      <div className={a.cardIn}>
                        <div className={a.photo}>
                          <Image
                            src={p.photo}
                            alt={`Portrait of ${p.firstName} ${p.lastName}`}
                            fill
                            sizes="(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw"
                            style={{ objectPosition: p.focus }}
                          />
                          <span className={a.badge}>
                            <span aria-hidden>
                              <Award size={13} />
                            </span>
                            Campus Ambassador
                          </span>
                          <span className={a.campusTag}>{p.short}</span>
                        </div>
                        <div className={a.body}>
                          <h4 id={`${p.id}-name`}>
                            <span className={`${a.first} block`}>{p.firstName}</span>
                            <span className={`${a.last} block`}>{p.lastName}</span>
                          </h4>
                          {p.nickname && (
                            <p className={a.nick}>
                              aka <b>{p.nickname}</b>
                            </p>
                          )}
                          <ul className={a.roles}>
                            {p.roles.map((r) => (
                              <li key={r}>
                                <Check size={15} strokeWidth={3} aria-hidden /> {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}

                <Reveal delay={people.length * 120}>
                  <a href={APPLY} target="_blank" rel="noopener noreferrer" className={a.next}>
                    <span className={a.nextIcon} aria-hidden>
                      <Plus size={28} />
                    </span>
                    <span>
                      <span className="block text-[24px] font-bold leading-tight tracking-[-0.025em]">Your campus next?</span>
                      <span className="mt-2 block text-[15px] leading-relaxed text-[#5a5766]">
                        We&rsquo;re bringing the programme to more universities. If you&rsquo;re a
                        student leader who loves technology, we&rsquo;d love to hear from you.
                      </span>
                    </span>
                    <span className={s.link}>
                      Apply on WhatsApp <ArrowRight size={16} />
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- What ambassadors do ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="role-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <Reveal className={s.over}>
              <p className={s.eyebrow}>The role</p>
              <h2 id="role-title" className={`${s.title} mt-4`}>
                Leaders who bring tech <span className={s.grad}>to their campus.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Ambassadors are our partners on the ground, and we invest in them as much as they
                invest in their communities.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DUTIES.map((d, i) => (
              <Reveal key={d.title} delay={i * 90}>
                <div className={a.perk}>
                  <div className="flex items-center justify-between">
                    <span className={a.perkIcon} aria-hidden>
                      <d.icon size={21} />
                    </span>
                    <span className={a.perkNum}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold tracking-[-0.015em]">{d.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Become one ---------- */}
      <section className={`${s.section} ${s.tint} ${s.arc} ${s.fromDark}`} aria-labelledby="join-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className={s.eyebrow}>Become an ambassador</p>
              <h2 id="join-title" className={`${s.title} mt-4`}>
                Represent Phantomire <span className={s.grad}>at your university.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>We&rsquo;re looking for students who are:</p>
              <ul className={`${a.looking} mt-4`}>
                {LOOKING_FOR.map((l) => (
                  <li key={l}>
                    <Check size={17} strokeWidth={3} aria-hidden /> {l}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className={a.join}>
                {[
                  ["Say hello", "Message us on WhatsApp with your name, university and what you lead on campus."],
                  ["Chat with the team", "A short conversation to get to know you and your plans for your campus."],
                  ["Get onboarded", "Join the ambassador community, meet the team and start building with us."],
                ].map(([title, text], i) => (
                  <div key={title} className={a.joinStep}>
                    <span className={a.joinNum}>{i + 1}</span>
                    <div>
                      <h3 className="text-[17px] font-bold tracking-[-0.015em]">{title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-[#5a5766]">{text}</p>
                    </div>
                  </div>
                ))}
                <a href={APPLY} target="_blank" rel="noopener noreferrer" className={`${s.btn} mt-2 !h-[52px]`}>
                  <MessageCircle size={18} /> Apply on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
