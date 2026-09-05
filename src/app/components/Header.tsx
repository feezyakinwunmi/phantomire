// "use client";

// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown, Bell } from "lucide-react";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";
//   const targetTime = new Date(2026, 3, 6, 23, 59, 59).getTime();
// const [now, setNow] = useState(Date.now());

// useEffect(() => {
//   const interval = setInterval(() => {
//     setNow(Date.now());
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);

// const diff = targetTime - now;

// const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
// const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
// const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
// const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

//   useEffect(() => {
//     if (!isHomePage) {
//       setShowAlert(false);
//       return;
//     }

//     const dismissed = sessionStorage.getItem("phantomireEventAlert2026");
//     if (!dismissed) {
//       setShowAlert(true);
//     }
//   }, [isHomePage]);

//   const handleDismiss = () => {
//     setShowAlert(false);
//     sessionStorage.setItem("phantomireEventAlert2026", "true");
//   };

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
//         setMobileMenuOpen(false);
//       }
//     }
//     if (mobileMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => document.removeEventListener("mousedown", handleClickOutside);
//     }
//   }, [mobileMenuOpen]);

//   return (
//     <>
//       <header className="fixed top-0 md:top-2 left-0 right-0 bg-black md:bg-transparent text-black  z-50">
//         <div className="max-w-7xl mx-auto px-2 flex md:justify-center justify-between md:items-center gap-8 mt-5">
//           <a href="/" className="text-3xl font-bold text-purple-900">
//             <img src="logo.png" alt="Phantomire Logo" className="h-10 w-[40] md:h-10 md:w-[50]" /> 
//           </a>

//           <nav className="hidden lg:flex bg-white w-auto px-8 py-3 shadow-md rounded-[50] items-center space-x-8 font-bold">
//           {/* make text popup on hover */}
          

//             <a href="/" className="hover:text-purple-900 transition ">Home</a>
//             <a href="/about" className="hover:text-purple-900 transition">About</a>
//                         <a href="/courses" className="hover:text-purple-900 transition">Courses</a>

            
           
            
//             <a href="/events" className="hover:text-purple-900 transition">Events</a>
//             {/* <a href="/gallery" className="hover:text-purple-900 transition">Gallery</a> */}
//             <a href="/register" className="hover:text-purple-900 transition">Register</a>
//           </nav>

//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <nav ref={mobileMenuRef} className="lg:hidden bg-black text-white  border-t border-purple-200 shadow-lg px-6 py-8">
//             <ul className="space-y-5 text-left font-medium">
//               <li><a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
//               <li><a href="/about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
//               <li><a href="/events" onClick={() => setMobileMenuOpen(false)}>Events</a></li>
//               <li><a href="/courses" onClick={() => setMobileMenuOpen(false)}>courses</a></li>
//               <li><a href="/register" onClick={() => setMobileMenuOpen(false)}>Register</a></li>
//             </ul>
//           </nav>
//         )}
//       </header>

//  {showAlert && diff > 0 && (
//   <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4">
//     <div className="bg-purple-900 text-white rounded-xl shadow-xl px-4 py-3">

//       <div className="flex justify-between items-start">
//         <div className="flex items-center gap-2">
//           <Bell size={18} className="text-amber-300" />
//           <p className="font-semibold text-sm">
//            Next batch start  April 13th, 2026
//           </p>
//         </div>

//         <button
//           onClick={handleDismiss}
//           className="hover:opacity-70"
//         >
//           <X size={16} />
//         </button>
//       </div>

//       <div className="mt-2 text-center">
//         <p className="text-xs opacity-90 mb-1">
//           Registration closes in
//         </p>

//         <p className="text-lg font-bold tracking-wide">
//           {days}d {hours.toString().padStart(2, "0")}h{" "}
//           {minutes.toString().padStart(2, "0")}m{" "}
//           {seconds.toString().padStart(2, "0")}s
//         </p>

//         <a
//           href="https://forms.gle/csDMNuSugCZBXi4E7"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block mt-2 bg-white text-purple-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
//         >
//           Register Now →
//         </a>
//       </div>
//     </div>
//   </div>
// )}
//     </>
//   );
// }



// app/components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Bell, 
  Home, 
  Info, 
  BookOpen, 
  Calendar, 
  UserPlus, 
  Phone, 
  Briefcase,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Layers,
  Palette,
  Code2,
  BrainCircuit,
  Shield,
  BarChart3,
  Users,
  Globe2,
  MessageCircle,
  Mail,
  ArrowRight,
  CalendarDays,
  Clock,
  CheckCircle,
  Rocket,
  Icon
} from "lucide-react";

