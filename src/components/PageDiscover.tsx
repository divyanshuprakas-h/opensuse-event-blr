import React from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Coffee, ShieldCheck, UserCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { playButtonThud } from '../utils/audio';

interface PageDiscoverProps {
  onBackToHome: () => void;
  onGoToBuildathon: () => void;
  standalone?: boolean;
}

export const PageDiscover: React.FC<PageDiscoverProps> = ({
  onBackToHome,
  onGoToBuildathon,
  standalone = true,
}) => {
  return (
    <div
      className={`relative w-full rounded-[32px] border-2 border-[#10351f] p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl select-none bg-[#f5f6ed] text-[#10351f] transition-all ${
        standalone ? 'max-w-2xl mx-auto min-h-[680px]' : 'w-full h-full min-h-[640px]'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Top Tag: 04 / DISCOVER */}
        <div className="bg-[#10351f] text-white text-[11px] font-mono font-bold px-3.5 py-1.5 rounded-br-2xl -mt-5 -ml-5 sm:-mt-7 sm:-ml-7 shadow-md">
          04 / DISCOVER THE EVENT
        </div>

        {/* Back Button [ ← ] */}
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          title="Return to Home Menu"
          className="w-8 h-8 rounded-xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] flex items-center justify-center hover:bg-white active:translate-y-0.5 shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Main Content Stream */}
      <div className="space-y-5 overflow-y-auto pr-1">
        
        {/* Header Title */}
        <div>
          <div className="text-[10px] font-mono text-[#73ba25] font-black uppercase tracking-widest">
            EVENT SPECIFICATIONS // PROPOSAL OVERVIEW
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#10351f] uppercase tracking-tight">
            Bengaluru Connect '27
          </h1>
          <p className="text-xs text-[#10351f]/80 mt-1 leading-relaxed">
            India's flagship openSUSE community gathering uniting 300+ developers, sysadmins, and student contributors for keynotes, hands-on packaging workshops, and a 20-hour buildathon.
          </p>
        </div>

        {/* Campus Venue Showcase Card */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#10351f]/20 bg-[#e7edd8] group shadow-inner">
          <img
            src={`${import.meta.env.BASE_URL}college.png`}
            alt="Newton School of Technology Campus"
            className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10351f] via-black/40 to-transparent flex flex-col justify-end p-4 text-white">
            <div className="flex items-center gap-1.5 text-xs text-[#8fe038] font-mono font-bold">
              <MapPin className="w-4 h-4" />
              <span>HOST VENUE</span>
            </div>
            <h3 className="font-display font-black text-base sm:text-lg">
              Newton School of Technology
            </h3>
            <p className="text-[11px] text-white/80 font-mono">
              P3 Building, Sattva Global City, Bengaluru · GPS: 12.9212° N, 77.5007° E
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <Calendar className="w-5 h-5 mx-auto text-[#73ba25] mb-1" />
            <div className="font-display font-black text-xs text-[#10351f]">JANUARY 2027</div>
            <div className="text-[10px] font-mono text-slate-500">2-Day Summit</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <Users className="w-5 h-5 mx-auto text-[#73ba25] mb-1" />
            <div className="font-display font-black text-xs text-[#10351f]">300+ BUILDERS</div>
            <div className="text-[10px] font-mono text-slate-500">Free Access</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <Coffee className="w-5 h-5 mx-auto text-[#73ba25] mb-1" />
            <div className="font-display font-black text-xs text-[#10351f]">20H OVERNIGHT</div>
            <div className="text-[10px] font-mono text-slate-500">Meals &amp; RedBull</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <ShieldCheck className="w-5 h-5 mx-auto text-[#73ba25] mb-1" />
            <div className="font-display font-black text-xs text-[#10351f]">6 TECH TRACKS</div>
            <div className="text-[10px] font-mono text-slate-500">₹50K Prizes</div>
          </div>
        </div>

        {/* Organizers List */}
        <div className="p-4 rounded-xl bg-[#eef1e1] border border-[#10351f]/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10351f]">
            <UserCheck className="w-4 h-4 text-[#73ba25]" />
            <span>ORGANIZING COMMITTEE &amp; LEADS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="bg-white p-2 rounded-lg border border-[#10351f]/10">
              <div className="font-bold text-[#10351f]">Divyansh</div>
              <div className="text-[10px] text-slate-500">Lead Organizer · openSUSE Member</div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#10351f]/10">
              <div className="font-bold text-[#10351f]">Ashish</div>
              <div className="text-[10px] text-slate-500">Co-Organizer · openSUSE Member</div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#10351f]/10">
              <div className="font-bold text-[#10351f]">Sai Charan</div>
              <div className="text-[10px] text-slate-500">Logistics &amp; NST Campus Lead</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA to Buildathon */}
      <div className="pt-4 border-t border-[#10351f]/15 flex items-center justify-between gap-3">
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          className="text-xs font-mono font-bold text-[#10351f]/70 hover:text-[#10351f] flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home Menu</span>
        </button>

        <button
          onClick={() => {
            playButtonThud();
            onGoToBuildathon();
          }}
          className="py-3 px-5 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>BUILDATHON &amp; REGISTRATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
