"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "../lib/data/Services";

export default function ServicesPage() {
  return (
    <section className="py-24 bg-clinic-ivory">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-clinic-teal rounded-full" />
          </div>

          <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
            Dental Services
          </p>

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
            Comprehensive care for
            <span className="relative ml-3 inline-block">
              your smile
              <svg
                viewBox="0 0 120 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-clinic-teal "
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 Q 60 -4 118 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-4 text-lg text-clinic-charcoal/70 max-w-2xl mx-auto">
            Explore our full range of dental services designed to keep your
            smile healthy and confident.
          </p>
        </motion.div>

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-clinic-sage/30 hover:border-clinic-teal/20"
            >
              <Link href={`/services/${service.slug}`} className="block">
                {/* Icon */}
                <div className="h-14 w-14 rounded-xl bg-clinic-teal flex items-center justify-center text-3xl mb-4 group-hover:bg-clinic-teal-dark transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-clinic-charcoal-dark group-hover:text-clinic-teal-dark transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-clinic-charcoal/70 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Duration & Price */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-clinic-charcoal/60">
                  <span className="bg-clinic-teal/5 px-2 py-1 rounded-full">
                    ⏱ {service.duration}
                  </span>
                  <span className="bg-clinic-teal/5 px-2 py-1 rounded-full">
                    💰 {service.priceRange}
                  </span>
                </div>

                {/* Learn More */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-clinic-teal group-hover:gap-3 transition-all">
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-clinic-teal/5 rounded-3xl border border-clinic-teal/10"
        >
          <p className="text-clinic-charcoal/70 mb-4">
            Ready to schedule your appointment?
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            Book Your Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}