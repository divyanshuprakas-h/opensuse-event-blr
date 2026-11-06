import React from 'react';
import { Code2, Award, Users, Terminal, CheckCircle2, Flame, Sparkles, Layers, ShieldAlert } from 'lucide-react';
import { HACKATHON_TRACKS, TrackItem } from '../data/eventData';

interface HackathonSectionProps {
  onOpenHackathonRegister: () => void;
  onOpenDay1Register: () => void;
}

export const HackathonSection: React.FC<HackathonSectionProps> = ({
  onOpenHackathonRegister,
  onOpenDay1Register,
}) => {
  return (
    <section id="hackathon" className="py-20 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>// 03. DAY 2: 10-HOUR INTENSIVE HACKATHON</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Build Real Open-Source Solutions
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-geeko-400 font-bold">
              10-HOUR SPRINT • 5 DIVERSE TRACKS
            </span>
          </div>
        </div>

        {/* Separate Registration Notice */}
        <div className="mb-10 bg-pine-900/30 border-2 border-geeko-500/80 p-5 text-xs text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#173f35]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-geeko-400 font-bold uppercase">
              <ShieldAlert className="w-4 h-4 text-geeko-400" />
              <span>SEPARATE REGISTRATION REQUIRED FOR HACKATHON</span>
            </div>
            <p className="text-slate-300 font-sans">
              Day 1 registration is for talks and workshops. If you want to hack on Day 2, please register your team (1–4 members) or enter solo below.
            </p>
          </div>
          <button
            onClick={onOpenHackathonRegister}
            className="px-5 py-2.5 bg-geeko-500 hover:bg-geeko-400 text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black whitespace-nowrap cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
          >
            Apply for Hackathon (Day 2) →
          </button>
        </div>

        {/* Hackathon Specs Card */}
        <div className="mb-12 bg-obsidian-900 border-2 border-slate-800 p-6 sm:p-8 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div>
              <span className="text-geeko-400 font-bold uppercase block mb-1">FORMAT</span>
              <p className="text-slate-300 font-sans">
                10-Hour in-person coding sprint. Participants identify problems, build working prototypes, and demonstrate them to a panel of mentors and judges.
              </p>
            </div>
            <div>
              <span className="text-geeko-400 font-bold uppercase block mb-1">TEAM COMPOSITION</span>
              <p className="text-slate-300 font-sans">
                Form teams of 1–4 members or hack solo. Solo hackers can join team-matching sessions at the start of Phase 3.
              </p>
            </div>
            <div>
              <span className="text-geeko-400 font-bold uppercase block mb-1">EVALUATION CRITERIA</span>
              <p className="text-slate-300 font-sans">
                Originality, functional completeness, adherence to open-source licensing, and ecosystem utility.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Track Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {HACKATHON_TRACKS.map((track) => (
            <div
              key={track.id}
              className="bg-obsidian-900 border-2 border-slate-800 p-6 flex flex-col justify-between hover:border-geeko-500 transition-all shadow-[4px_4px_0px_0px_#173f35] group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] mb-3">
                  <span className="text-geeko-400 font-bold">{track.code}</span>
                  <span className="bg-slate-800 text-slate-400 px-2 py-0.5 border border-slate-700">OPEN TRACK</span>
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-geeko-400 transition-colors">
                  {track.title}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                  SUGGESTED TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {track.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-obsidian-950 text-slate-300 border border-slate-700 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Hackathon Callout Card */}
          <div className="bg-geeko-500 text-black border-2 border-black p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_#ffffff]">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-wider mb-2">
                PRIZES & RECOGNITION
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                Showcase Your Craft Before Upstream Maintainers
              </h3>
              <p className="text-xs font-sans leading-relaxed text-black/80 mb-6">
                Winners receive trophies, openSUSE hardware and swag packages, certificates of excellence, and fast-track invitations to present at national openSUSE gatherings.
              </p>
            </div>

            <button
              onClick={onOpenHackathonRegister}
              className="w-full py-3 bg-black hover:bg-slate-900 text-white font-mono font-bold text-xs uppercase tracking-wider border border-black flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Sparkles className="w-4 h-4 text-geeko-400" />
              <span>Apply for Hackathon (Day 2)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
