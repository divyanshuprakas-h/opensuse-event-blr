import React from 'react';
import { Github, Linkedin, Mail, Heart, Sparkles, UserCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/eventData';

interface TeamSectionProps {
  onOpenPreRegister: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenPreRegister }) => {
  return (
    <section id="team" className="py-20 border-b-2 border-slate-800 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 07. ORGANIZING COMMITTEE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Driven by the openSUSE India Community
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 text-slate-300">
              COMMUNITY LEADERSHIP & HOST PARTNERS
            </span>
          </div>
        </div>

        {/* 3 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-obsidian-900 border-2 border-slate-800 p-6 flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[6px_6px_0px_0px_#173f35]"
            >
              <div>
                {/* Avatar Placeholder with Brutalist Geeko styling */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-pine-900 border-2 border-geeko-500 flex items-center justify-center font-mono font-black text-xl text-geeko-400 shadow-[2px_2px_0px_0px_#73ba25]">
                    {member.name.charAt(0)}
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 bg-obsidian-950 px-2 py-1 border border-slate-800">
                    ORGANIZER
                  </span>
                </div>

                <div className="text-xs font-mono text-geeko-400 font-bold mb-1">
                  {member.role}
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                  {member.name}
                </h3>

                <div className="text-xs font-mono text-slate-400 mb-4">
                  {member.org}
                </div>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-geeko-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                )}
                <span className="font-mono text-[10px] text-slate-600">openSUSE India</span>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer & Call for Community Help */}
        <div className="bg-pine-900/30 border-2 border-slate-800 p-6 sm:p-8 font-mono flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-black text-white uppercase">
              Want to Volunteer or Mentor at Bengaluru Connect 2027?
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              We are actively looking for workshop teaching assistants, hackathon mentors, and campus ambassadors.
            </p>
          </div>
          <button
            onClick={onOpenPreRegister}
            className="px-5 py-2.5 bg-geeko-500 hover:bg-geeko-400 text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black whitespace-nowrap cursor-pointer shadow-[3px_3px_0px_0px_#ffffff]"
          >
            Join as Volunteer / Mentor
          </button>
        </div>

      </div>
    </section>
  );
};
