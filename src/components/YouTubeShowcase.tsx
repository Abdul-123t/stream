import React from 'react';
import { Play, ArrowRight, Radio, ExternalLink, Instagram, Phone, Mail, MessageSquare } from 'lucide-react';

export const YouTubeShowcase: React.FC = () => {
  const officialChannels = [
    {
      name: 'YouTube',
      handle: 'D1 STREAMS OFFICIAL',
      action: 'WATCH ON YOUTUBE',
      url: 'https://youtube.com/@oluwadamilolaolayinka-fk2ry',
      color: 'bg-red-600/20 text-red-400 border-red-500/30 hover:border-red-500',
      badge: 'OFFICIAL BROADCAST CHANNEL',
      icon: (
        <svg className="w-5 h-5 fill-current text-red-500 shrink-0" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@d1_streams',
      action: 'FOLLOW ON INSTAGRAM',
      url: 'https://instagram.com/d1_streams',
      color: 'bg-pink-600/20 text-pink-400 border-pink-500/30 hover:border-pink-500',
      badge: 'BTS & MEDIA COVERAGE',
      icon: <Instagram className="w-5 h-5 text-pink-500 shrink-0" />,
    },
    {
      name: 'TikTok',
      handle: '@d1_streams',
      action: 'WATCH ON TIKTOK',
      url: 'https://tiktok.com/@d1_streams',
      color: 'bg-cyan-600/20 text-cyan-400 border-cyan-500/30 hover:border-cyan-500',
      badge: 'HIGHLIGHTS & CLIPS',
      icon: (
        <svg className="w-5 h-5 fill-current text-cyan-400 shrink-0" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.82.12V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.04z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp Direct',
      handle: '+44 7918 916398',
      action: 'CHAT ON WHATSAPP',
      url: 'https://wa.me/447918916398',
      color: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30 hover:border-emerald-500',
      badge: 'IMMEDIATE ENQUIRIES',
      icon: (
        <svg className="w-5 h-5 fill-current text-emerald-500 shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="youtube-channel" className="py-20 lg:py-28 bg-[#090A0D] border-b border-zinc-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Conceptual Workflow Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/80 text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white font-bold">OFFICIAL MEDIA CHANNEL</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 font-bold">
            <span className="text-zinc-300">LIVE EVENTS</span>
            <span className="text-[#0066FF]">→</span>
            <span className="text-zinc-300">PRODUCTION</span>
            <span className="text-[#0066FF]">→</span>
            <span className="text-zinc-300">BROADCAST</span>
            <span className="text-red-500">→</span>
            <span className="text-white font-black">CONTENT</span>
          </div>
        </div>

        {/* Feature Hero Card */}
        <div className="bg-[#121319] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-12">
          
          {/* Left Visual Banner */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] bg-black overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
              alt="D1 Streams Official YouTube Channel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent hidden sm:block" />

            {/* Live Broadcast Badge Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2.5">
              <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded shadow-lg flex items-center gap-1.5">
                <Radio className="w-3 h-3 animate-pulse" />
                YOUTUBE BROADCAST
              </span>
              <span className="px-2.5 py-1 bg-black/80 backdrop-blur border border-zinc-700 text-zinc-300 text-[10px] font-mono rounded">
                D1 STREAMS
              </span>
            </div>

            {/* Center Play Graphic */}
            <a
              href="https://youtube.com/@oluwadamilolaolayinka-fk2ry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-red-600/90 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl border-2 border-white/20 group-hover:bg-red-600"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
            </a>

            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-zinc-300 flex items-center justify-between bg-black/75 backdrop-blur p-3 rounded border border-zinc-800">
              <span className="font-bold uppercase text-white">LIVE EVENTS & PRODUCTIONS IN ACTION</span>
              <span className="text-red-400 font-bold hidden sm:inline">OFFICIAL YOUTUBE CHANNEL</span>
            </div>
          </div>

          {/* Right Copy & CTA Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-800/60 rounded text-[11px] font-mono text-red-400 uppercase font-bold tracking-widest">
                <svg className="w-3.5 h-3.5 fill-current text-red-500" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>WATCH THE PRODUCTION</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black font-display uppercase text-white tracking-tight leading-[1.05]">
                SEE D1 STREAMS IN ACTION ACROSS LIVE EVENTS, PRODUCTIONS AND EXPERIENCES.
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
                Explore official coverage, multi-camera switching, live event broadcasts, and behind-the-scenes engineering across our YouTube media channel.
              </p>
            </div>

            {/* Direct Channel Button */}
            <div className="space-y-3 pt-2">
              <a
                href="https://youtube.com/@oluwadamilolaolayinka-fk2ry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-red-700 transition-colors shadow-2xl rounded active:scale-98"
              >
                <span>WATCH ON YOUTUBE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] font-mono text-zinc-500 text-center uppercase tracking-wider">
                OFFICIAL D1 STREAMS MEDIA CHANNEL
              </p>
            </div>

          </div>

        </div>

        {/* 4 Official Social & Contact Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {officialChannels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#121319] border border-zinc-800/90 rounded-lg flex flex-col justify-between space-y-4 hover:border-zinc-600 transition-all group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded">
                  {ch.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">
                  {ch.name}
                </span>
              </div>

              <div>
                <p className="text-xs font-mono font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
                  {ch.handle}
                </p>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                  {ch.badge}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono font-bold text-zinc-300 group-hover:text-white">
                <span>{ch.action}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
