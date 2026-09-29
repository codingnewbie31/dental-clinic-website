// MOCK DATA — placeholder until the admin API is implemented.
// Replace with real data fetched from the backend once available.

export interface AdminStat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

export const adminStats: AdminStat[] = [
  { label: "Total Appointments", value: "1,247", change: "+12%", icon: "📅", color: "clinic-teal" },
  { label: "Active Doctors", value: "8", change: "0", icon: "👨‍⚕️", color: "clinic-sage" },
  { label: "Services Offered", value: "8", change: "0", icon: "🦷", color: "clinic-sand" },
  { label: "Total Patients", value: "512", change: "+8%", icon: "👥", color: "clinic-charcoal" },
];

export interface AdminAppointment {
  id: string;
  name: string;
  service: string;
  doctor: string;
  date: string;
  status: string;
}

export const adminRecentAppointments: AdminAppointment[] = [
  { id: "1", name: "Sarah Khan", service: "General Dentistry", doctor: "Dr. Sarah Ahmed", date: "Today, 3:00 PM", status: "pending" },
  { id: "2", name: "Ahmed Malik", service: "Cosmetic Dentistry", doctor: "Dr. Ayesha Malik", date: "Tomorrow, 10:00 AM", status: "confirmed" },
  { id: "3", name: "Fatima Ali", service: "Orthodontics", doctor: "Dr. Usman Khan", date: "Dec 20, 2:00 PM", status: "confirmed" },
  { id: "4", name: "Hassan Raza", service: "Emergency Care", doctor: "Any Available", date: "Today, 5:30 PM", status: "pending" },
  { id: "5", name: "Zainab Iqbal", service: "Pediatric Dentistry", doctor: "Dr. Bilal Hassan", date: "Dec 21, 11:00 AM", status: "completed" },
];