import React from 'react';
import { MapPin, Wifi, Zap, Monitor, Coffee, Building, ExternalLink, Navigation } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const facilities = [
    { icon: Wifi, title: "Gigabit Wi-Fi", desc: "Optimized for fast distro downloads & OBS building." },
    { icon: Zap, title: "Power Stations", desc: "Power hubs at every table for 10-hour hacking." },
    { icon: Monitor, title: "Auditorium & Labs", desc: "Dual projection keynote hall & breakout workshop labs." },
    { icon: Coffee, title: "Food & Drinks", desc: "Lunch, evening tea, and hydration included." }
  ];

  // Coordinates for Newton School of Technology / S-VYASA, P3 Building, Sattva Global City (12.9212° N, 77.5007° E)
  const mapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=77.4927%2C12.9132%2C77.5087%2C12.9292&layer=mapnik&marker=12.9212%2C77.5007";
  const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Newton+School+of+Technology+P3+Building+S-VYASA+Sattva+Global+City+Bengaluru";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.9212,77.5007";

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
            <div className="text-xs text-geeko-300 font-bold mt-1 tracking-wider">
              P3 BUILDING // S-VYASA // SATTVA GLOBAL CITY
            </div>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
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
                Newton School of Technology (P3 Building, S-VYASA, Sattva Global City) serves as the proposed host venue for openSUSE India – Bengaluru Connect 2027. Embedded inside the prestigious Sattva Global City tech park off Mysore Road, the modern campus is equipped for 300–400 attendees with dual-projection auditoriums, specialized computer labs for packaging workshops, and open hacking zones with high-speed connectivity.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-3 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">LOCATION</span>
                  <span className="text-white font-bold">P3, Sattva Global City</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">CAPACITY</span>
                  <span className="text-geeko-400 font-bold">300–400 Devs</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">TRANSIT</span>
                  <span className="text-slate-300">Pattanagere Metro</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] block">PARKING</span>
                  <span className="text-slate-300">Campus & Visitor</span>
                </div>
              </div>
            </div>

            {/* Right Column: College Campus Photo Card (college.png) */}
            <div className="lg:col-span-5 bg-obsidian-950 border-2 border-slate-700/80 hover:border-geeko-500/80 transition-all rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_#173f35] group">
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black/40 border-b border-slate-800">
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
                  P3 Building, Sattva Global City
                </div>
              </div>

              {/* Media Card Footer */}
              <div className="p-4 bg-obsidian-950 flex items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-geeko-400" />
                    <span>Newton School of Technology</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                    P3 Building, S-VYASA, Sattva Global City, Bengaluru 560059
                  </p>
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

        {/* Dedicated Full-Width Interactive Map & Navigation Container */}
        <div className="bg-obsidian-900 border-2 border-slate-800 shadow-[4px_4px_0px_0px_#173f35] mb-8 overflow-hidden">
          {/* Map Titlebar */}
          <div className="bg-slate-900 border-b border-slate-800 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pine-950 border border-geeko-500/60 flex items-center justify-center text-geeko-400 shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <span>Interactive Campus Location Map</span>
                  <span className="text-[10px] text-geeko-400 font-bold bg-pine-950 border border-geeko-500/40 px-1.5 py-0.2">LIVE EMBED</span>
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Rajarajeshwari Nagar / Kengeri, Bengaluru, Karnataka 560059
                </p>
              </div>
            </div>

            {/* Quick Actions in Map Titlebar */}
            <div className="flex items-center gap-2">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-geeko-500 hover:bg-geeko-400 text-black text-xs font-bold uppercase tracking-wider border border-black flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-obsidian-950 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-geeko-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-geeko-400" />
                <span>Navigate</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe with Dark Mode Filter */}
          <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-obsidian-950">
            <iframe
              title="Newton School of Technology Live Campus Map - P3 Building, Sattva Global City"
              src={mapEmbedUrl}
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] brightness-[95%]"
              loading="lazy"
            />

            {/* Floating Location Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-obsidian-950/95 backdrop-blur-md border-2 border-geeko-500/80 p-3.5 shadow-[4px_4px_0px_0px_#173f35] max-w-sm text-xs font-mono hidden sm:block">
              <div className="flex items-center justify-between gap-2 text-geeko-400 font-bold mb-1">
                <span className="flex items-center gap-1.5 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-geeko-400" />
                  NST // P3 Building
                </span>
                <span className="text-[10px] text-geeko-300 bg-pine-950 border border-geeko-500/40 px-1.5 py-0.2">
                  HOST VENUE
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-2">
                P3 Building, S-VYASA, Sattva Global City, Mysore Road, Bengaluru 560059
              </p>
              <div className="text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-1.5">
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
