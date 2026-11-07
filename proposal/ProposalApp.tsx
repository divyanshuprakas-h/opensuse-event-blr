import React, { useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { ProposalNavbar } from './components/ProposalNavbar';
import { ExecutiveHUD } from './components/ExecutiveHUD';
import { TracksMatrix } from './components/TracksMatrix';
import { BuildathonTimeline } from './components/BuildathonTimeline';
import { ArcadeQuestStation } from './components/ArcadeQuestStation';
import { DemoArenaJudging } from './components/DemoArenaJudging';
import { BudgetMatrix } from './components/BudgetMatrix';
import { VenueOperations } from './components/VenueOperations';
import { SignoffTimeline } from './components/SignoffTimeline';

export const ProposalApp: React.FC = () => {
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hud');
  const [isCrtEnabled, setIsCrtEnabled] = useState<boolean>(false);

  const handleReboot = () => {
    setIsBooting(true);
  };

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  return (
    <div className={`min-h-screen bg-[#05080c] text-[#f0e8ff] font-mono selection:bg-geeko-500 selection:text-black relative ${
      isCrtEnabled ? 'crt-monitor' : ''
    }`}>
      {/* Optional CRT scanline overlay */}
      {isCrtEnabled && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-70"></div>
        </div>
      )}

      {/* Boot sequence loader */}
      {isBooting ? (
        <BootSequence onBootComplete={handleBootComplete} />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Proposal Retro HUD Navbar */}
          <ProposalNavbar
            onReboot={handleReboot}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isCrtEnabled={isCrtEnabled}
            setIsCrtEnabled={setIsCrtEnabled}
          />

          {/* Main Proposal Content Container */}
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-6 pb-16">
            {/* 01. Executive HUD */}
            <ExecutiveHUD />

            {/* 02. Six Buildathon Tracks */}
            <TracksMatrix />

            {/* 03. 20-Hour Agenda & Clock */}
            <BuildathonTimeline />

            {/* 04. Geeko Arcade & Quest Station */}
            <ArcadeQuestStation />

            {/* 05. Demo Arena & Judging Rubrics */}
            <DemoArenaJudging />

            {/* 06. Itemized Budget & Sponsorship Gap */}
            <BudgetMatrix />

            {/* 07. Venue Operations, Roster & Safety Gates */}
            <VenueOperations />

            {/* 08. Delivery Roadmap & Review Record */}
            <SignoffTimeline />
          </main>

          {/* Retro Arcade Footer */}
          <footer className="border-t border-geeko-500/20 bg-[#03060a] py-8 text-center text-xs font-mono text-slate-500">
            <div className="max-w-7xl mx-auto px-4 space-y-3">
              <div className="flex items-center justify-center gap-2 text-geeko-400 font-bold">
                <span>⚡ openSUSE INDIA · BENGALURU CONNECT 2027</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Official Event Proposal · 18 Sections Complete · Hosted at Newton School of Technology
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-400 pt-2">
                <a href="../" className="hover:text-geeko-400 underline">Main Event Website</a>
                <span>•</span>
                <button onClick={handleReboot} className="hover:text-geeko-400 underline cursor-pointer">
                  Restart GRUB Bootloader
                </button>
                <span>•</span>
                <a href="https://github.com/divyanshuprakas-h/opensuse-event-blr" target="_blank" rel="noopener noreferrer" className="hover:text-geeko-400 underline">
                  GitHub Repository
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};
