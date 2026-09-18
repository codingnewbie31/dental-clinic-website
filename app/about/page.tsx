"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: "❤️",
    title: "Patient First",
    description: "Every decision we make starts with what's best for our patients.",
  },
  {
    icon: "🔬",
    title: "Modern Technology",
    description: "We invest in the latest dental technology for better results.",
  },
  {
    icon: "🤝",
    title: "Trust & Transparency",
    description: "Clear pricing, honest advice, and no hidden surprises.",
  },
  {
    icon: "✨",
    title: "Excellence",
    description: "We don't settle for good when we can achieve great.",
  },
];

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "500+", label: "Happy Patients" },
  { number: "8", label: "Expert Dentists" },
  { number: "98%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Chief Dental Surgeon",
    image: "👩‍⚕️",
  },
  {
    name: "Dr. Usman Khan",
    role: "Orthodontist",
    image: "👨‍⚕️",
  },
  {
    name: "Dr. Ayesha Malik",
    role: "Cosmetic Dentist",
    image: "👩‍⚕️",
  },
  {
    name: "Dr. Bilal Hassan",
    role: "Pediatric Dentist",
    image: "👨‍⚕️",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-clinic-ivory">
        <div className="mx-auto max-w-6xl px-6">
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
              About Us
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-clinic-charcoal">
              Caring for smiles
              <span className="relative ml-3 inline-block">
                since 2014
                <svg
                  viewBox="0 0 200 20"
                  className="absolute -bottom-2 left-0 h-3 w-full text-clinic-teal"
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
            </h1>

            <p className="mt-6 text-lg text-clinic-charcoal/70 max-w-2xl mx-auto">
              We are a team of passionate dental professionals dedicated to
              providing exceptional care in a warm, welcoming environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-4/3 rounded-3xl bg-clinic-sage/40 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-clinic-teal/50 font-display text-xl">
                clinic interior photo
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
                Our Story
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-semibold text-clinic-charcoal mb-6">
                A decade of creating healthy smiles
              </h2>

              <div className="space-y-4 text-clinic-charcoal/70 leading-relaxed">
                <p>
                  What started as a small family practice in 2014 has grown
                  into one of the most trusted dental clinics in the city. Our
                  founder, Dr. Sarah Ahmed, believed that dental care should
                  be gentle, transparent, and accessible to everyone.
                </p>
                <p>
                  Today, we combine that founding philosophy with cutting-edge
                  technology and a team of specialists who genuinely care about
                  each patient comfort and long-term oral health.
                </p>
                <p>
                  Whether you are visiting for a routine cleaning or a complete
                  smile makeover, you will always be treated like family.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/doctors"
                  className="inline-block bg-clinic-teal text-white px-6 py-3 rounded-full font-medium hover:bg-clinic-teal-dark transition-all"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/appointment"
                  className="inline-block text-clinic-teal px-6 py-3 rounded-full font-medium border border-clinic-teal/30 hover:bg-clinic-teal/5 transition-all"
                >
                  Book a Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-clinic-teal/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-semibold text-clinic-teal">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-clinic-charcoal/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-clinic-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-clinic-charcoal">
              Our core values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-clinic-sage/30 text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-clinic-teal/10 flex items-center justify-center text-3xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-clinic-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-clinic-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
              Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-clinic-charcoal">
              Meet the experts behind your smile
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-2xl bg-clinic-sage/40 flex items-center justify-center text-6xl mb-4">
                  {member.image}
                </div>
                <h3 className="font-display font-semibold text-clinic-charcoal">
                  {member.name}
                </h3>
                <p className="text-sm text-clinic-charcoal/60">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/doctors"
              className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}