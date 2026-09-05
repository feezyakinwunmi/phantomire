// app/faq/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone,
  Search,
} from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Phantomire Technologies?",
          a: "Phantomire Technologies is a digital solutions company that provides technology education, software development, AI solutions, and creative digital services. We empower Nigerian youth with practical tech skills and build innovative digital products."
        },
        {
          q: "Where is Phantomire Technologies located?",
          a: "We are based in Epe, Lagos, Nigeria. We operate both online and offline, serving students and clients across Nigeria and internationally."
        }
      ]
    },
    {
      category: "Courses & Training",
      questions: [
        {
          q: "What courses do you offer?",
          a: "We offer comprehensive courses in Frontend Development, Backend Development, UI/UX Design, Videography & Editing, Cybersecurity, AI & Machine Learning, Animation, Cloud Computing, DevOps, Game Development, Mobile Development, Blockchain, Digital Art, and Product Management."
        },
        {
          q: "How long do the courses take?",
          a: "Course durations vary from 8 to 16 weeks, depending on the program. Each course is designed to provide comprehensive practical training and project experience."
        },
        {
          q: "Do you offer online or offline training?",
          a: "We offer both! You can choose between online training (live virtual classes) or onsite/physical training at our location in Epe, Lagos."
        },
        {
          q: "Do you provide certificates upon completion?",
          a: "Yes, we provide industry-recognized certificates upon successful completion of our courses. Our certificates are valued by employers and demonstrate your practical skills."
        }
      ]
    },
    {
      category: "Payments & Registration",
      questions: [
        {
          q: "How much do the courses cost?",
          a: "Course fees vary depending on the program and training mode (online or offline). Prices range from ₦150,000 to ₦500,000. Visit our Register page for specific pricing details."
        },
        {
          q: "How do I pay for a course?",
          a: "We use Paystack, a secure payment gateway. You can pay via bank transfer, credit/debit card, or other supported methods. All payments are processed securely."
        },
        {
          q: "What is your refund policy?",
          a: "Course fees are non-refundable once the course has started. We encourage you to review the course details and reach out with any questions before registering."
        },
        {
          q: "Do you offer scholarships or discounts?",
          a: "We occasionally offer scholarships and discounts for exceptional students and community partnerships. Contact us directly to inquire about current opportunities."
        }
      ]
    },
    {
      category: "Partnerships & Community",
      questions: [
        {
          q: "How can schools partner with Phantomire?",
          a: "We partner with schools through after-school coding clubs, curriculum integration, teacher training programs, and career guidance initiatives. Contact us to discuss partnership opportunities."
        },
        {
          q: "Can organizations collaborate with you?",
          a: "Yes! We collaborate with NGOs, community organizations, and businesses to provide tech education, workshops, and digital solutions. Reach out to us to explore collaboration possibilities."
        },
        {
          q: "How can I join the Phantomire community?",
          a: "You can join our community by enrolling in a course, attending our events, joining our WhatsApp group, or following us on social media. We welcome all tech enthusiasts!"
        }
      ]
    },
    {
      category: "Career & Opportunities",
      questions: [
        {
          q: "Do you help with job placement?",
          a: "Yes! We provide career support including interview preparation, resume reviews, portfolio building, and connections with our partner companies. Many of our alumni have secured jobs at top tech companies."
        },
        {
          q: "What career paths can I pursue after training?",
          a: "Depending on your course, you can pursue careers as a Software Developer, UI/UX Designer, Data Analyst, AI Engineer, Cybersecurity Specialist, DevOps Engineer, Product Manager, and more."
        },
        {
          q: "Do you offer internship opportunities?",
          a: "We partner with companies to provide internship opportunities for our students. We also offer project-based learning that gives you real-world experience."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          q: "How can I contact support?",
          a: "You can reach us via WhatsApp at +234 916 146 0898, email at info.phantomire@gmail.com, or through our contact form on the website."
        },
        {
          q: "What if I have technical issues?",
          a: "Our support team is available to help with any technical issues. Contact us via WhatsApp or email, and we'll respond promptly."
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search
  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <main className="min-h-screen bg-[#f5f2ef] text-[#111312]">

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-white border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">Help Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-[-0.04em]">
              Frequently Asked
              <br />
              <span className="text-purple-600">Questions</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Find answers to the most common questions about our courses, services, and how Phantomire Technologies can help you.
            </p>
          </div>
        </div>
      </section>

      {/* Search & FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          {/* Search */}
          <div className="mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 rounded-2xl border border-black/10 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-8">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-600 rounded-full" />
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((faq, qIndex) => {
                      const globalIndex = catIndex * 100 + qIndex;
                      const isOpen = openIndex === globalIndex;
                      
                      return (
                        <div
                          key={qIndex}
                          className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                          <button
                            onClick={() => toggleQuestion(globalIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#f5f2ef] transition-colors"
                          >
                            <span className="font-medium text-slate-900 text-sm">
                              {faq.q}
                            </span>
                            {isOpen ? (
                              <ChevronUp size={18} className="text-purple-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 pt-1 border-t border-black/5">
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500">No questions found matching your search.</p>
                <p className="text-sm text-slate-400 mt-2">Try using different keywords or contact us directly.</p>
              </div>
            )}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-[#f5f2ef] rounded-3xl p-8 lg:p-12 text-center">
            <Sparkles size={32} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
              Can't find what you're looking for? We're here to help. Reach out to us and we'll get back to you promptly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="https://wa.me/2349161460898"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111312] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-purple-700 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
                <ArrowUpRight size={14} />
              </a>
              <a
                href="mailto:info.phantomire@gmail.com"
                className="inline-flex items-center gap-2 border border-black/15 rounded-full px-6 py-3 text-sm font-medium hover:bg-white transition-all duration-300"
              >
                <Mail size={16} />
                Send Email
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-600">
            Ready to start your tech journey? Explore our courses and join the Phantomire community today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-[#111312] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-purple-700 transition-all duration-300"
            >
              Explore Courses
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-black/15 rounded-full px-6 py-3 text-sm font-medium hover:bg-white transition-all duration-300"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}