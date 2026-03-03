"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Bell } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const targetTime = new Date(2026, 3, 6, 23, 59, 59).getTime();
const [now, setNow] = useState(Date.now());

useEffect(() => {
  const interval = setInterval(() => {
    setNow(Date.now());
  }, 1000);

  return () => clearInterval(interval);
}, []);

const diff = targetTime - now;

const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

  useEffect(() => {
    if (!isHomePage) {
      setShowAlert(false);
      return;
    }

    const dismissed = sessionStorage.getItem("phantomireEventAlert2026");
    if (!dismissed) {
      setShowAlert(true);
    }
  }, [isHomePage]);

  const handleDismiss = () => {
    setShowAlert(false);
    sessionStorage.setItem("phantomireEventAlert2026", "true");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 md:top-2 left-0 right-0 bg-black md:bg-transparent text-black  z-50">
        <div className="max-w-7xl mx-auto px-2 flex md:justify-center justify-between md:items-center gap-8 mt-5">
          <a href="/" className="text-3xl font-bold text-purple-900">
            <img src="logo.png" alt="Phantomire Logo" className="h-10 w-[40] md:h-10 md:w-[50]" /> 
          </a>

          <nav className="hidden lg:flex bg-white w-auto px-8 py-3 shadow-md rounded-[50] items-center space-x-8 font-bold">
          {/* make text popup on hover */}
          

            <a href="/" className="hover:text-purple-900 transition ">Home</a>
            <a href="/about" className="hover:text-purple-900 transition">About</a>
                        <a href="/courses" className="hover:text-purple-900 transition">Courses</a>

            
           
            
            <a href="/events" className="hover:text-purple-900 transition">Events</a>
            {/* <a href="/gallery" className="hover:text-purple-900 transition">Gallery</a> */}
            <a href="/register" className="hover:text-purple-900 transition">Register</a>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav ref={mobileMenuRef} className="lg:hidden bg-black text-white  border-t border-purple-200 shadow-lg px-6 py-8">
            <ul className="space-y-5 text-left font-medium">
              <li><a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="/events" onClick={() => setMobileMenuOpen(false)}>Events</a></li>
              <li><a href="/courses" onClick={() => setMobileMenuOpen(false)}>courses</a></li>
              <li><a href="/register" onClick={() => setMobileMenuOpen(false)}>Register</a></li>
            </ul>
          </nav>
        )}
      </header>

 {showAlert && diff > 0 && (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4">
    <div className="bg-purple-900 text-white rounded-xl shadow-xl px-4 py-3">

      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Bell size={18} className="text-amber-300" />
          <p className="font-semibold text-sm">
           Next batch start  April 13th, 2026
          </p>
        </div>

        <button
          onClick={handleDismiss}
          className="hover:opacity-70"
        >
          <X size={16} />
        </button>
      </div>

      <div className="mt-2 text-center">
        <p className="text-xs opacity-90 mb-1">
          Registration closes in
        </p>

        <p className="text-lg font-bold tracking-wide">
          {days}d {hours.toString().padStart(2, "0")}h{" "}
          {minutes.toString().padStart(2, "0")}m{" "}
          {seconds.toString().padStart(2, "0")}s
        </p>

        <a
          href="https://forms.gle/csDMNuSugCZBXi4E7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-white text-purple-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
        >
          Register Now →
        </a>
      </div>
    </div>
  </div>
)}
    </>
  );
}