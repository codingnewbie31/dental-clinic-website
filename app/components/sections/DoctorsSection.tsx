"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { doctorsData } from "@/app/lib/data/doctors";

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

export default function DoctorsSection() {
  // Show only first 4 doctors on homepage
  const previewDoctors = doctorsData.slice(0, 4);

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
            Our Doctors
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
            Expert care from
            <span className="relative ml-3 inline-block">
              specialists
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
            Our team of experienced specialists is dedicated to providing
            exceptional dental care in a comfortable, welcoming environment.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {previewDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-clinic-ivory rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-clinic-sage/30 hover:border-clinic-teal/20"
            >
              <Link href={`/doctors/${doctor.id}`} className="block">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-clinic-sage/30">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-clinic-teal/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {doctor.experience}+ years
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-clinic-charcoal group-hover:text-clinic-teal transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-clinic-teal font-medium mt-1">
                    {doctor.specialty}
                  </p>

                  {/* Qualifications */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {doctor.qualifications.slice(0, 2).map((qual, index) => (
                      <span
                        key={index}
                        className="text-xs bg-clinic-teal/5 text-clinic-charcoal/60 px-2 py-0.5 rounded-full border border-clinic-teal/10"
                      >
                        {qual}
                      </span>
                    ))}
                    {doctor.qualifications.length > 2 && (
                      <span className="text-xs text-clinic-charcoal/40">
                        +{doctor.qualifications.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Bio preview */}
                  <p className="mt-3 text-sm text-clinic-charcoal/60 line-clamp-2">
                    {doctor.bio}
                  </p>

                  {/* Learn More */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-clinic-teal group-hover:gap-3 transition-all">
                    View profile
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
            href="/doctors"
            className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            Meet Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}