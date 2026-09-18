"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "1. Appointment Booking",
    content: [
      "Appointments can be booked online, by phone, or in person at the clinic.",
      "Your appointment is not confirmed until you receive a confirmation email or call from our team.",
      "We recommend booking at least 48 hours in advance for non-emergency visits.",
      "Emergency appointments are subject to availability and will be prioritized.",
    ],
  },
  {
    title: "2. Cancellation & Rescheduling",
    content: [
      "You may cancel or reschedule your appointment free of charge up to 24 hours before your scheduled time.",
      "Cancellations made less than 24 hours before the appointment may be subject to a cancellation fee.",
      "Repeated no-shows may result in a requirement for prepayment for future bookings.",
      "To cancel or reschedule, please call us at +92 300 1234567 or reply to your confirmation email.",
    ],
  },
  {
    title: "3. Payment Terms",
    content: [
      "Payment is due at the time of service unless prior arrangements have been made.",
      "We accept cash, all major debit and credit cards, and bank transfers.",
      "Installment plans are available for major treatments — please ask at reception for details.",
      "Prices listed on the website are estimates and may vary based on the actual treatment required.",
    ],
  },
  {
    title: "4. Patient Responsibilities",
    content: [
      "Provide accurate and complete medical history, including medications and allergies.",
      "Arrive at least 10 minutes before your scheduled appointment time.",
      "Follow pre- and post-treatment care instructions provided by our dentists.",
      "Inform us of any changes in your health or medication since your last visit.",
    ],
  },
  {
    title: "5. Treatment Consent",
    content: [
      "All treatments require informed consent from the patient or their legal guardian.",
      "We will explain the procedure, risks, benefits, and alternatives before obtaining consent.",
      "You have the right to refuse or withdraw consent at any time before treatment begins.",
      "For minors, a parent or legal guardian must be present to provide consent.",
    ],
  },
  {
    title: "6. Privacy & Data Protection",
    content: [
      "Your personal and medical information is kept strictly confidential.",
      "We comply with all applicable data protection laws and regulations.",
      "Your information will not be shared with third parties without your explicit consent.",
      "You have the right to request access to your records at any time.",
    ],
  },
  {
    title: "7. Website Usage",
    content: [
      "The content on this website is for informational purposes only and is not a substitute for professional dental advice.",
      "We reserve the right to modify services, pricing, and content without prior notice.",
      "All website content, including text, images, and logos, is the property of Dental Clinic and may not be reproduced without permission.",
      "We are not responsible for the content of external websites linked from our site.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "While we strive for the highest standards of care, individual results may vary.",
      "We are not liable for complications arising from incomplete medical information provided by the patient.",
      "Our liability is limited to the extent permitted by applicable law.",
      "Nothing in these terms limits our responsibility for professional negligence.",
    ],
  },
  {
    title: "9. Changes to Terms",
    content: [
      "We may update these Terms & Conditions from time to time.",
      "Changes will be effective immediately upon posting to this page.",
      "Continued use of our services after changes constitutes acceptance of the updated terms.",
      "We encourage you to review this page periodically.",
    ],
  },
  {
    title: "10. Contact Information",
    content: [
      "For any questions about these Terms & Conditions, please contact us:",
      "📞 +92 300 1234567",
      "✉️ info@dentalclinic.com",
      "📍 123 Dental Street, Gulberg III, Lahore, Pakistan",
    ],
  },
];

export default function TermsPage() {
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
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-clinic-teal rounded-full" />
            </div>

            <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
              Legal
            </p>

            <h1 className="font-display text-4xl md:text-5xl font-semibold text-clinic-charcoal">
              Terms & Conditions
            </h1>

            <p className="mt-4 text-clinic-charcoal/60">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-clinic-teal/5 border border-clinic-teal/10 rounded-2xl p-6 mb-12"
          >
            <p className="text-clinic-charcoal/80 leading-relaxed">
              Welcome to Dental Clinic. By booking an appointment or using our
              services, you agree to the following terms and conditions. Please
              read them carefully before proceeding.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
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
                    <li key={i} className="flex gap-3 text-clinic-charcoal/70 leading-relaxed">
                      <span className="text-clinic-teal shrink-0 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-clinic-teal/5 border border-clinic-teal/10 rounded-3xl p-8 text-center"
          >
            <h3 className="font-display text-xl font-semibold text-clinic-charcoal mb-2">
              Questions about our terms?
            </h3>
            <p className="text-clinic-charcoal/70 mb-6">
              Feel free to reach out — we are happy to clarify anything.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-clinic-teal text-white px-6 py-3 rounded-full font-medium hover:bg-clinic-teal-dark transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="text-clinic-teal px-6 py-3 rounded-full font-medium border border-clinic-teal/30 hover:bg-clinic-teal/5 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}