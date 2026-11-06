import React, { useState } from 'react';
import { MapPin, Wifi, Zap, Monitor, Coffee, Building, ExternalLink, Navigation, Map as MapIcon, Image as ImageIcon } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'photo' | 'map'>('photo');

  const facilities = [
    { icon: Wifi, title: "Gigabit Wi-Fi", desc: "Optimized for fast distro downloads & OBS building." },
    { icon: Zap, title: "Power Stations", desc: "Power hubs at every table for 10-hour hacking." },
    { icon: Monitor, title: "Auditorium & Labs", desc: "Dual projection keynote hall & breakout workshop labs." },
    { icon: Coffee, title: "Food & Drinks", desc: "Lunch, evening tea, and hydration included." }
  ];

  const mapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=77.6065%2C12.7370%2C77.6465%2C12.7770&layer=mapnik&marker=12.7570%2C77.6265";
  const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Newton+School+of+Technology+Bengaluru";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.7570,77.6265";

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
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 text-slate-300">
              PROPOSED HOST VENUE // BENGALURU, KA
            </span>
          </div>
        </div>

        {/* 2-Column Info Card */}
        <div className="bg-obsidian-900 border-2 border-slate-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#173f35] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Campus Specs & Route Actions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>CAMPUS SPECIFICATIONS & LOCATION</span>
              </div>
              <p className="text-sm font-sans text-slate-200 leading-relaxed">
                Newton School of Technology serves as the proposed host venue for openSUSE India – Bengaluru Connect 2027. The modern campus is equipped for 300–400 attendees with dual-projection auditoriums, computer labs for workshops, and open hacking zones with high-speed connectivity.
              </p>

              {/* Specs Grid */}
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

              {/* Direct Maps Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 bg-geeko-500 hover:bg-geeko-400 text-black text-xs font-bold uppercase tracking-wider border border-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#ffffff] transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 bg-obsidian-950 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-geeko-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-geeko-400" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <span className="text-[11px] text-slate-500">
                  GPS: 12.7570° N, 77.6265° E
                </span>
              </div>
            </div>

            {/* Right Column: Media Card with Photo & Interactive Map Switcher */}
            <div className="lg:col-span-5 bg-obsidian-950 border-2 border-slate-700/80 hover:border-geeko-500/80 transition-all rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_#173f35]">
              
              {/* Media Switcher Tab Header */}
              <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveMediaTab('photo')}
                    className={`px-2.5 py-1 text-[11px] font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
                      activeMediaTab === 'photo'
                        ? 'bg-geeko-500 text-black border border-black'
                        : 'text-slate-400 hover:text-white bg-obsidian-950 border border-slate-800'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Campus Photo</span>
                  </button>

                  <button
                    onClick={() => setActiveMediaTab('map')}
                    className={`px-2.5 py-1 text-[11px] font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
                      activeMediaTab === 'map'
                        ? 'bg-geeko-500 text-black border border-black'
                        : 'text-slate-400 hover:text-white bg-obsidian-950 border border-slate-800'
                    }`}
                  >
                    <MapIcon className="w-3 h-3" />
                    <span>Interactive Map</span>
                  </button>
                </div>

                <span className="text-[10px] text-geeko-400 font-bold bg-pine-950 border border-geeko-500/40 px-2 py-0.5 rounded">
                  PROPOSED VENUE
                </span>
              </div>

              {/* Media Body: Photo View or Live Map View */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black/40 border-b border-slate-800">
                {activeMediaTab === 'photo' ? (
                  <div className="relative w-full h-full group">
                    <img 
                      src={`${import.meta.env.BASE_URL}college.png`} 
                      alt="Newton School of Technology, Bengaluru Campus" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-70 pointer-events-none" />
                    <div className="absolute bottom-2.5 right-3 bg-obsidian-950/90 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800">
                      Bengaluru Campus
                    </div>
                  </div>
                ) : (
                  <iframe
                    title="Campus Map Preview"
                    src={mapEmbedUrl}
                    className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] brightness-[95%]"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Media Card Footer */}
              <div className="p-4 bg-obsidian-950 flex items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-geeko-400" />
                    <span>Newton School of Technology</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                    S-VYASA Campus, Jigani, Bengaluru, KA
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
                  S-VYASA University (Prashanti Kutiram), Jigani, Bengaluru, Karnataka 560105
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
              title="Newton School of Technology Live Campus Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] brightness-[95%]"
              loading="lazy"
            />

            {/* Floating Location Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-obsidian-950/95 backdrop-blur-md border-2 border-geeko-500/80 p-3.5 shadow-[4px_4px_0px_0px_#173f35] max-w-sm text-xs font-mono hidden sm:block">
              <div className="flex items-center justify-between gap-2 text-geeko-400 font-bold mb-1">
                <span className="flex items-center gap-1.5 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-geeko-400" />
                  Newton School of Tech
                </span>
                <span className="text-[10px] text-geeko-300 bg-pine-950 border border-geeko-500/40 px-1.5 py-0.2">
                  HOST VENUE
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-2">
                S-VYASA Campus, Jigani, Bengaluru, Karnataka 560105
              </p>
              <div className="text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-1.5">
                <span>GPS: 12.7570° N, 77.6265° E</span>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-geeko-400 hover:underline font-bold"
                >
                  Get Directions →
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
