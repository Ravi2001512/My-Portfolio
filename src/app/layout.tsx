import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravindu Deshan | Software Engineering Student",
  description: "Portfolio of Ravindu Deshan, an undergraduate Software Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
        {/* Fixed Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/bg_poster.png"
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="fixed inset-0 bg-black/60 z-0" />

        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
