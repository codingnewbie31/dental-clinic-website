export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  duration: string;
  priceRange: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "1",
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: "🦷",
    shortDescription: "Routine checkups, cleanings, and preventive care to keep your smile healthy.",
    fullDescription: "Our general dentistry services are designed to keep your smile healthy for life. We provide comprehensive oral exams, professional cleanings, cavity detection, and preventive care to catch issues early. Regular visits help maintain optimal oral health and prevent serious dental problems before they start.",
    features: [
      "Comprehensive oral exams",
      "Professional teeth cleaning",
      "Cavity detection and fillings",
      "Digital X-rays and imaging",
      "Oral cancer screening",
      "Custom mouthguards",
      "Fluoride treatments",
    ],
    duration: "30-60 minutes",
    priceRange: "PKR 3,000 - 8,000",
    faqs: [
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting every 6 months for routine checkups and cleanings to maintain optimal oral health.",
      },
      {
        question: "Does dental insurance cover preventive care?",
        answer: "Most dental insurance plans cover 100% of preventive care costs. We'll help you verify your coverage.",
      },
      {
        question: "What happens during a routine checkup?",
        answer: "Your checkup includes a thorough oral exam, professional cleaning, X-rays if needed, and a discussion about your oral health.",
      },
    ],
  },
  {
    id: "2",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "✨",
    shortDescription: "Transform your smile with teeth whitening, veneers, and complete smile makeovers.",
    fullDescription: "Transform your smile with our comprehensive cosmetic dentistry services. Whether you need professional teeth whitening, porcelain veneers, or a complete smile makeover, our expert team creates natural-looking results that boost your confidence.",
    features: [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Dental bonding",
      "Smile makeovers",
      "Inlays and onlays",
      "Gum contouring",
    ],
    duration: "1-2 hours",
    priceRange: "PKR 5,000 - 50,000",
    faqs: [
      {
        question: "Is teeth whitening safe?",
        answer: "Yes, professional teeth whitening is safe when performed by trained professionals. We use high-quality products that protect your enamel.",
      },
      {
        question: "How long do veneers last?",
        answer: "With proper care, porcelain veneers can last 10-15 years. We'll discuss maintenance and care during your consultation.",
      },
    ],
  },
  {
    id: "3",
    slug: "orthodontics",
    title: "Orthodontics",
    icon: "😁",
    shortDescription: "Braces, Invisalign, and clear aligners for straighter, more confident smiles.",
    fullDescription: "Achieve the straight, beautiful smile you've always wanted with our advanced orthodontic treatments. We offer traditional braces, Invisalign clear aligners, and other orthodontic solutions customized to your needs.",
    features: [
      "Traditional braces",
      "Invisalign clear aligners",
      "Ceramic braces",
      "Lingual braces",
      "Retainers",
      "Orthodontic consultations",
    ],
    duration: "12-24 months",
    priceRange: "PKR 15,000 - 150,000",
    faqs: [
      {
        question: "What's the difference between braces and Invisalign?",
        answer: "Traditional braces use metal brackets and wires, while Invisalign uses clear, removable aligners. We'll help you choose the best option for your needs.",
      },
      {
        question: "Does orthodontic treatment hurt?",
        answer: "You may experience some discomfort during the first few days, but this is normal and subsides quickly. We provide tips to manage any discomfort.",
      },
    ],
  },
  {
    id: "4",
    slug: "emergency-care",
    title: "Emergency Care",
    icon: "🚨",
    shortDescription: "Same-day appointments for dental emergencies when you need them most.",
    fullDescription: "Dental emergencies don't wait, and neither do we. Our emergency dental care service provides same-day appointments for urgent dental issues, including severe pain, broken teeth, and trauma.",
    features: [
      "Same-day appointments",
      "Emergency tooth extractions",
      "Broken tooth repair",
      "Severe toothache relief",
      "Trauma management",
      "After-hours availability",
    ],
    duration: "Urgent (same day)",
    priceRange: "PKR 5,000 - 20,000",
    faqs: [
      {
        question: "What qualifies as a dental emergency?",
        answer: "Severe pain, bleeding, broken teeth, and trauma are all dental emergencies. Call us immediately and we'll schedule you the same day.",
      },
      {
        question: "Do you accept emergency walk-ins?",
        answer: "Yes, we prioritize emergency cases. Call ahead if possible so we can prepare for your arrival.",
      },
    ],
  },
  {
    id: "5",
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: "👶",
    shortDescription: "Gentle, kid-friendly dental care to build healthy habits early.",
    fullDescription: "Make dental visits fun and stress-free for your children with our specialized pediatric dentistry services. Our gentle, kid-friendly approach helps children build positive dental habits that last a lifetime.",
    features: [
      "Child-friendly exams",
      "Gentle cleanings",
      "Fluoride treatments",
      "Dental sealants",
      "Early orthodontic assessment",
      "Kid-friendly environment",
    ],
    duration: "20-40 minutes",
    priceRange: "PKR 2,000 - 6,000",
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer: "We recommend bringing your child for their first dental visit by age 1 or within 6 months of their first tooth appearing.",
      },
      {
        question: "How can I prepare my child for their first visit?",
        answer: "Talk positively about the dentist, read children's books about dental visits, and let them know our team is friendly and caring.",
      },
    ],
  },
  {
    id: "6",
    slug: "oral-surgery",
    title: "Oral Surgery",
    icon: "🔬",
    shortDescription: "Extractions, implants, and surgical procedures with expert precision.",
    fullDescription: "Our experienced oral surgeons perform a wide range of surgical procedures with precision and care. From simple extractions to complex dental implants, we ensure your comfort and safety throughout the process.",
    features: [
      "Tooth extractions",
      "Dental implants",
      "Wisdom tooth removal",
      "Bone grafting",
      "Sinus lifts",
      "Jaw surgery",
    ],
    duration: "45-90 minutes",
    priceRange: "PKR 10,000 - 100,000",
    faqs: [
      {
        question: "Does oral surgery hurt?",
        answer: "We use local anesthesia and sedation options to ensure your comfort. Most patients experience minimal discomfort during and after surgery.",
      },
      {
        question: "How long is recovery after oral surgery?",
        answer: "Recovery time varies by procedure. Most patients return to normal activities within 1-3 days with proper aftercare.",
      },
    ],
  },
  {
    id: "7",
    slug: "periodontics",
    title: "Periodontics",
    icon: "🩸",
    shortDescription: "Expert gum disease treatment, scaling, and gum surgery for healthy gums.",
    fullDescription: "Healthy gums are the foundation of a healthy smile. Our periodontics services include comprehensive gum disease treatment, scaling and root planing, and gum surgery to restore and maintain your gum health.",
    features: [
      "Gum disease treatment",
      "Scaling and root planing",
      "Gum surgery",
      "Crown lengthening",
      "Gum grafting",
      "Maintenance therapy",
    ],
    duration: "45-60 minutes",
    priceRange: "PKR 8,000 - 40,000",
    faqs: [
      {
        question: "What are the signs of gum disease?",
        answer: "Common signs include bleeding gums, swelling, bad breath, and receding gums. Contact us immediately if you notice any of these symptoms.",
      },
      {
        question: "Is gum disease treatment painful?",
        answer: "We use local anesthesia and gentle techniques to ensure your comfort. Most patients experience mild discomfort that subsides quickly.",
      },
    ],
  },
  {
    id: "8",
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    icon: "🦷",
    shortDescription: "Painless endodontic treatment to save and restore damaged teeth.",
    fullDescription: "Don't let the fear of root canals prevent you from saving your natural teeth. Our gentle, painless root canal therapy removes infection and preserves your tooth, allowing you to keep your natural smile.",
    features: [
      "Painless root canals",
      "Single-visit procedures",
      "Advanced technology",
      "Saving natural teeth",
      "Follow-up restoration",
      "Post-procedure care",
    ],
    duration: "60-90 minutes",
    priceRange: "PKR 12,000 - 35,000",
    faqs: [
      {
        question: "Does root canal therapy hurt?",
        answer: "Modern root canal therapy is virtually painless. We use effective anesthesia and advanced techniques to ensure your comfort throughout the procedure.",
      },
      {
        question: "What happens after a root canal?",
        answer: "After your root canal, we'll discuss restoration options to protect your tooth and restore its function and appearance.",
      },
    ],
  },
];