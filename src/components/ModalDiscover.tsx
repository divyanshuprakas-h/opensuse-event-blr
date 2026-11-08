import React from 'react';
import { X, MapPin, Calendar, Users, Coffee, ShieldCheck, UserCheck, ExternalLink } from 'lucide-react';
import { playButtonThud } from '../utils/audio';

interface ModalDiscoverProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBuildathon: () => void;
}

export const ModalDiscover: React.FC<ModalDiscoverProps> = ({
  isOpen,
  onClose,
  onOpenBuildathon,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          playButtonThud();
          onClose();
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#f5f6ed] rounded-[28px] border-2 border-[#2b4c30] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto select-none">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playButtonThud();
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] flex items-center justify-center hover:bg-white active:translate-y-0.5 cursor-pointer shadow-sm"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-block bg-[#10351f] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
            EVENT SPECIFICATIONS // PROPOSAL OVERVIEW
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#10351f] uppercase tracking-tight">
            Bengaluru Connect '27
          </h2>
          <p className="text-xs sm:text-sm text-[#2b4c30] font-medium">
            Two days of open-source learning, collaboration and 20-hour overnight building.
          </p>
        </div>

        {/* Campus Photo & Venue Badge */}
        <div className="rounded-2xl overflow-hidden border-2 border-[#b8c5a2] shadow-md mb-6 relative group">
          <img
            src={`${import.meta.env.BASE_URL}college.png`}
            alt="Newton School of Technology, Bengaluru"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
            <div>
              <div className="text-[10px] font-mono text-[#8fe038] uppercase font-bold">
                PROPOSED HOST VENUE
              </div>
              <div className="text-white font-display font-bold text-base">
                Newton School of Technology
              </div>
              <div className="text-slate-300 text-xs font-mono">
                P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Bengaluru
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-[#f7f9ee] border border-[#ccd5b8]">
            <div className="flex items-center gap-2 text-geeko-700 font-bold text-xs mb-1">
              <Calendar className="w-4 h-4" />
              <span>WHEN</span>
            </div>
            <div className="text-sm font-bold text-[#14281a]">January 2027</div>
            <div className="text-[11px] text-slate-600">2 Consecutive Days (Exact dates TBA)</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f7f9ee] border border-[#ccd5b8]">
            <div className="flex items-center gap-2 text-geeko-700 font-bold text-xs mb-1">
              <Users className="w-4 h-4" />
              <span>COMMUNITY CAP</span>
            </div>
            <div className="text-sm font-bold text-[#14281a]">250 Builders</div>
            <div className="text-[11px] text-slate-600">Free admission &amp; overnight stay</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f7f9ee] border border-[#ccd5b8]">
            <div className="flex items-center gap-2 text-geeko-700 font-bold text-xs mb-1">
              <Coffee className="w-4 h-4" />
              <span>6 MEAL SERVICES</span>
            </div>
            <div className="text-sm font-bold text-[#14281a]">100% Catered</div>
            <div className="text-[11px] text-slate-600">Breakfast, lunch, dinner &amp; midnight fuel</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f7f9ee] border border-[#ccd5b8]">
            <div className="flex items-center gap-2 text-geeko-700 font-bold text-xs mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>SAFETY &amp; CARE</span>
            </div>
            <div className="text-sm font-bold text-[#14281a]">24/7 Security &amp; Rest</div>
            <div className="text-[11px] text-slate-600">Quiet rest zones &amp; rotating mentors</div>
          </div>
        </div>

        {/* Organizing Team */}
        <div className="p-4 rounded-2xl bg-[#eaf0dc] border border-[#b8c5a2] mb-6 space-y-2">
          <div className="text-xs font-mono font-bold text-[#10351f] uppercase tracking-wider">
            ORGANIZING COMMITTEE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-[#2b4c30]">
            <div>• <strong>Divyanshu Prakash:</strong> Event &amp; Website Lead</div>
            <div>• <strong>Dushyant Acharya:</strong> Program &amp; Buildathon Lead</div>
            <div>• <strong>Rithull Raj Kallat:</strong> Logistics &amp; Venue Lead</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenBuildathon();
            }}
            className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-geeko-500 to-geeko-400 text-white font-display font-black text-xs uppercase tracking-wider shadow-beveled-green active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>JOIN 20H GEEKO BUILDATHON</span>
            <span>→</span>
          </button>

          <a
            href="https://maps.google.com/?q=Sattva+Global+City+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] font-display font-bold text-xs uppercase hover:bg-white active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-rose-600" />
            <span>Open in Maps</span>
          </a>
        </div>

      </div>
    </div>
  );
};
