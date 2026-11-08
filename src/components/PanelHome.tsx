import React, { useState } from 'react';
import { playButtonThud } from '../utils/audio';

interface PanelHomeProps {
  onNavigate: (page: 'discover' | 'buildathon' | 'playground' | 'merch') => void;
}

export const PanelHome: React.FC<PanelHomeProps> = ({ onNavigate }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleAction = (page: 'discover' | 'buildathon' | 'playground' | 'merch') => {
    playButtonThud();
    onNavigate(page);
  };

  return (
    <div className="w-full min-h-screen h-screen bg-[#f5f6ed] flex items-center justify-center overflow-hidden select-none relative animate-fadeIn">
      
      {/* Top Tag: 02 / HOME (Fixed at top-left of the screen) */}
      <div className="absolute top-0 left-0 bg-[#10351f] text-white text-xs sm:text-sm font-mono font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-br-2xl shadow-lg z-30 tracking-wider">
        02 / HOME
      </div>

      {/* Main Full-Height Kiosk Stage */}
      <div className="relative h-screen max-h-screen w-auto aspect-[472/670] max-w-full flex items-center justify-center overflow-hidden shadow-2xl">
        <img
          src={`${import.meta.env.BASE_URL}panel-home.jpg`}
          alt="openSUSE Bengaluru Connect '27 Home Screen"
          className="w-full h-full object-cover pointer-events-none select-none"
        />

        {/* 4 Precise Interactive Hotspot Overlays on the 4 Buttons */}
        
        {/* 1. DISCOVER THE EVENT (Y: ~43.3%, H: ~8%, W: ~60%) */}
        <button
          onClick={() => handleAction('discover')}
          onMouseEnter={() => setHoveredButton('discover')}
          onMouseLeave={() => setHoveredButton(null)}
          className="absolute z-20 cursor-pointer rounded-2xl transition-all duration-150 flex items-center justify-center group"
          style={{
            top: '43.3%',
            left: '20%',
            width: '60%',
            height: '8%',
          }}
          aria-label="Discover the Event - Details, Venue & Schedule"
        >
          <div
            className={`w-full h-full rounded-2xl transition-all flex items-center justify-between px-3 ${
              hoveredButton === 'discover'
                ? 'ring-2 ring-[#10351f] bg-white/30 shadow-xl scale-[1.02]'
                : 'bg-transparent'
            }`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] sm:text-xs font-mono font-bold text-[#10351f] bg-white/95 px-2 py-0.5 rounded shadow">
              Open Details ↗
            </span>
          </div>
        </button>

        {/* 2. GEEKO BUILDATHON (Y: ~53.0%, H: ~8.5%, W: ~60%) */}
        <button
          onClick={() => handleAction('buildathon')}
          onMouseEnter={() => setHoveredButton('buildathon')}
          onMouseLeave={() => setHoveredButton(null)}
          className="absolute z-20 cursor-pointer rounded-2xl transition-all duration-150 flex items-center justify-center group"
          style={{
            top: '53.0%',
            left: '20%',
            width: '60%',
            height: '8.5%',
          }}
          aria-label="Geeko Buildathon - Tracks, ₹50,000 Prizes & Registration"
        >
          <div
            className={`w-full h-full rounded-2xl transition-all flex items-center justify-between px-3 ${
              hoveredButton === 'buildathon'
                ? 'ring-2 ring-white/90 bg-white/25 shadow-2xl scale-[1.02]'
                : 'bg-transparent'
            }`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] sm:text-xs font-mono font-black text-white bg-[#10351f] px-2 py-0.5 rounded shadow">
              Register Pass ⚡
            </span>
          </div>
        </button>

        {/* 3. GEEKO PLAYGROUND (Y: ~62.7%, H: ~8%, W: ~60%) */}
        <button
          onClick={() => handleAction('playground')}
          onMouseEnter={() => setHoveredButton('playground')}
          onMouseLeave={() => setHoveredButton(null)}
          className="absolute z-20 cursor-pointer rounded-2xl transition-all duration-150 flex items-center justify-center group"
          style={{
            top: '62.7%',
            left: '20%',
            width: '60%',
            height: '8%',
          }}
          aria-label="Geeko Playground - Terminal Escape Room, Trivia Blitz & Bug Hunt"
        >
          <div
            className={`w-full h-full rounded-2xl transition-all flex items-center justify-between px-3 ${
              hoveredButton === 'playground'
                ? 'ring-2 ring-[#10351f] bg-white/30 shadow-xl scale-[1.02]'
                : 'bg-transparent'
            }`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] sm:text-xs font-mono font-bold text-[#10351f] bg-white/95 px-2 py-0.5 rounded shadow">
              Play Arcade 🎮
            </span>
          </div>
        </button>

        {/* 4. GEEKO MERCH (Y: ~71.6%, H: ~8%, W: ~60%) */}
        <button
          onClick={() => handleAction('merch')}
          onMouseEnter={() => setHoveredButton('merch')}
          onMouseLeave={() => setHoveredButton(null)}
          className="absolute z-20 cursor-pointer rounded-2xl transition-all duration-150 flex items-center justify-center group"
          style={{
            top: '71.6%',
            left: '20%',
            width: '60%',
            height: '8%',
          }}
          aria-label="Geeko Merch - 3D T-Shirt Reveal & Pre-Orders"
        >
          <div
            className={`w-full h-full rounded-2xl transition-all flex items-center justify-between px-3 ${
              hoveredButton === 'merch'
                ? 'ring-2 ring-[#10351f] bg-white/30 shadow-xl scale-[1.02]'
                : 'bg-transparent'
            }`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] sm:text-xs font-mono font-bold text-[#10351f] bg-white/95 px-2 py-0.5 rounded shadow">
              Reveal Merch 👕
            </span>
          </div>
        </button>

        {/* Bottom Pill: JANUARY 2027 · DATES TBA (Y: ~91%) */}
        <button
          onClick={() => handleAction('discover')}
          className="absolute z-20 cursor-pointer px-4 py-1.5 rounded-full hover:bg-black/5 transition-all text-transparent"
          style={{
            bottom: '4.5%',
            left: '22%',
            width: '56%',
            height: '5%',
          }}
          title="Click to view dates and venue location"
          aria-label="January 2027 Dates TBA - Click to view Venue"
        />
      </div>
    </div>
  );
};
