"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { AMBASSADORS, schools, type AmbassadorRow } from "../lib/ambassadors";

const BUCKET = "course-images";
const FOLDER = "ambassadors";

type Form = {
  first_name: string;
  last_name: string;
  nickname: string;
  university: string;
  campus: string;
  short: string;
  roles: string;
  photo_url: string;
  focus: string;
  published: boolean;
  sort_order: number;
};

const EMPTY: Form = {
  first_name: "",
  last_name: "",
  nickname: "",
  university: "",
  campus: "",
  short: "",
  roles: "",
  photo_url: "",
  focus: "50% 30%",
  published: true,
  sort_order: 0,
};

const FOCUS = [
  { label: "Top", value: "50% 15%" },
  { label: "Upper", value: "50% 30%" },
  { label: "Centre", value: "50% 50%" },
];

/** Crops to a centred square and scales to 900px WebP so every card looks the same. */
async function toSquareWebp(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const side = Math.min(bmp.width, bmp.height);
  const out = Math.min(900, side);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = out;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  ctx.drawImage(bmp, (bmp.width - side) / 2, (bmp.height - side) / 2, side, side, 0, 0, out, out);
  bmp.close();
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Could not process image"))), "image/webp", 0.86),
  );
}

/** Storage path of a public URL from our bucket, or null if it's somewhere else. */
const storagePath = (url: string) => {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const i = url.indexOf(marker);
  return i === -1 ? null : decodeURIComponent(url.slice(i + marker.length));
};

type Props = { showMessage: (text: string, type: "success" | "error") => void };

