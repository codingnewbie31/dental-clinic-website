"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "../lib/data/Services";
interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  notes: string;
}

const doctors = [
  { id: "any", name: "Any Available Doctor" },
  { id: "sarah-ahmed", name: "Dr. Sarah Ahmed - Chief Dental Surgeon" },
  { id: "usman-khan", name: "Dr. Usman Khan - Orthodontist" },
  { id: "ayesha-malik", name: "Dr. Ayesha Malik - Cosmetic Dentist" },
  { id: "bilal-hassan", name: "Dr. Bilal Hassan - Pediatric Dentist" },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

export default function AppointmentPage() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    doctor: "any",
    date: "",
    time: "",
    notes: "",
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setFormData({ ...formData, service: serviceTitle });
    setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    setIsSubmitted(true);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Success State
  if (isSubmitted) {
    return (
      <section className="py-24 bg-clinic-ivory min-h-screen">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-sm border border-clinic-sage/30 text-center"
          >
            <div className="h-20 w-20 rounded-full bg-clinic-teal/10 flex items-center justify-center text-4xl mx-auto mb-6">
              ✅
            </div>
            <h1 className="font-display text-3xl font-semibold text-clinic-charcoal mb-3">
              Appointment Requested!
            </h1>
            <p className="text-clinic-charcoal/70 mb-8">
              Thank you, <strong>{formData.fullName}</strong>. We have received your
              appointment request and will confirm it via email or phone shortly.
            </p>

            <div className="bg-clinic-ivory rounded-2xl p-6 text-left space-y-3 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-clinic-charcoal/60">Service</span>
                <span className="font-medium text-clinic-charcoal">{formData.service}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-clinic-charcoal/60">Doctor</span>
                <span className="font-medium text-clinic-charcoal">
                  {doctors.find((d) => d.id === formData.doctor)?.name || "Any"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-clinic-charcoal/60">Date</span>
                <span className="font-medium text-clinic-charcoal">{formData.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-clinic-charcoal/60">Time</span>
                <span className="font-medium text-clinic-charcoal">{formData.time}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="bg-clinic-teal text-white px-6 py-3 rounded-full font-medium hover:bg-clinic-teal-dark transition-all"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    service: "",
                    doctor: "any",
                    date: "",
                    time: "",
                    notes: "",
                  });
                }}
                className="text-clinic-teal px-6 py-3 rounded-full font-medium border border-clinic-teal/30 hover:bg-clinic-teal/5 transition-all"
              >
                Book Another
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-clinic-ivory">
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
              Book Appointment
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-clinic-charcoal">
              Schedule your
              <span className="relative ml-3 inline-block">
                visit
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
            </h1>

            <p className="mt-6 text-lg text-clinic-charcoal/70 max-w-2xl mx-auto">
              Choose a service, pick a time, and we will take care of the rest.
              Booking takes less than 60 seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step >= num
                      ? "bg-clinic-teal text-white"
                      : "bg-clinic-sage/50 text-clinic-charcoal/50"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`h-0.5 w-12 md:w-20 transition-all ${
                      step > num ? "bg-clinic-teal" : "bg-clinic-sage/50"
                    }`}
                  />
                )}
              </div>
            ))}
          </motion.div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-display text-2xl font-semibold text-clinic-charcoal mb-6">
                  Step 1: What do you need?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceSelect(service.title)}
                      className={`text-left p-5 rounded-2xl border transition-all hover:border-clinic-teal hover:shadow-md ${
                        formData.service === service.title
                          ? "border-clinic-teal bg-clinic-teal/5"
                          : "border-clinic-sage/30 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-clinic-teal/10 flex items-center justify-center text-2xl shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-clinic-charcoal">
                            {service.title}
                          </h3>
                          <p className="text-sm text-clinic-charcoal/60 mt-1">
                            {service.shortDescription}
                          </p>
                          <p className="text-xs text-clinic-teal mt-2">
                            {service.priceRange}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date, Time, Doctor */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-semibold text-clinic-charcoal">
                    Step 2: Pick a date & time
                  </h2>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-clinic-teal hover:underline"
                  >
                    Change service
                  </button>
                </div>

                {/* Selected Service Display */}
                <div className="bg-clinic-teal/5 border border-clinic-teal/10 rounded-2xl p-4 mb-6 flex items-center gap-3">
                  <span className="text-2xl">
                    {servicesData.find((s) => s.title === formData.service)?.icon}
                  </span>
                  <div>
                    <p className="text-xs text-clinic-charcoal/60">Selected Service</p>
                    <p className="font-medium text-clinic-charcoal">{formData.service}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getTodayDate()}
                      required
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                    />
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-medium text-clinic-charcoal mb-3">
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`text-sm py-2.5 px-2 rounded-lg border transition-all ${
                            formData.time === time
                              ? "bg-clinic-teal text-white border-clinic-teal"
                              : "bg-white text-clinic-charcoal/70 border-clinic-sage/30 hover:border-clinic-teal/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Preferred Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                    >
                      {doctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.date && formData.time) setStep(3);
                    }}
                    disabled={!formData.date || !formData.time}
                    className="w-full bg-clinic-teal text-white px-8 py-4 rounded-xl font-medium hover:bg-clinic-teal-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue to Details
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-semibold text-clinic-charcoal">
                    Step 3: Your details
                  </h2>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-sm text-clinic-teal hover:underline"
                  >
                    Change date/time
                  </button>
                </div>

                {/* Summary */}
                <div className="bg-clinic-teal/5 border border-clinic-teal/10 rounded-2xl p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-clinic-charcoal/60">Service</span>
                    <span className="font-medium text-clinic-charcoal">{formData.service}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-clinic-charcoal/60">Date & Time</span>
                    <span className="font-medium text-clinic-charcoal">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                    />
                  </div>

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
                        required
                        placeholder="+92 300 1234567"
                        className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-clinic-charcoal mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any specific concerns or information we should know?"
                      className="w-full bg-white border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-clinic-teal text-white px-8 py-4 rounded-xl font-medium hover:bg-clinic-teal-dark transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
                  >
                    Confirm Appointment
                  </button>

                  <p className="text-xs text-center text-clinic-charcoal/50">
                    By booking, you agree to our{" "}
                    <Link href="/terms" className="text-clinic-teal hover:underline">
                      Terms of Service
                    </Link>
                  </p>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-clinic-ivory">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">⏱</div>
              <h3 className="font-display font-semibold text-clinic-charcoal mb-2">
                Quick Booking
              </h3>
              <p className="text-sm text-clinic-charcoal/70">
                Book in under 60 seconds with our simple 3-step process.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-display font-semibold text-clinic-charcoal mb-2">
                Confirmation Call
              </h3>
              <p className="text-sm text-clinic-charcoal/70">
                We will confirm your appointment via email and phone.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-display font-semibold text-clinic-charcoal mb-2">
                Easy Rescheduling
              </h3>
              <p className="text-sm text-clinic-charcoal/70">
                Need to change? Reschedule up to 24 hours before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}