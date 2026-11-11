import {
  CalendarCheck,
  ClipboardList,
  Globe,
  LayoutDashboard,
  Newspaper,
  Clapperboard,
  Building2,
  ShieldCheck,
  Ticket,
  Utensils,
  Video,
  type LucideIcon,
} from "lucide-react";

/**
 * Every solution shown on the site (home page section and /solutions) comes from this list.
 *
 * Logos: when a product's logo is ready, drop it in /public/solutions/ (square PNG/SVG/WebP,
 * ideally 512×512 on a transparent background) and set `logo`, e.g. logo: "/solutions/workbase.png".
 * Until then a lettermark placeholder is shown in its place.
 */

export type Group = "workbase" | "product" | "client";

export type Solution = {
  id: string;
  name: string;
  group: Group;
  /** Short descriptor, e.g. "Workforce · Productivity". */
  category: string;
  /** One-line promise used as a heading. */
  headline: string;
  status: "New" | "Live" | "Coming soon" | "In development" | "Client project";
  /** Short description for cards. */
  text: string;
  features: string[];
  icon: LucideIcon;
  /** Two letters for the placeholder mark. */
  mark: string;
  logo?: string;
  image?: { src: string; alt: string };
  /** External site when there is one; otherwise leave empty. */
  href?: string;
};

export const GROUPS: { id: Group; label: string; short: string; anchor: string; text: string }[] = [
  {
    id: "workbase",
    label: "The Workbase suite",
    short: "Workbase",
    anchor: "workbase",
    text: "Tools that run the workplace: people, meetings, bookings and forms.",
  },
  {
    id: "product",
    label: "Everyday products",
    short: "Our products",
    anchor: "products",
    text: "Technology for how people eat, pay and gather.",
  },
  {
    id: "client",
    label: "Client projects",
    short: "Client projects",
    anchor: "clients",
    text: "Platforms we design and build for the brands we partner with.",
  },
];

