import React from 'react';
import { Video, Sliders, Volume2, Layers, Globe, Shield } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const specs = [
    { label: 'MULTI-CAMERA', detail: 'Up to 8+ 4K Uncompressed Feeds', icon: Video },
    { label: 'LIVE SWITCHING', detail: 'ATEM Hardware Vision Mixing', icon: Sliders },
    { label: 'BROADCAST AUDIO', detail: 'EBU R128 Dante Compliant', icon: Volume2 },
    { label: 'LIVE GRAPHICS', detail: 'Dynamic Lower Thirds & Overlays', icon: Layers },
    { label: 'MULTI-PLATFORM', detail: 'Concurrent RTMP / SRT Simulcasts', icon: Globe },
    { label: 'GLOBAL PRODUCTION', detail: 'UK Base & International Dispatch', icon: Shield },
  ];

  return (
    <section className="bg-zinc-950 border-y border-zinc-800/80 py-6 relative z-20 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.label}
                className={`flex flex-col items-start space-y-1.5 ${
                  index !== 0 ? 'sm:pl-4 pt-3 sm:pt-0' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-[#0066FF]">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase">
                    {spec.label}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-400 tracking-wide">
                  {spec.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
