// // /app/about/page.tsx — Server Component (no "use client" needed — static page)

// import Header from "../components/Header" // Adjust path if needed

// export const metadata = {
//   title: "About Phantomire Technologies | Empowering Nigerian Youth in Tech",
//   description: "Phantomire Technologies is on a mission to empower Nigerian youth with practical digital skills, ethical tech practices, and emotional intelligence. From web development to UI/UX and our escrow app Pearlvix, we're building a generation of creators who use tech to heal and uplift.",
//   openGraph: {
//     title: "About Phantomire | Ethical Tech Education in Nigeria",
//     description: "Discover how Phantomire is transforming lives through affordable tech training, community events, and innovative solutions like Pearlvix – fighting online scams and building trust in digital Nigeria.",
//     url: "https://phantomiretechnologies.com/about",
//     siteName: "Phantomire Technologies",
//     images: [
//       {
//         url: "https://phantomiretechnologies.com/og-about.jpg", // Replace with your actual OG image (e.g., team, students, Pearlvix screenshot)
//         width: 1200,
//         height: 630,
//         alt: "Phantomire Team and Students Building the Future",
//       },
//     ],
//     locale: "en_NG",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About Phantomire Technologies",
//     description: "Empowering Nigerian youth with tech skills + ethics + empathy.",
//     images: ["https://phantomiretechnologies.com/og-about.jpg"],
//   },
//   keywords: "Phantomire Technologies, tech training Nigeria, ethical tech education, digital skills Lagos, Pearlvix escrow app, youth empowerment Nigeria, web development bootcamp",
//   robots: "index, follow",
// }

