// import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-6 mt-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
//           <div>
//             <img src="logo.png" alt="Phantomire Logo" className="h-46 " />
//             <p className="text-gray-400">
//               Create, Explore, Thrive <br />
//               Empowering Nigerian youth with digital skills in Epe and beyond.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-3 text-gray-400">
//               <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
//               <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
//               <li><a href="/courses" className="hover:text-purple-400 transition">Courses</a></li>
//               <li><a href="/events" className="hover:text-purple-400 transition">Events</a></li>
//               <li><a href="/register" className="hover:text-purple-400 transition">Register</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold mb-6">Contact</h4>
//             <p className="text-gray-400 mb-4">
//               Epe, Lagos, Nigeria<br />
//               info.phantomire@gmail.com<br />
//               WhatsApp: +234 916 136 0898
//             </p>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
//             <p className="text-gray-400 mb-6">Connect with @phantomire01 on all platforms</p>
//             <div className="flex space-x-6">
//               <a href="https://twitter.com/phantomire01" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
//                 <Twitter size={32} />
//               </a>
//               <a href="https://instagram.com/phantomire01" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
//                 <Instagram size={32} />
//               </a>
//               <a href="https://facebook.com/phantomire" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
//                 <Facebook size={32} />
//               </a>
//               <a href="https://linkedin.com/company/phantomire" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
//                 <Linkedin size={32} />
//               </a>
//               <a href="https://youtube.com/@phantomire01" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
//                 <Youtube size={32} />
//               </a>
//               <a href="https://wa.me/2349161460898" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
//                 <MessageCircle size={32} />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
//           <p>&copy; {new Date().getFullYear()} Phantomire Technologies. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }





// app/components/Footer.tsx
"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  Sparkles,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
    { href: "/register", label: "Register" },
  ];

  const services = [
    { href: "/services#software", label: "Software Development" },
    { href: "/services#ai", label: "AI & Machine Learning" },
    { href: "/services#digital", label: "Digital Products" },
    { href: "/services#creative", label: "Creative & Brand" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/phantomire01", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com/phantomire01", icon: Instagram, label: "Instagram" },
    { href: "https://facebook.com/phantomire", icon: Facebook, label: "Facebook" },
    { href: "https://linkedin.com/company/phantomire", icon: Linkedin, label: "LinkedIn" },
    { href: "https://youtube.com/@phantomire01", icon: Youtube, label: "YouTube" },
    { href: "https://wa.me/2349161460898", icon: MessageCircle, label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#111312] text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Phantomire Technologies" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Empowering Nigerian youth with digital skills, ethical tech practices, 
              and emotional intelligence. Building the next generation of technology 
              creators.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <Sparkles size={14} className="text-purple-400" />
              <span>Built with ❤️ from Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight 
                      size={12} 
                      className="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight 
                      size={12} 
                      className="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Get in Touch
            </h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">Epe, Lagos, Nigeria</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:info.phantomire@gmail.com"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  info.phantomire@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://wa.me/2349161460898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  +234 916 146 0898
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-white/30 mb-4 uppercase tracking-wider">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter / CTA */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white/60">
                Ready to start your tech journey?
              </h4>
              <p className="text-sm text-white/30">
                Join Phantomire Academy and build the skills you need to succeed.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} Phantomire Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-white/50 transition-colors">
              FAQ
            </Link>
            <span className="flex items-center gap-1">
              <Heart size={12} className="text-purple-400" />
              Made with purpose
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}