"use client";

import { Fraunces, Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} font-body bg-clinic-ivory text-clinic-charcoal antialiased`}
      >
        {!isAdmin && <Navbar />}
        <main className={!isAdmin ? "pt-20" : ""}>{children}</main>
        {!isAdmin && <CTASection />}
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}