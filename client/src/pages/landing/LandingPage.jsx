import Navbar from "@/components/landing/navbar/Navbar";
import Hero from "@/components/landing/hero/Hero";
import Features from "@/components/landing/features/Features";
import Footer from "@/components/landing/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer/>
    </>
  );
}
