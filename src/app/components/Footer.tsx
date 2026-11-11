import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/solutions", label: "Solutions" },
      { href: "/events", label: "Events" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "What we build",
    links: [
      { href: "/services#software", label: "Software development" },
      { href: "/services#ai", label: "AI solutions" },
      { href: "/services#digital", label: "Digital products" },
      { href: "/services#creative", label: "Creative & brand" },
    ],
  },
  {
    title: "Academy",
    links: [
      { href: "/courses", label: "Courses" },
      { href: "/register", label: "Register" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

const SOCIALS = [
  { href: "https://twitter.com/phantomire01", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/phantomire01", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/phantomire", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com/company/phantomire", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@phantomire01", icon: Youtube, label: "YouTube" },
  { href: "https://wa.me/2349161460898", icon: MessageCircle, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#08070e] text-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-8 pt-14 lg:px-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,0.8fr)_1.1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" width={40} height={44} className="h-10 w-auto" />
              <span className="text-[17px] font-bold tracking-tight">Phantomire</span>
            </Link>
            <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed text-white/55">
              Technology solutions for businesses, organizations and people, built with empathy
              and integrity.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/65 transition-colors hover:border-[#a33bff] hover:bg-[#a33bff] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#cfa8ff]">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#cfa8ff]">Get in touch</h2>
            <ul className="mt-5 space-y-3 text-[14px] text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-none text-[#c084fc]" aria-hidden />
                Epe, Lagos, Nigeria
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 flex-none text-[#c084fc]" aria-hidden />
                <a href="mailto:info.phantomire@gmail.com" className="break-all transition-colors hover:text-white">
                  info.phantomire@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 flex-none text-[#c084fc]" aria-hidden />
                <a
                  href="https://wa.me/2349161460898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  +234 916 146 0898
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Phantomire Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/faq" className="transition-colors hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
