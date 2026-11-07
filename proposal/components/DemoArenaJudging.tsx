import React, { useState } from 'react';
import { JUDGING_RUBRIC } from '../proposalData';
import { soundManager } from '../utils/soundEffects';

export const DemoArenaJudging: React.FC = () => {
  // Interactive Rubric Scorer
  const [scores, setScores] = useState<{ [key: string]: number }>({
    'Real-World Problem & Usefulness': 8.5,
    'Technical Execution & Quality': 8.0,
    'Linux & openSUSE Relevance': 9.0,
    'Creativity & Originality': 7.5,
    'Documentation, Demo & Future Potential': 8.0,
  });

  const handleScoreChange = (criterion: string, val: number) => {
    soundManager.playKeyClick();
    setScores((prev) => ({ ...prev, [criterion]: val }));
  };

  // Compute weighted score (out of 100)
  const totalWeightedScore = JUDGING_RUBRIC.reduce((acc, r) => {
    const rawScore = scores[r.criterion] || 0;
    return acc + (rawScore / 10) * r.weight;
  }, 0);

  return (
    <section id="judging" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 07 // EVALUATION & AWARDS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Demo Arena, Judging & Awards
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Every valid team demos live. 6 parallel lanes, 120 minutes, 6 finalists selected for stage presentations.
          </p>
        </div>

        <div className="text-xs text-right text-slate-400">
          <div>Capacity: <strong className="text-white">Up to 83 Teams</strong></div>
          <div>Lanes: <strong className="text-geeko-400">6 Parallel Panels</strong></div>
        </div>
      </div>

      {/* Grid: Left = Rubric & Interactive Calculator; Right = Awards Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 5-Factor Rubric & Interactive Scorer */}
        <div className="lg:col-span-7 rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
            <h3 className="text-sm sm:text-base font-bold text-geeko-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-geeko-400"></span>
              5-FACTOR EVALUATION RUBRIC (WEIGHTED)
            </h3>
            <span className="text-[10px] text-slate-400">Common across Expo & Finals</span>
          </div>

          <div className="space-y-4">
            {JUDGING_RUBRIC.map((item, idx) => {
              const currentVal = scores[item.criterion] || 0;
              return (
                <div key={idx} className="p-3 rounded-lg bg-[#091a13] border border-geeko-500/10">
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                    <span>{item.criterion}</span>
                    <span className="text-emerald-400 font-bold">Weight: {item.weight}%</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal mb-2">
                    {item.description}
                  </p>

                  {/* Interactive Slider */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-[10px] text-slate-400">0</span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.5"
                      value={currentVal}
                      onChange={(e) => handleScoreChange(item.criterion, parseFloat(e.target.value))}
                      className="flex-1 accent-geeko-500 cursor-pointer"
                    />
                    <span className="text-[10px] text-slate-400">10</span>
                    <span className="text-xs font-bold text-geeko-300 w-10 text-right">
                      {currentVal.toFixed(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Computed Score Display */}
          <div className="mt-5 p-4 rounded-lg bg-[#0c2419] border border-geeko-500/40 flex items-center justify-between">
            <div>
              <div className="text-xs text-geeko-300 font-bold uppercase tracking-wider">
                SIMULATED WEIGHTED SCORE
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5">
                Formula: Σ (Criterion Score / 10) × Weight
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              <span className="text-emerald-400">{totalWeightedScore.toFixed(1)}</span>
              <span className="text-slate-400 text-sm"> / 100</span>
            </div>
          </div>
        </div>

        {/* Right Column: Awards Structure */}
        <div className="lg:col-span-5 rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
              <h3 className="text-sm sm:text-base font-bold text-amber-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400"></span>
                OFFICIAL AWARDS PLAN
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
                P-09
              </span>
            </div>

            <div className="space-y-3">
              {/* 1st Place */}
              <div className="p-3.5 rounded-lg bg-[#141d13] border border-yellow-500/30">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-yellow-400">🥇 1st Place Champion</span>
                  <span className="text-white font-mono">₹25,000 / Team</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  1 Trophy per team + Winner Certificates + Reward T-shirts (up to 4 members).
                </div>
              </div>

              {/* 2nd Place */}
              <div className="p-3.5 rounded-lg bg-[#121915] border border-slate-400/30">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-300">🥈 2nd Place Runner-Up</span>
                  <span className="text-white font-mono">₹15,000 / Team</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  1 Trophy per team + Winner Certificates + Reward T-shirts (up to 4 members).
                </div>
              </div>

              {/* 3rd Place */}
              <div className="p-3.5 rounded-lg bg-[#161511] border border-amber-700/40">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-amber-500">🥉 3rd Place Team</span>
                  <span className="text-white font-mono">₹10,000 / Team</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  1 Trophy per team + Winner Certificates + Reward T-shirts (up to 4 members).
                </div>
              </div>

              {/* 4th-6th Finalists */}
              <div className="p-3 rounded-lg bg-[#0a1510] border border-geeko-500/20 text-xs">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>🎖️ 4th–6th Finalists</span>
                  <span className="text-slate-400">Finalist Certificates</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Stage recognition and finalist certificates. (No cash or hardware prize budgeted).
                </p>
              </div>

              {/* Side Activities */}
              <div className="p-3 rounded-lg bg-[#0a1510] border border-geeko-500/20 text-xs">
                <div className="font-bold text-emerald-400 flex items-center justify-between">
                  <span>⚡ Side Activities Pool</span>
                  <span className="text-white font-mono">₹6,000 Pool</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Bug Hunt: ₹2,000 · Arcade incl. Find the Geeko: ₹2,500 · Quest: ₹1,500 + Reward T-shirts.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded bg-[#091510] border border-geeko-500/20 text-[11px] text-slate-400 leading-relaxed">
            <strong>Judging Integrity:</strong> Declare pre-existing code and AI assistance during repository freeze at 10:30. Judges with team affiliations must recuse themselves. Upstream acceptance is not required.
          </div>
        </div>
      </div>
    </section>
  );
};
