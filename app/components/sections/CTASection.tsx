"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-clinic-teal py-16 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Small badge */}
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            ✨ Book Your Visit
          </span>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white leading-tight">
            Ready for a healthier,
            <br />
            <span className="relative inline-block">
              more confident smile?
              <svg
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-clinic-sand/60"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 Q 100 -4 198 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of happy patients who trust us with their smiles.
            Book your appointment today and experience premium dental care.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/appointment"
              className="bg-white text-clinic-teal px-8 py-3.5 rounded-full font-medium hover:bg-clinic-ivory transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="bg-white/10 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              View Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-white">✓</span> 500+ Happy Patients
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white">✓</span> 10+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white">✓</span> 98% Satisfaction Rate
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}