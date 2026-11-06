import React from 'react';
import { MapPin, Navigation, Wifi, Zap, Coffee, Monitor, Building, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const facilities = [
    {
      icon: Wifi,
      title: "High-Density Wi-Fi",
      desc: "Dedicated gigabit pipelines optimized for concurrent downloads, OBS building, and repository syncs."
    },
    {
      icon: Zap,
      title: "Hacking Power Stations",
      desc: "Surge-protected multi-plug power hubs at every workstation table for uninterrupted 10-hour hacking."
    },
    {
      icon: Monitor,
      title: "Auditorium & Workshop Labs",
      desc: "Large dual-projection auditorium for keynotes and dedicated breakout labs for hands-on sessions."
    },
    {
      icon: Coffee,
      title: "Food & Refreshment Lounges",
      desc: "On-site dining zones serving hot lunch, refreshments, midnight fuel, and beverage stations."
    }
  ];

  return (
    <section id="venue" className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 04. HOST VENUE & AMENITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Newton School of Technology, Bengaluru
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-slate-300">
              PROPOSED HOST VENUE // BENGALURU, KARNATAKA
            </span>
          </div>
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-obsidian-900 border-2 border-slate-800 p-6 sm:p-8 font-mono shadow-[6px_6px_0px_0px_#173f35]">
              <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs uppercase mb-3">
                <MapPin className="w-4 h-4" />
                <span>VENUE SPECIFICATION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
                Modern Technology Campus in India's Tech Capital
              </h3>

              <p className="text-sm font-sans text-slate-300 leading-relaxed mb-6">
                Newton School of Technology serves as the proposed host venue for openSUSE India – Bengaluru Connect 2027. Designed for cutting-edge engineering pedagogy, the campus features state-of-the-art infrastructure suitable for 300–400 attendees, multiple concurrent workshop tracks, and an overnight coding hackathon.
              </p>

              <div className="space-y-3 font-mono text-xs border-t border-slate-800 pt-4">
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 uppercase">Institution:</span>
                  <span className="text-white font-bold">Newton School of Technology</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 uppercase">City & State:</span>
                  <span className="text-white font-bold">Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 uppercase">Planned Capacity:</span>
                  <span className="text-geeko-400 font-bold">300–400 Participants</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 uppercase">Transit:</span>
                  <span className="text-slate-300">Easy accessibility via Namma Metro, airport taxis & BMTC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Brutalist Map / Coordinate Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-obsidian-900 border-2 border-geeko-500 p-6 font-mono shadow-[6px_6px_0px_0px_#173f35] relative">
              <div className="flex items-center justify-between text-xs text-geeko-400 font-bold mb-4 border-b border-slate-800 pb-2">
                <span>LOCATION TELEMETRY</span>
                <span>GRID 12.9716° N, 77.5946° E</span>
              </div>

              {/* Stylized brutalist schematic diagram */}
              <div className="h-64 bg-obsidian-950 border border-slate-800 relative flex flex-col justify-between p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#173f35_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                
                <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500">
                  <span>ZONE: KA-BLR-01</span>
                  <span className="text-geeko-400">ACTIVE PROPOSAL</span>
                </div>

                <div className="relative z-10 text-center space-y-2 py-4">
                  <div className="w-12 h-12 mx-auto bg-pine-900 border-2 border-geeko-500 flex items-center justify-center text-geeko-400 animate-pulse">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-black text-white uppercase tracking-tight">
                    Newton School of Technology
                  </div>
                  <div className="text-xs text-geeko-400">
                    Bengaluru, Karnataka, India
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                  <span>GEO-ANCHOR: BENGALURU</span>
                  <span>OPEN IN JANUARY 2027</span>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Detailed route maps and room layouts will be published upon date confirmation.</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Amenities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <div
                key={i}
                className="bg-obsidian-900 border-2 border-slate-800 p-5 font-mono hover:border-geeko-500 transition-colors shadow-[4px_4px_0px_0px_#173f35]"
              >
                <div className="w-9 h-9 bg-pine-900 border border-geeko-500/40 text-geeko-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1.5">
                  {fac.title}
                </h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
