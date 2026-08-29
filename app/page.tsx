"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex items-center justify-center bg-linear-to-r from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium Dental Care
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your smile is our priority
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}