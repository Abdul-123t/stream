import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070708] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="full" showTagline={true} />

            <div className="pt-2 text-zinc-400 space-y-1">
              <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                UK BASED · GLOBAL PRODUCTION
              </p>
              <p className="text-[11px] text-zinc-500 max-w-sm font-sans leading-relaxed">
                International live broadcast, multi-camera switching, and digital media production established in 2021.
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-2">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Events Covered</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">How We Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About D1 Streams</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-white transition-colors">Production Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-2">
              DIRECT CONTACT & SOCIAL
            </p>
            
            <div className="space-y-3 text-xs">
              <a
                href="tel:+447918916398"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-[#0066FF] transition-colors group py-1"
              >
                <Phone className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span className="font-mono text-xs">+44 7918 916398</span>
              </a>

              <a
                href="mailto:dammyondnet@gmail.com?subject=Production%20Enquiry%20%E2%80%94%20D1%20Streams"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-[#0066FF] transition-colors group py-1"
              >
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span className="font-mono text-xs underline underline-offset-2">dammyondnet@gmail.com</span>
              </a>

              <a
                href="https://wa.me/447918916398"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group py-1"
              >
                <svg className="w-4 h-4 fill-current text-emerald-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span className="font-mono text-xs">WhatsApp Direct Chat</span>
              </a>

              <div className="pt-3 border-t border-zinc-800/80 space-y-2.5">
                <a
                  href="https://instagram.com/d1_streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors py-1 group"
                >
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                  <span className="font-mono text-xs">Instagram — @d1_streams</span>
                </a>

                <a
                  href="https://tiktok.com/@d1_streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors py-1 group"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.82.12V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.04z"/>
                  </svg>
                  <span className="font-mono text-xs">TikTok — @d1_streams</span>
                </a>

                <a
                  href="https://youtube.com/@oluwadamilolaolayinka-fk2ry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors py-1 group"
                >
                  <svg className="w-4 h-4 fill-current text-red-500 shrink-0" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-mono text-xs">YouTube — Official Channel</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 D1 STREAMS. All rights reserved.</p>

          <p className="text-zinc-500 text-center sm:text-right font-mono">
            Designed & engineered by NAMACO TECHNOLOGY NIGERIA LIMITED
          </p>
        </div>

      </div>
    </footer>
  );
};
