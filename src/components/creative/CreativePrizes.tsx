import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gift, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../../../proposal/utils/soundEffects';

interface CreativePrizesProps {
  onOpenHackathonRegister: () => void;
}

export const CreativePrizes: React.FC<CreativePrizesProps> = ({ onOpenHackathonRegister }) => {
  const triggerConfetti = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#73ba25', '#35f276', '#f5a623', '#ffffff'],
    });
  };

  const prizeCards = [
    {
      place: "01",
      rank: "CHAMPION TEAM",
      cash: "₹25,000",
      trophy: "Custom Geeko Acrylic/Wood Trophy",
      swag: "Winner Certificates + 4 Reward T-Shirts",
      border: "border-yellow-500/50 hover:border-yellow-400",
      glow: "shadow-[0_0_40px_rgba(234,179,8,0.25)]",
      accent: "text-yellow-400",
      bg: "from-[#1a1708] to-[#080702]",
      badge: "1ST PLACE",
    },
    {
      place: "02",
      rank: "RUNNER-UP TEAM",
      cash: "₹15,000",
      trophy: "Custom Runner-Up Trophy",
      swag: "Winner Certificates + 4 Reward T-Shirts",
      border: "border-slate-400/50 hover:border-white",
      glow: "shadow-[0_0_30px_rgba(203,213,225,0.15)]",
      accent: "text-slate-200",
      bg: "from-[#141816] to-[#050706]",
      badge: "2ND PLACE",
    },
    {
      place: "03",
      rank: "THIRD PLACE TEAM",
      cash: "₹10,000",
      trophy: "Custom Third-Place Trophy",
      swag: "Winner Certificates + 4 Reward T-Shirts",
      border: "border-amber-700/50 hover:border-amber-500",
      glow: "shadow-[0_0_30px_rgba(180,83,9,0.15)]",
      accent: "text-amber-500",
      bg: "from-[#16120b] to-[#070503]",
      badge: "3RD PLACE",
    },
  ];

  return (
    <section id="prizes" className="py-20 sm:py-28 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 bg-geeko-500 rounded-sm"></span>
              <span>// 04 REWARDS &amp; SWAG VAULT</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              The Podium.
            </h2>
          </div>

          <button
            onClick={triggerConfetti}
            className="px-4 py-2 rounded-xl bg-geeko-500/20 hover:bg-geeko-500 text-geeko-300 hover:text-black border border-geeko-500/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(115,186,37,0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>CELEBRATE PODIUM ⚡</span>
          </button>
        </div>

        {/* 3 Main Holographic Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {prizeCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl border p-6 sm:p-8 bg-gradient-to-b ${card.bg} ${card.border} ${card.glow} flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Card top badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs px-2.5 py-0.5 rounded font-black border ${card.border} ${card.accent}`}>
                  {card.badge}
                </span>
                <span className="text-3xl font-display font-black text-slate-700 group-hover:text-slate-500 transition-colors">
                  #{card.place}
                </span>
              </div>

              {/* Cash Bounty Display */}
              <div className="my-4">
                <div className="text-[11px] text-slate-400 uppercase tracking-widest">
                  TEAM CASH REWARD
                </div>
                <div className={`font-display font-black text-4xl sm:text-5xl mt-1 tracking-tight ${card.accent}`}>
                  {card.cash}
                </div>
                <div className="text-xs text-white font-bold mt-1 tracking-wider uppercase">
                  {card.rank}
                </div>
              </div>

              {/* Inclusions */}
              <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-geeko-400 shrink-0" />
                  <span>{card.trophy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{card.swag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Bounties & Swag Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#07130e] border border-geeko-500/20">
            <div className="text-amber-400 font-bold mb-1 flex items-center gap-1.5">
              <span>⚡ MIDNIGHT BUG HUNT</span>
            </div>
            <div className="text-white font-bold text-base">₹2,000 Cash Pool</div>
            <p className="text-slate-400 text-[11px] mt-1">
              Rookie (₹1k) &amp; Expert (₹1k) individual sandboxes on Day 2 01:00.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#07130e] border border-geeko-500/20">
            <div className="text-geeko-400 font-bold mb-1 flex items-center gap-1.5">
              <span>🎮 GEEKO ARCADE &amp; QUEST</span>
            </div>
            <div className="text-white font-bold text-base">₹4,000 Side Pool</div>
            <p className="text-slate-400 text-[11px] mt-1">
              Arcade winners (₹2.5k) and Quest Passport explorers (₹1.5k).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#07130e] border border-geeko-500/20 sm:col-span-2 lg:col-span-1">
            <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
              <span>👕 25 COMMEMORATIVE SHIRTS</span>
            </div>
            <div className="text-white font-bold text-base">₹7,500 Budgeted</div>
            <p className="text-slate-400 text-[11px] mt-1">
              Screen-printed openSUSE reward tees for top 3 teams &amp; quest champions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