// export default function About() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Hero / Our Story */}
//       <section className="pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-sm mb-4">
//             Our Journey
//           </p>
//           <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">
//             Building Nigeria's Digital Future with Heart and Integrity
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 text-md text-black">
//               <p>
//                 Phantomire Technologies was born from a deep belief: tech should not just connect us, it should heal, empower, and uplift.
//               </p>
//               <p>
//                 In a digital Nigeria full of potential but plagued by scams, burnout, and inequality, we saw the need for something different: training that teaches not only code, but conscience.
//               </p>
//               <p>
//                 We combine world-class skills in web development, UI/UX, graphics, animation, digital marketing, and entrepreneurship with emotional intelligence and ethical practices, so our students build apps that create trust, not exploit it.
//               </p>
//               <p>
//                 From our innovative escrow app <strong>Pearlvix</strong> (designed to end online transaction fraud) to partnerships across Lagos and Nigeria, we're raising a generation of creators who use tech for good.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <img 
//                 src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg"// Replace with your actual images
//                 alt="Nigerian youth learning web development"
//                 className="rounded-2xl shadow-lg w-full h-48 object-cover"
//               />
//               <img 
//                 src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/01/28/sparkit.jpg"
//                 alt="Pearlvix escrow app in action"
//                 className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
//               />
//               <img 
//                 src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2024/08/17/codecng.jpg"
//                 alt="Phantomire tech workshop"
//                 className="rounded-2xl shadow-lg w-full h-48 object-cover"
//               />
//               <img 
//                 src="https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-lagos-nga/coding-bootcamp-lagos-nga-tech-education-for-kids-in-lagos-nigeria-starting-early/thumbnail01.webp"
//                 alt="Phantomire alumni building projects"
//                 className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision, Mission, Values */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-sm mb-4">
//             Our Foundation
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">
//             Vision, Mission & Core Values
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 shadow-xl">
//               <h3 className="text-3xl font-bold text-purple-900 mb-6">Vision</h3>
//               <p className="text-md text-black">
//                 A Nigeria where every young person wields digital tools with empathy, integrity, and innovation, creating technology that heals communities, fights injustice, and competes on the global stage.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 shadow-xl">
//               <h3 className="text-3xl font-bold text-purple-900 mb-6">Mission</h3>
//               <p className="text-md text-black">
//                 To deliver affordable, practical tech education that blends cutting-edge skills with emotional intelligence and ethical principles, empowering Nigerian youth to build trust-based digital solutions that solve real problems.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 shadow-xl">
//               <h3 className="text-3xl font-bold text-purple-900 mb-6">Core Values</h3>
//               <ul className="text-md text-black space-y-4">
//                 <li><strong>Empathy First</strong> — Tech that understands people</li>
//                 <li><strong>Integrity Always</strong> — Building trust in every line of code</li>
//                 <li><strong>Innovation with Purpose</strong> — Solving Nigerian problems creatively</li>
//                 <li><strong>Inclusivity for All</strong> — Opportunity without barriers</li>
//                 <li><strong>Community Impact</strong> — Lifting others as we rise</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-sm mb-4">
//             Our Impact
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">
//             Creating Real Change Across Nigeria
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 text-md text-black">
//               <p>
//                 Phantomire alumni are already making waves, freelancing globally, launching startups, and building tools like Pearlvix that protect everyday Nigerians from online scams.
//               </p>
//               <p>
//                 Through partnerships with schools, churches, and communities nationwide, we're reaching thousands with skills that lead to real income, confidence, and dignity.
//               </p>
//               <p>
//                 We're especially proud of our focus on ethical tech: teaching students to code responsibly, avoid burnout, and create digital experiences that build trust in our society.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//           <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg" alt="Students coding together" className="rounded-2xl shadow-md w-full h-40 object-cover" />
//               <img src="https://assets.newsweek.com/wp-content/uploads/2025/08/525812-nigerian-tech-workers.jpg?w=1600&quality=80&webp=1" alt="Tech team collaboration" className="rounded-2xl shadow-md w-full h-40 object-cover" />
//               <img src="/pstudents.JPEG" alt="Youth tech group" className="rounded-2xl shadow-md w-full h-40 object-cover col-span-2" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team / People Section */}
//     <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Meet Us</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">The People Behind Phantomire</h2>
//           <p className="text-base text-gray-700 mb-10 max-w-4xl">
//             Our team of experienced developers, designers, educators, and community builders is united by one goal: seeing Nigerian youth rise through tech.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
//               <img src="https://edutechbusiness.net/wp-content/uploads/2025/10/BLOG-53_IMAGE-1-1024x683.png" alt="Student portfolio project" className="w-full h-64 object-cover rounded-xl mb-6" />
//               <h3 className="text-xl font-bold text-gray-900">Dedicated Instructors</h3>
//               <p className="text-base text-gray-700 mt-4">Industry pros teaching with passion and real-world experience</p>
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
//               <img src="/pstudents.JPEG" alt="Community impact event" className="w-full h-64 object-cover rounded-xl mb-6" />
//               <h3 className="text-xl font-bold text-gray-900">Community Leaders</h3>
//               <p className="text-base text-gray-700 mt-4">Driving partnerships and events that expand our reach</p>
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
//               <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2024/08/17/codecng.jpg" alt="Youth empowerment program" className="w-full h-64 object-cover rounded-xl mb-6" />
//               <h3 className="text-xl font-bold text-gray-900">Support Team</h3>
//               <p className="text-base text-gray-700 mt-4">Ensuring every student has the resources to succeed</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
//         <div className="max-w-7xl mx-auto px-6 text-center text-white">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Join the Movement
//           </h2>
//           <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 opacity-90">
//             Whether you're ready to learn, partner, or support, let's build a better digital Nigeria together.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <a href="/register">
//               <button className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
//                 Start Learning Today
//               </button>
//             </a>
//             <a href="mailto:phantomire@gmail.com">
//               <button className="border-4 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition">
//                 Partner With Us
//               </button>
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }




// app/about/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
  BrainCircuit,
  Palette,
  GraduationCap,
  Users,
  Heart,
  Shield,
  Lightbulb,
  Globe,
  Target,
  Award,
  BookOpen,
  Sparkles,
  Zap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ChevronRight,
  Eye,
} from "lucide-react";