// ============================================================
// BOOK A CALL MODAL COMPONENT
// ============================================================
const BookCallModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Available time slots
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends (optional)
      // if (date.getDay() === 0 || date.getDay() === 6) continue;
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatDateValue = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message with booking details
    const message = `Hello Phantomire Technologies! 👋

I'd like to book a call with your team.

📅 Booking Details:
• Date: ${selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : 'Not specified'}
• Time: ${selectedTime || 'Not specified'}

👤 My Information:
• Name: ${name}
• Email: ${email}
• Phone: ${phone || 'Not provided'}

📋 Purpose of Call:
${purpose || 'Not specified'}

Please confirm my booking. Thank you!`;

    const whatsappUrl = `https://wa.me/2349161460898?text=${encodeURIComponent(message)}`;
    
    // Simulate loading and then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedDate("");
        setSelectedTime("");
        setName("");
        setEmail("");
        setPhone("");
        setPurpose("");
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-black/5 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <CalendarDays size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Book a Call</h3>
              <p className="text-xs text-slate-500">Schedule a time to chat with our team</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Booking Request Sent!</h4>
              <p className="text-slate-600 text-sm">
                Your booking request has been sent via WhatsApp. We'll confirm your appointment shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableDates.map((date, index) => {
                    const dateValue = formatDateValue(date);
                    const isSelected = selectedDate === dateValue;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedDate(dateValue)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                            : "bg-slate-50 text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                        }`}
                      >
                        {formatDate(date)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Time <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1 ${
                        selectedTime === time
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                          : "bg-slate-50 text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                      }`}
                    >
                      <Clock size={14} />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-slate-50 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-slate-50 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-slate-50 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Purpose of Call <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-slate-50 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="Course Inquiry">Course Inquiry</option>
                  <option value="Project Discussion">Project Discussion</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Business Collaboration">Business Collaboration</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTime || !name || !email || !purpose}
                className="w-full bg-[#111312] text-white py-3.5 rounded-xl font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <CalendarDays size={18} />
                    Request Booking
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                You'll receive a confirmation via WhatsApp. We typically respond within 15 minutes.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MAIN HEADER COMPONENT
// ============================================================
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const targetTime = new Date(2026, 3, 6, 23, 59, 59).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const diff = targetTime - now;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setShowAlert(false);
      return;
    }

    const dismissed = sessionStorage.getItem("phantomireEventAlert2026");
    if (!dismissed) {
      setShowAlert(true);
    }
  }, [isHomePage]);

  const handleDismiss = () => {
    setShowAlert(false);
    sessionStorage.setItem("phantomireEventAlert2026", "true");
  };

  // Close mobile menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    }
    if (mobileMenuOpen || isServicesOpen || isCoursesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen, isServicesOpen, isCoursesOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsCoursesOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    {href:"/solutions", label:"Solutions", Icon: Rocket},
    { href: "/services", label: "Services", icon: Briefcase, hasDropdown: true },
    { href: "/courses", label: "Courses", icon: BookOpen, hasDropdown: true },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const serviceLinks = [
    { href: "/services#software", label: "Software Development", icon: Code2 },
    { href: "/services#ai", label: "AI & Machine Learning", icon: BrainCircuit },
    { href: "/services#digital", label: "Digital Products", icon: Layers },
    { href: "/services#creative", label: "Creative & Brand", icon: Palette },
    { href: "/services#security", label: "Cybersecurity", icon: Shield },
    { href: "/services#analytics", label: "Data Analytics", icon: BarChart3 },
  ];

  const courseLinks = [
    { href: "/courses", label: "Frontend Development", icon: Code2 },
    { href: "/courses", label: "Backend Development", icon: BrainCircuit },
    { href: "/courses", label: "UI/UX Design", icon: Palette },
    { href: "/courses", label: "Videography & Editing", icon: Layers },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-black/5" 
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Phantomire Technologies" 
                className="h-10 w-auto md:h-12"
              />
              <span className="hidden sm:block text-lg font-bold text-slate-900 tracking-tight">
                Phantomire
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                if (link.hasDropdown) {
                  const isServiceActive = link.href === "/services" && pathname.includes("/services");
                  const isCourseActive = link.href === "/courses" && pathname.includes("/courses");
                  
                  return (
                    <div 
                      key={link.href}
                      className="relative"
                      ref={link.label === "Services" ? servicesRef : coursesRef}
                    >
                      <button
                        onClick={() => {
                          if (link.label === "Services") {
                            setIsServicesOpen(!isServicesOpen);
                            setIsCoursesOpen(false);
                          } else {
                            setIsCoursesOpen(!isCoursesOpen);
                            setIsServicesOpen(false);
                          }
                        }}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                          (link.label === "Services" && isServiceActive) ||
                          (link.label === "Courses" && isCourseActive)
                            ? "text-purple-700 bg-purple-50"
                            : "text-slate-700"
                        }`}
                      >
                        <Icon size={18} />
                        {link.label}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            (link.label === "Services" && isServicesOpen) ||
                            (link.label === "Courses" && isCoursesOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Dropdowns */}
                      {(link.label === "Services" && isServicesOpen) && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-black/5 py-2 overflow-hidden animate-fade-in-down">
                          <div className="px-3 py-2 border-b border-black/5">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Services</p>
                          </div>
                          {serviceLinks.map((service) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <ServiceIcon size={16} className="text-purple-500" />
                                {service.label}
                              </Link>
                            );
                          })}
                          <div className="border-t border-black/5 mt-2 pt-2 px-3">
                            <Link
                              href="/services"
                              className="flex items-center justify-between text-sm font-medium text-purple-600 hover:text-purple-700 px-1 py-1.5"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              View All Services
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>
                      )}

                      {(link.label === "Courses" && isCoursesOpen) && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-black/5 py-2 overflow-hidden animate-fade-in-down">
                          <div className="px-3 py-2 border-b border-black/5">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Programs</p>
                          </div>
                          {courseLinks.map((course) => {
                            const CourseIcon = course.icon;
                            return (
                              <Link
                                key={course.href}
                                href={course.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                                onClick={() => setIsCoursesOpen(false)}
                              >
                                <CourseIcon size={16} className="text-purple-500" />
                                {course.label}
                              </Link>
                            );
                          })}
                          <div className="border-t border-black/5 mt-2 pt-2 px-3">
                            <Link
                              href="/courses"
                              className="flex items-center justify-between text-sm font-medium text-purple-600 hover:text-purple-700 px-1 py-1.5"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              View All Courses
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-700 ${
                      isActive(link.href)
                        ? "text-purple-700 bg-purple-50"
                        : "text-slate-700"
                    }`}
                  >
                    {/* <Icon size={18} /> */}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side - Book a Call & Register */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Book a Call Button */}
              <button
                onClick={() => setIsBookCallOpen(true)}
                className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
              >
                <CalendarDays size={16} />
                Book a Call
              </button>

              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-[#111312] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
              >
                <UserPlus size={16} />
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 rounded-full hover:bg-purple-50 transition-colors text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav 
            ref={mobileMenuRef} 
            className="lg:hidden bg-white border-t border-black/5 shadow-xl px-4 py-6 overflow-y-auto max-h-[calc(100vh-64px)]"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                
                if (link.hasDropdown) {
                  const isOpen = link.label === "Services" ? isServicesOpen : isCoursesOpen;
                  const links = link.label === "Services" ? serviceLinks : courseLinks;
                  const title = link.label === "Services" ? "Our Services" : "Our Programs";
                  
                  return (
                    <div key={link.href} className="border-b border-black/5 last:border-0">
                      <button
                        onClick={() => {
                          if (link.label === "Services") {
                            setIsServicesOpen(!isServicesOpen);
                            setIsCoursesOpen(false);
                          } else {
                            setIsCoursesOpen(!isCoursesOpen);
                            setIsServicesOpen(false);
                          }
                        }}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={20} className="text-purple-500" />
                          {link.label}
                        </span>
                        <ChevronRight 
                          size={18} 
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="ml-4 pl-4 border-l-2 border-purple-200 space-y-1 mb-2">
                          <div className="px-4 py-2">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</p>
                          </div>
                          {links.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <ItemIcon size={16} className="text-purple-500" />
                                {item.label}
                              </Link>
                            );
                          })}
                          <Link
                            href={link.href}
                            className="flex items-center justify-between text-sm font-medium text-purple-600 hover:text-purple-700 px-4 py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive(link.href)
                        ? "bg-purple-50 text-purple-700"
                        : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={20} className="text-purple-500" />
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Book a Call */}
              <div className="pt-4 mt-4 border-t border-black/5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookCallOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full border-2 border-purple-600 text-purple-600 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <CalendarDays size={18} />
                  Book a Call
                </button>
              </div>

              {/* Mobile Register CTA */}
              <div className="pt-3">
                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 w-full bg-[#111312] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UserPlus size={18} />
                  Register Now
                </Link>
              </div>

              {/* Social/Contact Links */}
              <div className="flex justify-center gap-4 pt-4">
                <a 
                  href="https://wa.me/2349161460898" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                >
                  <MessageCircle size={18} />
                </a>
                <a 
                  href="mailto:phantomire@gmail.com" 
                  className="p-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  <Globe2 size={18} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Book a Call Modal */}
      <BookCallModal 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />

      {/* Event Alert Banner */}
      {showAlert && diff > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-2xl shadow-2xl px-5 py-4 border border-white/10 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Bell size={18} className="text-amber-300 animate-pulse" />
                <p className="font-semibold text-sm">
                  Next batch starts April 13th, 2026
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="hover:opacity-70 transition-opacity p-1"
                aria-label="Dismiss alert"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-2 text-center">
              <p className="text-xs text-white/60 mb-1.5">
                Registration closes in
              </p>
              <p className="text-xl font-bold tracking-wide font-mono">
                {days}d {hours.toString().padStart(2, "0")}h{" "}
                {minutes.toString().padStart(2, "0")}m{" "}
                {seconds.toString().padStart(2, "0")}s
              </p>
              <a
                href="https://forms.gle/csDMNuSugCZBXi4E7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-white text-purple-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out forwards;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}