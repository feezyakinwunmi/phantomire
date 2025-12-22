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

  useEffect(() => {
    if (!isHomePage) {
      setShowAlert(false);
      return;
    }

    const dismissed = localStorage.getItem("phantomireEventAlert2026");
    if (!dismissed) {
      setShowAlert(true);
    }
  }, [isHomePage]);

  const handleDismiss = () => {
    setShowAlert(false);
    localStorage.setItem("phantomireEventAlert2026", "true");
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
      <header className="fixed top-0 left-0 right-0 bg-black shadow-md text-white z-50">
        <div className="max-w-7xl mx-auto px-2 flex justify-between items-center ">
          <a href="/" className="text-3xl font-bold text-purple-900">
            <img src="logo.png" alt="Phantomire Logo" className="h-32 w-[300]" /> 
          </a>

          <nav className="hidden lg:flex items-center space-x-8 font-bold">
            <a href="/" className="hover:text-purple-900 transition">Home</a>
            <a href="/about" className="hover:text-purple-900 transition">About</a>
                        <a href="/courses" className="hover:text-purple-900 transition">Courses</a>

            
           
            
            <a href="/events" className="hover:text-purple-900 transition">Events</a>
            {/* <a href="/gallery" className="hover:text-purple-900 transition">Gallery</a> */}
            <a href="/register" className="hover:text-purple-900 transition">Register</a>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav ref={mobileMenuRef} className="lg:hidden bg-black border-t border-purple-200 shadow-lg px-6 py-8">
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

      {showAlert && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
          <div className="bg-purple-900 text-white rounded-2xl shadow-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell size={28} className="text-amber-300" />
              <div>
                <p className="font-bold">Phantomire Tech Summit 2026</p>
                <p className="text-sm opacity-90">Date TBA – Stay tuned & register interest!</p>
              </div>
            </div>
            <button onClick={handleDismiss} className="text-white hover:opacity-70">
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}