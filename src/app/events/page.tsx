"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { format, parseISO, isAfter, isBefore, startOfMonth, endOfMonth } from "date-fns";

export default function Events() {
  const [upcomingByMonth, setUpcomingByMonth] = useState<Map<string, any[]>>(new Map());
  const [pastByMonth, setPastByMonth] = useState<Map<string, any[]>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openEvent, setOpenEvent] = useState<number | null>(null);
  const [showPast, setShowPast] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true }); // Soonest first globally

        if (error) throw error;

        const now = new Date();
        now.setHours(0, 0, 0, 0); // Normalize to start of day

        const upcomingMap = new Map<string, any[]>();
        const pastMap = new Map<string, any[]>();

        data?.forEach((event) => {
          // Safely parse date
          let eventDate: Date;
          try {
            eventDate = parseISO(event.date);
            if (event.time) {
              const [hours, minutes] = event.time.split(":");
              eventDate.setHours(parseInt(hours || "23"), parseInt(minutes || "59"));
            } else {
              eventDate.setHours(23, 59); // End of day if no time
            }
          } catch {
            return; // Skip invalid dates
          }

          const monthKey = format(eventDate, "MMMM yyyy");
          const isUpcoming = isAfter(eventDate, now);

          if (isUpcoming) {
            if (!upcomingMap.has(monthKey)) upcomingMap.set(monthKey, []);
            upcomingMap.get(monthKey)!.push(event);
          } else if (event.is_phantomire === true) {
            if (!pastMap.has(monthKey)) pastMap.set(monthKey, []);
            pastMap.get(monthKey)!.push(event);
          }
        });

        // Sort past months: most recent first
        const sortedPast = new Map(
          Array.from(pastMap.entries()).sort((a, b) => {
            return parseISO(b[0] + "-01").getTime() - parseISO(a[0] + "-01").getTime();
          })
        );

        setUpcomingByMonth(upcomingMap);
        setPastByMonth(sortedPast);
      } catch (err: any) {
        setError("Failed to load events.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const renderEventsByMonth = (monthMap: Map<string, any[]>, isPast = false) => {
    return Array.from(monthMap.entries()).map(([month, events]) => (
      <div key={month} className="mb-16">
        <h3 className="text-2xl font-bold text-purple-900 mb-8 pb-3 border-b-2 border-purple-200 inline-block">
          {month}
        </h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${isPast ? "opacity-90" : ""}`}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isOpen={openEvent === event.id}
              toggleOpen={() => setOpenEvent(openEvent === event.id ? null : event.id)}
              isPast={isPast}
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Upcoming Events */}
      <section className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">
            Convenings & Gatherings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Upcoming Tech Events
          </h2>

          {loading && <p className="text-center text-xl text-gray-600">Loading events...</p>}
          {error && <p className="text-center text-xl text-red-600">{error}</p>}

          {!loading && !error && upcomingByMonth.size === 0 && (
            <p className="text-center text-xl text-gray-600">
              No upcoming events at the moment. Check back soon!
            </p>
          )}

          <div className="space-y-16">
            {renderEventsByMonth(upcomingByMonth)}
          </div>
        </div>
      </section>

      {/* Past Phantomire Events */}
      {pastByMonth.size > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <button
              onClick={() => setShowPast(!showPast)}
              className="w-full md:w-auto bg-gradient-to-r from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 text-purple-900 font-bold py-6 px-12 rounded-3xl transition-all shadow-lg flex items-center justify-between text-xl"
            >
              <span>Past Phantomire Events ({Array.from(pastByMonth.values()).flat().length})</span>
              <svg
                className={`w-7 h-7 ml-4 transition-transform ${showPast ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showPast && (
              <div className="mt-12 space-y-16">
                {renderEventsByMonth(pastByMonth, true)}
              </div>
            )}
          </div>
        </section>
      )}

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

// EventCard remains the same as before
function EventCard({ event, isOpen, toggleOpen, isPast = false }: { event: any; isOpen: boolean; toggleOpen: () => void; isPast?: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${isPast ? "opacity-85" : ""}`}
      onClick={toggleOpen}
    >
      <div className="flex flex-col sm:flex-row items-start p-6 cursor-pointer">
        <img
          src={event.image_url || "https://via.placeholder.com/400x400?text=Event"}
          alt={event.title}
          className="w-full sm:w-40 sm:h-40 object-cover rounded-xl mb-6 sm:mb-0 sm:mr-8 flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
          <p className="text-base text-gray-600 mb-4">
            {event.short_desc || `${event.date} • ${event.location || "TBA"}`}
          </p>
          <p className="text-purple-900 font-semibold">
            {isOpen ? "Hide Details ↑" : "View Details →"}
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="px-6 pb-8 pt-4 border-t border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">{event.description}</p>
              <div className="space-y-3 text-base">
                <p><strong>Date:</strong> {format(parseISO(event.date), "EEEE, MMMM d, yyyy")}</p>
                <p><strong>Time:</strong> {event.time || "Full day"}</p>
                <p><strong>Location:</strong> {event.location || "To be announced"}</p>
                {!event.is_phantomire && event.host && <p><strong>Host:</strong> {event.host}</p>}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img
                src={event.image_url || "https://via.placeholder.com/600x400"}
                alt={event.title}
                className="w-full rounded-xl shadow-md mb-6"
              />
              {event.reg_url && event.reg_url !== "#" ? (
                <a href={event.reg_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-full">
                  <button className="bg-purple-900 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-800 transition w-full">
                    Learn More
                  </button>
                </a>
              ) : (
                <button disabled className="bg-gray-400 text-white px-8 py-4 rounded-full font-medium w-full opacity-70">
                  Event Ended
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}