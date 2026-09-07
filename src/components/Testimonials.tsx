import React from 'react';
import { Building2, Radio, CheckCircle2, Shield } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const recentWork = [
    {
      name: 'RCCG JESUS PALACE',
      badge: 'Recent Production',
      category: 'Churches & Worship Events',
    },
    {
      name: 'RCCG ZONE OF RESURRECTION',
      badge: 'Recent Production',
      category: 'Churches & Worship Events',
    },
    {
      name: 'RCCG PEACE ARENA',
      badge: 'Recent Production',
      category: 'Churches & Worship Events',
    },
  ];

  return (
    <section className="py-24 bg-[#F2F1EC] text-[#111216] border-b border-zinc-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18191E] border border-zinc-800 text-[11px] font-mono tracking-[0.2em] text-white uppercase font-bold rounded shadow-sm">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>PROVEN DEPLOYMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-[#111216] leading-[0.95]">
            RECENT PRODUCTION WORK
          </h2>

          <p className="text-sm sm:text-base text-zinc-700 font-normal max-w-2xl leading-relaxed">
            Trusted to deliver professional live production across churches, events and large-scale gatherings.
          </p>
        </div>

        {/* 3 Featured Recent Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentWork.map((location, idx) => (
            <div
              key={idx}
              className="bg-[#16171D] text-white border border-zinc-800 p-8 rounded-lg flex flex-col justify-between space-y-6 relative group hover:border-[#2563EB]/80 transition-all duration-300 shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-widest px-2.5 py-1 bg-[#2563EB]/20 border border-[#2563EB]/40 rounded">
                    {location.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-md w-fit text-white group-hover:border-[#2563EB] transition-colors">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-xl font-black font-display uppercase tracking-tight text-white group-hover:text-blue-300 transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1.5">
                    {location.category}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED DEPLOYMENT
                </span>
                <span className="text-zinc-400 font-bold">LIVE STREAM & BROADCAST</span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Short Credibility Statement Banner */}
        <div className="p-6 bg-[#16171D] text-white border border-zinc-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded text-blue-400 shrink-0 hidden sm:block">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest text-blue-400 uppercase font-bold">
                PRODUCTION INTEGRITY & EXPERIENCE
              </p>
              <p className="text-sm font-mono font-bold text-white uppercase mt-0.5">
                RECENTLY DELIVERING LIVE PRODUCTION FOR CHURCHES, EVENTS AND LARGE-SCALE GATHERINGS.
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded shrink-0">
            CONFIDENTIAL & PROFESSIONAL STANDARDS
          </span>
        </div>

      </div>
    </section>
  );
};
