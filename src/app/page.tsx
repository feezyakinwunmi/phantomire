// export const dynamic = "force-dynamic"

// import { supabase } from "./lib/supabase"
// import Link from "next/link"
// import TrainingCountdown from "./TrainingCountdown"; // New Countdown component
// import TestimonialSlider from "./TestimonialSlider" // Create this client component below

// export default async function Home() {
//   const pathways = [
//     {title: "Join Our Community", paragraph: "Connect with fellow tech enthusiasts in Epe and Lagos.", link: "Join Now →", url: "https://wa.me/2349161460898" },
//     { title: "Enroll in Courses", paragraph: "Join our hands-on programs in Frontend, Backend, Design, or Videography & Editing.", link: "Register Now →", url: "/register" },
//     { title: "Attend Events", paragraph: "Participate in Phantomire Tech Summit and other Nigerian tech gatherings.", link: "View Events →", url: "/events" },
//   ];
// const { data: events } = await supabase
//     .from("events")
//     .select("*")
//     .gte("date", new Date().toISOString().split("T")[0]) // Upcoming (date >= today)
//     .order("date", { ascending: true })
//     .limit(2)


//   return (
//     <main className="min-h-screen">
      

//       {/* Hero Section */}
//       <section className="mt-20 md:mt-0 bg-black relative h-screen flex md:flex-row flex-col items-end justify-start overflow-hidden rounded-b-[20%]"> {/* mt for header */}
       
//         <div className="relative z-10 px-2 md:px-6 pb-12 w-full  md:max-w-4xl">
//           <div className=" mt-30  backdrop-blur-sm p-8 md:p-12 rounded-2xl md:text-left align-center text-center" >
//             <h1 className="text-2xl  md:text-4xl font-bold text-white mb-4 leading-tight w-full">
//               Create, Thrive, Empower, <span className="text-xl">with</span><br/> <span className="text-purple-600 italic">Phantomire</span> Tech Academy
//             </h1>
//             <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl">
//               Phantomire technologies is a tech education academy and solutions provider empowering Nigerian youth with digital skills.
//             </p>
//             <div className="flex  flex-row gap-4 text-sm md:text-md">
//               <a href="/register">
//                 <button className="bg-purple-900 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition">
//                   Enroll in a Course
//                 </button>
//               </a>
//               <a href="https://chat.whatsapp.com/LZlC1B0D8m1LvxA3HAszmj">
//                 <button className="border-2 border-purple-900 text-purple-900 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition">
//                  Join our Community
//                 </button>
//               </a>
//             </div>
//           </div>

//         </div>

//         <img src="/gbk.png" alt="Students coding" className="w-full h-96 md:w-[70%] md:h-[70%] object-cover opacity-80" />

//       </section>


