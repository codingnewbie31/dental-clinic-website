"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/app/lib/data/Services";

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

export default function ServicesSection() {
  // Show only first 6 services on homepage
  const previewServices = servicesData.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-clinic-ivory">
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
            Our Services
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
            Expert dental care for
            <span className="relative ml-3 inline-block">
              everyone
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
            From routine checkups to advanced procedures, we provide
            comprehensive dental care for every smile.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {previewServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-clinic-sage/30 hover:border-clinic-teal/20"
            >
              <Link href={`/services/${service.slug}`} className="flex h-full flex-col">
                {/* Icon with teal */}
                <div className="h-14 w-14 rounded-xl bg-clinic-teal flex items-center justify-center text-3xl mb-5 group-hover:bg-clinic-teal-dark transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-clinic-charcoal group-hover:text-clinic-teal-dark transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-clinic-charcoal/70 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key features pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-clinic-teal/5 text-clinic-teal px-2 py-1 rounded-full border border-clinic-teal/10"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="text-xs text-clinic-charcoal/50">
                      +{service.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Duration & Price */}
                <div className="mt-4 flex items-center gap-4 text-sm text-clinic-charcoal/60">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </span>
                  <span className="w-1 h-1 bg-clinic-charcoal/20 rounded-full" />
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1V8z" />
                    </svg>
                    {service.priceRange}
                  </span>
                </div>

                {/* Learn More Link */}
                <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-clinic-teal group-hover:gap-3 transition-all">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}