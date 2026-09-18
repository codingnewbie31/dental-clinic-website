"use client";
import { motion } from "framer-motion";

export default function AdminReportsPage() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-3xl font-semibold text-clinic-charcoal">Reports</h1>
        <p className="text-clinic-charcoal/60 mt-1 mb-8">View statistics and activity insights.</p>
        <div className="bg-white rounded-2xl border border-clinic-sage/30 p-12 text-center">
          <div className="text-5xl mb-4">📈</div>
          <h2 className="font-display text-xl font-semibold text-clinic-charcoal mb-2">Reports & analytics</h2>
          <p className="text-clinic-charcoal/60">Coming soon: Appointment trends, revenue, and patient stats.</p>
        </div>
      </motion.div>
    </div>
  );
}