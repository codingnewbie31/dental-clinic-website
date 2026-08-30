import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Dental Clinic",
  description: "Premium dental care, made simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} font-body bg-clinic-ivory text-clinic-charcoal antialiased`}
      >
        <Navbar />
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}