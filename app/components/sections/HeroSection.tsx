"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { heroSlides } from "@/app/lib/data/heroSlides";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Use ref to track if we've set initial state
  const hasInitializedRef = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Only set initial state once
  useEffect(() => {
    if (!emblaApi) return;

    // Set initial state only once
    if (!hasInitializedRef.current) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      hasInitializedRef.current = true;
    }

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative overflow-hidden bg-clinic-ivory">
      {/* Decorative background elements */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-clinic-teal/5 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-clinic-sand/10 blur-3xl" />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-12 px-6 py-12 md:grid-cols-2 md:py-16">
                {/* Text column */}
                <div className="flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        exit={{
                          opacity: 0,
                          y: -12,
                          transition: { duration: 0.3 },
                        }}
                        className="flex flex-col"
                      >
                        <motion.p
                          custom={0}
                          variants={fadeUp}
                          className="mb-4 text-sm font-medium uppercase tracking-widest text-clinic-teal"
                        >
                          {slide.eyebrow}
                        </motion.p>

                        <motion.h1
                          custom={0.1}
                          variants={fadeUp}
                          className="font-display text-4xl leading-tight text-clinic-charcoal md:text-5xl lg:text-6xl"
                        >
                          {slide.headline}
                          <span className="relative ml-3 inline-block">
                            {slide.highlight}
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
                        </motion.h1>

                        <motion.p
                          custom={0.2}
                          variants={fadeUp}
                          className="mt-6 max-w-md text-lg text-clinic-charcoal/70"
                        >
                          {slide.description}
                        </motion.p>

                        <motion.div
                          custom={0.3}
                          variants={fadeUp}
                          className="mt-8 flex flex-wrap items-center gap-4"
                        >
                          <Link
                            href={slide.ctaHref}
                            className="rounded-full bg-clinic-teal px-8 py-3.5 text-white transition-all hover:bg-clinic-teal-dark hover:scale-105 shadow-sm hover:shadow-md"
                          >
                            {slide.ctaLabel}
                          </Link>
                          <Link
                            href={slide.secondaryHref}
                            className="text-clinic-charcoal/70 underline underline-offset-4 hover:text-clinic-charcoal transition-colors"
                          >
                            {slide.secondaryLabel}
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Image column */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-clinic-sage shadow-lg md:h-full md:max-h-96">
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-clinic-ivory/80 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-clinic-teal hover:scale-105 md:flex"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-clinic-ivory/80 p-3 shadow-sm backdrop-blur-sm transition-all hover:bg-clinic-teal hover:scale-105 md:flex"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index
                ? "w-6 bg-clinic-teal"
                : "w-2 bg-clinic-charcoal/20 hover:bg-clinic-charcoal/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
