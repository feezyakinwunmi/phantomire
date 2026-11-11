import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "../components/site/Reveal";
import FaqClient from "./FaqClient";
import { EMAIL, whatsapp } from "../lib/site";
import s from "../components/site/ui.module.css";
import k from "../components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "FAQ | Phantomire Technologies",
  description: "Answers about Phantomire's products and services, courses, payments, partnerships and support.",
};

export default function FaqPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <section className={`${s.section} ${s.light} ${k.simpleHero}`} aria-labelledby="faq-title">
        <div className={`${s.dots} ${s.lgOnly}`} style={{ right: "6%", top: "18%", width: 300, height: 240 }} aria-hidden />
        <div className={`${s.wrap} pt-12 pb-8 lg:pt-16`}>
          <Reveal className="max-w-[760px]">
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden />
              <span aria-current="page" className="font-medium text-[#14121c]">
                FAQ
              </span>
            </nav>
            <p className={`${s.eyebrow} mt-8`}>Help centre</p>
            <h1 id="faq-title" className={`${k.simpleTitle} mt-4`}>
              Questions? <span className={s.grad}>We&rsquo;ve got answers.</span>
            </h1>
            <p className={`${s.lede} mt-5`}>
              Everything about our products, courses, payments and partnerships. Can&rsquo;t find it?
              Ask us directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} pb-20 lg:pb-28`}>
          <FaqClient />
        </div>
      </section>

      <section className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight}`} aria-labelledby="faq-help-title">
        <div className={s.ctaGlow} aria-hidden />
        <div className={`${s.wrap} ${s.padArc} text-center`}>
          <div className="mx-auto max-w-[640px]">
            <Reveal>
              <p className={`${s.eyebrow} justify-center`}>Still curious?</p>
              <h2 id="faq-help-title" className={`${s.title} mt-5`}>
                A real person is <span className={s.grad}>one message away.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={whatsapp("Hi Phantomire! I have a question.")} target="_blank" rel="noopener noreferrer" className={s.btn}>
                <MessageCircle size={17} /> Ask on WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className={s.btnGhost}>
                <Mail size={17} /> Email us
              </a>
            </Reveal>
            <Link href="/contact" className={`${s.link} mt-6`}>
              Other ways to reach us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
