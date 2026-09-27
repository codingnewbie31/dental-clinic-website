"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { doctorsData } from "@/app/lib/data/doctors";
import Underline from "@/app/components/ui/Underline";
import Pill from "@/app/components/ui/Pill";
import Card from "@/app/components/ui/Card";

export default function DoctorsPage() {
  return (
    <section className="py-24 bg-clinic-ivory">
      <div className="mx-auto max-w-6xl px-6">
        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-clinic-charcoal/60 hover:text-clinic-teal transition-colors"
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
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-clinic-sand rounded-full" />
          </div>

          <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
            Our Team
          </p>

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
            Meet our
            <Underline className="ml-3">specialists</Underline>
          </h1>

          <p className="mt-4 text-lg text-clinic-charcoal/70 max-w-2xl mx-auto">
            Our experienced team of dental specialists is dedicated to providing
            exceptional care in a comfortable environment.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsData.map(
            (doctor, index) =>
              (
                <Card
                  key={doctor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group overflow-hidden"
                >
                  <Link href={`/doctors/${doctor.id}`} className="block">
                    {/* Image */}
                    <div className="relative h-72 w-full overflow-hidden bg-clinic-sage/30">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        {doctor.qualifications.map((qual, idx) => (
                          <Pill key={idx}>{qual}</Pill>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="mt-3 text-sm text-clinic-charcoal/60 line-clamp-3">
                        {doctor.bio}
                      </p>

                      {/* View Profile */}
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-clinic-teal group-hover:gap-3 transition-all">
                        View full profile
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
              ),
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-clinic-teal/5 rounded-3xl border border-clinic-teal/10"
        >
          <p className="text-clinic-charcoal/70 mb-4">
            Ready to meet your new dentist?
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
