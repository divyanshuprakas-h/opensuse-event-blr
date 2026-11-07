import React, { useState } from 'react';
import { MapPin, Sparkles, ArrowRight, Code, Gift, Terminal, ArrowUpRight } from 'lucide-react';
import { EVENT_STATS } from '../data/eventData';
import { ZypperTerminal } from './ZypperTerminal';

interface HeroProps {
  onOpenDay1Register: () => void;
  onOpenDay1RegisterWithEmail: (email: string) => void;
  onOpenHackathonRegister: () => void;
  onOpenMockupViewer?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDay1Register,
  onOpenDay1RegisterWithEmail,
  onOpenHackathonRegister,
}) => {
  const [quickEmail, setQuickEmail] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail.trim()) {
      onOpenDay1Register();
    } else {
      onOpenDay1RegisterWithEmail(quickEmail.trim());
    }
  };

  return (
    <section className="relative pt-10 sm:pt-14 pb-16 border-b border-white/[0.08] bg-[#070c0a] font-mono overflow-hidden">
      {/* Subtle Dribbble ambient radial lights */}
      <div className="pointer-events-none absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-geeko-500/[0.08] via-emerald-500/[0.03] to-transparent blur-3xl"></div>
      
      {/* Subtle hairline grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(115,186,37,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(115,186,37,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Telemetry Tag */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs">
          <div className="inline-flex items-center gap-2 bg-[#0d2217] border border-geeko-500/40 text-geeko-300 px-3 py-1.5 rounded-full font-bold">
            <span className="w-2 h-2 rounded-full bg-geeko-400 animate-ping"></span>
            <span>JANUARY 2027 // TWO CONSECUTIVE DAYS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-[#0a1811] border border-geeko-500/30 text-slate-300 px-3 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-geeko-400" />
            <span>Newton School of Technology, Bengaluru</span>
          </div>
        </div>

        {/* Hero Grid: Left Content + Right Terminal Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
                // OPEN-SOURCE LINUX GATHERING
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-white tracking-tight leading-[1.06]">
                <span className="lowercase">open</span><span className="uppercase text-geeko-400">SUSE</span>{' '}
                <span className="uppercase">India</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-geeko-400 via-emerald-300 to-emerald-500">
                  Bengaluru Connect
                </span> <br />
                <span className="text-slate-300 font-mono">2027</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-xl">
              <strong className="text-white">Explore Open Source. Learn openSUSE. Build Together.</strong>
              <br />
              Two days of Linux distribution keynotes, hands-on packaging workshops (YaST, Zypper, OBS, openQA), and an intensive 20-Hour Geeko Buildathon at Newton School of Technology.
            </p>

            {/* Instant Priority Pass Claim Station */}
            <div className="bg-[#0a1812] border border-geeko-500/40 rounded-2xl p-4 shadow-[0_4px_25px_rgba(0,0,0,0.5)] max-w-xl">
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="text-geeko-300 font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-geeko-400" />
                  <span>Free Priority Pass // 250 Participant Cap</span>
                </span>
                <span className="text-slate-400 text-[10px]">Instant Pass</span>
              </div>

              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter email to claim priority pass..."
                  className="flex-1 bg-[#060e0a] border border-slate-700 focus:border-geeko-400 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-geeko-500 text-obsidian-950 font-black text-xs uppercase tracking-wider hover:bg-geeko-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(115,186,37,0.3)] whitespace-nowrap"
                >
                  <span>Claim Pass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="mt-2.5 pt-2 border-t border-geeko-500/15 flex items-center justify-between text-[11px] text-slate-400">
                <span>✦ Free commemorative T-shirt for attendees</span>
                <button
                  type="button"
                  onClick={onOpenHackathonRegister}
                  className="text-geeko-400 hover:text-white underline font-bold cursor-pointer"
                >
                  Hackathon registration →
                </button>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={`${import.meta.env.BASE_URL}proposal/`}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0d2a1d] to-[#091b12] hover:from-geeko-500 hover:to-emerald-400 text-geeko-300 hover:text-black border border-geeko-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(115,186,37,0.2)]"
                title="Open Interactive 18-Page Proposal OS with GRUB Bootloader"
              >
                <Terminal className="w-3.5 h-3.5 text-geeko-400" />
                <span>Proposal OS &amp; Bootloader ⚡</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="#schedule"
                className="px-3.5 py-2.5 rounded-xl bg-[#091410] hover:bg-[#0f241c] border border-slate-700 text-xs text-slate-200 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>View 20H Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-geeko-400" />
              </a>

              <a
                href="#prizes"
                className="px-3.5 py-2.5 rounded-xl bg-[#091410] hover:bg-[#0f241c] border border-geeko-500/40 text-xs text-geeko-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Gift className="w-3.5 h-3.5 text-geeko-400" />
                <span>Prizes &amp; Swag</span>
              </a>

              <button
                onClick={onOpenHackathonRegister}
                className="px-3.5 py-2.5 rounded-xl bg-[#091410] hover:bg-[#0f241c] border border-geeko-500/40 text-xs text-geeko-300 uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Code className="w-3.5 h-3.5 text-geeko-400" />
                <span>Hackathon Pass</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Zypper Terminal Console */}
          <div className="lg:col-span-5 space-y-3">
            <ZypperTerminal
              onPreRegisterTrigger={onOpenDay1Register}
              onRegisterHackathon={onOpenHackathonRegister}
            />
          </div>

        </div>

        {/* 4 Clean Metric Cards (Dribbble Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/[0.08]">
          {EVENT_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-[#08120d] border border-geeko-500/20 hover:border-geeko-400/50 p-4 rounded-xl text-left transition-colors shadow-sm"
            >
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-[11px] text-geeko-400 mt-0.5 font-mono">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
