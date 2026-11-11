"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import Reveal from "../site/Reveal";
import { START_PROJECT } from "../../lib/site";
import WorkbaseTile from "../solutions/WorkbaseTile";
import { GROUPS, SOLUTIONS, type Group } from "../../lib/solutions";
import s from "../site/ui.module.css";

type Filter = "all" | Group;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...GROUPS.map((g) => ({ id: g.id, label: g.short })),
];

export default function Solutions() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? SOLUTIONS : SOLUTIONS.filter((sol) => sol.group === filter);

  return (
    <section className={`${s.section} ${s.tint}`} aria-labelledby="solutions-title">
      <div className={`${s.wrap} ${s.pad}`}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className={s.eyebrow}>Our solutions</p>
            <h2 id="solutions-title" className={`${s.title} mt-4`}>
              A growing family of <span className={s.grad}>real solutions.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={s.lede}>
              The Workbase suite for the workplace, products for everyday life, and platforms we
              build for the brands we partner with.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className={s.solTabs} role="group" aria-label="Filter solutions">
            {FILTERS.map((f) => {
              const count = f.id === "all" ? SOLUTIONS.length : SOLUTIONS.filter((sol) => sol.group === f.id).length;
              const on = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={on}
                  className={`${s.solTab} ${on ? s.solTabOn : ""}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                  <span className={s.solCount}>{count}</span>
                </button>
              );
            })}
          </div>
          <Link href="/solutions" className={s.link}>
            See all solutions <ArrowRight size={16} />
          </Link>
        </Reveal>

        {/* keyed by filter so the cards re-enter with a stagger on every change */}
        <p className="mt-6 text-[13px] font-medium text-[#5a5766] sm:hidden" aria-hidden>
          Swipe to see more →
        </p>
        <div key={filter} className={`${s.solGrid} mt-3 sm:mt-8`} aria-live="polite">
          {shown.map((sol, i) => {
            const href = sol.href || `/solutions#${GROUPS.find((g) => g.id === sol.group)?.anchor ?? ""}`;
            const external = href.startsWith("http");
            return (
              <div key={sol.id} className={s.solCell} style={{ "--d": `${i * 60}ms` } as CSSProperties}>
                <Link
                  href={href}
                  className={s.sol}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className={s.solMedia}>
                    {sol.image ? (
                      <Image
                        src={sol.image.src}
                        alt={sol.image.alt}
                        fill
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 82vw"
                      />
                    ) : (
                      <WorkbaseTile sol={sol} />
                    )}
                    <span className={`${s.solBadge} ${sol.group === "client" ? s.solBadgeClient : ""}`}>
                      <i aria-hidden />
                      {sol.status}
                    </span>
                    <span className={s.solGo} aria-hidden>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className={s.solBody}>
                    <p className={s.solCat}>{sol.category}</p>
                    <h3 className={s.solName}>{sol.name}</h3>
                    <p className={s.solText}>{sol.text}</p>
                    <span className={s.solLink}>
                      {external ? "Visit site" : "Learn more"} <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* completes the last row on desktop (4 columns) */}
          {shown.length % 4 !== 0 && (
            <div className={s.solCell} style={{ "--d": `${shown.length * 60}ms` } as CSSProperties}>
              <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={s.solCta}>
                <span className={s.solCtaIcon} aria-hidden>
                  <Plus size={22} />
                </span>
                <span>
                  <span className="block text-[20px] font-bold leading-tight tracking-[-0.02em]">
                    Your solution could be next.
                  </span>
                  <span className="mt-2 block text-[14px] leading-relaxed text-white/70">
                    Tell us the problem. We&rsquo;ll design and build the technology around it.
                  </span>
                </span>
                <span className={s.solCtaGo}>
                  Start a project <ArrowRight size={16} />
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
