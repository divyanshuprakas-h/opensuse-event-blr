import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/eventData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
            // 08. QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs font-mono text-slate-400">
            Everything you need to know about pre-registration, dates, workshops, and participation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-obsidian-900 border-2 border-slate-800 transition-colors shadow-[4px_4px_0px_0px_#173f35]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-mono transition-colors hover:text-geeko-400 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-geeko-400 bg-pine-900 px-2 py-0.5 border border-geeko-500/40">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-geeko-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 font-sans text-sm text-slate-300 leading-relaxed">
                    <p>{faq.a}</p>
                    <div className="mt-3 font-mono text-[11px] text-slate-500">
                      CATEGORY: <span className="text-geeko-400 font-bold">{faq.category}</span>
                    </div>
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
