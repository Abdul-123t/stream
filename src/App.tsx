import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Introduction } from './components/Introduction';
import { Capabilities } from './components/Capabilities';
import { ProductionProcess } from './components/ProductionProcess';
import { EventsCovered } from './components/EventsCovered';
import { GlobalCapability } from './components/GlobalCapability';
import { ProductionLevels } from './components/ProductionLevels';
import { WhyD1Streams } from './components/WhyD1Streams';
import { TechnicalCredibility } from './components/TechnicalCredibility';
import { ProductionInAction } from './components/ProductionInAction';
import { YouTubeShowcase } from './components/YouTubeShowcase';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ProductionEnquirySection } from './components/ProductionEnquirySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedTierForEnquiry, setSelectedTierForEnquiry] = useState<string | undefined>(undefined);

  const scrollToEnquiry = (tier?: string) => {
    if (tier) setSelectedTierForEnquiry(tier);
    const element = document.getElementById('enquiry');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onPlanProductionClick={() => scrollToEnquiry()} />

      <main className="flex-grow">
        <div className="site-container">
          <Hero onPlanProductionClick={() => scrollToEnquiry()} />
          <TrustStrip />
          <Introduction />
          <Capabilities onPlanProductionClick={() => scrollToEnquiry()} />
          <ProductionProcess />
          <EventsCovered onPlanProductionClick={() => scrollToEnquiry()} />
          <GlobalCapability />
          <ProductionLevels onPlanProductionClick={(tier) => scrollToEnquiry(tier)} />
          <WhyD1Streams />
          <TechnicalCredibility />
          <ProductionInAction />
          <YouTubeShowcase />
          <Testimonials />
          <FAQSection />
          <ProductionEnquirySection initialTier={selectedTierForEnquiry} />
          <FinalCTA onPlanProductionClick={() => scrollToEnquiry()} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