// {/* Impact Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
//             <div className="md:col-span-1 flex items-center">
//               <div>
//                 <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">
//                   Phantomire Impact
//                 </p>
//                 <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
//                   Building Nigeria's tech future together
//                 </h2>
//                 <p className="text-base text-black mb-8">
//                   We train youth in digital skills, partner with communities nationwide, and develop solutions to bridge the tech gap across Nigeria.
//                 </p>
//               </div>
//             </div>
//             <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg row-span-2">
//                 <img 
//                   src="https://i.ytimg.com/vi/Jy0AckxSDdM/hq720.jpg" 
//                   alt="Kids coding" 
//                   className="w-full h-full object-cover opacity-60 absolute inset-0" 
//                 />
//                 <div className="absolute inset-0 bg-black/50" />
//                 <div className="relative p-8 text-white flex flex-col justify-end h-full">
//                   <p className="uppercase tracking-wider text-sm mb-2">Latest Updates</p>
//                   <ul className="space-y-3 text-lg">
//                     <li>• New cohort starting soon in Frontend & Design</li>
//                     <li>• Community partnerships expanded nationwide</li>
//                     <li>• Student-built apps launched, including Pearlvix</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-md">
//                 <img 
//                   src="https://i.ytimg.com/vi/lSp2nqz2KQU/maxresdefault.jpg" 
//                   alt="Girls coding" 
//                   className="w-full h-40 object-cover rounded-xl mb-3" 
//                 />
//                 <p className="text-black">Girls in tech initiative thriving</p>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-md">
//                 <img 
//                   src="/pstudents.JPEG" 
//                   alt="Coding club" 
//                   className="w-full h-40 object-cover rounded-xl mb-3" 
//                 />
//                 <p className="text-black">Community bootcamps in action</p>
//               </div>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-row items-center justify-center gap-8">
//               <div>
//                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-900">
//                   <circle cx="12" cy="8" r="4" fill="currentColor"/>
//                   <path d="M12 14c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" fill="currentColor"/>
//                   <circle cx="6" cy="10" r="3" fill="currentColor" opacity="0.6"/>
//                   <path d="M6 15c-3.31 0-6 1.68-6 3.75V20h6v-5z" fill="currentColor" opacity="0.6"/>
//                   <circle cx="18" cy="10" r="3" fill="currentColor" opacity="0.6"/>
//                   <path d="M18 15c3.31 0 6 1.68 6 3.75V20h-6v-5z" fill="currentColor" opacity="0.6"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-3xl font-bold text-purple-900 mb-1">200+</p>
//                 <p className="text-lg text-black">Students Trained</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-row items-center justify-center gap-8">
//               <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18s-3.332.477-4.5 1.253" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-3xl font-bold text-purple-900 mb-1">4</p>
//                 <p className="text-lg text-black">Core Courses</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-row items-center justify-center gap-8">
//               <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-6 0h6" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-3xl font-bold text-purple-900 mb-1">2</p>
//                 <p className="text-lg text-black">Community Partnerships</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Pathways */}
//       <section className="py-16 bg-black">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-300 font-bold uppercase tracking-wider text-xs mb-3">Available Courses</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Start your tech journey</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="bg-gray-900 rounded-2xl p-6 text-white">
//               <img src="https://img-c.udemycdn.com/course/750x422/5178116_6858.jpg" alt="Frontend" className="w-full h-48 object-cover rounded-xl mb-4" />
//               <h3 className="text-xl font-bold text-white">Frontend Development</h3>
//             </div>
//             <div className="bg-gray-900 rounded-2xl p-6 text-white">
//               <img src="https://blog.postman.com/wp-content/uploads/2023/05/23PST0060-How-To-Create-a-REST-API-with-Node-js-and-Express-v1.jpg" alt="Backend" className="w-full h-48 object-cover rounded-xl mb-4" />
//               <h3 className="text-xl font-bold text-white">Backend Development</h3>
//             </div>
//             <div className="bg-gray-900 rounded-2xl p-6 text-white">
//               <img src="https://s3-alpha.figma.com/hub/file/4138977549/ca66be38-76e4-4b65-8cde-2f20a9559889-cover.png" alt="Design" className="w-full h-48 object-cover rounded-xl mb-4" />
//               <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
//             </div>
//             <div className="bg-gray-900 rounded-2xl p-6 text-white">
//               <img src="https://static.skillshare.com/uploads/discussion/tmp/de2edd05.jpg" alt="Videography" className="w-full h-48 object-cover rounded-xl mb-4" />
//               <h3 className="text-xl font-bold text-white">Videography & Editing</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Community Pathways */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Get Involved</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Ways to join Phantomire</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {pathways.map((path) => (
//               <div key={path.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl md:text-2xl font-bold text-black mb-4">{path.title}</h3>
//                 <p className="text-base text-black mb-6">{path.paragraph}</p>
//                 <a href={path.url} className="text-purple-900 font-medium hover:underline">{path.link}</a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events (Top 2 Latest) */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Events</p>
//           <div className="flex justify-between items-end mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-black">Upcoming tech moments</h2>
//             <Link href="/events">
//               <button className="text-purple-900 font-bold hover:underline">
//                 View All Events →
//               </button>
//             </Link>
//           </div>

