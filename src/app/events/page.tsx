"use client";

import Header from "../components/Header";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("created_at", { ascending: false }); // Newest first

        if (error) throw error;
        setEvents(data || []);
      } catch (err: any) {
        setError("Failed to load events. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Events Grid */}
      <section className="py-16 mt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Convenings & Gatherings</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Upcoming Tech Events</h2>

          {loading && <p className="text-center text-xl text-gray-600">Loading events...</p>}
          {error && <p className="text-center text-xl text-red-600">{error}</p>}

          {!loading && !error && events.length === 0 && (
            <p className="text-center text-xl text-gray-600">No upcoming events yet. Check back soon!</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2"
                onClick={() => setOpenEvent(openEvent === event.title ? null : event.title)}
              >
                <div className="flex flex-col sm:flex-row items-start p-6">
                  {/* Small Square Image */}
                  <img 
                    src={event.image_url || "https://via.placeholder.com/400x400?text=Event+Image"} 
                    alt={event.title} 
                    className="w-full sm:w-40 sm:h-40 object-cover rounded-xl mb-6 sm:mb-0 sm:mr-8 flex-shrink-0" 
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{event.short_desc || event.date + " • " + event.location}</p>
                    <p className="text-purple-900 font-semibold">
                      {openEvent === event.title ? "Show Less ↑" : "View Details →"}
                    </p>
                  </div>
                </div>

                {/* Expanded Details */}
                {openEvent === event.title && (
                  <div className="px-6 pb-8 pt-4 border-t border-gray-200 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <p className="text-base text-gray-700 leading-relaxed mb-6">{event.description}</p>
                        <div className="space-y-3 text-base">
                          <p><strong>Date:</strong> {event.date || "TBA"}</p>
                          <p><strong>Time:</strong> {event.time || "Full day"}</p>
                          <p><strong>Location:</strong> {event.location || "To be announced"}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                        <img 
                          src={event.image_url || "https://via.placeholder.com/600x400?text=Event+Image"} 
                          alt={event.title} 
                          className="w-full rounded-xl shadow-md mb-6" 
                        />
                        <a 
                          href={event.reg_url || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full"
                          onClick={(e) => e.stopPropagation()} // Prevent collapse when clicking link
                        >
                          <button className="bg-purple-900 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-800 transition w-full">
                            {event.reg_url && event.reg_url !== "#" ? "Register / Learn More" : "Stay Tuned for Registration"}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring Tech to Your Community</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 opacity-90">
              Want to partner or host an event with Phantomire? We're always open to collaboration.
            </p>
            <a href="mailto:phantomire@gmail.com">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition shadow-md">
                Contact Us for Partnerships
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}