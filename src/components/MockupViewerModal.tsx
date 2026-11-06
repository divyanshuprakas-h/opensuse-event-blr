import React, { useState } from 'react';
import { X, Image as ImageIcon, ExternalLink, Download, Check } from 'lucide-react';

interface MockupViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MockupViewerModal: React.FC<MockupViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'tracks'>('hero');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl bg-obsidian-950 border-2 border-geeko-500 shadow-[8px_8px_0px_0px_#173f35] text-slate-100 overflow-hidden my-6">
        
        {/* Titlebar */}
        <div className="bg-geeko-500 text-black px-4 py-3 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            <span>DESIGN PROTOTYPE CONCEPTS // MINIMALISM + NEO-BRUTALISM</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b-2 border-slate-800 bg-obsidian-900 font-mono text-xs">
          <button
            onClick={() => setActiveTab('hero')}
            className={`flex-1 py-3 px-4 uppercase font-bold tracking-wider text-center border-r border-slate-800 transition-colors ${
              activeTab === 'hero'
                ? 'bg-obsidian-950 text-geeko-400 border-b-2 border-b-geeko-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Concept 1: Hero Section & Pre-Registration View
          </button>
          <button
            onClick={() => setActiveTab('tracks')}
            className={`flex-1 py-3 px-4 uppercase font-bold tracking-wider text-center transition-colors ${
              activeTab === 'tracks'
                ? 'bg-obsidian-950 text-geeko-400 border-b-2 border-b-geeko-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Concept 2: 3-Phase Structure & Tracks View
          </button>
        </div>

        {/* Image Content */}
        <div className="p-4 sm:p-6 bg-obsidian-950 max-h-[75vh] overflow-y-auto">
          {activeTab === 'hero' ? (
            <div className="space-y-4">
              <div className="border-2 border-slate-700 bg-black overflow-hidden">
                <img
                  src="/images/hero-design-mockup.jpg"
                  alt="Hero Section Design Mockup"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="bg-obsidian-900 border border-slate-800 p-4 font-mono text-xs text-slate-300">
                <h4 className="text-geeko-400 font-bold uppercase mb-1">
                  Design Architecture Highlights (Hero & Pre-Registration):
                </h4>
                <p>
                  • <strong>Minimalist Neo-Brutalist Layout:</strong> High-contrast obsidian surface (<code className="text-white">#090e0d</code>), deep pine framing (<code className="text-white">#173f35</code>), and vivid openSUSE green accents (<code className="text-geeko-400">#73ba25</code>).
                  <br />
                  • <strong>Dynamic Pre-Registration:</strong> Clear status badge for dates announced soon, one-click priority pass reservation, and instant local pass code generation.
                  <br />
                  • <strong>Metric Grid:</strong> Brutalist monospace key performance indicator metrics for attendance, hackathon duration, and community budget.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-2 border-slate-700 bg-black overflow-hidden">
                <img
                  src="/images/tracks-design-mockup.jpg"
                  alt="3-Phase Structure Design Mockup"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="bg-obsidian-900 border border-slate-800 p-4 font-mono text-xs text-slate-300">
                <h4 className="text-geeko-400 font-bold uppercase mb-1">
                  Design Architecture Highlights (3 Phases & Hackathon):
                </h4>
                <p>
                  • <strong>Structured 3-Phase Pipeline:</strong> Phase 01 (Technical Talks & OBS), Phase 02 (Hands-on Workshops with Zypper & YaST), Phase 03 (10-Hour Hackathon).
                  <br />
                  • <strong>Terminal aesthetics:</strong> Monospaced labels, index tags, and high-visibility status indicators.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-obsidian-900 border-t-2 border-slate-800 px-4 py-3 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-400">Implemented with React, Tailwind CSS, & openSUSE Design Palette</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-geeko-500 text-black font-bold uppercase hover:bg-geeko-400 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
