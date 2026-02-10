// /app/about/page.tsx — Server Component (no "use client" needed — static page)

import Header from "../components/Header" // Adjust path if needed

export const metadata = {
  title: "About Phantomire Technologies | Empowering Nigerian Youth in Tech",
  description: "Phantomire Technologies is on a mission to empower Nigerian youth with practical digital skills, ethical tech practices, and emotional intelligence. From web development to UI/UX and our escrow app Pearlvix, we're building a generation of creators who use tech to heal and uplift.",
  openGraph: {
    title: "About Phantomire | Ethical Tech Education in Nigeria",
    description: "Discover how Phantomire is transforming lives through affordable tech training, community events, and innovative solutions like Pearlvix – fighting online scams and building trust in digital Nigeria.",
    url: "https://phantomiretechnologies.com/about",
    siteName: "Phantomire Technologies",
    images: [
      {
        url: "https://phantomiretechnologies.com/og-about.jpg", // Replace with your actual OG image (e.g., team, students, Pearlvix screenshot)
        width: 1200,
        height: 630,
        alt: "Phantomire Team and Students Building the Future",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Phantomire Technologies",
    description: "Empowering Nigerian youth with tech skills + ethics + empathy.",
    images: ["https://phantomiretechnologies.com/og-about.jpg"],
  },
  keywords: "Phantomire Technologies, tech training Nigeria, ethical tech education, digital skills Lagos, Pearlvix escrow app, youth empowerment Nigeria, web development bootcamp",
  robots: "index, follow",
}

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero / Our Story */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-sm mb-4">
            Our Journey
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">
            Building Nigeria's Digital Future with Heart and Integrity
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-md text-black">
              <p>
                Phantomire Technologies was born from a deep belief: tech should not just connect us, it should heal, empower, and uplift.
              </p>
              <p>
                In a digital Nigeria full of potential but plagued by scams, burnout, and inequality, we saw the need for something different: training that teaches not only code, but conscience.
              </p>
              <p>
                We combine world-class skills in web development, UI/UX, graphics, animation, digital marketing, and entrepreneurship with emotional intelligence and ethical practices, so our students build apps that create trust, not exploit it.
              </p>
              <p>
                From our innovative escrow app <strong>Pearlvix</strong> (designed to end online transaction fraud) to partnerships across Lagos and Nigeria, we're raising a generation of creators who use tech for good.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/17/gomycodelagos.jpg"// Replace with your actual images
                alt="Nigerian youth learning web development"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/01/28/sparkit.jpg"
                alt="Pearlvix escrow app in action"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img 
                src="https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2024/08/17/codecng.jpg"
                alt="Phantomire tech workshop"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-lagos-nga/coding-bootcamp-lagos-nga-tech-education-for-kids-in-lagos-nigeria-starting-early/thumbnail01.webp"
                alt="Phantomire alumni building projects"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-sm mb-4">
            Our Foundation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">
            Vision, Mission & Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Vision</h3>
              <p className="text-md text-black">
                A Nigeria where every young person wields digital tools with empathy, integrity, and innovation, creating technology that heals communities, fights injustice, and competes on the global stage.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Mission</h3>
              <p className="text-md text-black">
                To deliver affordable, practical tech education that blends cutting-edge skills with emotional intelligence and ethical principles, empowering Nigerian youth to build trust-based digital solutions that solve real problems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Core Values</h3>
              <ul className="text-md text-black space-y-4">
                <li><strong>Empathy First</strong> — Tech that understands people</li>
                <li><strong>Integrity Always</strong> — Building trust in every line of code</li>
                <li><strong>Innovation with Purpose</strong> — Solving Nigerian problems creatively</li>
                <li><strong>Inclusivity for All</strong> — Opportunity without barriers</li>
                <li><strong>Community Impact</strong> — Lifting others as we rise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-sm mb-4">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">
            Creating Real Change Across Nigeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-md text-black">
              <p>
                Phantomire alumni are already making waves, freelancing globally, launching startups, and building tools like Pearlvix that protect everyday Nigerians from online scams.
              </p>
              <p>
                Through partnerships with schools, churches, and communities nationwide, we're reaching thousands with skills that lead to real income, confidence, and dignity.
              </p>
              <p>
                We're especially proud of our focus on ethical tech: teaching students to code responsibly, avoid burnout, and create digital experiences that build trust in our society.
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

      {/* Team / People Section */}
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
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 opacity-90">
            Whether you're ready to learn, partner, or support, let's build a better digital Nigeria together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/register">
              <button className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
                Start Learning Today
              </button>
            </a>
            <a href="mailto:phantomire@gmail.com">
              <button className="border-4 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition">
                Partner With Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}