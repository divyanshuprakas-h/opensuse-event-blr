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
      if (window.location.hash === '#admin') {
        setIsAdminView(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenAdmin = () => {
    setIsAdminView(true);
    window.location.hash = '#admin';
  };

  const handleBackToSite = () => {
    setIsAdminView(false);
    if (window.location.hash === '#admin') {
      window.history.pushState(null, '', window.location.pathname);
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
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-geeko-500 selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenDay1Register={handleOpenDay1Register}
        onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        onOpenAdmin={handleOpenAdmin}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDay1Register={handleOpenDay1Register}
          onOpenDay1RegisterWithEmail={handleOpenDay1RegisterWithEmail}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenMockupViewer={() => setIsMockupViewerOpen(true)}
        />

        {/* 2. Core Mission & What to Expect */}
        <AboutSection />

        {/* 3. Day 1 & Day 2 Schedule (Mandatory vs Optional + Hackathon Tracks) */}
        <DayScheduleSection
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
          onOpenDay1Register={handleOpenDay1Register}
        />

        {/* 4. Hackathon Prizes & Community Swag (Exciting Awards & Free T-Shirts) */}
        <PrizesSection
          onOpenDay1Register={handleOpenDay1Register}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        />

        {/* 5. Host Venue & Campus Amenities */}
        <VenueSection />

        {/* 6. Organizer & Sponsors: openSUSE Only */}
        <SponsorsSection />

        {/* 7. Organizing Committee */}
        <TeamSection onOpenPreRegister={handleOpenDay1Register} />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={handleOpenAdmin} />

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
