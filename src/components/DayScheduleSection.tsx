import React, { useState } from 'react';
import { DAY1_SESSIONS, DAY2_SESSIONS, HACKATHON_TRACKS, SessionItem } from '../data/eventData';
import { Calendar, Clock, MapPin, Code2, Filter, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';

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

  const visibleDay1 = showAllDay1 ? filteredDay1 : filteredDay1.slice(0, 4);
  const visibleDay2 = showAllDay2 ? DAY2_SESSIONS : DAY2_SESSIONS.slice(0, 4);

  return (
    <section id="schedule" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 02. EVENT TIMELINE &amp; TRACKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Day 1 Talks &amp; Labs <span className="text-geeko-400">//</span> 20H Buildathon
            </h2>
          </div>
          
          {/* Day Switcher Buttons */}
          <div className="flex rounded-xl border border-geeko-500/30 bg-[#091510] p-1 text-xs">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-4 py-2 rounded-lg font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 'day1'
                  ? 'bg-geeko-500 text-obsidian-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 1: Talks &amp; Labs</span>
            </button>

            <button
              onClick={() => setActiveDay('day2')}
              className={`px-4 py-2 rounded-lg font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                activeDay === 'day2'
                  ? 'bg-geeko-500 text-obsidian-950 shadow-md'
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
            
            {/* Filter bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#091510] border border-geeko-500/20 rounded-xl p-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Filter className="w-3.5 h-3.5 text-geeko-400" />
                <span>Filter Day 1 Sessions:</span>
              </div>

              <div className="flex items-center gap-1.5">
                {[
                  { id: 'all', label: 'All Sessions' },
                  { id: 'mandatory', label: 'Keynotes & Talks' },
                  { id: 'optional', label: 'Workshops & Labs' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setDay1Filter(f.id as any)}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      day1Filter === f.id
                        ? 'bg-geeko-500/20 text-geeko-300 border border-geeko-500/40 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sessions Stream */}
            <div className="space-y-3">
              {visibleDay1.map((session) => (
                <div
                  key={session.id}
                  className="p-5 rounded-xl bg-[#09130e] border border-geeko-500/20 hover:border-geeko-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-28 text-xs font-bold text-geeko-400 shrink-0">
                      {session.time}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white tracking-tight">
                          {session.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#0d2217] text-geeko-300 border border-geeko-500/30 font-bold">
                          {session.track}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans max-w-2xl leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 self-start sm:self-center text-xs text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-geeko-400" />
                    <span>{session.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Expand / Collapse Button */}
            {filteredDay1.length > 4 && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setShowAllDay1(!showAllDay1)}
                  className="px-5 py-2 rounded-xl bg-[#0a1812] hover:bg-[#0f281e] border border-geeko-500/30 text-geeko-300 text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  {showAllDay1 ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Collapse Schedule</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      <span>View All Day 1 Sessions ({filteredDay1.length - 4} More)</span>
                    </>
                  )}
                </button>
              </div>
            )}

          </div>
        )}

        {/* DAY 2 VIEW: 20H BUILDATHON & 6 TRACKS */}
        {activeDay === 'day2' && (
          <div className="space-y-8">
            
            {/* 20H Hackathon Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d261b] to-[#07130e] border border-geeko-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-geeko-300 uppercase mb-1">
                  <Sparkles className="w-4 h-4 text-geeko-400" />
                  <span>20-HOUR GEEKO BUILDATHON ENGINE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-sans max-w-2xl">
                  Starts Day 1 at 14:30 (First Commit Ceremony) and locks Day 2 at 10:30 (Commit Freeze). All submitting teams demo live in the Demo Arena; 6 finalists pitch on the main stage.
                </p>
              </div>

              <button
                onClick={onOpenHackathonRegister}
                className="px-5 py-2.5 rounded-xl bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-md"
              >
                Apply for Buildathon →
              </button>
            </div>

            {/* 6 Geeko Buildathon Tracks Grid */}
            <div id="tracks" className="scroll-mt-24 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-geeko-400 uppercase tracking-wider">
                  // SIX INNOVATION TRACKS (UP TO 83 TEAMS):
                </h3>
                <span className="text-xs text-slate-400">Teams of 3–4 members</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {HACKATHON_TRACKS.map((track) => (
                  <div
                    key={track.id}
                    className="p-5 rounded-xl bg-[#09130e] border border-geeko-500/20 hover:border-geeko-400/50 transition-colors flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-geeko-400 font-bold mb-2">
                        <span>{track.code}</span>
                        <span className="text-slate-500">20H SPRINT</span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 group-hover:text-geeko-300 transition-colors">
                        {track.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                        {track.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-geeko-500/10">
                      {track.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-[#060c09] border border-geeko-500/20 text-[10px] text-slate-300 font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 Timeline Chronology */}
            <div className="space-y-3 pt-4">
              <h4 className="text-xs font-bold uppercase text-geeko-400 tracking-wider">
                // DAY 2 TIMELINE (FROM SUNRISE SPRINT TO AWARDS):
              </h4>

              {visibleDay2.map((session) => (
                <div
                  key={session.id}
                  className="p-4 rounded-xl bg-[#09130e] border border-geeko-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="w-28 text-xs font-bold text-emerald-400 shrink-0">
                      {session.time}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-white">
                        {session.title}
                      </h5>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {session.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 shrink-0">
                    {session.location}
                  </span>
                </div>
              ))}

              {DAY2_SESSIONS.length > 4 && (
                <div className="text-center pt-2">
                  <button
                    onClick={() => setShowAllDay2(!showAllDay2)}
                    className="px-5 py-2 rounded-xl bg-[#0a1812] hover:bg-[#0f281e] border border-geeko-500/30 text-geeko-300 text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    {showAllDay2 ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Collapse Timeline</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>View All Day 2 Slots ({DAY2_SESSIONS.length - 4} More)</span>
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
