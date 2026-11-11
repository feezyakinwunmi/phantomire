/**
 * Contact links used across the site. Change a number or link here and every button follows.
 */

/** 0916 146 0898 in international format (no +, no leading 0). */
export const WHATSAPP_NUMBER = "2349161460898";
export const PHONE_DISPLAY = "+234 916 146 0898";
export const EMAIL = "info.phantomire@gmail.com";

/** A WhatsApp chat with Phantomire, optionally with a message already typed. */
export const whatsapp = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

/** Every "Start a project" button. */
export const START_PROJECT = whatsapp(
  "Hello Phantomire Technologies! I'd like to start a project with your team. Can we chat?",
);

/**
 * "Join the community" (register page, courses).
 * TODO: replace with the WhatsApp group / channel invite link when it's ready,
 * e.g. "https://chat.whatsapp.com/XXXXXXXX" or "https://whatsapp.com/channel/XXXXXXXX".
 */
export const COMMUNITY_URL = whatsapp(
  "Hi Phantomire! I'd like to join the community and be notified when registration for the next batch opens.",
);
