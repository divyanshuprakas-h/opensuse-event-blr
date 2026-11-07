import React from 'react';
import { Terminal, Cpu, Layers, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      step: "01",
      icon: Terminal,
      title: "Master openSUSE Systems",
      desc: "Gain hands-on proficiency with Tumbleweed rolling release, Leap enterprise stability, Zypper SAT package management, and YaST system control.",
      tag: "CORE_ARCHITECTURE"
    },
    {
      step: "02",
      icon: Cpu,
      title: "Universal Packaging (OBS & QA)",
      desc: "Learn automated RPM spec building across multiple Linux distros using Open Build Service (OBS) and automated test suites with openQA.",
      tag: "PACKAGING_&_QA"
    },
    {
      step: "03",
      icon: Layers,
      title: "20-Hour Geeko Buildathon",
      desc: "Collaborate in teams of 3 to 4 with experienced mentors. Six innovation tracks, every team demos live in the Demo Arena, top 6 pitch on stage.",
      tag: "20H_BUILDATHON"
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 01. PROGRAM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Three-Phase Syllabus
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-[#0b1e15] border border-geeko-500/30 px-3 py-1.5 rounded-full text-geeko-300 font-bold">
              100% FREE COMMUNITY GATHERING
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
                className="bg-[#09130e] border border-geeko-500/20 hover:border-geeko-400/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(115,186,37,0.15)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold text-geeko-400 bg-[#0c2419] border border-geeko-500/30 px-2 py-0.5 rounded">
                      {pillar.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">
                      PHASE // {pillar.step}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#0d261b] border border-geeko-500/40 flex items-center justify-center text-geeko-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-geeko-500/10 flex items-center justify-between text-xs text-geeko-400 font-bold">
                  <span>Explore Phase →</span>
                  <Sparkles className="w-3.5 h-3.5 text-geeko-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
