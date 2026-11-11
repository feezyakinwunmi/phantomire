"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import ProductMark from "./ProductMark";
import { MockBook, MockForm, MockMeet, MockWorkbase } from "./Mocks";
import { byGroup } from "../../lib/solutions";
import x from "./solutions.module.css";

const MOCKS: Record<string, () => React.JSX.Element> = {
  workbase: MockWorkbase,
  "workbase-meet": MockMeet,
  "workbase-book": MockBook,
  "workbase-form": MockForm,
};

const HOSTS: Record<string, string> = {
  workbase: "workbase.app/team",
  "workbase-meet": "meet.workbase.app",
  "workbase-book": "book.workbase.app",
  "workbase-form": "forms.workbase.app",
};

const DURATION = 6500;

/**
 * The Workbase suite: a list of the four products beside an app window that shows the
 * selected one. Advances on its own while on screen, until the visitor picks one.
 */
// Read here rather than passed in: the data holds icon components, which can't cross
// from a Server Component into a Client Component as props.
const items = byGroup("workbase");

export default function WorkbaseShowcase() {
  const [{ active, prev }, setSel] = useState({ active: 0, prev: 0 });
  const go = (i: number) => setSel((s) => ({ active: i, prev: s.active }));
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => {
      mq.removeEventListener("change", sync);
      io.disconnect();
    };
  }, []);

  const running = auto && !paused && visible && !reduced;

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => go((active + 1) % items.length), DURATION);
    return () => window.clearTimeout(t);
  }, [running, active]);

  const pick = (i: number) => {
    if (i === active) return;
    go(i);
    setAuto(false);
  };

  // Arrow keys move between tabs (standard tablist behaviour).
  const onKey = (ev: KeyboardEvent<HTMLDivElement>) => {
    const dir = ev.key === "ArrowDown" || ev.key === "ArrowRight" ? 1 : ev.key === "ArrowUp" || ev.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    ev.preventDefault();
    const next = (active + dir + items.length) % items.length;
    pick(next);
    tabs.current[next]?.focus();
  };

  const current = items[active];
  const Mock = MOCKS[current.id] ?? MockWorkbase;
  const Prev = MOCKS[items[prev].id] ?? MockWorkbase;

  return (
    <div
      ref={root}
      className={x.wb}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={x.wbList} role="tablist" aria-label="Workbase products" aria-orientation="vertical" onKeyDown={onKey}>
        {items.map((sol, i) => {
          const on = i === active;
          return (
            <button
              key={sol.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`wb-tab-${sol.id}`}
              aria-selected={on}
              aria-controls="wb-panel"
              tabIndex={on ? 0 : -1}
              className={`${x.wbRow} ${on ? x.wbRowOn : ""}`}
              onClick={() => pick(i)}
            >
              <ProductMark sol={sol} size={42} />
              <span className={x.wbRowMain}>
                <span className={x.wbRowCat}>{sol.category}</span>
                <span className={x.wbRowName}>{sol.name}</span>
                <span className={x.wbMore}>
                  <span className={x.wbMoreInner}>
                    <span className={x.wbText}>{sol.text}</span>
                    <span className={x.wbFeats}>
                      {sol.features.map((f) => (
                        <span key={f}>
                          <Check size={13} strokeWidth={3} aria-hidden /> {f}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </span>
              {on && running && (
                <span className={x.wbProgress} aria-hidden>
                  <i key={active} style={{ "--dur": `${DURATION}ms` } as CSSProperties} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className={x.wbStageCell}>
        <div id="wb-panel" role="tabpanel" aria-labelledby={`wb-tab-${current.id}`} className={x.wbStage}>
          <div className={x.wbWindow}>
            <div className={x.wbChrome} aria-hidden>
              <span />
              <span />
              <span />
              <span className={x.wbUrl}>{HOSTS[current.id]}</span>
            </div>
            <div className={x.wbScreen} aria-hidden>
              {/* previous screen stays underneath while the new one wipes in */}
              {prev !== active && (
                <div className={`${x.wbSlide} ${x.wbSlidePrev}`} key={`p-${prev}`}>
                  <Prev />
                </div>
              )}
              <div className={`${x.wbSlide} ${x.wbSlideOn}`} key={`a-${active}`}>
                <Mock />
              </div>
            </div>
          </div>

          <div className={x.wbCaption} key={`c-${active}`}>
            <p className={x.wbHeadline}>{current.headline}</p>
            {current.href ? (
              <a href={current.href} target="_blank" rel="noopener noreferrer" className={x.wbLink}>
                Visit {current.name} <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className={x.wbSoon}>
                <i aria-hidden /> {current.status === "New" ? "New from Phantomire" : current.status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