// ============================================================
// TEAM MEMBERS DATA
// ============================================================
const teamMembers = [
  {
    id: 1,
    name: "Akinwunmi Femi",
    role: "Founder & CEO",
    bio: "Passionate about building tech solutions that solve Nigerian problems. 7+ years in software development and tech education.",
    image: "/founder.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
 {
  id: 2,
  name: "Stephen Bolaji",
  role: "Co-Founder/ Brand Strategist",
  bio: "A dedicated brand strategist passionate about building meaningful brands that connect with people and stand out in competitive markets. Stephen combines creative thinking, market insight, and strategic storytelling to help businesses define their identity, communicate their value, and build lasting relationships with their audience.",
  image: "stephen.jpeg",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  }
},
  // {
  //   id: 3,
  //   name: "Emeka Nwachukwu",
  //   role: "Lead Developer",
  //   bio: "Full-stack developer specializing in scalable web applications and cloud infrastructure. Mentor at Phantomire Academy.",
  //   image: "/pstudents.JPEG",
  //   social: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     twitter: "https://twitter.com"
  //   }
  // },
  // {
  //   id: 4,
  //   name: "Aisha Bello",
  //   role: "UI/UX Design Lead",
  //   bio: "Creative designer passionate about human-centered design and creating digital experiences that delight users.",
  //   image: "https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2024/08/17/codecng.jpg",
  //   social: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //     instagram: "https://instagram.com"
  //   }
  // },
  // {
  //   id: 5,
  //   name: "David Ogunleye",
  //   role: "Community Manager",
  //   bio: "Building and nurturing the Phantomire community. Organizes events, workshops, and partnership programs.",
  //   image: "https://assets.newsweek.com/wp-content/uploads/2025/08/525812-nigerian-tech-workers.jpg?w=1600&quality=80&webp=1",
  //   social: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //     instagram: "https://instagram.com"
  //   }
  // },
  // {
  //   id: 6,
  //   name: "Grace Okonkwo",
  //   role: "AI & Innovation Lead",
  //   bio: "Machine learning engineer focused on building AI solutions for African challenges. Passionate about ethical AI.",
  //   image: "https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-lagos-nga/coding-bootcamp-lagos-nga-tech-education-for-kids-in-lagos-nigeria-starting-early/thumbnail01.webp",
  //   social: {
  //     linkedin: "https://linkedin.com",
  //     github: "https://github.com",
  //     twitter: "https://twitter.com"
  //   }
  // }
];

// ============================================================
// TEAM MEMBER CARD COMPONENT
// ============================================================
const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-black/5">
      <div className="relative overflow-hidden aspect-[4/3] bg-purple-100">
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
            <Users size={48} className="text-purple-400" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="text-sm text-purple-600 font-medium mt-1">{member.role}</p>
        <p className="text-sm text-slate-600 mt-3 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

