"use client";

import { motion } from "framer-motion";

export default function AdminServicesPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-3xl font-semibold text-clinic-charcoal">
          Services
        </h1>
        <p className="text-clinic-charcoal/60 mt-1 mb-8">
          Manage clinic services and treatment information.
        </p>

        <div className="bg-white rounded-2xl border border-clinic-sage/30 p-12 text-center">
          <div className="text-5xl mb-4">🦷</div>
          <h2 className="font-display text-xl font-semibold text-clinic-charcoal mb-2">
            Services manager
          </h2>
          <p className="text-clinic-charcoal/60">
            Coming soon: Add, edit, and remove services.
          </p>
        </div>
      </motion.div>
    </div>
  );
}