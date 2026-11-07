import React, { useState } from 'react';
import {
  CATERING_BUDGET,
  OPERATIONS_BUDGET,
  BUDGET_SUMMARY,
  ATTENDANCE_SENSITIVITY,
  SPONSOR_TIERS,
} from '../proposalData';
import { soundManager } from '../utils/soundEffects';

export const BudgetMatrix: React.FC = () => {
  const [budgetTab, setBudgetTab] = useState<'all' | 'catering' | 'operations' | 'sponsors'>('all');
  const [selectedSensitivity, setSelectedSensitivity] = useState(2); // default 250 cap

  // Interactive sponsor checklist state
  const [pledgedTiers, setPledgedTiers] = useState<{ [key: string]: boolean }>({
    'Prize Partner': false,
    'Food Partner': false,
    'Community Partners (2× Slots)': false,
    'T-Shirt & Swag Partner': false,
    'Operations Partner': false,
  });

  const toggleSponsorPledge = (role: string) => {
    soundManager.playSelect();
    setPledgedTiers((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  // Calculate pledged total and remaining gap
  const totalPledged = SPONSOR_TIERS.reduce((acc, tier) => {
    return pledgedTiers[tier.role] ? acc + tier.target : acc;
  }, 0);

  const basePlanningEnvelope = BUDGET_SUMMARY.totalPlanningEnvelope;
  const simulatedRemainingGap = Math.max(0, basePlanningEnvelope - totalPledged);

  return (
    <section id="budget" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 12–16 // FINANCIAL GOVERNANCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Itemized Budget & Sponsorship Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Transparent, zero-profit community budget. College facilities provided free in-kind. 10% reserve included.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#08130e] border border-geeko-500/30 text-xs">
          {[
            { id: 'all', label: 'Overview & Envelope' },
            { id: 'catering', label: 'Catering (₹1,20,400)' },
            { id: 'operations', label: 'Operations (₹64,000)' },
            { id: 'sponsors', label: 'Sponsor Gap Simulator' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => {
                soundManager.playKeyClick();
                setBudgetTab(t.id as any);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                budgetTab === t.id
                  ? 'bg-geeko-500 text-obsidian-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview & High-level Ledger */}
      {(budgetTab === 'all' || budgetTab === 'sponsors') && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#07130e] border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">1. Catering Subtotal</div>
            <div className="text-xl font-bold text-white mt-1">₹1,20,400</div>
            <div className="text-[11px] text-geeko-400 mt-0.5">280 Servings × 6 meal slots</div>
          </div>
          <div className="p-4 rounded-xl bg-[#07130e] border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">2. Operations Subtotal</div>
            <div className="text-xl font-bold text-white mt-1">₹64,000</div>
            <div className="text-[11px] text-geeko-400 mt-0.5">Security, T-shirts, Trophies, AV</div>
          </div>
          <div className="p-4 rounded-xl bg-[#07130e] border border-geeko-500/20">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">3. Conditional Prizes</div>
            <div className="text-xl font-bold text-white mt-1">₹50,000</div>
            <div className="text-[11px] text-amber-400 mt-0.5">Top-3 Buildathon Cash Pool</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0e271c] border border-geeko-400 shadow-[0_0_20px_rgba(115,186,37,0.25)]">
            <div className="text-[10px] text-geeko-300 uppercase tracking-wider font-bold">
              Total Envelope (10% Reserve)
            </div>
            <div className="text-2xl font-black text-emerald-300 mt-1">₹2,57,840</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Direct ₹2,34,400 + Reserve ₹23,440</div>
          </div>
        </div>
      )}

      {/* Tab: Catering Itemized + Sensitivity */}
      {(budgetTab === 'all' || budgetTab === 'catering') && (
        <div className="mb-6 rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-geeko-500/20 pb-3 mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-geeko-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-geeko-400"></span>
                ITEMIZED CATERING BUDGET (BASE CASE: 280 HEADCOUNT)
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                250 registered participants + 30 working crew & mentors. Day 2 lunch is not catered.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40">
              Subtotal: ₹1,20,400
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-geeko-500/20 text-slate-400 text-[10px] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Service / Meal Item</th>
                  <th className="py-2.5 px-3">Headcount</th>
                  <th className="py-2.5 px-3">Rate (INR)</th>
                  <th className="py-2.5 px-3 text-right">Total (INR)</th>
                  <th className="py-2.5 px-3">Delivery Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-geeko-500/10 text-slate-300">
                {CATERING_BUDGET.map((row, i) => (
                  <tr key={i} className="hover:bg-[#0a1a12]/50">
                    <td className="py-2.5 px-3 font-semibold text-white">{row.item}</td>
                    <td className="py-2.5 px-3 font-mono">{row.qty}</td>
                    <td className="py-2.5 px-3 font-mono">₹{row.unitRate}</td>
                    <td className="py-2.5 px-3 font-mono text-right font-bold text-emerald-400">
                      ₹{row.total.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Attendance Sensitivity Switcher */}
          <div className="mt-6 pt-4 border-t border-geeko-500/20">
            <div className="text-xs text-slate-300 font-bold mb-3">
              ATTENDANCE SENSITIVITY MATRIX (Page 14):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ATTENDANCE_SENSITIVITY.map((sc, idx) => {
                const isSelected = selectedSensitivity === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      soundManager.playKeyClick();
                      setSelectedSensitivity(idx);
                    }}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0d261b] border-geeko-400 shadow-[0_0_12px_rgba(115,186,37,0.3)]'
                        : 'bg-[#06110c] border-geeko-500/20 hover:border-geeko-500/40 text-slate-300'
                    }`}
                  >
                    <div className="text-[11px] font-bold text-white">{sc.headcount}</div>
                    <div className="text-[10px] text-slate-400 mt-1">Servings: {sc.dayNightServings}</div>
                    <div className="text-xs font-bold text-emerald-400 mt-2">
                      Total: ₹{sc.totalWithContingency.toLocaleString('en-IN')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Operations & Awards Itemized */}
      {(budgetTab === 'all' || budgetTab === 'operations') && (
        <div className="mb-6 rounded-xl border border-geeko-500/20 bg-[#07130e] p-5 sm:p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-geeko-500/20 pb-3 mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-geeko-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-geeko-400"></span>
                ITEMIZED OPERATIONS & AWARDS BUDGET
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Venue, existing AV, routine cleaning & internet provided free by college.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40">
              Subtotal: ₹64,000
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-geeko-500/20 text-slate-400 text-[10px] uppercase tracking-wider">
                  <th className="py-2 px-3">Item Name</th>
                  <th className="py-2 px-3">Qty</th>
                  <th className="py-2 px-3">Rate (INR)</th>
                  <th className="py-2 px-3 text-right">Total (INR)</th>
                  <th className="py-2 px-3">Scope Allowance / Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-geeko-500/10 text-slate-300">
                {OPERATIONS_BUDGET.map((row, i) => (
                  <tr key={i} className="hover:bg-[#0a1a12]/50">
                    <td className="py-2 px-3 font-semibold text-white">{row.item}</td>
                    <td className="py-2 px-3 font-mono">{row.qty}</td>
                    <td className="py-2 px-3 font-mono">₹{row.unitRate}</td>
                    <td className="py-2 px-3 font-mono text-right font-bold text-emerald-400">
                      ₹{row.total.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2 px-3 text-[11px] text-slate-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Sponsorship Strategy & Interactive Gap Simulator */}
      {(budgetTab === 'all' || budgetTab === 'sponsors') && (
        <div className="rounded-xl border border-geeko-500/30 bg-[#06120c] p-5 sm:p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-geeko-500/20 pb-3 mb-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-amber-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400"></span>
                INTERACTIVE SPONSORSHIP GAP SIMULATOR (PAGES 16–17)
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Toggle prospective sponsor commitments below to simulate how the funding gap diminishes in real time.
              </p>
            </div>
          </div>

          {/* Interactive Gap Meter Banner */}
          <div className="mb-6 p-4 rounded-lg bg-[#0a1f15] border border-geeko-500/30 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider">
                Current Planning Envelope: <strong>₹2,57,840</strong>
              </div>
              <div className="text-xs text-geeko-300 mt-1">
                Simulated Pledged Support: <strong className="text-emerald-300">₹{totalPledged.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                Simulated Remaining Gap
              </div>
              <div className="text-2xl font-black font-mono text-white">
                {simulatedRemainingGap === 0 ? (
                  <span className="text-emerald-400">₹0 (100% FUNDED! 🎉)</span>
                ) : (
                  <span className="text-amber-400">₹{simulatedRemainingGap.toLocaleString('en-IN')}</span>
                )}
              </div>
            </div>
          </div>

          {/* Sponsor Tier Cards */}
          <div className="space-y-3">
            {SPONSOR_TIERS.map((tier, idx) => {
              const isChecked = pledgedTiers[tier.role] || false;
              return (
                <div
                  key={idx}
                  onClick={() => toggleSponsorPledge(tier.role)}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-[#0f2d1e] border-geeko-400 shadow-[0_0_15px_rgba(115,186,37,0.2)]'
                      : 'bg-[#081510] border-geeko-500/20 hover:border-geeko-500/40 text-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-1 w-4 h-4 accent-geeko-500 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>{tier.role}</span>
                      <span className="text-emerald-400 font-mono">{tier.targetFormatted}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-normal">
                      {tier.deliverables}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 p-3 rounded bg-[#081510] border border-geeko-500/20 text-[11px] text-slate-400 leading-relaxed">
            *All funded scenarios are hypothetical outreach targets. Confirmed cash reduces the gap directly; donated goods reduce matching expense lines without double counting. Sponsors receive aggregate attendance and opt-in engagement only.
          </div>
        </div>
      )}
    </section>
  );
};
