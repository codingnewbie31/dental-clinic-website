"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { adminStats, adminRecentAppointments } from "@/app/lib/data/adminDashboard";



const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="font-display text-3xl font-semibold text-clinic-charcoal">
          Dashboard
        </h1>
        <p className="text-clinic-charcoal/60 mt-1">
          Welcome back, Admin. Here is what happening today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {adminStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-2xl p-6 border border-clinic-sage/30"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-xl bg-clinic-teal/10 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
              {stat.change !== "0" && (
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              )}
            </div>
            <p className="font-display text-3xl font-semibold text-clinic-charcoal">
              {stat.value}
            </p>
            <p className="text-sm text-clinic-charcoal/60 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Appointments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl border border-clinic-sage/30 overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-clinic-sage/30">
          <div>
            <h2 className="font-display text-xl font-semibold text-clinic-charcoal">
              Recent Appointments
            </h2>
            <p className="text-sm text-clinic-charcoal/60 mt-1">
              Latest booking requests and scheduled visits
            </p>
          </div>
          <Link
            href="/admin/appointments"
            className="text-sm text-clinic-teal hover:underline font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-clinic-ivory/50">
              <tr>
                <th className="text-left text-xs font-medium uppercase tracking-wider text-clinic-charcoal/60 px-6 py-3">
                  Patient
                </th>
                <th className="text-left text-xs font-medium uppercase tracking-wider text-clinic-charcoal/60 px-6 py-3">
                  Service
                </th>
                <th className="text-left text-xs font-medium uppercase tracking-wider text-clinic-charcoal/60 px-6 py-3">
                  Doctor
                </th>
                <th className="text-left text-xs font-medium uppercase tracking-wider text-clinic-charcoal/60 px-6 py-3">
                  Date & Time
                </th>
                <th className="text-left text-xs font-medium uppercase tracking-wider text-clinic-charcoal/60 px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-clinic-sage/20">
              {adminRecentAppointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-clinic-ivory/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-clinic-charcoal">
                    {apt.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-clinic-charcoal/70">
                    {apt.service}
                  </td>
                  <td className="px-6 py-4 text-sm text-clinic-charcoal/70">
                    {apt.doctor}
                  </td>
                  <td className="px-6 py-4 text-sm text-clinic-charcoal/70">
                    {apt.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                        statusColors[apt.status]
                      }`}
                    >
                      {apt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}