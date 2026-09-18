"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123 Dental Street", "Gulberg III, Lahore", "Pakistan"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+92 300 1234567", "+92 42 35789000"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@dentalclinic.com", "appointments@dentalclinic.com"],
  },
  {
    icon: "🕐",
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
  },
];

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book online through our appointment page, call us directly, or visit the clinic in person.",
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, we accept walk-ins, but we recommend booking an appointment to minimize waiting time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major debit/credit cards, and bank transfers. Easy installment plans are available for major treatments.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have free parking available for all patients right outside the clinic.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-clinic-ivory">
        <div className="mx-auto max-w-6xl px-6">
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
              Get in Touch
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-clinic-charcoal">
              We would love to
              <span className="relative ml-3 inline-block">
                hear from you
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
              Have a question, need to book an appointment, or just want to say
              hello? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-clinic-ivory rounded-2xl p-6 border border-clinic-sage/30 hover:border-clinic-teal/20 transition-all hover:shadow-md"
              >
                <div className="h-12 w-12 rounded-xl bg-clinic-teal/10 flex items-center justify-center text-2xl mb-4">
                  {info.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-clinic-charcoal mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-clinic-charcoal/70">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-20 bg-clinic-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
                Send a Message
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-clinic-charcoal mb-6">
                Drop us a line
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-clinic-teal/10 border border-clinic-teal/20 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-xl font-semibold text-clinic-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-clinic-charcoal/70">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-clinic-charcoal mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-clinic-charcoal mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Book an Appointment</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="insurance">Insurance & Payment</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-clinic-teal text-white px-8 py-4 rounded-xl font-medium hover:bg-clinic-teal-dark transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map / Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="aspect-4/3 rounded-3xl bg-clinic-sage/40 overflow-hidden relative flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">🗺️</div>
                  <p className="text-clinic-teal/70 font-display">Clinic Location Map</p>
                  <p className="text-sm text-clinic-charcoal/50 mt-1">123 Dental Street, Lahore</p>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-clinic-teal/5 rounded-3xl p-8 border border-clinic-teal/10">
                <h3 className="font-display text-xl font-semibold text-clinic-charcoal mb-2">
                  Prefer to book directly?
                </h3>
                <p className="text-sm text-clinic-charcoal/70 mb-5">
                  Skip the form and schedule your appointment online in under 60 seconds.
                </p>
                <Link
                  href="/appointment"
                  className="inline-block bg-clinic-teal text-white px-6 py-3 rounded-full font-medium hover:bg-clinic-teal-dark transition-all"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Emergency Contact */}
              <div className="bg-clinic-charcoal rounded-3xl p-8 text-white">
                <p className="text-xs uppercase tracking-widest text-clinic-sand mb-2">
                  Dental Emergency?
                </p>
                <h3 className="font-display text-xl font-semibold mb-3">
                  We are available 24/7
                </h3>
                <p className="text-sm text-white/70 mb-5">
                  For urgent dental emergencies, call our hotline immediately.
                </p>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center gap-2 bg-white text-clinic-charcoal px-6 py-3 rounded-full font-medium hover:bg-clinic-ivory transition-all"
                >
                  📞 +92 300 1234567
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
              FAQs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-clinic-charcoal">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-clinic-ivory rounded-2xl border border-clinic-sage/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-clinic-sage/10 transition-colors"
                >
                  <span className="font-display font-semibold text-clinic-charcoal">
                    {faq.question}
                  </span>
                  <span
                    className={`text-clinic-teal text-xl transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-clinic-charcoal/70"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}