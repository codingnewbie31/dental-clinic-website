export interface Testimonial {
  id: string;
  patientName: string;
  patientInitial: string;
  content: string;
  rating: number;
  date: string;
  service: string;
  image?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    patientName: "Ayesha Khan",
    patientInitial: "AK",
    content: "The team at Dental Clinic made me feel so comfortable! I had my teeth whitened and the results are amazing. The staff was so gentle and professional throughout.",
    rating: 5,
    date: "August 2024",
    service: "Cosmetic Dentistry",
  },
  {
    id: "2",
    patientName: "Mohammad Ali",
    patientInitial: "MA",
    content: "Dr. Usman Khan did my Invisalign treatment. My teeth are perfectly straight now and I couldn't be happier. The clinic is spotless and everyone is so welcoming.",
    rating: 5,
    date: "July 2024",
    service: "Orthodontics",
  },
  {
    id: "3",
    patientName: "Sana Ahmed",
    patientInitial: "SA",
    content: "I've been coming here for 3 years now. The care is consistent and the doctors actually listen to your concerns. My whole family comes here now.",
    rating: 5,
    date: "June 2024",
    service: "General Dentistry",
  },
  {
    id: "4",
    patientName: "Hamza Rizvi",
    patientInitial: "HR",
    content: "Had a root canal done by Dr. Hassan Rizvi. It was completely painless and I was so nervous before. Thank you for making it such a smooth experience!",
    rating: 5,
    date: "May 2024",
    service: "Endodontics",
  },
  {
    id: "5",
    patientName: "Fatima Malik",
    patientInitial: "FM",
    content: "My children love coming to this clinic. The pediatric dentist is so patient and kind. They actually look forward to their dental visits now!",
    rating: 5,
    date: "April 2024",
    service: "Pediatric Dentistry",
  },
];