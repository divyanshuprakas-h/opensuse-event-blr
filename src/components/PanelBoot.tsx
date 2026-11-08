import React, { useState, useEffect } from 'react';
import { playButtonThud, playSuccessChime } from '../utils/audio';
import { ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

interface PanelBootProps {
  onBootComplete: () => void;
  standalone?: boolean;
}

export const PanelBoot: React.FC<PanelBootProps> = ({ onBootComplete, standalone = false }) => {
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
        }, 1200);
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
        setTimeout(onBootComplete, 900);
      } else {
        setProgress(current);
      }
    }, 100);
  };

  return (
    <div
      className={`relative w-full rounded-[32px] border-2 border-[#10351f] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl select-none bg-[#f5f6ed] text-[#10351f] transition-all ${
        standalone ? 'max-w-md mx-auto min-h-[680px]' : 'w-full h-full min-h-[640px]'
      }`}
    >
      {/* Top Tag: 01 / BOOT */}
      <div className="flex items-center justify-between">
        <div className="bg-[#10351f] text-white text-[11px] font-mono font-bold px-3.5 py-1.5 rounded-br-2xl -mt-6 -ml-6 sm:-mt-8 sm:-ml-8 shadow-md">
          01 / BOOT
        </div>
        <button
          onClick={handleRestart}
          title="Reboot Sequence"
          className="text-xs font-mono text-[#10351f]/70 hover:text-[#10351f] font-bold cursor-pointer flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reboot</span>
        </button>
      </div>

      {/* Center Logo & Branding */}
      <div className="flex flex-col items-center justify-center my-auto py-8">
        {/* openSUSE Chameleon Icon with Pulse Glow */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-4">
          <div className="absolute inset-0 rounded-full bg-[#73ba25]/20 animate-ping opacity-40" style={{ animationDuration: '3s' }} />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg relative z-10">
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

        {/* Brand Text */}
        <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-[#10351f] tracking-tight">
          <span>openSUSE</span>
          <span className="text-xs text-slate-500 font-mono -mt-2">®</span>
          <span className="font-sans font-extrabold text-[#73ba25]">India</span>
        </div>
        <div className="text-xs font-mono text-[#10351f]/60 tracking-wider mt-1 uppercase font-semibold">
          Bengaluru Connect 2027
        </div>
      </div>

      {/* Bottom Progress Bar & Telemetry Log */}
      <div className="space-y-4 pb-2">
        {/* Progress Bar Track */}
        <div className="w-full h-3.5 rounded-full bg-[#dbe3cb] p-0.5 overflow-hidden border border-[#b8c5a2]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#73ba25] to-[#8fe038] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Boot Log */}
        <div className="font-mono text-xs text-[#10351f] space-y-1 bg-black/5 p-3 rounded-xl border border-[#10351f]/10">
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
          className="w-full py-3 px-4 rounded-2xl bg-[#10351f] hover:bg-[#18482b] text-white font-display font-black text-xs tracking-wider uppercase shadow-beveled active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>ENTER EVENT (02 / HOME)</span>
          <ArrowRight className="w-4 h-4 text-[#73ba25]" />
        </button>
      </div>
    </div>
  );
};
