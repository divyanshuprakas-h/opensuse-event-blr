import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Mic, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenDay1Register: () => void;
  onOpenHackathonRegister: () => void;
  onOpenCFP: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDay1Register,
  onOpenHackathonRegister,
  onOpenCFP,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Hackathon', href: '#hackathon' },
    { name: 'Venue', href: '#venue' },
    { name: 'Budget', href: '#budget' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-obsidian-950/95 backdrop-blur-md border-b border-geeko-500/25 shadow-lg shadow-black/40'
          : 'bg-obsidian-950/90 backdrop-blur-sm border-b border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between">
        
        {/* Brand Logo & Event Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-pine-950 border border-geeko-500/40 p-1.5 flex items-center justify-center transition-all group-hover:border-geeko-400 group-hover:shadow-[0_0_12px_rgba(115,186,37,0.3)]">
            <img 
              src={`${import.meta.env.BASE_URL}geeko.svg`}
              alt="openSUSE Geeko" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-left font-mono">
            <div className="flex items-center gap-1.5 text-[10px] text-geeko-400 font-bold uppercase tracking-widest leading-none">
              <span>openSUSE India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-geeko-400 animate-pulse" />
            </div>
            <div className="text-base font-black tracking-tight text-white leading-tight">
              Bengaluru Connect <span className="text-geeko-400 font-mono text-sm font-bold">'27</span>
            </div>
          </div>
        </a>

        {/* Clean, Well-Spaced Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-mono text-xs text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-geeko-400 transition-colors uppercase tracking-wider py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-geeko-400 after:absolute after:bottom-0 after:left-0 after:transition-all font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Balanced Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 font-mono">
          <button
            onClick={onOpenCFP}
            className="px-3 py-1.5 text-xs border border-slate-700/80 hover:border-geeko-500/80 text-slate-300 hover:text-white bg-obsidian-900/80 rounded-md transition-all flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <Mic className="w-3.5 h-3.5 text-geeko-400" />
            <span>Submit CFP</span>
          </button>

          <button
            onClick={onOpenHackathonRegister}
            className="px-3.5 py-1.5 text-xs border border-pine-700/80 hover:border-geeko-400 text-geeko-300 hover:text-white bg-pine-950/80 rounded-md transition-all flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <Code2 className="w-3.5 h-3.5 text-geeko-400" />
            <span>Hackathon</span>
          </button>

          <button
            onClick={onOpenDay1Register}
            className="px-4 py-1.5 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase tracking-wider rounded-md shadow-[0_0_15px_rgba(115,186,37,0.3)] hover:shadow-[0_0_20px_rgba(115,186,37,0.5)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Register (Free)</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-geeko-400" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950 border-b border-geeko-500/40 px-5 pt-4 pb-6 space-y-3 font-mono text-sm animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 border-b border-slate-800 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-geeko-400 py-1.5 uppercase tracking-wider"
              >
                // {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCFP();
              }}
              className="w-full py-2.5 bg-obsidian-900 border border-slate-700 text-geeko-400 font-bold text-xs uppercase tracking-wider rounded-md text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Submit Talk Proposal (CFP)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHackathonRegister();
              }}
              className="w-full py-2.5 bg-pine-950 border border-geeko-500 text-geeko-300 font-bold text-xs uppercase tracking-wider rounded-md text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-geeko-400" />
              <span>Apply for Day 2 Hackathon</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDay1Register();
              }}
              className="w-full py-3 bg-geeko-500 text-black font-black text-xs uppercase tracking-wider rounded-md text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Register for Day 1 (Free)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
