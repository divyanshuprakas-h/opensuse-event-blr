import React, { useState, useEffect } from 'react';
import { PanelBoot } from './components/PanelBoot';
import { PanelHome } from './components/PanelHome';
import { PanelMerch } from './components/PanelMerch';
import { PageDiscover } from './components/PageDiscover';
import { PageBuildathon } from './components/PageBuildathon';
import { PagePlayground } from './components/PagePlayground';
import { AdminDashboard } from './components/AdminDashboard';
import { Smartphone, LayoutGrid, Volume2, VolumeX, Shield, FileText } from 'lucide-react';
import { playButtonThud, playTabClick, toggleMute } from './utils/audio';

type PageRoute = 'boot' | 'home' | 'merch' | 'discover' | 'buildathon' | 'playground';

export function App() {
  const [activePage, setActivePage] = useState<PageRoute>('boot');
  const [isAdminView, setIsAdminView] = useState(false);
  const [isArtboardView, setIsArtboardView] = useState(false);
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

  const pageNavItems: Array<{ id: PageRoute; label: string; tag: string }> = [
    { id: 'boot', label: 'Boot', tag: '01' },
    { id: 'home', label: 'Home', tag: '02' },
    { id: 'merch', label: 'Merch', tag: '03' },
    { id: 'discover', label: 'Discover', tag: '04' },
    { id: 'buildathon', label: 'Buildathon', tag: '05' },
    { id: 'playground', label: 'Playground', tag: '06' },
  ];

  return (
    <div className="min-h-screen bg-[#ecefe2] text-[#10351f] flex flex-col justify-between selection:bg-[#73ba25] selection:text-[#10351f] font-sans antialiased overflow-x-hidden">
      
      {/* Top Header & Page Switcher */}
      <header className="w-full bg-[#f5f6ed]/95 backdrop-blur-md border-b border-[#10351f]/15 py-2.5 px-3 sm:px-6 sticky top-0 z-40 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Branding */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#73ba25] flex items-center justify-center p-1 shadow-sm border border-[#10351f]/20 group-hover:scale-105 transition-transform">
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
              <div className="font-display font-black text-xs sm:text-sm tracking-tight text-[#10351f] leading-none uppercase">
                openSUSE Connect '27
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[#10351f]/70 font-semibold leading-tight hidden xs:block">
                Bengaluru · Newton School of Tech
              </div>
            </div>
          </button>

          {/* Center Page Nav Bar */}
          <nav className="flex items-center bg-[#e4e8d8] p-1 rounded-xl border border-[#10351f]/15 text-[11px] sm:text-xs font-mono font-bold overflow-x-auto max-w-[50vw] sm:max-w-none">
            {pageNavItems.map((item) => {
              const isActive = activePage === item.id && !isArtboardView;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsArtboardView(false);
                    navigateTo(item.id);
                  }}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#10351f] text-white shadow-sm'
                      : 'text-[#10351f]/80 hover:bg-black/5'
                  }`}
                >
                  <span className={isActive ? 'text-[#73ba25]' : 'opacity-60'}>{item.tag}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* View Mode Toggle: Single Page vs Artboard Comparison */}
            <button
              onClick={() => {
                playButtonThud();
                setIsArtboardView(!isArtboardView);
              }}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#f5f6ed] hover:bg-white border border-[#10351f]/15 text-[#10351f] text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
              title={isArtboardView ? 'Switch to Full Page Mode' : 'View All 3 Mockup Artboards Side-by-Side'}
            >
              {isArtboardView ? (
                <>
                  <Smartphone className="w-4 h-4 text-[#73ba25]" />
                  <span className="hidden md:inline">PAGE MODE</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-4 h-4 text-[#73ba25]" />
                  <span className="hidden md:inline">ARTBOARD VIEW</span>
                </>
              )}
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-xl border border-[#10351f]/15 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ${
                muted ? 'bg-red-50 text-red-700' : 'bg-[#f5f6ed] text-[#10351f] hover:bg-white'
              }`}
              title={muted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#73ba25]" />}
            </button>

            {/* Admin Shield shortcut */}
            <button
              onClick={() => setIsAdminView(true)}
              className="p-2 rounded-xl bg-[#f5f6ed] hover:bg-white border border-[#10351f]/15 text-[#10351f] text-xs font-mono font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              title="Admin Portal"
            >
              <Shield className="w-4 h-4 text-[#10351f]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Page Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8 flex items-center justify-center">
        {isArtboardView ? (
          /* ARTBOARD VIEW: All 3 Reference Screens Side-by-Side */
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch justify-center max-w-6xl">
            <div className="md:col-span-3 min-h-[580px] lg:min-h-[640px] flex flex-col">
              <PanelBoot onBootComplete={() => navigateTo('home')} standalone={false} />
            </div>
            <div className="md:col-span-5 min-h-[580px] lg:min-h-[640px] flex flex-col">
              <PanelHome onNavigate={(p) => { setIsArtboardView(false); navigateTo(p); }} standalone={false} />
            </div>
            <div className="md:col-span-4 min-h-[580px] lg:min-h-[640px] flex flex-col">
              <PanelMerch onBackToHome={() => navigateTo('home')} standalone={false} />
            </div>
          </div>
        ) : (
          /* PAGE MODE: Dedicated Full Page Experience */
          <div className="w-full flex items-center justify-center py-2 animate-fadeIn">
            {activePage === 'boot' && (
              <PanelBoot onBootComplete={() => navigateTo('home')} standalone={true} />
            )}

            {activePage === 'home' && (
              <PanelHome onNavigate={(p) => navigateTo(p)} standalone={true} />
            )}

            {activePage === 'merch' && (
              <PanelMerch onBackToHome={() => navigateTo('home')} standalone={true} />
            )}

            {activePage === 'discover' && (
              <PageDiscover
                onBackToHome={() => navigateTo('home')}
                onGoToBuildathon={() => navigateTo('buildathon')}
                standalone={true}
              />
            )}

            {activePage === 'buildathon' && (
              <PageBuildathon onBackToHome={() => navigateTo('home')} standalone={true} />
            )}

            {activePage === 'playground' && (
              <PagePlayground onBackToHome={() => navigateTo('home')} standalone={true} />
            )}
          </div>
        )}
      </main>

      {/* Bottom Sub-Bar: Live Telemetry & Quick Links */}
      <footer className="w-full bg-[#f5f6ed]/90 backdrop-blur-md border-t border-[#10351f]/15 py-3 px-4 sm:px-8 text-xs font-mono text-[#10351f]/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#73ba25] animate-ping" />
            <span className="font-bold">PAGE:</span>
            <span className="uppercase text-[#10351f] font-bold">
              {activePage.toUpperCase()}
            </span>
            <span className="text-slate-400">·</span>
            <span>openSUSE Bengaluru Connect '27</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] font-bold">
            <button
              onClick={() => navigateTo('discover')}
              className="hover:text-[#73ba25] transition-colors cursor-pointer"
            >
              [ 04 / DISCOVER ]
            </button>
            <button
              onClick={() => navigateTo('buildathon')}
              className="hover:text-[#73ba25] transition-colors cursor-pointer"
            >
              [ 05 / BUILDATHON ]
            </button>
            <button
              onClick={() => navigateTo('playground')}
              className="hover:text-[#73ba25] transition-colors cursor-pointer"
            >
              [ 06 / PLAYGROUND ]
            </button>
            <a
              href={`${import.meta.env.BASE_URL}proposal/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#73ba25] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PROPOSAL PDF</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
