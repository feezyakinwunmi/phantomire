// app/privacy/page.tsx
"use client";

import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Check,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ef] text-[#111312]">

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-white border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-[-0.04em]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              We care about your privacy. Here's how we collect, use, and protect your personal information.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-black/5">
            
            <div className="space-y-10">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  Phantomire Technologies ("we," "our," or "us") respects your privacy and is committed to protecting 
                  your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our website, services, and applications.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Information Collection */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Personal Information</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We may collect personal information that you provide to us, including:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Name and contact information (email, phone number)</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Demographic information (age, location)</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Payment information (processed securely via Paystack)</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Educational background and career interests</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Course preferences and learning progress</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Automatically Collected Information</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We may automatically collect certain information when you visit our website:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>IP address and browser information</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Pages visited and time spent on our site</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Device information (operating system, screen resolution)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To process your course registrations and payments</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To communicate with you about courses, events, and updates</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To provide you with personalized learning recommendations</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To improve our website, courses, and services</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To send you important updates and promotional information (with your consent)</span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Lock size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>SSL/TLS encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Lock size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Secure storage of payment information via Paystack</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Lock size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Regular security audits and vulnerability assessments</span>
                  </li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may use third-party services to process your information:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Paystack</strong> - For secure payment processing</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Supabase</strong> - For secure data storage</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Email Service</strong> - For communication and notifications</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-3">
                  These third-party services have their own privacy policies, and we recommend you review them.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                <p className="text-slate-600 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Eye size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Access:</strong> Request a copy of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Eye size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Correction:</strong> Request corrections to your personal information</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Eye size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Eye size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Opt-Out:</strong> Unsubscribe from marketing communications</span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-6 bg-[#f5f2ef] rounded-2xl">
                  <p className="text-slate-700">
                    <strong>Email:</strong> info.phantomire@gmail.com
                  </p>
                  <p className="text-slate-700 mt-2">
                    <strong>WhatsApp:</strong> +234 916 146 0898
                  </p>
                  <p className="text-slate-700 mt-2">
                    <strong>Address:</strong> Epe, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Updated */}
            <div className="mt-10 pt-6 border-t border-black/10 text-sm text-slate-400">
              <p>This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
              <p className="mt-2">We may update this policy from time to time. Please check this page periodically for changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-600 text-sm">
            Have questions about your privacy? We're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="https://wa.me/2349161460898"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111312] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-purple-700 transition-all duration-300"
            >
              Chat with Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}