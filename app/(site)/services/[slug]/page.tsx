"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/app/lib/data/Services";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center bg-clinic-ivory">
        <h1 className="text-2xl font-bold text-clinic-charcoal">
          Service not found
        </h1>
        <Link
          href="/services"
          className="text-clinic-teal hover:underline mt-4 inline-block"
        >
          ← Back to services
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-clinic-ivory">
      <div className="mx-auto max-w-4xl px-6">
        {/* Navigation Options - Home & Services */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-clinic-teal hover:text-clinic-teal-dark transition-colors"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to home
          </Link>

          <span className="text-clinic-charcoal/20">|</span>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-clinic-teal hover:text-clinic-teal-dark transition-colors"
          >
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            All services
          </Link>
        </div>

        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-clinic-teal/10 flex items-center justify-center text-4xl">
              {service.icon}
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal">
                Service
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-clinic-teal/5 text-clinic-teal px-4 py-1.5 rounded-full text-sm border border-clinic-teal/10">
              ⏱ {service.duration}
            </span>
            <span className="bg-clinic-teal/5 text-clinic-teal px-4 py-1.5 rounded-full text-sm border border-clinic-teal/10">
              💰 {service.priceRange}
            </span>
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg text-clinic-charcoal/80 leading-relaxed">
            {service.fullDescription}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="font-display text-2xl font-semibold text-clinic-charcoal mb-4">
            What is included
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-clinic-charcoal/80"
              >
                <span className="text-clinic-teal text-lg">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="font-display text-2xl font-semibold text-clinic-charcoal mb-4">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-clinic-sage/30"
              >
                <h3 className="font-display font-semibold text-clinic-charcoal mb-2">
                  {faq.question}
                </h3>
                <p className="text-clinic-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 bg-clinic-teal/5 rounded-3xl border border-clinic-teal/10"
        >
          <h3 className="font-display text-2xl font-semibold text-clinic-charcoal">
            Ready for {service.title}?
          </h3>
          <p className="text-clinic-charcoal/70 mt-2 mb-6">
            Book your appointment today and get the care you deserve.
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
