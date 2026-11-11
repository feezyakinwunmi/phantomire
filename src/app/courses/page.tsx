import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Award, Briefcase, GraduationCap, HeartHandshake, MessageCircle, Users, Wrench } from "lucide-react";
import PageHero, { Grad } from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import CourseCatalog from "../components/courses/CourseCatalog";
import { COURSES } from "../lib/courses";
import { COMMUNITY_URL, whatsapp } from "../lib/site";
import s from "../components/site/ui.module.css";
import c from "../components/courses/courses.module.css";

export const metadata: Metadata = {
  title: "Courses | Phantomire Academy | Tech training in Nigeria",
  description:
    "Practical, project-based tech courses from Phantomire Academy: frontend, backend, UI/UX, data, AI, cybersecurity, cloud, mobile and more, taught live with mentorship.",
};

const WHY = [
  { icon: Users, title: "Learn from practitioners", text: "Taught by people who build real products every day, not just teach them." },
  { icon: Wrench, title: "Build real projects", text: "Every course ends with work you can show: a portfolio, not just a certificate." },
  { icon: HeartHandshake, title: "Skills with values", text: "Emotional intelligence and ethics woven in, so you build technology people can trust." },
  { icon: Briefcase, title: "Career support", text: "Mentorship, portfolio reviews and guidance into freelance work and jobs." },
];

export default function CoursesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <PageHero
        crumb="Courses"
        eyebrow="Phantomire Academy"
        title={
          <>
            Learn the skills <Grad>that build the future.</Grad>
          </>
        }
        lede={`${COURSES.length} practical, project-based courses taught live with mentorship, from your first line of code to AI, security and the cloud.`}
        actions={
          <>
            <a href="#catalog" className={s.btn}>
              Browse courses <ArrowRight size={17} />
            </a>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
              Join the community
            </a>
          </>
        }
        image={{ src: "/pages/courses-hero.webp", alt: "A smiling learner in glasses standing in front of a whiteboard", position: "60% 30%" }}
        badge={{ icon: GraduationCap, title: "200+ learners trained", text: "Next batch coming soon" }}
      />

      {/* ---------- Catalogue ---------- */}
      <section id="catalog" className={`${s.section} ${s.tint} ${s.arc} ${s.fromLight} scroll-mt-16`} aria-labelledby="catalog-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <Reveal className={c.notice}>
            <div className="flex items-center gap-4">
              <span className={c.noticeDot} aria-hidden />
              <div>
                <p className="text-[16px] font-bold tracking-[-0.01em]">Registration for the next batch opens soon.</p>
                <p className="mt-0.5 text-[14px] text-white/65">Join the community to be the first to know when it does.</p>
              </div>
            </div>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={s.btn}>
              Join the community <ArrowRight size={17} />
            </a>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <Reveal>
              <p className={s.eyebrow}>The catalogue</p>
              <h2 id="catalog-title" className={`${s.title} mt-4`}>
                Find the course <span className={s.grad}>that fits you.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>Tap any course to see what you&rsquo;ll learn, how long it takes and what&rsquo;s included.</p>
            </Reveal>
          </div>

          <div className="mt-8">
            <CourseCatalog />
          </div>
        </div>
      </section>

      {/* ---------- Why learn with us ---------- */}
      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromTint}`} aria-labelledby="why-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className={s.split}>
            <Reveal className={s.over}>
              <p className={s.eyebrow}>Why Phantomire Academy</p>
              <h2 id="why-title" className={`${s.title} mt-4`}>
                Real skills, <span className={s.grad}>taught the right way.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                Our alumni freelance for global clients, join tech teams and launch their own
                startups. Here&rsquo;s what makes the difference.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {WHY.map((w, i) => (
                  <Reveal key={w.title} delay={i * 80}>
                    <div className={s.card}>
                      <span className={s.cardIcon} aria-hidden>
                        <w.icon size={21} />
                      </span>
                      <h3 className={s.cardTitle}>{w.title}</h3>
                      <p className={s.cardText}>{w.text}</p>
                    </div>
                  </Reveal>
                ))}
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
                    <Award size={20} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold leading-tight">Certificate of completion</span>
                    <span className="mt-0.5 block text-[12.5px] text-[#5a5766]">Plus a portfolio to show</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Stay tuned ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="tuned-title">
        <div className={`${s.wrap} ${s.padArc} text-center`}>
          <div className="mx-auto max-w-[680px]">
            <Reveal>
              <p className={`${s.eyebrow} justify-center`}>Next batch</p>
              <h2 id="tuned-title" className={`${s.title} mt-5`}>
                Stay tuned. <span className={s.grad}>Your seat is coming.</span>
              </h2>
              <p className={`${s.lede} mx-auto mt-5`}>
                Join the Phantomire community for early notice when registration opens, plus
                events, opportunities and people learning alongside you.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={s.btn}>
                Join the community <ArrowRight size={17} />
              </a>
              <a
                href={whatsapp("Hi Phantomire! I have a question about your courses.")}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnGhost}
              >
                <MessageCircle size={17} /> Ask a question
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
