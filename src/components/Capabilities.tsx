import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Sliders, Volume2, Layers, Globe, Users, Monitor, Database, ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { CAPABILITIES } from '../data';
import { CapabilityItem } from '../types';

interface CapabilitiesProps {
  onPlanProductionClick: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onPlanProductionClick }) => {
  const [activeCapability, setActiveCapability] = useState<CapabilityItem>(CAPABILITIES[0]);
  const [selectedCapabilityModal, setSelectedCapabilityModal] = useState<CapabilityItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return Video;
      case 'Sliders': return Sliders;
      case 'Volume2': return Volume2;
      case 'Layers': return Layers;
      case 'Globe': return Globe;
      case 'Users': return Users;
      case 'Monitor': return Monitor;
      case 'Database': return Database;
      default: return Video;
    }
  };

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-[#090A0D] relative border-b border-zinc-800/80 overflow-hidden">
      {/* Background Production Atmosphere Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
          alt="Keynote Stage Broadcast Production"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0D] via-[#090A0D]/90 to-[#090A0D]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold mb-3">
              PRODUCTION CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
              EVERYTHING BETWEEN<br />
              <span className="text-zinc-500">THE STAGE AND THE SCREEN.</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-sm">
            End-to-end broadcast engineering tailored for flawless live execution and multi-destination distribution.
          </p>
        </div>

        {/* Editorial Layout: Interactive Selector List (Left) + High Impact Feature Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Capability Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {CAPABILITIES.map((item, index) => {
              const Icon = getIcon(item.icon);
              const isActive = activeCapability.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCapability(item)}
                  className={`group w-full text-left p-4 sm:p-5 rounded transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 border-[#0066FF] text-white shadow-xl translate-x-1'
                      : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#0066FF]' : 'text-zinc-600'}`}>
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#0066FF]' : 'text-zinc-500'}`} />
                      <span className="text-sm font-display font-bold uppercase tracking-wide">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#0066FF] translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Capability Spotlight Panel */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Image Preview with Broadcast Overlay */}
                  <div className="relative aspect-video rounded overflow-hidden mb-6 border border-zinc-800">
                    <img
                      src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1200&auto=format&fit=crop"
                      alt="Broadcast Production Capability"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-zinc-950/90 border border-zinc-800 px-3 py-1 rounded text-[10px] font-mono text-[#0066FF] font-bold uppercase tracking-wider">
                      SPECIFICATION 0{CAPABILITIES.findIndex(c => c.id === activeCapability.id) + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white mb-3">
                    {activeCapability.title}
                  </h3>

                  <p className="text-base text-zinc-300 leading-relaxed mb-6">
                    {activeCapability.fullDesc}
                  </p>

                  {/* Key Technical Specifications */}
                  <div className="space-y-3 pt-4 border-t border-zinc-800">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                      SYSTEM HIGHLIGHTS
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeCapability.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware Equipment Deployments */}
                  <div className="pt-4 border-t border-zinc-800/80 mt-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-2">
                      DEPLOYED EQUIPMENT
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeCapability.equipment.map((eq) => (
                        <span key={eq} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 rounded">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-6 border-t border-zinc-800 flex items-center justify-between mt-6">
                  <button
                    onClick={() => setSelectedCapabilityModal(activeCapability)}
                    className="text-xs font-mono text-zinc-400 hover:text-white uppercase tracking-wider underline underline-offset-4 cursor-pointer"
                  >
                    View Full Tech Specs →
                  </button>

                  <button
                    onClick={onPlanProductionClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0066FF] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <span>REQUEST THIS SPEC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Tech Spec Inspector Modal */}
      <AnimatePresence>
        {selectedCapabilityModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-950 border border-zinc-800 rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedCapabilityModal(null)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#0066FF] uppercase tracking-widest font-bold">
                  BROADCAST TECHNICAL SPECIFICATION SHEET
                </span>
                <h3 className="text-2xl font-black font-display uppercase text-white">
                  {selectedCapabilityModal.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedCapabilityModal.fullDesc}
              </p>

              <div className="space-y-3 bg-zinc-900 p-4 rounded border border-zinc-800">
                <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  TECHNICAL BENCHMARKS
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-300">
                  {selectedCapabilityModal.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCapabilityModal(null)}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    setSelectedCapabilityModal(null);
                    onPlanProductionClick();
                  }}
                  className="px-5 py-2 bg-[#0066FF] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
                >
                  ADD TO PRODUCTION BRIEF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
