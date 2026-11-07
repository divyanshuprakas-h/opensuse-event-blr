import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Monitor, GitMerge, Sparkles, ArrowRight } from 'lucide-react';
import { BUILDATHON_TRACKS, BuildathonTrack } from '../../../proposal/proposalData';
import { soundManager } from '../../../proposal/utils/soundEffects';

interface CreativeTracksProps {
  onOpenHackathonRegister: () => void;
}

export const CreativeTracks: React.FC<CreativeTracksProps> = ({ onOpenHackathonRegister }) => {
  const [activeTrack, setActiveTrack] = useState<BuildathonTrack>(BUILDATHON_TRACKS[0]);

  const icons: { [key: string]: React.ReactNode } = {
    'track-1': <Terminal className="w-5 h-5" />,
    'track-2': <Shield className="w-5 h-5" />,
    'track-3': <Cpu className="w-5 h-5" />,
    'track-4': <Monitor className="w-5 h-5" />,
    'track-5': <GitMerge className="w-5 h-5" />,
    'track-6': <Sparkles className="w-5 h-5" />,
  };

  return (
    <section id="tracks" className="py-20 sm:py-28 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 bg-geeko-500 rounded-sm"></span>
              <span>// 02 SIX HACKATHON ARENAS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              Choose Your Weapon.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Teams of 3–4 select one primary track. Six finalists selected overall across the entire Buildathon pool.
          </p>
        </div>

        {/* Synthesizer Deck Layout: Left Cartridge Stack + Right Active Console Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: 6 Interactive Track Cartridges */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {BUILDATHON_TRACKS.map((track) => {
              const isSelected = activeTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => {
                    soundManager.playSelect();
                    setActiveTrack(track);
                  }}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-geeko-500 text-obsidian-950 font-bold border-geeko-400 shadow-[0_0_25px_rgba(115,186,37,0.4)] scale-[1.02]'
                      : 'bg-[#06120c]/80 hover:bg-[#0a1e14] text-slate-300 border-geeko-500/20 hover:border-geeko-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-obsidian-950 text-geeko-400' : 'bg-[#091f16] text-geeko-400 group-hover:scale-110'
                      } transition-transform`}
                    >
                      {icons[track.id]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] tracking-wider font-bold ${isSelected ? 'text-obsidian-900' : 'text-geeko-400'}`}>
                          TRACK {track.num}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'}`}>
                          {track.level}
                        </span>
                      </div>
                      <div className="text-sm font-bold tracking-tight mt-0.5">
                        {track.title}
                      </div>
                    </div>
                  </div>

                  <span className={`text-base font-bold transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Track Visualizer Console */}
          <div className="lg:col-span-7 rounded-2xl border border-geeko-500/30 bg-gradient-to-b from-[#091a13] to-[#040a07] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Console Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-geeko-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-geeko-400 animate-ping"></span>
                    <span className="text-xs font-bold text-geeko-400 tracking-wider">
                      ARENA CARTRIDGE ACTIVE // {activeTrack.num}
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                    {activeTrack.level}
                  </span>
                </div>

                {/* Title & Core Subtitle */}
                <div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                    {activeTrack.title}
                  </h3>
                  <div className="text-sm text-emerald-400 font-bold mt-1">
                    {activeTrack.subtitle}
                  </div>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed mt-3 max-w-xl">
                    {activeTrack.summary}
                  </p>
                </div>

                {/* Sample Innovation Vectors */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    // TARGET BRIEF INSPIRATIONS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeTrack.ideas.map((idea, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#06120c] border border-geeko-500/15 text-slate-200 leading-snug flex items-start gap-2"
                      >
                        <span className="text-geeko-400 font-bold">❯</span>
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    // CORE TECHNOLOGY STACK
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeTrack.techFocus.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#0a2318] text-geeko-300 border border-geeko-500/30 text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Console Action */}
            <div className="mt-8 pt-6 border-t border-geeko-500/20 flex flex-wrap items-center justify-between gap-4">
              <div className="text-[11px] text-slate-400">
                Ready to hack on <strong className="text-white">{activeTrack.title}</strong>?
              </div>
              <button
                onClick={() => {
                  soundManager.playSuccess();
                  onOpenHackathonRegister();
                }}
                className="px-5 py-2.5 rounded-xl bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-display font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(115,186,37,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>REGISTER TEAM FOR TRACK {activeTrack.num}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
