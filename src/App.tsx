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
    if (tier) {
      setSelectedTierForEnquiry(tier);
    }
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F4F6] font-sans selection:bg-[#0066FF] selection:text-white">
      {/* Fixed Desktop & Mobile Navigation Header */}
      <Navbar onPlanProductionClick={() => scrollToEnquiry()} />

      {/* Main Content Sections */}
      <main>
        {/* 01. Hero */}
        <Hero onPlanProductionClick={() => scrollToEnquiry()} />

        {/* 02. Trust Strip */}
        <TrustStrip />

        {/* 03. Editorial Introduction & Big Idea */}
        <Introduction />

        {/* 04. Capabilities (8 Core Services) */}
        <Capabilities onPlanProductionClick={() => scrollToEnquiry()} />

        {/* 05. Production Process (01 to 05 Workflow) */}
        <ProductionProcess />

        {/* 06. Events Covered (11 Event Sectors) */}
        <EventsCovered onPlanProductionClick={() => scrollToEnquiry()} />

        {/* 07. Global Capability */}
        <GlobalCapability />

        {/* 08. Production Levels */}
        <ProductionLevels onPlanProductionClick={(tier) => scrollToEnquiry(tier)} />

        {/* 09. Why D1 Streams (4 Editorial Blocks) */}
        <WhyD1Streams />

        {/* 10. Technical Credibility (Broadcast Spec Sheet) */}
        <TechnicalCredibility />

        {/* 11. Production in Action (Cinematic Atmosphere) */}
        <ProductionInAction />

        {/* 12. Official YouTube & Broadcast Media Channel */}
        <YouTubeShowcase />

        {/* 13. Recent Production Work */}
        <Testimonials />

        {/* 13. FAQ Accordion (11 Questions) */}
        <FAQSection />

        {/* 14. Production Enquiry Briefing Form */}
        <ProductionEnquirySection initialTier={selectedTierForEnquiry} />

        {/* 15. Final CTA */}
        <FinalCTA onPlanProductionClick={() => scrollToEnquiry()} />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
