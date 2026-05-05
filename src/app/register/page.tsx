"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";



declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function Register() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [trainingMode, setTrainingMode] = useState<"online" | "offline" | null>(null);
  const [displayPrice, setDisplayPrice] = useState<number>(0);

  // Extra fields
  const [ageGroup, setAgeGroup] = useState("");
  const [expectation, setExpectation] = useState("");
  const [backgroundKnowledge, setBackgroundKnowledge] = useState("");
  const [nationality, setNationality] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  useEffect(() => {
  if (typeof window !== "undefined" && !window.PaystackPop) {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v2/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }
}, []);

 

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("available", true)
      .order("id");

    if (error) console.error(error);
    else setCourses(data || []);
  };

  // Update displayed price
  useEffect(() => {
    if (!selectedCourseId || !trainingMode) {
      setDisplayPrice(0);
      return;
    }

    const course = courses.find((c) => c.id === selectedCourseId);
    if (!course) return;

    const price =
      trainingMode === "online"
        ? course.training_online_price
        : course.training_offline_price;

    setDisplayPrice(price || 0);
  }, [selectedCourseId, trainingMode, courses]);

 // Updated payWithPaystack function (replace your current one)
// Add this useEffect to load Paystack script (keep at top of component)
useEffect(() => {
  if (typeof window !== "undefined" && !window.PaystackPop) {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v2/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }
}, []);

// Updated payWithPaystack - Now handles everything after successful payment
const payWithPaystack = async (amount: number, courseName: string) => {
  if (!window.PaystackPop) {
    setMessage("Payment gateway is loading... Please try again.");
    return;
  }

  const popup = new window.PaystackPop();

  popup.newTransaction({
    key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    email: email,
    amount: amount * 100,
    currency: "NGN",
    ref: `ph_train_${Date.now()}`,
    metadata: {
      course: courseName,
      mode: trainingMode,
    },
    onSuccess: async (transaction: any) => {
      try {
        const course = courses.find(c => c.id === selectedCourseId);

        // ONLY INSERT AFTER SUCCESSFUL PAYMENT
        const { data: requestData, error: insertError } = await supabase
          .from("training_requests")
          .insert({
            name,
            email,
            whatsapp,
            course_id: selectedCourseId,
            mode: trainingMode,
            selected_price: amount,
            age_group: ageGroup,
            expectation,
            background_knowledge: backgroundKnowledge,
            nationality,
            other_info: otherInfo,
            status: "paid",
            paystack_reference: transaction.reference,
          })
          .select()
          .single();

        if (insertError) throw insertError;

        // SEND EMAIL CONFIRMATION
        let emailSent = false;
        try {
          const emailResponse = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
              to: email,
              name: name,
              amount: amount,
              course: courseName,
              mode: trainingMode,
              whatsappLink: "https://chat.whatsapp.com/Juq6BD2KGZ2AQUN7lp1xf1"
            })
          });

          if (emailResponse.ok) {
            emailSent = true;
            setMessage("🎉 Payment Successful! Check your email for confirmation and WhatsApp group link.");
          } else {
            setMessage("🎉 Payment Successful! But email failed. Please contact support for your group link.");
          }
        } catch (emailError) {
          console.error("Email error:", emailError);
          setMessage("🎉 Payment Successful! (Email failed - please contact admin for your group link)");
        }

        // OPTIONAL: Auto WhatsApp Message (opens chat - user must press send)
        let cleanNumber = whatsapp.trim().replace(/\D/g, "");
        if (cleanNumber.startsWith("0") && cleanNumber.length === 11) {
          cleanNumber = "234" + cleanNumber.substring(1);
        } else if (!cleanNumber.startsWith("234") && cleanNumber.length === 10) {
          cleanNumber = "234" + cleanNumber;
        }

        const waText = encodeURIComponent(
          `Hi ${name} 👋\n\n` +
          `Thank you for your successful payment of ₦${amount.toLocaleString()} for ${courseName} (${trainingMode} mode).\n\n` +
          `Join your class WhatsApp group:\nhttps://chat.whatsapp.com/Juq6BD2KGZ2AQUN7lp1xf1\n\n` +
          `We will send the schedule and details shortly.\n\nPhantomire Team`
        );

        window.open(`https://wa.me/${cleanNumber}?text=${waText}`, "_blank");

      } catch (err: any) {
        console.error(err);
        setMessage("Payment was successful but failed to save record. Please contact admin.");
      }
    },

    onCancel: () => {
      setMessage("Payment was cancelled. No record was saved.");
    },
  });
};

