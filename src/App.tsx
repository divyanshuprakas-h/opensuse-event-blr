import React, { useState, useEffect } from 'react';
import { PanelBoot } from './components/PanelBoot';
import { PanelHome } from './components/PanelHome';
import { PanelMerch } from './components/PanelMerch';
import { ModalDiscover } from './components/ModalDiscover';
import { ModalBuildathon } from './components/ModalBuildathon';
import { ModalPlayground } from './components/ModalPlayground';
import { AdminDashboard } from './components/AdminDashboard';
import { Columns, Smartphone, Volume2, VolumeX, Shield, FileText, Sparkles } from 'lucide-react';
import { playButtonThud, playSuccessChime, toggleMute } from './utils/audio';

export function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [viewMode, setViewMode] = useState<'panoramic' | 'single'>('panoramic');
  const [activeSingleTab, setActiveSingleTab] = useState<'boot' | 'home' | 'merch'>('home');
  const [muted, setMuted] = useState(false);

  // Modals state
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isBuildathonOpen, setIsBuildathonOpen] = useState(false);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);

  // Hash route listener for #admin or #proposal
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

  // Set default view based on screen width on initial load
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setViewMode('single');
      setActiveSingleTab('home');
    }
  }, []);

  const handleSoundToggle = () => {
    const nextMuted = toggleMute();
    setMuted(nextMuted);
    if (!nextMuted) {
      playButtonThud();
    }
  };

  const handleBackToSite = () => {
    setIsAdminView(false);
    if (window.location.hash.toLowerCase().startsWith('#admin')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleGoToMerch = () => {
    playButtonThud();
    if (viewMode === 'single') {
      setActiveSingleTab('merch');
    } else {
      const merchEl = document.getElementById('panel-merch-view');
      merchEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleBackFromMerch = () => {
    playButtonThud();
    if (viewMode === 'single') {
      setActiveSingleTab('home');
    } else {
      const homeEl = document.getElementById('panel-home-view');
      homeEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleBootComplete = () => {
    if (viewMode === 'single' && activeSingleTab === 'boot') {
      setActiveSingleTab('home');
    }
  };

  // If Admin Portal is active
  if (isAdminView) {
    return <AdminDashboard onBackToSite={handleBackToSite} />;
  }

  return (
    <div className="min-h-screen bg-[#ecefe2] text-[#10351f] flex flex-col justify-between selection:bg-[#73ba25] selection:text-[#10351f] font-sans antialiased overflow-x-hidden">
      
      {/* Top Header / View Controller */}
      <header className="w-full bg-[#f5f6ed]/90 backdrop-blur-md border-b border-[#2b4c30]/20 py-2.5 px-4 sm:px-8 sticky top-0 z-40 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Logo & Event Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#73ba25] flex items-center justify-center p-1 shadow-sm border border-[#10351f]/20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="46" fill="#10351f" />
                <path
                  d="M30 52c0-14 12-24 24-24s24 10 24 24c0 14-12 24-24 24-8 0-15-4-19-10"
                  fill="#73ba25"
                />
                <circle cx="62" cy="44" r="6" fill="#ffffff" />
                <circle cx="64" cy="44" r="3" fill="#10351f" />
              </svg>
            </div>
            <div>
              <div className="font-display font-black text-sm tracking-tight text-[#10351f] leading-none uppercase">
                openSUSE India · Bengaluru Connect '27
              </div>
              <div className="text-[10px] font-mono text-[#10351f]/70 font-semibold leading-tight">
                Newton School of Technology Campus · January 2027
              </div>
            </div>
          </div>

          {/* Center Tabs for Single-View Mode on Mobile/Tablet */}
          {viewMode === 'single' && (
            <div className="flex items-center bg-[#e4e8d8] p-1 rounded-xl border border-[#2b4c30]/20 text-xs font-mono font-bold">
              <button
                onClick={() => { playButtonThud(); setActiveSingleTab('boot'); }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeSingleTab === 'boot'
                    ? 'bg-[#10351f] text-white shadow-sm'
                    : 'text-[#10351f]/80 hover:bg-black/5'
                }`}
              >
                01 / BOOT
              </button>
              <button
                onClick={() => { playButtonThud(); setActiveSingleTab('home'); }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeSingleTab === 'home'
                    ? 'bg-[#10351f] text-white shadow-sm'
                    : 'text-[#10351f]/80 hover:bg-black/5'
                }`}
              >
                02 / HOME
              </button>
              <button
                onClick={() => { playButtonThud(); setActiveSingleTab('merch'); }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeSingleTab === 'merch'
                    ? 'bg-[#10351f] text-white shadow-sm'
                    : 'text-[#10351f]/80 hover:bg-black/5'
                }`}
              >
                03 / MERCH
              </button>
            </div>
          )}

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle Button */}
            <button
              onClick={() => {
                playButtonThud();
                setViewMode(viewMode === 'panoramic' ? 'single' : 'panoramic');
              }}
              className="px-3 py-1.5 rounded-xl bg-[#f5f6ed] hover:bg-white border border-[#2b4c30]/20 text-[#10351f] text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              title="Toggle between 3-Panel Panoramic View and Single Panel Focus"
            >
              {viewMode === 'panoramic' ? (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-[#73ba25]" />
                  <span className="hidden sm:inline">FOCUS VIEW</span>
                </>
              ) : (
                <>
                  <Columns className="w-3.5 h-3.5 text-[#73ba25]" />
                  <span className="hidden sm:inline">3-PANEL VIEW</span>
                </>
              )}
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-xl border border-[#2b4c30]/20 text-xs font-bold transition-all shadow-sm active:scale-95 ${
                muted ? 'bg-red-50 text-red-700' : 'bg-[#f5f6ed] text-[#10351f] hover:bg-white'
              }`}
              title={muted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#73ba25]" />}
            </button>

            {/* Admin Dashboard shortcut */}
            <button
              onClick={() => setIsAdminView(true)}
              className="p-2 rounded-xl bg-[#f5f6ed] hover:bg-white border border-[#2b4c30]/20 text-[#10351f] text-xs font-mono font-bold transition-all shadow-sm active:scale-95"
              title="Admin & Registration Dashboard"
            >
              <Shield className="w-4 h-4 text-[#10351f]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Showcase Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        {viewMode === 'panoramic' ? (
          /* PANORAMIC 3-PANEL ROW (EXACT MOCKUP LAYOUT) */
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch justify-center max-w-6xl">
            {/* Panel 1: 01 / BOOT (3 / 12 width) */}
            <div className="md:col-span-3 min-h-[580px] lg:min-h-[640px] flex flex-col">
              <PanelBoot onBootComplete={handleBootComplete} standalone={false} />
            </div>

            {/* Panel 2: 02 / HOME (5.5 / 12 width - Centerpiece) */}
            <div id="panel-home-view" className="md:col-span-5 min-h-[580px] lg:min-h-[640px] flex flex-col">
              <PanelHome
                onOpenDiscover={() => setIsDiscoverOpen(true)}
                onOpenBuildathon={() => setIsBuildathonOpen(true)}
                onOpenPlayground={() => setIsPlaygroundOpen(true)}
                onOpenMerch={handleGoToMerch}
                standalone={false}
              />
            </div>

            {/* Panel 3: 03 / MERCH REVEAL (3.5 / 12 width) */}
            <div id="panel-merch-view" className="md:col-span-4 min-h-[580px] lg:min-h-[640px] flex flex-col">
              <PanelMerch
                onBackToHome={handleBackFromMerch}
                standalone={false}
              />
            </div>
          </div>
        ) : (
          /* SINGLE PANEL FOCUS MODE (CAROUSEL / MOBILE FRIENDLY) */
          <div className="w-full max-w-md mx-auto my-auto py-2">
            {activeSingleTab === 'boot' && (
              <PanelBoot onBootComplete={() => setActiveSingleTab('home')} standalone={true} />
            )}
            {activeSingleTab === 'home' && (
              <PanelHome
                onOpenDiscover={() => setIsDiscoverOpen(true)}
                onOpenBuildathon={() => setIsBuildathonOpen(true)}
                onOpenPlayground={() => setIsPlaygroundOpen(true)}
                onOpenMerch={() => setActiveSingleTab('merch')}
                standalone={true}
              />
            )}
            {activeSingleTab === 'merch' && (
              <PanelMerch
                onBackToHome={() => setActiveSingleTab('home')}
                standalone={true}
              />
            )}
          </div>
        )}
      </main>

      {/* Bottom Sub-Bar: Quick Actions & Live Stats */}
      <footer className="w-full bg-[#f5f6ed]/80 backdrop-blur-md border-t border-[#2b4c30]/20 py-3 px-4 sm:px-8 text-xs font-mono text-[#10351f]/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#73ba25] animate-ping" />
            <span className="font-bold">LIVE STATUS:</span>
            <span>Pre-Registrations &amp; Buildathon Proposals Active · NST Campus</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-bold">
            <button
              onClick={() => { playButtonThud(); setIsDiscoverOpen(true); }}
              className="hover:text-[#73ba25] transition-colors"
            >
              [ VENUE &amp; PILLARS ]
            </button>
            <button
              onClick={() => { playButtonThud(); setIsBuildathonOpen(true); }}
              className="hover:text-[#73ba25] transition-colors"
            >
              [ PRIZES &amp; TRACKS ]
            </button>
            <button
              onClick={() => { playButtonThud(); setIsPlaygroundOpen(true); }}
              className="hover:text-[#73ba25] transition-colors"
            >
              [ ESCAPE ROOM &amp; TRIVIA ]
            </button>
            <a
              href={`${import.meta.env.BASE_URL}proposal/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#73ba25] transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PROPOSAL PDF</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ModalDiscover
        isOpen={isDiscoverOpen}
        onClose={() => setIsDiscoverOpen(false)}
        onOpenBuildathon={() => {
          setIsDiscoverOpen(false);
          setIsBuildathonOpen(true);
        }}
      />

      <ModalBuildathon
        isOpen={isBuildathonOpen}
        onClose={() => setIsBuildathonOpen(false)}
      />

      <ModalPlayground
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
      />
    </div>
  );
}

export default App;
