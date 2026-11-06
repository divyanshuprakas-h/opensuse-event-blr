import React from 'react';
import { Compass, Flag, Sparkles, ArrowRight, GitPullRequest, Globe } from 'lucide-react';

export const RoadToConfSection: React.FC = () => {
  const roadmapSteps = [
    {
      step: "01",
      title: "Bengaluru Connect 2027",
      timing: "January 2027",
      desc: "Two-day grassroots conference, 400 attendees, OBS/YaST workshops, and 10H hackathon in Bengaluru."
    },
    {
      step: "02",
      title: "Post-Event Contributor Mentorship",
      timing: "Q1–Q2 2027",
      desc: "Weekly openSUSE India packaging office hours, helping participants submit their first patches to upstream OBS."
    },
    {
      step: "03",
      title: "Regional Community Expansion",
      timing: "Q2–Q3 2027",
      desc: "Spinning up college openSUSE clubs, local user groups (LUGs), and collaborative openQA testing pipelines."
    },
    {
      step: "04",
      title: "openSUSE Conf India",
      timing: "National Milestone",
      desc: "Uniting Linux builders, enterprise openSUSE users, and international contributors for a flagship national conference."
    }
  ];

  return (
    <section className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 06. STRATEGIC COMMUNITY VISION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Building Momentum Toward openSUSE Conf India
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-slate-300">
              COMMUNITY IMPACT & ROADMAP
            </span>
          </div>
        </div>

        {/* Vision Narrative Card */}
        <div className="bg-obsidian-900 border-2 border-slate-800 p-6 sm:p-8 font-mono mb-12 shadow-[6px_6px_0px_0px_#173f35]">
          <p className="text-base sm:text-lg text-white font-sans leading-relaxed mb-4">
            An essential objective of <strong className="text-geeko-400">Bengaluru Connect 2027</strong> is to generate lasting momentum, real developer skills, and authentic community roots leading up to a full-scale <strong className="text-white">openSUSE Conf India</strong>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            By engaging new developers and contributors through practical learning and community interaction, Bengaluru Connect aims to support a stronger and more active openSUSE community ahead of future national-level gatherings.
          </p>
        </div>

        {/* 4-Step Roadmap Horizontal / Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-obsidian-900 border-2 border-slate-800 p-6 font-mono relative flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[4px_4px_0px_0px_#173f35]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-geeko-500 font-mono">
                    {step.step}
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 border border-slate-700">
                    {step.timing}
                  </span>
                </div>

                <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] text-geeko-400 flex items-center justify-between">
                <span>PHASE {step.step}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
