import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal, Code2, ShieldAlert } from 'lucide-react';
import { soundManager } from '../../../proposal/utils/soundEffects';

interface CreativeHeroProps {
  onOpenDay1Register: () => void;
  onOpenDay1RegisterWithEmail: (email: string) => void;
  onOpenHackathonRegister: () => void;
}

export const CreativeHero: React.FC<CreativeHeroProps> = ({
  onOpenDay1Register,
  onOpenDay1RegisterWithEmail,
  onOpenHackathonRegister,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      soundManager.playSuccess();
      onOpenDay1RegisterWithEmail(emailInput.trim());
    } else {
      soundManager.playKeyClick();
      onOpenDay1Register();
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Telemetry Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-geeko-500/10 border border-geeko-500/30 text-geeko-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-geeko-400 animate-ping"></span>
            <span>OPEN-SOURCE SUMMIT &amp; 20H BUILDATHON</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 tracking-wider">
            JANUARY 2027 // NEWTON SCHOOL OF TECH, BENGALURU
          </span>
        </motion.div>

        {/* Main Asymmetrical Grid: Massive Kinetic Typography + 3D Holographic Geeko */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Oversized Kinetic Typography */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] leading-[0.88] tracking-tighter uppercase text-white">
                <span className="block hover:text-geeko-400 transition-colors">
                  LEARN.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-geeko-400 via-emerald-300 to-emerald-500">
                  BUILD.
                </span>
                <span className="block text-stroke-white hover:text-white transition-colors">
                  CONTRIBUTE.
                </span>
              </h1>
            </motion.div>

            {/* Powerful Punchline (Minimal Text) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl font-sans leading-relaxed pt-2"
            >
              Two consecutive days of deep Linux engineering, YaST &amp; Zypper labs, and a relentless{' '}
              <strong className="text-white">20-Hour Geeko Buildathon</strong>. Capped at 250 builders. 100% free.
            </motion.p>

            {/* High-Impact Action Station */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl font-mono"
            >
              <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email for instant pass..."
                  className="flex-1 bg-[#07130e]/90 border border-geeko-500/30 focus:border-geeko-400 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none shadow-inner"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-display font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(115,186,37,0.4)] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-obsidian-950" />
                  <span>CLAIM PASS</span>
                </button>
              </form>

              <button
                onClick={() => {
                  soundManager.playKeyClick();
                  onOpenHackathonRegister();
                }}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-geeko-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Code2 className="w-3.5 h-3.5 text-geeko-400" />
                <span>BUILDATHON</span>
              </button>
            </motion.div>

            {/* Quick Micro Statuses */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-geeko-300">
                ✓ 25 Reward T-Shirts + Cash Awards
              </span>
              <span>•</span>
              <span className="text-slate-400">Strict 250 Participant Pool</span>
              <span>•</span>
              <a
                href={`${import.meta.env.BASE_URL}proposal/`}
                className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
              >
                Read 18-page proposal OS →
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Hologram Geeko Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
              className="w-full max-w-md rounded-2xl border border-geeko-500/40 bg-gradient-to-b from-[#0a1e15]/80 via-[#06120c]/90 to-[#030805] p-6 shadow-[0_0_50px_rgba(115,186,37,0.2)] relative group overflow-hidden font-mono"
            >
              {/* Corner tech indicators */}
              <div className="absolute top-3 left-3 text-[10px] text-geeko-500 font-bold tracking-widest">
                [ SYS_VER: 2027.1 ]
              </div>
              <div className="absolute top-3 right-3 text-[10px] text-slate-400 font-bold">
                12.9212°N 77.5007°E
              </div>

              {/* Holographic Wireframe Mascot Visualizer */}
              <div className="my-6 py-6 flex flex-col items-center justify-center relative">
                {/* Concentric radar rings */}
                <div className="w-48 h-48 rounded-full border border-geeko-500/20 absolute animate-spin [animation-duration:20s] border-dashed"></div>
                <div className="w-36 h-36 rounded-full border border-geeko-500/30 absolute animate-pulse"></div>

                {/* Central Pixel/Vector Geeko Emblem */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#092418] border-2 border-geeko-400 p-3 shadow-[0_0_30px_rgba(115,186,37,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 16 16" className="w-16 h-16" style={{ imageRendering: 'pixelated' }}>
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

                <div className="mt-4 text-center">
                  <div className="text-xs font-bold text-white tracking-widest uppercase">
                    openSUSE GEEKO MAINFRAME
                  </div>
                  <div className="text-[10px] text-geeko-400 tracking-wider mt-0.5">
                    KERNEL: 6.12-TUMBLEWEED // LIVE
                  </div>
                </div>
              </div>

              {/* Telemetry Matrix Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-geeko-500/20">
                <div className="p-2 rounded bg-black/40 border border-geeko-500/10">
                  <span className="text-slate-400 text-[9px] uppercase block">VENUE</span>
                  <span className="text-white font-bold">Newton School of Tech</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-geeko-500/10">
                  <span className="text-slate-400 text-[9px] uppercase block">CLOCK</span>
                  <span className="text-amber-400 font-bold">20-Hour Non-Stop</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-geeko-500/10">
                  <span className="text-slate-400 text-[9px] uppercase block">CAPACITY</span>
                  <span className="text-emerald-400 font-bold">250 Builders Max</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-geeko-500/10">
                  <span className="text-slate-400 text-[9px] uppercase block">ENTRY</span>
                  <span className="text-geeko-300 font-bold">100% Free FOSS</span>
                </div>
              </div>

              {/* Bottom Interactive Trigger to Proposal */}
              <a
                href={`${import.meta.env.BASE_URL}proposal/`}
                onClick={() => soundManager.playBootBeep()}
                className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-geeko-500/20 to-emerald-500/20 hover:from-geeko-500 hover:to-emerald-400 text-geeko-300 hover:text-black border border-geeko-400/50 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>BOOT FULL PROPOSAL OS</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Kinetic Infinite Marquee Banner */}
      <div className="relative mt-12 py-3 bg-[#020503] border-y border-geeko-500/20 overflow-hidden font-mono text-xs select-none">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-8 text-slate-400">
          <span className="text-geeko-400 font-bold">⚡ openSUSE INDIA</span>
          <span>BENGALURU CONNECT 2027</span>
          <span className="text-geeko-400 font-bold">⚡ 20-HOUR GEEKO BUILDATHON</span>
          <span>NEWTON SCHOOL OF TECHNOLOGY</span>
          <span className="text-emerald-400 font-bold">⚡ ZYPPER • YAST • OBS • OPENQA</span>
          <span>STRICT 250 CAPACITY</span>
          <span className="text-geeko-400 font-bold">⚡ ₹2,57,840 TRANSPARENT BUDGET</span>
          <span>LEARN • BUILD • CONTRIBUTE</span>
          <span className="text-geeko-400 font-bold">⚡ openSUSE INDIA</span>
          <span>BENGALURU CONNECT 2027</span>
          <span className="text-geeko-400 font-bold">⚡ 20-HOUR GEEKO BUILDATHON</span>
          <span>NEWTON SCHOOL OF TECHNOLOGY</span>
        </div>
      </div>
    </section>
  );
};
