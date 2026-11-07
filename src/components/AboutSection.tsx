import React from 'react';
import { Terminal, Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      step: "01",
      icon: Terminal,
      title: "Master openSUSE Tools",
      desc: "Gain hands-on proficiency with Leap, Tumbleweed, Zypper SAT package management, and YaST system control.",
      tag: "SYSTEMS_CORE"
    },
    {
      step: "02",
      icon: Cpu,
      title: "Universal Packaging (OBS)",
      desc: "Learn to package software for multiple Linux distributions and automate OS testing with openQA computer vision.",
      tag: "PACKAGING_&_QA"
    },
    {
      step: "03",
      icon: Layers,
      title: "20-Hour Geeko Buildathon",
      desc: "Collaborate in teams of 3 to 4 with experienced mentors to engineer real open-source utilities, CLI tools, and upstream patches.",
      tag: "BUILDATHON_SPRINT"
    }
  ];

  return (
    <section id="about" className="py-16 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 01. CORE MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              What to Expect at Bengaluru Connect
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 text-geeko-400 font-bold">
              FREE FOR STUDENTS & DEVELOPERS
            </span>
          </div>
        </div>

        {/* 3 Crisp Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-obsidian-900 border-2 border-slate-800 p-6 flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[4px_4px_0px_0px_#173f35]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-geeko-400 font-mono">
                      {pillar.step}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-obsidian-950 px-2 py-0.5 border border-slate-800">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-geeko-400">
                  <span>Included in Pass</span>
                  <span>// VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