//           {events && events.length > 0 ? (
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//               {events.map((event) => (
//                 <div key={event.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
//                   <img 
//                     src={event.image_url || "https://via.placeholder.com/600x400?text=Event"} 
//                     alt={event.title} 
//                     className="w-full h-64 object-cover rounded-xl mb-6" 
//                   />
//                   <h3 className="text-2xl font-bold text-black mb-4">{event.title}</h3>
//                   <p className="text-black mb-2">{event.short_desc}</p>
//                   <p className="text-black">
//                     {event.date} • {event.location || "Nigeria"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-xl text-black">
//               No upcoming events at the moment. Check back soon!
//             </p>
//           )}
//         </div>
//       </section>

//       {/* Testimonials Slider */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">
//             Testimonials
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
//             What Our Students & Partners Say
//           </h2>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* Our Partners */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Our Partners</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Proud collaborations</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
//             <div className="shadow-lg rounded-lg p-4 text-center bg-white">
//               <img src="partner1.jpeg" alt="Partner 1" className="h-20 w-40 mx-auto rounded-lg object-contain" />
//               <p className="text-black mt-2">Mastripod</p>
//             </div>
//             <div className="shadow-lg rounded-lg p-4 text-center bg-white">
//               <img src="partner2.jpeg" alt="Partner 2" className="h-20 w-40 mx-auto rounded-lg object-contain" />
//               <p className="text-black mt-2">SMP</p>
//             </div>
//             {/* Add more partners as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-10 md:p-16 text-center text-white">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to rise with tech?</h2>
//             <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 opacity-90">
//               Join Phantomire today and become part of Nigeria's next generation of digital creators.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/register">
//                 <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
//                   Enroll Now
//                 </button>
//               </Link>
//               <a href="mailto:phantomire@gmail.com">
//                 <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
//                   Contact Us
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }






"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "./lib/supabase";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
  BrainCircuit,
  Palette,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Briefcase,
  MessageCircle,
  Sparkles,
  Zap,
  Globe2,
  Users,
} from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

// ============================================================
// PARTICLE BACKGROUND COMPONENT
// ============================================================
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      baseOpacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.8 + 0.5;
        this.baseOpacity = Math.random() * 0.3 + 0.1;
        this.opacity = this.baseOpacity;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200) {
            const force = (200 - distance) / 200 * 0.02;
            this.x += dx * force;
            this.y += dy * force;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      const parent = canvas.parentElement;
      if (parent) {
        particles = Array.from(
          { length: 80 },
          () => new Particle(parent.clientWidth, parent.clientHeight)
        );
      }
    };

    initParticles();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      ctx.clearRect(0, 0, parent.clientWidth, parent.clientHeight);

      particles.forEach((particle) => {
        particle.update(parent.clientWidth, parent.clientHeight);
        particle.draw(ctx);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 2, pointerEvents: "none" }}
    />
  );
};

// ============================================================
// FLOATING SHAPES COMPONENT
// ============================================================
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <div className="absolute top-[10%] left-[5%] animate-float-slow">
        <div className="w-3 h-3 bg-purple-500/20 rotate-45 backdrop-blur-sm border border-purple-500/10" />
      </div>
      
      <div className="absolute top-[30%] right-[8%] animate-float-medium">
        <div className="w-4 h-4 bg-purple-400/15 rotate-12 backdrop-blur-sm border border-purple-400/10" />
      </div>
      
      <div className="absolute bottom-[25%] left-[12%] animate-float-fast">
        <div className="w-2 h-2 bg-purple-600/20 rounded-full backdrop-blur-sm" />
      </div>
      
      <div className="absolute top-[60%] right-[15%] animate-float-slow">
        <div className="w-5 h-5 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/5" />
      </div>

      <div className="absolute top-[20%] left-[45%] animate-float-medium">
        <div className="w-2.5 h-2.5 bg-purple-300/15 rotate-45 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-[40%] right-[25%] animate-float-fast">
        <div className="w-3.5 h-3.5 bg-purple-400/10 rounded-full backdrop-blur-sm border border-purple-400/5" />
      </div>

      <div className="absolute top-[15%] right-[20%] animate-pulse-slow">
        <div className="w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
      </div>
      
      <div className="absolute bottom-[20%] left-[8%] animate-pulse-slow delay-1000">
        <div className="w-40 h-40 bg-purple-600/5 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

