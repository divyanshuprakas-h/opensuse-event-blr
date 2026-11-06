import React, { useState } from 'react';
import { Terminal, Cpu, Code2, Clock, CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { PHASES, PhaseItem } from '../data/eventData';

export const PhasesSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('phase-1');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return Terminal;
      case 'Cpu':
        return Cpu;
      case 'Code2':
        return Code2;
      default:
        return Layers;
    }
  };

  const activePhaseData = PHASES.find((p) => p.id === selectedPhase) || PHASES[0];
  const ActiveIcon = getIcon(activePhaseData.iconName);

  return (
    <section id="phases" className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 02. EVENT STRUCTURE & TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Three Distinct Phases Across 2 Days
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-geeko-400">
              DAY 1: TALKS & WORKSHOPS • DAY 2: 10H HACKATHON
            </span>
          </div>
        </div>

        {/* 3 Interactive Phase Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PHASES.map((phase) => {
            const Icon = getIcon(phase.iconName);
            const isSelected = phase.id === selectedPhase;

            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`text-left p-6 border-2 font-mono transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-pine-900/60 border-geeko-500 shadow-[6px_6px_0px_0px_#73ba25]'
                    : 'bg-obsidian-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 bg-geeko-500 text-black px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                    CURRENT SELECTION
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 border flex items-center justify-center ${
                    isSelected ? 'bg-geeko-500 text-black border-black' : 'bg-slate-800 text-geeko-400 border-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">
                    {phase.badge}
                  </span>
                </div>

                <div className="text-xs text-geeko-400 font-bold mb-1">
                  {phase.phaseNumber}
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                  {phase.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 font-sans">
                  {phase.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-geeko-400" />
                    {phase.duration}
                  </span>
                  <span className="text-geeko-400 font-bold flex items-center gap-1">
                    Inspect Topics <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Phase Inspection Drawer / Card */}
        <div className="bg-obsidian-900 border-2 border-geeko-500 p-6 sm:p-8 font-mono shadow-[6px_6px_0px_0px_#173f35]">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-2 border-slate-800 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-pine-900 border-2 border-geeko-500 flex items-center justify-center text-geeko-400 shrink-0">
                <ActiveIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest">
                    {activePhaseData.phaseNumber}
                  </span>
                  <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 border border-slate-700">
                    {activePhaseData.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {activePhaseData.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <div className="bg-obsidian-950 px-4 py-2 border border-slate-700">
                <span className="text-slate-500 block text-[10px]">TIME DEDICATED</span>
                <span className="text-geeko-400 font-bold">{activePhaseData.duration}</span>
              </div>
              <div className="bg-obsidian-950 px-4 py-2 border border-slate-700">
                <span className="text-slate-500 block text-[10px]">ACCESS TIER</span>
                <span className="text-white font-bold">ALL ATTENDEES</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Phase Overview & Objectives:
            </h4>
            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              {activePhaseData.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-geeko-400 mb-3 flex items-center gap-2">
              <span>CURATED TOPICS & PRACTICAL SYLLABUS:</span>
              <span className="text-slate-500">({activePhaseData.topics.length} Sessions)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-sm">
              {activePhaseData.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-obsidian-950 border border-slate-800 p-3.5 flex items-start gap-3 hover:border-geeko-500/50 transition-colors"
                >
                  <span className="font-mono text-xs text-geeko-400 bg-pine-900/80 px-2 py-0.5 border border-geeko-500/30 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-slate-200 font-medium">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
