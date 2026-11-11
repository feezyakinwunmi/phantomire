import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../site/Reveal";
import s from "../site/ui.module.css";

const AUDIENCES = [
  {
    n: "01",
    label: "For businesses",
    title: "Tools that run and grow your business.",
    text: "Websites, apps, automation and AI that save time, win customers and scale as you do.",
    tags: ["Web & mobile apps", "Automation", "AI"],
    href: "/services",
    image: "/home/audience-business.webp",
    alt: "A team working together around a table with their laptops",
    position: "42% 50%",
  },
  {
    n: "02",
    label: "For organizations",
    title: "Platforms for schools, NGOs and institutions.",
    text: "Portals, data systems and digital programmes that help you reach and serve more people.",
    tags: ["Portals", "Data systems", "Training"],
    href: "/services",
    image: "/home/audience-team.webp",
    alt: "A whole team standing together in their office",
    position: "50% 50%",
  },
  {
    n: "03",
    label: "For people",
    title: "Products and skills for everyday life.",
    text: "Apps that make daily life safer and healthier, and training that turns curious minds into builders.",
    tags: ["Vesphe", "Pearlvix", "Academy"],
    href: "/solutions",
    image: "/home/audience-people.webp",
    alt: "A young man smiling outdoors",
    position: "68% 30%",
  },
];

export default function Audiences() {
  return (
    <section className={`${s.section} ${s.light}`} aria-labelledby="audiences-title">
      <div className={`${s.wrap} ${s.pad}`}>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className={s.eyebrow}>Who we build for</p>
            <h2 id="audiences-title" className={`${s.title} mt-4`}>
              Every solution starts with <span className={s.grad}>a real person.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={s.lede}>
              A shop owner losing hours to paperwork. A school that needs to reach more
              students. Someone who just wants to buy online without being scammed. We
              build the technology around them.
            </p>
          </Reveal>
        </div>

        <div className={`${s.audRow} mt-10 lg:mt-12`}>
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.n} delay={i * 110} className={s.audCell}>
              <Link href={a.href} className={s.aud} aria-label={`${a.label}: ${a.title}`}>
                <span className={s.audMedia}>
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className={s.audImg}
                    style={{ objectPosition: a.position }}
                  />
                  <span className={s.audShade} aria-hidden />
                </span>
                <span className={s.audNum} aria-hidden>
                  {a.n}
                </span>
                <span className={s.audArrow} aria-hidden>
                  <ArrowUpRight size={20} />
                </span>
                <span className={s.audBody}>
                  <span className={s.audLabel}>{a.label}</span>
                  <span className={s.audTitle}>{a.title}</span>
                  <span className={s.audMore}>
                    <span className={s.audMoreInner}>
                      <span className={s.audText}>{a.text}</span>
                      <span className={s.audTags}>
                        {a.tags.map((t) => (
                          <span key={t} className={s.chipDark}>
                            {t}
                          </span>
                        ))}
                      </span>
                    </span>
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
