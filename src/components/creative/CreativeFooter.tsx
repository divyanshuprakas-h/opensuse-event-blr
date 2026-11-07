import React from 'react';
import { ArrowUpRight, Github, Terminal, Shield } from 'lucide-react';
import { soundManager } from '../../../proposal/utils/soundEffects';

interface CreativeFooterProps {
  onOpenAdmin: () => void;
}

export const CreativeFooter: React.FC<CreativeFooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="relative border-t border-geeko-500/20 bg-[#020503] py-16 sm:py-24 font-mono text-slate-400 overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-geeko-500/10 via-transparent to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Massive Kinetic Brutalist Signature */}
        <div className="text-center sm:text-left">
          <div className="text-xs text-geeko-400 font-bold uppercase tracking-widest mb-2">
            // OPEN-SOURCE DISTRIBUTION SUMMIT &amp; 20H BUILDATHON
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white uppercase leading-[0.88]">
            <span>openSUSE </span>
            <span className="text-stroke-geeko">BLR '27</span>
          </h2>
        </div>

        {/* Links and Organizers Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-geeko-500/20 text-xs">
          {/* Organizers */}
          <div className="md:col-span-5 space-y-2">
            <div className="text-white font-bold uppercase tracking-wider">
              ORGANIZING COMMITTEE
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              Led by <strong className="text-white">Divyanshu Prakash</strong> (Event Coordination &amp; Budget), <strong className="text-white">Dushyant Acharya</strong> (Program &amp; Judging), and <strong className="text-white">Rithull Raj Kallat</strong> (Logistics &amp; Safety).
            </p>
            <div className="text-[11px] text-slate-400 pt-1">
              Contact: <a href="mailto:divyanshuprakash914@gmail.com" className="text-geeko-400 underline">divyanshuprakash914@gmail.com</a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-white font-bold uppercase tracking-wider">
              EXPLORE PROPOSAL &amp; PLATFORM
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}proposal/`}
                  onClick={() => soundManager.playBootBeep()}
                  className="hover:text-geeko-400 flex items-center gap-1.5 font-bold"
                >
                  <Terminal className="w-3.5 h-3.5 text-geeko-400" />
                  <span>Interactive Proposal OS &amp; Bootloader</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/divyanshuprakas-h/opensuse-event-blr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-geeko-400 flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository &amp; Funding Manifest</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#admin"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenAdmin();
                  }}
                  className="hover:text-amber-400 flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-600" />
                  <span>Organizer Console (#admin)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Motto and Status */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-bold uppercase tracking-wider">
              COMMUNITY CREED
            </div>
            <p className="text-geeko-300 font-bold italic font-sans text-sm">
              "Have a lot of fun..."
            </p>
            <div className="text-[11px] text-slate-400 leading-normal">
              Zero registration fees. 100% community-driven under openSUSE India Foundation and college collaboration.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2027 openSUSE India Community · Bengaluru Connect. All rights reserved under open-source governance.
          </div>
          <div>
            Built with React, Vite, Tailwind CSS &amp; Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
};
