import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Sparkles } from 'lucide-react';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface PanelMerchProps {
  onBackToHome: () => void;
}

export const PanelMerch: React.FC<PanelMerchProps> = ({ onBackToHome }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedSize, setSelectedSize] = useState('L');
  const [preordered, setPreordered] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotation((prev) => prev + delta * 0.7);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    setRotation((prev) => prev + delta * 0.7);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handlePreorder = () => {
    playSuccessChime();
    setPreordered(true);
    setTimeout(() => setPreordered(false), 3000);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="w-screen h-screen min-h-screen bg-[#f5f6ed] flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none animate-fadeIn"
    >
      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between z-20">
        {/* Top Tag: 03 / MERCH REVEAL */}
        <div className="bg-[#10351f] text-white text-xs sm:text-sm font-mono font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-br-2xl shadow-md -mt-5 -ml-5 sm:-mt-8 sm:-ml-8 md:-mt-10 md:-ml-10 tracking-wider">
          03 / MERCH REVEAL
        </div>

        {/* Back Button [ ← Return to Home ] */}
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          title="Return to Home Menu"
          className="px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white border-2 border-[#10351f]/20 text-[#10351f] font-mono text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm active:translate-y-0.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>RETURN TO HOME</span>
        </button>
      </div>

      {/* Main Merchandise Display Stage */}
      <div className="flex flex-col items-center justify-center my-auto py-2 max-w-lg mx-auto w-full text-center">
        
        {/* Bold Headline */}
        <div className="mb-2">
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#10351f] tracking-tight uppercase leading-tight">
            WEAR YOUR <br />
            OPEN SOURCE.
          </h2>
        </div>

        {/* 3D Floating Interactive T-Shirt Display */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center cursor-grab active:cursor-grabbing my-1"
        >
          {/* Glowing Orbital Neon Rings */}
          <div className="absolute inset-0 rounded-full border border-[#73ba25]/40 animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '4s' }} />
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-dashed border-[#8fe038]/60 animate-spin opacity-50 pointer-events-none" style={{ animationDuration: '22s' }} />

          {/* Interactive Rotatable T-Shirt */}
          <div
            style={{
              transform: `perspective(800px) rotateY(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            }}
            className="relative z-10 w-48 sm:w-56 md:w-64 drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]"
          >
            {/* SVG T-Shirt Silhouette */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* T-Shirt Base Body */}
              <path
                d="M 60 25 L 80 40 C 90 45, 110 45, 120 40 L 140 25 L 185 55 L 165 90 L 150 80 L 150 185 L 50 185 L 50 80 L 35 90 L 15 55 Z"
                fill="#fcfcf8"
                stroke="#dbe3cb"
                strokeWidth="2.5"
              />

              {/* Collar Ribbing (openSUSE Green Accent) */}
              <path
                d="M 80 40 C 90 47, 110 47, 120 40 C 115 48, 85 48, 80 40 Z"
                fill="#73ba25"
              />

              {/* Sleeve Edges Green Trim */}
              <path d="M 165 90 L 150 80" stroke="#73ba25" strokeWidth="2.5" />
              <path d="M 35 90 L 50 80" stroke="#73ba25" strokeWidth="2.5" />

              {/* Front Print: openSUSE Chameleon Logo */}
              <g transform="translate(70, 70) scale(0.6)">
                <path
                  d="M 25 50 C 10 55, 5 75, 15 88 C 25 100, 50 100, 60 82 C 65 68, 58 58, 46 60"
                  fill="none"
                  stroke="#173f35"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 40 C 35 15, 65 -5, 105 0 C 135 2, 150 20, 150 38 C 150 55, 130 68, 105 68 C 70 68, 45 62, 40 40 Z"
                  fill="#173f35"
                />
                <circle cx="120" cy="25" r="14" fill="#ffffff" />
                <circle cx="122" cy="25" r="6" fill="#173f35" />
              </g>

              {/* Front Print: Typography */}
              <text
                x="100"
                y="135"
                textAnchor="middle"
                fill="#173f35"
                fontFamily="'Chakra Petch', sans-serif"
                fontWeight="900"
                fontSize="11"
                letterSpacing="1"
              >
                BENGALURU
              </text>
              <text
                x="100"
                y="148"
                textAnchor="middle"
                fill="#5c971c"
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize="8"
                letterSpacing="1"
              >
                — CONNECT 2027 —
              </text>
            </svg>
          </div>

          {/* Pedestal Base with Glowing LED segments */}
          <div className="absolute -bottom-2 w-52 sm:w-60 md:w-64 h-7 rounded-full bg-[#1b3d22] border-2 border-[#73ba25] shadow-[0_0_25px_rgba(115,186,37,0.6)] flex items-center justify-center">
            <div className="flex gap-2">
              <span className="w-5 h-1.5 rounded-full bg-[#8fe038] shadow-[0_0_8px_#8fe038] animate-pulse" />
              <span className="w-5 h-1.5 rounded-full bg-[#8fe038] shadow-[0_0_8px_#8fe038] animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="w-5 h-1.5 rounded-full bg-[#8fe038] shadow-[0_0_8px_#8fe038] animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

        {/* Drag Hint: ← 🖱️ → Drag to explore */}
        <div className="text-center font-mono text-xs text-[#204028] mt-4 flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm text-[#73ba25] font-bold">
            <span>←</span>
            <span>🖱️</span>
            <span>→</span>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide mt-0.5">
            Drag to explore in 3D
          </span>
        </div>

        {/* Interactive Size Selector & Action */}
        <div className="mt-3 flex flex-col items-center gap-2.5 w-full max-w-xs">
          <div className="flex items-center justify-center gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedSize === sz
                    ? 'bg-[#10351f] text-white border-2 border-[#73ba25] shadow-sm'
                    : 'bg-white text-[#10351f] border border-[#ccd5b8] hover:bg-[#f7f9ee]'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>

          <button
            onClick={handlePreorder}
            className="w-full py-2.5 sm:py-3 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-beveled-green active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{preordered ? `Size ${selectedSize} Reserved!` : `Reserve Size ${selectedSize} T-Shirt`}</span>
          </button>
        </div>
      </div>

      {/* Bottom Green Badge */}
      <div className="w-full max-w-md mx-auto pt-1 z-20">
        <div className="w-full py-2 px-4 rounded-full bg-[#10351f] text-white text-[11px] sm:text-xs font-mono text-center font-bold tracking-wide shadow-md border border-[#73ba25]/40 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#8fe038]" />
          <span>Paid merchandise + selected winner rewards</span>
        </div>
      </div>
    </div>
  );
};
