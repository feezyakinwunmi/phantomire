// "use client";

// import { useState, useEffect } from "react";
// import { supabase } from "../lib/supabase";



// declare global {
//   interface Window {
//     PaystackPop: any;
//   }
// }

// export default function Register() {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Form fields
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [whatsapp, setWhatsapp] = useState("");
//   const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
//   const [trainingMode, setTrainingMode] = useState<"online" | "offline" | null>(null);
//   const [displayPrice, setDisplayPrice] = useState<number>(0);

//   // Extra fields
//   const [ageGroup, setAgeGroup] = useState("");
//   const [expectation, setExpectation] = useState("");
//   const [backgroundKnowledge, setBackgroundKnowledge] = useState("");
//   const [nationality, setNationality] = useState("");
//   const [otherInfo, setOtherInfo] = useState("");

//   useEffect(() => {
//   if (typeof window !== "undefined" && !window.PaystackPop) {
//     const script = document.createElement("script");
//     script.src = "https://js.paystack.co/v2/inline.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }
// }, []);

 

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const { data, error } = await supabase
//       .from("courses")
//       .select("*")
//       .eq("available", true)
//       .order("id");

//     if (error) console.error(error);
//     else setCourses(data || []);
//   };

//   // Update displayed price
//   useEffect(() => {
//     if (!selectedCourseId || !trainingMode) {
//       setDisplayPrice(0);
//       return;
//     }

//     const course = courses.find((c) => c.id === selectedCourseId);
//     if (!course) return;

//     const price =
//       trainingMode === "online"
//         ? course.training_online_price
//         : course.training_offline_price;

//     setDisplayPrice(price || 0);
//   }, [selectedCourseId, trainingMode, courses]);

//  // Updated payWithPaystack function (replace your current one)
// // Add this useEffect to load Paystack script (keep at top of component)
// useEffect(() => {
//   if (typeof window !== "undefined" && !window.PaystackPop) {
//     const script = document.createElement("script");
//     script.src = "https://js.paystack.co/v2/inline.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }
// }, []);

// // Updated payWithPaystack - Now handles everything after successful payment
// const payWithPaystack = async (amount: number, courseName: string) => {
//   if (!window.PaystackPop) {
//     setMessage("Payment gateway is loading... Please try again.");
//     return;
//   }

//   const popup = new window.PaystackPop();

//   popup.newTransaction({
//     key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
//     email: email,
//     amount: amount * 100,
//     currency: "NGN",
//     ref: `ph_train_${Date.now()}`,
//     metadata: {
//       course: courseName,
//       mode: trainingMode,
//     },
//     onSuccess: async (transaction: any) => {
//       try {
//         const course = courses.find(c => c.id === selectedCourseId);

//         // ONLY INSERT AFTER SUCCESSFUL PAYMENT
//         const { data: requestData, error: insertError } = await supabase
//           .from("training_requests")
//           .insert({
//             name,
//             email,
//             whatsapp,
//             course_id: selectedCourseId,
//             mode: trainingMode,
//             selected_price: amount,
//             age_group: ageGroup,
//             expectation,
//             background_knowledge: backgroundKnowledge,
//             nationality,
//             other_info: otherInfo,
//             status: "paid",
//             paystack_reference: transaction.reference,
//           })
//           .select()
//           .single();

//         if (insertError) throw insertError;

//         // SEND EMAIL CONFIRMATION
//         let emailSent = false;
//         try {
//           const emailResponse = await fetch('/api/send-email', {
//             method: 'POST',
//             headers: { 
//               'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify({
//               to: email,
//               name: name,
//               amount: amount,
//               course: courseName,
//               mode: trainingMode,
//               whatsappLink: "https://chat.whatsapp.com/Juq6BD2KGZ2AQUN7lp1xf1"
//             })
//           });

//           if (emailResponse.ok) {
//             emailSent = true;
//             setMessage("🎉 Payment Successful! Check your email for confirmation and WhatsApp group link.");
//           } else {
//             setMessage("🎉 Payment Successful! But email failed. Please contact support for your group link.");
//           }
//         } catch (emailError) {
//           console.error("Email error:", emailError);
//           setMessage("🎉 Payment Successful! (Email failed - please contact admin for your group link)");
//         }

