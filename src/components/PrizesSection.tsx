import React from 'react';
import { Gift, Shirt, Sparkles, Award, Trophy, ArrowRight } from 'lucide-react';

interface PrizesSectionProps {
  onOpenDay1Register: () => void;
  onOpenHackathonRegister: () => void;
}

export const PrizesSection: React.FC<PrizesSectionProps> = ({
  onOpenDay1Register,
  onOpenHackathonRegister,
}) => {
  const podiumPrizes = [
    {
      place: "01",
      rank: "Champion Team",
      cash: "₹25,000",
      trophy: "Custom 1st Place openSUSE Trophy",
      swag: "Winner Certificates + 4 Reward Shirts",
      border: "border-yellow-500/40 hover:border-yellow-400",
      accent: "text-yellow-400",
      badge: "1ST PLACE",
    },
    {
      place: "02",
      rank: "Runner-Up Team",
      cash: "₹15,000",
      trophy: "Custom 2nd Place openSUSE Trophy",
      swag: "Winner Certificates + 4 Reward Shirts",
      border: "border-slate-400/40 hover:border-white",
      accent: "text-slate-200",
      badge: "2ND PLACE",
    },
    {
      place: "03",
      rank: "Third Place Team",
      cash: "₹10,000",
      trophy: "Custom 3rd Place openSUSE Trophy",
      swag: "Winner Certificates + 4 Reward Shirts",
      border: "border-amber-700/40 hover:border-amber-500",
      accent: "text-amber-500",
      badge: "3RD PLACE",
    },
  ];

  return (
    <section id="prizes" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 03. REWARDS &amp; SWAG VAULT
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Prizes &amp; Participant Swag
            </h2>
          </div>
          
          <div className="text-xs text-slate-400">
            <span className="bg-[#0b1e15] border border-geeko-500/30 px-3 py-1.5 rounded-full text-geeko-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>₹50,000 CASH POOL + TROPHIES</span>
            </span>
          </div>
        </div>

        {/* 3 Clean Podium Cards (Dribbble Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {podiumPrizes.map((p, i) => (
            <div
              key={i}
              className={`p-6 sm:p-7 rounded-2xl bg-[#09130e] border ${p.border} transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-[1.02]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${p.border} ${p.accent}`}>
                    {p.badge}
                  </span>
                  <span className="text-2xl font-black text-slate-600 font-sans">
                    #{p.place}
                  </span>
                </div>

                <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                  TEAM CASH REWARD
                </div>
                <div className={`text-3xl sm:text-4xl font-black font-sans mt-0.5 tracking-tight ${p.accent}`}>
                  {p.cash}
                </div>
                <div className="text-xs font-bold text-white mt-1 uppercase">
                  {p.rank}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-geeko-500/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-geeko-400 shrink-0" />
                  <span>{p.trophy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{p.swag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Bounties & Swag Kit Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#091510] border border-geeko-500/20">
            <div className="text-amber-400 font-bold mb-1">⚡ MIDNIGHT BUG HUNT (DAY 2 01:00)</div>
            <div className="text-white font-bold text-base">₹2,000 Cash Pool</div>
            <p className="text-slate-400 text-[11px] mt-1 font-sans">
              Rookie (₹1k) &amp; Expert (₹1k) individual sandboxes for night hackers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#091510] border border-geeko-500/20">
            <div className="text-geeko-400 font-bold mb-1">🎮 GEEKO ARCADE &amp; QUEST</div>
            <div className="text-white font-bold text-base">₹4,000 Reward Pool</div>
            <p className="text-slate-400 text-[11px] mt-1 font-sans">
              Arcade champions (₹2.5k) &amp; digital QR Quest Passport explorers (₹1.5k).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#091510] border border-geeko-500/20">
            <div className="text-emerald-400 font-bold mb-1">👕 25 COMMEMORATIVE SHIRTS</div>
            <div className="text-white font-bold text-base">₹7,500 Production</div>
            <p className="text-slate-400 text-[11px] mt-1 font-sans">
              Screen-printed openSUSE shirts for top 3 teams &amp; side challenge winners.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-8 pt-6 border-t border-geeko-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            Ready to compete in the 20-hour Buildathon?
          </div>
          <button
            onClick={onOpenHackathonRegister}
            className="px-5 py-2.5 rounded-xl bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-black uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center gap-2"
          >
            <span>Register Your Team (3–4 Members)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
