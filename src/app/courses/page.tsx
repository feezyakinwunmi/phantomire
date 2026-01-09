"use client";

import Header from "../components/Header"; // Adjust path if needed
import { supabase } from "../lib/supabase"; // Your lib file
import { useState, useEffect } from "react";

export default function Courses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("available", true)
          .order("id");

        if (error) throw error;
        setCourses(data || []);
      } catch (err: any) {
        setError("Failed to load courses. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const comingSoon = ["Data Science & AI", "Cybersecurity", "Mobile App Development", "Digital Marketing"];

  return (
    <main className="min-h-screen bg-white">

      {/* Available Courses */}
      <section className="pt-40 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Available Now</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Our Core Courses</h2>

          {loading && <p className="text-center text-xl text-gray-600">Loading courses...</p>}
          {error && <p className="text-center text-xl text-red-600">{error}</p>}

          {!loading && !error && courses.length === 0 && (
            <p className="text-center text-xl text-gray-600">No courses available yet. Check back soon!</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img 
                  src={course.image_url || "https://via.placeholder.com/800x500?text=Course+Image"} 
                  alt={course.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-base text-gray-700 mb-4">
                          {course.name}<br/> <b>Buy Course:</b> ₦{course.buy_price} 
                  </p>
                  <p className="text-base text-gray-600 mb-6">{course.duration || "12 weeks"}</p>
                  
                  <button 
                    onClick={() => setOpenCourse(openCourse === course.name ? null : course.name)}
                    className="text-purple-900 font-medium hover:underline mb-4 block"
                  >
                    {openCourse === course.name ? "Show Less ↑" : "Read More →"}
                  </button>

                  {openCourse === course.name && (
                    <div className="mt-6 space-y-6">
                      <p className="text-base text-gray-700 leading-relaxed">{course.description}</p>
                      
                      {/* Optional video if you add video_url column */}
                      {/* {course.video_url && (
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                          <iframe src={course.video_url} title={`${course.name} intro`} allowFullScreen className="w-full h-full"></iframe>
                        </div>
                      )} */}

                      <a href="/register">
                        <button className="bg-purple-900 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition w-full mt-6">
                          Enroll in {course.name}
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Launching Soon</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Coming Soon Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {comingSoon.map((soon) => (
              <div key={soon} className="relative bg-gray-900 rounded-2xl overflow-hidden opacity-80">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/026/178/569/non_2x/futuristic-sci-fi-on-neon-purple-background-purple-circle-portal-with-light-flares-and-sparkles-vector.jpg" 
                  alt={soon} 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{soon}</h3>
                    <p className="text-purple-400 text-lg font-semibold">Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 opacity-90">
              Limited spots – enroll today!
            </p>
            <a href="/register">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
                View Enrollment Details
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}