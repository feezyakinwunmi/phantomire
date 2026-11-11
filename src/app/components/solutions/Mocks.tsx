import {
  Check,
  ChevronDown,
  CircleDot,
  Clock,
  GripVertical,
  Mic,
  MicOff,
  MonitorUp,
  PhoneOff,
  Plus,
  Signal,
  Type,
  Video,
} from "lucide-react";
import x from "./solutions.module.css";

/*
 * Illustrations of each Workbase product, drawn with HTML so they stay crisp at any size.
 * They are decorative (aria-hidden by the caller); real screenshots can replace them later.
 */

const PEOPLE = [
  { i: "AO", name: "Adaeze Okafor", role: "Design", status: "Working", hours: 82, c: "#8b2be2" },
  { i: "TB", name: "Tunde Bello", role: "Engineering", status: "Working", hours: 64, c: "#c026d3" },
  { i: "KA", name: "Kemi Adeyemi", role: "Sales", status: "On break", hours: 48, c: "#0ea5e9" },
  { i: "IS", name: "Ibrahim Sani", role: "Support", status: "Working", hours: 71, c: "#10b981" },
];

export function MockWorkbase() {
  return (
    <div className={x.mk}>
      <div className={x.mkHead}>
        <div>
          <p className={x.mkKicker}>Team today</p>
          <p className={x.mkTitle}>Monday, 9:41 AM</p>
        </div>
        <span className={x.mkChip}>
          <CircleDot size={12} /> Live
        </span>
      </div>
      <div className={x.mkStats}>
        <div>
          <b>24</b>
          <span>Working</span>
        </div>
        <div>
          <b>3</b>
          <span>On break</span>
        </div>
        <div>
          <b>92%</b>
          <span>On time</span>
        </div>
      </div>
      <ul className={x.mkRows}>
        {PEOPLE.map((p, n) => (
          <li key={p.i} style={{ animationDelay: `${200 + n * 90}ms` }}>
            <span className={x.mkAvatar} style={{ background: p.c }}>
              {p.i}
            </span>
            <span className={x.mkWho}>
              <b>{p.name}</b>
              <span>{p.role}</span>
            </span>
            <span className={`${x.mkStatus} ${p.status === "On break" ? x.mkStatusAway : ""}`}>{p.status}</span>
            <span className={x.mkBar}>
              <i style={{ width: `${p.hours}%` }} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MockMeet() {
  const tiles = [
    { i: "AO", name: "Adaeze", g: "linear-gradient(135deg,#5b21b6,#c026d3)", talk: true },
    { i: "TB", name: "Tunde", g: "linear-gradient(135deg,#0f766e,#0ea5e9)", muted: true },
    { i: "KA", name: "Kemi", g: "linear-gradient(135deg,#9d174d,#f97316)" },
    { i: "You", name: "You", g: "linear-gradient(135deg,#1e1b4b,#6d28d9)", muted: true },
  ];
  return (
    <div className={`${x.mk} ${x.mkDark}`}>
      <div className={x.mkHead}>
        <div>
          <p className={x.mkKicker}>Weekly stand-up</p>
          <p className={x.mkTitle}>4 people · 12:48</p>
        </div>
        <span className={`${x.mkChip} ${x.mkChipGreen}`}>
          <Signal size={12} /> Data saver on
        </span>
      </div>
      <div className={x.mkTiles}>
        {tiles.map((t, n) => (
          <div key={t.i} className={`${x.mkTile} ${t.talk ? x.mkTalk : ""}`} style={{ background: t.g, animationDelay: `${150 + n * 80}ms` }}>
            <span className={x.mkTileAv}>{t.i}</span>
            <span className={x.mkTileName}>
              {t.muted ? <MicOff size={11} /> : <Mic size={11} />} {t.name}
            </span>
          </div>
        ))}
      </div>
      <div className={x.mkControls}>
        <span>
          <Mic size={15} />
        </span>
        <span>
          <Video size={15} />
        </span>
        <span>
          <MonitorUp size={15} />
        </span>
        <span className={x.mkEnd}>
          <PhoneOff size={15} />
        </span>
      </div>
    </div>
  );
}

export function MockBook() {
  const days = [
    { d: "Mon", n: 7 },
    { d: "Tue", n: 8 },
    { d: "Wed", n: 9 },
    { d: "Thu", n: 10 },
    { d: "Fri", n: 11, on: true },
  ];
  const slots = [
    { t: "9:00", p: "Free" },
    { t: "10:00", p: "₦5,000", on: true },
    { t: "11:30", p: "Booked", off: true },
    { t: "1:00", p: "₦5,000" },
    { t: "2:30", p: "Free" },
    { t: "4:00", p: "₦8,000" },
  ];
  return (
    <div className={x.mk}>
      <div className={x.mkHead}>
        <div>
          <p className={x.mkKicker}>Book a session</p>
          <p className={x.mkTitle}>Brand strategy call</p>
        </div>
        <span className={x.mkChip}>
          <Clock size={12} /> 45 min
        </span>
      </div>
      <div className={x.mkDays}>
        {days.map((d) => (
          <span key={d.n} className={d.on ? x.mkDayOn : undefined}>
            <small>{d.d}</small>
            <b>{d.n}</b>
          </span>
        ))}
      </div>
      <div className={x.mkSlots}>
        {slots.map((s, n) => (
          <span
            key={s.t}
            className={`${s.on ? x.mkSlotOn : ""} ${s.off ? x.mkSlotOff : ""}`}
            style={{ animationDelay: `${200 + n * 60}ms` }}
          >
            <b>{s.t}</b>
            <small>{s.p}</small>
          </span>
        ))}
      </div>
      <div className={x.mkPay}>
        Confirm &amp; pay ₦5,000 <Check size={15} />
      </div>
    </div>
  );
}

export function MockForm() {
  return (
    <div className={x.mk}>
      <div className={x.mkHead}>
        <div>
          <p className={x.mkKicker}>Form builder</p>
          <p className={x.mkTitle}>Bootcamp application</p>
        </div>
        <span className={x.mkChip}>128 responses</span>
      </div>
      <div className={x.mkTools}>
        <span>
          <Type size={12} /> Short text
        </span>
        <span>
          <CircleDot size={12} /> Choice
        </span>
        <span>
          <ChevronDown size={12} /> Dropdown
        </span>
        <span className={x.mkToolAdd}>
          <Plus size={12} /> Logic
        </span>
      </div>
      <div className={x.mkFields}>
        <div className={x.mkField} style={{ animationDelay: "200ms" }}>
          <GripVertical size={14} className={x.mkGrip} />
          <div>
            <p>Full name</p>
            <span className={x.mkInput}>Chisom Okeke</span>
          </div>
        </div>
        <div className={`${x.mkField} ${x.mkFieldOn}`} style={{ animationDelay: "300ms" }}>
          <GripVertical size={14} className={x.mkGrip} />
          <div>
            <p>Which track interests you?</p>
            <div className={x.mkRadios}>
              <span className={x.mkRadioOn}>Frontend</span>
              <span>UI/UX design</span>
              <span>Backend</span>
            </div>
          </div>
        </div>
        <div className={x.mkField} style={{ animationDelay: "400ms" }}>
          <GripVertical size={14} className={x.mkGrip} />
          <div>
            <p>
              Portfolio link <em>· shown if “Frontend”</em>
            </p>
            <span className={`${x.mkInput} ${x.mkPlaceholder}`}>https://</span>
          </div>
        </div>
      </div>
    </div>
  );
}
