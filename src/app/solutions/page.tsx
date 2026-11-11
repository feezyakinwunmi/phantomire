import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Layers, Plus } from "lucide-react";
import PageHero, { Grad } from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import FinalCta from "../components/home/FinalCta";
import ProductMark from "../components/solutions/ProductMark";
import WorkbaseShowcase from "../components/solutions/WorkbaseShowcase";
import { GROUPS, SOLUTIONS, byGroup } from "../lib/solutions";
import { START_PROJECT } from "../lib/site";
import s from "../components/site/ui.module.css";
import x from "../components/solutions/solutions.module.css";

export const metadata: Metadata = {
  title: "Solutions | Workbase, Vesphe, Pearlvix, DOMNI | Phantomire Technologies",
  description:
    "The technology Phantomire builds: the Workbase suite (Workbase, Workbase Meet, Workbase Book, Workbase Form), everyday products like Vesphe, Pearlvix and DOMNI, and platforms for our clients.",
};

export default function SolutionsPage() {
  const products = byGroup("product");
  const clients = byGroup("client");

  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <PageHero
        crumb="Solutions"
        eyebrow="What we've built"
        title={
          <>
            We don&rsquo;t just teach technology. <Grad>We build it.</Grad>
          </>
        }
        lede="From tools that run the workplace to products for how people eat, pay and gather, every Phantomire solution starts with a real problem and ends with something people can use."
        actions={
          <>
            <a href="#workbase" className={s.btn}>
              Explore Workbase <ArrowRight size={17} />
            </a>
            <a href="#clients" className={s.btnGhost}>
              See client work
            </a>
          </>
        }
        image={{
          src: "/home/service-software.webp",
          alt: "A woman working on a tablet in a corridor beside glowing server racks",
          position: "65% 50%",
        }}
        badge={{ icon: Layers, title: `${SOLUTIONS.length} solutions`, text: "Across 3 categories" }}
      />

      {/* ---------- Category jump links ---------- */}
      <section className={`${s.section} ${s.light}`} aria-label="Solution categories">
        <div className={`${s.wrap} pb-12 lg:pb-16`}>
          <nav className={x.groupNav}>
            {GROUPS.map((g, i) => (
              <Reveal key={g.id} delay={i * 80}>
                <a href={`#${g.anchor}`} className={x.groupLink}>
                  <span className={x.groupNum} aria-hidden>
                    0{i + 1}
                  </span>
                  <span>
                    <span className={x.groupName}>{g.label}</span>
                    <span className={x.groupText}>{g.text}</span>
                  </span>
                  <span className={x.groupCount}>{byGroup(g.id).length}</span>
                </a>
              </Reveal>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- 01 · Workbase suite ---------- */}
      <section
        id="workbase"
        className={`${s.section} ${s.dark} ${s.arc} ${s.fromLight} scroll-mt-16`}
        aria-labelledby="workbase-title"
      >
        <div className={`${s.dots} ${s.lgOnly}`} style={{ left: "-3%", bottom: "8%", width: 300, height: 240 }} aria-hidden />
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <Reveal className={s.over}>
              <p className={s.eyebrow}>01 · The Workbase suite</p>
              <h2 id="workbase-title" className={`${s.title} mt-4`}>
                Run your whole workplace <span className={s.grad}>from one base.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Four tools that work on their own and work better together: know your team is
                working, meet without dropped calls, take bookings and payments, and collect
                anything with a form.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-12">
            <WorkbaseShowcase />
          </Reveal>
        </div>
      </section>

      {/* ---------- 02 · Everyday products ---------- */}
      <section
        id="products"
        className={`${s.section} ${s.light} ${s.arc} ${s.fromDark} scroll-mt-16`}
        aria-labelledby="products-title"
      >
        <div className={`${s.wrap} ${s.padArc}`}>
          <Reveal className="max-w-[640px]">
            <p className={s.eyebrow}>02 · Everyday products</p>
            <h2 id="products-title" className={`${s.title} mt-4`}>
              Built for <span className={s.grad}>real life.</span>
            </h2>
            <p className={`${s.lede} mt-5`}>
              Products for how people eat, pay and gather, each preparing for launch or under
              active development.
            </p>
          </Reveal>

          <div className="mt-14 space-y-20 lg:mt-16 lg:space-y-28">
            {products.map((p, i) => (
              <div key={p.id} className={`${x.prod} ${i % 2 ? x.prodFlip : ""}`}>
                <Reveal from={i % 2 ? "right" : "left"}>
                  <div className={x.prodArt}>
                    <div className={x.prodFrame}>
                      {p.image && (
                        <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 560px, 92vw" />
                      )}
                      <span className={x.prodNum} aria-hidden>
                        0{i + 1}
                      </span>
                      <span className={`${x.prodBadge} ${p.status === "Coming soon" ? x.prodBadgeSoon : ""}`}>
                        <i aria-hidden /> {p.status}
                      </span>
                    </div>
                    <span className={x.prodMarkFloat}>
                      <ProductMark sol={p} size={80} />
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <p className={x.prodCat}>{p.category}</p>
                  <h3 className={x.prodName}>{p.name}</h3>
                  <p className={x.prodHeadline}>{p.headline}</p>
                  <p className={x.prodText}>{p.text}</p>
                  <ul className={x.prodFeats}>
                    {p.features.map((f) => (
                      <li key={f}>
                        <Check size={18} strokeWidth={3} aria-hidden /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className={s.btn}>
                        Visit {p.name} <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <Link href="/contact" className={s.btnGhost}>
                        Get launch updates <ArrowRight size={17} />
                      </Link>
                    )}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 03 · Client projects ---------- */}
      <section
        id="clients"
        className={`${s.section} ${s.tint} ${s.arc} ${s.fromLight} scroll-mt-16`}
        aria-labelledby="clients-title"
      >
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <Reveal>
              <p className={s.eyebrow}>03 · Client projects</p>
              <h2 id="clients-title" className={`${s.title} mt-4`}>
                Digital experiences <span className={s.grad}>we&rsquo;ve engineered.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={s.lede}>
                Beyond our own products, we design and build platforms for organisations, brands
                and creative businesses.
              </p>
            </Reveal>
          </div>

          <div className={`${s.solGrid} mt-10`}>
            {clients.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className={s.solCell}>
                {(() => {
                  const inner = (
                    <>
                      <div className={s.solMedia}>
                        {c.image && (
                          <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 82vw" />
                        )}
                        <span className={`${s.solBadge} ${s.solBadgeClient}`}>
                          <i aria-hidden /> Client project
                        </span>
                        {c.href && (
                          <span className={s.solGo} aria-hidden>
                            <ArrowUpRight size={16} />
                          </span>
                        )}
                      </div>
                      <div className={s.solBody}>
                        <p className={s.solCat}>{c.category}</p>
                        <h3 className={s.solName}>{c.name}</h3>
                        <p className={s.solText}>{c.text}</p>
                        {c.href && (
                          <span className={s.solLink}>
                            {c.href.replace(/^https?:\/\/(www\.)?/, "")} <ArrowUpRight size={15} />
                          </span>
                        )}
                      </div>
                    </>
                  );
                  return c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className={s.sol}>
                      {inner}
                    </a>
                  ) : (
                    <div className={s.sol}>{inner}</div>
                  );
                })()}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <a href={START_PROJECT} target="_blank" rel="noopener noreferrer" className={`${s.partner} !bg-[#14121c] text-white`}>
              <span className="flex items-center gap-4">
                <span className={s.solCtaIcon} aria-hidden>
                  <Plus size={22} />
                </span>
                <span>
                  <span className="block text-[18px] font-bold tracking-[-0.02em]">Your platform could be next.</span>
                  <span className="mt-1 block text-[14px] text-white/70">
                    Tell us the problem. We&rsquo;ll design and build the technology around it.
                  </span>
                </span>
              </span>
              <span className={s.solCtaGo}>
                Start a project <ArrowRight size={16} />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
