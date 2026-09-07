import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Radio, Volume2, ShieldCheck, Activity, Tv, Monitor } from 'lucide-react';

interface HeroProps {
  onPlanProductionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanProductionClick }) => {
  const [activeCam, setActiveCam] = useState<number>(1);
  const [previewCam, setPreviewCam] = useState<number>(2);
  const [showLowerThird, setShowLowerThird] = useState<boolean>(true);
  const [audioLevel, setAudioLevel] = useState<number>(82);

  // Simulate audio VU meter fluctuation for broadcast realism
  useEffect(() => {
    const interval = setInterval(() => {
      setAudioLevel(Math.floor(75 + Math.random() * 20));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const camFeeds = [
    {
      id: 1,
      name: 'CAM 1 · MAIN STAGE WIDE',
      type: 'LIVE PROGRAM',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
      lens: 'Canon 24-70mm f/2.8 II · 4K 60fps',
    },
    {
      id: 2,
      name: 'CAM 2 · KEYNOTE TIGHT',
      type: 'PREVIEW',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
      lens: 'Sony 70-200mm f/2.8 GM · ISO 800',
    },
    {
      id: 3,
      name: 'CAM 3 · VISION CONTROL ROOM',
      type: 'ISO CAM',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
      lens: 'ATEM Constellation Multi-View',
    },
    {
      id: 4,
      name: 'CAM 4 · AUDIENCE & LED RIG',
      type: 'ISO CAM',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
      lens: 'Sony FX6 Wireless Teradek Feed',
    },
  ];

  const handleCut = (camId: number) => {
    if (camId !== activeCam) {
      setPreviewCam(activeCam);
      setActiveCam(camId);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
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
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display uppercase tracking-tight text-white leading-[0.92]">
                LIVE EVENTS.
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display uppercase tracking-tight text-[#0066FF] leading-[0.92]">
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

          {/* Right Column: Interactive Live Broadcast Production Monitor Simulator */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 sm:p-4 shadow-2xl relative"
            >
              {/* Top Studio Monitor Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 bg-[#0066FF] rounded-full tally-live-pulse" />
                  <span className="text-white font-bold tracking-wider">LIVE PROGRAM FEED</span>
                  <span className="text-zinc-500">|</span>
                  <span className="text-zinc-400">SRT STREAM 01</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <span className="text-emerald-400 font-semibold">12.8 Mbps</span>
                  <span className="hidden sm:inline">1080p60</span>
                </div>
              </div>

              {/* Main Active Feed Display */}
              <div className="relative aspect-video bg-black rounded overflow-hidden border border-zinc-800 group">
                <img
                  src={camFeeds.find((c) => c.id === activeCam)?.image}
                  alt="Live Broadcast Feed"
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Broadcast Overlays */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#0066FF] text-white text-[10px] font-mono font-bold px-2 py-0.5 tracking-widest uppercase rounded">
                    LIVE
                  </span>
                  <span className="bg-black/80 backdrop-blur text-zinc-200 text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700">
                    {camFeeds.find((c) => c.id === activeCam)?.name}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur border border-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1.5">
                  <Volume2 className="w-3 h-3 text-emerald-400" />
                  <span>-14.2 LUFS</span>
                </div>

                {/* Animated Lower Third Graphic Toggle Simulation */}
                {showLowerThird && (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    className="absolute bottom-4 left-4 bg-zinc-950/95 border-l-4 border-[#0066FF] px-3.5 py-2 backdrop-blur shadow-xl max-w-[85%]"
                  >
                    <p className="text-[11px] font-mono tracking-widest text-[#0066FF] uppercase font-bold">
                      D1 STREAMS · BROADCAST GRAPHICS
                    </p>
                    <p className="text-sm font-display font-extrabold text-white tracking-wide uppercase">
                      INTERNATIONAL LIVE PRODUCTION
                    </p>
                  </motion.div>
                )}

                {/* Technical Grid Overlay Lines */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-white/5" />
                  <div className="border-r border-b border-white/5" />
                  <div className="border-b border-white/5" />
                </div>
              </div>

              {/* Vision Switcher Control Bar */}
              <div className="mt-3 pt-3 border-t border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>CAMERA SWITCHER SELECTION</span>
                  <button
                    onClick={() => setShowLowerThird(!showLowerThird)}
                    className="text-zinc-300 hover:text-white underline underline-offset-2 cursor-pointer"
                  >
                    {showLowerThird ? 'Hide Graphics' : 'Show Lower-Third'}
                  </button>
                </div>

                {/* 4 Camera Switcher Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {camFeeds.map((cam) => {
                    const isLive = cam.id === activeCam;
                    const isPreview = cam.id === previewCam && !isLive;
                    return (
                      <button
                        key={cam.id}
                        onClick={() => handleCut(cam.id)}
                        className={`relative p-2 rounded text-left font-mono transition-all duration-200 cursor-pointer ${
                          isLive
                            ? 'bg-[#0066FF] text-white ring-2 ring-blue-500 shadow-lg'
                            : isPreview
                            ? 'bg-amber-900/40 border border-amber-600 text-amber-200'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[9px] font-bold">
                          <span>CAM 0{cam.id}</span>
                          <span className="text-[8px] uppercase">
                            {isLive ? 'LIVE' : isPreview ? 'PREV' : 'ISO'}
                          </span>
                        </div>
                        <p className="text-[9px] truncate mt-1 opacity-80 font-medium">
                          {cam.name.split('·')[1] || cam.name}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Audio Telemetry Meter */}
                <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded flex items-center gap-3 text-[10px] font-mono text-zinc-400">
                  <div className="shrink-0 flex items-center gap-1">
                    <Radio className="w-3 h-3 text-[#0066FF]" />
                    <span>AUDIO BUS:</span>
                  </div>
                  <div className="flex-1 bg-zinc-950 h-2.5 rounded overflow-hidden p-0.5 flex gap-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-[#0066FF] transition-all duration-200 rounded-sm"
                      style={{ width: `${audioLevel}%` }}
                    />
                  </div>
                  <span className="shrink-0 font-bold text-zinc-200">{audioLevel}%</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
