"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-clinic-ivory/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-full bg-clinic-teal flex items-center justify-center">
            <span className="text-white font-display text-lg">🦷</span>
          </div>
          <span className="font-display text-xl font-semibold text-clinic-charcoal group-hover:text-clinic-teal transition-colors">
            Dental<span className="text-clinic-teal">Clinic</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive
                    ? "text-clinic-teal"
                    : "text-clinic-charcoal/70 hover:text-clinic-teal"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-clinic-teal transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/appointment"
            className="bg-clinic-teal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-clinic-charcoal transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-clinic-charcoal transition-all"
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-clinic-charcoal transition-all"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-clinic-ivory/95 backdrop-blur-md"
      >
        <div className="flex flex-col px-6 pb-6 pt-2 gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors py-2 border-b border-clinic-charcoal/5 ${
                  isActive
                    ? "text-clinic-teal font-medium"
                    : "text-clinic-charcoal/70 hover:text-clinic-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/appointment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-clinic-teal text-white text-center px-6 py-3 rounded-full hover:bg-clinic-teal-dark transition-all mt-2"
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}