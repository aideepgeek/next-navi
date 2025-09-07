import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Navigation",
  description: "AI websites, AI chatbots, AI tools, AI Image, AI music, AI writting, AI video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* header */}
        <Header />

        <div className="flex">
          <div className="w-64 h-screen flex-none fixed">
            <Navbar />
          </div>

          <div className="flex-1 ml-64">
            {children}
          </div>

        </div>

          {/* footer */}
          <Footer />
      </body>
    </html>
  );
}
