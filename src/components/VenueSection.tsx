import React from 'react';
import { MapPin, Wifi, Zap, Monitor, Coffee, Building, ExternalLink, Navigation } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const facilities = [
    { icon: Wifi, title: "Gigabit Wi-Fi", desc: "Dual upstream lines optimized for package building & distro sync." },
    { icon: Zap, title: "Dedicated Power Stations", desc: "Power hubs and multi-strips at every hacker desk for 20-hour endurance." },
    { icon: Monitor, title: "Auditoriums & Breakout Labs", desc: "Dual projection keynote hall + 2 dedicated packaging and QA workshop rooms." },
    { icon: Coffee, title: "Builder Sustenance", desc: "Continuous catering: lunches, hot dinner, midnight snacks, tea & hydration stations." }
  ];

  // Coordinates for Newton School of Technology / S-VYASA, P3 Building, Sattva Global City (12.9212° N, 77.5007° E)
  const mapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=77.4927%2C12.9132%2C77.5087%2C12.9292&layer=mapnik&marker=12.9212%2C77.5007";
  const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Newton+School+of+Technology+P3+Building+S-VYASA+Sattva+Global+City+Bengaluru";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.9212,77.5007";

  return (
    <section id="venue" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 04. HOST VENUE &amp; CAMPUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Newton School of Technology
            </h2>
            <div className="text-xs text-geeko-300 font-bold mt-1 tracking-wider">
              P3 BUILDING // S-VYASA CAMPUS // SATTVA GLOBAL CITY, BENGALURU
            </div>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="bg-[#0b1e15] border border-geeko-500/30 px-3 py-1.5 rounded-full text-geeko-300 font-bold">
              PROPOSED HOST VENUE // BENGALURU, KA
            </span>
          </div>
        </div>

        {/* 2-Column Campus Card */}
        <div className="bg-[#09130e] border border-geeko-500/20 rounded-2xl p-6 sm:p-8 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Campus Specs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>CAMPUS SPECIFICATIONS &amp; LOGISTICS</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                Newton School of Technology (P3 Building, S-VYASA Campus, Sattva Global City) serves as the host venue for openSUSE India – Bengaluru Connect 2027. Embedded inside the prestigious Sattva Global City tech park off Mysore Road, the campus is equipped for 250 builders with dual-projection keynotes, breakout packaging labs, and load-tested hacking zones.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-4 border-t border-geeko-500/10">
                <div className="p-2.5 rounded-lg bg-[#060c09] border border-geeko-500/10">
                  <span className="text-slate-500 uppercase text-[10px] block">LOCATION</span>
                  <span className="text-white font-bold">P3, Sattva Global City</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#060c09] border border-geeko-500/10">
                  <span className="text-slate-500 uppercase text-[10px] block">CAPACITY</span>
                  <span className="text-geeko-400 font-bold">250 Builders (280 Cap)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#060c09] border border-geeko-500/10">
                  <span className="text-slate-500 uppercase text-[10px] block">TRANSIT</span>
                  <span className="text-slate-300">Pattanagere Metro</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#060c09] border border-geeko-500/10">
                  <span className="text-slate-500 uppercase text-[10px] block">SECURITY</span>
                  <span className="text-slate-300">24/7 Gated &amp; RFID Pass</span>
                </div>
              </div>
            </div>

            {/* Right Column: College Campus Photo Card */}
            <div className="lg:col-span-5 bg-[#060c09] border border-geeko-500/30 hover:border-geeko-400/60 transition-all rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black/40 border-b border-geeko-500/20">
                <img 
                  src={`${import.meta.env.BASE_URL}college.png`} 
                  alt="Newton School of Technology, Bengaluru Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c09] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute top-3 left-3 bg-[#070c0a]/90 backdrop-blur-sm border border-geeko-500/50 text-geeko-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md">
                  PROPOSED VENUE
                </div>
                <div className="absolute bottom-2.5 right-3 bg-[#070c0a]/90 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
                  P3 Building, Sattva Global City
                </div>
              </div>

              {/* Media Card Footer */}
              <div className="p-4 bg-[#060c09] flex items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-geeko-400" />
                    <span>Newton School of Technology</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                    P3 Building, S-VYASA, Sattva Global City, Bengaluru 560059
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold text-geeko-400 font-mono bg-[#0c2419] border border-geeko-500/40 px-2.5 py-1 rounded-lg inline-block">
                    JANUARY 2027
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dedicated Interactive Map & Navigation Container */}
        <div className="bg-[#09130e] border border-geeko-500/20 rounded-2xl mb-8 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {/* Map Titlebar */}
          <div className="bg-[#0b1912] border-b border-geeko-500/20 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0d261b] border border-geeko-500/50 flex items-center justify-center text-geeko-400 shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-tight flex items-center gap-2">
                  <span>Interactive Campus Location Map</span>
                  <span className="text-[10px] text-geeko-400 font-bold bg-[#0c2419] border border-geeko-500/40 px-2 py-0.5 rounded">LIVE EMBED</span>
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Rajarajeshwari Nagar / Kengeri, Bengaluru 560059
                </p>
              </div>
            </div>

            {/* Quick Actions in Map Titlebar */}
            <div className="flex items-center gap-2">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#060c09] hover:bg-[#0d2217] text-slate-200 border border-geeko-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-geeko-400" />
                <span>Navigate</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe with Dark Mode Filter */}
          <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-[#060c09]">
            <iframe
              title="Newton School of Technology Live Campus Map - P3 Building, Sattva Global City"
              src={mapEmbedUrl}
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] brightness-[95%]"
              loading="lazy"
            />

            {/* Floating Location Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-[#070c0a]/95 backdrop-blur-md border border-geeko-500/60 rounded-xl p-3.5 shadow-xl max-w-sm text-xs font-mono hidden sm:block">
              <div className="flex items-center justify-between gap-2 text-geeko-400 font-bold mb-1">
                <span className="flex items-center gap-1.5 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-geeko-400" />
                  NST // P3 Building
                </span>
                <span className="text-[10px] text-geeko-300 bg-[#0c2419] border border-geeko-500/40 px-2 py-0.5 rounded">
                  HOST VENUE
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-2">
                P3 Building, S-VYASA, Sattva Global City, Mysore Road, Bengaluru 560059
              </p>
              <div className="text-[10px] text-slate-400 flex items-center justify-between border-t border-geeko-500/10 pt-1.5">
                <span>GPS: 12.9212° N, 77.5007° E</span>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-geeko-400 hover:underline font-bold"
                >
                  Directions →
                </a>
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
                className="bg-[#09130e] border border-geeko-500/20 hover:border-geeko-400/50 rounded-xl p-4 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0d261b] border border-geeko-500/30 text-geeko-400 flex items-center justify-center mb-2.5">
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
