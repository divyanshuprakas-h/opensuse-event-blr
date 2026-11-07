import React from 'react';
import { PROPOSAL_METADATA, DECISION_STATUS, GOALS_MEASURES } from '../proposalData';

export const ExecutiveHUD: React.FC = () => {
  return (
    <section id="hud" className="py-8 scroll-mt-20">
      {/* Hero Terminal Card */}
      <div className="relative rounded-xl border border-geeko-500/30 bg-gradient-to-b from-[#091510] to-[#040806] p-6 sm:p-8 shadow-[0_0_40px_rgba(115,186,37,0.12)] overflow-hidden">
        {/* Decorative corner brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-geeko-400"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-geeko-400"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-geeko-400"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-geeko-400"></div>

        {/* Sub-header badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-geeko-500/10 border border-geeko-500/30 text-geeko-300 font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-geeko-400 animate-pulse"></span>
            <span>{PROPOSAL_METADATA.documentTitle}</span>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Planning proposal · 07 Nov 2026 · Page 01–04
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-mono">
            <span className="text-geeko-400">Bengaluru Connect</span>{' '}
            <span className="text-emerald-300">2027</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {PROPOSAL_METADATA.tagline}
          </p>
          <div className="pt-2">
            <span className="inline-block text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-geeko-400 via-emerald-300 to-yast-cyan tracking-wider font-mono">
              {PROPOSAL_METADATA.motto}
            </span>
          </div>
        </div>

        {/* Quick Grid Tickers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-geeko-500/20 font-mono">
          <div className="p-3.5 rounded-lg bg-[#0d2219]/60 border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">When</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">January 2027</div>
            <div className="text-[11px] text-geeko-400 mt-0.5">Two consecutive days</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#0d2219]/60 border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Where</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">Newton School of Tech</div>
            <div className="text-[11px] text-emerald-400 mt-0.5">Venue & Wi-Fi free</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#0d2219]/60 border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Community Cap</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">250 Builders</div>
            <div className="text-[11px] text-geeko-400 mt-0.5">280 site working headcount</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#0d2219]/60 border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Signature Event</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">Geeko Buildathon</div>
            <div className="text-[11px] text-amber-400 mt-0.5 font-bold">20 Hours Non-Stop</div>
          </div>
        </div>

        {/* Lead Organizers Roster */}
        <div className="mt-4 p-3 rounded-lg bg-[#07130e] border border-geeko-500/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 text-geeko-400">
            <span className="font-bold">ORGANIZING COMMITTEE:</span>
            <span>Divyanshu Prakash · Dushyant Acharya · Rithull Raj Kallat</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Website: <span className="text-geeko-300 underline">divyanshuprakas-h.github.io/opensuse-event-blr/</span>
          </div>
        </div>
      </div>

      {/* Decision Status & Operating Position */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Decision Table */}
        <div className="lg:col-span-7 rounded-xl border border-geeko-500/20 bg-[#07100c] p-5 sm:p-6 shadow-md font-mono">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-geeko-500/20">
            <h2 className="text-sm sm:text-base font-bold text-geeko-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-geeko-400 rounded-sm"></span>
              DECISION-READY PLAN // APPROVAL STATUS
            </h2>
            <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-500/30">
              Page 03
            </span>
          </div>

          <div className="space-y-3">
            {DECISION_STATUS.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#0a1611]/80 border border-geeko-500/10 hover:border-geeko-500/30 transition-colors">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>{item.decision}</span>
                  <span className="text-[10px] text-geeko-400">P-{idx + 1}</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                  {item.position}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200 leading-relaxed">
            <strong>Approval Requested:</strong> Adopt this proposal as the working program and cost ceiling (Rs. 2,57,840) for partner discussions; authorize quotations and sponsorship outreach. Release expenditure only against approved funds and written purchase approvals.
          </div>
        </div>

        {/* Right Column: Measurable Goals & Headcount Specs */}
        <div className="lg:col-span-5 rounded-xl border border-geeko-500/20 bg-[#07100c] p-5 sm:p-6 shadow-md font-mono flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-geeko-500/20">
              <h2 className="text-sm sm:text-base font-bold text-geeko-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-geeko-400 rounded-sm"></span>
                TARGET GOALS & MEASURES
              </h2>
              <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-500/30">
                Page 04
              </span>
            </div>

            <div className="space-y-3">
              {GOALS_MEASURES.map((gm, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#0a1611]/60 border border-geeko-500/10">
                  <div className="text-xs font-bold text-emerald-300 flex items-center gap-2">
                    <span className="text-geeko-400">▸</span>
                    <span>{gm.goal}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 pl-4 leading-normal">
                    {gm.measure}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Headcount breakdown card */}
          <div className="mt-4 p-3 rounded-lg bg-[#0c1c15] border border-geeko-500/30 text-xs">
            <div className="text-geeko-400 font-bold mb-1">PARTICIPANT ALLOCATION (1 POOL)</div>
            <div className="text-slate-300 text-[11px] leading-relaxed">
              One registration pool capped at <strong className="text-white">250 participants</strong>. All 250 may stay overnight. Budget covers 250 participants + 30 working crew/mentors = <strong className="text-emerald-400">280 total site headcount</strong>. Up to 83 teams of 3–4 members.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
