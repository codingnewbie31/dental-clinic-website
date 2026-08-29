import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Dental Clinic</div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/doctors" className="hover:text-blue-600">Doctors</Link>
        <Link href="/appointment" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </Link>
      </div>
    </nav>
  );
}