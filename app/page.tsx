import HeroSection from "./components/HeroSection/HeroSection";
import ServiceFeaturesCardsSection from "./components/ServiceFeaturesCardsSection/ServiceFeaturesCardsSection";
import ServiceFeaturesSection from "./components/ServiceFeaturesSection/ServiceFeaturesSection";
import { CustomerTestimonialsSection } from "./components/CustomerTestimonialsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import SiteFooterSection from "./components/SiteFooterSection/SiteFooterSection";


export default function Home() {
  return (
    <div className="bg-[#F4F4F4]">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about" >
        <ServiceFeaturesCardsSection />
      </section>

      <section id="pricing">
        <ServiceFeaturesSection />
      </section>

      <section id="testimonial">
        <CustomerTestimonialsSection />
      </section>

      <FAQSection />
      <SiteFooterSection />
    </div>
  );
}
