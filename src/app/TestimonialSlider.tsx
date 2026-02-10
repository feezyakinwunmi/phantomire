"use client"

import { useState } from "react"

const testimonials = [
  {
    name: "Chisom Okeke",
    role: "Frontend Student",
    text: "Phantomire didn't just teach me code, they taught me how to use tech responsibly. The emotional intelligence classes changed how I approach projects.",
    avatar: "/images/testimonial-chisom.jpg",
  },
  {
    name: "Tunde Adebayo",
    role: "Alumni & Freelancer",
    text: "Thanks to Phantomire, I'm now earning on Upwork. Pearlvix inspired me to build trust-focused apps for Nigerian clients.",
    avatar: "/images/testimonial-tunde.jpg",
  },
  {
    name: "Grace Schools Partnership",
    role: "School Administrator",
    text: "Partnering with Phantomire brought digital skills to our students. The ethics focus aligns perfectly with our values.",
    avatar: "/images/testimonial-school.jpg",
  },
  {
    name: "Aisha Mohammed",
    role: "UI/UX Student",
    text: "The community support and mentorship at Phantomire gave me confidence. I'm now designing for local startups!",
    avatar: "/images/testimonial-aisha.jpg",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-2xl mx-auto">
               
                <p className="text-xl text-black mb-8 italic">"{t.text}"</p>
                <h4 className="text-lg font-bold text-black">{t.name}</h4>
                <p className="text-black">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button 
        onClick={prev} 
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white"
      >
        ←
      </button>
      <button 
        onClick={next} 
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)} 
            className={`w-3 h-3 rounded-full transition ${i === current ? "bg-purple-900" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  )
}