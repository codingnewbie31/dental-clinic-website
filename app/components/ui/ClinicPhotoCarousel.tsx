"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageWithFallback from "@/app/components/ui/ImageWithFallback";

const clinicPhotos = [
  "/clinic-hero-1.jpg",
  "/clinic-hero-2.jpg",
  "/clinic-hero-3.jpg",
];

export default function ClinicPhotoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clinicPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={clinicPhotos[index]}
          alt="Our clinic"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </AnimatePresence>
  );
}