// Updated handleSubmit - Now only triggers payment (no insert before payment)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !email || !whatsapp || !selectedCourseId || !trainingMode || !ageGroup || !expectation || !nationality) {
    setMessage("Please fill all required fields (*)");
    return;
  }

  if (displayPrice <= 0) {
    setMessage("This training mode is not available yet.");
    return;
  }

  setLoading(true);
  setMessage("");

  const course = courses.find(c => c.id === selectedCourseId);
  const courseName = course?.name || "Selected Course";

  // Directly open Paystack - No pending record created
  payWithPaystack(displayPrice, courseName);

  setLoading(false);
};

  return (
    <main className="min-h-screen bg-gray-50 py-12 text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Banner Image */}
        <img
          src="/nexus.jpeg"
          alt="Phantomire Professional Training"
          className="w-full rounded-3xl shadow-2xl mb-12 object-cover"
        />

        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Register for Training
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Fill the form and pay securely with Paystack
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-9">

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900"
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900"
            />
          </div>

          <input
            type="tel"
            placeholder="WhatsApp Number (e.g. 08012345678) *"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900"
          />

          {/* Course Selection with Images */}
          <div>
            <label className="block text-lg font-semibold mb-5">Select Course</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => {
                    setSelectedCourseId(course.id);
                    setTrainingMode(null);
                  }}
                  className={`cursor-pointer rounded-3xl overflow-hidden border-2 transition-all ${
                    selectedCourseId === course.id ? "border-purple-900 shadow-xl" : "border-gray-200 hover:border-purple-400"
                  }`}
                >
                  <img
                    src={course.image_url || "https://via.placeholder.com/600x400?text=Course+Image"}
                    alt={course.name}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{course.name}</h3>
                    <p className="text-sm text-gray-500">
                      Online: ₦{(course.training_online_price || 0).toLocaleString()} | 
                      Onsite: ₦{(course.training_offline_price || 0).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Mode Selection */}
          {selectedCourseId && (
            <div>
              <label className="block text-lg font-semibold mb-4">Choose Training Mode</label>
              <div className="grid grid-cols-2 gap-6">
                {courses.find((c) => c.id === selectedCourseId)?.training_online_price > 0 && (
                  <button
                    type="button"
                    onClick={() => setTrainingMode("online")}
                    className={`py-6 rounded-2xl border-2 text-lg font-medium transition ${
                      trainingMode === "online" ? "border-purple-900 bg-purple-50 text-purple-900" : "border-gray-300 hover:border-purple-600"
                    }`}
                  >
                    Online Training
                  </button>
                )}

                {courses.find((c) => c.id === selectedCourseId)?.training_offline_price > 0 && (
                  <button
                    type="button"
                    onClick={() => setTrainingMode("offline")}
                    className={`py-6 rounded-2xl border-2 text-lg font-medium transition ${
                      trainingMode === "offline" ? "border-purple-900 bg-purple-50 text-purple-900" : "border-gray-300 hover:border-purple-600"
                    }`}
                  >
                    Onsite (Physical)
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Price Display */}
          {displayPrice > 0 && (
            <div className="p-8 bg-purple-50 rounded-2xl text-center border border-purple-200">
              <p className="text-4xl font-bold text-purple-900">₦{displayPrice.toLocaleString()}</p>
              <p className="text-purple-700 mt-1">Total for {trainingMode} mode</p>
            </div>
          )}

          {/* Additional Fields */}
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-2xl border border-gray-300"
          >
            <option value="">Age Group *</option>
            <option value="10-17">10–17 years</option>
            <option value="18-24">18–24 years</option>
            <option value="25-34">25–34 years</option>
            <option value="35+">35+ years</option>
          </select>

          <textarea
            placeholder="What are your expectations? *"
            value={expectation}
            onChange={(e) => setExpectation(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 h-32"
          />

          <textarea
            placeholder="Background knowledge or previous skills (optional)"
            value={backgroundKnowledge}
            onChange={(e) => setBackgroundKnowledge(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 h-24"
          />

          <input
            type="text"
            placeholder="Nationality *"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-2xl border border-gray-300"
          />

          <textarea
            placeholder="Any other important information (optional)"
            value={otherInfo}
            onChange={(e) => setOtherInfo(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 h-24"
          />

          <button
            type="submit"
            disabled={loading || displayPrice <= 0}
            className="w-full bg-purple-900 hover:bg-purple-800 disabled:bg-gray-400 text-white py-6 rounded-2xl text-2xl font-bold transition-all"
          >
            {loading ? "Processing..." : `Pay ₦${displayPrice.toLocaleString()} via Paystack`}
          </button>
        </form>

        {message && (
          <div
            className={`mt-10 max-w-3xl mx-auto p-8 rounded-2xl text-center text-lg font-medium ${
              message.includes("Successful") || message.includes("Welcome")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <p className="text-center text-gray-600 mt-12">
          Need help? WhatsApp: +234 916 136 0898
        </p>
      </div>
    </main>
  );
}