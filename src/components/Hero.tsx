import React, { useState } from 'react';
import { Calendar, MapPin, Users, Sparkles, Terminal, ArrowRight, ShieldCheck, Code, Award, ExternalLink, Image } from 'lucide-react';
import { EVENT_CONFIG, EVENT_STATS } from '../data/eventData';
import { ZypperTerminal } from './ZypperTerminal';

interface HeroProps {
  onOpenPreRegisterWithEmail: (email: string) => void;
  onOpenPreRegister: () => void;
  onOpenMockupViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPreRegisterWithEmail,
  onOpenPreRegister,
  onOpenMockupViewer,
}) => {
  const [quickEmail, setQuickEmail] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail.trim()) {
      onOpenPreRegister();
    } else {
      onOpenPreRegisterWithEmail(quickEmail);
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
            <span>JANUARY 2027 // EXACT DATES ANNOUNCING SHORTLY</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-obsidian-900 border border-slate-700 text-slate-300 px-3 py-1">
            <MapPin className="w-3.5 h-3.5 text-geeko-400" />
            <span>Newton School of Technology, Bengaluru</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-obsidian-900 border border-slate-700 text-slate-300 px-3 py-1">
            <Users className="w-3.5 h-3.5 text-geeko-400" />
            <span>300–400 Attendees</span>
          </div>

          <button
            onClick={onOpenMockupViewer}
            className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-geeko-500 hover:text-black border border-slate-600 text-slate-200 px-3 py-1 transition-all cursor-pointer"
          >
            <Image className="w-3.5 h-3.5" />
            <span>View Design Mockups</span>
          </button>
        </div>

        {/* Main Grid: Left copy, Right interactive terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="font-mono text-geeko-400 text-sm font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                <span>[ openSUSE India Community Event ]</span>
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
              A two-day community-driven technology conference featuring keynotes from seasoned openSUSE contributors, hands-on terminal workshops (YaST, Zypper, OBS, openQA), and an intensive 10-hour hackathon at Newton School of Technology.
            </p>

            {/* Quick Pre-Registration Box (Minimalist Brutalist Box) */}
            <div className="bg-obsidian-900 border-2 border-geeko-500 p-4 sm:p-5 shadow-[6px_6px_0px_0px_#173f35] max-w-xl">
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className="text-geeko-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pre-Registration Open (Free Admission)
                </span>
                <span className="text-slate-400 text-[11px]">Priority badge access</span>
              </div>

              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter your email for date alerts & pass..."
                  className="flex-1 bg-obsidian-950 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-3 font-mono text-xs text-white placeholder:text-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-geeko-500 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>Claim Early Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="mt-2 text-[11px] font-mono text-slate-400">
                🔒 No spam. You'll receive instant notification when exact January 2027 dates are locked.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#phases"
                className="px-4 py-2.5 bg-obsidian-900 hover:bg-slate-800 border-2 border-slate-700 font-mono text-xs text-slate-200 uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <span>Explore 3-Phase Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-geeko-400" />
              </a>

              <a
                href="#hackathon"
                className="px-4 py-2.5 bg-obsidian-900 hover:bg-slate-800 border-2 border-slate-700 font-mono text-xs text-slate-200 uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <span>Hackathon Tracks</span>
                <Code className="w-3.5 h-3.5 text-geeko-400" />
              </a>

              <a
                href="#budget"
                className="px-4 py-2.5 bg-obsidian-900 hover:bg-slate-800 border-2 border-slate-700 font-mono text-xs text-slate-200 uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <span>₹90,000 Budget Pool</span>
                <Award className="w-3.5 h-3.5 text-geeko-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Zypper Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <div className="absolute -top-3 -left-3 bg-geeko-500 text-black px-2.5 py-0.5 text-[10px] font-mono font-black uppercase tracking-widest border border-black z-20">
                INTERACTIVE LIVE CLI
              </div>
              <ZypperTerminal onPreRegisterTrigger={onOpenPreRegister} />
            </div>

            {/* Chameleon Quote Banner */}
            <div className="bg-pine-900/30 border border-slate-800 p-3 flex items-center gap-3">
              <div className="w-9 h-9 shrink-0 bg-obsidian-950 border border-geeko-500 p-1">
                <img src={`${import.meta.env.BASE_URL}geeko.svg`} alt="Geeko" className="w-full h-full object-contain" />
              </div>
              <p className="text-xs font-mono text-slate-300">
                <span className="text-geeko-400 font-bold">Geeko says:</span> "From your first <code className="text-white">zypper in</code> to your first kernel patch — let's build the open future together in Bengaluru."
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
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
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
