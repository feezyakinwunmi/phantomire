import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src="logo.png" alt="Phantomire Logo" className="h-46 " />
            <p className="text-gray-400">
              Create, Explore, Thrive <br />
              Empowering Nigerian youth with digital skills in Epe and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="/courses" className="hover:text-purple-400 transition">Courses</a></li>
              <li><a href="/events" className="hover:text-purple-400 transition">Events</a></li>
              <li><a href="/register" className="hover:text-purple-400 transition">Register</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <p className="text-gray-400 mb-4">
              Epe, Lagos, Nigeria<br />
              info.phantomire@gmail.com<br />
              WhatsApp: +234 916 136 0898
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <p className="text-gray-400 mb-6">Connect with @phantomire01 on all platforms</p>
            <div className="flex space-x-6">
              <a href="https://twitter.com/phantomire01" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Twitter size={32} />
              </a>
              <a href="https://instagram.com/phantomire01" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Instagram size={32} />
              </a>
              <a href="https://facebook.com/phantomire" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Facebook size={32} />
              </a>
              <a href="https://linkedin.com/company/phantomire" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Linkedin size={32} />
              </a>
              <a href="https://youtube.com/@phantomire01" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Youtube size={32} />
              </a>
              <a href="https://wa.me/2349161460898" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <MessageCircle size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Phantomire Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}