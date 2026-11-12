/**
 * Phantomire campus ambassadors. To add one: put a square photo in /public/ambassadors/
 * and add an entry below. Schools get their own filter chip and section automatically,
 * keyed by `short`, so keep `short` identical for everyone on the same campus.
 */

export type Ambassador = {
  id: string;
  firstName: string;
  /** Everything after the first name. */
  lastName: string;
  nickname?: string;
  university: string;
  campus: string;
  /** Short code shown on badges and filter chips, e.g. "LASU Epe". */
  short: string;
  roles: string[];
  photo: string;
  /** Where the photo's focal point is (CSS object-position). */
  focus?: string;
};

const LASU_EPE = { university: "Lagos State University", campus: "Epe Campus", short: "LASU Epe" } as const;

export const AMBASSADORS: Ambassador[] = [
  {
    id: "fadhilah-adeniran",
    firstName: "Fadhilah",
    lastName: "Adesola Adeniran",
    ...LASU_EPE,
    roles: ["Honourable Member, NUESA LASU SPC", "Membership Chair, Rotaract Club of LASU Epe Campus"],
    photo: "/ambassadors/fadhilah-adeniran.webp",
    focus: "50% 30%",
  },
  {
    id: "oseni-abass",
    firstName: "Oseni",
    lastName: "Abass Babatunde",
    nickname: "A_smart",
    ...LASU_EPE,
    roles: ["P.R.O, SPE LASU Chapter", "Honourable Member, 29th NUESA LASU SPC"],
    photo: "/ambassadors/oseni-abass.webp",
    focus: "50% 35%",
  },
  {
    id: "oniyide-nabeelah",
    firstName: "Oniyide",
    lastName: "Nabeelah Olaseni",
    ...LASU_EPE,
    roles: ["Head of Class", "Protocol Lead, IMechE LASU", "Millennium Campus Fellow (2026)"],
    photo: "/ambassadors/oniyide-nabeelah.webp",
    focus: "50% 30%",
  },
  {
    id: "bakare-semiat",
    firstName: "Bakare",
    lastName: "Semiat Omotola",
    ...LASU_EPE,
    roles: ["Member, Rotaract Club of LASU Epe Campus"],
    photo: "/ambassadors/bakare-semiat.webp",
    focus: "50% 30%",
  },
  {
    id: "otunaike-marvellous",
    firstName: "Otunaike",
    lastName: "Marvellous Inioluwa",
    ...LASU_EPE,
    roles: ["SPE LASU", "HABS Foundation"],
    photo: "/ambassadors/otunaike-marvellous.webp",
    focus: "50% 30%",
  },
  {
    id: "ajayi-oluwanifemi",
    firstName: "Ajayi",
    lastName: "Oluwanifemi Happiness",
    ...LASU_EPE,
    roles: ["Videographer & Content Creator", "Assistant Head of Class"],
    photo: "/ambassadors/ajayi-oluwanifemi.webp",
    focus: "50% 35%",
  },
  {
    id: "rebecca-akinlalu",
    firstName: "Rebecca",
    lastName: "Akinlalu Oluwarantimi",
    ...LASU_EPE,
    roles: [],
    photo: "/ambassadors/rebecca-akinlalu.webp",
    focus: "50% 35%",
  },
];

export type School = { short: string; name: string; count: number };

/** Every school with at least one ambassador, in the order they first appear. */
export const schools = (list: Ambassador[] = AMBASSADORS): School[] => {
  const map = new Map<string, School>();
  for (const a of list) {
    const s = map.get(a.short);
    if (s) s.count++;
    else map.set(a.short, { short: a.short, name: a.campus ? `${a.university} · ${a.campus}` : a.university, count: 1 });
  }
  return Array.from(map.values());
};

/** A row in the Supabase `ambassadors` table (managed from /admin). See supabase/ambassadors.sql. */
export type AmbassadorRow = {
  id: string;
  first_name: string;
  last_name: string;
  nickname: string | null;
  university: string;
  campus: string;
  short: string;
  roles: string[] | null;
  photo_url: string;
  focus: string | null;
  published: boolean;
  sort_order: number;
  created_at: string;
};

export const fromRow = (r: AmbassadorRow): Ambassador => ({
  id: `db-${r.id}`,
  firstName: r.first_name.trim(),
  lastName: (r.last_name ?? "").trim(),
  nickname: r.nickname?.trim() || undefined,
  university: r.university.trim(),
  campus: (r.campus ?? "").trim(),
  short: r.short.trim(),
  roles: (r.roles ?? []).map((x) => x.trim()).filter(Boolean),
  photo: r.photo_url,
  focus: r.focus || "50% 30%",
});

/**
 * Hardcoded ambassadors plus the published ones added from the admin panel.
 * If the table is missing or Supabase is unreachable, the hardcoded list still shows.
 */
export async function getAllAmbassadors(): Promise<Ambassador[]> {
  try {
    const { supabase } = await import("./supabase");
    const { data, error } = await supabase
      .from("ambassadors")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) throw error;
    return [...AMBASSADORS, ...((data ?? []) as AmbassadorRow[]).map(fromRow)];
  } catch (err) {
    console.error("Could not load ambassadors from Supabase:", err);
    return AMBASSADORS;
  }
}
