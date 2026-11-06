import React, { useState } from 'react';
import { Award, DollarSign, CheckCircle2, Mail, ExternalLink, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUDGET_BREAKDOWN, EVENT_CONFIG } from '../data/eventData';

export const BudgetSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyContact = () => {
    navigator.clipboard.writeText('divyanshuprakash914@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="budget" className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 05. FINANCIAL TRANSPARENCY & SPONSORSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Community Budget: ₹90,000 INR
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-geeko-400 font-bold">
              100% NON-PROFIT • FREE ADMISSION FOR ALL
            </span>
          </div>
        </div>

        {/* Narrative & Callout */}
        <div className="mb-12 bg-pine-900/30 border-2 border-slate-800 p-6 sm:p-8 font-mono text-xs text-slate-300">
          <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
            An estimated budget of <strong className="text-geeko-400 font-bold">₹90,000 INR</strong> has been prepared by the organizing committee to fund event logistics, participant refreshments, technical infrastructure, Geeko merchandise, speaker hospitality, and hackathon prizes.
          </p>
          <p className="font-sans text-xs text-slate-400">
            Following initial proposal approval, the organizing team is inviting community sponsors and industry partners for supplementary financial or in-kind support (cloud credits, workshop gear, student travel stipends).
          </p>
        </div>

        {/* Budget Allocation Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BUDGET_BREAKDOWN.map((item, idx) => (
            <div
              key={idx}
              className="bg-obsidian-900 border-2 border-slate-800 p-6 flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[4px_4px_0px_0px_#173f35]"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className="text-geeko-400 font-bold">ALLOCATION 0{idx + 1}</span>
                  <span className="bg-slate-800 text-white font-mono px-2 py-0.5 border border-slate-700">
                    {item.percentage}%
                  </span>
                </div>

                <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">
                  {item.category}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 font-mono">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">ESTIMATED AMOUNT</div>
                <div className="text-xl font-black text-geeko-400">{item.amount} INR</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship Tiers & Call for Partners */}
        <div className="bg-obsidian-900 border-2 border-geeko-500 p-6 sm:p-10 font-mono shadow-[6px_6px_0px_0px_#173f35]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs uppercase">
                <HeartHandshake className="w-4 h-4" />
                <span>SPONSORSHIP & COMMUNITY PARTNERSHIPS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Partner with Bengaluru's Premier openSUSE Gathering
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Connect your brand with 300–400 passionate software engineers, systems developers, students, and open-source advocates. We offer title sponsorships, hackathon track naming rights, recruiting tables, and branding across all official event streams and merchandise.
              </p>

              <div className="flex flex-wrap gap-4 text-xs pt-2">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-geeko-400" />
                  Keynote Sponsor Slot
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-geeko-400" />
                  Campus Career & Talent Access
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-geeko-400" />
                  Branded Hackathon Track
                </span>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col gap-3">
              <a
                href="mailto:divyanshuprakash914@gmail.com?subject=Sponsorship%20Inquiry%20-%20openSUSE%20Bengaluru%20Connect%202027"
                className="px-6 py-3.5 bg-geeko-500 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Request Sponsorship Prospectus</span>
              </a>

              <button
                onClick={copyContact}
                className="px-6 py-2.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-500 text-slate-300 text-xs font-mono transition-colors text-center cursor-pointer"
              >
                {copiedEmail ? 'Email Copied!' : 'Copy Organizer Email'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
