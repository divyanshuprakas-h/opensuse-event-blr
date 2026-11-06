import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenDay1Register: () => void;
  onOpenHackathonRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDay1Register,
  onOpenHackathonRegister,
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
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Venue', href: '#venue' },
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
      {/* Full width navbar: Brand shifted far left, CTAs shifted far right */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 h-16 sm:h-[70px] flex items-center justify-between">
        
        {/* Brand Logo & Event Title on the far left */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-pine-950/90 border border-geeko-500/50 p-1 flex items-center justify-center transition-all group-hover:border-geeko-400 group-hover:shadow-[0_0_15px_rgba(115,186,37,0.35)]">
            <img 
              src={`${import.meta.env.BASE_URL}geeko.svg`}
              alt="openSUSE" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-left font-mono">
            <div className="flex items-center gap-1.5 text-[10px] text-geeko-400 font-bold uppercase tracking-widest leading-none">
              <span>openSUSE India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-geeko-400 animate-pulse" />
            </div>
            <div className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
              Bengaluru Connect <span className="text-geeko-400 font-mono text-sm font-bold">'27</span>
            </div>
          </div>
        </a>

        {/* Clean, Well-Spaced Desktop Nav Links in Center */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 font-mono text-xs text-slate-300">
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

        {/* Brutalist Action CTAs on the far right (matching screenshot) */}
        <div className="hidden sm:flex items-center gap-3 font-mono shrink-0">
          <button
            onClick={onOpenHackathonRegister}
            className="px-4 py-2 bg-obsidian-900 hover:bg-pine-950 border-2 border-geeko-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#173f35] hover:shadow-[1px_1px_0px_0px_#173f35] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5 cursor-pointer"
            title="Register for Day 2 Hackathon separately"
          >
            <Code2 className="w-3.5 h-3.5 text-geeko-400" />
            <span>HACKATHON</span>
          </button>

          <button
            onClick={onOpenDay1Register}
            className="px-4 py-2 bg-geeko-500 hover:bg-geeko-400 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5 cursor-pointer"
            title="Register for Day 1 Conference Pass (Free)"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>DAY 1 PASS</span>
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

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHackathonRegister();
              }}
              className="w-full py-2.5 bg-obsidian-900 border-2 border-geeko-500 text-white font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#173f35] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-geeko-400" />
              <span>HACKATHON (DAY 2)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDay1Register();
              }}
              className="w-full py-3 bg-geeko-500 text-black border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#ffffff] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>DAY 1 PASS (FREE)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
