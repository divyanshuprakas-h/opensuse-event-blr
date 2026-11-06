import React, { useState } from 'react';
import { Calendar, MapPin, Users, Sparkles, Terminal, ArrowRight, ShieldCheck, Code, Award, ExternalLink, Image, Mic } from 'lucide-react';
import { EVENT_CONFIG, EVENT_STATS } from '../data/eventData';
import { ZypperTerminal } from './ZypperTerminal';

interface HeroProps {
  onOpenDay1Register: () => void;
  onOpenDay1RegisterWithEmail: (email: string) => void;
  onOpenHackathonRegister: () => void;
  onOpenCFP: () => void;
  onOpenMockupViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDay1Register,
  onOpenDay1RegisterWithEmail,
  onOpenHackathonRegister,
  onOpenCFP,
  onOpenMockupViewer,
}) => {
  const [quickEmail, setQuickEmail] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail.trim()) {
      onOpenDay1Register();
    } else {
      onOpenDay1RegisterWithEmail(quickEmail);
    }
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b-2 border-slate-800 overflow-hidden">
      
      {/* Background brutalist grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#173f3515_1px,transparent_1px),linear-gradient(to_bottom,#173f3515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status & Venue Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono">
          <div className="inline-flex items-center gap-2 bg-pine-900/60 border border-geeko-500/50 text-geeko-300 px-3 py-1 font-bold">
            <span className="w-2 h-2 rounded-full bg-geeko-400 animate-pulse" />
            <span>JANUARY 2027 // PROPOSED DATES ANNOUNCING SHORTLY</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-obsidian-900 border border-slate-700 text-slate-300 px-3 py-1">
            <MapPin className="w-3.5 h-3.5 text-geeko-400" />
            <span>Newton School of Technology, Bengaluru</span>
          </div>

          <button
            onClick={onOpenCFP}
            className="inline-flex items-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-geeko-500/60 text-geeko-300 px-3 py-1 font-bold transition-all cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5 text-geeko-400" />
            <span>CFP Open: Submit Talk / Workshop</span>
          </button>

          <button
            onClick={onOpenMockupViewer}
            className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-geeko-500 hover:text-black border border-slate-600 text-slate-200 px-3 py-1 transition-all cursor-pointer"
          >
            <Image className="w-3.5 h-3.5" />
            <span>Design Mockups</span>
          </button>
        </div>

        {/* Main Grid: Left copy, Right interactive terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="font-mono text-geeko-400 text-sm font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                <span>[ openSUSE India Community Event • 2-Day Architecture ]</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase">
                openSUSE India <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-geeko-400 via-geeko-500 to-emerald-300">
                  Bengaluru Connect
                </span> <br />
                <span className="font-mono text-3xl sm:text-4xl text-slate-300">2027</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">Explore Open Source. Learn openSUSE. Build Together.</strong>
              <br />
              <span className="text-geeko-300 font-semibold">Day 1:</span> Keynotes, mandatory contributor talks & elective breakout workshops (YaST, Zypper, OBS, openQA). <br />
              <span className="text-geeko-300 font-semibold">Day 2:</span> 10-Hour Open-Source Sprint Hackathon with on-site maintainer mentorship.
            </p>

            {/* Quick Pre-Registration Box */}
            <div className="bg-obsidian-900 border-2 border-geeko-500 p-4 sm:p-5 shadow-[6px_6px_0px_0px_#173f35] max-w-xl">
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className="text-geeko-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Day 1 Pre-Registration (Free Community Admission)
                </span>
                <span className="text-slate-400 text-[11px]">Priority pass</span>
              </div>

              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter email for Day 1 pass & date alerts..."
                  className="flex-1 bg-obsidian-950 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-3 font-mono text-xs text-white placeholder:text-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-geeko-500 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>Claim Day 1 Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Taking part in the Hackathon?</span>
                <button
                  type="button"
                  onClick={onOpenHackathonRegister}
                  className="text-geeko-400 hover:text-white underline font-bold cursor-pointer"
                >
                  Register for Day 2 Hackathon separately →
                </button>
              </div>
            </div>

            {/* Distinct Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#schedule"
                className="px-4 py-2.5 bg-obsidian-900 hover:bg-slate-800 border-2 border-slate-700 font-mono text-xs text-slate-200 uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <span>Day 1 & Day 2 Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-geeko-400" />
              </a>

              <button
                onClick={onOpenHackathonRegister}
                className="px-4 py-2.5 bg-pine-950 hover:bg-pine-900 border-2 border-geeko-500/60 font-mono text-xs text-geeko-300 uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Code className="w-3.5 h-3.5 text-geeko-400" />
                <span>Day 2 Hackathon Entry</span>
              </button>

              <button
                onClick={onOpenCFP}
                className="px-4 py-2.5 bg-obsidian-900 hover:bg-slate-800 border-2 border-slate-700 font-mono text-xs text-slate-200 uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Mic className="w-3.5 h-3.5 text-geeko-400" />
                <span>Submit Talk (CFP)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Zypper Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <div className="absolute -top-3 -left-3 bg-geeko-500 text-black px-2.5 py-0.5 text-[10px] font-mono font-black uppercase tracking-widest border border-black z-20">
                INTERACTIVE LIVE CLI
              </div>
              <ZypperTerminal onPreRegisterTrigger={onOpenDay1Register} />
            </div>

            {/* Chameleon Quote Banner */}
            <div className="bg-pine-900/30 border border-slate-800 p-3 flex items-center gap-3">
              <div className="w-9 h-9 shrink-0 bg-obsidian-950 border border-geeko-500 p-1">
                <img src={`${import.meta.env.BASE_URL}geeko.svg`} alt="Geeko" className="w-full h-full object-contain" />
              </div>
              <p className="text-xs font-mono text-slate-300">
                <span className="text-geeko-400 font-bold">Geeko says:</span> "Mandatory talks introduce the core, elective workshops build muscle memory, and Day 2 lets you hack together!"
              </p>
            </div>
          </div>

        </div>

        {/* 4-Column Neo-Brutalist Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t-2 border-slate-800">
          {EVENT_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-obsidian-900/90 border-2 border-slate-800 p-4 font-mono text-left shadow-[4px_4px_0px_0px_#173f35] hover:border-geeko-500 transition-colors"
            >
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-geeko-400 mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
