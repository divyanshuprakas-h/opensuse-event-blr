import React from 'react';
import { Github, Mail, Sparkles, Users } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/eventData';

interface TeamSectionProps {
  onOpenPreRegister: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenPreRegister }) => {
  return (
    <section id="team" className="py-16 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 06. ORGANIZING COMMITTEE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              openSUSE India Organizing Team
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-obsidian-900 border border-slate-800 px-3 py-1 text-geeko-400 font-bold">
              COMMUNITY-DRIVEN INITIATIVE
            </span>
          </div>
        </div>

        {/* Single Unified Body Container */}
        <div className="bg-obsidian-900 border-2 border-slate-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#173f35]">
          
          {/* Header Bar inside Container */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pine-950 border border-geeko-500/50 flex items-center justify-center text-geeko-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  Organizing Committee Members
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  openSUSE India Community Gathering • Bengaluru Connect 2027
                </p>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-bold text-geeko-400 bg-pine-950 border border-geeko-500/40 px-2.5 py-1">
                3 ORGANIZERS
              </span>
            </div>
          </div>

          {/* 3 Organizers in a clean row inside the body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-800">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-obsidian-950/80 border border-slate-800 p-5 space-y-3 hover:border-geeko-500/70 transition-colors shadow-[2px_2px_0px_0px_#173f35]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 bg-pine-950 border border-geeko-500/60 flex items-center justify-center font-black text-sm text-geeko-400">
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-[10px] text-slate-400 bg-obsidian-900 px-2 py-0.5 border border-slate-800">
                    ORGANIZER
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-black text-white uppercase tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-geeko-400 font-bold uppercase mt-0.5">
                    Organizer
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 text-slate-300 hover:text-geeko-400 transition-colors break-all"
                      title={member.email}
                    >
                      <Mail className="w-3.5 h-3.5 text-geeko-400 shrink-0" />
                      <span className="text-[11px]">{member.email}</span>
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-geeko-400 shrink-0" />
                      <span className="text-[11px]">GitHub Profile</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer Option Integrated inside the same Body */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-center sm:text-left space-y-0.5">
              <div className="text-white font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-geeko-400" />
                <span>Want to volunteer or mentor?</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                We welcome workshop teaching assistants, track leads, and hackathon mentors from the open-source community.
              </p>
            </div>

            <button
              onClick={onOpenPreRegister}
              className="px-4 py-2 bg-geeko-500 hover:bg-geeko-400 text-black font-black uppercase text-xs tracking-wider cursor-pointer border-2 border-black shadow-[2px_2px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap"
            >
              Join as Volunteer
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
