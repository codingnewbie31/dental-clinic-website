"use client";

import { motion, Variants } from "framer-motion";
import { testimonialsData } from "@/app/lib/data/testimonials";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Show only first 3 testimonials on homepage
const previewTestimonials = testimonialsData.slice(0, 3);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-clinic-ivory">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Teal accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-clinic-teal rounded-full" />
          </div>

          <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
            Patient Stories
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
            Real smiles from
            <span className="relative ml-3 inline-block">
              real patients
              <svg
                viewBox="0 0 120 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-clinic-teal"
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
          </h2>

          <p className="mt-4 text-lg text-clinic-charcoal/70 max-w-2xl mx-auto">
            Hear from our happy patients about their experience at our clinic.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {previewTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-clinic-sage/30 hover:border-clinic-teal/20"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-clinic-charcoal/70 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Patient Info */}
              <div className="mt-6 pt-6 border-t border-clinic-sage/30">
                <div className="flex items-center gap-4">
                  {/* Initials Avatar */}
                  <div className="h-12 w-12 rounded-full bg-clinic-teal/10 flex items-center justify-center text-clinic-teal font-display text-sm font-semibold">
                    {testimonial.patientInitial}
                  </div>
                  <div>
                    <p className="font-semibold text-clinic-charcoal">
                      {testimonial.patientName}
                    </p>
                    <p className="text-sm text-clinic-charcoal/40">
                      {testimonial.service} · {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-clinic-charcoal/70 mb-4">
            Join our family of happy patients!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-white border border-clinic-teal text-clinic-teal px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal hover:text-white transition-all hover:scale-105 shadow-sm hover:shadow-md"
            >
              Read More Reviews
            </a>
            <Link
              href="/appointment"
              className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
            >
              Book an Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}