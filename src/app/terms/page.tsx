import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Check, ChevronRight, CreditCard, MessageCircle } from "lucide-react";
import Reveal from "../components/site/Reveal";
import { whatsapp } from "../lib/site";
import s from "../components/site/ui.module.css";
import k from "../components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Phantomire Technologies",
  description: "The terms that apply when you use Phantomire Technologies websites, courses and services.",
};

/** Update this whenever the wording below changes. */
const LAST_UPDATED = "11 November 2026";

const TOC = [
  { id: "acceptance-of-terms", label: "1. Acceptance of Terms" },
  { id: "description-of-services", label: "2. Description of Services" },
  { id: "user-accounts", label: "3. User Accounts" },
  { id: "payments-and-fees", label: "4. Payments and Fees" },
  { id: "intellectual-property", label: "5. Intellectual Property" },
  { id: "user-conduct", label: "6. User Conduct" },
  { id: "termination", label: "7. Termination" },
  { id: "disclaimer-of-warranties", label: "8. Disclaimer of Warranties" },
  { id: "limitation-of-liability", label: "9. Limitation of Liability" },
  { id: "governing-law", label: "10. Governing Law" },
  { id: "contact-us", label: "11. Contact Us" },
];

export default function TermsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <section className={`${s.section} ${s.tint} ${k.simpleHero}`} aria-labelledby="legal-title">
        <div className={`${s.dots} ${s.lgOnly}`} style={{ right: "6%", top: "16%", width: 280, height: 220 }} aria-hidden />
        <div className={`${s.wrap} pt-12 pb-14 lg:pt-16 lg:pb-16`}>
          <Reveal className="max-w-[760px]">
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden />
              <span aria-current="page" className="font-medium text-[#14121c]">
                Terms of service
              </span>
            </nav>
            <p className={`${s.eyebrow} mt-8`}>Legal</p>
            <h1 id="legal-title" className={`${k.simpleTitle} mt-4`}>
              Terms of <span className={s.grad}>service.</span>
            </h1>
            <p className={`${s.lede} mt-5`}>Please read these terms carefully. By using Phantomire Technologies, you agree to them.</p>
            <p className="mt-4 text-[13px] font-medium text-[#8a8698]">Last updated: {LAST_UPDATED}</p>
          </Reveal>
        </div>
      </section>

      <section className={`${s.section} ${s.light} ${s.arc} ${s.fromTint}`}>
        <div className={`${s.wrap} ${s.padArc}`}>
          <div className={k.legal}>
            <nav className={k.toc} aria-label="On this page">
              <p className="mb-3 px-3 text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#8a8698]">On this page</p>
              {TOC.map((t) => (
                <a key={t.id} href={`#${t.id}`} className={k.tocLink}>
                  {t.label}
                </a>
              ))}
            </nav>

            <article className={k.legalBody}>

              {/* Acceptance of Terms */}
              <div>
                <h2 id="acceptance-of-terms">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Phantomire Technologies&rsquo; website, services, and applications (collectively, 
                  the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our Services.
                </p>
                <p>
                  We reserve the right to update or modify these terms at any time. Your continued use of our Services 
                  constitutes acceptance of any changes.
                </p>
              </div>

              {/* Description of Services */}
              <div>
                <h2 id="description-of-services">2. Description of Services</h2>
                <p>
                  Phantomire Technologies provides technology education, training programs, digital solutions, 
                  and related services including:
                </p>
                <ul>
                  <li>
                    <Check size={18} />
                    <span>Technical training courses (Frontend, Backend, UI/UX, etc.)</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Digital product development and consulting</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>AI and intelligent solutions</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Creative and brand design services</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Community events and networking opportunities</span>
                  </li>
                </ul>
              </div>

              {/* User Accounts */}
              <div>
                <h2 id="user-accounts">3. User Accounts</h2>
                <p>
                  To access certain features of our Services, you may need to create an account. You agree to:
                </p>
                <ul>
                  <li>
                    <Check size={18} />
                    <span>Provide accurate and complete information during registration</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Notify us immediately of any unauthorized use of your account</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Be responsible for all activities that occur under your account</span>
                  </li>
                </ul>
              </div>

              {/* Payments and Fees */}
              <div>
                <h2 id="payments-and-fees">4. Payments and Fees</h2>
                <p>
                  Some of our Services require payment of fees. By purchasing our courses or services, you agree to:
                </p>
                <ul>
                  <li>
                    <CreditCard size={18} />
                    <span>Pay all applicable fees at the time of purchase</span>
                  </li>
                  <li>
                    <CreditCard size={18} />
                    <span>Provide valid payment information via Paystack</span>
                  </li>
                  <li>
                    <CreditCard size={18} />
                    <span>Agree to the terms of our refund policy</span>
                  </li>
                </ul>
                <div>
                  <div>
                    <AlertTriangle size={18} />
                    <p>
                      <strong>Refund Policy:</strong> Course fees are non-refundable once the course has started. 
                      Please contact us if you have any questions before purchasing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 id="intellectual-property">5. Intellectual Property</h2>
                <p>
                  All content, materials, and intellectual property on our platform are owned by Phantomire Technologies 
                  or our licensors. You agree not to:
                </p>
                <ul>
                  <li>
                    <Check size={18} />
                    <span>Copy, reproduce, or distribute our content without permission</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Modify, adapt, or create derivative works from our content</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Use our trademarks, logos, or brand identity without permission</span>
                  </li>
                </ul>
                <p>
                  You retain ownership of any content you submit, but grant us a license to use it for providing our Services.
                </p>
              </div>

              {/* User Conduct */}
              <div>
                <h2 id="user-conduct">6. User Conduct</h2>
                <p>
                  When using our Services, you agree to:
                </p>
                <ul>
                  <li>
                    <Check size={18} />
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Respect the rights and privacy of other users</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Not engage in any illegal, harmful, or disruptive behavior</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Not attempt to gain unauthorized access to our systems</span>
                  </li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <h2 id="termination">7. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your account and access to our Services at our sole 
                  discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to 
                  other users or our business.
                </p>
                <p>
                  Upon termination, your right to use the Services will immediately cease, and any fees paid are 
                  non-refundable unless otherwise required by law.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div>
                <h2 id="disclaimer-of-warranties">8. Disclaimer of Warranties</h2>
                <p>
                  Our Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties of any kind, either 
                  express or implied. We do not warrant that:
                </p>
                <ul>
                  <li>
                    <AlertTriangle size={18} />
                    <span>Our Services will be uninterrupted, secure, or error-free</span>
                  </li>
                  <li>
                    <AlertTriangle size={18} />
                    <span>The results obtained from our Services will be accurate or reliable</span>
                  </li>
                  <li>
                    <AlertTriangle size={18} />
                    <span>Our Services will meet your specific requirements</span>
                  </li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 id="limitation-of-liability">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Phantomire Technologies shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                  incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>
                    <AlertTriangle size={18} />
                    <span>Your use or inability to use our Services</span>
                  </li>
                  <li>
                    <AlertTriangle size={18} />
                    <span>Any unauthorized access to or use of our servers</span>
                  </li>
                  <li>
                    <AlertTriangle size={18} />
                    <span>Any bugs, viruses, or other harmful code that may be transmitted</span>
                  </li>
                </ul>
              </div>

              {/* Governing Law */}
              <div>
                <h2 id="governing-law">10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Nigeria, without 
                  regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject 
                  to the exclusive jurisdiction of the courts of Nigeria.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 id="contact-us">11. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className={k.legalBox}>
                  <p>
                    <strong>Email:</strong> info.phantomire@gmail.com
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +234 916 146 0898
                  </p>
                </div>
              </div>
            
              <p className="mt-12 border-t border-black/10 pt-6 text-[14px] text-[#8a8698]">
                Last updated on {LAST_UPDATED}. We may update this page from time to time, so please check back
                occasionally.
              </p>
              <a
                href={whatsapp("Hi Phantomire! I have a question about your terms of service.")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.btn} mt-6 !no-underline !text-white`}
              >
                <MessageCircle size={17} /> Questions? Chat with us
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
