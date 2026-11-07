import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2, Terminal, ArrowUpRight } from 'lucide-react';

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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#about' },
    { name: '6 Tracks', href: '#tracks' },
    { name: '20H Schedule', href: '#schedule' },
    { name: 'Prizes & Swag', href: '#prizes' },
    { name: 'Venue', href: '#venue' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 font-mono ${
        scrolled
          ? 'bg-[#070c0a]/95 backdrop-blur-md border-b border-geeko-500/25 shadow-xl shadow-black/50'
          : 'bg-[#070c0a]/80 backdrop-blur-sm border-b border-white/[0.08]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-4">
        
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0b1f16] border border-geeko-500/40 p-1.5 flex items-center justify-center group-hover:border-geeko-400 group-hover:shadow-[0_0_15px_rgba(115,186,37,0.4)] transition-all">
            <img 
              src={`${import.meta.env.BASE_URL}geeko.svg`}
              alt="openSUSE" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-sans font-black text-white text-base tracking-tight">
                <span className="lowercase">open</span><span className="uppercase text-geeko-400">SUSE</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                India
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight mt-0.5 flex items-center gap-1.5">
              <span>Bengaluru Connect '27</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-geeko-400 animate-pulse"></span>
            </div>
          </div>
        </a>

        {/* Minimalist Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-geeko-400 transition-colors uppercase tracking-wider py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-geeko-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0 text-xs font-bold">
          {/* Proposal OS & Bootloader link */}
          <a
            href={`${import.meta.env.BASE_URL}proposal/`}
            className="px-3 py-2 rounded-lg bg-[#0d261b] hover:bg-[#123626] text-geeko-300 border border-geeko-500/40 hover:border-geeko-400 flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(115,186,37,0.15)]"
            title="Launch 18-Page Proposal OS with GRUB Bootloader"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-geeko-400 animate-ping"></span>
            <span>PROPOSAL OS</span>
            <ArrowUpRight className="w-3 h-3 text-geeko-400" />
          </a>

          {/* Hackathon Button */}
          <button
            onClick={onOpenHackathonRegister}
            className="px-3.5 py-2 rounded-lg bg-[#0c1411] hover:bg-[#14221c] border border-slate-700 hover:border-geeko-500/60 text-slate-200 hover:text-white uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-geeko-400" />
            <span>20H HACKATHON</span>
          </button>

          {/* Claim Pass CTA */}
          <button
            onClick={onOpenDay1Register}
            className="px-4 py-2 rounded-lg bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-black uppercase tracking-wider shadow-[0_0_15px_rgba(115,186,37,0.35)] hover:shadow-[0_0_20px_rgba(115,186,37,0.55)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-obsidian-950" />
            <span>CLAIM PASS</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-geeko-500 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-geeko-400" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070c0a]/98 border-b border-geeko-500/30 px-5 pt-3 pb-6 space-y-3 text-xs font-mono">
          <div className="flex flex-col space-y-1.5 border-b border-slate-800 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-geeko-400 py-1.5 uppercase tracking-wider flex items-center justify-between"
              >
                <span>// {link.name}</span>
                <span className="text-geeko-500">→</span>
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
              <span>⚡ VIEW 18-PAGE PROPOSAL OS &amp; BOOT</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHackathonRegister();
                }}
                className="py-2.5 rounded-lg bg-[#0c1411] border border-slate-700 text-white font-bold text-xs uppercase"
              >
                20H HACKATHON
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDay1Register();
                }}
                className="py-2.5 rounded-lg bg-geeko-500 text-obsidian-950 font-black text-xs uppercase"
              >
                CLAIM PASS
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
