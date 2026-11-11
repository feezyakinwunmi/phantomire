import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, Eye, Lock, MessageCircle } from "lucide-react";
import Reveal from "../components/site/Reveal";
import { whatsapp } from "../lib/site";
import s from "../components/site/ui.module.css";
import k from "../components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Phantomire Technologies",
  description: "How Phantomire Technologies collects, uses and protects your personal information.",
};

/** Update this whenever the wording below changes. */
const LAST_UPDATED = "11 November 2026";

const TOC = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use-your-information", label: "3. How We Use Your Information" },
  { id: "data-security", label: "4. Data Security" },
  { id: "third-party-services", label: "5. Third-Party Services" },
  { id: "your-rights", label: "6. Your Rights" },
  { id: "contact-us", label: "7. Contact Us" },
];

export default function PrivacyPage() {
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
                Privacy policy
              </span>
            </nav>
            <p className={`${s.eyebrow} mt-8`}>Legal</p>
            <h1 id="legal-title" className={`${k.simpleTitle} mt-4`}>
              Your privacy, <span className={s.grad}>respected.</span>
            </h1>
            <p className={`${s.lede} mt-5`}>How we collect, use and protect your personal information when you use our website, courses and services.</p>
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

              {/* Introduction */}
              <div>
                <h2 id="introduction">1. Introduction</h2>
                <p>
                  Phantomire Technologies (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting 
                  your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our website, services, and applications.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Information Collection */}
              <div>
                <h2 id="information-we-collect">2. Information We Collect</h2>
                <div>
                  <div>
                    <h3>Personal Information</h3>
                    <p>
                      We may collect personal information that you provide to us, including:
                    </p>
                    <ul>
                      <li>
                        <Check size={18} />
                        <span>Name and contact information (email, phone number)</span>
                      </li>
                      <li>
                        <Check size={18} />
                        <span>Demographic information (age, location)</span>
                      </li>
                      <li>
                        <Check size={18} />
                        <span>Payment information (processed securely via Paystack)</span>
                      </li>
                      <li>
                        <Check size={18} />
                        <span>Educational background and career interests</span>
                      </li>
                      <li>
                        <Check size={18} />
                        <span>Course preferences and learning progress</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Automatically Collected Information</h3>
                    <p>
                      We may automatically collect certain information when you visit our website:
                    </p>
                    <ul>
                      <li>
                        <Check size={18} />
                        <span>IP address and browser information</span>
                      </li>
                      <li>
                        <Check size={18} />
                        <span>Pages visited and time spent on our site</span>
                      </li>
                      <li>
                        <Check size={18} />
                        <span>Device information (operating system, screen resolution)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 id="how-we-use-your-information">3. How We Use Your Information</h2>
                <p>
                  We use your personal information for the following purposes:
                </p>
                <ul>
                  <li>
                    <Check size={18} />
                    <span>To process your course registrations and payments</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>To communicate with you about courses, events, and updates</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>To provide you with personalized learning recommendations</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>To improve our website, courses, and services</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>To send you important updates and promotional information (with your consent)</span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 id="data-security">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul>
                  <li>
                    <Lock size={18} />
                    <span>SSL/TLS encryption for all data transmission</span>
                  </li>
                  <li>
                    <Lock size={18} />
                    <span>Secure storage of payment information via Paystack</span>
                  </li>
                  <li>
                    <Lock size={18} />
                    <span>Regular security audits and vulnerability assessments</span>
                  </li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 id="third-party-services">5. Third-Party Services</h2>
                <p>
                  We may use third-party services to process your information:
                </p>
                <ul>
                  <li>
                    <Check size={18} />
                    <span><strong>Paystack</strong> - For secure payment processing</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span><strong>Supabase</strong> - For secure data storage</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span><strong>Email Service</strong> - For communication and notifications</span>
                  </li>
                </ul>
                <p>
                  These third-party services have their own privacy policies, and we recommend you review them.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 id="your-rights">6. Your Rights</h2>
                <p>
                  You have the following rights regarding your personal information:
                </p>
                <ul>
                  <li>
                    <Eye size={18} />
                    <span><strong>Access:</strong> Request a copy of your personal information</span>
                  </li>
                  <li>
                    <Eye size={18} />
                    <span><strong>Correction:</strong> Request corrections to your personal information</span>
                  </li>
                  <li>
                    <Eye size={18} />
                    <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                  </li>
                  <li>
                    <Eye size={18} />
                    <span><strong>Opt-Out:</strong> Unsubscribe from marketing communications</span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 id="contact-us">7. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className={k.legalBox}>
                  <p>
                    <strong>Email:</strong> info.phantomire@gmail.com
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +234 916 146 0898
                  </p>
                  <p>
                    <strong>Address:</strong> Epe, Lagos, Nigeria
                  </p>
                </div>
              </div>
            
              <p className="mt-12 border-t border-black/10 pt-6 text-[14px] text-[#8a8698]">
                Last updated on {LAST_UPDATED}. We may update this page from time to time, so please check back
                occasionally.
              </p>
              <a
                href={whatsapp("Hi Phantomire! I have a question about your privacy policy.")}
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
