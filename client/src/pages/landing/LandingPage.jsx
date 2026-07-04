import Navbar from "@/components/landing/navbar/Navbar";
import Hero from "@/components/landing/Hero";
import ProductPreview from "@/components/landing/ProductPreview";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductPreview />
      <Features />
      <Footer />
    </>
  );
}