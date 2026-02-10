// /app/events/page.tsx — Server Component (no "use client" here)

import { supabase } from "../lib/supabase"
import EventsClient from "./eventClient" // Create this child component below

export const metadata = {
  title: "Upcoming Tech Events in Nigeria | Phantomire Technologies",
  description: "Discover upcoming tech workshops, bootcamps, and community events by Phantomire Technologies in Epe, Lagos, and across Nigeria. Join us to learn web development, UI/UX, graphics, and more.",
  openGraph: {
    title: "Upcoming Tech Events | Phantomire Technologies",
    description: "Hands-on tech training events for Nigerian youth. Affordable, ethical, and community-focused.",
    url: "https://phantomiretechnologies.com/events",
    siteName: "Phantomire Technologies",
    images: [
      {
        url: "https://phantomiretechnologies.com/og-events.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Tech Events in Nigeria | Phantomire",
    description: "Join our workshops and bootcamps in Epe & Lagos.",
    images: ["https://phantomiretechnologies.com/og-events.jpg"],
  },
}
export const revalidate = 60; // Re-fetch every 60 seconds (ISR - Incremental Static Regeneration)
export default async function EventsPage() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true })

  if (error) {
    console.error("Events fetch error:", error)
  }

  return <EventsClient initialEvents={events || []} />
}