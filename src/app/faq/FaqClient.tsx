"use client";

import { useMemo, useState } from "react";
import { Briefcase, GraduationCap, HeartHandshake, Info, Layers, LifeBuoy, Search, Wallet, type LucideIcon } from "lucide-react";
import LaunchFaq, { type Faq } from "../components/event/LaunchFaq";
import k from "../components/contact/contact.module.css";

type Group = { id: string; title: string; icon: LucideIcon; items: Faq[] };

const GROUPS: Group[] = [
  {
    id: "general",
    title: "General",
    icon: Info,
    items: [
      {
        q: "What is Phantomire Technologies?",
        a: "Phantomire Technologies builds software, AI and digital products for businesses, organizations and people, and trains the next generation of builders through Phantomire Academy, with empathy and integrity at the core.",
      },
      {
        q: "Where is Phantomire Technologies located?",
        a: "We are based in Epe, Lagos, Nigeria. We work both online and in person, serving students and clients across Nigeria and internationally.",
      },
    ],
  },
  {
    id: "products",
    title: "Products & services",
    icon: Layers,
    items: [
      {
        q: "What does Phantomire build?",
        a: "Custom software, AI solutions, digital products, brand and creative work, cybersecurity and data analytics, plus our own products like the Workbase suite, Vesphe, Pearlvix and DOMNI.",
      },
      {
        q: "What is Workbase?",
        a: "Workbase is our suite of workplace tools: Workbase for tracking staff attendance and work, Workbase Meet for video meetings built for Nigeria, Workbase Book for free or paid online bookings, and Workbase Form for building forms easily.",
      },
      {
        q: "How do I start a project with you?",
        a: "Message us on WhatsApp at +234 916 146 0898 or use the form on our contact page. Tell us about the problem and we will recommend an approach and send a clear quote.",
      },
    ],
  },
  {
    id: "courses",
    title: "Courses & training",
    icon: GraduationCap,
    items: [
      {
        q: "What courses do you offer?",
        a: "Frontend and backend development, UI/UX design, videography and editing, digital marketing, data analytics, cybersecurity, artificial intelligence, animation, cloud computing, DevOps, game development, mobile development, blockchain, digital art and product management.",
      },
      {
        q: "How long do the courses take?",
        a: "Between 8 and 16 weeks, depending on the course. Each one is built around practical training and real projects.",
      },
      {
        q: "Do you offer online or in-person training?",
        a: "Both. You can learn in live virtual classes or in person at our location in Epe, Lagos.",
      },
      {
        q: "Do you provide certificates?",
        a: "Yes. You receive a certificate when you complete a course, along with a portfolio of projects that shows what you can do.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & registration",
    icon: Wallet,
    items: [
      {
        q: "When does the next batch start?",
        a: "Registration for the next batch opens soon. Join the Phantomire community from our register page to be the first to know.",
      },
      {
        q: "How much do the courses cost?",
        a: "Fees depend on the course and whether you learn online or in person. Fees for the next batch will be announced to the community when registration opens.",
      },
      {
        q: "How do I pay for a course?",
        a: "Payments are processed securely through Paystack by card, bank transfer and other supported methods.",
      },
      {
        q: "What is your refund policy?",
        a: "Course fees are non-refundable once the course has started. Please review the course details and ask us any questions before registering.",
      },
      {
        q: "Do you offer scholarships or discounts?",
        a: "From time to time we offer scholarships and discounts for exceptional students and community partners. Contact us to ask about current opportunities.",
      },
    ],
  },
  {
    id: "community",
    title: "Partnerships & community",
    icon: HeartHandshake,
    items: [
      {
        q: "How can schools partner with Phantomire?",
        a: "Through after-school coding clubs, curriculum support, teacher training and career guidance. Contact us to discuss what would work for your school.",
      },
      {
        q: "Can organizations collaborate with you?",
        a: "Yes. We work with NGOs, community organizations and businesses on tech education, workshops and digital solutions.",
      },
      {
        q: "How can I join the Phantomire community?",
        a: "Join from our register page, come to our events, or follow us on social media. Everyone curious about technology is welcome.",
      },
    ],
  },
  {
    id: "career",
    title: "Career & opportunities",
    icon: Briefcase,
    items: [
      {
        q: "Do you help with jobs?",
        a: "We provide career support including interview preparation, CV and portfolio reviews, and introductions through our network.",
      },
      {
        q: "What careers can I pursue after training?",
        a: "Depending on your course: software developer, UI/UX designer, data analyst, AI engineer, cybersecurity specialist, DevOps engineer, product manager and more.",
      },
      {
        q: "Do you offer internships?",
        a: "We work with partners on internship opportunities, and our project-based learning gives you real-world experience along the way.",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    icon: LifeBuoy,
    items: [
      {
        q: "How can I contact support?",
        a: "WhatsApp us at +234 916 146 0898, email info.phantomire@gmail.com, or use the form on our contact page.",
      },
      {
        q: "What if I have technical issues?",
        a: "Message us on WhatsApp or by email and we will help as quickly as we can.",
      },
    ],
  },
];

export default function FaqClient() {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GROUPS;
    return GROUPS.map((g) => ({ ...g, items: g.items.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q)) })).filter((g) => g.items.length);
  }, [query]);

  return (
    <>
      <label className={k.faqSearch}>
        <Search size={19} aria-hidden />
        <span className="sr-only">Search questions</span>
        <input type="search" placeholder="Search questions, e.g. “payment”" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>

      <div className={`${k.faqLayout} mt-12`}>
        <nav className={k.faqNav} aria-label="FAQ topics">
          {GROUPS.map((g) => (
            <a key={g.id} href={`#faq-${g.id}`} className={k.faqNavLink}>
              {g.title}
              <small>{g.items.length}</small>
            </a>
          ))}
        </nav>

        <div>
          {groups.length === 0 && (
            <p className="rounded-[20px] border border-dashed border-[#7b24e3]/30 bg-[#faf7fe] p-10 text-center text-[15px] text-[#5a5766]">
              No questions match &ldquo;{query}&rdquo;. Try another word, or ask us directly.
            </p>
          )}
          {groups.map((g) => (
            <section key={`${g.id}-${query}`} id={`faq-${g.id}`} className={k.faqGroup} aria-labelledby={`faq-${g.id}-title`}>
              <h2 id={`faq-${g.id}-title`} className={k.faqGroupTitle}>
                <span aria-hidden>
                  <g.icon size={16} />
                </span>
                {g.title}
              </h2>
              <LaunchFaq items={g.items} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
