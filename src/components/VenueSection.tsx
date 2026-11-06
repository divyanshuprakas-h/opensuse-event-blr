import React from 'react';
import { MapPin, Wifi, Zap, Monitor, Coffee, Building } from 'lucide-react';
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
              // 03. VENUE & AMENITIES
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
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>CAMPUS SPECIFICATIONS</span>
              </div>
              <p className="text-sm font-sans text-slate-200 leading-relaxed">
                Newton School of Technology serves as the proposed host venue for openSUSE India – Bengaluru Connect 2027. The campus is equipped for 300–400 attendees with dual-projection auditoriums, computer labs for workshops, and open hacking zones.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2 border-t border-slate-800">
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

            <div className="lg:col-span-4 bg-obsidian-950 border border-slate-800 p-5 text-center space-y-2">
              <div className="w-10 h-10 mx-auto bg-pine-900 border border-geeko-500 flex items-center justify-center text-geeko-400">
                <Building className="w-5 h-5" />
              </div>
              <div className="text-sm font-black text-white uppercase">Newton School of Tech</div>
              <div className="text-[11px] text-slate-400">Bengaluru, Karnataka, India</div>
              <div className="text-[10px] text-geeko-400 pt-1 font-bold">JANUARY 2027</div>
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
