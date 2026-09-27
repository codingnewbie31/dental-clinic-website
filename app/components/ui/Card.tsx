"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type CardProps = HTMLMotionProps<"div"> & {
  tone?: "white" | "ivory";
  hover?: "lift" | "soft";
};

export default function Card({
  tone = "white",
  hover = "lift",
  className = "",
  children,
  ...motionProps
}: CardProps) {
  const bgClass = tone === "ivory" ? "bg-clinic-ivory" : "bg-white";
  const hoverClass =
    hover === "soft"
      ? "hover:shadow-md transition-all"
      : "shadow-sm hover:shadow-xl transition-all duration-300";

  return (
    <motion.div
      className={`${bgClass} rounded-2xl border border-clinic-sage/30 hover:border-clinic-teal/20 ${hoverClass} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}