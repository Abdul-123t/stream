import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface HeroProps {
  onPlanProductionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanProductionClick }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between bg-[#070709] overflow-hidden">
      {/* Cinematic Broadcast Studio High-Visibility Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
          alt="Professional Broadcast Multi-Camera Production Control Room"
          loading="eager"
          className="w-full h-full object-cover object-right-top opacity-55 lg:opacity-75 filter contrast-125 brightness-90 transition-opacity duration-700"
        />
        {/* Left scrim gradient to ensure 100% text legibility on left while keeping image crisp on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/85 to-[#070709]/20 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#070709]/75 to-[#070709] lg:hidden" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-5xl flex flex-col items-start space-y-8 lg:space-y-10 py-10 lg:py-20">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-900/90 border border-zinc-800 rounded text-xs font-mono tracking-[0.2em] uppercase text-zinc-300 shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF] tally-live-pulse" />
              <span>UK BASED · GLOBAL PRODUCTION</span>
            </motion.div>

            {/* Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black font-display uppercase tracking-tight text-white leading-[0.95] break-words">
                LIVE EVENTS.
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black font-display uppercase tracking-tight text-[#0066FF] leading-[0.95] break-words hyphens-auto">
                BUILT FOR BROADCAST.
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed"
            >
              Professional multi-camera production and live streaming for conferences, concerts, festivals, corporate events, churches and experiences anywhere in the world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={onPlanProductionClick}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0066FF] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-blue-600 transition-all duration-200 shadow-xl shadow-blue-900/30 active:scale-98 cursor-pointer"
              >
                <span>PLAN YOUR PRODUCTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#capabilities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs font-mono font-semibold tracking-[0.15em] uppercase hover:bg-zinc-800 hover:text-white transition-all duration-200"
              >
                <span>EXPLORE CAPABILITIES</span>
              </a>
            </motion.div>

            {/* Tagline Footer Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-zinc-800/80 w-full flex items-center justify-between"
            >
              <p className="text-[11px] font-mono tracking-[0.22em] text-zinc-400 uppercase">
                BROADCAST QUALITY. ANYWHERE. ANYTIME.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 hidden sm:flex">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" /> EBU R128</span>
                <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-emerald-500" /> 1080p60 SRT</span>
              </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