export const SOLUTIONS: Solution[] = [
  // ---------- Workbase suite ----------
  {
    id: "workbase",
    name: "Workbase",
    group: "workbase",
    category: "Workforce · Productivity",
    headline: "Know your team is working, without hovering.",
    status: "New",
    text: "Track attendance, tasks and hours for teams in the office or remote, so you always know who is working on what.",
    features: ["Clock-in & attendance", "Task and time tracking", "Productivity reports", "Office and remote teams"],
    icon: LayoutDashboard,
    mark: "Wb",
    logo: "/solutions/workbase.webp",
  },
  {
    id: "workbase-meet",
    name: "Workbase Meet",
    group: "workbase",
    category: "Video · Meetings",
    headline: "Video meetings, built for Nigeria.",
    status: "New",
    text: "Meetings that hold up on Nigerian networks, with a data saver for mobile users and every meeting record kept in one place.",
    features: ["Calls tuned for local networks", "Data saver for mobile users", "Screen sharing & recordings", "Meeting notes and records"],
    icon: Video,
    mark: "Me",
    logo: "/solutions/workbase-meet.webp",
  },
  {
    id: "workbase-book",
    name: "Workbase Book",
    group: "workbase",
    category: "Bookings · Payments",
    headline: "Take bookings online, free or paid.",
    status: "New",
    text: "Let customers book appointments, sessions and services online. Keep bookings free, or take payment the moment they book.",
    features: ["Free and paid bookings", "Online payments at checkout", "Availability calendar", "Instant booking confirmations"],
    icon: CalendarCheck,
    mark: "Bk",
    logo: "/solutions/workbase-book.webp",
  },
  {
    id: "workbase-form",
    name: "Workbase Form",
    group: "workbase",
    category: "Forms · Surveys",
    headline: "Forms made easy. And free.",
    status: "New",
    text: "Build anything from a quick survey to a complex, multi-step application in minutes, then see every response in one place.",
    features: ["Drag-and-drop form builder", "Logic and multi-step forms", "Responses dashboard", "Free to use"],
    icon: ClipboardList,
    mark: "Fm",
    logo: "/solutions/workbase-form.webp",
  },

  // ---------- Everyday products ----------
  {
    id: "vesphe",
    name: "Vesphe",
    group: "product",
    category: "Eats · Delivers · Anywhere",
    headline: "Food ordering that knows your goals.",
    status: "Coming soon",
    text: "Food ordering and delivery built around how you eat, live and reach your health goals, with guidance before you order.",
    features: ["Smart food ordering", "Personalised health guidance", "AI-powered recommendations", "Delivery & logistics"],
    icon: Utensils,
    mark: "Ve",
    logo: "/solutions/vesphe.webp",
    image: { src: "/home/product-vesphe.webp", alt: "A colourful, healthy bowl of food" },
    href: "https://vesphe.com",
  },
  {
    id: "pearlvix",
    name: "Pearlvix",
    group: "product",
    category: "Fintech · Escrow · Trust",
    headline: "Pay online without the fear of scams.",
    status: "In development",
    text: "A digital escrow platform that puts a trusted layer between buyers and sellers, so both sides are protected.",
    features: ["Secure escrow payments", "Buyer & seller protection", "Transaction verification", "Trust-first marketplace tools"],
    icon: ShieldCheck,
    mark: "Pv",
    image: { src: "/home/product-pearlvix.webp", alt: "Two people shaking hands on a deal" },
  },
  {
    id: "domni",
    name: "DOMNI",
    group: "product",
    category: "Events · Voting · Experiences",
    headline: "Every part of an event, in one place.",
    status: "Coming soon",
    text: "Create, manage, discover and attend events, sell tickets and run voting, all in one modern platform for organisers and guests.",
    features: ["Event creation", "Digital ticketing", "Online voting", "Attendee experience"],
    icon: Ticket,
    mark: "Do",
    logo: "/solutions/domni.webp",
    image: { src: "/home/product-domni.webp", alt: "Confetti over the crowd at a live event" },
  },

  // ---------- Client projects ----------
  {
    id: "lo-media-house",
    name: "LO Media House",
    group: "client",
    category: "Media · Brand",
    headline: "A premium home for a media brand.",
    status: "Client project",
    text: "A premium home for LO Media House's media, branding and content ecosystem.",
    features: [],
    icon: Building2,
    mark: "LO",
    image: { src: "/home/solution-lomediahouse.webp", alt: "The LO Media House website" },
    href: "https://www.lomediahouse.com",
  },
  {
    id: "lo-media-studio",
    name: "LO Media Studio",
    group: "client",
    category: "Creative · Production",
    headline: "Creative production, beautifully shown.",
    status: "Client project",
    text: "Showcasing creative production, visual storytelling and premium media services.",
    features: [],
    icon: Clapperboard,
    mark: "LO",
    image: { src: "/home/solution-lomediastudio.webp", alt: "The LO Media Studio website" },
    href: "https://www.lomediastudio.com",
  },
  {
    id: "lo-publications",
    name: "LO Publications",
    group: "client",
    category: "Publishing · Editorial",
    headline: "Digital publishing for storytellers.",
    status: "Client project",
    text: "A digital publishing experience for editorial work and creative storytelling.",
    features: [],
    icon: Newspaper,
    mark: "LO",
    image: { src: "/home/solution-lopublications.webp", alt: "A stack of open magazines" },
  },
  {
    id: "lo-platform",
    name: "LO Platform",
    group: "client",
    category: "Technology · SaaS",
    headline: "Systems for modern content teams.",
    status: "Client project",
    text: "Tools and systems for modern content operations and digital growth.",
    features: [],
    icon: Globe,
    mark: "LO",
    image: { src: "/home/solution-loplatform.webp", alt: "Someone working on a laptop" },
  },
];

export const byGroup = (g: Group) => SOLUTIONS.filter((x) => x.group === g);
