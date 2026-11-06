import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DateStatusBanner } from './components/DateStatusBanner';
import { AboutSection } from './components/AboutSection';
import { DayScheduleSection } from './components/DayScheduleSection';
import { PhasesSection } from './components/PhasesSection';
import { HackathonSection } from './components/HackathonSection';
import { VenueSection } from './components/VenueSection';
import { BudgetSection } from './components/BudgetSection';
import { RoadToConfSection } from './components/RoadToConfSection';
import { TeamSection } from './components/TeamSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PreRegistrationModal } from './components/PreRegistrationModal';
import { HackathonRegisterModal } from './components/HackathonRegisterModal';
import { CFPModal } from './components/CFPModal';
import { MockupViewerModal } from './components/MockupViewerModal';
import { Sparkles, Code2, Mic, Image as ImageIcon } from 'lucide-react';

export function App() {
  const [isDay1ModalOpen, setIsDay1ModalOpen] = useState(false);
  const [prefilledEmail, setPrefilledEmail] = useState('');
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const [isCFPModalOpen, setIsCFPModalOpen] = useState(false);
  const [isMockupViewerOpen, setIsMockupViewerOpen] = useState(false);

  const handleOpenDay1Register = () => {
    setPrefilledEmail('');
    setIsDay1ModalOpen(true);
  };

  const handleOpenDay1RegisterWithEmail = (email: string) => {
    setPrefilledEmail(email);
    setIsDay1ModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-geeko-500 selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenDay1Register={handleOpenDay1Register}
        onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        onOpenCFP={() => setIsCFPModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDay1Register={handleOpenDay1Register}
          onOpenDay1RegisterWithEmail={handleOpenDay1RegisterWithEmail}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenCFP={() => setIsCFPModalOpen(true)}
          onOpenMockupViewer={() => setIsMockupViewerOpen(true)}
        />

        {/* Date Status Announcement Alert Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <DateStatusBanner onOpenPreRegister={handleOpenDay1Register} />
        </div>

        {/* Event Overview & Mission */}
        <AboutSection />

        {/* Day 1 & Day 2 Schedule Architecture with Mandatory vs Optional & CFP */}
        <DayScheduleSection
          onOpenCFP={() => setIsCFPModalOpen(true)}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenDay1Register={handleOpenDay1Register}
        />

        {/* 3-Phase Structure & Workshops */}
        <PhasesSection />

        {/* 10-Hour Hackathon & Tracks */}
        <HackathonSection
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenDay1Register={handleOpenDay1Register}
        />

        {/* Venue & Facilities */}
        <VenueSection />

        {/* Financial Transparency & Budget Pool */}
        <BudgetSection />

        {/* Road to openSUSE Conf India */}
        <RoadToConfSection />

        {/* Organizing Team */}
        <TeamSection onOpenPreRegister={handleOpenDay1Register} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Action Bar for Quick Access */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsCFPModalOpen(true)}
          className="bg-obsidian-900 border-2 border-slate-700 hover:border-geeko-400 text-geeko-400 px-3 py-2.5 font-mono text-xs uppercase font-bold shadow-[3px_3px_0px_0px_#173f35] flex items-center gap-1.5 cursor-pointer transition-all"
          title="Submit Talk / Workshop Proposal"
        >
          <Mic className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Submit CFP</span>
        </button>

        <button
          onClick={() => setIsHackathonModalOpen(true)}
          className="bg-obsidian-900 border-2 border-geeko-500 hover:bg-pine-950 text-white px-3 py-2.5 font-mono text-xs uppercase font-bold shadow-[3px_3px_0px_0px_#173f35] flex items-center gap-1.5 cursor-pointer transition-all"
          title="Register for Day 2 Hackathon separately"
        >
          <Code2 className="w-3.5 h-3.5 text-geeko-400" />
          <span className="hidden sm:inline">Hackathon Pass</span>
        </button>

        <button
          onClick={handleOpenDay1Register}
          className="bg-geeko-500 hover:bg-geeko-400 text-black border-2 border-black px-4 py-2.5 font-mono text-xs uppercase font-black shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[1px] hover:translate-y-[1px] flex items-center gap-1.5 cursor-pointer transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 fill-black" />
          <span>Day 1 Pass</span>
        </button>
      </div>

      {/* Modals */}
      <PreRegistrationModal
        isOpen={isDay1ModalOpen}
        onClose={() => setIsDay1ModalOpen(false)}
        prefilledEmail={prefilledEmail}
      />

      <HackathonRegisterModal
        isOpen={isHackathonModalOpen}
        onClose={() => setIsHackathonModalOpen(false)}
      />

      <CFPModal
        isOpen={isCFPModalOpen}
        onClose={() => setIsCFPModalOpen(false)}
      />

      <MockupViewerModal
        isOpen={isMockupViewerOpen}
        onClose={() => setIsMockupViewerOpen(false)}
      />
    </div>
  );
}

export default App;
