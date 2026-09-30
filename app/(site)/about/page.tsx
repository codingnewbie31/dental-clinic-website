"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/app/components/ui/ImageWithFallback";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { aboutValues } from "@/app/lib/data/aboutValues";
import { aboutStats } from "@/app/lib/data/aboutStats";
import { doctorsData } from "@/app/lib/data/doctors";
import ClinicPhotoCarousel from "@/app/components/ui/ClinicPhotoCarousel";

const teamRoleLabels: Record<string, string> = {
  "1": "Chief Dental Surgeon",
  "2": "Orthodontist",
  "3": "Cosmetic Dentist",
  "4": "Endodontist",
};

const team = doctorsData.map((doctor) => ({
  name: doctor.name,
  role: teamRoleLabels[doctor.id] ?? doctor.specialty,
  image: doctor.image,
}));

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
            <SectionHeading
              as="h1"
              size="large"
              eyebrow="About Us"
              title="Caring for smiles"
              highlight="since 2014"
              underlineSize="lg"
              description="We are a team of passionate dental professionals dedicated to providing exceptional care in a warm, welcoming environment."
            />
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
              <ClinicPhotoCarousel />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                variant="sub"
                eyebrow="Our Story"
                title="A decade of creating healthy smiles"
              />

              <div className="space-y-4 text-clinic-charcoal/70 leading-relaxed">
                <p>
                  What started as a small family practice in 2014 has grown into
                  one of the most trusted dental clinics in the city. Our
                  founder, Dr. Sarah Ahmed, believed that dental care should be
                  gentle, transparent, and accessible to everyone.
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
                <Button href="/doctors" size="sm" lift>
                  Meet Our Team
                </Button>
                <Button href="/appointment" size="sm" variant="ghost" lift>
                  Book a Visit
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-clinic-teal/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutStats.map((stat, index) => (
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
            <SectionHeading
              variant="sub"
              eyebrow="What We Stand For"
              title="Our core values"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((value, index) => (
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
            <SectionHeading
              variant="sub"
              eyebrow="Our Team"
              title="Meet the experts behind your smile"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-clinic-sage/40 mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-display font-semibold text-clinic-charcoal">
                  {member.name}
                </h3>
                <p className="text-sm text-clinic-charcoal/60">{member.role}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/doctors" lift>
              View Full Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
