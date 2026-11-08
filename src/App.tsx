import React, { useState, useEffect } from 'react';
import { PanelBoot } from './components/PanelBoot';
import { PanelHome } from './components/PanelHome';
import { PanelMerch } from './components/PanelMerch';
import { PageDiscover } from './components/PageDiscover';
import { PageBuildathon } from './components/PageBuildathon';
import { PagePlayground } from './components/PagePlayground';
import { AdminDashboard } from './components/AdminDashboard';
import { Volume2, VolumeX, Shield } from 'lucide-react';
import { playButtonThud, playTabClick, toggleMute } from './utils/audio';

type PageRoute = 'boot' | 'home' | 'merch' | 'discover' | 'buildathon' | 'playground';

export function App() {
  const [activePage, setActivePage] = useState<PageRoute>('boot');
  const [isAdminView, setIsAdminView] = useState(false);
  const [muted, setMuted] = useState(false);

  // Sync state with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#/', '').replace('#', '');
      if (hash === 'admin') {
        setIsAdminView(true);
      } else if (hash === 'proposal') {
        window.location.href = `${import.meta.env.BASE_URL}proposal/`;
      } else if (['boot', 'home', 'merch', 'discover', 'buildathon', 'playground'].includes(hash)) {
        setIsAdminView(false);
        setActivePage(hash as PageRoute);
      } else {
        setIsAdminView(false);
        // Default on first visit: boot sequence
        setActivePage('boot');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (page: PageRoute) => {
    playTabClick();
    setActivePage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSoundToggle = () => {
    const nextMuted = toggleMute();
    setMuted(nextMuted);
    if (!nextMuted) playButtonThud();
  };

  const handleBackToSite = () => {
    setIsAdminView(false);
    navigateTo('home');
  };

  // If Admin Dashboard is active
  if (isAdminView) {
    return <AdminDashboard onBackToSite={handleBackToSite} />;
  }

  return (
    <div className="min-h-screen w-full bg-[#f5f6ed] text-[#10351f] flex flex-col selection:bg-[#73ba25] selection:text-[#10351f] font-sans antialiased overflow-x-hidden relative">
      
      {/* Floating Sound FX Toggle (Unobtrusive in Top Right) */}
      <button
        onClick={handleSoundToggle}
        className={`fixed top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 rounded-full border border-[#10351f]/15 shadow-md active:scale-95 transition-all cursor-pointer backdrop-blur-md ${
          muted ? 'bg-red-50 text-red-700' : 'bg-white/80 text-[#10351f] hover:bg-white'
        }`}
        title={muted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
        aria-label="Toggle Sound Effects"
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#73ba25]" />}
      </button>

      {/* Floating Admin Access (Subtle in Bottom Right) */}
      <button
        onClick={() => setIsAdminView(true)}
        className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 p-2 rounded-full bg-white/60 hover:bg-white border border-[#10351f]/10 shadow-sm opacity-30 hover:opacity-100 transition-all text-[#10351f] cursor-pointer"
        title="Admin Portal"
        aria-label="Open Admin Dashboard"
      >
        <Shield className="w-4 h-4" />
      </button>

      {/* Full-Screen Dedicated Pages */}
      <main className="w-full min-h-screen flex-1">
        {activePage === 'boot' && (
          <PanelBoot onBootComplete={() => navigateTo('home')} />
        )}

        {activePage === 'home' && (
          <PanelHome onNavigate={(p) => navigateTo(p)} />
        )}

        {activePage === 'merch' && (
          <PanelMerch onBackToHome={() => navigateTo('home')} />
        )}

        {activePage === 'discover' && (
          <PageDiscover
            onBackToHome={() => navigateTo('home')}
            onGoToBuildathon={() => navigateTo('buildathon')}
          />
        )}

        {activePage === 'buildathon' && (
          <PageBuildathon onBackToHome={() => navigateTo('home')} />
        )}

        {activePage === 'playground' && (
          <PagePlayground onBackToHome={() => navigateTo('home')} />
        )}
      </main>
    </div>
  );
}

export default App;
