import React, { useState } from 'react';
import { Globe, Github, MessageSquare, Handshake, Mail, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 04. ORGANIZER & SPONSORSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Powered by openSUSE
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-pine-950/80 border border-geeko-500/40 px-3 py-1 text-geeko-400 font-bold inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% NON-PROFIT • FREE COMMUNITY EVENT
            </span>
          </div>
        </div>

        {/* Primary Organizer & Sponsor: openSUSE Only */}
        <div className="bg-obsidian-900/90 border-2 border-geeko-500/60 p-6 sm:p-8 rounded-lg shadow-[4px_4px_0px_0px_#173f35] mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-pine-950 border border-geeko-500/50 p-2.5 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(115,186,37,0.25)]">
                <img 
                  src={`${import.meta.env.BASE_URL}geeko.svg`}
                  alt="openSUSE Geeko" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-geeko-400 uppercase tracking-wider bg-pine-950 border border-geeko-500/40 px-2 py-0.5 rounded">
                    Lead Organizer & Primary Sponsor
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  The openSUSE Project & openSUSE India
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Global Free & Open Source Linux Distribution & Tooling Ecosystem
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto">
              <a
                href="https://www.opensuse.org"
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-initial px-3.5 py-2 bg-obsidian-950 hover:bg-slate-900 border border-slate-700 hover:border-geeko-400 text-xs text-slate-300 hover:text-white rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-geeko-400" />
                <span>opensuse.org</span>
              </a>

              <a
                href="https://github.com/openSUSE"
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-initial px-3.5 py-2 bg-obsidian-950 hover:bg-slate-900 border border-slate-700 hover:border-geeko-400 text-xs text-slate-300 hover:text-white rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-geeko-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
            <div className="bg-obsidian-950/70 p-4 border border-slate-800 rounded">
              <div className="font-mono font-bold text-geeko-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <span>// Leap & Tumbleweed</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Rock-solid stability with openSUSE Leap enterprise codebase and bleeding-edge innovation with rolling-release openSUSE Tumbleweed.
              </p>
            </div>

            <div className="bg-obsidian-950/70 p-4 border border-slate-800 rounded">
              <div className="font-mono font-bold text-geeko-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <span>// Open Build Service (OBS)</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The industry-standard open build system compiling source packages for openSUSE, Fedora, Debian, Ubuntu, and Arch across multiple architectures.
              </p>
            </div>

            <div className="bg-obsidian-950/70 p-4 border border-slate-800 rounded">
              <div className="font-mono font-bold text-geeko-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <span>// openQA Automated Testing</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Automated end-to-end full operating system testing using optical character recognition and video capture to guarantee distribution quality.
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration Notice Card */}
        <div className="bg-pine-950/60 border border-geeko-500/40 rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2">
              <Handshake className="w-4 h-4 text-geeko-400" />
              <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-tight">
                Community Collaborations & Further Partners
              </h4>
            </div>
            <p className="text-xs text-slate-300 font-sans max-w-2xl leading-relaxed">
              We are actively collaborating with student developer clubs, open-source user groups, and tech communities across Bengaluru. <strong className="text-geeko-300">Further community partners and sponsors will be updated as collaborations are confirmed.</strong>
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="mailto:divyanshuprakash914@gmail.com?subject=Collaboration%20Inquiry%20-%20openSUSE%20Bengaluru%20Connect%202027"
              className="flex-1 md:flex-initial px-4 py-2 bg-geeko-500 hover:bg-geeko-400 text-black text-xs font-black uppercase tracking-wider rounded transition-all text-center cursor-pointer shadow-[0_0_12px_rgba(115,186,37,0.3)]"
            >
              Collaborate With Us
            </a>
            <button
              onClick={copyContact}
              className="px-3 py-2 bg-obsidian-900 border border-slate-700 hover:border-geeko-400 text-slate-300 text-xs rounded cursor-pointer transition-colors"
            >
              {copiedEmail ? 'Copied' : 'Copy Contact'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
