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
    <section id="sponsors" className="py-16 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 04. ORGANIZER & SPONSORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Organized & Supported By
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-obsidian-900 border border-slate-800 px-3 py-1 text-geeko-400 font-bold">
              COMMUNITY-FIRST • 100% FREE ADMISSION
            </span>
          </div>
        </div>

        {/* Compact Square Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          
          {/* Square Card 1: openSUSE */}
          <div className="bg-obsidian-900 border-2 border-geeko-500 p-6 flex flex-col justify-between items-center text-center shadow-[4px_4px_0px_0px_#173f35] min-h-[300px]">
            <div className="w-full flex justify-between items-center text-[10px]">
              <span className="bg-pine-950 border border-geeko-500/50 text-geeko-400 font-bold uppercase px-2 py-0.5">
                Lead Organizer
              </span>
              <span className="text-slate-500 font-mono">01</span>
            </div>

            <div className="my-auto space-y-3 py-4 flex flex-col items-center">
              <div className="w-20 h-20 bg-pine-950 border border-geeko-500/50 p-2 flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}geeko.svg`}
                  alt="openSUSE" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  openSUSE
                </h3>
                <p className="text-xs text-geeko-400 font-bold uppercase mt-0.5">
                  openSUSE India & Project
                </p>
                <p className="text-[11px] text-slate-400 font-sans mt-1">
                  Primary Community Sponsor
                </p>
              </div>
            </div>

            <div className="w-full pt-3 border-t border-slate-800 flex items-center justify-center gap-3 text-xs">
              <a
                href="https://www.opensuse.org"
                target="_blank"
                rel="noreferrer"
                className="hover:text-geeko-400 text-slate-300 transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5 text-geeko-400" />
                <span>opensuse.org</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://github.com/openSUSE"
                target="_blank"
                rel="noreferrer"
                className="hover:text-geeko-400 text-slate-300 transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5 text-geeko-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Square Card 2: Upcoming Collaborations */}
          <div className="bg-obsidian-900/60 border-2 border-dashed border-slate-700 p-6 flex flex-col justify-between items-center text-center min-h-[300px]">
            <div className="w-full flex justify-between items-center text-[10px]">
              <span className="bg-slate-900 border border-slate-700 text-slate-400 font-bold uppercase px-2 py-0.5">
                In Progress
              </span>
              <span className="text-slate-600 font-mono">02</span>
            </div>

            <div className="my-auto space-y-2.5 py-4 flex flex-col items-center">
              <div className="w-14 h-14 bg-obsidian-950 border border-slate-800 flex items-center justify-center text-slate-500">
                <Handshake className="w-7 h-7 text-geeko-400" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-tight">
                Further Collaborations
              </h3>
              <p className="text-xs text-slate-300 font-sans max-w-xs leading-relaxed">
                Further community partners and sponsors will be updated as collaborations are confirmed.
              </p>
            </div>

            <div className="w-full pt-3 border-t border-slate-800 flex items-center justify-center gap-2">
              <a
                href="mailto:divyanshuprakash914@gmail.com?subject=Collaboration%20Inquiry%20-%20openSUSE%20Bengaluru%20Connect%202027"
                className="px-3 py-1.5 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Collaborate
              </a>
              <button
                onClick={copyContact}
                className="px-2.5 py-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 text-xs cursor-pointer transition-colors"
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