//         // OPTIONAL: Auto WhatsApp Message (opens chat - user must press send)
//         let cleanNumber = whatsapp.trim().replace(/\D/g, "");
//         if (cleanNumber.startsWith("0") && cleanNumber.length === 11) {
//           cleanNumber = "234" + cleanNumber.substring(1);
//         } else if (!cleanNumber.startsWith("234") && cleanNumber.length === 10) {
//           cleanNumber = "234" + cleanNumber;
//         }

//         const waText = encodeURIComponent(
//           `Hi ${name} 👋\n\n` +
//           `Thank you for your successful payment of ₦${amount.toLocaleString()} for ${courseName} (${trainingMode} mode).\n\n` +
//           `Join your class WhatsApp group:\nhttps://chat.whatsapp.com/Juq6BD2KGZ2AQUN7lp1xf1\n\n` +
//           `We will send the schedule and details shortly.\n\nPhantomire Team`
//         );

//         window.open(`https://wa.me/${cleanNumber}?text=${waText}`, "_blank");

//       } catch (err: any) {
//         console.error(err);
//         setMessage("Payment was successful but failed to save record. Please contact admin.");
//       }
//     },

//     onCancel: () => {
//       setMessage("Payment was cancelled. No record was saved.");
//     },
//   });
// };

// // Updated handleSubmit - Now only triggers payment (no insert before payment)
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!name || !email || !whatsapp || !selectedCourseId || !trainingMode || !ageGroup || !expectation || !nationality) {
//     setMessage("Please fill all required fields (*)");
//     return;
//   }

//   if (displayPrice <= 0) {
//     setMessage("This training mode is not available yet.");
//     return;
//   }

//   setLoading(true);
//   setMessage("");

//   const course = courses.find(c => c.id === selectedCourseId);
//   const courseName = course?.name || "Selected Course";

//   // Directly open Paystack - No pending record created
//   payWithPaystack(displayPrice, courseName);

//   setLoading(false);
// };

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 text-black">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Top Banner Image */}
//         <img
//           src="/nexus.jpeg"
//           alt="Phantomire Professional Training"
//           className="w-full rounded-3xl shadow-2xl mb-12 object-cover"
//         />

//         <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
//           Register for Training
//         </h1>
//         <p className="text-center text-xl text-gray-600 mb-12">
//           Fill the form and pay securely with Paystack
//         </p>

//         <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-9">

//           {/* Personal Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="Full Name *"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900"
//             />
//             <input
//               type="email"
//               placeholder="Email Address *"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900"
//             />
//           </div>

//           <input
//             type="tel"
//             placeholder="WhatsApp Number (e.g. 08012345678) *"
//             value={whatsapp}
//             onChange={(e) => setWhatsapp(e.target.value)}
//             required
//             className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900"
//           />

//           {/* Course Selection with Images */}
//           <div>
//             <label className="block text-lg font-semibold mb-5">Select Course</label>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {courses.map((course) => (
//                 <div
//                   key={course.id}
//                   onClick={() => {
//                     setSelectedCourseId(course.id);
//                     setTrainingMode(null);
//                   }}
//                   className={`cursor-pointer rounded-3xl overflow-hidden border-2 transition-all ${
//                     selectedCourseId === course.id ? "border-purple-900 shadow-xl" : "border-gray-200 hover:border-purple-400"
//                   }`}
//                 >
//                   <img
//                     src={course.image_url || "https://via.placeholder.com/600x400?text=Course+Image"}
//                     alt={course.name}
//                     className="w-full h-52 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="font-bold text-xl mb-1">{course.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       Online: ₦{(course.training_online_price || 0).toLocaleString()} | 
//                       Onsite: ₦{(course.training_offline_price || 0).toLocaleString()}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Training Mode Selection */}
//           {selectedCourseId && (
//             <div>
//               <label className="block text-lg font-semibold mb-4">Choose Training Mode</label>
//               <div className="grid grid-cols-2 gap-6">
//                 {courses.find((c) => c.id === selectedCourseId)?.training_online_price > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => setTrainingMode("online")}
//                     className={`py-6 rounded-2xl border-2 text-lg font-medium transition ${
//                       trainingMode === "online" ? "border-purple-900 bg-purple-50 text-purple-900" : "border-gray-300 hover:border-purple-600"
//                     }`}
//                   >
//                     Online Training
//                   </button>
//                 )}

//                 {courses.find((c) => c.id === selectedCourseId)?.training_offline_price > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => setTrainingMode("offline")}
//                     className={`py-6 rounded-2xl border-2 text-lg font-medium transition ${
//                       trainingMode === "offline" ? "border-purple-900 bg-purple-50 text-purple-900" : "border-gray-300 hover:border-purple-600"
//                     }`}
//                   >
//                     Onsite (Physical)
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           {displayPrice > 0 && (
//             <div className="p-8 bg-purple-50 rounded-2xl text-center border border-purple-200">
//               <p className="text-4xl font-bold text-purple-900">₦{displayPrice.toLocaleString()}</p>
//               <p className="text-purple-700 mt-1">Total for {trainingMode} mode</p>
//             </div>
//           )}

//           {/* Additional Fields */}
//           <select
//             value={ageGroup}
//             onChange={(e) => setAgeGroup(e.target.value)}
//             required
//             className="w-full px-6 py-4 rounded-2xl border border-gray-300"
//           >
//             <option value="">Age Group *</option>
//             <option value="10-17">10–17 years</option>
//             <option value="18-24">18–24 years</option>
//             <option value="25-34">25–34 years</option>
//             <option value="35+">35+ years</option>
//           </select>

//           <textarea
//             placeholder="What are your expectations? *"
//             value={expectation}
//             onChange={(e) => setExpectation(e.target.value)}
//             required
//             className="w-full px-6 py-4 rounded-2xl border border-gray-300 h-32"
//           />

//           <textarea
//             placeholder="Background knowledge or previous skills (optional)"
//             value={backgroundKnowledge}
//             onChange={(e) => setBackgroundKnowledge(e.target.value)}
//             className="w-full px-6 py-4 rounded-2xl border border-gray-300 h-24"
//           />

//           <input
//             type="text"
//             placeholder="Nationality *"
//             value={nationality}
//             onChange={(e) => setNationality(e.target.value)}
//             required
//             className="w-full px-6 py-4 rounded-2xl border border-gray-300"
//           />

//           <textarea
//             placeholder="Any other important information (optional)"
//             value={otherInfo}
//             onChange={(e) => setOtherInfo(e.target.value)}
//             className="w-full px-6 py-4 rounded-2xl border border-gray-300 h-24"
//           />

//           <button
//             type="submit"
//             disabled={loading || displayPrice <= 0}
//             className="w-full bg-purple-900 hover:bg-purple-800 disabled:bg-gray-400 text-white py-6 rounded-2xl text-2xl font-bold transition-all"
//           >
//             {loading ? "Processing..." : `Pay ₦${displayPrice.toLocaleString()} via Paystack`}
//           </button>
//         </form>

//         {message && (
//           <div
//             className={`mt-10 max-w-3xl mx-auto p-8 rounded-2xl text-center text-lg font-medium ${
//               message.includes("Successful") || message.includes("Welcome")
//                 ? "bg-green-100 text-green-800"
//                 : "bg-red-100 text-red-800"
//             }`}
//           >
//             {message}
//           </div>
//         )}

//         <p className="text-center text-gray-600 mt-12">
//           Need help? WhatsApp: +234 916 136 0898
//         </p>
//       </div>
//     </main>
//   );
// }








// app/register/page.tsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Award,
  Users,
  Briefcase,
  Globe,
  Star,
  Sparkles,
  Rocket,
  Target,
  BookOpen,
  Code2,
  BrainCircuit,
  Palette,
  Layers3,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  GraduationCap,
  Laptop,
  Wifi,
  Coffee,
  MapPin,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

// ============================================================
// BENEFITS DATA
// ============================================================
const benefits = [
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description: "Work on actual client projects and build a portfolio that stands out to employers.",
    color: "purple"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Connect with international companies and access global remote work opportunities.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Join a thriving community of 200+ tech enthusiasts, mentors, and industry professionals.",
    color: "emerald"
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Earn recognized certificates and credentials that validate your skills to employers.",
    color: "amber"
  },
  {
    icon: Rocket,
    title: "Career Launch Support",
    description: "Get interview preparation, resume reviews, and direct job placement assistance.",
    color: "rose"
  },
  {
    icon: Sparkles,
    title: "Expert Mentorship",
    description: "Learn from seasoned industry professionals who provide 1-on-1 guidance and feedback.",
    color: "violet"
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
const testimonials = [
  {
    name: "Oluwaseun Adebayo",
    role: "Frontend Developer at Interswitch",
    quote: "Phantomire transformed my career. Within 3 months of completing the program, I landed a job at a top tech company.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Chioma Eze",
    role: "UI/UX Designer (Freelance)",
    quote: "The practical projects and mentorship helped me build a portfolio that attracted international clients. I now work remotely for a US company.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emeka Nwachukwu",
    role: "Backend Engineer at Flutterwave",
    quote: "The hands-on training and real-world projects prepared me for the challenges of working in a fast-paced tech environment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// ============================================================
// MAIN REGISTER PAGE
// ============================================================
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

  // Load Paystack
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

          // Send email confirmation
          try {
            const emailResponse = await fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
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
              setMessage("🎉 Payment Successful! Check your email for confirmation and WhatsApp group link.");
            } else {
              setMessage("🎉 Payment Successful! Please contact support for your group link.");
            }
          } catch (emailError) {
            console.error("Email error:", emailError);
            setMessage("🎉 Payment Successful! (Email failed - please contact admin for your group link)");
          }

          // Auto WhatsApp Message
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

    payWithPaystack(displayPrice, courseName);
    setLoading(false);
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
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">Registration</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-[-0.04em]">
              Start Your Tech Journey
              <br />
              <span className="text-purple-600">Today</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Join Phantomire Academy and gain the skills, mentorship, and community you need to succeed in the global tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY JOIN SECTION
      ========================================================= */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Why Phantomire Academy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What You Get When You
              <span className="block text-purple-600">Join Phantomire Academy</span>
            </h2>
            <p className="text-slate-600 mt-4">
              We don't just teach technology. We prepare you for a successful career in tech with comprehensive support and real-world experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colorClasses = {
                purple: "from-purple-600 to-indigo-600",
                blue: "from-blue-600 to-cyan-600",
                emerald: "from-emerald-600 to-teal-600",
                amber: "from-amber-600 to-orange-600",
                rose: "from-rose-600 to-pink-600",
                violet: "from-violet-600 to-purple-600",
              };

              const bgColors = {
                purple: "bg-purple-50",
                blue: "bg-blue-50",
                emerald: "bg-emerald-50",
                amber: "bg-amber-50",
                rose: "bg-rose-50",
                violet: "bg-violet-50",
              };

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 lg:p-8 border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClasses[benefit.color as keyof typeof colorClasses]} flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
              Success Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What Our Alumni
              <span className="block text-purple-600">Say About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f5f2ef] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-200 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/100?text=User";
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="mt-3 flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM HIGHLIGHTS
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-[#111312] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-purple-400 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                Program Highlights
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                What Makes Our
                <span className="block text-purple-400">Programs Different</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Industry-Led Curriculum</p>
                    <p className="text-sm text-white/50">Courses designed with input from leading tech companies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Live Project Experience</p>
                    <p className="text-sm text-white/50">Work on real client projects with direct industry exposure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Global Network Access</p>
                    <p className="text-sm text-white/50">Connect with international companies and remote opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Career Support</p>
                    <p className="text-sm text-white/50">Interview prep, resume reviews, and direct job placement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/5">
                <p className="text-4xl font-bold text-purple-400">200+</p>
                <p className="text-sm text-white/50 mt-1">Students Trained</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/5">
                <p className="text-4xl font-bold text-purple-400">97%</p>
                <p className="text-sm text-white/50 mt-1">Satisfaction Rate</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/5">
                <p className="text-4xl font-bold text-purple-400">50+</p>
                <p className="text-sm text-white/50 mt-1">Partner Companies</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/5">
                <p className="text-4xl font-bold text-purple-400">100%</p>
                <p className="text-sm text-white/50 mt-1">Practical Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REGISTRATION FORM
      ========================================================= */}
      <section className="py-16 lg:py-20 bg-[#f5f2ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-purple-700 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                Enroll Now
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Ready to Start Your
                <span className="block text-purple-600">Tech Career?</span>
              </h2>
              <p className="text-slate-600 mt-3 text-sm">
                Fill the form below and pay securely with Paystack to secure your spot.
              </p>
            </div>

            {/* Banner Image */}
            <div className="mb-8">
              <img
                src="/nexus.jpeg"
                alt="Phantomire Professional Training"
                className="w-full rounded-2xl shadow-xl object-cover max-h-[200px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x200?text=Phantomire+Academy";
                }}
              />
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 lg:p-10 space-y-6">

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
                />
              </div>

              <input
                type="tel"
                placeholder="WhatsApp Number (e.g. 08012345678) *"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
              />

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Select Course *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      onClick={() => {
                        setSelectedCourseId(course.id);
                        setTrainingMode(null);
                      }}
                      className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                        selectedCourseId === course.id ? "border-purple-600 shadow-lg" : "border-black/10 hover:border-purple-400"
                      }`}
                    >
                      <img
                        src={course.image_url || "https://via.placeholder.com/600x300?text=Course"}
                        alt={course.name}
                        className="w-full h-32 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x300?text=Course";
                        }}
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-slate-900 text-sm">{course.name}</h3>
                        <p className="text-[10px] text-slate-500">
                          Online: ₦{(course.training_online_price || 0).toLocaleString()} | 
                          Onsite: ₦{(course.training_offline_price || 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training Mode */}
              {selectedCourseId && (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Choose Training Mode *</label>
                  <div className="grid grid-cols-2 gap-4">
                    {courses.find((c) => c.id === selectedCourseId)?.training_online_price > 0 && (
                      <button
                        type="button"
                        onClick={() => setTrainingMode("online")}
                        className={`py-4 rounded-xl border-2 text-sm font-medium transition ${
                          trainingMode === "online" ? "border-purple-600 bg-purple-50 text-purple-600" : "border-black/10 hover:border-purple-400"
                        }`}
                      >
                        <Laptop size={18} className="mx-auto mb-1" />
                        Online Training
                      </button>
                    )}

                    {courses.find((c) => c.id === selectedCourseId)?.training_offline_price > 0 && (
                      <button
                        type="button"
                        onClick={() => setTrainingMode("offline")}
                        className={`py-4 rounded-xl border-2 text-sm font-medium transition ${
                          trainingMode === "offline" ? "border-purple-600 bg-purple-50 text-purple-600" : "border-black/10 hover:border-purple-400"
                        }`}
                      >
                        <MapPin size={18} className="mx-auto mb-1" />
                        Onsite (Physical)
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Price Display */}
              {displayPrice > 0 && (
                <div className="p-6 bg-purple-50 rounded-xl text-center border border-purple-200">
                  <p className="text-3xl font-bold text-purple-900">₦{displayPrice.toLocaleString()}</p>
                  <p className="text-sm text-purple-700 mt-1">Total for {trainingMode} mode</p>
                </div>
              )}

              {/* Additional Fields */}
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm appearance-none"
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
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm h-24 resize-none"
              />

              <textarea
                placeholder="Background knowledge or previous skills (optional)"
                value={backgroundKnowledge}
                onChange={(e) => setBackgroundKnowledge(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm h-20 resize-none"
              />

              <input
                type="text"
                placeholder="Nationality *"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
              />

              <textarea
                placeholder="Any other important information (optional)"
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#f5f2ef] focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm h-20 resize-none"
              />

              <button
                type="submit"
                disabled={loading || displayPrice <= 0}
                className="w-full bg-[#111312] hover:bg-purple-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Processing...
                  </>
                ) : (
                  <>
                    Pay ₦{displayPrice.toLocaleString()} via Paystack
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>
            </form>

            {message && (
              <div
                className={`mt-6 p-6 rounded-xl text-center text-sm font-medium ${
                  message.includes("Successful") || message.includes("Welcome")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {message}
              </div>
            )}

            <p className="text-center text-slate-500 text-sm mt-8">
              Need help? <a href="https://wa.me/2349161460898" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:underline">Chat with us on WhatsApp</a>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ / FINAL CTA
      ========================================================= */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">Still Have Questions?</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            We're Here to Help You
            <span className="block text-purple-600">Succeed</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            Not sure which course is right for you? Want to know more about our programs? 
            Reach out to us and we'll guide you through the process.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2349161460898"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111312] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Chat with Us
            </a>
            <a
              href="mailto:phantomire@gmail.com"
              className="inline-flex items-center gap-2 border border-black/15 rounded-full px-6 py-3 text-sm font-medium hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Send Email
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}