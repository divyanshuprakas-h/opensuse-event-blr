import React from 'react';
import { Github, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/eventData';

interface TeamSectionProps {
  onOpenPreRegister: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenPreRegister }) => {
  return (
    <section id="team" className="py-16 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 05. ORGANIZING COMMITTEE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              openSUSE India Community Leads
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 text-slate-300">
              COMMUNITY-DRIVEN INITIATIVE
            </span>
          </div>
        </div>

        {/* Small Square Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 max-w-5xl">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-obsidian-900 border-2 border-slate-800 p-5 flex flex-col justify-between hover:border-geeko-500 transition-colors shadow-[3px_3px_0px_0px_#173f35] min-h-[230px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-pine-950 border border-geeko-500/60 flex items-center justify-center font-black text-base text-geeko-400">
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-[10px] text-slate-400 bg-obsidian-950 px-2 py-0.5 border border-slate-800">
                    ORGANIZER
                  </span>
                </div>

                <div className="text-[11px] text-geeko-400 font-bold mb-0.5">
                  {member.role}
                </div>

                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2">
                  {member.name}
                </h3>

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-geeko-400 hover:text-white transition-colors break-all"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0 text-geeko-400" />
                    <span className="font-mono text-[11px]">{member.email}</span>
                  </a>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs mt-3">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-geeko-400 transition-colors text-[11px]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                <span className="text-[10px] text-slate-500">openSUSE India</span>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer banner */}
        <div className="bg-obsidian-900 border border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-300 text-center sm:text-left">
            <strong className="text-white">Want to volunteer or mentor?</strong> We welcome workshop teaching assistants and hackathon mentors.
          </div>
          <button
            onClick={onOpenPreRegister}
            className="px-4 py-1.5 bg-geeko-500 hover:bg-geeko-400 text-black font-bold uppercase text-[11px] whitespace-nowrap cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
          >
            Join as Volunteer
          </button>
        </div>

      </div>
    </section>
  );
};
