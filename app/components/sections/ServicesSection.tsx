"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/app/lib/data/services";
import { containerVariants, cardVariants } from "@/app/lib/animations";
import Pill from "@/app/components/ui/Pill";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function ServicesSection() {
  // Show only first 6 services on homepage
  const previewServices = servicesData.slice(0, 3);

  return (
    <section className="py-5 bg-clinic-ivory">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading
            eyebrow="Our Services"
            title="Expert dental care for"
            highlight="everyone"
            description="From routine checkups to advanced procedures, we provide comprehensive dental care for every smile."
          />
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
            <Card
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group p-8"
            >
              <Link
                href={`/services/${service.slug}`}
                className="flex h-full flex-col"
              >
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
                    <Pill key={index} tone="teal">
                      {feature}
                    </Pill>
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
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {service.duration}
                  </span>
                  <span className="w-1 h-1 bg-clinic-charcoal/20 rounded-full" />
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1V8z"
                      />
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
            </Card>
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
          <Button href="/services" lift>
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
