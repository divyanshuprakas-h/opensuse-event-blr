import React, { useState } from 'react';
import { DAY1_SESSIONS, DAY2_SESSIONS, SessionItem, HACKATHON_TRACKS } from '../data/eventData';
import { Calendar, Clock, MapPin, Tag, CheckCircle2, Flame, Sparkles, Code2, ArrowRight, Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface DayScheduleSectionProps {
  onOpenHackathonRegister: () => void;
  onOpenDay1Register: () => void;
}

export const DayScheduleSection: React.FC<DayScheduleSectionProps> = ({
  onOpenHackathonRegister,
  onOpenDay1Register,
}) => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [day1Filter, setDay1Filter] = useState<'all' | 'mandatory' | 'optional'>('all');
  const [showAllDay1, setShowAllDay1] = useState(false);
  const [showAllDay2, setShowAllDay2] = useState(false);

  const filteredDay1 = DAY1_SESSIONS.filter((s) => {
    if (day1Filter === 'mandatory') return s.isMandatory;
    if (day1Filter === 'optional') return !s.isMandatory;
    return true;
  });

  const visibleDay1 = showAllDay1 ? filteredDay1 : filteredDay1.slice(0, 3);
  const visibleDay2 = showAllDay2 ? DAY2_SESSIONS : DAY2_SESSIONS.slice(0, 3);

  return (
    <section id="schedule" className="py-20 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 02. TWO-DAY PROGRAM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              Day 1 Talks & Workshops <br />
              <span className="text-geeko-400">//</span> Day 2 20H Buildathon
            </h2>
          </div>
          
          {/* Day Switcher Buttons */}
          <div className="flex border-2 border-slate-700 bg-obsidian-900 text-xs">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-5 py-2.5 font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 'day1'
                  ? 'bg-geeko-500 text-black border-r-2 border-black'
                  : 'text-slate-300 hover:text-white border-r border-slate-700'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 1: Talks & Workshops</span>
            </button>

            <button
              onClick={() => setActiveDay('day2')}
              className={`px-5 py-2.5 font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 'day2'
                  ? 'bg-geeko-500 text-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Day 2: 20H Buildathon</span>
            </button>
          </div>
        </div>

        {/* DAY 1 VIEW */}
        {activeDay === 'day1' && (
          <div className="space-y-6">
            
            {/* Day 1 Filter Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-obsidian-900 border border-slate-800 p-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Filter className="w-3.5 h-3.5 text-geeko-400" />
                <span>Filter Day 1 Sessions:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setDay1Filter('all')}
                  className={`px-3 py-1 border text-[11px] uppercase transition-colors ${
                    day1Filter === 'all'
                      ? 'bg-slate-800 text-white border-geeko-500 font-bold'
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  All Sessions ({DAY1_SESSIONS.length})
                </button>
                <button
                  onClick={() => setDay1Filter('mandatory')}
                  className={`px-3 py-1 border text-[11px] uppercase transition-colors ${
                    day1Filter === 'mandatory'
                      ? 'bg-emerald-950 text-geeko-300 border-geeko-500 font-bold'
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  [Mandatory Core Only]
                </button>
                <button
                  onClick={() => setDay1Filter('optional')}
                  className={`px-3 py-1 border text-[11px] uppercase transition-colors ${
                    day1Filter === 'optional'
                      ? 'bg-pine-950 text-cyan-300 border-cyan-500 font-bold'
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  [Optional Elective Workshops]
                </button>
              </div>
            </div>

            {/* Session Cards */}
            <div className="space-y-3">
              {visibleDay1.map((session) => (
                <div
                  key={session.id}
                  className={`p-5 border-2 text-left transition-all ${
                    session.isMandatory
                      ? 'bg-obsidian-900 border-slate-700 hover:border-geeko-500 shadow-[3px_3px_0px_0px_#173f35]'
                      : 'bg-obsidian-950 border-slate-800/80 hover:border-cyan-500/60 shadow-[3px_3px_0px_0px_#0e2a25]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5 mb-3 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-white bg-slate-800 px-2 py-0.5 border border-slate-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-geeko-400" />
                        {session.time}
                      </span>

                      {session.isMandatory ? (
                        <span className="bg-geeko-500/20 text-geeko-300 border border-geeko-500/40 px-2 py-0.5 font-bold uppercase text-[10px]">
                          [ MANDATORY // CORE KEYNOTE ]
                        </span>
                      ) : (
                        <span className="bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 font-bold uppercase text-[10px]">
                          [ OPTIONAL // ELECTIVE TRACK ]
                        </span>
                      )}

                      <span className="bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 text-[10px]">
                        {session.type}
                      </span>
                    </div>

                    {session.location && (
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-geeko-400" />
                        {session.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2">
                    {session.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                    {session.description}
                  </p>

                  {session.speakerOrLead && (
                    <div className="text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-800/80 pt-2">
                      <span className="text-slate-500 uppercase">Faculty / Speaker:</span>
                      <span className="text-geeko-300 font-bold">{session.speakerOrLead}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* View More / Show Less Toggle Button */}
            {filteredDay1.length > 3 && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => setShowAllDay1(!showAllDay1)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-obsidian-900 hover:bg-pine-950 border-2 border-geeko-500 text-geeko-300 hover:text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#173f35] hover:shadow-[1px_1px_0px_0px_#173f35] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
                >
                  {showAllDay1 ? (
                    <>
                      <ChevronUp className="w-4 h-4 text-geeko-400" />
                      <span>Show Less (Collapse Schedule)</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 text-geeko-400" />
                      <span>View More Sessions ({filteredDay1.length - 3} More)</span>
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-obsidian-900 border-2 border-geeko-500 p-5">
              <div>
                <span className="text-geeko-400 font-bold text-xs uppercase block">
                  READY FOR DAY 1 TALKS & WORKSHOPS?
                </span>
                <span className="text-xs text-slate-300">
                  Pre-register for Day 1 free admission. (Hackathon is separate).
                </span>
              </div>
              <button
                onClick={onOpenDay1Register}
                className="px-5 py-2.5 bg-geeko-500 hover:bg-geeko-400 text-black font-bold text-xs uppercase tracking-wider border-2 border-black whitespace-nowrap cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
              >
                Pre-Register for Day 1 Talks & Workshops →
              </button>
            </div>
          </div>
        )}

        {/* DAY 2 VIEW */}
        {activeDay === 'day2' && (
          <div className="space-y-6">
            
            {/* Separate Hackathon Notice Box */}
            <div className="bg-pine-900/40 border-2 border-geeko-500 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#173f35]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-geeko-400 uppercase">
                  <Code2 className="w-4 h-4" />
                  <span>SEPARATE REGISTRATION REQUIRED FOR DAY 2 HACKATHON</span>
                </div>
                <p className="text-xs text-slate-200 font-sans max-w-2xl">
                  Day 1 pass holders who want to hack on Day 2 must register their team (1–4 members) or enter as a solo hacker below.
                </p>
              </div>

              <button
                onClick={onOpenHackathonRegister}
                className="px-5 py-3 bg-geeko-500 hover:bg-geeko-400 text-black text-xs font-black uppercase tracking-wider border-2 border-black whitespace-nowrap cursor-pointer shadow-[3px_3px_0px_0px_#ffffff]"
              >
                Apply for Hackathon Separately →
              </button>
            </div>

            {/* 5 Hackathon Tracks Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {HACKATHON_TRACKS.map((track) => (
                <div
                  key={track.id}
                  className="bg-obsidian-900 border-2 border-slate-800 p-4 font-mono flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[3px_3px_0px_0px_#173f35]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-geeko-400 font-bold mb-1.5">
                      <span>{track.code}</span>
                      <span className="text-slate-500">20H BUILDATHON</span>
                    </div>
                    <h4 className="text-sm font-black text-white uppercase mb-2">
                      {track.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-4">
                      {track.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    {track.tech.map((t, i) => (
                      <span key={i} className="bg-obsidian-950 border border-slate-700 px-1.5 py-0.5 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Day 2 Timeline Slots */}
            <div className="space-y-3 pt-4">
              <h4 className="text-xs font-bold uppercase text-geeko-400 tracking-wider">
                DAY 2 SPRINT CHRONOLOGY (20-HOUR BUILDATHON TIMELINE):
              </h4>

              {visibleDay2.map((session) => (
                <div
                  key={session.id}
                  className="p-4 bg-obsidian-900 border-2 border-slate-800 text-left font-mono"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2 text-xs">
                    <span className="font-bold text-white bg-slate-800 px-2 py-0.5 border border-slate-700">
                      {session.time}
                    </span>
                    <span className="text-geeko-400 text-[11px] font-bold">
                      {session.location}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white uppercase mb-1">
                    {session.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-sans">
                    {session.description}
                  </p>
                </div>
              ))}

              {DAY2_SESSIONS.length > 3 && (
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setShowAllDay2(!showAllDay2)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-obsidian-900 hover:bg-pine-950 border-2 border-geeko-500 text-geeko-300 hover:text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#173f35] hover:shadow-[1px_1px_0px_0px_#173f35] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
                  >
                    {showAllDay2 ? (
                      <>
                        <ChevronUp className="w-4 h-4 text-geeko-400" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 text-geeko-400" />
                        <span>View Full Timeline ({DAY2_SESSIONS.length - 3} More Slots)</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
