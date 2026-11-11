/**
 * Phantomire campus ambassadors. To add one: put a square photo in /public/ambassadors/
 * (at least 900×900) and add an entry below. Campuses group themselves automatically.
 */

export type Ambassador = {
  id: string;
  firstName: string;
  /** Everything after the first name. */
  lastName: string;
  nickname?: string;
  university: string;
  campus: string;
  /** Short code shown on badges, e.g. "LASU Epe". */
  short: string;
  roles: string[];
  photo: string;
  /** Where the photo's focal point is (CSS object-position). */
  focus?: string;
};

export const AMBASSADORS: Ambassador[] = [
  {
    id: "fadhilah-adeniran",
    firstName: "Fadhilah",
    lastName: "Adesola Adeniran",
    university: "Lagos State University",
    campus: "Epe Campus",
    short: "LASU Epe",
    roles: ["Honourable Member, NUESA LASU SPC", "Membership Chair, Rotaract Club of LASU Epe Campus"],
    photo: "/ambassadors/fadhilah-adeniran.webp",
    focus: "50% 30%",
  },
  {
    id: "oseni-abass",
    firstName: "Oseni",
    lastName: "Abass Babatunde",
    nickname: "A_smart",
    university: "Lagos State University",
    campus: "Epe Campus",
    short: "LASU Epe",
    roles: ["P.R.O, SPE LASU Chapter", "Honourable Member, 29th NUESA LASU SPC"],
    photo: "/ambassadors/oseni-abass.webp",
    focus: "50% 35%",
  },
];

/** Ambassadors grouped by campus, in the order campuses first appear. */
export const byCampus = () => {
  const map = new Map<string, Ambassador[]>();
  for (const a of AMBASSADORS) {
    const key = `${a.university} · ${a.campus}`;
    map.set(key, [...(map.get(key) ?? []), a]);
  }
  return Array.from(map.entries());
};
