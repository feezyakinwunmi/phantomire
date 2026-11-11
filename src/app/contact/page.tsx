import type { Metadata } from "next";
import { ArrowUpRight, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter, Youtube, Zap } from "lucide-react";
import PageHero, { Grad } from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import ContactForm from "../components/contact/ContactForm";
import LaunchFaq, { type Faq } from "../components/event/LaunchFaq";
import { EMAIL, PHONE_DISPLAY, START_PROJECT, WHATSAPP_NUMBER } from "../lib/site";
import s from "../components/site/ui.module.css";
import k from "../components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Phantomire Technologies",
  description:
    "Talk to Phantomire Technologies about software, AI, digital products, training or partnerships. Chat on WhatsApp, call, or email us.",
};

const SOCIALS = [
  { href: "https://twitter.com/phantomire01", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/phantomire01", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/phantomire", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com/company/phantomire", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@phantomire01", icon: Youtube, label: "YouTube" },
];

const FAQS: Faq[] = [
  { q: "How fast will you reply?", a: "On WhatsApp, usually within minutes during working hours. Emails get a reply within one working day." },
  { q: "How quickly can you start a project?", a: "Usually within one to two weeks of agreeing on the scope, depending on its size." },
  { q: "Do you work with startups and small businesses?", a: "Yes. We shape every engagement around your stage and budget." },
  { q: "Can I visit your office?", a: "We are based in Epe, Lagos. Message us first and we will arrange a time that works." },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title={
          <>
            Let&rsquo;s talk about <Grad>what you&rsquo;re building.</Grad>
          </>
        }
        lede="A project, a course, a partnership or just a question: tell us what's on your mind and a real person will get back to you, fast."
        actions={
          <>
            <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={s.btn}>
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
            <a href="#enquiry" className={s.btnGhost}>
              Send project details
            </a>
          </>
        }
        image={{ src: "/pages/contact-hero.webp", alt: "Three colleagues talking around a meeting table with laptops" }}
        badge={{ icon: Zap, title: "Replies in minutes", text: "On WhatsApp, during working hours" }}
      />

      {/* ---------- Methods + form ---------- */}
      <section id="enquiry" className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight} scroll-mt-16`} aria-labelledby="enquiry-title">
        <div className={`${s.dots} ${s.lgOnly}`} style={{ left: "-3%", bottom: "6%", width: 300, height: 240 }} aria-hidden />
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div className={s.over}>
              <Reveal>
                <p className={s.eyebrow}>Talk to us</p>
                <h2 id="enquiry-title" className={`${s.title} mt-4`}>
                  Pick the way <span className={s.grad}>that suits you.</span>
                </h2>
              </Reveal>

              <Reveal delay={80} className="mt-8">
                <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={k.wa}>
                  <span className={k.waLive}>
                    <i aria-hidden /> Fastest
                  </span>
                  <span className="mt-4 flex items-center justify-between gap-4">
                    <span>
                      <span className="block text-[22px] font-bold tracking-[-0.02em]">Chat on WhatsApp</span>
                      <span className="mt-1 block text-[14.5px] text-white/80">{PHONE_DISPLAY}</span>
                    </span>
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-white text-[#0b6b39]">
                      <MessageCircle size={22} />
                    </span>
                  </span>
                </a>
              </Reveal>

              <div className={`${k.methods} mt-3`}>
                <Reveal delay={120}>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className={k.method}>
                    <span className={k.methodIcon} aria-hidden>
                      <Phone size={20} />
                    </span>
                    <span>
                      <span className={k.methodLabel}>Call us</span>
                      <span className={k.methodValue}>{PHONE_DISPLAY}</span>
                    </span>
                    <ArrowUpRight size={18} className={k.methodArrow} aria-hidden />
                  </a>
                </Reveal>
                <Reveal delay={160}>
                  <a href={`mailto:${EMAIL}`} className={k.method}>
                    <span className={k.methodIcon} aria-hidden>
                      <Mail size={20} />
                    </span>
                    <span>
                      <span className={k.methodLabel}>Email</span>
                      <span className={k.methodValue}>{EMAIL}</span>
                    </span>
                    <ArrowUpRight size={18} className={k.methodArrow} aria-hidden />
                  </a>
                </Reveal>
                <Reveal delay={200}>
                  <div className={k.method}>
                    <span className={k.methodIcon} aria-hidden>
                      <MapPin size={20} />
                    </span>
                    <span>
                      <span className={k.methodLabel}>Based in</span>
                      <span className={k.methodValue}>Epe, Lagos, Nigeria</span>
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={240}>
                  <div className={k.method}>
                    <span className={k.methodIcon} aria-hidden>
                      <Clock size={20} />
                    </span>
                    <span>
                      <span className={k.methodLabel}>Working hours</span>
                      <span className={k.methodValue}>Mon – Fri, 9:00 AM – 6:00 PM WAT</span>
                    </span>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={280} className="mt-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">Follow along</p>
                <div className={`${k.socials} mt-3`}>
                  {SOCIALS.map(({ href, icon: Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={k.social} aria-label={label}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal from="right" delay={100}>
              <div className={k.formCard}>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7b24e3]">Project enquiry</p>
                <h3 className="mt-2 text-[24px] font-bold tracking-[-0.025em]">Tell us what you need</h3>
                <p className="mt-1.5 text-[14.5px] text-[#5a5766]">A few details help us reply with something useful.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromDark}`} aria-labelledby="contact-faq-title">
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal>
              <p className={s.eyebrow}>Quick answers</p>
              <h2 id="contact-faq-title" className={`${s.title} mt-4`}>
                Before you <span className={s.grad}>reach out.</span>
              </h2>
              <p className={`${s.lede} mt-5`}>
                More answers about courses, payments and partnerships are on our{" "}
                <a href="/faq" className="font-semibold text-[#7b24e3] underline underline-offset-4">
                  FAQ page
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={100}>
              <LaunchFaq items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
