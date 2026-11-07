import React from 'react';
import { PROPOSAL_METADATA } from '../proposalData';

export const VenueOperations: React.FC = () => {
  const operationsChecks = [
    { area: "Rooms & Access", check: "280-person opening capacity, 2 lab rooms, 250 builder seats, 83 expo tables, quiet rest space, accessible routes.", lead: "Logistics Lead" },
    { area: "Power & Wi-Fi", check: "Load-tested circuits, cable covers, Wi-Fi engineered for 350+ devices, 4G backup hotspots & cached packages.", lead: "Technical Lead" },
    { area: "AV & Stage", check: "Dual projectors, PA systems, wireless mics, display timers, offline slide backup copies and transition rehearsals.", lead: "Program Lead" },
    { area: "Lab Readiness", check: "Pre-tested Zypper/YaST VMs, USB boot media, sample repositories, offline guides; participant-owned laptops.", lead: "Mentors Lead" },
    { area: "Demo Arena", check: "83 numbered team demo stations, power taps, repo QR codes, 10:30 commit freeze check and score sheet folders.", lead: "Judging Lead" },
    { area: "Privacy & Badges", check: "Participant ID barcodes, dietary badges, consent tags, strict no-sharing policy with external sponsor lists.", lead: "Registration Lead" },
  ];

  const supportRoster = [
    { role: "Core Decision Organizers", count: 3, notes: "Divyanshu Prakash, Dushyant Acharya, Rithull Raj Kallat" },
    { role: "Volunteers (Day & Overnight)", count: 12, notes: "Registration (4), AV (2), Catering (2), Expo (2), Accessibility (2)" },
    { role: "Technical Mentors & Lab Leads", count: 6, notes: "Two labs + rotating overnight technical helpdesk" },
    { role: "Media & Video Production", count: 2, notes: "Capture with consent, highlight edit locked by 14:00 Day 2" },
    { role: "Speakers & Visiting Mentors", count: 3, notes: "30-min talk slots; assist with judging and mentoring" },
    { role: "Safety, Security & Venue Liaisons", count: 4, notes: "Shift oversight, rest area privacy & night safety monitoring" },
  ];

  const safetyGates = [
    {
      gate: "Go/No-Go Gate 1 (T−21 Days)",
      criteria: "Requires written college venue and overnight permission, essential funding locked, supplier catering quotes, and confirmed staffing roster.",
      action: "Core organizers record a formal proceed, resize, or postpone decision."
    },
    {
      gate: "Go/No-Go Gate 2 (T−7 Days)",
      criteria: "Recheck all permits, freeze participant registration headcount, lock catering contracts, verify security guard shifts and medical first-aid readiness.",
      action: "Final reconfirmation; freeze meal orders and dispatch participant packing briefs."
    }
  ];

  return (
    <section id="venue" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 09–11 // LOGISTICS & SAFETY READINESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Venue, Staffing & Decision Gates
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Execution readiness: Newton School of Technology campus, 30-person roster, and safety gates.
          </p>
        </div>

        <div className="text-xs text-right text-slate-400">
          <div>Venue: <strong className="text-white">{PROPOSAL_METADATA.venue}</strong></div>
          <div className="text-emerald-400 font-bold">Free College In-Kind Partnership</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Venue Checks & Operations */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md">
            <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
              <h3 className="text-sm font-bold text-geeko-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-geeko-400"></span>
                TECHNICAL OPERATIONS WORKSTREAMS (PAGE 12)
              </h3>
              <span className="text-[10px] text-slate-400">Newton School of Tech</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {operationsChecks.map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#0a1a12] border border-geeko-500/10">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{item.area}</span>
                    <span className="text-[10px] text-geeko-400 font-normal">{item.lead}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    {item.check}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Go/No-Go Decision Gates */}
          <div className="rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md">
            <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
              <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400"></span>
                FORMAL GO / NO-GO DECISION GATES (PAGE 13)
              </h3>
              <span className="text-[10px] text-slate-400">Risk Mitigation</span>
            </div>

            <div className="space-y-3 text-xs">
              {safetyGates.map((g, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0d1c14] border border-amber-500/20">
                  <div className="font-bold text-amber-300">{g.gate}</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-normal">
                    {g.criteria}
                  </p>
                  <div className="mt-2 text-[10px] text-emerald-400 font-bold">
                    Action: {g.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 30-Person Staffing Roster */}
        <div className="lg:col-span-5 rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4">
              <h3 className="text-sm font-bold text-geeko-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-geeko-400"></span>
                30-PERSON SUPPORT ROSTER (PAGE 11)
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-geeko-500/20 text-geeko-300 border border-geeko-500/40 font-bold">
                Total: 30 Crew
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              {supportRoster.map((st, i) => (
                <div key={i} className="p-2.5 rounded bg-[#091a13] border border-geeko-500/10 flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="font-bold text-white">{st.role}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{st.notes}</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 bg-emerald-950 rounded">
                    {st.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Overnight Rota & Safety Rule */}
          <div className="mt-4 p-3 rounded-lg bg-[#0c1f17] border border-geeko-500/30 text-xs">
            <div className="text-geeko-300 font-bold mb-1">NIGHT SHIFT COVERAGE (22:00 – 10:00)</div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Three shifts (22:00–02:00, 02:00–06:00, 06:00–10:00) each have a designated duty organizer, two volunteers, one technical mentor, and professional security/first-aid response cover. Never assign any person to uninterrupted 30-hour duty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
