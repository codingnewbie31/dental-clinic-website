export interface ContactInfoItem {
  icon: string;
  title: string;
  lines: string[];
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123 Dental Street", "Gulberg III, Lahore", "Pakistan"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+92 300 1234567", "+92 42 35789000"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@dentalclinic.com", "appointments@dentalclinic.com"],
  },
  {
    icon: "🕐",
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
  },
];