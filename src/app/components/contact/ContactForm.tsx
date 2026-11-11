"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { whatsapp } from "../../lib/site";
import k from "./contact.module.css";

const NEEDS = [
  "Software development",
  "AI & automation",
  "Digital product (idea to launch)",
  "Creative & brand",
  "Cybersecurity",
  "Data analytics",
  "Workbase products",
  "Training & workshops",
  "Partnership",
  "Something else",
];

const BUDGETS = ["Below ₦500,000", "₦500k – ₦1M", "₦1M – ₦3M", "₦3M – ₦5M", "₦5M – ₦10M", "Above ₦10M", "Not sure yet"];
const TIMELINES = ["As soon as possible", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];

const EMPTY = { name: "", email: "", phone: "", need: "", budget: "", timeline: "", message: "" };

/**
 * Project enquiry. Submitting opens WhatsApp with everything filled in, so the
 * conversation continues there (no email server needed).
 */
export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof EMPTY) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Phantomire Technologies! I'd like to work with you.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.need ? `I need: ${form.need}` : null,
      form.budget ? `Budget: ${form.budget}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      "",
      form.message,
    ].filter((l): l is string => l !== null);
    // Opened synchronously in the submit handler so browsers don't block it as a popup.
    window.open(whatsapp(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className={k.done} role="status">
        <span className={k.doneIcon} aria-hidden>
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-5 text-[22px] font-bold tracking-[-0.02em]">WhatsApp is open with your message.</h3>
        <p className="mt-2 max-w-[380px] text-[15px] leading-relaxed text-[#5a5766]">
          Just press send there and our team will reply, usually within minutes during working hours.
        </p>
        <button
          type="button"
          className={`${k.submit} mt-7 !w-auto !px-6`}
          onClick={() => {
            setForm(EMPTY);
            setSent(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={k.form}>
      <div className={k.row}>
        <label className={k.field}>
          <span>Full name *</span>
          <input required name="name" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your name" />
        </label>
        <label className={k.field}>
          <span>Email *</span>
          <input required type="email" name="email" autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@example.com" />
        </label>
      </div>

      <div className={k.row}>
        <label className={k.field}>
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="0800 000 0000" />
        </label>
        <label className={k.field}>
          <span>What do you need?</span>
          <select name="need" value={form.need} onChange={set("need")}>
            <option value="">Choose one</option>
            {NEEDS.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className={k.field}>
        <legend>Budget</legend>
        <div className={k.pills}>
          {BUDGETS.map((b) => (
            <label key={b} className={k.pill}>
              <input type="radio" name="budget" value={b} checked={form.budget === b} onChange={set("budget")} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={k.field}>
        <legend>Timeline</legend>
        <div className={k.pills}>
          {TIMELINES.map((t) => (
            <label key={t} className={k.pill}>
              <input type="radio" name="timeline" value={t} checked={form.timeline === t} onChange={set("timeline")} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={k.field}>
        <span>Tell us about it *</span>
        <textarea required name="message" rows={5} value={form.message} onChange={set("message")} placeholder="What are you trying to build or solve?" />
      </label>

      <button type="submit" className={k.submit}>
        <Send size={17} /> Send via WhatsApp
      </button>
      <p className={k.hint}>
        <MessageCircle size={14} aria-hidden /> Opens WhatsApp with your details filled in. Nothing is stored on our site.
      </p>
    </form>
  );
}
