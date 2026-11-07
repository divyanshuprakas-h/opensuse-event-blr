import React, { useState } from 'react';
import { DAY1_AGENDA, DAY2_AGENDA, AgendaSlot } from '../proposalData';
import { soundManager } from '../utils/soundEffects';

export const BuildathonTimeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [filterCat, setFilterCat] = useState<string>('All');

  const currentAgenda = activeDay === 'day1' ? DAY1_AGENDA : DAY2_AGENDA;

  const filteredSlots = filterCat === 'All'
    ? currentAgenda
    : currentAgenda.filter((slot) => slot.category.toLowerCase().includes(filterCat.toLowerCase()));

  const categories = ['All', 'Keynote/Talk', 'Lab', 'Buildathon', 'Meal', 'Judging', 'Ceremony', 'Rest'];

  return (
    <section id="agenda" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 04–05 // OPERATIONAL SCHEDULE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            20-Hour Buildathon & Event Agenda
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Continuous 20-Hour build window runs from Day 1 14:30 to Day 2 10:30. Meals and breaks do not pause the clock.
          </p>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#08130e] border border-geeko-500/30">
          <button
            onClick={() => {
              soundManager.playKeyClick();
              setActiveDay('day1');
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeDay === 'day1'
                ? 'bg-geeko-500 text-obsidian-950 shadow-[0_0_15px_rgba(115,186,37,0.4)]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            DAY 1 (Talks, Labs & Build Start)
          </button>
          <button
            onClick={() => {
              soundManager.playKeyClick();
              setActiveDay('day2');
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeDay === 'day2'
                ? 'bg-emerald-500 text-obsidian-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            DAY 2 (Bug Hunt, Demo Arena & Pitches)
          </button>
        </div>
      </div>

      {/* 20-Hour Clock Status Banner */}
      <div className="mb-6 p-4 rounded-xl bg-[#0a1c14] border border-geeko-500/40 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-geeko-500/20 border border-geeko-400 flex items-center justify-center text-geeko-400 font-bold">
            20H
          </div>
          <div>
            <div className="text-white font-bold">OFFICIAL 20-HOUR HACKATHON ENGINE</div>
            <div className="text-slate-300 text-[11px]">
              Starts Day 1 at 14:30 (First Commit Ceremony) · Locks Day 2 at 10:30 (Commit Freeze)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[11px] text-slate-400 text-right">
            <div>Catering: 6 Meal Services (280 servings)</div>
            <div className="text-amber-400 font-bold">Note: Day 2 lunch not catered (self-funded)</div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundManager.playKeyClick();
              setFilterCat(cat);
            }}
            className={`px-3 py-1 rounded whitespace-nowrap transition-all cursor-pointer ${
              filterCat === cat
                ? 'bg-geeko-500/20 border border-geeko-400 text-geeko-300 font-bold'
                : 'bg-[#06100b] text-slate-400 hover:text-white border border-geeko-500/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="rounded-xl border border-geeko-500/20 bg-[#06110c] overflow-hidden">
        <div className="divide-y divide-geeko-500/10">
          {filteredSlots.map((slot: AgendaSlot, idx: number) => {
            const isHighlight = slot.highlight;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isHighlight
                    ? 'bg-[#0c2419]/50 border-l-4 border-l-geeko-400'
                    : 'hover:bg-[#091811]/40 border-l-4 border-l-transparent'
                }`}
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-28 text-xs font-bold text-geeko-400 shrink-0">
                    {slot.time}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`text-sm font-bold ${isHighlight ? 'text-white' : 'text-slate-200'}`}>
                        {slot.title}
                      </h4>
                      {isHighlight && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-geeko-500 text-obsidian-950 font-bold">
                          KEY MILESTONE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 max-w-2xl leading-relaxed">
                      {slot.notes}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0b1e15] text-slate-300 border border-geeko-500/20">
                    {slot.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
