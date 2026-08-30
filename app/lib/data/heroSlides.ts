export interface Slide {
  eyebrow: string;
  headline: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
}

export const heroSlides: Slide[] = [
  {
    eyebrow: "Dental Clinic",
    headline: "Dental care that feels",
    highlight: "calm",
    description:
      "Modern treatments, a welcoming team, and appointments that fit your life — not the other way around.",
    ctaLabel: "Book Appointment",
    ctaHref: "/appointment",
    secondaryLabel: "View services",
    secondaryHref: "/services",
    image: "/clinic-hero-1.jpg",
  },
  {
    eyebrow: "Cosmetic Dentistry",
    headline: "Smiles worth",
    highlight: "sharing",
    description:
      "From whitening to veneers, get a smile you're excited to show off.",
    ctaLabel: "Explore Cosmetic Care",
    ctaHref: "/services",
    secondaryLabel: "Meet our doctors",
    secondaryHref: "/doctors",
    image: "/clinic-hero-2.jpg",
  },
  {
    eyebrow: "Family Friendly",
    headline: "Care for every",
    highlight: "generation",
    description:
      "Gentle, patient-first dentistry for kids, parents, and grandparents alike.",
    ctaLabel: "Book a Family Visit",
    ctaHref: "/appointment",
    secondaryLabel: "About us",
    secondaryHref: "/about",
    image: "/clinic-hero-3.jpg",
  },
];