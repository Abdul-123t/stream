import React from 'react';
import { Award, Shield, Cpu, Globe } from 'lucide-react';

export const WhyD1Streams: React.FC = () => {
  const blocks = [
    {
      title: 'BROADCAST QUALITY',
      description: 'Professional workflows designed around the rigorous engineering standards of live broadcast television. No consumer webcams or amateur setups.',
      icon: Award,
      spec: 'EBU R128 Loudness · 12G-SDI Signal Flow',
    },
    {
      title: 'RELIABLE EXECUTION',
      description: 'Careful pre-production planning, redundant hardware encoders, dual power supplies, and experienced crews designed to keep the production moving without dropouts.',
      icon: Shield,
      spec: 'SRT Failover · Bonded Cellular 5G Backup',
    },
    {
      title: 'SCALABLE PRODUCTION',
      description: 'From a single-camera keynote setup to complex multi-camera festival environments with wireless gimbals, LED walls, and instant replay.',
      icon: Cpu,
      spec: '1 to 8+ Cameras · Modular Flightcase Rigs',
    },
    {
      title: 'GLOBAL CAPABILITY',
      description: 'UK-based with the international logistics capability to support productions across Europe, the Americas, Middle East, Africa, and beyond.',
      icon: Globe,
      spec: 'IATA Air Cargo Ready · Worldwide Crew Dispatch',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0B] relative border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold mb-3">
            THE D1 ADVANTAGE
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
            THE DIFFERENCE<br />
            <span className="text-[#0066FF]">IS IN THE DETAILS.</span>
          </h2>
        </div>

        {/* 4 Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="p-8 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-col justify-between space-y-6 relative group hover:border-[#0066FF] transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded text-[#0066FF]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-600">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white group-hover:text-[#0066FF] transition-colors">
                    {block.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {block.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                  {block.spec}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
