import React from 'react';
import { ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react';

interface FinalCTAProps {
  onPlanProductionClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanProductionClick }) => {
  return (
    <section className="py-24 lg:py-36 bg-[#070709] relative overflow-hidden border-b border-zinc-800/80">
      {/* Background Cinematic Production Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop"
          alt="Live Production Stage Atmosphere"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-40 filter contrast-125 brightness-80 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#070709]/85 to-[#070709]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono tracking-[0.22em] text-[#0066FF] uppercase font-bold">
          <span className="w-2 h-2 rounded-full bg-[#0066FF] tally-live-pulse" />
          <span>PRODUCTION READY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-white leading-[0.92]">
          READY WHEN<br />
          <span className="text-[#0066FF]">THE MOMENT GOES LIVE.</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what you're producing, where it's happening and what your audience needs. We'll build the production around it.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onPlanProductionClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0066FF] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-blue-600 transition-all duration-200 shadow-2xl shadow-blue-900/30 cursor-pointer"
          >
            <span>PLAN YOUR PRODUCTION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="mailto:dammyondnet@gmail.com?subject=Production%20Enquiry%20%E2%80%94%20D1%20Streams"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-zinc-900/90 border border-zinc-700 text-white text-xs font-mono font-bold tracking-[0.15em] uppercase hover:bg-zinc-800 transition-all duration-200 shadow-lg"
          >
            <Mail className="w-4 h-4 text-[#0066FF]" />
            <span>EMAIL DAMMYONDNET@GMAIL.COM</span>
          </a>

          <a
            href="https://wa.me/447918916398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-950/80 border border-emerald-800/80 text-emerald-200 text-xs font-mono font-bold tracking-[0.15em] uppercase hover:bg-emerald-900 hover:text-white transition-all duration-200 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP THE TEAM</span>
          </a>
        </div>

        <div className="pt-8 text-xs font-mono text-zinc-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-6">
          <span>DIRECT PHONE: <a href="tel:+447918916398" className="text-white hover:text-[#0066FF] underline font-bold">+44 7918 916398</a></span>
          <span className="text-zinc-600">|</span>
          <span>EMAIL: <a href="mailto:dammyondnet@gmail.com?subject=Production%20Enquiry%20%E2%80%94%20D1%20Streams" className="text-white hover:text-[#0066FF] underline font-bold">dammyondnet@gmail.com</a></span>
        </div>

      </div>
    </section>
  );
};
