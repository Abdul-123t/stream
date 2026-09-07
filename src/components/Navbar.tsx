import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Radio, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onPlanProductionClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanProductionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Events', href: '#events' },
    { name: 'How We Work', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="group focus:outline-none focus:ring-1 focus:ring-[#0066FF]">
              <Logo variant="full" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-8 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] lg:text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#0066FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 shrink-0 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Section */}
            <div className="hidden lg:flex items-center shrink-0">
              {/* Primary CTA */}
              <button
                onClick={onPlanProductionClick}
                className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-white text-black text-[10px] lg:text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#0066FF] hover:text-white transition-all duration-200 shadow-lg active:scale-95 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <span>PLAN YOUR PRODUCTION</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-3 shrink-0">
              <button
                onClick={onPlanProductionClick}
                className="px-3 py-1.5 bg-[#0066FF] text-white text-[10px] font-mono font-bold tracking-wider uppercase rounded"
              >
                PLAN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0B] pt-24 px-6 pb-8 flex flex-col justify-between border-b border-zinc-800 md:hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 w-fit">
                <Radio className="w-3.5 h-3.5 text-[#0066FF] animate-pulse" />
                <span>UK BASED · GLOBAL PRODUCTION</span>
              </div>

              <div className="flex flex-col space-y-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-display font-bold uppercase tracking-wider text-zinc-200 hover:text-[#0066FF] py-2 border-b border-zinc-800/50 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanProductionClick();
                }}
                className="w-full py-3.5 bg-[#0066FF] text-white text-xs font-mono font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <span>PLAN YOUR PRODUCTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 gap-2.5 pt-2 text-xs font-mono text-zinc-300">
                <a href="tel:+447918916398" className="flex items-center gap-2.5 py-1 hover:text-[#0066FF] transition-colors">
                  <Phone className="w-4 h-4 text-[#0066FF]" />
                  <span>+44 7918 916398</span>
                </a>
                <a href="mailto:dammyondnet@gmail.com?subject=Production%20Enquiry%20%E2%80%94%20D1%20Streams" className="flex items-center gap-2.5 py-1 hover:text-[#0066FF] transition-colors">
                  <Mail className="w-4 h-4 text-[#0066FF]" />
                  <span className="underline underline-offset-2">dammyondnet@gmail.com</span>
                </a>
                <a href="https://wa.me/447918916398" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 py-1 hover:text-emerald-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-400 font-bold">WhatsApp Direct</span>
                </a>
                <a href="https://youtube.com/@oluwadamilolaolayinka-fk2ry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 py-1 hover:text-red-400 transition-colors">
                  <svg className="w-4 h-4 fill-current text-red-500 shrink-0" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-red-400 font-bold">WATCH ON YOUTUBE</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
