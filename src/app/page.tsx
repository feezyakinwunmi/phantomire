"use client";

import Header from "./components/Header";

export default function Home() {
  const pathways = [
    { title: "Enroll in Courses", paragraph: "Join our hands-on programs in Frontend, Backend, Design, or Videography & Editing.", link: "Register Now →", url: "/register" },
    { title: "Attend Events", paragraph: "Participate in Phantomire Tech Summit and other Nigerian tech gatherings.", link: "View Events →", url: "/events" },
    { title: "Explore Gallery", paragraph: "See our students in action, projects, and community impact in Epe.", link: "View Gallery →", url: "/gallery" },
  ];

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="mt-20 md:mt-0 bg-black relative h-screen flex md:flex-row flex-col items-end justify-start overflow-hidden"> {/* mt for header */}
       
        <div className="relative z-10 px-6 pb-12 max-w-4xl">
          <div className=" backdrop-blur-sm p-8 md:p-12 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Create, Explore, Thrive  with <br/> <span className="text-purple-600 italic">Phantomire</span> Tech Academy
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl">
              Phantomire is a tech education academy and solutions provider empowering Nigerian youth with digital skills in Epe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register">
                <button className="bg-purple-900 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition">
                  Enroll in a Course
                </button>
              </a>
              <a href="/about">
                <button className="border-2 border-purple-900 text-purple-900 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition">
                  Learn More About Us
                </button>
              </a>
            </div>
          </div>

        </div>

        <img src="/gbk.png" alt="Students coding" className="w-full h-96 md:w-[70%] md:h-[70%] object-cover opacity-80" />

      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-1 items-center flex ">
              <div>
              <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Phantomire Impact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Building Nigeria's tech future together</h2>
              <p className="text-base text-gray-700 mb-8">
                We train youth in digital skills, partner with schools, and develop solutions to bridge the tech gap in Epe and Lagos.
              </p>
              </div>

            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg row-span-2">
                <img src="https://i.ytimg.com/vi/Jy0AckxSDdM/hq720.jpg" alt="Kids coding in Epe" className="w-full h-full object-cover opacity-60 absolute inset-0" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative p-8 text-white flex flex-col justify-end h-full">
                  <p className="uppercase tracking-wider text-sm mb-2">Latest Updates</p>
                  <ul className="space-y-3 text-lg">
                    <li>• New cohort starting soon in Frontend & Design</li>
                    <li>• Partnership with local schools expanded</li>
                    <li>• Apps developed by students launched</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <img src="https://i.ytimg.com/vi/lSp2nqz2KQU/maxresdefault.jpg" alt="Girls coding" className="w-full h-40 object-cover rounded-xl mb-3" />
                <p>Girls in tech initiative thriving</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <img src="https://www.odif.ng/wp-content/uploads/2025/04/DSC_2533-scaled.jpg" alt="Coding club" className="w-full h-40 object-cover rounded-xl mb-3" />
                <p>Community bootcamps in action</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-3xl font-bold text-purple-900 mb-1">200+</p>
              <p className="text-lg text-gray-700">Students Trained</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-3xl font-bold text-purple-900 mb-1">4</p>
              <p className="text-lg text-gray-700">Core Courses</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-3xl font-bold text-purple-900 mb-1">2</p>
              <p className="text-lg text-gray-700">School Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Pathways */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Available Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">Start your tech journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <img src="https://img-c.udemycdn.com/course/750x422/5178116_6858.jpg" alt="Frontend" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <img src="https://blog.postman.com/wp-content/uploads/2023/05/23PST0060-How-To-Create-a-REST-API-with-Node-js-and-Express-v1.jpg" alt="Backend" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Backend Development</h3>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <img src="https://s3-alpha.figma.com/hub/file/4138977549/ca66be38-76e4-4b65-8cde-2f20a9559889-cover.png" alt="Design" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">UI/UX Design</h3>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <img src="https://static.skillshare.com/uploads/discussion/tmp/de2edd05.jpg" alt="Videography" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Videography & Editing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Community Pathways */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Get Involved</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Ways to join Phantomire</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((path) => (
              <div key={path.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{path.title}</h3>
                <p className="text-base text-gray-700 mb-6">{path.paragraph}</p>
                <a href={path.url} className="text-purple-900 font-medium hover:underline">{path.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Events</p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10">Upcoming tech moments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <img src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2025/06/Copy-of-241-1024x683.jpg" alt="Tech Summit" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phantomire Tech Summit 2026</h3>
              <p className="text-base text-gray-700">Date TBA • Epe, Lagos</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <img src="https://storage.googleapis.com/nucamp-production.appspot.com/aiseo-blogs/coding-bootcamp-nigeria-nga/coding-bootcamp-nigeria-nga-top-10-mustattend-tech-meetups-and-conferences-in-nigeria/thumbnail01.webp" alt="Other Event" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lagos Tech Gatherings</h3>
              <p className="text-base text-gray-700">Join other Nigerian tech events we support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-purple-900 font-bold uppercase tracking-wider text-xs mb-3">Our Creations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Apps developed by Phantomire students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="https://cdn.dribbble.com/userupload/36542500/file/original-f013a316a7119846a712f50713d0029c.png?resize=1600x1200" alt="SkillTracker" className="w-full" />
              <div className="p-8">
                <h3 className="text-2xl font-bold">SkillTracker</h3>
                <p>Track learning progress and achievements</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3768530559538736444" alt="EpeConnect" className="w-full" />
              <div className="p-8">
                <h3 className="text-2xl font-bold">EpeConnect</h3>
                <p>Local tech community hub app</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to rise with tech?</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 opacity-90">
              Join Phantomire today and become part of Nigeria's next generation of digital creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register">
                <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
                  Enroll Now
                </button>
              </a>
              <a href="mailto:phantomire@gmail.com">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}