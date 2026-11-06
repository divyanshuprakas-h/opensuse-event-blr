import React from 'react';
import { Terminal, Shield, Cpu, Users, GitBranch, Sparkles, BookOpen, Layers } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: "Master openSUSE Technologies",
      desc: "Gain hands-on proficiency with openSUSE Leap, Tumbleweed, the Zypper package manager, and the world-renowned YaST setup architecture.",
      tag: "CORE_SKILLS"
    },
    {
      icon: Cpu,
      title: "OBS & openQA Testing",
      desc: "Explore Open Build Service (OBS) for universal multi-distro binary packaging and openQA for automated operating system testing.",
      tag: "DEVOPS_&_QA"
    },
    {
      icon: Layers,
      title: "10-Hour Open Hackathon",
      desc: "Form teams, collaborate with mentors, and build working open-source software prototypes across 5 targeted tracks.",
      tag: "HACKATHON"
    },
    {
      icon: Users,
      title: "Building Community Roots",
      desc: "Foster direct relationships between Indian students, developers, and global openSUSE maintainers heading toward openSUSE Conf India.",
      tag: "COMMUNITY"
    }
  ];

  return (
    <section id="about" className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 01. EVENT OVERVIEW & VISION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Strengthening Open Source in India
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-slate-300">
              TARGET AUDIENCE: 300–400 PARTICIPANTS
            </span>
          </div>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 font-sans text-base leading-relaxed">
            <p className="text-lg text-white font-medium">
              <strong className="text-geeko-400">openSUSE India – Bengaluru Connect 2027</strong> is a proposed two-day community-driven open-source technology event aimed at bringing together students, developers, Linux enthusiasts, industry professionals, and open-source contributors from across Bengaluru and neighboring regions.
            </p>
            <p>
              The initiative focuses on increasing awareness, adoption, and practical understanding of openSUSE technologies while strengthening the open-source community in India.
            </p>
            <p>
              Through technical talks, interactive workshops, and a 10-hour hackathon, participants will gain exposure to the openSUSE ecosystem, explore its development tools, and discover opportunities to contribute to real-world open-source projects.
            </p>
            <p className="bg-pine-900/40 border-l-4 border-geeko-500 p-4 font-mono text-xs text-slate-200">
              <strong className="text-geeko-400 block mb-1">INCLUSIVE FOR ALL SKILL LEVELS:</strong>
              The event is designed to welcome both beginners exploring Linux for the first time and experienced developers interested in contributing to open-source technologies.
            </p>
          </div>

          {/* Quick Info Box (Brutalist Card) */}
          <div className="lg:col-span-5 bg-obsidian-900 border-2 border-slate-700 p-6 font-mono shadow-[6px_6px_0px_0px_#173f35]">
            <div className="text-xs text-geeko-400 font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>EVENT SPECIFICATIONS</span>
              <span>CONF // 2027</span>
            </div>

            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500 uppercase">Event Type</span>
                <span className="text-white font-bold text-right">Meetup, Workshops & Hackathon</span>
              </li>
              <li className="flex items-start justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500 uppercase">Target Month</span>
                <span className="text-geeko-400 font-bold">January 2027 (TBC)</span>
              </li>
              <li className="flex items-start justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500 uppercase">Duration</span>
                <span className="text-white font-bold">2 Full Days</span>
              </li>
              <li className="flex items-start justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500 uppercase">Host Venue</span>
                <span className="text-white font-bold text-right">Newton School of Technology</span>
              </li>
              <li className="flex items-start justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500 uppercase">Location</span>
                <span className="text-white font-bold">Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-start justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500 uppercase">Organizer</span>
                <span className="text-geeko-400 font-bold">openSUSE India Community</span>
              </li>
              <li className="flex items-start justify-between pt-1">
                <span className="text-slate-500 uppercase">Budget</span>
                <span className="text-white font-bold font-mono">₹90,000 INR (Free to Attend)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-obsidian-900 border-2 border-slate-800 p-6 flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[4px_4px_0px_0px_#173f35]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-pine-900 border border-geeko-500/50 flex items-center justify-center text-geeko-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-geeko-400">
                  <span>Phase Included</span>
                  <span>// ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
