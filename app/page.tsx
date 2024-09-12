import { AboutSection } from '@/components/layout/sections/about';
import { FeaturesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import { HeroSection } from '@/components/layout/sections/hero';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      <AboutSection />
      {/* <ServicesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection /> */}
      <FooterSection />
    </>
  );
}
