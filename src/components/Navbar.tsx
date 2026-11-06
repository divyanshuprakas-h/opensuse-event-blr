import React, { useState } from 'react';
import { Menu, X, Terminal, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

interface NavbarProps {
  onOpenPreRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPreRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: '3-Phase Structure', href: '#phases' },
    { name: 'Hackathon Tracks', href: '#hackathon' },
    { name: 'Dates & Venue', href: '#venue' },
    { name: 'Budget & Sponsors', href: '#budget' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Brutalist Ticker / Announcement Bar */}
      <div className="bg-geeko-500 text-black text-xs font-mono font-bold tracking-wider py-1.5 px-4 border-b-2 border-black flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-black animate-ping" />
          <span>[STATUS: PRE-REGISTRATION LIVE]</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">DATES ANNOUNCING SOON // JAN 2027 // VENUE: NEWTON SCHOOL OF TECHNOLOGY, BENGALURU</span>
        </div>
        <div className="flex items-center gap-3 font-semibold text-[11px]">
          <span className="bg-black text-geeko-400 px-2 py-0.5 uppercase tracking-widest text-[10px]">
            openSUSE India
          </span>
          <button 
            onClick={onOpenPreRegister}
            className="underline hover:text-white transition-colors cursor-pointer"
          >
            Claim Early Priority Pass →
          </button>
        </div>
      </div>

      {/* Main Brutalist Header */}
      <header className="sticky top-0 z-40 bg-obsidian-950/95 backdrop-blur-md border-b-2 border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 bg-pine-900 border-2 border-geeko-500 flex items-center justify-center p-1.5 shadow-[3px_3px_0px_0px_#73ba25] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_0px_#73ba25] transition-all">
              <img 
                src="/geeko.svg" 
                alt="openSUSE Geeko Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-geeko-400 font-bold">
                  openSUSE India
                </span>
                <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-1.5 py-0.2 border border-slate-700">
                  '27
                </span>
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center">
                Bengaluru Connect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-geeko-400 transition-colors uppercase tracking-wider py-1 border-b border-transparent hover:border-geeko-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#terminal"
              className="px-3 py-2 text-xs font-mono border border-slate-700 hover:border-geeko-500 text-slate-300 hover:text-geeko-400 bg-obsidian-900 transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-geeko-400" />
              <span>zypper cli</span>
            </a>
            <button
              onClick={onOpenPreRegister}
              className="px-5 py-2.5 bg-geeko-500 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Pre-Register Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border-2 border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-950 border-b-2 border-geeko-500 px-4 pt-4 pb-6 space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-geeko-400 py-1.5 uppercase border-b border-slate-800"
              >
                // {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreRegister();
                }}
                className="w-full py-3 bg-geeko-500 text-black font-mono font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#ffffff] text-center"
              >
                Pre-Register for Updates
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
