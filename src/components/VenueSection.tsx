import React from 'react';
import { MapPin, Wifi, Zap, Monitor, Coffee, Building, ExternalLink } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const facilities = [
    { icon: Wifi, title: "Gigabit Wi-Fi", desc: "Optimized for fast distro downloads & OBS building." },
    { icon: Zap, title: "Power Stations", desc: "Power hubs at every table for 10-hour hacking." },
    { icon: Monitor, title: "Auditorium & Labs", desc: "Dual projection keynote hall & breakout workshop labs." },
    { icon: Coffee, title: "Food & Drinks", desc: "Lunch, evening tea, and hydration included." }
  ];

  return (
    <section id="venue" className="py-16 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 04. VENUE & AMENITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Newton School of Technology, Bengaluru
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 text-slate-300">
              PROPOSED HOST VENUE // BENGALURU, KA
            </span>
          </div>
        </div>

        {/* 2-Column Info Card */}
        <div className="bg-obsidian-900 border-2 border-slate-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#173f35] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Campus Specs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>CAMPUS SPECIFICATIONS</span>
              </div>
              <p className="text-sm font-sans text-slate-200 leading-relaxed">
                Newton School of Technology serves as the proposed host venue for openSUSE India – Bengaluru Connect 2027. The modern campus is equipped for 300–400 attendees with dual-projection auditoriums, computer labs for workshops, and open hacking zones with high-speed connectivity.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-3 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">CITY</span>
                  <span className="text-white font-bold">Bengaluru, KA</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">CAPACITY</span>
                  <span className="text-geeko-400 font-bold">300–400 Devs</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">TRANSIT</span>
                  <span className="text-slate-300">Metro & BMTC</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">PARKING</span>
                  <span className="text-slate-300">Available</span>
                </div>
              </div>
            </div>

            {/* Right Column: College Campus Photo Card (college.png) */}
            <div className="lg:col-span-5 bg-obsidian-950 border-2 border-slate-700/80 hover:border-geeko-500/80 transition-all rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_#173f35] group">
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-black/40 border-b border-slate-800">
                <img 
                  src={`${import.meta.env.BASE_URL}college.png`} 
                  alt="Newton School of Technology, Bengaluru Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute top-3 left-3 bg-obsidian-950/90 backdrop-blur-sm border border-geeko-500/60 text-geeko-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  PROPOSED VENUE
                </div>
                <div className="absolute bottom-2.5 right-3 bg-obsidian-950/90 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800">
                  Bengaluru Campus
                </div>
              </div>

              <div className="p-4 bg-obsidian-950 flex items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-geeko-400" />
                    <span>Newton School of Technology</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">Bengaluru, Karnataka, India</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold text-geeko-400 font-mono bg-pine-950 border border-geeko-500/40 px-2 py-1 rounded inline-block">
                    JANUARY 2027
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Amenities */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <div
                key={i}
                className="bg-obsidian-900 border border-slate-800 p-4 hover:border-geeko-500 transition-colors"
              >
                <div className="w-8 h-8 bg-pine-900 border border-geeko-500/40 text-geeko-400 flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase mb-1">{fac.title}</h4>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{fac.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
