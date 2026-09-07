import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Radio, ShieldAlert, Wifi, HardDrive, Tv, Layers, RefreshCw } from 'lucide-react';

export const TechnicalCredibility: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'routing' | 'audio' | 'encoding' | 'camera'>('routing');

  const specsList = [
    { name: 'MULTI-CAMERA', detail: '4K/1080p60 Uncompressed SDI Signals', desc: 'Zero-latency 12G-SDI & NDI infrastructure connecting cinema line camera bodies.' },
    { name: 'LIVE VISION MIXING', detail: 'ATEM Constellation Hardware Switchers', desc: 'Hardware vision mixing with multi-viewer monitoring, macro automation, and instant replay.' },
    { name: 'PROFESSIONAL AUDIO', detail: 'EBU R128 Compliant Dante Networks', desc: 'Concert and speech audio mixed via digital consoles with -14.0 LUFS loudness mastering.' },
    { name: 'CUSTOM RTMP', detail: 'SRT & Encrypted RTMPS Protocols', desc: 'Low-latency secure stream distribution to intranet, YouTube, LinkedIn, or custom paywalls.' },
    { name: 'LOCAL RECORDING', detail: 'Apple ProRes 422 ISO + Program Master', desc: 'Simultaneous high-bitrate recording per camera feed directly to NVMe RAID storage.' },
    { name: 'LIVE GRAPHICS', detail: 'HTML5 & Alpha Channel Animated Lower Thirds', desc: 'Dynamic titles, lower-third tickers, speaker labels, and audience polling overlays.' },
    { name: 'LED INTEGRATION', detail: 'Novastar Signal Processors & Low-Latency IMAG', desc: 'Synchronized return video feeds mapping directly to stage LED walls and confidence monitors.' },
    { name: 'REMOTE PRODUCTION', detail: 'Bi-Directional Caller Ingest & Green Rooms', desc: 'Seamless integration of remote international speakers into live stage broadcasts.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0D0D0E] relative border-b border-zinc-800/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold mb-3">
            TECHNICAL ENGINEERING
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
            ENGINEERED FOR<br />
            <span className="text-[#0066FF]">THE LIVE MOMENT.</span>
          </h2>
        </div>

        {/* Technical Specification Sheet Rack Grid */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Specification Header bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-zinc-800 gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-white font-bold tracking-wider uppercase">D1 BROADCAST SPECIFICATION SHEET</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <span>DOC REF: D1-SPEC-2026</span>
              <span className="text-zinc-600">|</span>
              <span className="text-[#0066FF]">VERIFIED OPERATIONAL</span>
            </div>
          </div>

          {/* Grid of 8 Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specsList.map((spec, idx) => (
              <div
                key={spec.name}
                className="p-5 bg-zinc-900/90 border border-zinc-800 rounded flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#0066FF] font-bold">
                      SPEC 0{idx + 1}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">
                      ACTIVE
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold uppercase tracking-wide text-white mb-1">
                    {spec.name}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 font-bold mb-3">
                    {spec.detail}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>LATENCY: &lt; 1.5s</span>
                  <span className="text-emerald-400">READY</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Broadcast Telemetry Status Banner */}
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs text-zinc-400">
            <div className="bg-zinc-900/60 p-3 rounded border border-zinc-800/80">
              <p className="text-[10px] text-zinc-500 uppercase">SIGNAL INFRASTRUCTURE</p>
              <p className="text-white font-bold mt-0.5">12G-SDI / NDI HX</p>
            </div>
            <div className="bg-zinc-900/60 p-3 rounded border border-zinc-800/80">
              <p className="text-[10px] text-zinc-500 uppercase">AUDIO STANDARDS</p>
              <p className="text-white font-bold mt-0.5">EBU R128 (-14 LUFS)</p>
            </div>
            <div className="bg-zinc-900/60 p-3 rounded border border-zinc-800/80">
              <p className="text-[10px] text-zinc-500 uppercase">BONDING REDUNDANCY</p>
              <p className="text-white font-bold mt-0.5">5G + Satellite SRT</p>
            </div>
            <div className="bg-zinc-900/60 p-3 rounded border border-zinc-800/80">
              <p className="text-[10px] text-zinc-500 uppercase">MASTER ARCHIVE</p>
              <p className="text-white font-bold mt-0.5">Apple ProRes 422 ISO</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
