// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Send,
  Clock,
  Calendar,
  Building2,
  Users,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Loader2,
} from "lucide-react";

// ============================================================
// CONTACT PAGE
// ============================================================
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Project needs dropdown options
  const projectTypes = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "AI & Machine Learning Solution",
    "UI/UX Design",
    "Brand & Creative Design",
    "Digital Product Development",
    "E-commerce Platform",
    "API Development & Integration",
    "Cloud Migration",
    "Cybersecurity Solution",
    "Data Analytics & Business Intelligence",
    "Training & Workshop",
    "Consulting & Advisory",
    "Other",
  ];

  const budgets = [
    "Below ₦500,000",
    "₦500,000 - ₦1,000,000",
    "₦1,000,000 - ₦3,000,000",
    "₦3,000,000 - ₦5,000,000",
    "₦5,000,000 - ₦10,000,000",
    "Above ₦10,000,000",
    "Not sure yet",
  ];

  const timelines = [
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Not sure yet",
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+234 916 146 0898",
      href: "tel:+2349161460898",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info.phantomire@gmail.com",
      href: "mailto:info.phantomire@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null,
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Fri, 9:00 AM - 6:00 PM WAT",
      href: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message with all form data
    const message = `Hello Phantomire Technologies! 

I'm interested in working with you. Here are my project details:

📝 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || "Not provided"}

🛠 Service: ${formData.service || "Not specified"}
📋 Project Type: ${formData.projectType || "Not specified"}
💰 Budget: ${formData.budget || "Not specified"}
⏱ Timeline: ${formData.timeline || "Not specified"}

💬 Message:
${formData.message || "No additional message"}

I look forward to discussing this project with your team.`;

    const whatsappUrl = `https://wa.me/2349161460898?text=${encodeURIComponent(message)}`;
    
    // Simulate loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.open(whatsappUrl, '_blank');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-[-0.04em]">
              Let's Build
              <br />
              <span className="text-purple-600">Something Great</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Tell us what you're trying to solve, build or improve. We'll figure out the technology with you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFO & FORM
      ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            
            {/* Left - Contact Info */}
            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-black/5">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We're here to help you with your technology needs. Reach out to us through any of 
                  the channels below or fill out the form.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f2ef] transition-all duration-300 hover:bg-purple-50">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-slate-900 font-medium hover:text-purple-600 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-900 font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-black/5">
                  <p className="text-sm font-medium text-slate-900 mb-4">Connect With Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#f5f2ef] flex items-center justify-center text-slate-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#f5f2ef] flex items-center justify-center text-slate-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#f5f2ef] flex items-center justify-center text-slate-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://wa.me/2349161460898"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#f5f2ef] flex items-center justify-center text-slate-600 hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>

                {/* Quick WhatsApp */}
                <div className="mt-6 p-4 rounded-2xl bg-green-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Quick Response</p>
                      <a 
                        href="https://wa.me/2349161460898"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 font-medium hover:underline"
                      >
                        Chat with us on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-black/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Send size={18} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Software Development">Software Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Digital Product Development">Digital Product Development</option>
                      <option value="Creative & Brand Design">Creative & Brand Design</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Training & Education">Training & Education</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none"
                      >
                        <option value="">Select budget</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#111312] text-white px-8 py-4 font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <Check size={20} />
                        Sent! Redirecting to WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4">
                    By submitting this form, you agree to our privacy policy. Your information will be kept confidential.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CONTACT US
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Why Reach Out
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              We're Ready to
              <span className="block text-purple-600">Bring Your Ideas to Life</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f5f2ef] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Guidance</h3>
              <p className="text-sm text-slate-600">Get advice from experienced professionals who understand your needs.</p>
            </div>

            <div className="bg-[#f5f2ef] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quick Response</h3>
              <p className="text-sm text-slate-600">We respond to all inquiries within 24 hours, often faster.</p>
            </div>

            <div className="bg-[#f5f2ef] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Personalized Approach</h3>
              <p className="text-sm text-slate-600">Every project gets unique attention tailored to your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-[#f5f2ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Quick Answers
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked
              <span className="block text-purple-600">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-black/5 transition-all duration-300 hover:shadow-lg">
              <h3 className="font-bold text-slate-900 mb-2">How quickly can you start?</h3>
              <p className="text-sm text-slate-600">We can usually start within 1-2 weeks of signing the agreement, depending on project complexity.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5 transition-all duration-300 hover:shadow-lg">
              <h3 className="font-bold text-slate-900 mb-2">Do you work with startups?</h3>
              <p className="text-sm text-slate-600">Absolutely! We love working with startups and offer flexible engagement models to suit your budget.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5 transition-all duration-300 hover:shadow-lg">
              <h3 className="font-bold text-slate-900 mb-2">What technologies do you use?</h3>
              <p className="text-sm text-slate-600">We use modern technologies including React, Next.js, Node.js, Python, Flutter, and cloud platforms like AWS.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5 transition-all duration-300 hover:shadow-lg">
              <h3 className="font-bold text-slate-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-sm text-slate-600">Yes, we offer maintenance and support packages to ensure your solution continues to perform optimally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative py-20 lg:py-28 bg-[#111312] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139,92,246,0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 rounded-full px-4 py-2 mb-6 border border-purple-600/30">
            <MessageCircle size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">Chat With Us</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Prefer to Chat
            <span className="block text-purple-400">Right Away?</span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Get instant responses and start your project faster. Our team is ready to assist you on WhatsApp.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2349161460898"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-600 text-white rounded-full px-8 py-4 font-medium hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:phantomire@gmail.com"
              className="inline-flex items-center gap-3 border border-white/20 rounded-full px-8 py-4 font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Send Email
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="mt-8 text-sm text-white/30">
            Response time: 1-2 minutes on WhatsApp • 24 hours on email
          </p>
        </div>
      </section>

    </main>
  );
}