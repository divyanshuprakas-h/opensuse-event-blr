import React, { useState } from 'react';
import { Mail, CheckCircle2, HeartHandshake } from 'lucide-react';
import { BUDGET_BREAKDOWN } from '../data/eventData';

export const BudgetSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyContact = () => {
    navigator.clipboard.writeText('divyanshuprakash914@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="budget" className="py-16 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 04. TRANSPARENCY & SPONSORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Community Budget: ₹90,000 INR
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 text-geeko-400 font-bold">
              100% NON-PROFIT • FREE ADMISSION
            </span>
          </div>
        </div>

        {/* 6 Category Row Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {BUDGET_BREAKDOWN.map((item, idx) => (
            <div
              key={idx}
              className="bg-obsidian-900 border border-slate-800 p-3.5 flex flex-col justify-between hover:border-geeko-500 transition-colors"
            >
              <div>
                <div className="text-[10px] text-geeko-400 font-bold mb-1">
                  {item.percentage}%
                </div>
                <h4 className="text-xs font-bold text-white uppercase line-clamp-2 mb-1.5">
                  {item.category}
                </h4>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-black text-geeko-400">{item.amount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship CTA Callout */}
        <div className="bg-pine-900/30 border-2 border-geeko-500 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#173f35]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-black text-white uppercase flex items-center gap-2 justify-center sm:justify-start">
              <HeartHandshake className="w-4 h-4 text-geeko-400" />
              <span>Sponsor or Partner with Bengaluru Connect 2027</span>
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              Connect your brand with 300+ developers, systems engineers, and open-source contributors.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:divyanshuprakash914@gmail.com?subject=Sponsorship%20Inquiry%20-%20openSUSE%20Bengaluru%20Connect%202027"
              className="px-4 py-2 bg-geeko-500 hover:bg-geeko-400 text-black text-xs font-bold uppercase tracking-wider border-2 border-black whitespace-nowrap cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
            >
              Get Prospectus
            </a>
            <button
              onClick={copyContact}
              className="px-3 py-2 bg-obsidian-900 border border-slate-700 hover:border-geeko-400 text-slate-300 text-xs cursor-pointer"
            >
              {copiedEmail ? 'Copied' : 'Copy Email'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
