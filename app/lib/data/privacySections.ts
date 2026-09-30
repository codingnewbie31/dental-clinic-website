export interface PrivacySection {
  title: string;
  content: string[];
}

export const privacySections: PrivacySection[] = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal details such as your name, phone number, email address, and date of birth when you book an appointment or contact us.",
      "Medical and dental history relevant to your treatment.",
      "Appointment history and treatment notes kept as part of your patient record.",
      "Basic website usage information, such as which pages are visited, to help us improve the site.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To schedule, confirm, and manage your appointments.",
      "To provide safe and appropriate dental treatment.",
      "To communicate with you about your appointments, treatment, or billing.",
      "To improve our services and website experience.",
    ],
  },
  {
    title: "3. How We Protect Your Information",
    content: [
      "Access to patient records is limited to staff directly involved in your care.",
      "All clinic staff are bound by confidentiality regarding patient information.",
      "We take reasonable technical and organizational measures to keep your data secure.",
    ],
  },
  {
    title: "4. Cookies & Website Usage",
    content: [
      "Our website may use basic cookies to help the site function correctly and to understand general usage patterns.",
      "We do not use your browsing activity for third-party advertising.",
    ],
  },
  {
    title: "5. Sharing Your Information",
    content: [
      "We do not sell your personal information to anyone.",
      "Information may be shared with other healthcare providers (such as a specialist or lab) only when necessary for your treatment.",
      "We will not use your information for marketing purposes without your consent.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You may request access to the personal information we hold about you.",
      "You may request corrections to inaccurate information.",
      "You may ask us questions about how your information is used at any time.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain patient records for as long as necessary to provide care and to meet standard recordkeeping practices for dental clinics.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "For patients under 18, information is collected and used with the involvement and consent of a parent or legal guardian.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time.",
      "Changes will be posted on this page, and continued use of our services implies acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or how your information is handled, please contact us:",
      "📞 +92 300 1234567",
      "✉️ info@dentalclinic.com",
    ],
  },
];