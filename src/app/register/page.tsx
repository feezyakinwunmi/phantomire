"use client";

import Header from "../components/Header";
import { useState } from "react";

export default function Register() {
 const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const FORM_FEE = 5000; // ₦5,000 in naira
  const PAYSTACK_PUBLIC_KEY = "pk_test_04475b52d23bd3296af5518ad35b1830a6cbe924"; // Replace with your Paystack test/live key

  const validPromoCodes = ["PHANTOM2025", "RISEFREE", "EPEFREE", "LAUNCH2026"]; // Add your real codes

  const initializePaystack = () => {
    if (!email.trim()) {
      setMessage("Please enter your email address");
      return;
    }

    // Check promo code first
    if (promoCode && validPromoCodes.includes(promoCode.toUpperCase().trim())) {
      setMessage("Valid promo code! Downloading your form for FREE...");
      triggerDownload();
      return;
    }

    setLoading(true);
    setMessage("");

    // @ts-ignore - Paystack is loaded from script
    const handler = (window as any).PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: FORM_FEE * 100, // Paystack uses kobo
      currency: "NGN",
      ref: "phantomire_form_" + Date.now(),
      metadata: {
        promo_code: promoCode || "none",
      },
      callback: function (response: any) {
        setMessage(`Payment successful! Reference: ${response.reference}`);
        triggerDownload();
      },
      onClose: function () {
        setMessage("Payment cancelled. You can try again.");
        setLoading(false);
      },
    });

    handler.openIframe();
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/phantomire-registration-form.pdf"; // Make sure this file exists in /public
    link.download = "Phantomire_Registration_Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setMessage("Form downloaded successfully! Check your downloads folder.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white">

      <section className="py-16 mt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3 text-center">Enrollment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
            Get Your Registration Form
          </h1>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 mb-6">
                Pay <strong>₦5,000</strong> to instantly download the full registration form.<br />
                Inside: All courses, prices, modes, bank details, and instructions.
              </p>
              <p className="text-lg text-purple-900 font-bold">
                Have a promo code? Get it FREE!
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-6 mb-10">

            <div className="max-w-md mx-auto space-y-6">
              <input type="text" placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-6 py-4 rounded-xl border" />
              <input type="tel" placeholder="Phone Number (e.g. 08012345678) *" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-6 py-4 rounded-xl border" />
              <input type="email" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-6 py-4 rounded-xl border" />
              <input type="text" placeholder="Promo Code (optional)" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="w-full px-6 py-4 rounded-xl border" />
            </div>
            </div>

            <div className="text-center">
              <button
                onClick={initializePaystack}
                disabled={loading}
                className="bg-purple-900 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-purple-800 transition shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Pay ₦5,000 & Download Form"}
              </button>
            </div>

            {message && (
              <div className={`mt-8 p-6 rounded-xl text-center text-lg font-medium ${
                message.includes("successful") || message.includes("FREE")
                  ? "bg-green-100 text-green-800"
                  : message.includes("cancelled") ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
              }`}>
                {message}
              </div>
            )}

            <div className="mt-12 p-8 bg-purple-100 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">After Getting the Form</h3>
              <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
                <li>• Fill in your details, chosen course, and mode (physical/virtual)</li>
                <li>• Pay the full course fee via bank transfer (details in form)</li>
                <li>• <strong>Physical students:</strong> Bring filled form + payment receipt on first day</li>
                <li>• <strong>Virtual students:</strong> Email form + receipt to info.phantomire@gmail.com</li>
                <li>• Or WhatsApp both to: <strong>+234 916 136 0898</strong></li>
                <li className="font-bold text-purple-900 text-center mt-6">
                  No payment receipt = No enrollment
                </li>
              </ul>
            </div>

            <p className="text-center text-gray-600 mt-10">
              Need help? WhatsApp: +234 916 136 0898 • Email: info.phantomire@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Paystack Script - Loaded in body */}
      <script src="https://js.paystack.co/v1/inline.js" async></script>
    </main>
  );
}