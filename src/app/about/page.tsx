"use client";

import Header from "../components/Header";

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Our Story Section */}
      <section className="pt-40 mt-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Empowering the Next Generation of Nigerian Digital Creators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-base text-gray-700 mb-6">
                Phantomire began with a simple but powerful vision: to bring high-quality tech education to underserved youth in Epe, Lagos, and beyond. 
                In a country bursting with talent but limited by access to digital skills, we saw an opportunity to change lives.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Founded by passionate educators and tech professionals, Phantomire combines hands-on training with real-world projects, helping students not just learn code – but build solutions that matter.
              </p>
              <p className="text-base text-gray-700">
                Today, we're proud to be a leading tech academy and solutions provider, partnering with schools, hosting events, and watching our alumni launch careers and startups.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg" alt="Students coding together" className="rounded-2xl shadow-md w-full h-40 object-cover" />
              <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/01/28/sparkit.jpg" alt="Tech bootcamp session" className="rounded-2xl shadow-md w-full h-40 object-cover mt-12" />
              <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2024/08/17/codecng.jpg" alt="Code club activity" className="rounded-2xl shadow-md w-full h-40 object-cover" />
              <img src="https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-lagos-nga/coding-bootcamp-lagos-nga-tech-education-for-kids-in-lagos-nigeria-starting-early/thumbnail01.webp" alt="Youth learning tech" className="rounded-2xl shadow-md w-full h-40 object-cover mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Our Foundation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">Mission, Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-base text-gray-700">
                To deliver accessible, practical tech education that equips Nigerian youth with skills for freelancing, employment, and entrepreneurship in the digital economy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-base text-gray-700">
                To be Nigeria's premier force in creating confident digital innovators who build solutions for local challenges and compete globally.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="text-base text-gray-700 space-y-2">
                <li>• Inclusivity & Accessibility</li>
                <li>• Hands-on Excellence</li>
                <li>• Community Impact</li>
                <li>• Innovation & Creativity</li>
                <li>• Empowerment & Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Changing Lives Through Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <p className="text-base text-gray-700 mb-6">
                From Epe classrooms to Lagos startups, Phantomire graduates are making their mark. Our students build real apps, secure freelance gigs, and inspire their communities.
              </p>
              <p className="text-base text-gray-700">
                We're proud to focus on girls in tech, school partnerships, and affordable access – ensuring no talent is left behind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg" alt="Students coding together" className="rounded-2xl shadow-md w-full h-40 object-cover" />
              <img src="https://assets.newsweek.com/wp-content/uploads/2025/08/525812-nigerian-tech-workers.jpg?w=1600&quality=80&webp=1" alt="Tech team collaboration" className="rounded-2xl shadow-md w-full h-40 object-cover" />
              <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/01/28/sparkit.jpg" alt="Youth tech group" className="rounded-2xl shadow-md w-full h-40 object-cover col-span-2" />
            </div>
          </div>

         
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Meet Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">The People Behind Phantomire</h2>
          <p className="text-base text-gray-700 mb-10 max-w-4xl">
            Our team of experienced developers, designers, educators, and community builders is united by one goal: seeing Nigerian youth rise through tech.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
              <img src="https://edutechbusiness.net/wp-content/uploads/2025/10/BLOG-53_IMAGE-1-1024x683.png" alt="Student portfolio project" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900">Dedicated Instructors</h3>
              <p className="text-base text-gray-700 mt-4">Industry pros teaching with passion and real-world experience</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
              <img src="https://rubiestech.org/wp-content/uploads/2024/07/MAP_0599-scaled.jpg" alt="Community impact event" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900">Community Leaders</h3>
              <p className="text-base text-gray-700 mt-4">Driving partnerships and events that expand our reach</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md text-center">
              <img src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2024/08/17/codecng.jpg" alt="Youth empowerment program" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900">Support Team</h3>
              <p className="text-base text-gray-700 mt-4">Ensuring every student has the resources to succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Become Part of Our Story</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 opacity-90">
              Whether as a student, partner, or supporter – join us in empowering Nigeria's digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register">
                <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
                  Start Your Journey
                </button>
              </a>
              <a href="mailto:phantomire@gmail.com">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                  Partner With Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}