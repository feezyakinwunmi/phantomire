"use client";

import { useEffect, useRef } from "react";
import { SOLUTIONS } from "../../lib/solutions";
import s from "./hero.module.css";

/** Products with a logo, in orbit order. */
const ITEMS = SOLUTIONS.filter((x) => x.logo);

/** Index fingertip of the reaching hand, as a fraction of the stage (matches hero-figure.webp). */
const FINGER = { x: 0.046, y: 0.318 };
/** Seconds per full revolution. */
const PERIOD = 26;
/** Icon size as a fraction of the stage width. */
const ICON = 0.075;

/**
 * Product logos revolving on a ring centred on the hero's curve. The layer is clipped to the
 * white panel's own circle, so only the "C" half shows and the icons appear to come out from
 * behind the dark artwork, sweep past the fingertip (where they get "tapped") and slip back.
 * Desktop only: the panel (and so this layer) is hidden on small screens.
 */
export default function HeroOrbit() {
  const panelRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tapRef = useRef<HTMLSpanElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const layer = layerRef.current;
    const panel = panelRef.current;
    const track = trackRef.current;
    const tap = tapRef.current;
    if (!layer || !panel || !track || !tap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const geo = { cx: 0, cy: 0, r: 0, fx: 0, fy: 0, size: 0, ok: false };

    // Measure the panel's circle in the layer's coordinates and derive the orbit from it.
    const measure = () => {
      const L = layer.getBoundingClientRect();
      const P = panel.getBoundingClientRect();
      if (!L.width || !P.width) {
        geo.ok = false;
        return;
      }
      const pr = P.width / 2;
      const pcx = P.left - L.left + pr;
      const pcy = P.top - L.top + pr;
      layer.style.clipPath = `circle(${pr}px at ${pcx}px ${pcy}px)`;

      geo.fx = FINGER.x * L.width;
      geo.fy = FINGER.y * L.height;
      // Where the curve crosses the fingertip's height: the orbit is centred there,
      // so exactly the left half of the ring is visible.
      const dy = geo.fy - pcy;
      const curveX = pcx + Math.sqrt(Math.max(0, pr * pr - dy * dy));
      geo.size = ICON * L.width;
      geo.cx = curveX;
      geo.cy = geo.fy;
      geo.r = Math.max(60, curveX - geo.fx + geo.size * 0.18);
      geo.ok = true;

      track.style.width = track.style.height = `${geo.r * 2}px`;
      track.style.transform = `translate(${geo.cx - geo.r}px, ${geo.cy - geo.r}px)`;
      tap.style.transform = `translate(${geo.fx}px, ${geo.fy}px)`;
      iconRefs.current.forEach((el) => {
        if (el) el.style.width = el.style.height = `${geo.size}px`;
      });
      layer.classList.add(s.orbitReady);
    };

    const n = ITEMS.length;
    const near = new Array(n).fill(false);
    // Start with one icon just past the fingertip so the first tap comes quickly.
    let base = Math.PI + 0.5;

    const place = () => {
      if (!geo.ok) return;
      for (let i = 0; i < n; i++) {
        const el = iconRefs.current[i];
        if (!el) continue;
        const t = base + (i * Math.PI * 2) / n;
        const x = geo.cx + geo.r * Math.cos(t);
        const y = geo.cy + geo.r * Math.sin(t);
        // angular distance from the fingertip (the leftmost point, angle π)
        let d = Math.abs(((t - Math.PI) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI);
        if (d > Math.PI) d = Math.PI * 2 - d;
        const bump = Math.exp(-((d / 0.24) ** 2));
        const depth = 0.8 + 0.2 * Math.max(0, -Math.cos(t));
        const scale = depth + 0.16 * bump;
        el.style.transform = `translate(${x - geo.size / 2}px, ${y - geo.size / 2}px) scale(${scale.toFixed(3)})`;
        el.style.setProperty("--tap", bump.toFixed(3));

        const isNear = d < 0.07;
        if (isNear && !near[i] && !reduced) {
          tap.animate(
            [
              { transform: `translate(${geo.fx}px, ${geo.fy}px) scale(0.3)`, opacity: 0.95 },
              { transform: `translate(${geo.fx}px, ${geo.fy}px) scale(2.4)`, opacity: 0 },
            ],
            { duration: 750, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
          );
        }
        near[i] = isNear;
      }
    };

    measure();
    place();
    const ro = new ResizeObserver(() => {
      measure();
      place();
    });
    ro.observe(layer);

    if (reduced) return () => ro.disconnect();

    // One rAF loop, paused while the hero is off screen.
    let raf = 0;
    let last = 0;
    let running = false;
    const loop = (now: number) => {
      const dt = Math.min(50, last ? now - last : 16) / 1000;
      last = now;
      base -= (dt * Math.PI * 2) / PERIOD; // decreasing angle: top → fingertip → bottom
      place();
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) {
        running = true;
        last = 0;
        raf = requestAnimationFrame(loop);
      } else if (!e.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(layer);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={panelRef} className={s.panel} aria-hidden />
      <div ref={layerRef} className={s.orbitLayer} aria-hidden>
        <div ref={trackRef} className={s.orbitTrack} />
        {ITEMS.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              iconRefs.current[i] = el;
            }}
            className={s.orbitIcon}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.logo} alt="" width={64} height={64} />
            <span className={s.orbitLabel}>{item.name}</span>
          </div>
        ))}
      </div>
      <span ref={tapRef} className={s.orbitTap} aria-hidden />
    </>
  );
}
