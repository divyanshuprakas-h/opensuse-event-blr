import React from 'react';
import { MapPin, Wifi, Zap, Server, ShieldCheck, ExternalLink } from 'lucide-react';
import { soundManager } from '../../../proposal/utils/soundEffects';

export const CreativeVenue: React.FC = () => {
  const specs = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "LOAD-TESTED POWER",
      desc: "Dedicated power strips at every builder station with industrial cable-guards and overload breakers.",
    },
    {
      icon: <Wifi className="w-5 h-5 text-geeko-400" />,
      title: "350+ WI-FI CONCURRENCY",
      desc: "Dual-band campus Wi-Fi load-tested for laptops and mobile devices, backed by secondary 4G hotspots.",
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: "CACHED MIRRORS",
      desc: "Local openSUSE Tumbleweed and Leap package mirrors deployed on-premise for zero-latency downloads.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: "SECURITY & SAFETY DESK",
      desc: "Continuous 3-shift overnight security, first-aid station, quiet rest zones, and logged badge access.",
    },
  ];

  return (
    <section id="venue" className="py-20 sm:py-28 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 bg-geeko-500 rounded-sm"></span>
              <span>// 05 CAMPUS HEADQUARTERS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              The Coordinates.
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <div>College Collaboration: <strong className="text-emerald-400">Venue &amp; Facilities In-Kind Free</strong></div>
            <div>Bengaluru, Karnataka, India</div>
          </div>
        </div>

        {/* Main Grid: Left Campus Info & Radar Specs; Right Map / Terminal Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Campus Specs */}
          <div className="lg:col-span-7 rounded-2xl border border-geeko-500/30 bg-[#06120c] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase mb-2">
                <MapPin className="w-4 h-4" />
                <span>HOST INSTITUTION // BENGALURU</span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                Newton School of Technology
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Bengaluru 560059. A state-of-the-art tech campus providing air-conditioned auditoriums, high-speed connectivity, and modern hackathon spaces.
              </p>

              {/* 4 Infrastructure Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {specs.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#091a13] border border-geeko-500/15">
                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1.5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decision Gates T-21 and T-7 */}
            <div className="mt-6 pt-4 border-t border-geeko-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Gate 1 (T−21d): Written venue &amp; overnight permit lock</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Gate 2 (T−7d): Headcount &amp; catering freeze</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps / Satellite Coordinates */}
          <div className="lg:col-span-5 rounded-2xl border border-geeko-500/30 bg-[#040907] p-6 flex flex-col justify-between shadow-xl overflow-hidden relative group">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 mb-4 border-b border-geeko-500/20">
                <span className="font-bold text-geeko-400">SATELLITE TELEMETRY</span>
                <span>12°55'16" N, 77°30'03" E</span>
              </div>

              {/* Styled Minimalist Map Frame */}
              <div className="rounded-xl overflow-hidden border border-geeko-500/20 aspect-video relative">
                <iframe
                  title="Newton School of Technology Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.756241775739!2d77.49811467598822!3d12.923382715907406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f24dc909d47%3A0xe78198f7e2714a0f!2sNewton%20School%20of%20Technology%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-[#07130e] border border-geeko-500/20 text-xs">
                <div className="text-white font-bold mb-1">Transit &amp; Commute:</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Located near Kengeri / RR Nagar on Mysore Road inside Sattva Global City. Direct access via Purple Line Metro (Kengeri / Mailasandra station) + BMTC connecting shuttles.
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/9r9h28v6QpM47qZ99"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playKeyClick()}
              className="mt-4 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-geeko-300 hover:text-white border border-geeko-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>OPEN FULL MAP IN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
