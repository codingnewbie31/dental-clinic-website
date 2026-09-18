"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔧 TEMPORARY: Hardcoded credentials
    // Replace with real auth (NextAuth, JWT, etc.) later
    if (email === "admin@dentalclinic.com" && password === "admin123") {
      setError("");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="min-h-screen bg-clinic-ivory flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-full bg-clinic-teal flex items-center justify-center text-white text-xl">
              🦷
            </div>
          </Link>
          <h1 className="font-display text-3xl font-semibold text-clinic-charcoal">
            Admin Login
          </h1>
          <p className="text-clinic-charcoal/60 mt-2">
            Sign in to manage your clinic
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-clinic-sage/30">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-clinic-charcoal mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@dentalclinic.com"
                className="w-full bg-clinic-ivory border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-clinic-charcoal mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-clinic-ivory border border-clinic-sage/50 rounded-xl px-4 py-3 text-clinic-charcoal placeholder:text-clinic-charcoal/40 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-clinic-teal text-white px-8 py-3.5 rounded-xl font-medium hover:bg-clinic-teal-dark transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-clinic-teal/5 border border-clinic-teal/10 rounded-xl">
            <p className="text-xs text-clinic-charcoal/60 uppercase tracking-wider mb-2">
              Demo Credentials
            </p>
            <p className="text-sm text-clinic-charcoal font-mono">
              admin@dentalclinic.com
            </p>
            <p className="text-sm text-clinic-charcoal font-mono">
              admin123
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-clinic-charcoal/50 mt-6">
          <Link href="/" className="hover:text-clinic-teal transition-colors">
            ← Back to website
          </Link>
        </p>
      </motion.div>
    </section>
  );
}