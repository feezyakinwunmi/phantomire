'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Smartphone,
  ShieldCheck,
  Ticket,
  Utensils,
  Code2,
  Sparkles,
  Rocket,
  Zap,
  Star,
  Users,
  Layers,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// ============================================================
// ORBIT VISUAL COMPONENT
// ============================================================
const OrbitVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Orbiting particles
    const particles: {
      angle: number;
      radius: number;
      size: number;
      speed: number;
      color: string;
      orbitRadius: number;
    }[] = [];

    const colors = ['rgba(139,92,246,0.8)', 'rgba(99,102,241,0.6)', 'rgba(168,85,247,0.7)'];

    for (let i = 0; i < 30; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 30 + Math.random() * 120,
        size: 2 + Math.random() * 4,
        speed: 0.005 + Math.random() * 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
        orbitRadius: 80 + Math.random() * 100,
      });
    }

    // Central glow particles
    const glowParticles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
    }[] = [];

    for (let i = 0; i < 15; i++) {
      glowParticles.push({
        x: (Math.random() - 0.5) * 60,
        y: (Math.random() - 0.5) * 60,
        size: 1 + Math.random() * 2,
        speed: 0.01 + Math.random() * 0.02,
        angle: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      time += 0.005;

      // Draw orbit rings
      for (let ring = 0; ring < 3; ring++) {
        const ringRadius = 80 + ring * 60;
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139,92,246,${0.06 + ring * 0.02})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw particles on orbits
      particles.forEach((p) => {
        p.angle += p.speed * (isHovering ? 1.5 : 1);

        const x = centerX + Math.cos(p.angle + time * 0.3) * (p.orbitRadius + Math.sin(time * 0.5 + p.angle) * 15);
        const y = centerY + Math.sin(p.angle + time * 0.3) * (p.orbitRadius + Math.cos(time * 0.5 + p.angle) * 15);

        // Glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(139,92,246,0)');

        ctx.beginPath();
        ctx.arc(x, y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = 'rgba(139,92,246,0.5)';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connection lines between nearby particles
        particles.forEach((p2) => {
          if (p === p2) return;
          const dx = x - (centerX + Math.cos(p2.angle + time * 0.3) * (p2.orbitRadius + Math.sin(time * 0.5 + p2.angle) * 15));
          const dy = y - (centerY + Math.sin(p2.angle + time * 0.3) * (p2.orbitRadius + Math.cos(time * 0.5 + p2.angle) * 15));
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(centerX + Math.cos(p2.angle + time * 0.3) * (p2.orbitRadius + Math.sin(time * 0.5 + p2.angle) * 15), centerY + Math.sin(p2.angle + time * 0.3) * (p2.orbitRadius + Math.cos(time * 0.5 + p2.angle) * 15));
            ctx.strokeStyle = `rgba(139,92,246,${0.05 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Central glow
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 80);
      centerGradient.addColorStop(0, 'rgba(139,92,246,0.15)');
      centerGradient.addColorStop(0.5, 'rgba(99,102,241,0.08)');
      centerGradient.addColorStop(1, 'rgba(139,92,246,0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.fillStyle = centerGradient;
      ctx.fill();

      // Central glow particles
      glowParticles.forEach((p) => {
        p.angle += p.speed;
        const x = centerX + p.x + Math.cos(p.angle) * 10;
        const y = centerY + p.y + Math.sin(p.angle) * 10;
        const opacity = 0.3 + 0.3 * Math.sin(time * 2 + p.angle);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${opacity})`;
        ctx.shadowColor = 'rgba(139,92,246,0.3)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Center core
      const corePulse = 0.8 + 0.2 * Math.sin(time * 1.5);
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 12 * corePulse);
      coreGradient.addColorStop(0, 'rgba(139,92,246,0.6)');
      coreGradient.addColorStop(0.5, 'rgba(99,102,241,0.3)');
      coreGradient.addColorStop(1, 'rgba(139,92,246,0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12 * corePulse, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.8)';
      ctx.shadowColor = 'rgba(139,92,246,0.8)';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isHovering]);

  return (
    <div
      className="relative w-full h-full min-h-[300px] lg:min-h-[400px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

// ============================================================
// PRODUCTS DATA
// ============================================================
const products = [
  {
    name: 'Vesphe',
    category: 'Food · Health · AI',
    status: 'Coming Soon',
    description:
      'A smarter food ordering and delivery platform designed around the way people eat, live, and achieve their health goals.',
    longDescription:
      'Vesphe combines food delivery with personalized health guidance, helping users make better decisions before they order.',
    icon: Utensils,
    website: 'https://vesphe.com',
    store: '#',
    image: '/images/solutions/vesphe.png',
    features: ['Smart food ordering', 'Personalized health guidance', 'AI-powered recommendations', 'Food delivery & logistics'],
  },
  {
    name: 'DOMNI',
    category: 'Events · Ticketing · SaaS',
    status: 'Coming Soon',
    description:
      'A modern event ticketing platform built to make creating, managing, discovering, and attending events simpler.',
    longDescription:
      'DOMNI gives event organizers the tools they need to create events, manage tickets, reach attendees, and deliver seamless event experiences.',
    icon: Ticket,
    website: '#',
    store: '#',
    image: '/images/solutions/domni.png',
    features: ['Event creation', 'Digital ticketing', 'Event management', 'Attendee experience'],
  },
  {
    name: 'Pearlvix',
    category: 'Fintech · Escrow · Trust',
    status: 'In Development',
    description:
      'A digital escrow platform designed to make online transactions safer by creating a trusted layer between buyers and sellers.',
    longDescription:
      'Pearlvix was built around one simple idea: people should be able to transact online without constantly worrying about scams.',
    icon: ShieldCheck,
    website: '#',
    store: '#',
    image: '/images/solutions/pearlvix.png',
    features: ['Secure escrow transactions', 'Buyer & seller protection', 'Transaction verification', 'Trust-focused marketplace tools'],
  },
];

const loProjects = [
  {
    name: 'LO Media House',
    url: 'https://www.lomediahouse.com',
    category: 'Media · Brand · Digital',
    description:
      'A premium digital experience for LO Media House, built around its media, branding, content, and digital authority ecosystem.',
  },
  {
    name: 'LO Media Studio',
    url: 'https://www.lomediastudio.com',
    category: 'Creative · Production',
    description:
      'A digital home for LO Media Studio, showcasing its creative production, visual storytelling, and premium media services.',
  },
  {
    name: 'LO Publications',
    url: '#',
    category: 'Publishing · Editorial',
    description:
      'A digital publishing experience created for the LO ecosystem, supporting publications, editorial work, and creative storytelling.',
  },
  {
    name: 'LO Platform',
    url: '#',
    category: 'Technology · SaaS',
    description:
      'A technology-focused digital experience built around tools and systems for modern content operations and digital growth.',
  },
];

// ============================================================
// MAIN SOLUTIONS PAGE
// ============================================================
export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">

      {/* =========================================================
          HERO WITH ORBIT VISUAL
      ========================================================= */}
      <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[15%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full pt-20">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 mb-6">
                <Sparkles size={13} />
                What we've built
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-[0.95] tracking-[-0.05em] font-semibold">
                We don't just teach
                <span className="block text-white/40">
                  technology.
                </span>
                <span className="block">
                  We build it.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/50">
                From fintech and food technology to event platforms and
                digital experiences, Phantomire turns ideas into real
                technology built to solve real problems.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
                >
                  Explore our solutions
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="#digital"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 transition"
                >
                  Digital experiences
                </a>
              </div>
            </motion.div>

            {/* Right - Orbit Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <OrbitVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400">
              Beyond education
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl tracking-tight font-semibold">
              Ideas become
              <span className="text-white/40"> products.</span>
            </h2>
          </div>

          <div className="space-y-4 text-white/50 text-base leading-relaxed">
            <p>
              Phantomire exists at the intersection of education,
              technology, and innovation. While we equip people with
              digital skills, we also apply those skills to building
              products that address everyday problems.
            </p>

            <p>
              These are some of the products, platforms, and digital
              experiences we have designed and developed across our
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================= */}
      <section id="products" className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400">
                Our products
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                Built for the
                <br />
                <span className="text-white/40">real world.</span>
              </h2>
            </div>

            <p className="max-w-md text-white/40 text-sm leading-relaxed">
              Products currently being developed within the Phantomire
              ecosystem. Some are preparing for launch while others
              remain under active development.
            </p>
          </div>

          <div className="space-y-6">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
                >
                  <div className="grid lg:grid-cols-[1.05fr_1fr]">
                    {/* Image */}
                    <div className="relative min-h-[280px] lg:min-h-[400px] bg-[#111] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={60} strokeWidth={1} className="text-white/10" />
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] text-white/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {product.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-purple-400 uppercase tracking-wider">
                            {product.category}
                          </span>

                          <Icon size={20} strokeWidth={1.5} className="text-white/30" />
                        </div>

                        <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">
                          {product.name}
                        </h3>

                        <p className="mt-3 text-sm text-white/60 leading-relaxed">
                          {product.description}
                        </p>

                        <p className="mt-3 text-xs text-white/35 leading-relaxed">
                          {product.longDescription}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-2 mt-5">
                          {product.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-xs text-white/50"
                            >
                              <div className="w-1 h-1 rounded-full bg-purple-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-8">
                        {product.website !== '#' && (
                          <a
                            href={product.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-xs font-medium"
                          >
                            Visit website
                            <ExternalLink size={13} />
                          </a>
                        )}

                        {product.store !== '#' && (
                          <a
                            href={product.store}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs text-white/70 hover:bg-white/5"
                          >
                            <Smartphone size={13} />
                            Coming to stores
                          </a>
                        )}

                        {product.website === '#' && (
                          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs text-white/40">
                            <Rocket size={13} />
                            Launching soon
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATUS
      ========================================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['01', 'Live', 'Digital experiences already serving real users.'],
              ['02', 'Coming Soon', 'Products approaching their public launch.'],
              ['03', 'In Development', 'Ideas currently being engineered and refined.'],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t border-white/10 pt-5">
                <span className="text-xs text-white/20">{number}</span>

                <h3 className="mt-4 text-xl font-medium">{title}</h3>

                <p className="mt-2 text-sm text-white/40 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LO MEDIA
      ========================================================= */}
      <section id="digital" className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400">
              Selected digital work
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Digital experiences
              <span className="block text-white/40">we've engineered.</span>
            </h2>

            <p className="mt-4 text-sm text-white/45 leading-relaxed">
              Beyond our own products, Phantomire has contributed to
              building digital experiences for organisations, brands,
              and creative businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {loProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url !== '#' ? project.url : undefined}
                target={project.url !== '#' ? '_blank' : undefined}
                rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-7 hover:bg-white/[0.045] transition ${
                  project.url === '#' ? 'cursor-default' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    <Globe size={17} className="text-white/60" />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`text-white/20 transition ${
                      project.url !== '#' ? 'group-hover:text-white' : 'opacity-30'
                    }`}
                  />
                </div>

                <p className="mt-8 text-[10px] text-purple-400 uppercase tracking-wider">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl md:text-2xl font-medium">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm text-white/40 leading-relaxed">
                  {project.description}
                </p>

                {project.url !== '#' && (
                  <p className="mt-4 text-xs text-white/25">
                    {project.url.replace('https://', '')}
                  </p>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY STATEMENT
      ========================================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-12">
            <div className="absolute right-[-80px] top-[-80px] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]" />

            <div className="relative max-w-3xl">
              <Code2 size={28} strokeWidth={1.5} className="text-purple-400" />

              <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
                Technology should
                <span className="text-white/40"> solve something.</span>
              </h2>

              <p className="mt-4 text-sm text-white/45 leading-relaxed">
                Every product we build starts with a problem. We combine
                research, strategy, design, engineering, and iteration
                to turn those problems into useful digital experiences.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Build with Phantomire
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400">
            Have an idea?
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.04em]">
            Let's build
            <span className="text-white/30"> something real.</span>
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-white/40 text-sm">
            Whether you have a product idea, a business problem, or a
            digital experience in mind, our team can help turn it into
            something people can actually use.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-7 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            Start a conversation
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

    </main>
  );
}