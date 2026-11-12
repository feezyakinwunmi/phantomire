"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, GraduationCap, Plus, Search, X } from "lucide-react";
import { schools, type Ambassador } from "../../lib/ambassadors";
import a from "./ambassadors.module.css";

const norm = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Everything a visitor might type to find someone: school names, campus, the person, their roles. */
const haystack = (p: Ambassador) =>
  norm([p.university, p.campus, p.short, p.firstName, p.lastName, p.nickname ?? "", ...p.roles].join(" "));

type Props = { ambassadors: Ambassador[]; applyHref: string };

export default function AmbassadorDirectory({ ambassadors: AMBASSADORS, applyHref }: Props) {
  const [query, setQuery] = useState("");
  const [school, setSchool] = useState<string | null>(null);

  const INDEX = useMemo(() => AMBASSADORS.map((p) => ({ p, text: haystack(p) })), [AMBASSADORS]);
  const ALL_SCHOOLS = useMemo(() => schools(AMBASSADORS), [AMBASSADORS]);

  const results = useMemo(() => {
    const words = norm(query).split(" ").filter(Boolean);
    return INDEX.filter(({ p, text }) => (!school || p.short === school) && words.every((w) => text.includes(w))).map(
      ({ p }) => p,
    );
  }, [INDEX, query, school]);

  const groups = useMemo(
    () => schools(results).map((sc) => ({ ...sc, people: results.filter((p) => p.short === sc.short) })),
    [results],
  );

  const filtered = Boolean(query.trim() || school);

  return (
    <div className="mt-10">
      {/* ---------- Toolbar ---------- */}
      <div className={a.toolbar} role="search">
        <label className={a.search}>
          <Search size={18} aria-hidden />
          <span className="sr-only">Search ambassadors by school, campus or name</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by school, campus or name"
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </label>

        <div className={a.chips} role="group" aria-label="Filter by school">
          <button type="button" className={a.chip} aria-pressed={school === null} onClick={() => setSchool(null)}>
            All schools <span>{AMBASSADORS.length}</span>
          </button>
          {ALL_SCHOOLS.map((sc) => (
            <button
              key={sc.short}
              type="button"
              className={a.chip}
              aria-pressed={school === sc.short}
              title={sc.name}
              onClick={() => setSchool(school === sc.short ? null : sc.short)}
            >
              {sc.short} <span>{sc.count}</span>
            </button>
          ))}
        </div>
      </div>

      <p className={a.resultCount} aria-live="polite">
        {filtered
          ? `${results.length} ${results.length === 1 ? "ambassador" : "ambassadors"} found`
          : `${AMBASSADORS.length} ambassadors across ${ALL_SCHOOLS.length} ${ALL_SCHOOLS.length === 1 ? "school" : "schools"}`}
      </p>

      {/* ---------- Results ---------- */}
      {groups.length === 0 ? (
        <div className={a.empty}>
          <span className={a.nextIcon} aria-hidden>
            <GraduationCap size={26} />
          </span>
          <p className="mt-5 text-[19px] font-bold tracking-[-0.02em]">No ambassadors there yet</p>
          <p className="mt-2 max-w-[420px] text-[14.5px] leading-relaxed text-[#5a5766]">
            We don&rsquo;t have anyone matching &ldquo;{query.trim() || school}&rdquo; yet. Could it be you?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={applyHref} target="_blank" rel="noopener noreferrer" className={a.emptyBtn}>
              Become the first <ArrowRight size={16} />
            </a>
            <button
              type="button"
              className={a.emptyReset}
              onClick={() => {
                setQuery("");
                setSchool(null);
              }}
            >
              Show everyone
            </button>
          </div>
        </div>
      ) : (
        groups.map((g) => (
          <section key={g.short} className="mt-8" aria-labelledby={`school-${g.short}`}>
            <div className={a.campus}>
              <GraduationCap size={20} className="text-[#7b24e3]" aria-hidden />
              <h3 id={`school-${g.short}`} className={a.campusName}>
                {g.name}
              </h3>
              <span className={a.campusCount}>
                <i aria-hidden /> {g.people.length} {g.people.length === 1 ? "ambassador" : "ambassadors"}
              </span>
            </div>

            <ul className={`${a.grid} mt-5`}>
              {g.people.map((p) => (
                <li key={p.id}>
                  <AmbassadorCard p={p} />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}

      {/* ---------- Your campus next ---------- */}
      <a href={applyHref} target="_blank" rel="noopener noreferrer" className={`${a.next} mt-10`}>
        <span className={a.nextIcon} aria-hidden>
          <Plus size={24} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[19px] font-bold leading-tight tracking-[-0.02em]">Don&rsquo;t see your school?</span>
          <span className="mt-1 block text-[14.5px] leading-relaxed text-[#5a5766]">
            We&rsquo;re bringing the programme to more universities. If you&rsquo;re a student leader who loves
            technology, bring Phantomire to your campus.
          </span>
        </span>
        <span className={a.nextCta}>
          Apply on WhatsApp <ArrowRight size={16} />
        </span>
      </a>
    </div>
  );
}

function AmbassadorCard({ p }: { p: Ambassador }) {
  return (
    <article className={a.card} aria-labelledby={`${p.id}-name`}>
      <div className={a.cardIn}>
        <div className={a.photo}>
          <Image
            src={p.photo}
            alt={`Portrait of ${p.firstName} ${p.lastName}`}
            fill
            sizes="(min-width: 1280px) 230px, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
            style={{ objectPosition: p.focus }}
          />
          <span className={a.campusTag}>{p.short}</span>
        </div>
        <div className={a.body}>
          <h4 id={`${p.id}-name`}>
            <span className={a.first}>{p.firstName}</span>
            <span className={a.last}>{p.lastName}</span>
          </h4>
          {p.nickname && (
            <p className={a.nick}>
              aka <b>{p.nickname}</b>
            </p>
          )}
          {p.roles.length > 0 && (
            <ul className={a.roles} title={p.roles.join(" · ")}>
              {p.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
