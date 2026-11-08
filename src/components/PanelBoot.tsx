import React, { useState, useEffect } from 'react';
import { playButtonThud, playSuccessChime } from '../utils/audio';
import { ArrowRight, RefreshCw } from 'lucide-react';

interface PanelBootProps {
  onBootComplete: () => void;
}

export const PanelBoot: React.FC<PanelBootProps> = ({ onBootComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing openSUSE MicroOS kernel...');

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 6;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setBootText('Starting Bengaluru Connect 2027...');
        clearInterval(interval);
        playSuccessChime();
        const timeout = setTimeout(() => {
          onBootComplete();
        }, 1100);
        return () => clearTimeout(timeout);
      } else {
        setProgress(current);
        if (current > 70) {
          setBootText('Newton School campus loaded');
        } else if (current > 35) {
          setBootText('Community loaded');
        }
      }
    }, 110);

    return () => clearInterval(interval);
  }, [onBootComplete]);

  const handleRestart = () => {
    playButtonThud();
    setProgress(0);
    setBootText('Initializing kernel...');
    let current = 0;
    const interval = setInterval(() => {
      current += 15;
      if (current >= 100) {
        setProgress(100);
        setBootText('Starting Bengaluru Connect 2027...');
        clearInterval(interval);
        playSuccessChime();
        setTimeout(onBootComplete, 800);
      } else {
        setProgress(current);
      }
    }, 100);
  };

  return (
    <div className="w-screen h-screen min-h-screen bg-[#f5f6ed] flex flex-col justify-between p-5 sm:p-8 md:p-12 relative overflow-hidden select-none animate-fadeIn">
      
      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between z-20">
        {/* Top Tag: 01 / BOOT */}
        <div className="bg-[#10351f] text-white text-xs sm:text-sm font-mono font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-br-2xl shadow-md -mt-5 -ml-5 sm:-mt-8 sm:-ml-8 md:-mt-12 md:-ml-12 tracking-wider">
          01 / BOOT
        </div>

        <button
          onClick={handleRestart}
          title="Reboot Sequence"
          className="text-xs sm:text-sm font-mono text-[#10351f]/70 hover:text-[#10351f] font-bold cursor-pointer flex items-center gap-1.5 bg-white/70 hover:bg-white px-3 py-1.5 rounded-xl border border-[#10351f]/10 transition-all shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reboot</span>
        </button>
      </div>

      {/* Center Logo & Branding Stage */}
      <div className="flex flex-col items-center justify-center my-auto py-4 text-center max-w-lg mx-auto w-full">
        {/* openSUSE Chameleon Icon with Pulse Aura */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center mb-5">
          <div className="absolute inset-0 rounded-full bg-[#73ba25]/20 animate-ping opacity-40 pointer-events-none" style={{ animationDuration: '3.5s' }} />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl relative z-10">
            <circle cx="50" cy="50" r="46" fill="#73ba25" />
            <path
              d="M30 52c0-14 12-24 24-24s24 10 24 24c0 14-12 24-24 24-8 0-15-4-19-10"
              fill="#ffffff"
            />
            <circle cx="62" cy="44" r="7" fill="#10351f" />
            <circle cx="64" cy="44" r="3.5" fill="#ffffff" />
            <path
              d="M22 66c6 8 16 12 28 12 16 0 28-8 28-8"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Brand Typography */}
        <div className="flex items-center justify-center gap-2 font-display text-3xl sm:text-5xl font-black text-[#10351f] tracking-tight">
          <span>openSUSE</span>
          <span className="text-sm sm:text-base text-slate-500 font-mono -mt-3 sm:-mt-4">®</span>
          <span className="font-sans font-extrabold text-[#73ba25]">India</span>
        </div>
        <div className="text-xs sm:text-sm font-mono text-[#10351f]/70 tracking-widest mt-2 uppercase font-bold">
          Bengaluru Connect 2027
        </div>
      </div>

      {/* Bottom Progress Bar & Action Area */}
      <div className="max-w-md mx-auto w-full space-y-3.5 pb-2 z-20">
        {/* Progress Bar Track */}
        <div className="w-full h-3.5 sm:h-4 rounded-full bg-[#dbe3cb] p-0.5 overflow-hidden border border-[#b8c5a2] shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#73ba25] to-[#8fe038] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Boot Log */}
        <div className="font-mono text-xs text-[#10351f] space-y-1 bg-white/70 backdrop-blur p-3.5 rounded-2xl border border-[#10351f]/15 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#73ba25] font-black">[ OK ]</span>
            <span className="font-bold">{bootText}</span>
          </div>
          <div className="text-[11px] text-[#10351f]/60 flex items-center justify-between">
            <span>Loading community modules...</span>
            <span className="font-bold text-[#10351f]">{progress}%</span>
          </div>
        </div>

        {/* Skip / Enter Action */}
        <button
          onClick={() => {
            playButtonThud();
            onBootComplete();
          }}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#10351f] hover:bg-[#18482b] text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-beveled active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>ENTER EVENT (02 / HOME)</span>
          <ArrowRight className="w-4 h-4 text-[#73ba25]" />
        </button>
      </div>
    </div>
  );
};
