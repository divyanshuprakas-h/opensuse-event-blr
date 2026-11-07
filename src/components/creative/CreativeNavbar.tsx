import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundManager } from '../../../proposal/utils/soundEffects';

interface CreativeNavbarProps {
  onOpenDay1Register: () => void;
  onOpenHackathonRegister: () => void;
}

export const CreativeNavbar: React.FC<CreativeNavbarProps> = ({
  onOpenDay1Register,
  onOpenHackathonRegister,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(soundManager.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundManager.toggleSound();
    setIsAudioOn(state);
  };

  const navItems = [
    { name: 'MANIFESTO', href: '#manifesto' },
    { name: '6 TRACKS', href: '#tracks' },
    { name: '20H TIMELINE', href: '#timeline' },
    { name: 'PRIZES', href: '#prizes' },
    { name: 'VENUE', href: '#venue' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'bg-[#050a08]/90 backdrop-blur-xl border-geeko-500/30 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(115,186,37,0.15)] py-2.5 px-4 sm:px-6'
            : 'bg-[#050a08]/60 backdrop-blur-md border-white/10 py-3 px-4 sm:px-6'
        } flex items-center justify-between gap-4 font-mono`}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          onClick={() => soundManager.playKeyClick()}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0b2116] border border-geeko-500/40 p-1 flex items-center justify-center group-hover:border-geeko-400 group-hover:shadow-[0_0_15px_rgba(115,186,37,0.5)] transition-all">
            <svg viewBox="0 0 16 16" className="w-5 h-5" style={{ imageRendering: 'pixelated' }}>
              <rect x="4" y="2" width="6" height="3" fill="#73ba25" />
              <rect x="2" y="5" width="10" height="6" fill="#73ba25" />
              <rect x="9" y="3" width="2" height="2" fill="#05080c" />
              <rect x="10" y="3" width="1" height="1" fill="#ffffff" />
              <rect x="12" y="6" width="3" height="2" fill="#8dd167" />
              <rect x="3" y="11" width="3" height="3" fill="#5a971c" />
              <rect x="9" y="11" width="3" height="3" fill="#5a971c" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-black text-white text-sm tracking-tight uppercase">
                openSUSE
              </span>
              <span className="text-[9px] px-1 py-0.2 bg-geeko-500/20 text-geeko-400 font-bold border border-geeko-500/30 rounded">
                BLR '27
              </span>
            </div>
            <span className="text-[9px] text-slate-400 tracking-wider">
              BENGALURU CONNECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-wider text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => soundManager.playKeyClick()}
              className="hover:text-geeko-400 transition-colors uppercase tracking-widest relative group py-1"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-geeko-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              isAudioOn
                ? 'bg-geeko-500/20 border-geeko-400 text-geeko-300 shadow-[0_0_10px_rgba(115,186,37,0.3)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white'
            }`}
            title="Toggle 8-bit Audio Atmosphere"
          >
            {isAudioOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Proposal & Boot OS Gateway */}
          <a
            href={`${import.meta.env.BASE_URL}proposal/`}
            onClick={() => soundManager.playBootBeep()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d261b] hover:bg-geeko-500/20 text-geeko-300 border border-geeko-500/40 text-xs font-bold tracking-wider transition-all shadow-[0_0_12px_rgba(115,186,37,0.2)] hover:shadow-[0_0_18px_rgba(115,186,37,0.4)]"
            title="Launch Interactive 18-Page Proposal OS with GRUB Bootloader"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-geeko-400 animate-ping"></span>
            <span className="font-mono text-[11px]">PROPOSAL OS</span>
            <ArrowUpRight className="w-3 h-3 text-geeko-400" />
          </a>

          {/* Claim Free Pass CTA */}
          <button
            onClick={() => {
              soundManager.playSuccess();
              onOpenDay1Register();
            }}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-display font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(115,186,37,0.4)] hover:shadow-[0_0_25px_rgba(115,186,37,0.7)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 fill-obsidian-950" />
            <span>GET PASS</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-geeko-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-[#06100c]/95 backdrop-blur-2xl border border-geeko-500/30 p-5 font-mono shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-2 border-b border-white/10 pb-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    soundManager.playKeyClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-slate-300 hover:text-geeko-400 text-sm font-bold tracking-wider py-1.5 uppercase flex items-center justify-between"
                >
                  <span>// {item.name}</span>
                  <span className="text-geeko-500 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`${import.meta.env.BASE_URL}proposal/`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-[#0d261b] text-geeko-300 border border-geeko-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-geeko-400" />
                <span>⚡ LAUNCH PROPOSAL OS &amp; BOOT</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHackathonRegister();
                }}
                className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider"
              >
                HACKATHON REGISTRATION (20H)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
