"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OrbitButton from "@/app/components/ui/OrbitButton";
import Underline from "../ui/Underline";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-clinic-teal py-8 md:py-12">
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
            <Underline className="ml-3">more confident smile?</Underline> 
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
            <OrbitButton href="/appointment">Book Appointment</OrbitButton>
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