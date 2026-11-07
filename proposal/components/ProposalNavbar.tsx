import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';

interface ProposalNavbarProps {
  onReboot: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  isCrtEnabled: boolean;
  setIsCrtEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const ProposalNavbar: React.FC<ProposalNavbarProps> = ({
  onReboot,
  activeSection,
  setActiveSection,
  isCrtEnabled,
  setIsCrtEnabled,
}) => {
  const [isAudioOn, setIsAudioOn] = useState(soundManager.enabled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const state = soundManager.toggleSound();
    setIsAudioOn(state);
  };

  const navLinks = [
    { id: 'hud', label: '01. Executive HUD' },
    { id: 'tracks', label: '02. 6 Tracks' },
    { id: 'agenda', label: '03. 20H Agenda' },
    { id: 'arcade', label: '04. Arcade & Quest' },
    { id: 'judging', label: '05. Demo & Judging' },
    { id: 'budget', label: '06. Budget & Sponsors' },
    { id: 'venue', label: '07. Venue & Operations' },
    { id: 'timeline', label: '08. Timeline & Sign-off' },
  ];

  const handleNavClick = (id: string) => {
    soundManager.playKeyClick();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#05080c]/90 backdrop-blur-md border-b border-geeko-500/20 text-[#f0e8ff]">
      {/* Top telemetry status bar */}
      <div className="bg-[#030508] border-b border-geeko-500/10 px-3 py-1 text-[10px] sm:text-[11px] font-mono flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
          <div className="flex items-center gap-1.5 text-geeko-400">
            <span className="w-1.5 h-1.5 rounded-full bg-geeko-400 animate-ping"></span>
            <span className="font-bold">STATUS: DECISION-READY</span>
          </div>
          <span className="text-slate-600">|</span>
          <span>VENUE: Newton School of Technology</span>
          <span className="text-slate-600">|</span>
          <span>CAP: 250 BUILDERS</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-bold">BUDGET: ₹2,57,840</span>
        </div>

        <div className="flex items-center gap-2">
          {/* External link back to root homepage */}
          <a
            href="../"
            className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 hover:border-geeko-500"
            title="Return to main public website"
          >
            <span>← Event Site</span>
          </a>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('hud')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            {/* Pixel Geeko SVG */}
            <div className="w-9 h-9 rounded bg-[#0b1f16] border border-geeko-500/40 p-1 flex items-center justify-center group-hover:border-geeko-400 group-hover:shadow-[0_0_12px_rgba(115,186,37,0.4)] transition-all">
              <svg viewBox="0 0 16 16" className="w-7 h-7" style={{ imageRendering: 'pixelated' }}>
                <rect x="4" y="2" width="6" height="3" fill="#73ba25" />
                <rect x="2" y="5" width="10" height="6" fill="#73ba25" />
                <rect x="9" y="3" width="2" height="2" fill="#05080c" />
                <rect x="10" y="3" width="1" height="1" fill="#ffffff" />
                <rect x="12" y="6" width="3" height="2" fill="#8dd167" />
                <rect x="3" y="11" width="3" height="3" fill="#5a971c" />
                <rect x="9" y="11" width="3" height="3" fill="#5a971c" />
                <rect x="1" y="7" width="2" height="4" fill="#5a971c" />
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-geeko-400 font-mono flex items-center gap-1.5">
                <span>openSUSE INDIA</span>
                <span className="text-[9px] px-1.5 py-0.2 bg-geeko-500/20 text-geeko-300 border border-geeko-500/40 rounded">
                  2027 PROPOSAL
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">Bengaluru Connect · Final Review</div>
            </div>
          </button>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                  isActive
                    ? 'bg-geeko-500 text-obsidian-950 font-bold shadow-[0_0_10px_rgba(115,186,37,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-geeko-500/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right side quick tools */}
        <div className="flex items-center gap-2">
          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              soundManager.playKeyClick();
              setIsCrtEnabled((prev) => !prev);
            }}
            className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer flex items-center gap-1 ${
              isCrtEnabled
                ? 'bg-geeko-500/20 border-geeko-500 text-geeko-300'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Retro CRT Scanlines & Curved Screen"
          >
            <span>CRT:</span>
            <span className="font-bold">{isCrtEnabled ? 'ON' : 'OFF'}</span>
          </button>

          {/* 8-bit Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer flex items-center gap-1 ${
              isAudioOn
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Retro 8-bit Audio SFX"
          >
            <span>SFX:</span>
            <span className="font-bold">{isAudioOn ? 'ON 🔊' : 'OFF 🔇'}</span>
          </button>

          {/* Reboot Button */}
          <button
            onClick={() => {
              soundManager.playBootBeep();
              onReboot();
            }}
            className="px-2.5 py-1 text-[11px] font-mono bg-geeko-500 text-obsidian-950 hover:bg-geeko-400 font-bold rounded shadow-[0_0_12px_rgba(115,186,37,0.3)] transition-all cursor-pointer flex items-center gap-1"
            title="Trigger Linux Kernel & GRUB Bootloader sequence"
          >
            <span>⚡ Reboot</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded bg-slate-900 border border-slate-700 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-geeko-500/20 bg-[#080d14] px-4 py-3 space-y-1 font-mono text-xs">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3 py-2 rounded ${
                activeSection === link.id
                  ? 'bg-geeko-500 text-obsidian-950 font-bold'
                  : 'text-slate-300 hover:bg-geeko-500/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <a href="../" className="text-geeko-400 underline">← Return to Main Event Website</a>
          </div>
        </div>
      )}
    </header>
  );
};
