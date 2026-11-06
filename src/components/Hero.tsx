import React, { useState } from 'react';
import { Calendar, MapPin, Users, Sparkles, Terminal, ArrowRight, Code, Image as ImageIcon } from 'lucide-react';
import { EVENT_CONFIG, EVENT_STATS } from '../data/eventData';
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
    <section className="relative pt-8 pb-14 border-b-2 border-slate-800 bg-obsidian-950 font-mono overflow-hidden">
      
      {/* Background brutalist subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#173f3512_1px,transparent_1px),linear-gradient(to_bottom,#173f3512_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Meta Chips: Square with green shade, no glowing dot, no 300-400 chip */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono">
          <div className="inline-flex items-center bg-pine-950/80 border border-geeko-500/50 text-geeko-300 px-3 py-1.5 font-bold tracking-wider">
            <span>JANUARY 2027 // DATES ANNOUNCING SHORTLY</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-pine-950/80 border border-geeko-500/50 text-geeko-300 px-3 py-1.5 font-bold">
            <MapPin className="w-3.5 h-3.5 text-geeko-400" />
            <span>Newton School of Technology, Bengaluru</span>
          </div>
        </div>

        {/* Main Grid: Left copy, Right interactive CLI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
                [ openSUSE India Community Gathering ]
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                <span className="lowercase">open</span><span className="uppercase">SUSE</span>{' '}
                <span className="uppercase">India</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-geeko-400 via-geeko-500 to-emerald-300 uppercase">
                  Bengaluru Connect
                </span> <br />
                <span className="text-slate-300 font-mono">2027</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-xl">
              <strong className="text-white">Explore Open Source. Learn openSUSE. Build Together.</strong>
              <br />
              Two days of Linux distribution keynotes, hands-on packaging workshops (YaST, Zypper, OBS, openQA), and an intensive 10-hour hackathon.
            </p>

            {/* Quick 1-Click Day 1 Pass Form */}
            <div className="bg-obsidian-900 border-2 border-geeko-500 p-4 shadow-[4px_4px_0px_0px_#173f35] max-w-lg">
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="text-geeko-400 font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Day 1: Talks & Workshops (Free Entry)
                </span>
                <span className="text-slate-400 text-[10px]">Instant Pass</span>
              </div>

              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter email for priority pass..."
                  className="flex-1 bg-obsidian-950 border border-slate-700 focus:border-geeko-500 px-3 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-geeko-500 text-black font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-geeko-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Claim Pass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Taking part in Day 2 Hackathon?</span>
                <button
                  type="button"
                  onClick={onOpenHackathonRegister}
                  className="text-geeko-400 hover:text-white underline font-bold cursor-pointer"
                >
                  Register team separately →
                </button>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#schedule"
                className="px-3.5 py-2 bg-obsidian-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>View Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-geeko-400" />
              </a>

              <button
                onClick={onOpenHackathonRegister}
                className="px-3.5 py-2 bg-pine-950 hover:bg-pine-900 border border-geeko-500/60 text-xs text-geeko-300 uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Code className="w-3.5 h-3.5 text-geeko-400" />
                <span>Hackathon Pass (Day 2)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Zypper Terminal */}
          <div className="lg:col-span-5 space-y-3">
            <ZypperTerminal onPreRegisterTrigger={onOpenDay1Register} />
          </div>

        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-6 border-t border-slate-800">
          {EVENT_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-obsidian-900/80 border border-slate-800 p-3.5 text-left shadow-[2px_2px_0px_0px_#173f35]"
            >
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-0.5">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-geeko-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
