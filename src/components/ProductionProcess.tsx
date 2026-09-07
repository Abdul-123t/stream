import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import { CheckCircle2 } from 'lucide-react';

export const ProductionProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#ECEBE6] text-[#111216] relative border-b border-zinc-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.2em] text-[#2563EB] uppercase font-bold mb-3">
            THE WORKFLOW
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-[#111216] leading-[0.95]">
            FROM BRIEF<br />
            <span className="text-[#2563EB]">TO BROADCAST.</span>
          </h2>
        </div>

        {/* Horizontal Process Steps Bar for Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {PROCESS_STEPS.map((step, index) => {
            const isCurrent = activeStep === index;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-lg border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  isCurrent
                    ? 'bg-[#18191E] border-[#2563EB] text-white shadow-xl'
                    : 'bg-white border-zinc-300 hover:border-zinc-400 text-[#111216]'
                }`}
              >
                {/* Accent top line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-colors ${
                    isCurrent ? 'bg-[#2563EB]' : 'bg-transparent'
                  }`}
                />

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-mono ${isCurrent ? 'text-blue-400' : 'text-zinc-400'}`}>
                    {step.number}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isCurrent ? 'bg-[#2563EB]/20 text-blue-300 font-bold' : 'bg-zinc-100 text-zinc-600 font-semibold'}`}>
                    PHASE {index + 1}
                  </span>
                </div>

                <h3 className={`text-base font-display font-bold uppercase tracking-wide mb-2 ${isCurrent ? 'text-white' : 'text-[#111216]'}`}>
                  {step.title}
                </h3>

                <p className={`text-xs line-clamp-2 ${isCurrent ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Inspector */}
        <div className="bg-[#16171D] text-white border border-zinc-800 rounded-lg p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black font-mono text-[#2563EB]">
                  {PROCESS_STEPS[activeStep].number}
                </span>
                <div className="h-6 w-[1px] bg-zinc-800" />
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-bold">
                  {PROCESS_STEPS[activeStep].keyActivity}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3">
                  STAGE DELIVERABLES & VERIFICATIONS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs font-mono text-zinc-300 bg-zinc-900/90 p-2.5 rounded border border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side workflow progress visualizer */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>BROADCAST MILESTONE PIPELINE</span>
                <span className="text-blue-400 font-bold">{Math.round(((activeStep + 1) / 5) * 100)}% COMPLETE</span>
              </div>

              <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden p-0.5 border border-zinc-800">
                <div
                  className="h-full bg-[#2563EB] transition-all duration-500 rounded-full"
                  style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                />
              </div>

              <div className="space-y-2 pt-2">
                {PROCESS_STEPS.map((s, idx) => (
                  <div
                    key={s.number}
                    className={`flex items-center justify-between text-xs font-mono px-3 py-2 rounded transition-colors ${
                      idx === activeStep
                        ? 'bg-[#2563EB]/20 border border-[#2563EB] text-white font-bold'
                        : idx < activeStep
                        ? 'text-zinc-500 line-through opacity-60'
                        : 'text-zinc-600'
                    }`}
                  >
                    <span>{s.number} — {s.title}</span>
                    <span>{idx < activeStep ? 'DONE' : idx === activeStep ? 'IN PROGRESS' : 'PENDING'}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
