export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string[];
  experience: number;
  bio: string;
  image: string;
}

export const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Ahmed",
    specialty: "General & Cosmetic Dentistry",
    qualifications: ["BDS", "FCPS", "Certified in Cosmetic Dentistry"],
    experience: 12,
    bio: "Dr. Sarah Ahmed has been transforming smiles for over a decade. She specializes in general and cosmetic dentistry with a gentle, patient-first approach.",
    image: "/doctor-1.jpg",
  },
  {
    id: "2",
    name: "Dr. Usman Khan",
    specialty: "Orthodontics & Dentofacial Orthopedics",
    qualifications: ["BDS", "M.Orth", "Invisalign Certified"],
    experience: 8,
    bio: "Dr. Usman Khan is a specialist in orthodontics, offering traditional braces and Invisalign treatments. He creates beautiful, straight smiles for patients of all ages.",
    image: "/doctor-2.jpg",
  },
  {
    id: "3",
    name: "Dr. Ayesha Malik",
    specialty: "Periodontics & Implantology",
    qualifications: ["BDS", "FCPS", "Diploma in Implantology"],
    experience: 10,
    bio: "Dr. Ayesha Malik is an expert in gum health and dental implants. She provides advanced periodontal care and surgical implant procedures with precision and care.",
    image: "/doctor-3.jpg",
  },
  {
    id: "4",
    name: "Dr. Hassan Rizvi",
    specialty: "Endodontics & Restorative Dentistry",
    qualifications: ["BDS", "FCPS", "Certificate in Endodontics"],
    experience: 7,
    bio: "Dr. Hassan Rizvi specializes in root canal therapy and restorative dentistry. He focuses on pain-free procedures and saving natural teeth.",
    image: "/doctor-4.jpg",
  },
];