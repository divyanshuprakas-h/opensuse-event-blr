import React, { useState } from 'react';
import { BUILDATHON_TRACKS, BuildathonTrack } from '../proposalData';
import { soundManager } from '../utils/soundEffects';

export const TracksMatrix: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<BuildathonTrack>(BUILDATHON_TRACKS[0]);
  const [levelFilter, setLevelFilter] = useState<string>('All');

  const filteredTracks = levelFilter === 'All'
    ? BUILDATHON_TRACKS
    : BUILDATHON_TRACKS.filter((t) => t.level.toLowerCase().includes(levelFilter.toLowerCase()));

  return (
    <section id="tracks" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 03 // 20-HOUR GEEKO BUILDATHON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Six Innovation Tracks
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Up to 83 teams (3–4 builders) choose one primary track. Six finalists selected overall.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#07130e] border border-geeko-500/20 text-xs">
          {['All', 'Beginner', 'Intermediate', 'All Levels'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                soundManager.playKeyClick();
                setLevelFilter(lvl);
              }}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                levelFilter === lvl
                  ? 'bg-geeko-500 text-obsidian-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTracks.map((track) => {
          const isSelected = selectedTrack.id === track.id;
          return (
            <div
              key={track.id}
              onClick={() => {
                soundManager.playSelect();
                setSelectedTrack(track);
              }}
              className={`rounded-xl border p-5 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-[#0d261b] to-[#06120d] border-geeko-400 shadow-[0_0_20px_rgba(115,186,37,0.25)] ring-1 ring-geeko-400'
                  : 'bg-[#07110c]/80 border-geeko-500/20 hover:border-geeko-500/50 hover:bg-[#0a1a12]/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-0.5 rounded bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40">
                    TRACK {track.num}
                  </span>
                  <span className="text-[10px] text-slate-400 border border-slate-700 px-2 py-0.5 rounded">
                    {track.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-geeko-300">
                  {track.title}
                </h3>
                <div className="text-xs text-emerald-400 font-semibold mt-0.5">
                  {track.subtitle}
                </div>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {track.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-geeko-500/20">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">
                  Tech Focus
                </div>
                <div className="flex flex-wrap gap-1">
                  {track.techFocus.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-[#0b2117] text-slate-300 border border-geeko-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Track Detailed Drawer / Inspection Box */}
      <div className="mt-6 rounded-xl border border-geeko-500/30 bg-[#06120c] p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-geeko-500/20">
          <div className="flex items-center gap-3">
            <span className="text-base sm:text-lg font-bold text-geeko-400">
              TRACK {selectedTrack.num} DEEP DIVE: {selectedTrack.title}
            </span>
            <span className="text-xs text-emerald-400 font-normal">
              ({selectedTrack.subtitle})
            </span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40">
            {selectedTrack.level}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div>
            <div className="text-slate-400 font-bold uppercase tracking-wider mb-2">
              Sample Project Briefs & Inspirations:
            </div>
            <ul className="space-y-2">
              {selectedTrack.ideas.map((idea, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-200">
                  <span className="text-geeko-400 font-bold">❯</span>
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-[#0a1a12] border border-geeko-500/20 flex flex-col justify-between">
            <div>
              <div className="text-geeko-400 font-bold uppercase tracking-wider mb-1">
                Official Rulebook Specification:
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Teams choose one primary track and declare scope during registration. Mentors help beginners reduce scope without changing the common scoring rubric. Upstream acceptance is not required for qualification; submitted pull requests or working sandboxes qualify fully. Six finalists selected overall across all tracks.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-geeko-500/10 text-[10px] text-slate-400 flex items-center justify-between">
              <span>20-Hour Hackathon Clock: Day 1 14:30 – Day 2 10:30</span>
              <span className="text-emerald-400 font-bold">Hard Commit Freeze</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
