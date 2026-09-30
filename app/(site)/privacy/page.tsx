"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";
import { privacySections } from "@/app/lib/data/privacySections";

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-clinic-ivory">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
            <p className="mt-4 text-clinic-charcoal/60">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-clinic-teal/5 border border-clinic-teal/10 rounded-2xl p-6 mb-12"
          >
            <p className="text-clinic-charcoal/80 leading-relaxed">
              Your privacy matters to us. This policy explains what
              information we collect, how we use it, and how we protect it
              when you interact with Dental Clinic.
            </p>
          </motion.div>

          <div className="space-y-10">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="font-display text-2xl font-semibold text-clinic-charcoal mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-clinic-charcoal/70 leading-relaxed"
                    >
                      <span className="text-clinic-teal shrink-0 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-clinic-teal/5 border border-clinic-teal/10 rounded-3xl p-8 text-center"
          >
            <h3 className="font-display text-xl font-semibold text-clinic-charcoal mb-2">
              Questions about your privacy?
            </h3>
            <p className="text-clinic-charcoal/70 mb-6">
              Feel free to reach out — we are happy to clarify anything.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="sm">
                Contact Us
              </Button>
              <Button href="/" variant="ghost" size="sm">
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}