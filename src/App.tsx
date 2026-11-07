import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DayScheduleSection } from './components/DayScheduleSection';
import { PrizesSection } from './components/PrizesSection';
import { VenueSection } from './components/VenueSection';
import { SponsorsSection } from './components/SponsorsSection';
import { TeamSection } from './components/TeamSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PreRegistrationModal } from './components/PreRegistrationModal';
import { HackathonRegisterModal } from './components/HackathonRegisterModal';
import { MockupViewerModal } from './components/MockupViewerModal';
import { AdminDashboard } from './components/AdminDashboard';

export function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isDay1ModalOpen, setIsDay1ModalOpen] = useState(false);
  const [prefilledEmail, setPrefilledEmail] = useState('');
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const [isMockupViewerOpen, setIsMockupViewerOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin' || hash === '#/admin') {
        setIsAdminView(true);
      } else if (hash === '#proposal' || hash === '#/proposal') {
        window.location.href = `${import.meta.env.BASE_URL}proposal/`;
      } else {
        setIsAdminView(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('popstate', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('popstate', checkHash);
    };
  }, []);

  const handleBackToSite = () => {
    setIsAdminView(false);
    if (window.location.hash.toLowerCase() === '#admin' || window.location.hash.toLowerCase() === '#/admin') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleOpenDay1Register = () => {
    setPrefilledEmail('');
    setIsDay1ModalOpen(true);
  };

  const handleOpenDay1RegisterWithEmail = (email: string) => {
    setPrefilledEmail(email);
    setIsDay1ModalOpen(true);
  };

  // If in Admin Portal Mode, render full-screen Admin Dashboard
  if (isAdminView) {
    return <AdminDashboard onBackToSite={handleBackToSite} />;
  }

  return (
    <div className="min-h-screen bg-[#070c0a] text-slate-100 flex flex-col selection:bg-geeko-500 selection:text-black font-sans">
      {/* Minimalist Neo-Brutalist Navigation */}
      <Navbar
        onOpenDay1Register={handleOpenDay1Register}
        onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
      />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Zypper Terminal */}
        <Hero
          onOpenDay1Register={handleOpenDay1Register}
          onOpenDay1RegisterWithEmail={handleOpenDay1RegisterWithEmail}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenMockupViewer={() => setIsMockupViewerOpen(true)}
        />

        {/* 2. Core Mission & 3-Phase Structure */}
        <AboutSection />

        {/* 3. Day 1 & Day 2 Schedule (Talks, Labs & 20H Buildathon Tracks) */}
        <DayScheduleSection
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenDay1Register={handleOpenDay1Register}
        />

        {/* 4. Hackathon Prizes & Community Swag (Updated Awards & Bounties) */}
        <PrizesSection
          onOpenDay1Register={handleOpenDay1Register}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        />

        {/* 5. Host Venue & Campus Coordinates */}
        <VenueSection />

        {/* 6. Transparency & Community Sponsorship */}
        <SponsorsSection />

        {/* 7. Organizing Committee */}
        <TeamSection onOpenPreRegister={handleOpenDay1Register} />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

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

      <MockupViewerModal
        isOpen={isMockupViewerOpen}
        onClose={() => setIsMockupViewerOpen(false)}
      />
    </div>
  );
}

export default App;
