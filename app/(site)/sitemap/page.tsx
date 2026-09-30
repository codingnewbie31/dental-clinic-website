"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { servicesData } from "@/app/lib/data/services";
import { doctorsData } from "@/app/lib/data/doctors";

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/appointment", label: "Book an Appointment" },
];

const legalPages = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function SitemapPage() {
  return (
    <main>
      <section className="py-20 bg-clinic-ivory">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <SectionHeading as="h1" eyebrow="Explore" title="Sitemap" />
            <p className="mt-4 text-clinic-charcoal/60 max-w-2xl mx-auto">
              A complete list of every page on our website.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="font-display text-lg font-semibold text-clinic-charcoal mb-4">
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-clinic-charcoal/70 hover:text-clinic-teal transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-clinic-charcoal mb-4">
              Services
            </h2>
            <ul className="space-y-2">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-clinic-charcoal/70 hover:text-clinic-teal transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-clinic-charcoal mb-4">
              Doctors
            </h2>
            <ul className="space-y-2">
              {doctorsData.map((doctor) => (
                <li key={doctor.id}>
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="text-clinic-charcoal/70 hover:text-clinic-teal transition-colors"
                  >
                    {doctor.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-clinic-charcoal mb-4">
              Legal
            </h2>
            <ul className="space-y-2">
              {legalPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-clinic-charcoal/70 hover:text-clinic-teal transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}