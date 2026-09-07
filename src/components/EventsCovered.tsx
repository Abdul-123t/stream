import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENT_CATEGORIES } from '../data';
import { Camera, Check, ArrowRight } from 'lucide-react';

interface EventsCoveredProps {
  onPlanProductionClick: () => void;
}

export const EventsCovered: React.FC<EventsCoveredProps> = ({ onPlanProductionClick }) => {
  const [activeEventId, setActiveEventId] = useState<string>(EVENT_CATEGORIES[0].id);

  const activeEvent = EVENT_CATEGORIES.find((e) => e.id === activeEventId) || EVENT_CATEGORIES[0];

  return (
    <section id="events" className="py-24 lg:py-32 bg-[#0D0D0E] relative border-b border-zinc-800/80">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold mb-3">
              PRODUCTION SECTORS
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
              WHATEVER THE EVENT.<br />
              <span className="text-[#0066FF]">WHEREVER THE AUDIENCE.</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-sm">
            Scalable camera configurations and audio-visual workflows engineered for every venue archetype.
          </p>
        </div>

        {/* Horizontal Event Selector Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {EVENT_CATEGORIES.map((evt) => (
            <button
              key={evt.id}
              onClick={() => setActiveEventId(evt.id)}
              className={`shrink-0 px-4 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeEventId === evt.id
                  ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-900/30'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              {evt.title}
            </button>
          ))}
        </div>

        {/* Featured Large Event Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl mb-12 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Left Image Area */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[480px]">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded border border-zinc-700 text-[10px] font-mono text-[#0066FF] font-bold uppercase tracking-widest">
                LIVE PRODUCTION ARCHETYPE
              </div>
            </div>

            {/* Right Details Area */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
                  {activeEvent.title}
                </h3>

                <p className="text-base text-zinc-300 leading-relaxed">
                  {activeEvent.description}
                </p>

                <div className="pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                    <Camera className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="font-bold">TYPICAL SETUP:</span>
                    <span className="text-zinc-400">{activeEvent.cameraSetup}</span>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                      KEY PRODUCTION REQUIREMENTS:
                    </p>
                    {activeEvent.keyRequirements.map((req) => (
                      <div key={req} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#0066FF]" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={onPlanProductionClick}
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0066FF] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-blue-600 transition-colors shadow-lg cursor-pointer"
              >
                <span>PLAN YOUR {activeEvent.title.split('&')[0]} PRODUCTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Secondary Editorial Grid of All 11 Event Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {EVENT_CATEGORIES.map((evt) => (
            <button
              key={evt.id}
              onClick={() => setActiveEventId(evt.id)}
              className={`p-4 rounded border text-left transition-all duration-200 group cursor-pointer ${
                activeEventId === evt.id
                  ? 'bg-zinc-900 border-[#0066FF]'
                  : 'bg-zinc-950 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                SECTOR
              </p>
              <p className="text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white group-hover:text-[#0066FF] transition-colors">
                {evt.title}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
