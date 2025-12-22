"use client";

import { supabase } from "../lib/supabase"; // Make sure you have this file
import { useState, useEffect } from "react";

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<"courses" | "events" | "payments">("courses");

  const [courses, setCourses] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Modal states
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<any>(null);
  const [editingEvent, setEditingEvent] = useState<any>(null);

  // Form states
  const [courseForm, setCourseForm] = useState({
    name: "",
    description: "",
    image_url: "",
    course_fee: 0,
    discount: 0,
    duration: "12 weeks",
  });

  const [eventForm, setEventForm] = useState({
    title: "",
    short_desc: "",
    description: "",
    date: "",
    time: "",
    location: "",
    reg_url: "",
    image_url: "",
  });

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 5000); // Auto hide after 5s
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [{ data: c }, { data: e }, { data: p }] = await Promise.all([
        supabase.from("courses").select("*"),
        supabase.from("events").select("*"),
        supabase.from("form_payments").select("*").order("paid_at", { ascending: false }),
      ]);
      setCourses(c || []);
      setEvents(e || []);
      setPayments(p || []);
    } catch (err) {
      console.error("Fetch error:", err);
      showMessage("Failed to load data", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        fetchAllData();
      } else {
        setUser(null);
      }
    });

    // Initial check
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
        fetchAllData();
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Refetch when tab changes
  useEffect(() => {
    if (user) fetchAllData();
  }, [tab]);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      showMessage(error.message, "error");
    } else {
      setUser(data.user);
      fetchAllData();
      showMessage("Login successful!", "success");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    showMessage("Logged out", "success");
  };

  const handleSaveCourse = async () => {
    try {
      if (editingCourse) {
        const { error } = await supabase.from("courses").update(courseForm).eq("id", editingCourse.id);
        if (error) throw error;
        showMessage("Course updated!", "success");
      } else {
        const { error } = await supabase.from("courses").insert(courseForm);
        if (error) throw error;
        showMessage("Course added!", "success");
      }
      setShowCourseModal(false);
      setEditingCourse(null);
      setCourseForm({ name: "", description: "", image_url: "", course_fee: 0, discount: 0, duration: "12 weeks" });
      fetchAllData();
    } catch (err: any) {
      console.error("Save course error:", err);
      showMessage(err.message || "Save failed", "error");
    }
  };

  const handleDeleteCourse = async (id: number) => {
    if (!confirm("Delete this course permanently?")) return;
    try {
      const { error } = await supabase.from("courses").delete().eq("id", id);
      if (error) throw error;
      showMessage("Course deleted", "success");
      fetchAllData();
    } catch (err: any) {
      showMessage(err.message || "Delete failed", "error");
    }
  };

  const handleSaveEvent = async () => {
    try {
      if (editingEvent) {
        const { error } = await supabase.from("events").update(eventForm).eq("id", editingEvent.id);
        if (error) throw error;
        showMessage("Event updated!", "success");
      } else {
        const { error } = await supabase.from("events").insert(eventForm);
        if (error) throw error;
        showMessage("Event added!", "success");
      }
      setShowEventModal(false);
      setEditingEvent(null);
      setEventForm({ title: "", short_desc: "", description: "", date: "", time: "", location: "", reg_url: "", image_url: "" });
      fetchAllData();
    } catch (err: any) {
      showMessage(err.message || "Save failed", "error");
    }
  };

  const handleDeleteEvent = async (id: number) => {
    if (!confirm("Delete this event permanently?")) return;
    try {
      const { error } = await supabase.from("events").delete().eq("id", id);
      if (error) throw error;
      showMessage("Event deleted", "success");
      fetchAllData();
    } catch (err: any) {
      showMessage(err.message || "Delete failed", "error");
    }
  };
 if (!user) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">Admin Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border mb-8"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-purple-900 text-white py-4 rounded-xl font-bold hover:bg-purple-800"
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900">Phantomire Admin</h1>
          <button onClick={handleLogout} className="text-red-600 font-semibold text-lg">Logout</button>
        </div>
{/* Message Toast */}
        {message && (
          <div className={`fixed top-24 right-6 px-8 py-4 rounded-xl shadow-2xl text-white font-bold z-50 ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}>
            {message.text}
          </div>
        )}
        {/* Tabs */}
        <div className="flex space-x-8 border-b-2 border-gray-200 mb-10">
          <button onClick={() => setTab("courses")} className={`pb-4 text-xl font-bold border-b-4 ${tab === "courses" ? "border-purple-900 text-purple-900" : "border-transparent text-gray-600"}`}>Courses</button>
          <button onClick={() => setTab("events")} className={`pb-4 text-xl font-bold border-b-4 ${tab === "events" ? "border-purple-900 text-purple-900" : "border-transparent text-gray-600"}`}>Events</button>
          <button onClick={() => setTab("payments")} className={`pb-4 text-xl font-bold border-b-4 ${tab === "payments" ? "border-purple-900 text-purple-900" : "border-transparent text-gray-600"}`}>Form Payments</button>
        </div>

        {/* COURSES TAB */}
        {tab === "courses" && (
          <div>
            <button
              onClick={() => {
                setEditingCourse(null);
                setCourseForm({ name: "", description: "", image_url: "", course_fee: 0, discount: 0, duration: "12 weeks" });
                setShowCourseModal(true);
              }}
              className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold mb-8 hover:bg-purple-800 shadow-lg"
            >
              + Add New Course
            </button>

            <div className="grid gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <img src={course.image_url || "https://via.placeholder.com/150"} alt={course.name} className="w-32 h-32 object-cover rounded-xl" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h3>
                      <p className="text-lg text-gray-600 mb-2">{course.description}</p>
                      <p className="text-xl"><strong>₦{course.course_fee}</strong> {course.discount > 0 && <span className="text-green-600">(-₦{course.discount} discount)</span>}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setEditingCourse(course);
                        setCourseForm(course);
                        setShowCourseModal(true);
                      }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDeleteCourse(course.id)} className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVENTS TAB */}
        {tab === "events" && (
          <div>
            <button
              onClick={() => {
                setEditingEvent(null);
                setEventForm({ title: "", short_desc: "", description: "", date: "", time: "", location: "", reg_url: "", image_url: "" });
                setShowEventModal(true);
              }}
              className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold mb-8 hover:bg-purple-800 shadow-lg"
            >
              + Add New Event
            </button>

            <div className="space-y-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <img src={event.image_url || "https://via.placeholder.com/150"} alt={event.title} className="w-40 h-40 object-cover rounded-xl" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-xl text-gray-700 mb-2">{event.short_desc}</p>
                      <p className="text-lg"><strong>{event.date}</strong> • {event.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setEditingEvent(event);
                        setEventForm(event);
                        setShowEventModal(true);
                      }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDeleteEvent(event.id)} className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAYMENTS TAB */}
        {tab === "payments" && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Form Payments ({payments.length})</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-900 text-white">
                  <tr>
                    <th className="p-6 text-left">Name</th>
                    <th className="p-6 text-left">Phone</th>
                    <th className="p-6 text-left">Email</th>
                    <th className="p-6 text-left">Promo Code</th>
                    <th className="p-6 text-left">Reference</th>
                    <th className="p-6 text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payments.length === 0 ? (
                    <tr><td colSpan={6} className="p-12 text-center text-gray-500">No payments yet</td></tr>
                  ) : (
                    payments.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="p-6">{p.name || "—"}</td>
                        <td className="p-6">{p.phone || "—"}</td>
                        <td className="p-6">{p.email}</td>
                        <td className="p-6 font-semibold">{p.promo_code || "None"}</td>
                        <td className="p-6 font-mono text-sm">{p.reference}</td>
                        <td className="p-6">{new Date(p.paid_at).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Course Modal */}
        {showCourseModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full max-h-screen overflow-y-auto">
              <h2 className="text-3xl font-bold mb-8">{editingCourse ? "Edit" : "Add"} Course</h2>
              <div className="space-y-6">
                <input type="text" placeholder="Course Name" value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <textarea placeholder="Description" value={courseForm.description} onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })} className="w-full px-6 py-4 rounded-xl border h-32" />
                <input type="text" placeholder="Image URL" value={courseForm.image_url} onChange={(e) => setCourseForm({ ...courseForm, image_url: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="number" placeholder="Course Fee (₦)" value={courseForm.course_fee} onChange={(e) => setCourseForm({ ...courseForm, course_fee: Number(e.target.value) })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="number" placeholder="Discount (₦)" value={courseForm.discount} onChange={(e) => setCourseForm({ ...courseForm, discount: Number(e.target.value) })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="text" placeholder="Duration" value={courseForm.duration} onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
              </div>
              <div className="flex gap-4 mt-10">
                <button onClick={handleSaveCourse} className="flex-1 bg-purple-900 text-white py-4 rounded-xl font-bold hover:bg-purple-800">
                  Save Course
                </button>
                <button onClick={() => setShowCourseModal(false)} className="flex-1 bg-gray-300 text-gray-900 py-4 rounded-xl font-bold hover:bg-gray-400">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Event Modal */}
        {showEventModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full max-h-screen overflow-y-auto">
              <h2 className="text-3xl font-bold mb-8">{editingEvent ? "Edit" : "Add"} Event</h2>
              <div className="space-y-6">
                <input type="text" placeholder="Title" value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="text" placeholder="Short Description" value={eventForm.short_desc} onChange={(e) => setEventForm({ ...eventForm, short_desc: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <textarea placeholder="Full Description" value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} className="w-full px-6 py-4 rounded-xl border h-32" />
                <input type="text" placeholder="Date (e.g. March 2026)" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="text" placeholder="Time" value={eventForm.time} onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="text" placeholder="Location" value={eventForm.location} onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="text" placeholder="Registration URL" value={eventForm.reg_url} onChange={(e) => setEventForm({ ...eventForm, reg_url: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
                <input type="text" placeholder="Image URL" value={eventForm.image_url} onChange={(e) => setEventForm({ ...eventForm, image_url: e.target.value })} className="w-full px-6 py-4 rounded-xl border" />
              </div>
              <div className="flex gap-4 mt-10">
                <button onClick={handleSaveEvent} className="flex-1 bg-purple-900 text-white py-4 rounded-xl font-bold hover:bg-purple-800">
                  Save Event
                </button>
                <button onClick={() => setShowEventModal(false)} className="flex-1 bg-gray-300 text-gray-900 py-4 rounded-xl font-bold hover:bg-gray-400">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}