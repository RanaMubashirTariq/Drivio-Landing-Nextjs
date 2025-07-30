import HeroSection from "./components/HeroSection/HeroSection";
import ServiceFeaturesSection from "./components/ServiceFeaturesSection/ServiceFeaturesSection";
import FAQSection from "./components/FAQSection/FAQSection";
import SiteFooterSection from "./components/SiteFooterSection/SiteFooterSection";
import CustomerTestimonialsSection from "./components/CustomerTestimonialsSection/CustomerTestimonialsSection";


export default function Home() {
  return (
    <div className="bg-[#F4F4F4]">
        <HeroSection />
          


      <section id="pricing">
        <ServiceFeaturesSection />
      </section>

      <section id="testimonial">
        <CustomerTestimonialsSection/>
      </section>

      <FAQSection />
      <SiteFooterSection />
    </div>
  );
}