export default function AmbassadorsAdmin({ showMessage: notify }: Props) {
  // The parent recreates showMessage every render; keep a stable handle so loading doesn't loop.
  const notifyRef = useRef(notify);
  useEffect(() => {
    notifyRef.current = notify;
  });
  const showMessage = useCallback((text: string, type: "success" | "error") => notifyRef.current(text, type), []);

  const [rows, setRows] = useState<AmbassadorRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [tableMissing, setTableMissing] = useState(false);
  const [editing, setEditing] = useState<AmbassadorRow | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Form>(EMPTY);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState("all");

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("ambassadors")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) {
      console.error(error);
      // 42P01 = relation does not exist; PGRST205 = table not in schema cache
      setTableMissing(error.code === "42P01" || error.code === "PGRST205");
      if (error.code !== "42P01" && error.code !== "PGRST205") showMessage(error.message, "error");
    } else {
      setTableMissing(false);
      setRows((data ?? []) as AmbassadorRow[]);
    }
    setLoading(false);
  }, [showMessage]);

  useEffect(() => {
    load();
  }, [load]);

  /** Every school we know about, so new ambassadors can reuse one with a click. */
  const knownSchools = useMemo(() => {
    const map = new Map<string, { university: string; campus: string; short: string }>();
    for (const a of AMBASSADORS) map.set(a.short, { university: a.university, campus: a.campus, short: a.short });
    for (const r of rows) if (!map.has(r.short)) map.set(r.short, { university: r.university, campus: r.campus, short: r.short });
    return Array.from(map.values());
  }, [rows]);

  const counts = useMemo(() => {
    const hard = schools(AMBASSADORS);
    const map = new Map<string, number>(hard.map((s) => [s.short, s.count]));
    for (const r of rows) if (r.published) map.set(r.short, (map.get(r.short) ?? 0) + 1);
    return map;
  }, [rows]);

  const visibleRows = filter === "all" ? rows : rows.filter((r) => r.short === filter);
  const visibleHard = filter === "all" ? AMBASSADORS : AMBASSADORS.filter((a) => a.short === filter);

  const openNew = () => {
    setEditing(null);
    const last = rows[rows.length - 1];
    // Pre-fill the school of the last one added: ambassadors usually come in batches per campus.
    setForm(last ? { ...EMPTY, university: last.university, campus: last.campus, short: last.short } : EMPTY);
    setOpen(true);
  };

  const openEdit = (r: AmbassadorRow) => {
    setEditing(r);
    setForm({
      first_name: r.first_name,
      last_name: r.last_name ?? "",
      nickname: r.nickname ?? "",
      university: r.university,
      campus: r.campus ?? "",
      short: r.short,
      roles: (r.roles ?? []).join("\n"),
      photo_url: r.photo_url,
      focus: r.focus || "50% 30%",
      published: r.published,
      sort_order: r.sort_order ?? 0,
    });
    setOpen(true);
  };

  const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > 15 * 1024 * 1024) return showMessage("Image is too large (max 15MB)", "error");
    setUploading(true);
    try {
      const blob = await toSquareWebp(file);
      const path = `${FOLDER}/${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;
      const { error } = await supabase.storage.from(BUCKET).upload(path, blob, {
        cacheControl: "31536000",
        contentType: "image/webp",
        upsert: false,
      });
      if (error) throw error;
      const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
      setForm((f) => ({ ...f, photo_url: data.publicUrl }));
      showMessage("Photo uploaded", "success");
    } catch (err: unknown) {
      console.error(err);
      showMessage(err instanceof Error ? err.message : "Photo upload failed", "error");
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    const payload = {
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      nickname: form.nickname.trim() || null,
      university: form.university.trim(),
      campus: form.campus.trim(),
      short: form.short.trim(),
      roles: form.roles.split("\n").map((r) => r.trim()).filter(Boolean),
      photo_url: form.photo_url,
      focus: form.focus,
      published: form.published,
      sort_order: Number(form.sort_order) || 0,
    };
    if (!payload.first_name) return showMessage("First name is required", "error");
    if (!payload.university || !payload.short) return showMessage("University and short code are required", "error");
    if (!payload.photo_url) return showMessage("Upload a photo first", "error");

    setSaving(true);
    try {
      const { error } = editing
        ? await supabase.from("ambassadors").update(payload).eq("id", editing.id)
        : await supabase.from("ambassadors").insert(payload);
      if (error) throw error;
      // Swapped photo: clean up the old file.
      if (editing && editing.photo_url !== payload.photo_url) {
        const old = storagePath(editing.photo_url);
        if (old) await supabase.storage.from(BUCKET).remove([old]);
      }
      showMessage(editing ? "Ambassador updated" : "Ambassador added", "success");
      setOpen(false);
      setEditing(null);
      load();
    } catch (err: unknown) {
      showMessage(err instanceof Error ? err.message : "Save failed", "error");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (r: AmbassadorRow) => {
    if (!confirm(`Remove ${r.first_name} ${r.last_name} permanently?`)) return;
    const { error } = await supabase.from("ambassadors").delete().eq("id", r.id);
    if (error) return showMessage(error.message, "error");
    const path = storagePath(r.photo_url);
    if (path) await supabase.storage.from(BUCKET).remove([path]);
    showMessage("Ambassador removed", "success");
    load();
  };

  const togglePublished = async (r: AmbassadorRow) => {
    const { error } = await supabase.from("ambassadors").update({ published: !r.published }).eq("id", r.id);
    if (error) return showMessage(error.message, "error");
    load();
  };

  const input = "w-full px-5 py-3 rounded-xl border text-black";

  if (tableMissing) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900">One-time setup needed</h2>
        <p className="mt-3 text-gray-700">
          The <code className="font-mono bg-gray-100 px-1.5 rounded">ambassadors</code> table doesn&rsquo;t exist yet. Open
          Supabase &rarr; SQL Editor, paste the contents of{" "}
          <code className="font-mono bg-gray-100 px-1.5 rounded">supabase/ambassadors.sql</code> from the project and run
          it, then come back and refresh.
        </p>
        <button onClick={load} className="mt-6 bg-purple-900 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-800">
          I&rsquo;ve run it, check again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button
          onClick={openNew}
          className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-800 shadow-lg"
        >
          + Add Ambassador
        </button>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-5 py-3 rounded-full border bg-white text-black font-medium">
          <option value="all">All schools ({AMBASSADORS.length + rows.filter((r) => r.published).length} live)</option>
          {Array.from(counts.entries()).map(([short, n]) => (
            <option key={short} value={short}>
              {short} ({n})
            </option>
          ))}
        </select>
        <p className="text-sm text-gray-500">New ambassadors appear on /ambassadors within about a minute.</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Added from the admin panel ({visibleRows.length})</h2>
      {loading ? (
        <p className="text-gray-500 mb-10">Loading…</p>
      ) : visibleRows.length === 0 ? (
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center text-gray-500 mb-10">
          No ambassadors added here yet. Click &ldquo;+ Add Ambassador&rdquo; to add one.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {visibleRows.map((r) => (
            <div key={r.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${r.published ? "" : "opacity-60"}`}>
              <div className="relative aspect-square bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.photo_url} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: r.focus ?? undefined }} />
                <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {r.short}
                </span>
                {!r.published && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2.5 py-1 rounded-full">Hidden</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {r.first_name} <span className="font-semibold text-purple-800">{r.last_name}</span>
                </h3>
                {r.nickname && <p className="text-sm text-gray-500">aka {r.nickname}</p>}
                {(r.roles ?? []).length > 0 && <p className="mt-2 text-sm text-gray-600 line-clamp-2">{(r.roles ?? []).join(" · ")}</p>}
                <div className="flex flex-wrap gap-2 mt-4">
                  <button onClick={() => openEdit(r)} className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700">
                    Edit
                  </button>
                  <button onClick={() => togglePublished(r)} className="bg-gray-200 text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-300">
                    {r.published ? "Hide" : "Show"}
                  </button>
                  <button onClick={() => remove(r)} className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Built into the site ({visibleHard.length})</h2>
      <p className="text-sm text-gray-500 mb-4">These are in the code (src/app/lib/ambassadors.ts) and always show. Ask your developer to change them.</p>
      <div className="flex flex-wrap gap-3">
        {visibleHard.map((a) => (
          <div key={a.id} className="flex items-center gap-3 bg-white rounded-full shadow pl-1.5 pr-4 py-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.photo} alt="" className="w-9 h-9 rounded-full object-cover" />
            <span className="text-sm font-semibold text-gray-900">
              {a.firstName} {a.lastName}
            </span>
            <span className="text-xs font-bold text-purple-800">{a.short}</span>
          </div>
        ))}
      </div>

      {/* ---------- Modal ---------- */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto text-black">
            <h2 className="text-3xl font-bold mb-6">{editing ? "Edit Ambassador" : "Add Ambassador"}</h2>

            <div className="space-y-5">
              {/* Photo */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="relative w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-gray-100 border">
                  {form.photo_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.photo_url} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: form.focus }} />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-sm text-gray-400">No photo</span>
                  )}
                </div>
                <div className="flex-1 w-full">
                  <label className="cursor-pointer block">
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-5 text-center hover:border-purple-600 transition">
                      <p className="text-purple-900 font-medium">
                        {uploading ? "Uploading…" : form.photo_url ? "Replace photo" : "Click to upload photo"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Auto-cropped to a square. Use the portrait, not the flyer.</p>
                    </div>
                    <input type="file" accept="image/*" onChange={handlePhoto} disabled={uploading} className="hidden" />
                  </label>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-1.5">Face position</p>
                    <div className="flex gap-2">
                      {FOCUS.map((f) => (
                        <button
                          key={f.value}
                          type="button"
                          onClick={() => setForm({ ...form, focus: f.value })}
                          className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${form.focus === f.value ? "bg-purple-900 text-white border-purple-900" : "bg-white text-gray-700"}`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5">First line of name *</label>
                  <input value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} placeholder="e.g. Bakare" className={input} />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5">Rest of name</label>
                  <input value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} placeholder="e.g. Semiat Omotola" className={input} />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1.5">Nickname (optional)</label>
                <input value={form.nickname} onChange={(e) => setForm({ ...form, nickname: e.target.value })} placeholder="e.g. A_smart" className={input} />
              </div>

              {/* School */}
              <div>
                <label className="block text-gray-700 font-medium mb-1.5">School</label>
                {knownSchools.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {knownSchools.map((s) => (
                      <button
                        key={s.short}
                        type="button"
                        onClick={() => setForm({ ...form, university: s.university, campus: s.campus, short: s.short })}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${form.short === s.short ? "bg-purple-900 text-white border-purple-900" : "bg-white text-gray-700"}`}
                      >
                        {s.short}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, university: "", campus: "", short: "" })}
                      className="px-4 py-1.5 rounded-full text-sm font-semibold border border-dashed text-gray-600"
                    >
                      + New school
                    </button>
                  </div>
                )}
                <div className="grid sm:grid-cols-3 gap-3">
                  <input value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} placeholder="University of Benin *" className={`${input} sm:col-span-3`} />
                  <input value={form.campus} onChange={(e) => setForm({ ...form, campus: e.target.value })} placeholder="Campus (optional)" className={`${input} sm:col-span-2`} />
                  <input value={form.short} onChange={(e) => setForm({ ...form, short: e.target.value })} placeholder="Short: UNIBEN *" className={input} />
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  The short code is the filter button on the site. Keep it exactly the same for everyone from that school.
                </p>
              </div>

              {/* Roles */}
              <div>
                <label className="block text-gray-700 font-medium mb-1.5">Roles / description (one per line)</label>
                <textarea
                  value={form.roles}
                  onChange={(e) => setForm({ ...form, roles: e.target.value })}
                  placeholder={"P.R.O, SPE LASU Chapter\nHonourable Member, NUESA LASU SPC"}
                  className={`${input} h-28`}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 items-end">
                <label className="flex items-center gap-3 font-medium text-gray-700">
                  <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-5 h-5 accent-purple-900" />
                  Show on the website
                </label>
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5">Order (lower shows first)</label>
                  <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} className={input} />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={save}
                disabled={saving || uploading}
                className="flex-1 bg-purple-900 text-white py-4 rounded-xl font-bold hover:bg-purple-800 disabled:opacity-60"
              >
                {saving ? "Saving…" : editing ? "Save Changes" : "Add Ambassador"}
              </button>
              <button onClick={() => setOpen(false)} className="flex-1 bg-gray-300 text-gray-900 py-4 rounded-xl font-bold hover:bg-gray-400">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
