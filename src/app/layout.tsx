import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Your existing Header
import Footer from "./components/Footer"; // New Footer we'll create

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phantomire Technologies | Empower. Create. Thrive. ",
  description: "Empower Nigerian youth with practical digital skills, emotional intelligence, and ethical tech practices. Learn web development, UI/UX, graphics, animation, digital marketing — and build solutions like Pearlvix that heal communities.",
  openGraph: {
    title: "Phantomire Technologies | Ethical Tech Education in Nigeria",
    description: "Affordable training, community events, and innovative tools like Pearlvix — fighting scams and building trust in digital Nigeria.",
    url: "https://phantomiretechnologies.com",
    siteName: "Phantomire Technologies",
    images: [
      {
        url: "logo.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Phantomire Students Learning Tech with Purpose",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phantomire Technologies",
    description: "Tech training + ethics + empathy for Nigerian youth.",
    images: ["logo.png"],
  },
  keywords: "Phantomire Technologies, tech training Nigeria, ethical tech education, digital skills Lagos, Pearlvix escrow app, youth empowerment Nigeria, web development bootcamp",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}












