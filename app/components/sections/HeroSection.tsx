"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-clinic-ivory">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Text column */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-clinic-teal"
          >
            Dental Clinic
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-clinic-charcoal md:text-5xl lg:text-6xl"
          >
            Dental care that feels
            <span className="relative ml-3 inline-block">
              calm
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
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 max-w-md text-lg text-clinic-charcoal/70"
          >
            Modern treatments, a welcoming team, and appointments that fit your
            life — not the other way around.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              href="/appointment"
              className="rounded-full bg-clinic-teal px-8 py-3.5 text-white transition-colors hover:bg-clinic-teal-dark"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="text-clinic-charcoal/70 underline underline-offset-4 hover:text-clinic-charcoa"
            >
              View services
            </Link>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-200 md:h-full md:max-h-640px"
        >
          <Image
            src="/clinic-hero.jpg"
            alt="Premium Dental Clinic Interior"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
