"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { doctorsData } from "@/app/lib/data/doctors";
import { containerVariants, cardVariants } from "@/app/lib/animations";
import Pill from "@/app/components/ui/Pill";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function DoctorsSection() {
  // Show only first 4 doctors on homepage
  const previewDoctors = doctorsData.slice(0, 4);

  return (
    <section className="py-2 md:py-4 bg-clinic-ivory">
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
            eyebrow="Our Doctors"
            title="Expert care from"
            highlight="specialists"
            description="Our team of experienced specialists is dedicated to providing exceptional dental care in a comfortable, welcoming environment."
          />
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
            <Card
              key={doctor.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              tone="ivory"
              className="group overflow-hidden"
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
                      <Pill key={index}>{qual}</Pill>
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
          <Button href="/doctors" lift>
            Meet Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
