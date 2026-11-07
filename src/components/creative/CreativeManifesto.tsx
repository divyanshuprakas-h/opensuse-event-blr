import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../../../proposal/utils/soundEffects';

export const CreativeManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      num: "250",
      label: "BUILDER QUOTA",
      subtext: "One single admission pool. Capped strictly at 250 hackers and 83 teams for maximum mentorship ratio.",
    },
    {
      num: "20H",
      label: "CONTINUOUS CLOCK",
      subtext: "First Commit Ceremony at 14:30 Day 1. Hard code freeze at 10:30 Day 2. Meals do not pause the clock.",
    },
    {
      num: "06",
      label: "INNOVATION TRACKS",
      subtext: "From low-level CLI utilities to Linux kernel security, desktop UX, and direct openSUSE upstream PRs.",
    },
    {
      num: "100%",
      label: "OPEN SOURCE",
      subtext: "Public GitHub repos, approved FOSS licenses, and verified offline reproducibility. Zero proprietary traps.",
    },
  ];

  const philosophyTabs = [
    {
      title: "01 // THE MANIFESTO",
      quote: "Software freedom is built in code repositories, not boardroom slide decks.",
      detail: "Bengaluru Connect brings Linux enthusiasts, contributors, and first-time hackers together under one roof. We configure real package builds in OBS, master Zypper SAT solving, and submit real upstream code.",
    },
    {
      title: "02 // WHY openSUSE",
      quote: "The powerhouse of open-source distribution architecture.",
      detail: "From Tumbleweed's leading rolling-edge kernel to Leap's rock-solid enterprise stability, Snapper's instant Btrfs rollback safety net, and MicroOS transactional containers.",
    },
    {
      title: "03 // THE 20H PROMISE",
      quote: "Every submitting team earns real stage expo space.",
      detail: "No team is sidelined. All 83 teams showcase their prototypes to six dual-judge panels. Six top finalists pitch on the grand stage before the awards ceremony.",
    },
  ];

  return (
    <section id="manifesto" className="py-20 sm:py-28 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Telemetry Header */}
        <div className="flex items-center gap-3 mb-4 text-xs text-geeko-400 font-bold uppercase tracking-wider">
          <span className="w-2.5 h-2.5 bg-geeko-500 rounded-sm"></span>
          <span>// 01 ARCHITECTURAL MANIFESTO</span>
        </div>

        {/* Oversized Brutalist Headline */}
        <div className="mb-14">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92]">
            <span>NO SLIDE DECKS. </span>
            <span className="text-geeko-400">PURE SOURCE. </span>
            <span className="text-stroke-white">UPSTREAM IMPACT.</span>
          </h2>
        </div>

        {/* 4 Kinetic Metric Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#091a13] to-[#040907] border border-geeko-500/20 hover:border-geeko-400/60 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all group"
            >
              <div className="font-display font-black text-5xl sm:text-6xl text-white group-hover:text-geeko-400 transition-colors tracking-tighter">
                {p.num}
              </div>
              <div className="text-xs font-bold text-emerald-400 tracking-widest mt-2 uppercase">
                {p.label}
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {p.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Philosophical Deck Switcher */}
        <div className="rounded-2xl border border-geeko-500/30 bg-[#06120c]/90 p-6 sm:p-8 backdrop-blur-md">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-geeko-500/20">
            {philosophyTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => {
                  soundManager.playKeyClick();
                  setActiveTab(i);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === i
                    ? 'bg-geeko-500 text-obsidian-950 shadow-[0_0_15px_rgba(115,186,37,0.4)]'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Tab Statement */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-snug">
                "{philosophyTabs[activeTab].quote}"
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {philosophyTabs[activeTab].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
