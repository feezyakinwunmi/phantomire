// app/terms/page.tsx
"use client";

import Link from "next/link";
import {
  Shield,
  Check,
  AlertTriangle,
  ArrowUpRight,
  ArrowRight,
  FileText,
  Clock,
  Users,
  CreditCard,
} from "lucide-react";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Please read these terms carefully before using our services. By using Phantomire Technologies, you agree to these terms.
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
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing and using Phantomire Technologies' website, services, and applications (collectively, 
                  the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our Services.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  We reserve the right to update or modify these terms at any time. Your continued use of our Services 
                  constitutes acceptance of any changes.
                </p>
              </div>

              {/* Description of Services */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Phantomire Technologies provides technology education, training programs, digital solutions, 
                  and related services including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Technical training courses (Frontend, Backend, UI/UX, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Digital product development and consulting</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>AI and intelligent solutions</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Creative and brand design services</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Community events and networking opportunities</span>
                  </li>
                </ul>
              </div>

              {/* User Accounts */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
                <p className="text-slate-600 leading-relaxed">
                  To access certain features of our Services, you may need to create an account. You agree to:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate and complete information during registration</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Notify us immediately of any unauthorized use of your account</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Be responsible for all activities that occur under your account</span>
                  </li>
                </ul>
              </div>

              {/* Payments and Fees */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payments and Fees</h2>
                <p className="text-slate-600 leading-relaxed">
                  Some of our Services require payment of fees. By purchasing our courses or services, you agree to:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CreditCard size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Pay all applicable fees at the time of purchase</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CreditCard size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Provide valid payment information via Paystack</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CreditCard size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Agree to the terms of our refund policy</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-700">
                      <strong>Refund Policy:</strong> Course fees are non-refundable once the course has started. 
                      Please contact us if you have any questions before purchasing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
                <p className="text-slate-600 leading-relaxed">
                  All content, materials, and intellectual property on our platform are owned by Phantomire Technologies 
                  or our licensors. You agree not to:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Copy, reproduce, or distribute our content without permission</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Modify, adapt, or create derivative works from our content</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Use our trademarks, logos, or brand identity without permission</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-3">
                  You retain ownership of any content you submit, but grant us a license to use it for providing our Services.
                </p>
              </div>

              {/* User Conduct */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. User Conduct</h2>
                <p className="text-slate-600 leading-relaxed">
                  When using our Services, you agree to:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Respect the rights and privacy of other users</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Not engage in any illegal, harmful, or disruptive behavior</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Check size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Not attempt to gain unauthorized access to our systems</span>
                  </li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to terminate or suspend your account and access to our Services at our sole 
                  discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to 
                  other users or our business.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  Upon termination, your right to use the Services will immediately cease, and any fees paid are 
                  non-refundable unless otherwise required by law.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our Services are provided "as is" and "as available" without any warranties of any kind, either 
                  express or implied. We do not warrant that:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Our Services will be uninterrupted, secure, or error-free</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>The results obtained from our Services will be accurate or reliable</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Our Services will meet your specific requirements</span>
                  </li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-slate-600 leading-relaxed">
                  To the maximum extent permitted by law, Phantomire Technologies shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                  incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Your use or inability to use our Services</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Any unauthorized access to or use of our servers</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertTriangle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Any bugs, viruses, or other harmful code that may be transmitted</span>
                  </li>
                </ul>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Nigeria, without 
                  regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject 
                  to the exclusive jurisdiction of the courts of Nigeria.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-[#f5f2ef] rounded-2xl">
                  <p className="text-slate-700">
                    <strong>Email:</strong> info.phantomire@gmail.com
                  </p>
                  <p className="text-slate-700 mt-2">
                    <strong>WhatsApp:</strong> +234 916 146 0898
                  </p>
                </div>
              </div>
            </div>

            {/* Updated */}
            <div className="mt-10 pt-6 border-t border-black/10 text-sm text-slate-400">
              <p>These Terms of Service were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-600 text-sm">
            Have questions about our terms? We're here to help.
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