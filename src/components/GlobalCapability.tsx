import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Plane, ShieldCheck, Camera, Layers, Radio, CheckCircle2 } from 'lucide-react';

export const GlobalCapability: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>('UK Base & Europe');

  const dispatchHubs = [
    {
      region: 'UK Base & Europe',
      timeframe: 'Direct Ground & Flight Dispatch',
      logistics: 'UK Base with 12-48hr Flightpack Deployment across London, UK, Europe',
      rigs: 'Modular Flypack Cases compliant with IATA air cargo standards',
    },
    {
      region: 'Americas & Caribbean',
      timeframe: 'International Air Logistics',
      logistics: 'Global crew dispatch with flightpack camera systems and local network bonding',
      rigs: 'Compact cinema line rigs & bonded cellular field encoders',
    },
    {
      region: 'Middle East & Africa',
      timeframe: 'International Air Logistics',
      logistics: 'Rapid deployment for international conferences, summits, and worship tours',
      rigs: 'Dual-bonded 5G satellite connectivity + 4K ATEM switchers',
    },
    {
      region: 'Asia-Pacific',
      timeframe: 'International Air Logistics',
      logistics: 'Full technical direction and remote stream ingest setup',
      rigs: 'Remote SRT stream receiver nodes & cloud graphics integration',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#090A0D] relative border-b border-zinc-800/80 overflow-hidden">
      {/* Authentic International Broadcast Arena Photography Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
          alt="International Live Arena & Broadcast Stage Production"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D] via-[#090A0D]/90 to-[#090A0D]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-[#090A0D]" />
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
      </div>

      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>INTERNATIONAL PRODUCTION REACH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
            ONE PRODUCTION TEAM.<br />
            <span className="text-[#0066FF]">NO FIXED BOUNDARIES.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Based in the UK and built for productions beyond it, D1 Streams provides scalable live-production workflows wherever the event takes place.
          </p>
        </div>

        {/* Scalable Production Progression Visualizer */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-10 mb-12 shadow-2xl">
          <p className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-bold mb-6 text-center">
            PRODUCTION SCALE PROGRESSION ARCHITECTURE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0066FF] font-bold">STAGE 01</span>
                <h3 className="text-lg font-display font-bold uppercase text-white mt-1 mb-2">
                  1 CAMERA SETUP
                </h3>
                <p className="text-xs text-zinc-400">
                  Single operator keynote capture, direct stream encoding, and crisp wireless lavalier audio.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
                Ideal for press briefings & intimate talks
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900 border border-[#0066FF] p-6 rounded relative flex flex-col justify-between shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest rounded">
                CORE WORKFLOW
              </div>
              <div>
                <span className="text-xs font-mono text-[#0066FF] font-bold">STAGE 02</span>
                <h3 className="text-lg font-display font-bold uppercase text-white mt-1 mb-2">
                  MULTI-CAMERA
                </h3>
                <p className="text-xs text-zinc-300">
                  3–4 Cinema cameras, live vision switcher, audio engineer, and branded lower-third graphics.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 font-bold">
                Ideal for conferences & church services
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0066FF] font-bold">STAGE 03</span>
                <h3 className="text-lg font-display font-bold uppercase text-white mt-1 mb-2">
                  FULL BROADCAST
                </h3>
                <p className="text-xs text-zinc-400">
                  6+ Cameras, OB flypack racks, full crew, LED wall integration, satellite/5G bonding, and ProRes ISO archives.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
                Ideal for festivals & global summits
              </div>
            </div>

          </div>
        </div>

        {/* Global Key Highlights Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded flex items-start gap-4">
            <div className="p-3 bg-[#0066FF]/10 rounded text-[#0066FF]">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold uppercase text-white tracking-wider">
                UK BASED
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Headquartered in the UK with swift response times across domestic venues.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded flex items-start gap-4">
            <div className="p-3 bg-[#0066FF]/10 rounded text-[#0066FF]">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold uppercase text-white tracking-wider">
                GLOBAL DEPLOYMENT
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Air-transportable flightcase production rigs ready for overseas dispatch.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded flex items-start gap-4">
            <div className="p-3 bg-[#0066FF]/10 rounded text-[#0066FF]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold uppercase text-white tracking-wider">
                SCALABLE PRODUCTION
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Flexible crew and gear packages tailored to exact venue parameters.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
