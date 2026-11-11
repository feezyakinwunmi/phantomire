import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Layers3,
  MessageCircle,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../site/Reveal";
import { START_PROJECT, whatsapp } from "../../lib/site";
import s from "../site/ui.module.css";
import v from "./services.module.css";

type Service = {
  /** Anchor used by the header and footer menus, e.g. /services#software */
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  text: string;
  deliver: string[];
  image: { src: string; alt: string; position?: string; remote?: boolean };
  wide?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "software",
    icon: Code2,
    name: "Software development",
    tagline: "Products engineered to grow with you.",
    text: "Web and mobile software built around how your business actually works, from customer-facing apps to the systems that keep everything running.",
    deliver: ["Web applications", "iOS & Android apps", "SaaS platforms", "Business systems", "APIs & integrations", "Maintenance & support"],
    image: { src: "/home/service-software.webp", alt: "An engineer checking a laptop between rows of servers", position: "62% 40%" },
    wide: true,
  },
  {
    id: "ai",
    icon: BrainCircuit,
    name: "AI & intelligent solutions",
    tagline: "AI that does real work.",
    text: "Automation, assistants and insight built into the tools your team and customers already use.",
    deliver: ["AI integrations", "Chatbots & assistants", "Workflow automation", "Document processing"],
    image: { src: "/home/service-ai.webp", alt: "The letters AI rendered in glass above a field of connected points" },
  },
  {
    id: "digital",
    icon: Layers3,
    name: "Digital product development",
    tagline: "From first sketch to launch day.",
    text: "Strategy, user experience and engineering under one roof, tested with real people.",
    deliver: ["Product strategy", "UX / UI design", "Prototypes", "MVP builds"],
    image: { src: "/home/service-product.webp", alt: "A designer sketching app wireframes on a tablet", position: "55% 50%" },
  },
  {
    id: "creative",
    icon: Palette,
    name: "Creative & brand",
    tagline: "Be understood, and trusted.",
    text: "Identity, interfaces, motion and content that make your brand clear on every screen.",
    deliver: ["Brand identity", "Websites & interfaces", "Motion & video", "Content design"],
    image: { src: "/home/service-creative.webp", alt: "Colour swatches beside interface designs on a tablet", position: "50% 42%" },
  },
  {
    id: "security",
    icon: ShieldCheck,
    name: "Cybersecurity",
    tagline: "Protect what you've built.",
    text: "We assess, test and harden your systems, and train your team to spot threats.",
    deliver: ["Security assessments", "Penetration testing", "Secure code reviews", "Staff training"],
    image: {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=70&auto=format&fit=crop",
      alt: "Glowing circuitry and a padlock symbol on a dark screen",
      remote: true,
    },
  },
  {
    id: "analytics",
    icon: BarChart3,
    name: "Data analytics",
    tagline: "Decisions backed by your own data.",
    text: "Bring scattered data together, see what is really happening and act on it, with dashboards your team will actually open.",
    deliver: ["Dashboards & reporting", "Data pipelines", "Business intelligence", "Forecasting", "Data modelling", "KPI tracking"],
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=70&auto=format&fit=crop",
      alt: "Charts and analytics dashboards on a laptop screen",
      remote: true,
    },
    wide: true,
  },
];

function Photo({ img, sizes }: { img: Service["image"]; sizes: string }) {
  return img.remote ? (
    // Remote stock photo: plain img keeps next.config untouched.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={img.src} alt={img.alt} loading="lazy" width={900} height={600} />
  ) : (
    <Image src={img.src} alt={img.alt} fill sizes={sizes} style={{ objectPosition: img.position }} />
  );
}

/** The six services as a bento grid: two wide feature cards, four compact cards and a call to action. */
export default function ServiceGrid() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <Reveal>
          <p className={s.eyebrow}>What we do</p>
          <h2 id="services-list-title" className={`${s.title} mt-4`}>
            Six ways <span className={s.grad}>we can help.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className={s.lede}>
            Pick one, or combine them. Every service comes with the same team, the same standards and
            one point of contact.
          </p>
        </Reveal>
      </div>

      <div className={`${v.bento} mt-10`}>
        {SERVICES.map((sv, i) => (
          <Reveal key={sv.id} delay={(i % 3) * 80} className={sv.wide ? v.span2 : undefined}>
            <article id={sv.id} className={`${v.svc} ${sv.wide ? v.svcWide : ""}`} aria-labelledby={`${sv.id}-title`}>
              <div className={v.svcMedia}>
                <Photo img={sv.image} sizes={sv.wide ? "(min-width: 1024px) 420px, 92vw" : "(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw"} />
                <span className={v.svcNum} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={v.svcBody}>
                <span className={v.svcIcon} aria-hidden>
                  <sv.icon size={20} />
                </span>
                <h3 id={`${sv.id}-title`} className={v.svcName}>
                  {sv.name}
                </h3>
                <p className={v.svcTag}>{sv.tagline}</p>
                <p className={v.svcText}>{sv.text}</p>
                <ul className={v.svcList}>
                  {sv.deliver.map((d) => (
                    <li key={d}>
                      <Check size={13} strokeWidth={3} aria-hidden /> {d}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsapp(`Hello Phantomire! I'd like to discuss ${sv.name.toLowerCase()} for my project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={v.svcGo}
                >
                  <MessageCircle size={15} /> Discuss this <ArrowUpRight size={15} className={v.svcGoArrow} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={160}>
          <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={v.svcCta}>
            <span className={s.solCtaIcon} aria-hidden>
              <MessageCircle size={22} />
            </span>
            <span>
              <span className="block text-[22px] font-bold leading-tight tracking-[-0.02em]">Not sure where you fit?</span>
              <span className="mt-2 block text-[14.5px] leading-relaxed text-white/75">
                Tell us the problem. We&rsquo;ll recommend the right mix of services and send a clear quote.
              </span>
            </span>
            <span className={s.solCtaGo}>
              Start a project <ArrowRight size={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </>
  );
}
