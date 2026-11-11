"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, BarChart3, Check, Clock, MessageCircle, Search, Users, X } from "lucide-react";
import { CATEGORIES, COURSES, type Course, type CourseCategory } from "../../lib/courses";
import { COMMUNITY_URL, whatsapp } from "../../lib/site";
import s from "../site/ui.module.css";
import c from "./courses.module.css";

/** Course image, falling back to the course icon on a brand gradient if it can't load. */
function CourseImage({ course, eager = false }: { course: Course; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  const Icon = course.icon;
  if (failed) {
    return (
      <span className={c.fallback} aria-hidden>
        <Icon size={46} strokeWidth={1.4} />
      </span>
    );
  }
  return (
    // Mix of local and remote images, so a plain img (with lazy loading) rather than next/image.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={course.image.src}
      alt={course.image.alt}
      loading={eager ? "eager" : "lazy"}
      width={900}
      height={506}
      onError={() => setFailed(true)}
      // An image that failed before hydration never fires onError, so check on mount too.
      ref={(el) => {
        if (el && el.complete && el.naturalWidth === 0) setFailed(true);
      }}
    />
  );
}

type Filter = "all" | CourseCategory;

/** Filterable, searchable course grid. "Learn more" opens the course details in a modal. */
export default function CourseCatalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Course | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter(
      (co) =>
        (filter === "all" || co.category === filter) &&
        (!q || [co.title, co.subtitle, co.description, ...co.tags].some((f) => f.toLowerCase().includes(q))),
    );
  }, [filter, query]);

  const openCourse = (co: Course, el: HTMLElement) => {
    returnFocus.current = el;
    setOpen(co);
  };

  const close = () => {
    setOpen(null);
    returnFocus.current?.focus();
  };

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className={s.solTabs} role="group" aria-label="Filter courses">
          {[{ id: "all" as Filter, label: "All courses" }, ...CATEGORIES].map((f) => {
            const count = f.id === "all" ? COURSES.length : COURSES.filter((co) => co.category === f.id).length;
            const on = filter === f.id;
            return (
              <button key={f.id} type="button" aria-pressed={on} className={`${s.solTab} ${on ? s.solTabOn : ""}`} onClick={() => setFilter(f.id)}>
                {f.label}
                <span className={s.solCount}>{count}</span>
              </button>
            );
          })}
        </div>
        <label className={c.search}>
          <Search size={18} aria-hidden />
          <span className="sr-only">Search courses</span>
          <input type="search" placeholder="Search courses" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>

      {shown.length === 0 ? (
        <div className={c.empty}>
          <p className="text-[18px] font-bold">No courses match that search.</p>
          <p className="mt-1 text-[14.5px] text-[#5a5766]">Try a different word, or browse all courses.</p>
        </div>
      ) : (
        <div key={`${filter}-${query}`} className={`${c.grid} mt-8`}>
          {shown.map((co, i) => (
            <article key={co.id} className={c.card} style={{ "--d": `${Math.min(i, 8) * 50}ms` } as CSSProperties}>
              <button type="button" className={c.cardHit} onClick={(e) => openCourse(co, e.currentTarget)} aria-label={`Learn more about ${co.title}`} />
              <div className={c.media}>
                <CourseImage course={co} />
                <span className={c.icon} aria-hidden>
                  <co.icon size={18} />
                </span>
              </div>
              <div className={c.body}>
                <p className={c.sub}>{co.subtitle}</p>
                <h3 className={c.title}>{co.title}</h3>
                <p className={c.desc}>{co.description}</p>
                <div className={c.meta}>
                  <span>
                    <Clock size={14} aria-hidden /> {co.duration}
                  </span>
                  <span>
                    <BarChart3 size={14} aria-hidden /> {co.level}
                  </span>
                </div>
                <span className={c.more} aria-hidden>
                  Learn more <ArrowRight size={15} />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Portalled to <body>: sections create their own stacking context, which would
          otherwise trap the modal under the fixed header. */}
      {open && createPortal(<CourseModal course={open} onClose={close} />, document.body)}
    </>
  );
}

function CourseModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeBtn.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Keep Tab inside the modal.
      if (e.key === "Tab" && panel.current) {
        const items = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const ask = whatsapp(`Hi Phantomire! I'd like to know more about the ${course.title} course.`);

  return (
    <div className={c.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={panel} className={c.modal} role="dialog" aria-modal="true" aria-labelledby="course-modal-title">
        <div className={c.mHead}>
          <CourseImage course={course} eager />
          <span className={c.mShade} aria-hidden />
          <button ref={closeBtn} type="button" className={c.mClose} onClick={onClose} aria-label="Close course details">
            <X size={18} />
          </button>
          <div className={c.mTitleWrap}>
            <span className={c.mIcon} aria-hidden>
              <course.icon size={20} />
            </span>
            <div>
              <p className={c.mSub}>{course.subtitle}</p>
              <h2 id="course-modal-title" className={c.mTitle}>
                {course.title}
              </h2>
            </div>
          </div>
        </div>

        <div className={c.mBody}>
          <div className={c.mFacts}>
            <div>
              <Clock size={16} aria-hidden />
              <span>
                <small>Duration</small>
                {course.duration}
              </span>
            </div>
            <div>
              <BarChart3 size={16} aria-hidden />
              <span>
                <small>Level</small>
                {course.level}
              </span>
            </div>
            <div>
              <Users size={16} aria-hidden />
              <span>
                <small>Format</small>
                Live classes
              </span>
            </div>
          </div>

          <p className={c.mDesc}>{course.description}</p>

          <h3 className={c.mLabel}>What you&rsquo;ll learn</h3>
          <ol className={c.mModules}>
            {course.modules.map((m, i) => (
              <li key={m}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {m}
              </li>
            ))}
          </ol>

          <h3 className={c.mLabel}>What&rsquo;s included</h3>
          <ul className={c.mIncluded}>
            {course.included.map((f) => (
              <li key={f}>
                <Check size={14} strokeWidth={3} aria-hidden /> {f}
              </li>
            ))}
          </ul>

          <div className={c.mTags}>
            {course.tags.map((t) => (
              <span key={t} className={s.chip}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={c.mFoot}>
          <p className={c.mNote}>
            <i aria-hidden /> Registration for the next batch opens soon.
          </p>
          <div className={c.mActions}>
            <a href={ask} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
              <MessageCircle size={16} /> Ask about it
            </a>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={s.btn}>
              Join the community <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
