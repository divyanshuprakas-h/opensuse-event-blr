import React from 'react';
import { Terminal, Github, Globe, MessageSquare, Heart, ArrowUp } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t-2 border-slate-800 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-slate-800">
          
          {/* Col 1: Identity & Motto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src={`${import.meta.env.BASE_URL}geeko.svg`} alt="openSUSE" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-black text-base tracking-tight flex items-baseline">
                  <span className="font-normal text-slate-300 lowercase text-sm">open</span>
                  <span className="font-black text-white uppercase text-lg ml-0.5">SUSE</span>
                  <span className="text-geeko-400 font-bold uppercase text-xs ml-1.5 font-mono">India</span>
                </div>
                <div className="text-slate-300 text-xs">
                  Bengaluru Connect 2027
                </div>
              </div>
            </div>

            <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-white">Explore Open Source. Learn openSUSE. Build Together.</strong>
              <br />
              A non-profit community initiative hosted at Newton School of Technology to advance Linux proficiency, open-source packaging, and systems development in India.
            </p>

            <div className="text-geeko-400 font-bold italic text-sm">
              "{EVENT_CONFIG.motto}"
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-black uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-geeko-400 transition-colors uppercase">
                  // Event Overview
                </a>
              </li>
              <li>
                <a href="#phases" className="hover:text-geeko-400 transition-colors uppercase">
                  // 3-Phase Schedule
                </a>
              </li>
              <li>
                <a href="#hackathon" className="hover:text-geeko-400 transition-colors uppercase">
                  // 10H Hackathon Tracks
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-geeko-400 transition-colors uppercase">
                  // Host Venue
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-geeko-400 transition-colors uppercase">
                  // Organizer & Sponsors
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-geeko-400 transition-colors uppercase">
                  // Organizing Committee
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: openSUSE Ecosystem */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-black uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              OPENSUSE ECOSYSTEM
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.opensuse.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-geeko-400 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-geeko-400" />
                  <span>Official openSUSE Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://build.opensuse.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-geeko-400 transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-geeko-400" />
                  <span>Open Build Service (OBS)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://openqa.opensuse.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-geeko-400 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-geeko-400" />
                  <span>openQA Automated OS Testing</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/divyanshuprakas-h/opensuse-event-blr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-geeko-400 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-geeko-400" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026–2027 openSUSE India Community • Built with open-source love in Bengaluru.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-geeko-400 font-bold">
              [STATUS: PRE-REGISTRATION ACTIVE]
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-obsidian-900 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