// ============================================================
// MAIN ABOUT PAGE
// ============================================================
export default function About() {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const displayedMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f5f2ef] text-[#111312]">

      {/* =========================================================
          PAGE HEADER
      ========================================================= */}
      <section className="pt-32 pb-12 bg-white border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-[-0.04em]">
              Building Nigeria's
              <br />
              <span className="text-purple-600">Digital Future</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Phantomire Technologies was born from a deep belief: tech should not just connect us, 
              it should heal, empower, and uplift.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY SECTION
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-[#f5f2ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Tech with Heart
                <span className="block text-purple-600">and Integrity</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In a digital Nigeria full of potential but plagued by scams, burnout, and inequality, 
                  we saw the need for something different: training that teaches not only code, but conscience.
                </p>
                <p>
                  We combine world-class skills in web development, UI/UX, graphics, animation, digital 
                  marketing, and entrepreneurship with emotional intelligence and ethical practices, so our 
                  students build apps that create trust, not exploit it.
                </p>
                <p>
                  From our innovative escrow app <strong className="text-purple-600">Pearlvix</strong> 
                  (designed to end online transaction fraud) to partnerships across Lagos and Nigeria, 
                  we're raising a generation of creators who use tech for good.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg"
                    alt="Nigerian youth learning web development"
                    className="w-full h-56 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <img
                  src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/01/28/sparkit.jpg"
                  alt="Pearlvix escrow app"
                  className="w-full h-40 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src="https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-lagos-nga/coding-bootcamp-lagos-nga-tech-education-for-kids-in-lagos-nigeria-starting-early/thumbnail01.webp"
                  alt="Phantomire tech workshop"
                  className="w-full h-40 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION, MISSION, VALUES
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Vision, Mission & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="group bg-[#f5f2ef] rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A Nigeria where every young person wields digital tools with empathy, integrity, and 
                innovation, creating technology that heals communities, fights injustice, and competes 
                on the global stage.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-[#f5f2ef] rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver affordable, practical tech education that blends cutting-edge skills with 
                emotional intelligence and ethical principles, empowering Nigerian youth to build 
                trust-based digital solutions that solve real problems.
              </p>
            </div>

            {/* Core Values */}
            <div className="group bg-[#f5f2ef] rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Values</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Empathy First</strong> — Tech that understands people</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Integrity Always</strong> — Building trust in every line of code</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Innovation with Purpose</strong> — Solving Nigerian problems creatively</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Inclusivity for All</strong> — Opportunity without barriers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Community Impact</strong> — Lifting others as we rise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT SECTION
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-[#f5f2ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                Our Impact
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Creating Real Change
                <span className="block text-purple-600">Across Nigeria</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Phantomire alumni are already making waves, freelancing globally, launching startups, 
                  and building tools like Pearlvix that protect everyday Nigerians from online scams.
                </p>
                <p>
                  Through partnerships with schools, churches, and communities nationwide, we're reaching 
                  thousands with skills that lead to real income, confidence, and dignity.
                </p>
                <p>
                  We're especially proud of our focus on ethical tech: teaching students to code 
                  responsibly, avoid burnout, and create digital experiences that build trust in our society.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/register"
                  className="group inline-flex items-center gap-3 bg-[#111312] text-white rounded-full px-7 py-3.5 font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
                >
                  Join Our Community
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="https://wa.me/2349161460898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black/15 rounded-full px-7 py-3.5 font-medium hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Partner With Us
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg"
                  alt="Students coding"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src="https://assets.newsweek.com/wp-content/uploads/2025/08/525812-nigerian-tech-workers.jpg?w=1600&quality=80&webp=1"
                  alt="Tech team"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl mt-8"
                />
                <img
                  src="/pstudents.jpeg"
                  alt="Youth tech group"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM SECTION
      ========================================================= */}
      <section id="team" className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                Meet Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                The People Behind
                <span className="block text-purple-600">Phantomire</span>
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl">
                Our team of experienced developers, designers, educators, and community builders is 
                united by one goal: seeing Nigerian youth rise through tech.
              </p>
            </div>
            {!showAllMembers && teamMembers.length > 3 && (
              <button
                onClick={() => setShowAllMembers(true)}
                className="group inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                View All Team Members
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {teamMembers.length > 3 && (
            <div className="flex justify-center gap-4 mt-12">
              {!showAllMembers ? (
                <button
                  onClick={() => setShowAllMembers(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#111312] text-white px-8 py-3.5 font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
                >
                  View All Team Members
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => setShowAllMembers(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-8 py-3.5 font-medium hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Show Less
                  <ChevronRight size={18} className="rotate-90" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative py-20 lg:py-28 bg-[#f5f2ef] overflow-hidden">
        <div
          className="absolute right-[-100px] top-[-120px] w-[500px] h-[500px] bg-purple-600/10"
          style={{
            clipPath:
              "polygon(20% 0, 85% 12%, 100% 52%, 75% 90%, 25% 100%, 0 52%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">Join the Movement</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Build a Better
            <span className="block text-purple-600">Digital Nigeria?</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're ready to learn, partner, or support, let's build a better digital Nigeria together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center gap-3 bg-[#111312] text-white rounded-full px-8 py-4 font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              Start Learning Today
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/2349161460898"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-black/15 rounded-full px-8 py-4 font-medium hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Partner With Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}