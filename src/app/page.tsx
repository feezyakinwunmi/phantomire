"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Hero from "./components/home/Hero";
import Audiences from "./components/home/Audiences";
import Services from "./components/home/Services";
import Wellbeing from "./components/home/Wellbeing";
import Solutions from "./components/home/Solutions";
import Academy from "./components/home/Academy";
import Voices from "./components/home/Voices";
import Events, { type HomeEvent } from "./components/home/Events";
import FinalCta from "./components/home/FinalCta";
import LaunchBand from "./components/event/LaunchBand";

/**
 * Landing page. Each section lives in components/home:
 *   Hero       what we do, in one line
 *   Audiences  who we build for (businesses, organizations, people)
 *   Services   what we build + how we work
 *   Wellbeing  "tech, used right": mind, emotions, health
 *   Solutions  our products and client projects (filterable)
 *   Academy    training, numbers, partnerships
 *   Voices     testimonials
 *   LaunchBand the 11 December launch event, with a countdown
 *   Events     upcoming events (only when there are any)
 *   FinalCta   start a project
 */
export default function Home() {
  const [events, setEvents] = useState<HomeEvent[]>([]);

  useEffect(() => {
    let cancelled = false;

    const fetchEvents = async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .gte("date", new Date().toISOString().split("T")[0])
        .order("date", { ascending: true })
        .limit(2);

      if (!cancelled) setEvents((data as HomeEvent[] | null) ?? []);
    };

    fetchEvents();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="overflow-hidden bg-white text-[#14121c]">
      <Hero />
      <Audiences />
      <Services />
      <Wellbeing />
      <Solutions />
      <Academy />
      <Voices />
      <LaunchBand />
      <Events events={events} />
      <FinalCta />
    </main>
  );
}
