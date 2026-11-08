import React, { useState, useEffect } from 'react';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface PanelBootProps {
  onBootComplete?: () => void;
  standalone?: boolean;
}

export const PanelBoot: React.FC<PanelBootProps> = ({ onBootComplete, standalone = false }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing kernel...');

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setBootText('Starting Bengaluru Connect 2027...');
        clearInterval(interval);
        playSuccessChime();
        if (onBootComplete) {
          setTimeout(onBootComplete, 700);
        }
      } else {
        setProgress(current);
        if (current > 40) {
          setBootText('Community loaded');
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

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
        if (onBootComplete) setTimeout(onBootComplete, 500);
      } else {
        setProgress(current);
      }
    }, 100);
  };

  return (
    <div className={`relative bg-[#f5f6ed] rounded-[28px] border-2 border-[#2b4c30] p-5 flex flex-col justify-between overflow-hidden shadow-xl select-none ${standalone ? 'min-h-[580px] sm:min-h-[640px]' : 'h-full min-h-[520px]'}`}>
      
      {/* Top Tag: 01 / BOOT */}
      <div className="flex items-center justify-between">
        <div className="bg-[#10351f] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-br-xl -mt-5 -ml-5 shadow-sm">
          01 / BOOT
        </div>
        <button
          onClick={handleRestart}
          title="Reboot Sequence"
          className="text-[10px] font-mono text-geeko-700 hover:text-black font-semibold cursor-pointer underline"
        >
          Reboot
        </button>
      </div>

      {/* Center Logo & Branding */}
      <div className="flex flex-col items-center justify-center my-auto py-8">
        {/* openSUSE Chameleon Icon */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="46" fill="#73ba25" />
            <path
              d="M30 52c0-14 12-24 24-24s24 10 24 24c0 14-12 24-24 24-8 0-15-4-19-10"
              fill="#ffffff"
            />
            <circle cx="62" cy="44" r="7" fill="#173f35" />
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

        {/* Brand Text */}
        <div className="flex items-center gap-1.5 font-display text-lg sm:text-xl font-bold text-[#14281a] tracking-tight">
          <span>openSUSE</span>
          <span className="text-[10px] text-slate-500 font-mono -mt-2">®</span>
          <span className="font-sans font-extrabold text-[#73ba25]">India</span>
        </div>
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div className="space-y-3 pb-4">
        {/* Progress Bar Track */}
        <div className="w-full h-3 rounded-full bg-[#dbe3cb] p-0.5 overflow-hidden border border-[#b8c5a2]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-geeko-500 to-geeko-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Boot Log */}
        <div className="font-mono text-xs text-[#204028] space-y-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[#73ba25] font-bold">[ OK ]</span>
            <span>{bootText}</span>
          </div>
          <div className="text-[11px] text-slate-500">
            {progress < 100 ? `Loading assets... ${progress}%` : 'System ready // Click to enter'}
          </div>
        </div>
      </div>

    </div>
  );
};
