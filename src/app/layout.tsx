import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Your existing Header
import Footer from "./components/Footer"; // New Footer we'll create

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phantomire - Tech. Create. Rise.",
  description: "Empowering Nigerian youth with digital skills in Epe and beyond",
};

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