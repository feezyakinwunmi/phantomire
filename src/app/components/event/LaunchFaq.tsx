"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import e from "./event.module.css";

export type Faq = { q: string; a: string };

/** Accordion: one answer open at a time, animated with grid rows (no height measuring). */
export default function LaunchFaq({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className={e.faq}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${e.faqItem} ${isOpen ? e.faqOpen : ""}`}>
            <h3>
              <button
                type="button"
                className={e.faqQ}
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span className={e.faqIcon} aria-hidden>
                  <Plus size={16} />
                </span>
              </button>
            </h3>
            <div id={`${id}-${i}`} className={e.faqA} role="region" aria-hidden={!isOpen}>
              <div className={e.faqAInner}>
                <p className={e.faqAText}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
