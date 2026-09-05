// app/services/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Palette,
  Smartphone,
  Globe2,
  Database,
  Bot,
  GraduationCap,
  Play,
  Layers3,
  Check,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Target,
  PenTool,
  Cpu,
  Network,
  Workflow,
} from "lucide-react";

// ============================================================
// 3D CUBE WITH AI EFFECTS COMPONENT
// ============================================================
const TechVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
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
    window.addEventListener("resize", resizeCanvas);

    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    const particles: {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      angle: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 4,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.01 + 0.005,
        angle: Math.random() * Math.PI * 2,
      });
    }

    const rings: {
      radius: number;
      maxRadius: number;
      opacity: number;
      speed: number;
    }[] = [];

    for (let i = 0; i < 3; i++) {
      rings.push({
        radius: 30,
        maxRadius: 150 + i * 50,
        opacity: 0,
        speed: 0.5 + i * 0.3,
      });
    }

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      time += 0.005;

      const rotX = time * 0.3 + (isHovering ? 0.5 : 0);
      const rotY = time * 0.5 + (isHovering ? 0.3 : 0);
      const rotZ = time * 0.1;

      const projected: { x: number; y: number; z: number }[] = [];

      vertices.forEach((v) => {
        let x = v[0];
        let y = v[1];
        let z = v[2];

        let cosX = Math.cos(rotX);
        let sinX = Math.sin(rotX);
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        y = y1;
        z = z1;

        let cosY = Math.cos(rotY);
        let sinY = Math.sin(rotY);
        let x1 = x * cosY + z * sinY;
        let z2 = -x * sinY + z * cosY;
        x = x1;
        z = z2;

        let cosZ = Math.cos(rotZ);
        let sinZ = Math.sin(rotZ);
        let x2 = x * cosZ - y * sinZ;
        let y2 = x * sinZ + y * cosZ;
        x = x2;
        y = y2;

        const scale = 180;
        const perspective = 300;
        const factor = perspective / (perspective + z);

        projected.push({
          x: centerX + x * scale * factor,
          y: centerY + y * scale * factor,
          z: z,
        });
      });

      edges.forEach((edge) => {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];

        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        const alpha = 0.3 + 0.2 * Math.sin(time * 2 + edge[0]);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${alpha * 1.2})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5 + 0.5 * Math.sin(time * 3 + edge[0]);
        ctx.shadowColor = "rgba(139, 92, 246, 0.3)";
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      projected.forEach((p, i) => {
        const pulse = 0.7 + 0.3 * Math.sin(time * 2 + i);
        const radius = 3 + 2 * pulse;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${0.8 * pulse})`);
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${0.4 * pulse})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.6 + 0.4 * pulse})`;
        ctx.shadowColor = "rgba(139, 92, 246, 0.8)";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      rings.forEach((ring, index) => {
        ring.radius += ring.speed * 0.5;
        ring.opacity = 0.3 * (1 - ring.radius / ring.maxRadius);

        if (ring.radius > ring.maxRadius) {
          ring.radius = 30;
          ring.opacity = 0.3;
        }

        if (ring.opacity > 0) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(139, 92, 246, ${ring.opacity})`;
          ctx.lineWidth = 1.5 - ring.radius / ring.maxRadius;
          ctx.shadowColor = `rgba(139, 92, 246, ${ring.opacity * 0.5})`;
          ctx.shadowBlur = 20;
          ctx.stroke();
          ctx.shadowBlur = 0;

          const numDashes = 6;
          for (let i = 0; i < numDashes; i++) {
            const angle = (i / numDashes) * Math.PI * 2 + time * 0.5;
            const x = centerX + ring.radius * Math.cos(angle);
            const y = centerY + ring.radius * Math.sin(angle);
            const dashLength = 8;
            const x2 = centerX + (ring.radius + dashLength) * Math.cos(angle);
            const y2 = centerY + (ring.radius + dashLength) * Math.sin(angle);
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(139, 92, 246, ${ring.opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      particles.forEach((p) => {
        p.angle += p.speed;

        const radius = 2.5 + Math.sin(time + p.angle) * 0.5;
        const x = centerX + Math.cos(p.angle + time) * radius * 120;
        const y = centerY + Math.sin(p.angle + time * 0.7) * radius * 100;

        const opacity = 0.3 + 0.2 * Math.sin(time * 2 + p.angle);
        const size = p.size * (0.5 + 0.5 * Math.sin(time + p.angle));

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.shadowColor = `rgba(139, 92, 246, ${opacity * 0.5})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const labelOpacity = 0.6 + 0.3 * Math.sin(time * 0.7);
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = `rgba(139, 92, 246, ${labelOpacity * 0.3})`;
      ctx.shadowColor = `rgba(139, 92, 246, ${labelOpacity * 0.2})`;
      ctx.shadowBlur = 30;
      ctx.fillText("● AI ENGINE", centerX, height - 60);
      
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(255, 255, 255, ${labelOpacity * 0.4})`;
      ctx.font = "10px monospace";
      ctx.fillText("ACTIVE • PROCESSING", centerX, height - 40);

      for (let i = 0; i < 5; i++) {
        const x = centerX - 40 + i * 20;
        const y = height - 20;
        const dotOpacity = 0.2 + 0.3 * Math.sin(time * 2 + i * 1.2);
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${dotOpacity})`;
        ctx.shadowColor = `rgba(139, 92, 246, ${dotOpacity * 0.5})`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovering]);

  return (
    <div 
      className="relative w-full h-full min-h-[380px] lg:min-h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute top-5 left-5 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-mono text-white/70">AI SYSTEM ONLINE</span>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 bg-purple-400/50 rounded-full"
                style={{
                  height: `${8 + i * 6}px`,
                  animation: `signal-pulse 1.5s ease-in-out ${i * 0.3}s infinite`,
                }}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-white/30 tracking-wider">SIGNAL</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes signal-pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};

// ============================================================
// WHATSAPP LINK HELPER
// ============================================================
const getWhatsAppLink = (serviceTitle: string, serviceSubtitle: string) => {
  const phone = "2349161460898";
  const message = `Hello Phantomire Technologies! I'm interested in your ${serviceTitle} ${serviceSubtitle} services. I'd like to discuss how you can help with my project.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// ============================================================
// SERVICE CARD WITH IRREGULAR SHAPES
// ============================================================
const ServiceCard = ({ 
  service, 
  index,
  isDark = false,
}: { 
  service: any;
  index: number;
  isDark?: boolean;
}) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;
  const whatsappLink = getWhatsAppLink(service.title, service.subtitle);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isDark ? 'bg-[#111312] text-white' : 'bg-white text-[#111312]'
      }`}
    >
      <div className={`absolute inset-0 opacity-5 ${
        isDark ? 'bg-purple-500' : 'bg-purple-600'
      }`}
      style={{
        clipPath: isEven 
          ? 'polygon(0% 0%, 95% 0%, 100% 20%, 98% 80%, 80% 100%, 10% 98%, 0% 80%)'
          : 'polygon(5% 0%, 100% 0%, 100% 25%, 95% 85%, 70% 100%, 0% 98%, 0% 15%)'
      }}
      />

      <div className={`absolute -top-12 -right-12 w-32 h-32 ${
        isDark ? 'text-purple-500/10' : 'text-purple-600/10'
      }`}>
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 C120 40 180 30 190 80 C200 130 160 170 130 190 C100 210 70 190 40 170 C10 150 -10 100 5 60 C20 20 80 -40 100 0Z" />
          <circle cx="100" cy="100" r="30" />
        </svg>
      </div>

      <div className="relative p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[10px] font-mono ${isDark ? 'text-white/30' : 'text-black/30'}`}>
            {service.number}
          </span>
          <div className={`w-px h-4 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          <span className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-white/20' : 'text-black/20'}`}>
            Capability
          </span>
        </div>

        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
          isDark 
            ? 'bg-purple-600/20 text-purple-400' 
            : 'bg-purple-100 text-purple-700'
        }`}>
          <Icon size={22} />
        </div>

        <h3 className="text-2xl font-bold leading-[1.1] mb-1.5">
          {service.title}
          <br />
          <span className={`font-serif italic ${isDark ? 'text-white/40' : 'text-black/35'}`}>
            {service.subtitle}
          </span>
        </h3>

        <p className={`text-sm leading-relaxed mt-3 mb-5 ${
          isDark ? 'text-white/50' : 'text-black/50'
        }`}>
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.capabilities.map((cap: string) => (
            <span
              key={cap}
              className={`text-[10px] px-3 py-1 rounded-full border ${
                isDark 
                  ? 'border-white/10 text-white/40' 
                  : 'border-black/10 text-black/40'
              }`}
            >
              {cap}
            </span>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3 ${
            isDark 
              ? 'text-white hover:text-green-400' 
              : 'text-purple-600 hover:text-green-600'
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Discuss on WhatsApp
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

// ============================================================
// MAIN SERVICES PAGE
// ============================================================
export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Software",
      subtitle: "Development",
      description:
        "We design and engineer high-performance digital products for businesses, startups and organizations.",
      capabilities: [
        "Web applications",
        "Mobile applications",
        "SaaS platforms",
        "Business systems",
      ],
      icon: Code2,
    },
    {
      number: "02",
      title: "Artificial",
      subtitle: "Intelligence",
      description:
        "We turn AI from a buzzword into practical systems that automate processes, improve decisions and create better experiences.",
      capabilities: [
        "AI integrations",
        "AI-powered products",
        "Automation",
        "Intelligent assistants",
      ],
      icon: BrainCircuit,
    },
    {
      number: "03",
      title: "Digital",
      subtitle: "Products",
      description:
        "We take ideas from the first sketch to a working product that people can actually use.",
      capabilities: [
        "Product strategy",
        "UX/UI design",
        "Prototyping",
        "Product development",
      ],
      icon: Layers3,
    },
    {
      number: "04",
      title: "Creative",
      subtitle: "Technology",
      description:
        "We combine technology and creativity to help brands communicate, engage and stand out.",
      capabilities: [
        "Brand experiences",
        "Creative technology",
        "Motion & video",
        "Digital experiences",
      ],
      icon: Palette,
    },
  ];

  const technologies = [
    { icon: Globe2, label: "Web Platforms", desc: "Scalable web solutions" },
    { icon: Smartphone, label: "Mobile Products", desc: "Native & cross-platform" },
    { icon: Database, label: "Data Systems", desc: "Analytics & warehousing" },
    { icon: Bot, label: "AI Solutions", desc: "Intelligent automation" },
  ];

  const processSteps = [
    {
      icon: Target,
      title: "Discovery & Strategy",
      desc: "We understand your goals, challenges, and opportunities to create a clear roadmap."
    },
    {
      icon: PenTool,
      title: "Design & Prototype",
      desc: "We translate strategy into intuitive designs and interactive prototypes."
    },
    {
      icon: Code2,
      title: "Build & Test",
      desc: "Our engineers build robust solutions while ensuring quality through continuous testing."
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      desc: "We deploy, monitor, and optimize your solution for long-term success."
    }
  ];

  const mainWhatsAppLink = `https://wa.me/2349161460898?text=${encodeURIComponent(
    "Hello Phantomire Technologies! I'd like to discuss a project with your team. Can we chat?"
  )}`;

  return (
    <main className="min-h-screen bg-[#f5f2ef] text-[#111312] overflow-hidden">

      {/* =========================================================
          HERO WITH TECH VISUAL - Reduced
      ========================================================= */}
      <section className="relative min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#111312]">

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div
          className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-purple-700 opacity-10"
          style={{
            clipPath:
              "polygon(19% 0, 82% 9%, 100% 39%, 87% 78%, 57% 100%, 16% 87%, 0 47%)",
          }}
        />

        <div className="absolute -left-40 -bottom-40 w-[400px] h-[400px] bg-purple-600 opacity-5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-28 pb-16">

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">

            <div>

              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/40">
                  Our capabilities
                </span>
              </div>

              <h1 className="text-[44px] sm:text-[52px] lg:text-[64px] leading-[0.88] tracking-[-0.06em] font-semibold text-white">

                More than
                <br />

                <span className="font-serif italic font-normal text-white/60">
                  a service.
                </span>

                <br />

                A{" "}
                <span className="relative inline-block">

                  solution.

                  <span className="absolute bottom-0 left-0 w-full h-3 lg:h-4 bg-purple-600/60 -z-10" />

                </span>

              </h1>

              <p className="mt-6 text-base lg:text-lg leading-7 text-white/50 max-w-2xl">
                Phantomire Technologies brings engineering, artificial
                intelligence, design and digital creativity together to solve
                problems and build products that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[#111312] rounded-full px-6 py-3 text-sm font-medium hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start a project on WhatsApp
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore capabilities
                  <ArrowRight size={15} />
                </a>

              </div>

              <div className="flex items-center gap-6 mt-10 pt-6 border-t border-white/10">
                <div>
                  <p className="text-xl font-bold text-white">100+</p>
                  <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Projects</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-xl font-bold text-white">97%</p>
                  <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Satisfaction</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-xl font-bold text-white">5+</p>
                  <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Years</p>
                </div>
              </div>

            </div>

            <div>
              <TechVisual />
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          BELIEF STRIP - Reduced
      ========================================================= */}
      <section className="bg-[#111312] text-white border-t border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
              What we believe
            </p>

            <p className="text-lg lg:text-xl max-w-3xl leading-relaxed">
              The right technology is not the most complicated one.
              <span className="text-purple-400">
                {" "}
                It's the one that solves the right problem.
              </span>
            </p>

            <div className="hidden lg:block">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center animate-bounce">
                <ArrowRight size={15} className="rotate-90" />
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES GRID - Reduced
      ========================================================= */}
      <section id="services" className="py-20 lg:py-28 bg-[#f5f2ef]">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="max-w-2xl mb-14">

            <p className="text-purple-700 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
              What we do
            </p>

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.055em] leading-[0.9]">
              Capabilities
              <br />
              without boundaries.
            </h2>

            <p className="text-black/50 mt-4 max-w-xl text-sm">
              Each capability is designed to solve real problems. Click on any service to start a conversation on WhatsApp.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
                isDark={index % 2 === 0}
              />
            ))}
          </div>

        </div>

      </section>

      {/* =========================================================
          CAPABILITY MATRIX - Reduced
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">

            <div>

              <p className="text-purple-700 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                What we can build
              </p>

              <h2 className="text-3xl lg:text-5xl font-semibold tracking-[-0.045em] leading-[0.95]">
                Technology
                <br />
                that works
                <br />
                together.
              </h2>

              <p className="text-black/50 text-sm leading-7 mt-5 max-w-md">
                Great digital products rarely need just one discipline.
                That's why our capabilities are designed to work together.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">

              {technologies.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="bg-white p-6 lg:p-8 min-h-[170px] flex flex-col justify-between hover:bg-[#f5f2ef] transition-all duration-300 group"
                  >

                    <div className="flex justify-between">

                      <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Icon size={18} />
                      </div>

                      <span className="text-[10px] font-mono text-black/20">
                        0{index + 1}
                      </span>

                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.label}
                      </h3>
                      <p className="text-xs text-black/30 mt-1">{item.desc}</p>
                    </div>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROCESS SECTION - Reduced
      ========================================================= */}
      <section className="bg-[#e8e3df] py-20 lg:py-28">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <p className="text-purple-700 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                Our process
              </p>

              <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.05em] leading-[0.9]">
                We don't
                <br />
                just build.
                <br />
                <span className="font-serif italic font-normal text-purple-700/60">
                  We understand.
                </span>
              </h2>

            </div>

            <div className="space-y-0 border-t border-black/15">

              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="py-6 border-b border-black/15 grid grid-cols-[50px_1fr] gap-4 group hover:pl-2 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-purple-700 group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-black/50 mt-1 leading-6 max-w-lg text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ACADEMY SECTION - Reduced
      ========================================================= */}
      <section className="bg-[#111312] text-white py-20 lg:py-28">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 items-center">

            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
                  <GraduationCap size={17} />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                  Phantomire Academy
                </span>

              </div>

              <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.05em] leading-[0.9]">
                We don't only
                <br />
                build technology.
                <br />
                <span className="text-purple-400 font-serif italic font-normal">
                  We build builders.
                </span>
              </h2>

              <p className="text-white/50 text-base leading-7 max-w-2xl mt-6">
                Education is one part of the Phantomire ecosystem. Through
                Phantomire Academy, we equip young people with the practical
                skills and confidence to participate in the digital economy.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
                >
                  Explore the Academy
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 border border-white/15 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  See Events
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

            <div className="relative h-[350px]">

              <div
                className="absolute inset-0 bg-purple-700"
                style={{
                  clipPath:
                    "polygon(13% 3%, 82% 0, 100% 28%, 89% 78%, 55% 100%, 8% 88%, 0 43%)",
                }}
              />

              <div
                className="absolute inset-8 bg-[#171918]"
                style={{
                  clipPath:
                    "polygon(15% 0, 87% 9%, 100% 57%, 72% 100%, 19% 91%, 0 43%)",
                }}
              >

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                  <p className="text-5xl font-semibold">
                    200+
                  </p>

                  <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] mt-2">
                    learners reached
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5 justify-center px-4">

                    {[
                      "Frontend",
                      "Backend",
                      "Design",
                      "Creative",
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-[10px] border border-white/10 rounded-full px-2.5 py-1.5 text-white/50"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA - Reduced
      ========================================================= */}
      <section className="relative py-24 lg:py-32 bg-[#f5f2ef] overflow-hidden">

        <div
          className="absolute right-[-80px] top-[-80px] w-[400px] h-[400px] bg-purple-600/10"
          style={{
            clipPath:
              "polygon(20% 0, 85% 12%, 100% 52%, 75% 90%, 25% 100%, 0 52%)",
          }}
        />

        <div
          className="absolute left-[-60px] bottom-[-80px] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl"
        />

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1.5 mb-6">
            <Sparkles size={12} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Have something in mind?</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.065em] leading-[0.85]">
            Let's make
            <br />
            it <span className="font-serif italic font-normal text-purple-700">real.</span>
          </h2>

          <p className="text-black/50 max-w-2xl mx-auto text-base leading-7 mt-6">
            Tell us what you're trying to solve, build or improve.
            We'll figure out the technology with you.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#111312] text-white rounded-full px-7 py-3.5 text-sm font-medium hover:bg-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start a conversation on WhatsApp
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-black/15 rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore all services
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}