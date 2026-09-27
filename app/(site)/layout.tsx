import Navbar from "@/app/components/layout/Navbar";
// import CTASection from "@/app/components/sections/CTASection";
import Footer from "@/app/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      {/* <CTASection /> */}
      <Footer />
    </>
  );
}