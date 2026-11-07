import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Coffee, ShieldAlert, Award, Zap, Code } from 'lucide-react';
import { soundManager } from '../../../proposal/utils/soundEffects';

export const CreativeTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to First Commit (T=0)

  const timelineSteps = [
    {
      marker: "09:00",
      relTime: "DAY 1 MORNING",
      title: "Check-in & QR Passport Activation",
      desc: "Lanyard collection, QR digital passport activation, and welcome refreshments.",
      badge: "ONBOARDING",
      icon: <Zap className="w-4 h-4 text-geeko-400" />,
      location: "Main Foyer",
    },
    {
      marker: "11:30",
      relTime: "DAY 1 MID-DAY",
      title: "Parallel Starter Lab & Idea Matchmaking",
      desc: "Hands-on Zypper/YaST navigation in Lab A; team matching for up to 83 teams in Lab B.",
      badge: "WORKSHOP",
      icon: <Code className="w-4 h-4 text-emerald-400" />,
      location: "Lab Rooms A & B",
    },
    {
      marker: "14:30",
      relTime: "DAY 1 CLOCK START",
      title: "First Commit Ceremony // 20H Clock Starts",
      desc: "20-Hour Hackathon officially ignites. Repositories stamped with Git commit #1.",
      badge: "MAJOR MILESTONE",
      icon: <Clock className="w-4 h-4 text-geeko-400" />,
      location: "Hackathon Arena",
      highlight: true,
    },
    {
      marker: "18:30",
      relTime: "DAY 1 EVENING",
      title: "Hot Dinner Service & Night Mentorship",
      desc: "Nutritious vegetarian dinner served for 250 builders + 30 working crew. Build continues.",
      badge: "MEAL & REFUEL",
      icon: <Coffee className="w-4 h-4 text-amber-400" />,
      location: "Catering Hall",
    },
    {
      marker: "01:00",
      relTime: "DAY 2 MIDNIGHT",
      title: "Midnight Bug Hunt (Rookie & Expert)",
      desc: "Optional 30-min debugging showdown in isolated sandboxes. Cash rewards & badges.",
      badge: "SIDE QUEST",
      icon: <ShieldAlert className="w-4 h-4 text-rose-400" />,
      location: "Dev Sandbox",
    },
    {
      marker: "06:30",
      relTime: "DAY 2 SUNRISE",
      title: "Sunrise Breakfast & Final Polish Sprint",
      desc: "Hot breakfast served to power the final code cleanup, test suite runs & documentation.",
      badge: "FINAL SPRINT",
      icon: <Coffee className="w-4 h-4 text-amber-400" />,
      location: "Main Arena",
    },
    {
      marker: "10:30",
      relTime: "DAY 2 CLOCK FREEZE",
      title: "Hard Commit Freeze // 20H Concludes",
      desc: "20-Hour build window locks permanently. No late pushes. Demo Arena spaces assigned.",
      badge: "COMMIT FREEZE",
      icon: <Clock className="w-4 h-4 text-geeko-400" />,
      location: "All Lanes",
      highlight: true,
    },
    {
      marker: "11:00",
      relTime: "DAY 2 DEMO",
      title: "Every-Team Demo Arena (6 Judging Lanes)",
      desc: "Up to 83 teams present live to 6 dual-judge panels in 120 minutes. People's Choice voting.",
      badge: "EVALUATION",
      icon: <Award className="w-4 h-4 text-emerald-400" />,
      location: "Expo Floor",
    },
    {
      marker: "13:15",
      relTime: "DAY 2 FINALS",
      title: "Grand Stage Finalist Pitches & Awards",
      desc: "Top 6 finalist teams pitch on stage (7m demo + 3m Q&A). Top 3 champions crowned.",
      badge: "CEREMONY",
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      location: "Auditorium",
      highlight: true,
    },
  ];

  return (
    <section id="timeline" className="py-20 sm:py-28 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 bg-geeko-500 rounded-sm"></span>
              <span>// 03 FLIGHT DECK TIMELINE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              20-Hour Continuous Clock.
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <div>Clock starts: <strong className="text-white">Day 1 at 14:30</strong></div>
            <div>Clock freezes: <strong className="text-geeko-400">Day 2 at 10:30</strong></div>
          </div>
        </div>

        {/* Scrubbable Waypoint Rail */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-[700px] border-b border-geeko-500/20 pb-4 relative">
            {timelineSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    soundManager.playKeyClick();
                    setActiveStep(idx);
                  }}
                  className={`flex-1 text-center group cursor-pointer relative px-2 transition-all ${
                    isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 tracking-wider mb-2 font-bold">
                    {step.marker}
                  </div>
                  <div
                    className={`w-4 h-4 mx-auto rounded-full border-2 transition-all ${
                      isActive
                        ? 'bg-geeko-400 border-white shadow-[0_0_15px_#73ba25] scale-125'
                        : step.highlight
                        ? 'bg-geeko-900 border-geeko-500'
                        : 'bg-black border-slate-700'
                    }`}
                  ></div>
                  <div
                    className={`text-[9px] uppercase tracking-wider mt-2 font-bold truncate max-w-[90px] mx-auto ${
                      isActive ? 'text-geeko-400' : 'text-slate-500'
                    }`}
                  >
                    {step.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Waypoint Detailed Mission Panel */}
        <div className="rounded-2xl border border-geeko-500/30 bg-gradient-to-r from-[#091a13] to-[#040a07] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs px-2.5 py-0.5 rounded bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40">
                    {timelineSteps[activeStep].relTime}
                  </span>
                  <span className="text-xs text-slate-400">
                    📍 {timelineSteps[activeStep].location}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
                  {timelineSteps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                  {timelineSteps[activeStep].desc}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <div className="p-4 rounded-xl bg-black/50 border border-geeko-500/20 text-right w-full sm:w-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                    SCHEDULED TIMESTAMP
                  </div>
                  <div className="font-display font-black text-4xl text-emerald-400 mt-1">
                    {timelineSteps[activeStep].marker} IST
                  </div>
                  <div className="text-[10px] text-geeko-400 mt-1 font-bold">
                    {timelineSteps[activeStep].badge}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Notice footer */}
          <div className="mt-6 pt-4 border-t border-geeko-500/20 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <span>Meals and rest rotations do not pause the 20-hour hackathon engine.</span>
            <span className="text-amber-400 font-bold">Day 2 lunch is not catered.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
