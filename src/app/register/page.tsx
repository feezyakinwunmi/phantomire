"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Register() {
  const [registrationType, setRegistrationType] = useState<"buy" | "train" | null>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [trainingClosed, setTrainingClosed] = useState(false);

  // Common fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Buy-specific
  const [selectedBuyCourse, setSelectedBuyCourse] = useState("");

  // Train-specific
  const [selectedTrainCourse, setSelectedTrainCourse] = useState("");
  const [trainingMode, setTrainingMode] = useState<"online" | "offline" | null>(null);
  const [displayPrice, setDisplayPrice] = useState<number | null>(null);
  const [ageGroup, setAgeGroup] = useState("");
  const [expectation, setExpectation] = useState("");
  const [backgroundKnowledge, setBackgroundKnowledge] = useState("");
  const [nationality, setNationality] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchCourses();
    fetchTrainingEndDate();
  }, []);

  const fetchCourses = async () => {
    const { data, error } = await supabase.from("courses").select("*");
    if (error) {
      setMessage("Failed to load courses. Please try again.");
      console.error("Courses fetch error:", error);
    } else {
      setCourses(data || []);
    }
  };

  const fetchTrainingEndDate = async () => {
    const { data, error } = await supabase
      .from("settings")
      .select("value")
      .eq("key", `training_end_date_${currentYear}`)
      .maybeSingle();

    if (error) {
      console.error("End date fetch error:", error);
      setTrainingClosed(false); // fail open
      return;
    }

    if (data?.value) {
      const endDate = new Date(data.value);
      setTrainingClosed(new Date() > endDate);
    } else {
      setTrainingClosed(false);
    }
  };

  // Watch for course + mode changes → update displayed price
  useEffect(() => {
    if (!selectedTrainCourse || !trainingMode) {
      setDisplayPrice(null);
      return;
    }

    // Important: convert string from select to number
    const courseId = Number(selectedTrainCourse);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
      console.warn("Selected course not found:", selectedTrainCourse);
      setDisplayPrice(null);
      return;
    }

    const price =
      trainingMode === "online"
        ? course.training_online_price
        : course.training_offline_price;

    setDisplayPrice(typeof price === "number" ? price : null);
  }, [selectedTrainCourse, trainingMode, courses]);

  const handleSubmit = async () => {
    if (!name || !email || !whatsapp) {
      setMessage("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      if (registrationType === "buy") {
        if (!selectedBuyCourse) {
          setMessage("Please select a course");
          return;
        }

        const { error } = await supabase.from("buy_requests").insert({
          name,
          email,
          whatsapp,
          course_id: Number(selectedBuyCourse),
          requested_at: new Date().toISOString(),
        });
        if (error) throw error;

        const course = courses.find((c) => c.id === Number(selectedBuyCourse));
        const waMessage = encodeURIComponent(
          `Hi, I'm ${name}. Email: ${email}. I want to buy the course: ${course?.name}. Price: ₦${course?.buy_price}`
        );
        window.open(`https://wa.me/+2349161360898?text=${waMessage}`, "_blank");

        setMessage("Request submitted! Opening WhatsApp...");
      } 
      else if (registrationType === "train") {
        if (trainingClosed) {
          setMessage(`Batch 1 registration has ended for ${currentYear}. Please wait for the next batch.`);
          return;
        }

        if (!selectedTrainCourse || !trainingMode || !ageGroup || !expectation || !nationality) {
          setMessage("Please complete all required fields including training mode");
          return;
        }

        const courseId = Number(selectedTrainCourse);
        const course = courses.find(c => c.id === courseId);

        if (!course) {
          setMessage("Selected course not found");
          return;
        }

        const price =
          trainingMode === "online"
            ? course.training_online_price
            : course.training_offline_price;

        const { error } = await supabase.from("training_requests").insert({
          name,
          email,
          whatsapp,
          course_id: courseId,
          mode: trainingMode,
          selected_price: typeof price === "number" ? price : 0,
          age_group: ageGroup,
          expectation,
          background_knowledge: backgroundKnowledge,
          nationality,
          other_info: otherInfo,
          requested_at: new Date().toISOString(),
        });

        if (error) throw error;

        setMessage("Training request submitted successfully!");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setMessage(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setWhatsapp("");
    setSelectedBuyCourse("");
    setSelectedTrainCourse("");
    setTrainingMode(null);
    setDisplayPrice(null);
    setAgeGroup("");
    setExpectation("");
    setBackgroundKnowledge("");
    setNationality("");
    setOtherInfo("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-40 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3 text-center">Enrollment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
            Register for Courses
          </h1>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 mb-6">Choose your registration type:</p>
              <div className="flex justify-center gap-6 flex-wrap">
                <button
                  onClick={() => {
                    setRegistrationType("buy");
                    resetForm();
                  }}
                  className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-800 transition shadow-md"
                >
                  Buy Course Files/Books
                </button>
                <button
                  onClick={() => {
                    setRegistrationType("train");
                    resetForm();
                  }}
                  className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-800 transition shadow-md"
                >
                  Join Training
                </button>
              </div>
            </div>

            {registrationType && (
              <div className="max-w-lg mx-auto space-y-6 mb-10">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number (e.g. 08012345678) *"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                  required
                />

                {registrationType === "buy" && (
                  <select
                    value={selectedBuyCourse}
                    onChange={(e) => setSelectedBuyCourse(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 appearance-none"
                  >
                    <option value="">Select Course *</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} — ₦{course.buy_price?.toLocaleString() || "—"}
                      </option>
                    ))}
                  </select>
                )}

                {registrationType === "train" && (
                  <>
                    <select
                      value={selectedTrainCourse}
                      onChange={(e) => {
                        setSelectedTrainCourse(e.target.value);
                        setTrainingMode(null);
                        setDisplayPrice(null);
                      }}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 appearance-none"
                    >
                      <option value="">Select Interested Course *</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>

                    {/* Mode selection */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <button
                        type="button"
                        onClick={() => setTrainingMode("online")}
                        className={`py-5 px-6 rounded-2xl border-2 text-lg font-medium transition-all duration-200 ${
                          trainingMode === "online"
                            ? "border-purple-900 bg-purple-50 text-purple-900 shadow-md"
                            : "border-gray-300 text-gray-700 hover:border-purple-600 hover:bg-purple-50"
                        }`}
                      >
                        Online Training
                      </button>

                      <button
                        type="button"
                        onClick={() => setTrainingMode("offline")}
                        className={`py-5 px-6 rounded-2xl border-2 text-lg font-medium transition-all duration-200 ${
                          trainingMode === "offline"
                            ? "border-purple-900 bg-purple-50 text-purple-900 shadow-md"
                            : "border-gray-300 text-gray-700 hover:border-purple-600 hover:bg-purple-50"
                        }`}
                      >
                        Onsite (Physical)
                      </button>
                    </div>

                    {/* Price display */}
                    {trainingMode && (
                      <div className="mt-6 p-6 bg-purple-50 rounded-2xl text-center border border-purple-200 shadow-sm">
                        {displayPrice !== null && displayPrice > 0 ? (
                          <>
                            <p className="text-2xl font-bold text-purple-900">
                              ₦{displayPrice.toLocaleString()}
                            </p>
                            <p className="text-lg text-purple-700 mt-1 font-medium">
                              {trainingMode === "online" ? "Online" : "Onsite"} Training Price
                            </p>
                          </>
                        ) : (
                          <p className="text-lg text-amber-700">
                            Please select a course first 
                          </p>
                        )}
                      </div>
                    )}

                    {/* Age group with beautiful select */}
                    <div className="relative w-full">
                      <select
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value)}
                        className="w-full px-6 py-4 text-gray-900 bg-white border border-gray-300 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition cursor-pointer hover:border-purple-900 shadow-sm"
                        required
                      >
                        <option value="" disabled>
                          Age Group *
                        </option>
                        <option value="10-17">10–17 years</option>
                        <option value="18-24">18–24 years</option>
                        <option value="25-34">25–34 years</option>
                        <option value="35+">35+ years</option>
                      </select>

                      <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-purple-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <textarea
                      placeholder="What are your expectations? *"
                      value={expectation}
                      onChange={(e) => setExpectation(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 h-32"
                      required
                    />
                    <textarea
                      placeholder="Any background knowledge? If yes, which skills?"
                      value={backgroundKnowledge}
                      onChange={(e) => setBackgroundKnowledge(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 h-24"
                    />
                    <input
                      type="text"
                      placeholder="Nationality *"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                      required
                    />
                    <textarea
                      placeholder="Any other related important information"
                      value={otherInfo}
                      onChange={(e) => setOtherInfo(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-900 focus:border-purple-900 h-24"
                    />
                  </>
                )}
              </div>
            )}

            {registrationType && (
              <div className="text-center mt-10">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-purple-900 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-purple-800 transition shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Submit Registration"}
                </button>
              </div>
            )}

           {message && (
  <div
    className={`mt-8 p-6 rounded-xl text-center text-lg font-medium ${
      message.includes("success") || message.includes("submitted") || message.includes("WhatsApp")
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }`}
  >
    {message}

    {/* Show buttons ONLY on success */}
    {(message.includes("success") || message.includes("submitted") || message.includes("WhatsApp")) && (
      <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-6">
        {/* Join Community Button */}
        <a
          href="https://chat.whatsapp.com/LZlC1B0D8m1LvxA3HAszmj"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition shadow-lg transform hover:scale-105"
        >
          Join the Community (Updates)
        </a>

        {/* Join Waitlist Button */}
        <a
          href="https://chat.whatsapp.com/Juq6BD2KGZ2AQUN7lp1xf1"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-purple-900 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full text-lg transition shadow-lg transform hover:scale-105"
        >
          Join the Waitlist
        </a>
      </div>
    )}
  </div>
)}

            <p className="text-center text-gray-600 mt-10">
              Need help? WhatsApp: +234 916 136 0898 • Email: info.phantomire@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}