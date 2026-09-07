import React from 'react';
import { Radio, Film } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F5F4F0] text-[#18181B] relative overflow-hidden border-b border-zinc-300">
      {/* Subtle paper / editorial texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-pattern mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow & Big Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#18191E] border border-zinc-800 rounded text-xs font-mono tracking-[0.2em] text-[#2563EB] uppercase font-bold text-white shadow-sm">
              <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>D1 STREAMS EDITORIAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-[#111216] leading-[0.95]">
              YOUR EVENT.<br />
              <span className="text-[#2563EB]">OUR BROADCAST.</span>
            </h2>

            {/* Fact stats badge */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-zinc-300">
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold">ESTABLISHED</p>
                <p className="text-2xl font-display font-black text-[#111216] mt-0.5">2021</p>
                <p className="text-xs text-zinc-600 mt-0.5 font-medium">UK Based · Global Deployments</p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold">STANDARD</p>
                <p className="text-2xl font-display font-black text-[#111216] mt-0.5">4K / 1080p60</p>
                <p className="text-xs text-zinc-600 mt-0.5 font-medium">Broadcast Level Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Body & The Big Idea Dominant Callout */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            <p className="text-xl sm:text-2xl text-[#18181B] font-medium leading-relaxed font-sans">
              D1 Streams transforms live events into polished, professional broadcasts designed for audiences wherever they are watching.
            </p>

            <p className="text-base text-zinc-700 leading-relaxed font-normal">
              From intimate gatherings to large-scale conferences, concerts and festivals, our production teams combine professional equipment, experienced crew and reliable live workflows to deliver exceptional coverage in real time.
            </p>

            {/* THE BIG IDEA — Visually Dominant Statement */}
            <div className="p-8 sm:p-10 bg-[#16171D] text-white border-l-4 border-[#2563EB] rounded-r-lg relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Film className="w-32 h-32 text-white" />
              </div>
              
              <p className="text-[11px] font-mono tracking-[0.22em] text-blue-400 uppercase font-bold mb-3">
                THE D1 STREAMS PHILOSOPHY
              </p>
              
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-[1.05]">
                WE DON'T JUST STREAM THE EVENT. WE PRODUCE THE BROADCAST.
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
