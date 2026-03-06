import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ToolsSection from "@/components/ToolsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <WorkSection />
    <ServicesSection />
    <ProcessSection />
    <ToolsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