// ============================================================
// MAIN HOME COMPONENT
// ============================================================
export default function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .gte("date", new Date().toISOString().split("T")[0])
        .order("date", { ascending: true })
        .limit(2);
      
      setEvents(data || []);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Software Development",
      description:
        "We design and build scalable web and mobile products that solve real business problems.",
      tags: ["Web Apps", "Mobile Apps", "SaaS"],
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "AI & Intelligent Solutions",
      description:
        "We integrate artificial intelligence into products, workflows and businesses to create smarter experiences.",
      tags: ["AI Products", "Automation", "Intelligence"],
    },
    {
      number: "03",
      icon: Layers3,
      title: "Digital Product Development",
      description:
        "From idea to launch, we transform concepts into polished, market-ready digital products.",
      tags: ["Strategy", "UX/UI", "Development"],
    },
    {
      number: "04",
      icon: Palette,
      title: "Creative & Digital",
      description:
        "We help brands communicate better through digital experiences, design and creative technology.",
      tags: ["Branding", "UI/UX", "Creative"],
    },
  ];

  const reasons = [
    {
      icon: Sparkles,
      title: "Built around your problem",
      description:
        "We don't start with a technology. We start by understanding the problem and designing the right solution.",
    },
    {
      icon: Zap,
      title: "Built to move fast",
      description:
        "From concept to working product, our approach keeps teams focused, practical and execution-driven.",
    },
    {
      icon: ShieldCheck,
      title: "Built for real-world use",
      description:
        "We care about performance, usability, scalability and the people who will actually use what we build.",
    },
  ];

  const academyPrograms = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Videography & Editing",
  ];

  return (
    <main className="min-h-screen bg-[#f5f2ef] text-[#111312] overflow-hidden">

      {/* =========================================================
          HERO SECTION WITH MOTION
      ========================================================= */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden border-b border-black/10">

        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[200px] bg-purple-500/5 blur-3xl animate-pulse-slow delay-1000" />
        </div>

        {/* Floating Shapes */}
        <FloatingShapes />

        {/* Particle Canvas */}
        <ParticleBackground />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 pt-20 pb-14">

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">

            {/* LEFT - Content */}
            <div className="max-w-2xl animate-fade-in-up mt-10">

              <div className="inline-flex items-center gap-3 border border-black/15 rounded-full px-4 py-1.5 mb-6 bg-white/50 backdrop-blur-sm animate-fade-in-up delay-200">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Technology • Solutions • Education
                </span>
              </div>

              <h1 className="text-[44px] sm:text-[52px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-[-0.045em] font-semibold animate-fade-in-up delay-300">
                We build
                <br />
                <span className="relative inline-block">
                  technology
                  <span className="absolute left-0 bottom-1 w-full h-2.5 lg:h-3 bg-purple-600/90 -z-10 animate-width-grow" />
                </span>
                <br />
                that moves
                <br />
                <span className="font-serif italic font-normal">
                  people forward.
                </span>
              </h1>

              <p className="mt-6 text-base text-black/60 max-w-lg leading-7 animate-fade-in-up delay-400">
                Phantomire Technologies is a digital solutions company
                building software, AI-powered products and creative digital
                experiences — while developing the next generation of
                technology talent.
              </p>

              <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up delay-500">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111312] text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-700/30 hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Academy
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

              <div className="flex items-center gap-6 mt-10 pt-6 border-t border-black/10 max-w-md animate-fade-in-up delay-600">

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-xl font-semibold">200+</p>
                  <p className="text-[10px] text-black/50 mt-1 uppercase tracking-wider">
                    Learners reached
                  </p>
                </div>

                <div className="w-px h-8 bg-black/10" />

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-xl font-semibold">4+</p>
                  <p className="text-[10px] text-black/50 mt-1 uppercase tracking-wider">
                    Digital disciplines
                  </p>
                </div>

                <div className="w-px h-8 bg-black/10" />

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-xl font-semibold">NG</p>
                  <p className="text-[10px] text-black/50 mt-1 uppercase tracking-wider">
                    Where we started
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative min-h-[400px] lg:min-h-[480px] animate-fade-in-up delay-400">

              {/* Main image */}
              <div className="absolute top-0 right-0 w-[78%] h-[300px] lg:h-[360px] rounded-[24px] overflow-hidden shadow-2xl shadow-black/10 animate-float-subtle">
                <img
                  src="/gbk.png"
                  alt="Phantomire technology"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />

                <div className="absolute left-5 top-5 animate-fade-in-up delay-600">
                  <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                    <span className="text-[10px] font-semibold">
                      Building the future
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating project card */}
              <div className="absolute left-0 top-[180px] lg:top-[220px] w-[74%] bg-[#111312] rounded-[20px] p-5 lg:p-6 text-white shadow-2xl shadow-black/20 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20">

                <div className="flex justify-between items-start">

                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.15em]">
                      Digital Solutions
                    </p>

                    <p className="text-3xl lg:text-4xl font-semibold mt-2">
                      75+
                    </p>

                    <p className="text-xs text-white/60 mt-0.5">
                      Projects & initiatives
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center transition-colors hover:bg-white/10">
                    <ArrowUpRight size={14} />
                  </div>

                </div>

                <div className="mt-5">

                  <div className="flex items-center justify-between text-[10px] text-white/50 mb-1.5">
                    <span>Technology impact</span>
                    <span>Growing</span>
                  </div>

                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[82%] bg-purple-500 rounded-full animate-width-grow" />
                  </div>

                </div>

              </div>

              {/* Small solution card */}
              <div className="absolute right-0 bottom-0 bg-white rounded-[16px] shadow-xl border border-black/5 p-4 w-[55%] transition-all duration-300 hover:scale-105 hover:shadow-2xl">

                <div className="flex items-center justify-between mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center transition-transform hover:scale-110">
                      <Code2 size={13} className="text-purple-700" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black text-white border-2 border-white flex items-center justify-center transition-transform hover:scale-110">
                      <BrainCircuit size={13} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center transition-transform hover:scale-110">
                      <Palette size={13} className="text-purple-700" />
                    </div>
                  </div>

                  <span className="text-[10px] font-medium text-black/50">
                    04 capabilities
                  </span>
                </div>

                <p className="font-semibold text-base">
                  One technology partner.
                </p>

                <p className="text-xs text-black/50 mt-0.5">
                  From idea to execution.
                </p>

              </div>

              {/* Decorative ring */}
              <div className="absolute -bottom-8 left-[12%] w-16 h-16 rounded-full border border-purple-600/30 flex items-center justify-center animate-pulse-slow">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}
      <section className="bg-[#111312] text-white border-b border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

            <div className="py-6 md:px-6 first:pl-0 transition-all duration-300 hover:bg-white/5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">
                Our approach
              </p>
              <p className="text-base font-medium">
                Problem first. Technology second.
              </p>
            </div>

            <div className="py-6 md:px-6 transition-all duration-300 hover:bg-white/5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">
                What we build
              </p>
              <p className="text-base font-medium">
                Products, platforms & digital experiences
              </p>
            </div>

            <div className="py-6 md:px-6 transition-all duration-300 hover:bg-white/5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">
                Where we operate
              </p>
              <p className="text-base font-medium">
                Nigeria & beyond
              </p>
            </div>

            <div className="py-6 md:px-6 last:pr-0 transition-all duration-300 hover:bg-white/5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">
                Our belief
              </p>
              <p className="text-base font-medium">
                Technology should create opportunity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-[#f5f2ef]">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12">

            <div className="max-w-sm">

              <p className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4">
                What we do
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.04em] leading-[1.05]">
                Technology is only useful when it solves something.
              </h2>

              <p className="text-black/55 mt-5 text-sm leading-7">
                We combine engineering, design, artificial intelligence and
                education to help businesses and people turn opportunities
                into practical digital solutions.
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-6 font-semibold text-sm border-b border-black pb-1 transition-all duration-300 hover:text-purple-700 hover:border-purple-700 group"
              >
                Explore our capabilities
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

            </div>

            <div className="border-t border-black/15">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="group py-6 lg:py-7 border-b border-black/15 grid md:grid-cols-[50px_1fr_auto] gap-5 items-start transition-all duration-300 hover:pl-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >

                    <span className="text-[10px] font-mono text-black/35">
                      {service.number}
                    </span>

                    <div>

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-700 group-hover:text-white group-hover:border-purple-700 group-hover:scale-110">
                          <Icon size={16} />
                        </div>

                        <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
                          {service.title}
                        </h3>

                      </div>

                      <p className="text-black/50 max-w-xl mt-3 text-sm leading-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] border border-black/10 rounded-full px-3 py-1 text-black/50 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    <div className="hidden md:flex w-9 h-9 rounded-full border border-black/10 items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                      <ArrowUpRight size={15} />
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS / PROJECTS
      ========================================================= */}
      <section className="bg-[#111312] text-white py-20 lg:py-24">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

            <div>
              <p className="text-purple-400 font-semibold text-[10px] uppercase tracking-[0.2em] mb-3">
                From ideas to impact
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.04em] max-w-2xl">
                We don't just teach technology.
                <span className="text-white/40"> We use it.</span>
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/20 pb-1 transition-all duration-300 hover:border-white group"
            >
              View our work
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

          </div>

          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-5">

            {/* Main project */}
            <div className="group relative min-h-[380px] rounded-[24px] overflow-hidden bg-purple-950 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">

              <img
                src="/gbk.png"
                alt="Phantomire digital solutions"
                className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="relative h-full min-h-[380px] p-7 lg:p-8 flex flex-col justify-end">

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                    Digital product
                  </span>
                  <span className="w-1 h-1 rounded-full bg-purple-400" />
                  <span className="text-[10px] text-white/60">
                    Product development
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight max-w-2xl">
                  Building digital products that make everyday problems easier.
                </h3>

                <p className="text-white/60 max-w-xl mt-3 text-sm leading-6">
                  Our solutions combine technology, thoughtful design and
                  real-world understanding to create products people can use.
                </p>

                <div className="mt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Explore solutions
                    <ArrowUpRight size={14} />
                  </span>
                </div>

              </div>
            </div>

            {/* Side cards */}
            <div className="grid gap-5">

              <div className="rounded-[24px] bg-[#f5f2ef] text-black p-6 lg:p-7 flex flex-col justify-between min-h-[182px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                <div className="flex justify-between">
                  <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 transition-all duration-300 hover:scale-110">
                    <BrainCircuit size={17} />
                  </div>

                  <ArrowUpRight size={17} className="text-black/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-black/40 mb-2">
                    AI & Innovation
                  </p>

                  <h3 className="text-xl font-semibold">
                    Making intelligent technology more accessible.
                  </h3>
                </div>

              </div>

              <div className="rounded-[24px] bg-purple-700 p-6 lg:p-7 flex flex-col justify-between min-h-[182px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                <div className="flex justify-between">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 hover:bg-white/25">
                    <GraduationCap size={17} />
                  </div>

                  <ArrowUpRight size={17} className="text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/60 mb-2">
                    Education
                  </p>

                  <h3 className="text-xl font-semibold">
                    Equipping the next generation to build what comes next.
                  </h3>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PHANTOMIRE
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <p className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4">
                Why Phantomire
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.045em] leading-[1.05]">
                A technology partner, not just a technology vendor.
              </h2>
            </div>

            <div className="space-y-0 border-t border-black/10">

              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="py-6 border-b border-black/10 grid grid-cols-[44px_1fr] gap-4 transition-all duration-300 hover:pl-2"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >

                    <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {reason.title}
                      </h3>

                      <p className="text-black/50 text-sm leading-6 mt-2 max-w-lg">
                        {reason.description}
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
          ACADEMY
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-[#eae5e1]">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 items-center">

            <div>

              <div className="inline-flex items-center gap-2 text-purple-700 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">
                <GraduationCap size={14} />
                Phantomire Academy
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.045em] leading-[1.05] max-w-3xl">
                We build technology.
                <br />
                <span className="font-serif italic font-normal">
                  We build the people who build it.
                </span>
              </h2>

              <p className="text-black/55 max-w-2xl mt-5 text-base leading-7">
                Our academy is the education arm of Phantomire Technologies.
                We help young people develop practical digital skills,
                discover opportunities and become capable technology creators.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6 max-w-lg">

                {academyPrograms.map((program, index) => (
                  <div
                    key={program}
                    className="flex items-center gap-2.5 text-sm font-medium transition-all duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-4 h-4 rounded-full bg-purple-700 text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                      <Check size={10} />
                    </div>
                    {program}
                  </div>
                ))}

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-700/30 hover:-translate-y-0.5"
                >
                  Explore the Academy
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
                >
                  See our initiatives
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="rounded-[24px] overflow-hidden aspect-[4/5] bg-black shadow-2xl transition-all duration-500 hover:shadow-purple-500/20">

                <img
                  src="/pstudents.JPEG"
                  alt="Phantomire Academy"
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Education with purpose
                  </p>

                  <p className="text-2xl font-semibold mt-2">
                    200+ learners reached
                  </p>

                  <p className="text-white/55 text-sm mt-1">
                    Learning today. Building tomorrow.
                  </p>

                </div>

              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-black/5 transition-all duration-300 hover:scale-105 hover:shadow-2xl">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Users size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] text-black/40 uppercase tracking-wider">
                      Community
                    </p>
                    <p className="font-semibold text-sm">
                      Learn. Build. Connect.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-[#111312] text-white">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="max-w-2xl mb-12">

            <p className="text-purple-400 font-semibold text-[10px] uppercase tracking-[0.2em] mb-3">
              How we work
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.04em] leading-tight">
              From a problem
              <br />
              to a working solution.
            </h2>

          </div>

          <div className="grid md:grid-cols-4 border-t border-white/10">

            {[
              ["01", "Discover", "We understand the problem, audience and opportunity."],
              ["02", "Design", "We turn ideas into clear experiences and product systems."],
              ["03", "Build", "Our team develops, tests and refines the solution."],
              ["04", "Launch", "We help move the product from development into the real world."],
            ].map(([number, title, description], index) => (
              <div
                key={number}
                className="py-7 md:px-6 border-b md:border-b-0 md:border-r border-white/10 first:pl-0 last:border-r-0 transition-all duration-300 hover:bg-white/5"
                style={{ animationDelay: `${index * 150}ms` }}
              >

                <p className="text-[10px] font-mono text-white/30">
                  {number}
                </p>

                <h3 className="text-xl font-semibold mt-8">
                  {title}
                </h3>

                <p className="text-white/45 text-sm leading-6 mt-3 max-w-xs">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section className="py-20 bg-white">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

            <div>

              <p className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-3">
                What's happening
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.04em]">
                Ideas in motion.
              </h2>

            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-semibold text-sm border-b border-black pb-1 transition-all duration-300 hover:border-purple-700 hover:text-purple-700 group"
            >
              View all events
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

          </div>

          {!loading && events && events.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">

              {events.map((event, index) => (
                <Link
                  href={`/events/${event.id}`}
                  key={event.id}
                  className="group transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >

                  <div className="aspect-[16/9] rounded-[20px] overflow-hidden bg-gray-100">

                    <img
                      src={
                        event.image_url ||
                        "https://via.placeholder.com/800x500?text=Phantomire"
                      }
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="pt-4">

                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-black/40">
                      <span>{event.date}</span>
                      <span className="w-1 h-1 bg-purple-600 rounded-full" />
                      <span>{event.location || "Nigeria"}</span>
                    </div>

                    <h3 className="text-xl font-semibold mt-2 transition-colors duration-300 group-hover:text-purple-700">
                      {event.title}
                    </h3>

                    <p className="text-black/50 text-sm mt-1 max-w-xl">
                      {event.short_desc}
                    </p>

                  </div>

                </Link>
              ))}

            </div>
          ) : (
            <div className="border border-black/10 rounded-[20px] p-12 text-center">
              <p className="text-black/50 text-sm">
                New technology events and initiatives are coming soon.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-[#f5f2ef]">

        <div className="max-w-[1200px] mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-10">

            <p className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-3">
              Voices
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.04em]">
              Built with people.
              <br />
              Trusted by people.
            </h2>

          </div>

          <TestimonialSlider />

        </div>
      </section>

     
     


<section className="py-16 lg:py-20 bg-white">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
        Partnerships & Collaborations
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
        We Partner With
        <span className="block text-purple-600">Schools & Organizations</span>
      </h2>
      <p className="text-slate-600 mt-4 text-sm max-w-2xl mx-auto">
        Phantomire Technologies collaborates with educational institutions, community organizations, 
        and corporate partners to bring tech education to more young Nigerians.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* School Partnerships */}
      <div className="bg-[#f5f2ef] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white mb-4">
          <GraduationCap size={22} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">School Partnerships</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          We partner with secondary schools, universities, and technical colleges to integrate 
          practical tech education into their curriculum and offer extracurricular coding programs.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
            <span>After-school coding clubs</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Curriculum integration</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Teacher training programs</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Career guidance & mentorship</span>
          </li>
        </ul>
        <a 
          href="https://wa.me/2349161460898" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
        >
          Partner your school
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Community Organizations */}
      <div className="bg-[#f5f2ef] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white mb-4">
          <Users size={22} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Community Organizations</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          We collaborate with NGOs, youth groups, religious organizations, and community centers 
          to make tech education accessible to underserved communities.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Free community workshops</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Youth empowerment programs</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Scholarship opportunities</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Community tech events</span>
          </li>
        </ul>
        <a 
          href="https://wa.me/2349161460898" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Collaborate with us
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Corporate & Business Partners */}
      <div className="bg-[#f5f2ef] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white mb-4">
          <Briefcase size={22} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Partners</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          We work with businesses and tech companies to create internship opportunities, 
          sponsor training programs, and connect talented graduates with employment.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>Internship placements</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>Corporate training programs</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>Hackathon & event sponsorships</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>Graduate recruitment pipeline</span>
          </li>
        </ul>
        <a 
          href="https://wa.me/2349161460898" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          Become a partner
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>

    {/* Partner Logos / Testimonial */}
    <div className="mt-12 bg-[#111312] rounded-3xl p-8 lg:p-12 text-white">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
            Trusted By
          </p>
          <h3 className="text-2xl font-bold mt-2 mb-4">
            Schools & Organizations
            <span className="block text-purple-400">Across Nigeria</span>
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">
            We've partnered with numerous educational institutions and organizations to bring 
            technology education to students and communities nationwide. Our partners trust us 
            to deliver quality, practical tech training that prepares young people for the future.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center backdrop-blur-sm border border-white/5">
            <p className="text-3xl font-bold text-purple-400">15+</p>
            <p className="text-xs text-white/40 mt-1">Schools Partnered</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center backdrop-blur-sm border border-white/5">
            <p className="text-3xl font-bold text-purple-400">20+</p>
            <p className="text-xs text-white/40 mt-1">Community Organizations</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center backdrop-blur-sm border border-white/5 col-span-2">
            <p className="text-3xl font-bold text-purple-400">5+</p>
            <p className="text-xs text-white/40 mt-1">Corporate Partners</p>
          </div>
        </div>
      </div>
    </div>

    {/* School Partnership CTA */}
    <div className="mt-8 text-center">
      <p className="text-sm text-slate-600 mb-4">
        Interested in partnering with us? We'd love to collaborate with your school or organization.
      </p>
      <a
        href="https://wa.me/2349161460898"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#111312] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
      >
        <MessageCircle size={16} />
        Partner With Us
        <ArrowRight size={14} />
      </a>
    </div>
  </div>
</section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#111312] text-white py-20 lg:py-28">

        <div className="max-w-[1200px] mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">
            <Globe2 size={13} />
            Let's build what comes next
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.055em] leading-[0.95]">
            Have a problem
            <br />
            worth solving?
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-base leading-7 mt-6">
            Whether you need a digital product, an intelligent solution,
            creative technology or a team to bring your idea to life,
            Phantomire is ready to build with you.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Explore our solutions
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-white/35 uppercase tracking-wider">
            <span>Phantomire Technologies</span>
            <span>Digital solutions • AI • Education</span>
            <span>Built from Nigeria for the world</span>
          </div>

        </div>
      </section>

    </main>
  );
}