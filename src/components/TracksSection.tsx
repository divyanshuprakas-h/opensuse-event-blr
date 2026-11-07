import React from 'react';
import { Terminal, ShieldAlert, Cpu, Monitor, GitPullRequest, Lightbulb, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HACKATHON_TRACKS, TrackItem } from '../data/eventData';

interface TracksSectionProps {
  onOpenHackathonRegisterWithTrack?: (trackTitle: string) => void;
  onOpenHackathonRegister: () => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({
  onOpenHackathonRegisterWithTrack,
  onOpenHackathonRegister,
}) => {
  const trackIcons: Record<string, React.ElementType> = {
    'track-1': Terminal,
    'track-2': ShieldAlert,
    'track-3': Cpu,
    'track-4': Monitor,
    'track-5': GitPullRequest,
    'track-6': Lightbulb,
  };

  const trackBadges: Record<string, string> = {
    'track-1': 'BEGINNER TO INTERMEDIATE',
    'track-2': 'SECURITY & AUDITING',
    'track-3': 'DEVOPS & OBS',
    'track-4': 'ALL LEVELS WELCOME',
    'track-5': 'REAL UPSTREAM PRS',
    'track-6': 'OPEN INNOVATION',
  };

  return (
    <section id="tracks" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 02. CHALLENGE ARENAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Six Geeko Buildathon <span className="text-geeko-400">Tracks</span>
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-[#0b1e15] border border-geeko-500/30 px-3 py-1.5 rounded-full text-geeko-300 font-bold">
              20 HOURS // UP TO 83 TEAMS // ₹50,000 PRIZE POOL
            </span>
          </div>
        </div>

        {/* 6 Tracks Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_TRACKS.map((track) => {
            const Icon = trackIcons[track.id] || Terminal;
            const badge = trackBadges[track.id] || 'ALL LEVELS';

            return (
              <div
                key={track.id}
                className="bg-[#09130e] border border-geeko-500/20 hover:border-geeko-400/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(115,186,37,0.15)] group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold text-geeko-400 bg-[#0c2419] border border-geeko-500/30 px-2 py-0.5 rounded">
                      {badge}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">
                      {track.code}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-[#0d261b] border border-geeko-500/40 flex items-center justify-center text-geeko-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-geeko-300 transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                    {track.description}
                  </p>
                </div>

                {/* Tech Pills & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-geeko-500/10 mb-4">
                    {track.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#060c09] border border-geeko-500/20 text-[10px] text-slate-300 font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (onOpenHackathonRegisterWithTrack) {
                        onOpenHackathonRegisterWithTrack(track.title);
                      } else {
                        onOpenHackathonRegister();
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#0b1f16] hover:bg-geeko-500 hover:text-black border border-geeko-500/40 hover:border-geeko-400 text-geeko-300 text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group-hover:shadow-[0_0_15px_rgba(115,186,37,0.25)]"
                  >
                    <span>Apply for Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
