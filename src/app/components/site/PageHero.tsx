import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import s from "./ui.module.css";

type Props = {
  /** Breadcrumb label for this page, e.g. "About". */
  crumb: string;
  eyebrow: string;
  /** The H1. Wrap the highlighted words in <Grad>. */
  title: ReactNode;
  lede: ReactNode;
  actions?: ReactNode;
  image: { src: string; alt: string; position?: string };
  /** Small floating card on the photo. */
  badge?: { icon: LucideIcon; title: string; text: string };
};

/** Highlighted words in a page title. */
export function Grad({ children }: { children: ReactNode }) {
  return <span className={s.grad}>{children}</span>;
}

/** Header for inner pages: breadcrumb, title, intro and a medium photo. */
export default function PageHero({ crumb, eyebrow, title, lede, actions, image, badge }: Props) {
  const BadgeIcon = badge?.icon;
  return (
    <section className={`${s.section} ${s.light} ${s.pageHero}`} aria-labelledby="page-title">
      <div className={`${s.wrap} ${s.pad}`}>
        <div className={s.pageHeroGrid}>
          <div className={s.over}>
            <Reveal>
              <nav aria-label="Breadcrumb" className={s.crumbs}>
                <Link href="/">Home</Link>
                <ChevronRight size={14} aria-hidden />
                <span aria-current="page" className="font-medium text-[#14121c]">
                  {crumb}
                </span>
              </nav>
              <p className={`${s.eyebrow} mt-8`}>{eyebrow}</p>
              <h1 id="page-title" className={`${s.pageTitle} mt-4`}>
                {title}
              </h1>
              <p className={`${s.lede} mt-5`}>{lede}</p>
              {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
            </Reveal>
          </div>

          <Reveal from="right" delay={120}>
            <div className={s.pageHeroArt}>
              <div className={s.pageHeroFrame}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 92vw"
                  style={{ objectPosition: image.position }}
                />
              </div>
              {badge && BadgeIcon && (
                <div className={s.floatCard}>
                  <span className={s.floatIcon} aria-hidden>
                    <BadgeIcon size={20} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold leading-tight">{badge.title}</span>
                    <span className="mt-0.5 block text-[12.5px] text-[#5a5766]">{badge.text}</span>
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
