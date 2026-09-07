import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0A0A0B] relative border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
            BROADCAST FREQUENCIES & LOGISTICS
          </h2>

          <p className="text-xs font-mono text-zinc-400 max-w-lg mx-auto">
            Clear answers regarding equipment capabilities, international travel, streaming workflows, and booking timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-lg transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-950 border-[#0066FF]'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-[#0066FF]">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-display font-bold uppercase text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0066FF]' : 'text-zinc-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-zinc-300 font-normal leading-relaxed border-t border-zinc-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
