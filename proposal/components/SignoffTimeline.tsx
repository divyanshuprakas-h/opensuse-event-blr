import React, { useState } from 'react';
import { TIMELINE_MILESTONES, PROPOSAL_METADATA } from '../proposalData';
import { soundManager } from '../utils/soundEffects';

export const SignoffTimeline: React.FC = () => {
  const [copiedManifest, setCopiedManifest] = useState(false);

  const handlePrint = () => {
    soundManager.playKeyClick();
    window.print();
  };

  const handleCopySummary = () => {
    soundManager.playSuccess();
    const text = `openSUSE India – Bengaluru Connect 2027 (Proposal v1.0.0)
Venue: Newton School of Technology, Bengaluru
Headcount: 250 Participants (Working Site: 280)
Signature: 20-Hour Geeko Buildathon (Day 1 14:30 - Day 2 10:30)
Budget Envelope: ₹2,57,840 (Direct: ₹2,34,400 + 10% Reserve: ₹23,440)
Organizers: Divyanshu Prakash, Dushyant Acharya, Rithull Raj Kallat
Event URL: https://divyanshuprakas-h.github.io/opensuse-event-blr/`;
    navigator.clipboard.writeText(text);
    setCopiedManifest(true);
    setTimeout(() => setCopiedManifest(false), 2500);
  };

  return (
    <section id="timeline" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 16–18 // ROADMAP & FORMAL REVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Operational Timeline & Sign-off
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Staged deliverables from November 2026 through T+30 days contributor follow-up.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopySummary}
            className="px-3 py-1.5 rounded-lg bg-[#081811] hover:bg-[#0c261b] text-geeko-300 border border-geeko-500/30 text-xs transition-colors cursor-pointer"
          >
            {copiedManifest ? '✓ Summary Copied!' : '📋 Copy Summary'}
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-lg bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            🖨️ Print / Save PDF
          </button>
        </div>
      </div>

      {/* Operational Milestone Timeline */}
      <div className="rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md mb-8">
        <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
          <h3 className="text-sm font-bold text-geeko-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-geeko-400"></span>
            DELIVERY SCHEDULE // CHRONOLOGICAL MILESTONES (PAGE 18)
          </h3>
          <span className="text-[10px] text-slate-400">T = Day 1 Confirmed Date</span>
        </div>

        <div className="space-y-3 text-xs">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-[#091a13] border border-geeko-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-geeko-500/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="w-32 shrink-0 font-bold text-emerald-400 text-xs">
                  {item.period}
                </span>
                <p className="text-slate-200 text-[11px] leading-relaxed">
                  {item.task}
                </p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#0b2218] text-slate-400 border border-geeko-500/20 shrink-0 self-start sm:self-center">
                {item.owner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Record & Sign-off Block */}
      <div className="rounded-xl border border-geeko-500/30 bg-[#06120c] p-6 shadow-md">
        <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
          <h3 className="text-sm sm:text-base font-bold text-geeko-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-geeko-400"></span>
            FORMAL REVIEW RECORD & SIGN-OFF BLOCK
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
            Page 18 Final
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-lg bg-[#081812] border border-geeko-500/20 space-y-1">
            <div className="text-slate-400 text-[10px] uppercase">Core Team Review</div>
            <div className="text-white font-bold">Divyanshu Prakash · Dushyant Acharya · Rithull Raj Kallat</div>
            <div className="text-emerald-400 text-[11px]">Status: Ratified 07 November 2026</div>
          </div>

          <div className="p-3 rounded-lg bg-[#081812] border border-geeko-500/20 space-y-1">
            <div className="text-slate-400 text-[10px] uppercase">Venue Partnership Reference</div>
            <div className="text-white font-bold">{PROPOSAL_METADATA.venue}</div>
            <div className="text-slate-400 text-[11px]">Free college collaboration; basic facilities & Wi-Fi free</div>
          </div>

          <div className="p-3 rounded-lg bg-[#081812] border border-geeko-500/20 space-y-1">
            <div className="text-slate-400 text-[10px] uppercase">Approved Expenditure Ceiling</div>
            <div className="text-emerald-400 font-bold font-mono text-sm">₹2,57,840 INR</div>
            <div className="text-slate-400 text-[11px]">Direct: ₹2,34,400 + 10% Controlled Reserve: ₹23,440</div>
          </div>

          <div className="p-3 rounded-lg bg-[#081812] border border-geeko-500/20 space-y-1">
            <div className="text-slate-400 text-[10px] uppercase">Next Formal Decision Gate</div>
            <div className="text-amber-400 font-bold">T−21 Days (Gate 1 Validation)</div>
            <div className="text-slate-400 text-[11px]">Overnight permission, locked funding & safety rosters</div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-geeko-500/20 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            Prepared from organizer requirements. College venue and basic facilities provided at no cash cost. Vendor rates are planning estimates.
          </div>
          <a
            href="../"
            className="text-geeko-400 hover:text-white underline font-bold"
          >
            ← Return to Main Bengaluru Connect 2027 Site
          </a>
        </div>
      </div>
    </section>
  );
};
