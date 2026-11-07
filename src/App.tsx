import React, { useState, useEffect } from 'react';
import { CreativeBackground } from './components/creative/CreativeBackground';
import { CreativeNavbar } from './components/creative/CreativeNavbar';
import { CreativeHero } from './components/creative/CreativeHero';
import { CreativeManifesto } from './components/creative/CreativeManifesto';
import { CreativeTracks } from './components/creative/CreativeTracks';
import { CreativeTimeline } from './components/creative/CreativeTimeline';
import { CreativePrizes } from './components/creative/CreativePrizes';
import { CreativeVenue } from './components/creative/CreativeVenue';
import { CreativeFooter } from './components/creative/CreativeFooter';
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
    <div className="min-h-screen bg-[#030605] text-[#f0e8ff] font-sans selection:bg-geeko-500 selection:text-black relative">
      {/* 60fps Interactive Reactive Canvas Background */}
      <CreativeBackground />

      {/* Floating Glassmorphic HUD Navbar */}
      <CreativeNavbar
        onOpenDay1Register={handleOpenDay1Register}
        onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
      />

      {/* Main Experience Stream */}
      <main className="relative z-10">
        {/* 1. Kinetic Hero with 3D Holographic Geeko */}
        <CreativeHero
          onOpenDay1Register={handleOpenDay1Register}
          onOpenDay1RegisterWithEmail={handleOpenDay1RegisterWithEmail}
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        />

        {/* 2. Visual Manifesto & 4 Kinetic Metric Pillars */}
        <CreativeManifesto />

        {/* 3. 6-Track Cybernetic Soundboard / Console */}
        <CreativeTracks
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        />

        {/* 4. Interactive 20-Hour Mission Control Timeline */}
        <CreativeTimeline />

        {/* 5. 3D Holographic Prize Vault & Swag Ledger */}
        <CreativePrizes
          onOpenHackathonRegister={() => setIsHackathonModalOpen(true)}
        />

        {/* 6. Satellite Coordinates & High-Tech Logistics */}
        <CreativeVenue />
      </main>

      {/* Kinetic Brutalist Footer */}
      <CreativeFooter onOpenAdmin={() => setIsAdminView(true)} />

      {/* Functional Modals */}
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
