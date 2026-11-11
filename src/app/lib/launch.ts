/**
 * The upcoming Phantomire launch event.
 *
 * Everything the site shows about the event (the floating countdown, the home page band,
 * the events page and the calendar file) reads from this one object, so this is the only
 * place to edit when the name, time, venue or registration link is confirmed.
 */

export const LAUNCH = {
  /** TODO: placeholder until the event name is chosen. */
  name: "Phantomire Launch & Tech Gathering",
  /** Shown under the name. */
  kind: "Product launch + tech gathering",
  tagline:
    "An evening to unveil what we have been building, and to bring Nigeria's builders, founders and creatives into one room.",

  /** Start and end in West Africa Time (UTC+1). TODO: confirm the time. */
  startsAt: "2026-12-11T10:00:00+01:00",
  endsAt: "2026-12-11T17:00:00+01:00",
  /** Set to true once the time above is final; until then the site says "Time to be confirmed". */
  timeConfirmed: false,

  /** TODO: placeholder venue. */
  venue: "Venue to be announced",
  city: "Lagos, Nigeria",
  venueConfirmed: false,

  /**
   * Registration link (Google Form, Luma, Eventbrite...). While it is empty,
   * "Reserve your spot" opens WhatsApp with a pre-filled message instead.
   */
  registerUrl: "",
  whatsapp: "2349161460898",
} as const;

export const launchStart = () => new Date(LAUNCH.startsAt);
export const launchEnd = () => new Date(LAUNCH.endsAt);

/*
 * Dates are formatted by hand (not toLocaleString) so the server and the browser always
 * produce exactly the same text; their built-in locale data can differ and break hydration.
 */
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** The date as seen in Lagos (WAT, UTC+1, no daylight saving). */
const inLagos = (d: Date) => new Date(d.getTime() + 60 * 60 * 1000);

/** "Friday, 11 December 2026" */
export const launchDateLong = () => {
  const d = inLagos(launchStart());
  return `${DAYS[d.getUTCDay()]}, ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
};

/** "11 Dec" */
export const launchDateShort = () => {
  const d = inLagos(launchStart());
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()].slice(0, 3)}`;
};

/** "10:00 AM – 5:00 PM WAT", or a placeholder until confirmed. */
export const launchTime = () => {
  if (!LAUNCH.timeConfirmed) return "Time to be confirmed";
  const t = (date: Date) => {
    const d = inLagos(date);
    const h = d.getUTCHours();
    return `${h % 12 || 12}:${String(d.getUTCMinutes()).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
  };
  return `${t(launchStart())} – ${t(launchEnd())} WAT`;
};

export const launchPlace = () =>
  LAUNCH.venueConfirmed ? `${LAUNCH.venue}, ${LAUNCH.city}` : `${LAUNCH.venue} · ${LAUNCH.city}`;

/** Where "Reserve your spot" goes, and whether it leaves the site. */
export const launchRegisterHref = () => {
  if (LAUNCH.registerUrl) return LAUNCH.registerUrl;
  const msg = `Hi Phantomire! I'd like to reserve a spot at the ${LAUNCH.name} on ${launchDateLong()}.`;
  return `https://wa.me/${LAUNCH.whatsapp}?text=${encodeURIComponent(msg)}`;
};

const gcalStamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** Google Calendar "add event" link. */
export const launchGoogleCalendar = () => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: LAUNCH.name,
    dates: `${gcalStamp(launchStart())}/${gcalStamp(launchEnd())}`,
    details: `${LAUNCH.kind}. ${LAUNCH.tagline}\n\nhttps://phantomiretechnologies.com/events`,
    location: launchPlace(),
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/** The .ics file served at /events/launch.ics */
export const launchIcs = () =>
  [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Phantomire Technologies//Launch//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:launch-2026@phantomiretechnologies.com",
    `DTSTAMP:${gcalStamp(new Date())}`,
    `DTSTART:${gcalStamp(launchStart())}`,
    `DTEND:${gcalStamp(launchEnd())}`,
    `SUMMARY:${LAUNCH.name}`,
    `DESCRIPTION:${LAUNCH.kind}. See https://phantomiretechnologies.com/events`,
    `LOCATION:${launchPlace().replace(/,/g, "\\,")}`,
    "URL:https://phantomiretechnologies.com/events",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
