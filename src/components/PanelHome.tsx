import React from 'react';
import { playButtonThud } from '../utils/audio';

interface PanelHomeProps {
  onOpenDiscover: () => void;
  onOpenBuildathon: () => void;
  onOpenPlayground: () => void;
  onOpenMerch: () => void;
  standalone?: boolean;
}

export const PanelHome: React.FC<PanelHomeProps> = ({
  onOpenDiscover,
  onOpenBuildathon,
  onOpenPlayground,
  onOpenMerch,
  standalone = false,
}) => {
  return (
    <div
      className={`relative rounded-[28px] border-2 border-[#2b4c30] flex flex-col justify-between overflow-hidden shadow-2xl select-none bg-cover bg-center ${
        standalone ? 'min-h-[640px] sm:min-h-[700px]' : 'h-full min-h-[560px]'
      }`}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}panel-home.jpg)`,
      }}
    >
      {/* Top Tag: 02 / HOME */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="bg-[#10351f] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-br-xl shadow-sm">
          02 / HOME
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full pt-1 pb-4 px-4 sm:px-6">
        
        {/* Top Header & Branding */}
        <div className="text-center space-y-1 mt-1">
          {/* Logo */}
          <div className="inline-flex items-center gap-1.5 font-display text-sm sm:text-base font-bold text-[#14281a]">
            <span>openSUSE</span>
            <span className="text-[9px] text-slate-600 font-mono -mt-1.5">®</span>
            <span className="font-sans font-extrabold text-[#5c971c]">India</span>
          </div>

          {/* Stylized Title with Cyber Brackets */}
          <div className="relative inline-block mt-0.5">
            {/* Left Bracket Accent */}
            <div className="absolute -left-3 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-[#5c971c] rounded-l-md pointer-events-none" />
            
            {/* Title text */}
            <div className="px-3 py-0.5">
              <h1 className="font-display font-black text-2xl sm:text-4xl text-[#183d24] tracking-tight leading-none drop-shadow-sm">
                BENGALURU
              </h1>
              <h2 className="font-display font-black text-xl sm:text-3xl text-[#183d24] tracking-wide leading-none mt-0.5">
                CONNECT '27
              </h2>
            </div>

            {/* Right Bracket Accent */}
            <div className="absolute -right-3 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-[#5c971c] rounded-r-md pointer-events-none" />
          </div>
        </div>

        {/* 4 Interactive Beveled 3D Action Buttons */}
        <div className="w-full max-w-xs sm:max-w-sm space-y-3.5 my-auto pt-24 sm:pt-28">
          
          {/* 1. DISCOVER THE EVENT */}
          <button
            onClick={() => {
              playButtonThud();
              onOpenDiscover();
            }}
            className="w-full py-3 sm:py-3.5 px-4 rounded-2xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-beveled-cream hover:bg-white active:translate-y-1 active:shadow-beveled-active transition-all cursor-pointer flex items-center justify-center"
          >
            DISCOVER THE EVENT
          </button>

          {/* 2. GEEKO BUILDATHON (Highlighted Vibrant Green with peeking chameleon!) */}
          <div className="relative">
            {/* Cute 3D Chameleon Peeking Over the button */}
            <div className="absolute -top-7 right-8 sm:right-12 z-20 pointer-events-none">
              <div className="w-10 h-10 animate-bounce" style={{ animationDuration: '3s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  <path d="M 20 60 C 20 30, 80 30, 80 60 Z" fill="#73ba25" stroke="#3d6c14" strokeWidth="4" />
                  <circle cx="62" cy="45" r="9" fill="#ffffff" />
                  <circle cx="65" cy="45" r="4.5" fill="#0c221a" />
                  <circle cx="38" cy="45" r="9" fill="#ffffff" />
                  <circle cx="41" cy="45" r="4.5" fill="#0c221a" />
                </svg>
              </div>
            </div>

            <button
              onClick={() => {
                playButtonThud();
                onOpenBuildathon();
              }}
              className="w-full py-3.5 sm:py-4 px-4 rounded-2xl bg-gradient-to-r from-geeko-500 to-geeko-400 border-2 border-[#437713] text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-beveled-green hover:brightness-105 active:translate-y-1 active:shadow-beveled-active transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="text-white text-xs">▶</span>
              <span>GEEKO BUILDATHON</span>
            </button>
          </div>

          {/* 3. GEEKO PLAYGROUND */}
          <button
            onClick={() => {
              playButtonThud();
              onOpenPlayground();
            }}
            className="w-full py-3 sm:py-3.5 px-4 rounded-2xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-beveled-cream hover:bg-white active:translate-y-1 active:shadow-beveled-active transition-all cursor-pointer flex items-center justify-center"
          >
            GEEKO PLAYGROUND
          </button>

          {/* 4. GEEKO MERCH */}
          <button
            onClick={() => {
              playButtonThud();
              onOpenMerch();
            }}
            className="w-full py-3 sm:py-3.5 px-4 rounded-2xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-beveled-cream hover:bg-white active:translate-y-1 active:shadow-beveled-active transition-all cursor-pointer flex items-center justify-center"
          >
            GEEKO MERCH
          </button>
        </div>

        {/* Bottom Pill: JANUARY 2027 · DATES TBA */}
        <div className="w-full flex items-center justify-center gap-2 pt-4">
          <div className="h-0.5 w-8 bg-[#3d6c14]/40 rounded-full" />
          <div className="px-4 py-1 rounded-full bg-[#f7f9ee]/90 border border-[#3d6c14]/60 shadow-sm text-[10px] sm:text-[11px] font-mono font-bold text-[#14281a] tracking-wider uppercase">
            JANUARY 2027 · DATES TBA
          </div>
          <div className="h-0.5 w-8 bg-[#3d6c14]/40 rounded-full" />
        </div>

      </div>
    </div>
  );
};
