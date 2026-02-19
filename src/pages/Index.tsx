import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValuePillars from "@/components/ValuePillars";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <ValuePillars />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
