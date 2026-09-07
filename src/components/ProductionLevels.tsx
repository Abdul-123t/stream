import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_LEVELS } from '../data';
import { ServiceLevel } from '../types';
import { Check, ArrowRight, Sliders, ShieldCheck, X } from 'lucide-react';

interface ProductionLevelsProps {
  onPlanProductionClick: (preselectedTier?: string) => void;
}

export const ProductionLevels: React.FC<ProductionLevelsProps> = ({ onPlanProductionClick }) => {
  const [configuratorOpen, setConfiguratorOpen] = useState<boolean>(false);

  // Custom configurator states
  const [customCamCount, setCustomCamCount] = useState<number>(3);
  const [customPlatforms, setCustomPlatforms] = useState<number>(2);
  const [needsLed, setNeedsLed] = useState<boolean>(false);
  const [needsISO, setNeedsISO] = useState<boolean>(true);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F4F3EE] text-[#111216] relative border-b border-zinc-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] text-[#2563EB] uppercase font-bold mb-3">
              PRODUCTION SPECIFICATIONS
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-[#111216] leading-[0.95]">
              TAILORED TO<br />
              <span className="text-[#2563EB]">YOUR EVENT.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-2">
            <p className="text-xs font-mono text-zinc-600 font-medium">
              No off-the-shelf templates. Every specification is custom engineered.
            </p>
            <button
              onClick={() => setConfiguratorOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#18191E] text-white text-xs font-mono font-bold uppercase rounded hover:bg-zinc-800 transition-colors cursor-pointer shadow-md"
            >
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>LAUNCH PRODUCTION CONFIGURATOR</span>
            </button>
          </div>
        </div>

        {/* Service Levels Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICE_LEVELS.map((level) => {
            const isPopular = level.badge === 'MOST POPULAR';
            return (
              <div
                key={level.id}
                className={`p-6 sm:p-8 rounded-lg border flex flex-col justify-between transition-all duration-300 relative shadow-xl ${
                  isPopular
                    ? 'bg-[#16171D] text-white border-[#2563EB] ring-2 ring-[#2563EB]'
                    : 'bg-white border-zinc-300 text-[#111216] hover:border-zinc-400'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[9px] font-mono font-bold px-3 py-0.5 uppercase tracking-widest rounded-full shadow-lg">
                    {level.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Camera Count */}
                  <div>
                    <span className={`text-xs font-mono uppercase tracking-widest font-bold ${isPopular ? 'text-blue-400' : 'text-zinc-500'}`}>
                      TIER SPECIFICATION
                    </span>
                    <h3 className={`text-2xl font-black font-display uppercase tracking-tight mt-1 ${isPopular ? 'text-white' : 'text-[#111216]'}`}>
                      {level.name}
                    </h3>
                    <div className={`mt-2 inline-block px-3 py-1 rounded text-xs font-mono font-bold ${isPopular ? 'bg-zinc-900 border border-zinc-800 text-blue-300' : 'bg-zinc-100 border border-zinc-300 text-[#2563EB]'}`}>
                      {level.cameraCount}
                    </div>
                  </div>

                  <p className={`text-xs font-normal leading-relaxed min-h-[40px] ${isPopular ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {level.suitableFor}
                  </p>

                  {/* Included Deliverables */}
                  <div className={`space-y-2.5 pt-4 border-t ${isPopular ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <p className={`text-[10px] font-mono uppercase tracking-widest font-bold ${isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      INCLUDED IN SPECIFICATION:
                    </p>
                    {level.features.map((feature) => (
                      <div key={feature} className={`flex items-start gap-2 text-xs font-mono ${isPopular ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className={`pt-6 border-t mt-6 ${isPopular ? 'border-zinc-800' : 'border-zinc-200'}`}>
                  <button
                    onClick={() => onPlanProductionClick(level.name)}
                    className={`w-full group inline-flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold tracking-[0.15em] uppercase transition-all duration-200 cursor-pointer rounded ${
                      isPopular
                        ? 'bg-[#2563EB] text-white hover:bg-blue-600 shadow-lg'
                        : 'bg-[#18191E] text-white hover:bg-zinc-800 shadow-md'
                    }`}
                  >
                    <span>BUILD MY PRODUCTION</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tailored Statement Notice */}
        <div className="p-6 bg-[#16171D] text-white border border-zinc-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#2563EB] shrink-0" />
            <div>
              <p className="text-sm font-display font-bold uppercase text-white tracking-wide">
                EVERY PRODUCTION IS TAILORED TO THE EVENT.
              </p>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                We review venue acoustics, lighting, bandwidth, and camera angles before providing a final transparent proposal.
              </p>
            </div>
          </div>

          <button
            onClick={() => onPlanProductionClick()}
            className="shrink-0 px-6 py-3 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer rounded"
          >
            BUILD MY PRODUCTION →
          </button>
        </div>

      </div>

      {/* Production Configurator Interactive Drawer */}
      <AnimatePresence>
        {configuratorOpen && (
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
              className="bg-zinc-950 text-white border border-zinc-800 rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setConfiguratorOpen(false)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-widest">
                  INTERACTIVE CONFIGURATOR
                </span>
                <h3 className="text-2xl font-black font-display uppercase text-white">
                  CUSTOM PRODUCTION SPECIFICATION
                </h3>
              </div>

              {/* Camera Slider */}
              <div className="space-y-2 bg-zinc-900 p-4 rounded border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-300">
                  <span className="font-bold uppercase">CAMERAS REQUIRED</span>
                  <span className="text-blue-400 font-bold text-sm">{customCamCount} CAMERAS</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={customCamCount}
                  onChange={(e) => setCustomCamCount(Number(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
                <p className="text-[11px] font-mono text-zinc-400">
                  {customCamCount === 1 && 'Single operator stationary keynote camera.'}
                  {customCamCount >= 2 && customCamCount <= 3 && 'Wide stage angle + tight presenter tracking + PTZ audience camera.'}
                  {customCamCount >= 4 && customCamCount <= 5 && 'Full multi-angle coverage + wireless handheld gimbal + vision switcher crew.'}
                  {customCamCount >= 6 && 'Concert / Festival multi-camera rig with crane/jib & ISO recordings.'}
                </p>
              </div>

              {/* Streaming Destinations Slider */}
              <div className="space-y-2 bg-zinc-900 p-4 rounded border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-300">
                  <span className="font-bold uppercase">STREAM DESTINATIONS</span>
                  <span className="text-blue-400 font-bold text-sm">{customPlatforms} PLATFORMS</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={customPlatforms}
                  onChange={(e) => setCustomPlatforms(Number(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-2 gap-3">
                <label className="p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-mono text-zinc-300 font-bold uppercase">LED WALL MAPPING</span>
                  <input
                    type="checkbox"
                    checked={needsLed}
                    onChange={(e) => setNeedsLed(e.target.checked)}
                    className="accent-[#2563EB] w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="p-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-mono text-zinc-300 font-bold uppercase">ISO PRORES ARCHIVE</span>
                  <input
                    type="checkbox"
                    checked={needsISO}
                    onChange={(e) => setNeedsISO(e.target.checked)}
                    className="accent-[#2563EB] w-4 h-4 cursor-pointer"
                  />
                </label>
              </div>

              {/* Recommended Tier Summary */}
              <div className="p-4 bg-[#2563EB]/10 border border-[#2563EB] rounded text-xs font-mono">
                <p className="text-blue-400 font-bold uppercase mb-1">RECOMMENDED BASE SPECIFICATION:</p>
                <p className="text-white text-base font-display font-bold uppercase">
                  {customCamCount <= 2 ? 'STARTER PACKAGE' : customCamCount <= 4 ? 'STANDARD PACKAGE' : customCamCount <= 6 ? 'PREMIUM PACKAGE' : 'GLOBAL ELITE PACKAGE'}
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setConfiguratorOpen(false)}
                  className="px-4 py-2 bg-zinc-900 text-zinc-300 text-xs font-mono hover:text-white"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => {
                    setConfiguratorOpen(false);
                    onPlanProductionClick(`Custom (${customCamCount} Cameras, ${customPlatforms} Platforms)`);
                  }}
                  className="px-6 py-2.5 bg-[#2563EB] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
                >
                  TRANSFER SPEC TO BRIEF →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
