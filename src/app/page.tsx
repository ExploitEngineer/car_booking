import { Navigation } from "@/components/custom-ui/navbar";
import { HeroSection } from "@/components/custom-ui/hero-section";
import { ServicesSection } from "@/components/custom-ui/services-section";
import { WhyChooseUsSection } from "@/components/custom-ui/why-choose-us-section";
import { ContactSection } from "@/components/custom-ui/contact-section";
import { Footer } from "@/components/custom-ui/footer";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
