"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { doctorsData } from "@/app/lib/data/doctors";

export default function DoctorDetailPage() {
  const params = useParams();
  const id = params.slug as string;

  const doctor = doctorsData.find((d) => d.id === id);

  if (!doctor) {
    return (
      <section className="py-24 bg-clinic-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-clinic-teal/10 flex items-center justify-center text-4xl">
              🔍
            </div>
          </div>
          <h1 className="text-3xl font-display font-bold text-clinic-charcoal">
            Doctor not found
          </h1>
          <p className="text-clinic-charcoal/60 mt-2 max-w-md mx-auto">
            The doctor you are looking for does not exist or may have been
            removed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-clinic-teal text-white px-6 py-3 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
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
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 bg-white border border-clinic-teal text-clinic-teal px-6 py-3 rounded-full font-medium hover:bg-clinic-teal hover:text-white transition-all hover:scale-105 shadow-sm hover:shadow-md"
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
              Browse all doctors
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-clinic-ivory">
      <div className="mx-auto max-w-4xl px-6">
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
          <span className="text-clinic-charcoal/20">|</span>
          <Link
            href="/doctors"
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            All doctors
          </Link>
        </div>

        {/* Doctor Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden shadow-md border border-clinic-sage/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="relative h-80 md:h-full min-h-75 w-full overflow-hidden rounded-2xl bg-clinic-sage/30">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-3xl font-semibold text-clinic-charcoal">
                {doctor.name}
              </h1>
              <p className="text-clinic-teal font-medium mt-1">
                {doctor.specialty}
              </p>

              {/* Qualifications */}
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.qualifications.map((qual, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-clinic-teal/5 text-clinic-charcoal/60 px-3 py-1 rounded-full border border-clinic-teal/10"
                  >
                    {qual}
                  </span>
                ))}
              </div>

              {/* Experience */}
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-clinic-teal/10 text-clinic-teal px-3 py-1 rounded-full text-sm">
                  {doctor.experience}+ years experience
                </span>
              </div>

              {/* Bio */}
              <div className="mt-6">
                <h3 className="font-display text-lg font-semibold text-clinic-charcoal mb-2">
                  About Dr. {doctor.name.split(" ")[1]}
                </h3>
                <p className="text-clinic-charcoal/70 leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/appointment"
                  className="inline-block bg-clinic-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal-dark transition-all hover:scale-105 shadow-sm hover:shadow-md"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-block bg-white border border-clinic-teal text-clinic-teal px-8 py-3.5 rounded-full font-medium hover:bg-clinic-teal hover:text-white transition-all hover:scale-105 shadow-sm hover:shadow-md"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
