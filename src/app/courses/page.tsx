// app/courses/page.tsx
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
  Layers3,
  GraduationCap,
  Clock,
  Award,
  Users,
  BookOpen,
  Target,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Play,
  Video,
  Monitor,
  Smartphone,
  Database,
  Server,
  Globe,
  PenTool,
  Film,
  Music,
  Mic,
  Star,
  TrendingUp,
  Briefcase,
  Calendar,
  ChevronRight,
  Cpu,
  Network,
  Lock,
  Key,
  Eye,
  Scan,
  AlertTriangle,
  Bug,
  Fingerprint,
  Activity,
  BarChart3,
  Cloud,
  Terminal,
  GitBranch,
  Workflow,
  Gauge,
  Zap as ZapIcon,
  Layers,
  Film as FilmIcon,
  Music2,
  PenTool as PenToolIcon,
  Megaphone,
  FileVideo,
  Sparkles as SparklesIcon,
  Gem,
} from "lucide-react";

// ============================================================
// COURSE DATA
// ============================================================
const courses = [
  {
    id: 1,
    title: "Frontend Development",
    subtitle: "Web Development",
    description: "Master modern web development with React, Next.js, and responsive design. Build stunning user interfaces from scratch.",
    icon: Code2,
    color: "purple",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    students: 85,
    rating: 4.9,
    modules: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+",
      "React & Next.js",
      "Responsive Design",
      "State Management",
      "API Integration",
      "Performance Optimization",
      "Deployment & Hosting"
    ],
    image: "https://img-c.udemycdn.com/course/750x422/5178116_6858.jpg",
    features: ["Live Classes", "Project-Based", "1-on-1 Mentorship", "Job Placement Support"],
    tags: ["Web", "React", "JavaScript"]
  },
  {
    id: 2,
    title: "Backend Development",
    subtitle: "API & Server",
    description: "Learn to build robust server-side applications with Node.js, Python, and databases. Create scalable APIs and microservices.",
    icon: BrainCircuit,
    color: "blue",
    duration: "14 weeks",
    level: "Intermediate",
    students: 62,
    rating: 4.8,
    modules: [
      "Node.js & Express",
      "Python & Django",
      "Database Design",
      "RESTful APIs",
      "Authentication & Security",
      "Cloud Deployment",
      "Microservices",
      "Performance & Scaling"
    ],
    image: "https://blog.postman.com/wp-content/uploads/2023/05/23PST0060-How-To-Create-a-REST-API-with-Node-js-and-Express-v1.jpg",
    features: ["Live Classes", "Project-Based", "1-on-1 Mentorship", "Cloud Access"],
    tags: ["API", "Node.js", "Python"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    subtitle: "Product Design",
    description: "Master the art of creating beautiful, user-centered digital experiences. Learn design thinking, prototyping, and user research.",
    icon: Palette,
    color: "pink",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    students: 93,
    rating: 4.9,
    modules: [
      "Design Principles",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma Mastery",
      "Design Systems",
      "User Testing",
      "Portfolio Building"
    ],
    image: "https://s3-alpha.figma.com/hub/file/4138977549/ca66be38-76e4-4b65-8cde-2f20a9559889-cover.png",
    features: ["Live Classes", "Portfolio Project", "1-on-1 Mentorship", "Design Tools Access"],
    tags: ["Design", "Figma", "UX"]
  },
  {
    id: 4,
    title: "Videography & Editing",
    subtitle: "Creative Production",
    description: "Learn professional video production, editing, motion graphics, and storytelling. Create content that captivates audiences.",
    icon: Layers3,
    color: "emerald",
    duration: "10 weeks",
    level: "Beginner",
    students: 78,
    rating: 4.7,
    modules: [
      "Video Production Basics",
      "Adobe Premiere Pro",
      "After Effects",
      "Motion Graphics",
      "Color Grading",
      "Audio Editing",
      "Storytelling",
      "Content Strategy"
    ],
    image: "https://static.skillshare.com/uploads/discussion/tmp/de2edd05.jpg",
    features: ["Live Classes", "Practical Projects", "1-on-1 Mentorship", "Studio Access"],
    tags: ["Video", "Editing", "Motion"]
  },
  {
    id: 5,
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description: "Master SEO, social media marketing, content strategy, and analytics. Drive growth and build brand presence online.",
    icon: TrendingUp,
    color: "orange",
    duration: "8 weeks",
    level: "Beginner",
    students: 120,
    rating: 4.6,
    modules: [
      "SEO Fundamentals",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Analytics & Reporting",
      "PPC Advertising",
      "Brand Building",
      "Growth Hacking"
    ],
    image: "https://images.unsplash.com/photo-1432889821006-c4c5c3dd7df0?w=800&h=400&fit=crop",
    features: ["Live Classes", "Real Campaigns", "1-on-1 Mentorship", "Certification"],
    tags: ["SEO", "Social Media", "Analytics"]
  },
  {
    id: 6,
    title: "Data Analytics",
    subtitle: "Business Intelligence",
    description: "Learn to analyze data, create visualizations, and make data-driven decisions. Master tools like Python, SQL, and Power BI.",
    icon: BarChart3,
    color: "violet",
    duration: "12 weeks",
    level: "Intermediate",
    students: 55,
    rating: 4.8,
    modules: [
      "Python for Data Science",
      "SQL & Databases",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning Basics",
      "Power BI & Tableau",
      "Business Intelligence",
      "Data Storytelling"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    features: ["Live Classes", "Real Datasets", "1-on-1 Mentorship", "Industry Projects"],
    tags: ["Data", "Python", "Analytics"]
  },
  // NEW COURSES
  {
    id: 7,
    title: "Cybersecurity",
    subtitle: "Ethical Hacking & Defense",
    description: "Learn to protect systems, networks, and data from cyber threats. Master ethical hacking, security auditing, and incident response.",
    icon: Shield,
    color: "red",
    duration: "14 weeks",
    level: "Intermediate",
    students: 48,
    rating: 4.9,
    modules: [
      "Network Security Fundamentals",
      "Ethical Hacking & Penetration Testing",
      "Vulnerability Assessment",
      "Security Auditing",
      "Incident Response",
      "Cryptography",
      "Security Compliance",
      "Cloud Security"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    features: ["Live Labs", "Real-World Scenarios", "CTF Challenges", "Certification Prep"],
    tags: ["Security", "Hacking", "Network"]
  },
  {
    id: 8,
    title: "Artificial Intelligence",
    subtitle: "Machine Learning & AI",
    description: "Dive deep into AI and machine learning. Build intelligent systems, neural networks, and AI-powered applications.",
    icon: Cpu,
    color: "indigo",
    duration: "16 weeks",
    level: "Advanced",
    students: 42,
    rating: 4.9,
    modules: [
      "Machine Learning Fundamentals",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Model Deployment",
      "Ethics in AI",
      "Generative AI"
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    features: ["Live Sessions", "Research Projects", "Industry Mentorship", "AI Tools Access"],
    tags: ["AI", "Machine Learning", "Neural Networks"]
  },
  {
    id: 9,
    title: "Animation & Motion Graphics",
    subtitle: "3D & 2D Animation",
    description: "Master the art of animation, motion graphics, and 3D modeling. Create stunning visuals for film, gaming, and digital media.",
    icon: FilmIcon,
    color: "cyan",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    students: 65,
    rating: 4.7,
    modules: [
      "2D Animation Fundamentals",
      "3D Modeling & Texturing",
      "Motion Graphics",
      "Character Animation",
      "Visual Effects",
      "Animation Principles",
      "Compositing",
      "Portfolio Development"
    ],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=400&fit=crop",
    features: ["Live Classes", "Software Access", "Portfolio Build", "Industry Projects"],
    tags: ["Animation", "3D", "Motion Graphics"]
  },
  {
    id: 10,
    title: "Cloud Computing",
    subtitle: "AWS, Azure & GCP",
    description: "Master cloud infrastructure, deployment, and DevOps. Learn to build scalable, resilient cloud-native applications.",
    icon: Cloud,
    color: "teal",
    duration: "12 weeks",
    level: "Intermediate",
    students: 38,
    rating: 4.8,
    modules: [
      "Cloud Fundamentals",
      "AWS Services",
      "Azure Services",
      "GCP Services",
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Containerization (Docker/K8s)",
      "Cloud Security & Monitoring"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
    features: ["Live Labs", "Cloud Access", "Certification Prep", "Real Projects"],
    tags: ["Cloud", "AWS", "DevOps"]
  },
  {
    id: 11,
    title: "DevOps Engineering",
    subtitle: "Development & Operations",
    description: "Learn to bridge development and operations with CI/CD, automation, and infrastructure management. Master the DevOps lifecycle.",
    icon: GitBranch,
    color: "rose",
    duration: "12 weeks",
    level: "Intermediate",
    students: 35,
    rating: 4.7,
    modules: [
      "DevOps Fundamentals",
      "CI/CD Pipelines",
      "Containerization",
      "Orchestration (Kubernetes)",
      "Infrastructure Automation",
      "Monitoring & Logging",
      "Security in DevOps",
      "Cloud DevOps"
    ],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
    features: ["Live Labs", "Real Projects", "Tools Access", "Certification Prep"],
    tags: ["DevOps", "CI/CD", "Kubernetes"]
  },
  {
    id: 12,
    title: "Game Development",
    subtitle: "Unity & Unreal Engine",
    description: "Build immersive games for mobile, console, and PC. Master game design, Unity, Unreal Engine, and game development pipelines.",
    icon: Play,
    color: "amber",
    duration: "14 weeks",
    level: "Intermediate",
    students: 45,
    rating: 4.8,
    modules: [
      "Game Design Fundamentals",
      "Unity Development",
      "Unreal Engine",
      "Game Physics & AI",
      "Multiplayer Networking",
      "Game Optimization",
      "Asset Pipeline",
      "Publishing & Monetization"
    ],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop",
    features: ["Live Sessions", "Game Projects", "Engine Access", "Portfolio Build"],
    tags: ["Games", "Unity", "Unreal"]
  },
  {
    id: 13,
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    description: "Build native and cross-platform mobile apps using React Native and Flutter. Master mobile UI/UX, performance, and app store deployment.",
    icon: Smartphone,
    color: "lime",
    duration: "12 weeks",
    level: "Intermediate",
    students: 52,
    rating: 4.7,
    modules: [
      "Mobile Development Fundamentals",
      "React Native",
      "Flutter",
      "Mobile UI/UX",
      "State Management",
      "API Integration",
      "App Store Deployment",
      "Mobile Security"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    features: ["Live Classes", "App Projects", "Mentorship", "Store Launch Support"],
    tags: ["Mobile", "React Native", "Flutter"]
  },
  {
    id: 14,
    title: "Blockchain Development",
    subtitle: "Web3 & Smart Contracts",
    description: "Learn blockchain development, smart contracts, and decentralized applications. Master Ethereum, Solidity, and Web3 technologies.",
    icon: Lock,
    color: "fuchsia",
    duration: "14 weeks",
    level: "Advanced",
    students: 28,
    rating: 4.9,
    modules: [
      "Blockchain Fundamentals",
      "Smart Contract Development",
      "Ethereum & Solidity",
      "Web3 Integration",
      "DApp Development",
      "DeFi & NFTs",
      "Blockchain Security",
      "Crypto Economics"
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    features: ["Live Sessions", "DApp Projects", "Web3 Access", "Industry Mentorship"],
    tags: ["Blockchain", "Web3", "Solidity"]
  },
  {
    id: 15,
    title: "Digital Art & Illustration",
    subtitle: "Creative Design",
    description: "Master digital illustration, concept art, and visual storytelling. Learn industry-standard tools and techniques for creative professionals.",
    icon: PenToolIcon,
    color: "mint",
    duration: "10 weeks",
    level: "Beginner",
    students: 70,
    rating: 4.6,
    modules: [
      "Digital Illustration Fundamentals",
      "Concept Art & Character Design",
      "Environment & Background Art",
      "Color Theory & Composition",
      "Digital Painting Techniques",
      "Industry Tools (Photoshop, Procreate)",
      "Portfolio Development",
      "Freelance & Career Prep"
    ],
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=400&fit=crop",
    features: ["Live Classes", "Art Projects", "Tool Access", "Portfolio Review"],
    tags: ["Art", "Illustration", "Design"]
  },
  {
    id: 16,
    title: "Product Management",
    subtitle: "PM & Strategy",
    description: "Master product management, strategy, and execution. Learn to lead product development from ideation to launch.",
    icon: Target,
    color: "sky",
    duration: "10 weeks",
    level: "Intermediate",
    students: 32,
    rating: 4.7,
    modules: [
      "Product Management Fundamentals",
      "Product Strategy & Vision",
      "User Research & Insights",
      "Product Roadmapping",
      "Agile & Scrum",
      "Data-Driven Decision Making",
      "Go-to-Market Strategy",
      "Product Leadership"
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
    features: ["Live Sessions", "Real Projects", "Mentorship", "Certification"],
    tags: ["Product", "Strategy", "Agile"]
  }
];

// ============================================================
// COURSE CARD COMPONENT
// ============================================================
const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => {
  const Icon = course.icon;
  const [imageError, setImageError] = useState(false);

  const colorMap: Record<string, string> = {
    purple: "from-purple-600 to-indigo-600",
    blue: "from-blue-600 to-cyan-600",
    pink: "from-pink-600 to-rose-600",
    emerald: "from-emerald-600 to-teal-600",
    orange: "from-orange-600 to-amber-600",
    violet: "from-violet-600 to-purple-600",
    red: "from-red-600 to-rose-600",
    indigo: "from-indigo-600 to-purple-600",
    cyan: "from-cyan-600 to-blue-600",
    teal: "from-teal-600 to-emerald-600",
    rose: "from-rose-600 to-pink-600",
    amber: "from-amber-600 to-orange-600",
    lime: "from-lime-600 to-green-600",
    fuchsia: "from-fuchsia-600 to-pink-600",
    mint: "from-green-400 to-emerald-600",
    sky: "from-sky-600 to-blue-600",
  };

  const bgColorMap: Record<string, string> = {
    purple: "bg-purple-50",
    blue: "bg-blue-50",
    pink: "bg-pink-50",
    emerald: "bg-emerald-50",
    orange: "bg-orange-50",
    violet: "bg-violet-50",
    red: "bg-red-50",
    indigo: "bg-indigo-50",
    cyan: "bg-cyan-50",
    teal: "bg-teal-50",
    rose: "bg-rose-50",
    amber: "bg-amber-50",
    lime: "bg-lime-50",
    fuchsia: "bg-fuchsia-50",
    mint: "bg-green-50",
    sky: "bg-sky-50",
  };

  const textColorMap: Record<string, string> = {
    purple: "text-purple-600",
    blue: "text-blue-600",
    pink: "text-pink-600",
    emerald: "text-emerald-600",
    orange: "text-orange-600",
    violet: "text-violet-600",
    red: "text-red-600",
    indigo: "text-indigo-600",
    cyan: "text-cyan-600",
    teal: "text-teal-600",
    rose: "text-rose-600",
    amber: "text-amber-600",
    lime: "text-lime-600",
    fuchsia: "text-fuchsia-600",
    mint: "text-green-600",
    sky: "text-sky-600",
  };

  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-black/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 bg-slate-100">
        {!imageError ? (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full ${bgColorMap[course.color] || 'bg-slate-100'} flex items-center justify-center`}>
            <Icon size={64} className={textColorMap[course.color] || 'text-purple-600'} />
          </div>
        )}
        
        {/* Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
          <Star size={14} className="text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-slate-900">{course.rating}</span>
        </div>

        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
          {course.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium capitalize">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
            <p className="text-sm text-slate-500">{course.subtitle}</p>
          </div>
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[course.color] || 'from-purple-600 to-indigo-600'} flex items-center justify-center text-white flex-shrink-0`}>
            <Icon size={18} />
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">{course.description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-purple-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-purple-500" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-purple-500" />
            <span>{course.modules.length} modules</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.features.slice(0, 3).map((feature) => (
            <span key={feature} className="text-[10px] bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-100">
              {feature}
            </span>
          ))}
        </div>

        <Link
          href={`/courses/${course.id}`}
          className={`inline-flex items-center gap-2 text-sm font-semibold ${textColorMap[course.color] || 'text-purple-600'} group-hover:gap-3 transition-all`}
        >
          Learn More
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};

// ============================================================
// MAIN COURSES PAGE
// ============================================================
export default function CoursesPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    { label: "All", value: "all" },
    { label: "Development", value: "development" },
    { label: "Design & Creative", value: "design" },
    { label: "AI & Data", value: "ai" },
    { label: "Security", value: "security" },
    { label: "Cloud & DevOps", value: "cloud" },
    { label: "Mobile & Games", value: "mobile" },
    { label: "Business", value: "business" },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filter === "all") return matchesSearch;
    
    const categoryMap: Record<string, string[]> = {
      "development": ["purple", "blue"],
      "design": ["pink", "emerald", "mint"],
      "ai": ["violet", "indigo"],
      "security": ["red"],
      "cloud": ["teal", "rose"],
      "mobile": ["lime", "amber"],
      "business": ["orange", "sky"],
    };
    
    const matchesFilter = categoryMap[filter]?.includes(course.color) ?? false;
    return matchesSearch && matchesFilter;
  });

  // Count courses by category for display
  const totalCourses = courses.length;

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
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">Courses</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-[-0.04em]">
              Master the Skills
              <br />
              <span className="text-purple-600">You Need to Succeed</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Choose from {totalCourses} comprehensive courses designed to equip you with practical, 
              industry-relevant skills. Learn from experts and build a career you love.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTER & SEARCH
      ========================================================= */}
      <section className="py-8 bg-white border-b border-black/5 sticky top-16 z-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === f.value
                      ? "bg-[#111312] text-white hover:bg-purple-700"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2.5 rounded-full border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSES GRID
      ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {filteredCourses.length > 0 ? (
            <>
              <p className="text-sm text-slate-500 mb-6">
                Showing {filteredCourses.length} course{filteredCourses.length > 1 ? 's' : ''}
                {filter !== "all" && ` in ${filters.find(f => f.value === filter)?.label}`}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <BookOpen size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setFilter("all"); setSearchTerm(""); }}
                className="mt-4 text-purple-600 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          WHY LEARN WITH US
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Learn from the Best
              <span className="block text-purple-600">Build Your Future</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f5f2ef] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Expert Instructors</h3>
              <p className="text-sm text-slate-600">Learn from industry professionals with real-world experience</p>
            </div>

            <div className="bg-[#f5f2ef] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Practical Projects</h3>
              <p className="text-sm text-slate-600">Build a portfolio of real projects that showcase your skills</p>
            </div>

            <div className="bg-[#f5f2ef] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Industry Certification</h3>
              <p className="text-sm text-slate-600">Earn recognized certificates that validate your skills</p>
            </div>

            <div className="bg-[#f5f2ef] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Career Support</h3>
              <p className="text-sm text-slate-600">Get job placement assistance and interview preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL / CTA
      ========================================================= */}
      <section className="relative py-20 lg:py-28 bg-[#f5f2ef] overflow-hidden">
        <div
          className="absolute right-[-100px] top-[-120px] w-[500px] h-[500px] bg-purple-600/5"
          style={{
            clipPath:
              "polygon(20% 0, 85% 12%, 100% 52%, 75% 90%, 25% 100%, 0 52%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">Ready to Start?</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Take the First Step
            <span className="block text-purple-600">Towards Your Dream Career</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Join hundreds of students who have transformed their careers through our 
            practical, industry-focused courses. Your journey starts here.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center gap-3 bg-[#111312] text-white rounded-full px-8 py-4 font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              Enroll Now
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/2349161460898"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-black/15 rounded-full px-8 py-4 font-medium hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Chat with Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}