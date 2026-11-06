import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DateStatusBanner } from './components/DateStatusBanner';
import { AboutSection } from './components/AboutSection';
import { PhasesSection } from './components/PhasesSection';
import { HackathonSection } from './components/HackathonSection';
import { VenueSection } from './components/VenueSection';
import { BudgetSection } from './components/BudgetSection';
import { RoadToConfSection } from './components/RoadToConfSection';
import { TeamSection } from './components/TeamSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PreRegistrationModal } from './components/PreRegistrationModal';
import { MockupViewerModal } from './components/MockupViewerModal';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

export function App() {
  const [isPreRegisterOpen, setIsPreRegisterOpen] = useState(false);
  const [prefilledEmail, setPrefilledEmail] = useState('');
  const [isMockupViewerOpen, setIsMockupViewerOpen] = useState(false);

  const handleOpenPreRegister = () => {
    setPrefilledEmail('');
    setIsPreRegisterOpen(true);
  };

  const handleOpenPreRegisterWithEmail = (email: string) => {
    setPrefilledEmail(email);
    setIsPreRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-geeko-500 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenPreRegister={handleOpenPreRegister} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenPreRegister={handleOpenPreRegister}
          onOpenPreRegisterWithEmail={handleOpenPreRegisterWithEmail}
          onOpenMockupViewer={() => setIsMockupViewerOpen(true)}
        />

        {/* Date Status Announcement Alert Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <DateStatusBanner onOpenPreRegister={handleOpenPreRegister} />
        </div>

        {/* Event Overview & Mission */}
        <AboutSection />

        {/* 3-Phase Structure & Workshops */}
        <PhasesSection />

        {/* 10-Hour Hackathon & Tracks */}
        <HackathonSection onOpenPreRegister={handleOpenPreRegister} />

        {/* Venue & Facilities */}
        <VenueSection />

        {/* Financial Transparency & Budget Pool */}
        <BudgetSection />

        {/* Road to openSUSE Conf India */}
        <RoadToConfSection />

        {/* Organizing Team */}
        <TeamSection onOpenPreRegister={handleOpenPreRegister} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Action Bar for Quick Access */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsMockupViewerOpen(true)}
          className="bg-obsidian-900 border-2 border-slate-700 hover:border-geeko-400 text-slate-200 px-3.5 py-2.5 font-mono text-xs uppercase font-bold shadow-[4px_4px_0px_0px_#173f35] flex items-center gap-1.5 cursor-pointer transition-all"
          title="View Brutalist Design Concepts"
        >
          <ImageIcon className="w-3.5 h-3.5 text-geeko-400" />
          <span className="hidden sm:inline">Design Concepts</span>
        </button>

        <button
          onClick={handleOpenPreRegister}
          className="bg-geeko-500 hover:bg-geeko-400 text-black border-2 border-black px-4 py-2.5 font-mono text-xs uppercase font-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2 cursor-pointer transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 fill-black" />
          <span>Pre-Register</span>
        </button>
      </div>

      {/* Pre-Registration Modal with Pass Generator */}
      <PreRegistrationModal
        isOpen={isPreRegisterOpen}
        onClose={() => setIsPreRegisterOpen(false)}
        prefilledEmail={prefilledEmail}
      />

      {/* Design Mockup High-Resolution Concept Viewer */}
      <MockupViewerModal
        isOpen={isMockupViewerOpen}
        onClose={() => setIsMockupViewerOpen(false)}
      />
    </div>
  );
}

export default App;
