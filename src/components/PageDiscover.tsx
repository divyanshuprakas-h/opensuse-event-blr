import React from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Coffee, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import { playButtonThud } from '../utils/audio';

interface PageDiscoverProps {
  onBackToHome: () => void;
  onGoToBuildathon: () => void;
}

export const PageDiscover: React.FC<PageDiscoverProps> = ({
  onBackToHome,
  onGoToBuildathon,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#f5f6ed] flex flex-col justify-between p-6 sm:p-12 relative overflow-y-auto select-none animate-fadeIn">
      
      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between z-20 mb-6">
        {/* Top Tag: 04 / DISCOVER */}
        <div className="bg-[#10351f] text-white text-xs sm:text-sm font-mono font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-br-2xl shadow-lg -mt-6 -ml-6 sm:-mt-12 sm:-ml-12 tracking-wider">
          04 / DISCOVER THE EVENT
        </div>

        {/* Back Button [ ← Return to Home ] */}
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          title="Return to Home Menu"
          className="px-3.5 py-2 rounded-xl bg-white/80 hover:bg-white border-2 border-[#10351f]/20 text-[#10351f] font-mono text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm active:translate-y-0.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>RETURN TO HOME</span>
        </button>
      </div>

      {/* Main Content Stream */}
      <div className="max-w-4xl mx-auto w-full space-y-6 my-auto py-4">
        
        {/* Header Title */}
        <div className="text-center sm:text-left">
          <div className="text-xs font-mono text-[#73ba25] font-black uppercase tracking-widest">
            EVENT SPECIFICATIONS // PROPOSAL OVERVIEW
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#10351f] uppercase tracking-tight mt-1">
            Bengaluru Connect '27
          </h1>
          <p className="text-sm sm:text-base text-[#10351f]/80 mt-2 leading-relaxed max-w-3xl">
            India's flagship openSUSE community gathering uniting 300+ developers, sysadmins, and student contributors for keynotes, hands-on packaging workshops, and a 20-hour buildathon.
          </p>
        </div>

        {/* Campus Venue Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#10351f]/20 bg-[#e7edd8] group shadow-xl">
          <img
            src={`${import.meta.env.BASE_URL}college.png`}
            alt="Newton School of Technology Campus"
            className="w-full h-56 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10351f] via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#8fe038] font-mono font-bold">
              <MapPin className="w-4 h-4" />
              <span>HOST VENUE</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl mt-0.5">
              Newton School of Technology
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-mono mt-1">
              P3 Building, Sattva Global City, Bengaluru · GPS: 12.9212° N, 77.5007° E
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <Calendar className="w-6 h-6 mx-auto text-[#73ba25] mb-2" />
            <div className="font-display font-black text-sm text-[#10351f]">JANUARY 2027</div>
            <div className="text-xs font-mono text-slate-500 mt-0.5">2-Day Summit</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <Users className="w-6 h-6 mx-auto text-[#73ba25] mb-2" />
            <div className="font-display font-black text-sm text-[#10351f]">300+ BUILDERS</div>
            <div className="text-xs font-mono text-slate-500 mt-0.5">100% Free Entry</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <Coffee className="w-6 h-6 mx-auto text-[#73ba25] mb-2" />
            <div className="font-display font-black text-sm text-[#10351f]">20H OVERNIGHT</div>
            <div className="text-xs font-mono text-slate-500 mt-0.5">Meals &amp; RedBull</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#10351f]/15 shadow-sm text-center">
            <ShieldCheck className="w-6 h-6 mx-auto text-[#73ba25] mb-2" />
            <div className="font-display font-black text-sm text-[#10351f]">6 TECH TRACKS</div>
            <div className="text-xs font-mono text-slate-500 mt-0.5">₹50K Prize Pool</div>
          </div>
        </div>

        {/* Organizers List */}
        <div className="p-5 rounded-2xl bg-[#eef1e1] border border-[#10351f]/20 space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#10351f]">
            <UserCheck className="w-4 h-4 text-[#73ba25]" />
            <span>ORGANIZING COMMITTEE &amp; CAMPUS LEADS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="bg-white p-3 rounded-xl border border-[#10351f]/10 shadow-sm">
              <div className="font-bold text-[#10351f] text-sm">Divyansh</div>
              <div className="text-slate-500 mt-0.5">Lead Organizer · openSUSE Member</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#10351f]/10 shadow-sm">
              <div className="font-bold text-[#10351f] text-sm">Ashish</div>
              <div className="text-slate-500 mt-0.5">Co-Organizer · openSUSE Member</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#10351f]/10 shadow-sm">
              <div className="font-bold text-[#10351f] text-sm">Sai Charan</div>
              <div className="text-slate-500 mt-0.5">Logistics &amp; NST Campus Lead</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA to Buildathon */}
      <div className="max-w-4xl mx-auto w-full pt-6 border-t border-[#10351f]/15 flex items-center justify-between gap-4">
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          className="text-xs sm:text-sm font-mono font-bold text-[#10351f]/70 hover:text-[#10351f] flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Menu</span>
        </button>

        <button
          onClick={() => {
            playButtonThud();
            onGoToBuildathon();
          }}
          className="py-3.5 px-6 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>BUILDATHON &amp; REGISTRATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
