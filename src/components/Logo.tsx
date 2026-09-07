import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'full' | 'mark-only' | 'compact';
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  variant = 'full',
  lightText = true,
}) => {
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-3">
        {/* Official D1 Brand Emblem SVG */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg
            width="44"
            height="36"
            viewBox="0 0 110 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,102,255,0.3)]"
          >
            <defs>
              {/* Metallic Silver Gradient for 'D' */}
              <linearGradient id="silverDGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              {/* Electric Blue Gradient for '1' */}
              <linearGradient id="blue1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A3FF" />
                <stop offset="60%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#0040C8" />
              </linearGradient>

              {/* Cyan Pulse Gradient */}
              <linearGradient id="cyanPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#0066FF" />
              </linearGradient>
            </defs>

            {/* Stylized 'D' in metallic silver with open back & sleek curve */}
            <path
              d="M 12 18 L 38 18 C 54 18 64 27 64 45 C 64 63 54 72 38 72 L 12 72 L 20 58 L 36 58 C 45 58 50 52 50 45 C 50 38 45 32 36 32 L 20 32 Z"
              fill="url(#silverDGrad)"
            />

            {/* Audio Pulse Waveform running through the 'D' */}
            <path
              d="M 2 45 L 24 45 L 28 32 L 32 58 L 36 38 L 40 50 L 44 45 L 68 45"
              stroke="url(#cyanPulseGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Slanted Arrowhead '1' in Vibrant Electric Blue */}
            <path
              d="M 72 82 L 86 12 L 102 8 L 86 82 Z"
              fill="url(#blue1Grad)"
            />
            {/* Top slanted flare cap of '1' */}
            <path
              d="M 68 36 L 86 12 L 102 8 Z"
              fill="#00D4FF"
              opacity="0.9"
            />
          </svg>
        </div>

        {variant !== 'mark-only' && (
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline font-display">
              {/* "D" in silver */}
              <span
                className={`font-black italic text-2xl md:text-3xl tracking-tight ${
                  lightText ? 'text-slate-200' : 'text-slate-900'
                }`}
              >
                D
              </span>
              {/* "1" in electric blue */}
              <span className="font-black italic text-2xl md:text-3xl tracking-tight text-[#0066FF] mr-2">
                1
              </span>
              {/* "STREAMS" in expanded italic silver text */}
              <span
                className={`font-black italic tracking-[0.18em] text-lg md:text-xl uppercase ${
                  lightText ? 'text-white' : 'text-slate-800'
                }`}
              >
                STREAMS
              </span>
            </div>

            {variant === 'full' && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0066FF] tally-live-pulse" />
                <span className="text-[9px] font-mono tracking-[0.22em] text-zinc-400 uppercase font-semibold">
                  BROADCAST MEDIA
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {showTagline && (
        <p className="mt-2 text-[10px] font-mono tracking-[0.2em] italic text-zinc-400 uppercase font-semibold">
          BROADCAST QUALITY. ANYWHERE. ANYTIME.
        </p>
      )}
    </div>
  );
};
