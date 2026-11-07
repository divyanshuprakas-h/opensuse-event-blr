import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/eventData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
            // 07. FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
            Common Questions
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-2">
            Everything you need to know about attendance, hardware requirements, and the 20-hour Buildathon.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#09130e] border border-geeko-500/20 hover:border-geeko-500/40 rounded-xl transition-all overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors hover:text-geeko-400 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-geeko-400 bg-[#0c2419] px-2.5 py-0.5 rounded border border-geeko-500/30">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-geeko-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-geeko-500/10 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
