"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  MessageCircle,
  Palette,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCountdown } from "./event/Countdown";
import { LAUNCH } from "../lib/launch";
import { COURSES } from "../lib/courses";
import { START_PROJECT } from "../lib/site";
import h from "./header.module.css";

type Sub = { href: string; label: string; text: string; icon: LucideIcon };

const SERVICES: Sub[] = [
  { href: "/services#software", label: "Software development", text: "Web, mobile and business systems", icon: Code2 },
  { href: "/services#ai", label: "AI & automation", text: "Assistants, automation, insight", icon: BrainCircuit },
  { href: "/services#digital", label: "Digital products", text: "From idea to launch", icon: Layers3 },
  { href: "/services#creative", label: "Creative & brand", text: "Identity, interfaces, motion", icon: Palette },
  { href: "/services#security", label: "Cybersecurity", text: "Assess, test and protect", icon: ShieldCheck },
  { href: "/services#analytics", label: "Data analytics", text: "Dashboards and decisions", icon: BarChart3 },
];

const FEATURED_COURSES: Sub[] = COURSES.slice(0, 6).map((c) => ({
  href: "/courses#catalog",
  label: c.title,
  text: `${c.duration} · ${c.level}`,
  icon: c.icon,
}));

type NavItem = { href: string; label: string; menu?: "services" | "courses"; live?: boolean };

/** The logo takes you home, so there is no "Home" link. */
const NAV: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services", menu: "services" },
  { href: "/courses", label: "Courses", menu: "courses" },
  { href: "/events", label: "Events", live: true },
  { href: "/contact", label: "Contact" },
];

/** Green dot on "Events" while the launch is still ahead. */
function LaunchDot() {
  const left = useCountdown(LAUNCH.startsAt, LAUNCH.endsAt);
  if (!left || left.over) return null;
  return <span className={h.liveDot} aria-label="Upcoming event" role="img" />;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<NavItem["menu"] | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<NavItem["menu"] | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes whatever is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isOn = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  /** Slides the hover pill under `el` (or hides it). Written straight to the DOM: no re-render. */
  const movePill = (el: HTMLElement | null) => {
    const pill = pillRef.current;
    const nav = navRef.current;
    if (!pill || !nav) return;
    if (!el) {
      pill.style.opacity = "0";
      return;
    }
    const r = el.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    pill.style.width = `${r.width}px`;
    pill.style.transform = `translateX(${r.left - n.left}px)`;
    pill.style.opacity = "1";
  };

  const openMenu = (m: NavItem["menu"] | null) => {
    window.clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const closeMenuSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 140);
  };

  const closeAll = () => {
    setMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`${h.shell} ${scrolled ? h.scrolled : ""}`}>
        <div className={h.bar}>
          <Link href="/" className={h.logo} aria-label="Phantomire Technologies, home" onClick={closeAll}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" width={30} height={30} />
            <span className={h.logoText}>Phantomire</span>
          </Link>

          {/* ---------- Desktop links ---------- */}
          <nav ref={navRef} className={h.nav} aria-label="Main" onMouseLeave={() => movePill(null)}>
            <span ref={pillRef} className={h.hover} aria-hidden />
            {NAV.map((item) => {
              const on = isOn(item.href);
              if (!item.menu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${h.link} ${on ? h.linkOn : ""}`}
                    aria-current={on ? "page" : undefined}
                    onMouseEnter={(e) => {
                      movePill(e.currentTarget);
                      openMenu(null);
                    }}
                    onFocus={(e) => movePill(e.currentTarget)}
                    onClick={closeAll}
                  >
                    {item.label}
                    {item.live && <LaunchDot />}
                  </Link>
                );
              }

              const open = menu === item.menu;
              const items = item.menu === "services" ? SERVICES : FEATURED_COURSES;
              return (
                <div key={item.href} className={h.item} onMouseEnter={() => openMenu(item.menu)} onMouseLeave={closeMenuSoon}>
                  <button
                    type="button"
                    className={`${h.link} ${on ? h.linkOn : ""} ${open ? h.linkOpen : ""}`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onMouseEnter={(e) => movePill(e.currentTarget)}
                    onFocus={(e) => movePill(e.currentTarget)}
                    onClick={() => setMenu(open ? null : item.menu)}
                  >
                    {item.label}
                    <ChevronDown size={15} className={h.chev} aria-hidden />
                  </button>

                  {open && (
                    <div className={h.panel} role="menu">
                      <div className={h.panelGrid}>
                        {items.map((s) => (
                          <Link key={s.label} href={s.href} className={h.panelLink} role="menuitem" onClick={closeAll}>
                            <span className={h.panelIcon} aria-hidden>
                              <s.icon size={18} />
                            </span>
                            <span>
                              <span className={h.panelName}>{s.label}</span>
                              <span className={h.panelText}>{s.text}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className={h.panelFoot}>
                        {item.menu === "services" ? (
                          <p>
                            <b>Not sure what you need?</b>Tell us the problem, we&rsquo;ll suggest the mix.
                          </p>
                        ) : (
                          <p>
                            <b>Next batch coming soon</b>All {COURSES.length} courses, with full details.
                          </p>
                        )}
                        <Link href={item.href} className={h.panelGo} onClick={closeAll}>
                          {item.menu === "services" ? "All services" : "All courses"} <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ---------- Actions ---------- */}
          <div className={h.actions}>
            <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={h.cta}>
              <span className={h.ctaLabelLong}>Start a project</span>
              <span className={h.ctaLabelShort}>Let&rsquo;s talk</span>
              <ArrowRight size={15} />
            </a>
            <button
              type="button"
              className={h.burger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ---------- Mobile sheet ---------- */}
        {mobileOpen && (
          <nav className={h.sheet} aria-label="Main">
            {NAV.map((item) => {
              const on = isOn(item.href);
              if (!item.menu) {
                return (
                  <Link key={item.href} href={item.href} className={`${h.mLink} ${on ? h.mLinkOn : ""}`} onClick={closeAll}>
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.live && <LaunchDot />}
                    </span>
                    <ArrowRight size={17} className="text-[#b9b4c8]" aria-hidden />
                  </Link>
                );
              }
              const open = mobileSub === item.menu;
              const items = item.menu === "services" ? SERVICES : FEATURED_COURSES;
              return (
                <div key={item.href}>
                  <button
                    type="button"
                    className={`${h.mLink} ${on ? h.mLinkOn : ""}`}
                    aria-expanded={open}
                    onClick={() => setMobileSub(open ? null : item.menu)}
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                  <div className={`${h.mSub} ${open ? h.mSubOpen : ""}`}>
                    <div className={h.mSubInner}>
                      <div className={h.mSubList}>
                        {items.map((s) => (
                          <Link key={s.label} href={s.href} className={h.mSubLink} onClick={closeAll} tabIndex={open ? 0 : -1}>
                            <s.icon size={16} aria-hidden /> {s.label}
                          </Link>
                        ))}
                        <Link href={item.href} className={`${h.mSubLink} font-bold !text-[#7b24e3]`} onClick={closeAll} tabIndex={open ? 0 : -1}>
                          {item.menu === "services" ? "All services" : `All ${COURSES.length} courses`} <ArrowRight size={15} aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={h.mActions}>
              <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={`${h.mBtn} ${h.mBtnPrimary}`} onClick={closeAll}>
                <MessageCircle size={18} /> Start a project
              </a>
            </div>
          </nav>
        )}
      </header>

    </>
  );
}
