import React, { useState } from 'react';
import { Globe, Github, Handshake } from 'lucide-react';

export const SponsorsSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyContact = () => {
    navigator.clipboard.writeText('divyanshuprakash914@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="sponsors" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 05. COMMUNITY &amp; SUPPORTERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Organized &amp; Supported By
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-[#0b1e15] border border-geeko-500/30 px-3 py-1.5 rounded-full text-geeko-300 font-bold">
              COMMUNITY-FIRST • 100% FREE ADMISSION
            </span>
          </div>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          
          {/* Card 1: openSUSE */}
          <div className="bg-[#09130e] border border-geeko-500/30 hover:border-geeko-400 rounded-2xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all">
            <div className="w-full flex justify-between items-center text-[10px]">
              <span className="bg-[#0c2419] border border-geeko-500/40 text-geeko-300 font-bold uppercase px-2.5 py-0.5 rounded">
                Lead Community
              </span>
              <span className="text-slate-500 font-mono">01</span>
            </div>

            <div className="my-auto space-y-3 py-6 flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center p-2 rounded-xl bg-[#060c09] border border-geeko-500/30">
                <img 
                  src={`${import.meta.env.BASE_URL}geeko.svg`}
                  alt="openSUSE" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight flex items-baseline justify-center">
                  <span className="lowercase">open</span><span className="uppercase text-geeko-400">SUSE</span>
                </h3>
                <p className="text-xs text-geeko-400 font-bold uppercase mt-1">
                  openSUSE India &amp; Project
                </p>
                <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Primary Community Organizer
                </p>
              </div>
            </div>

            <div className="w-full pt-4 border-t border-geeko-500/10 flex items-center justify-center gap-3 text-xs">
              <a
                href="https://www.opensuse.org"
                target="_blank"
                rel="noreferrer"
                className="hover:text-geeko-400 text-slate-300 transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-geeko-400" />
                <span>opensuse.org</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://github.com/openSUSE"
                target="_blank"
                rel="noreferrer"
                className="hover:text-geeko-400 text-slate-300 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-geeko-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Card 2: Upcoming Collaborations */}
          <div className="bg-[#09130e]/80 border border-dashed border-geeko-500/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between items-center text-center">
            <div className="w-full flex justify-between items-center text-[10px]">
              <span className="bg-[#081510] border border-slate-700 text-slate-400 font-bold uppercase px-2.5 py-0.5 rounded">
                In Progress
              </span>
              <span className="text-slate-600 font-mono">02</span>
            </div>

            <div className="my-auto space-y-3 py-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-[#060c09] border border-geeko-500/20 flex items-center justify-center text-geeko-400">
                <Handshake className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">
                Further Collaborations
              </h3>
              <p className="text-xs text-slate-400 font-sans max-w-xs leading-relaxed">
                Additional community partners and ecosystem sponsors will be updated as confirmations finalize.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-geeko-500/10 flex items-center justify-center gap-2">
              <a
                href="mailto:divyanshuprakash914@gmail.com?subject=Collaboration%20Inquiry%20-%20openSUSE%20Bengaluru%20Connect%202027"
                className="px-4 py-1.5 rounded-lg bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Collaborate
              </a>
              <button
                onClick={copyContact}
                className="px-3 py-1.5 rounded-lg bg-[#060c09] border border-geeko-500/30 hover:border-geeko-400 text-slate-300 text-xs cursor-pointer transition-colors"
              >
                {copiedEmail ? 'Copied' : 'Contact'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
