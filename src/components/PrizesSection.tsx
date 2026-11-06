import React from 'react';
import { Keyboard, Mouse, Gift, Shirt, Sparkles, Award, CheckCircle2, ArrowRight, Trophy } from 'lucide-react';

interface PrizesSectionProps {
  onOpenDay1Register: () => void;
  onOpenHackathonRegister: () => void;
}

export const PrizesSection: React.FC<PrizesSectionProps> = ({
  onOpenDay1Register,
  onOpenHackathonRegister,
}) => {
  return (
    <section id="prizes" className="py-20 border-b-2 border-slate-800 bg-obsidian-950 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-2">
              // 03. HACKATHON PRIZES & COMMUNITY SWAG
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Prizes & Participant Swag
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="bg-obsidian-900 border border-geeko-500/50 text-geeko-400 font-bold text-xs uppercase px-3 py-1.5 shadow-[2px_2px_0px_0px_#173f35] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-geeko-400" />
              <span>100% Free Community Event</span>
            </span>
          </div>
        </div>

        {/* Intro philosophy banner */}
        <div className="bg-obsidian-900 border border-slate-800 p-4 sm:p-5 mb-8 text-xs text-slate-300 leading-relaxed font-sans shadow-[3px_3px_0px_0px_#173f35]">
          <div className="flex items-center gap-2 text-white font-mono font-bold uppercase text-xs mb-1">
            <Trophy className="w-4 h-4 text-geeko-400 shrink-0" />
            <span>Merit-Driven Hacker Rewards & Community Appreciation</span>
          </div>
          <p>
            We celebrate true open-source craftsmanship. Rather than excessive commercial giveaways, our hackathon rewards top builders with essential developer hardware under a <strong className="text-geeko-300 font-mono">total prize pool under ₹5,000</strong>. Plus, <strong className="text-white">every registered attendee</strong> receives an official event T-shirt — simply pick your size during registration!
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: Hackathon Winner Prizes (Under ₹5,000 Pool) */}
          <div className="bg-obsidian-900 border-2 border-geeko-500/80 p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#173f35] relative">
            <div className="absolute top-0 right-0 bg-geeko-500 text-black px-3 py-1 text-[11px] font-black uppercase tracking-wider border-b-2 border-l-2 border-black">
              TOP HACKATHON TEAMS
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pine-950 border-2 border-geeko-500 flex items-center justify-center text-geeko-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Day 2 • 10-Hour Hackathon
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    Winner & Runner-Up Prizes
                  </h3>
                </div>
              </div>

              {/* Pool Badge */}
              <div className="inline-block bg-pine-950 border border-geeko-500/60 px-3 py-1 mb-6">
                <span className="text-xs font-bold text-geeko-300 uppercase">
                  Total Prize Pool: <span className="text-white font-black">Under ₹5,000</span>
                </span>
              </div>

              {/* Prize list items */}
              <div className="space-y-4 mb-8">
                
                {/* 1. Mechanical Keyboard */}
                <div className="bg-obsidian-950 border border-slate-800 p-4 flex items-start gap-3.5 hover:border-geeko-500/60 transition-colors">
                  <div className="w-9 h-9 bg-obsidian-900 border border-slate-700 flex items-center justify-center text-geeko-400 shrink-0 mt-0.5">
                    <Keyboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
                      <span>Mechanical Keyboard</span>
                      <span className="text-[10px] text-geeko-400 font-bold bg-pine-950 border border-geeko-500/40 px-1.5 py-0.2">TOP PRIZE</span>
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      Tactile developer keyboard engineered for fast typing, coding sprints, and Linux system terminals.
                    </p>
                  </div>
                </div>

                {/* 2. Precision Wireless Mouse */}
                <div className="bg-obsidian-950 border border-slate-800 p-4 flex items-start gap-3.5 hover:border-geeko-500/60 transition-colors">
                  <div className="w-9 h-9 bg-obsidian-900 border border-slate-700 flex items-center justify-center text-geeko-400 shrink-0 mt-0.5">
                    <Mouse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
                      <span>Precision Wireless Mouse</span>
                      <span className="text-[10px] text-cyan-300 font-bold bg-cyan-950 border border-cyan-800 px-1.5 py-0.2">HARDWARE</span>
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      High-accuracy wireless optical mouse for daily development workflow and productivity.
                    </p>
                  </div>
                </div>

                {/* 3. Small Developer Gifts & Collector Swag */}
                <div className="bg-obsidian-950 border border-slate-800 p-4 flex items-start gap-3.5 hover:border-geeko-500/60 transition-colors">
                  <div className="w-9 h-9 bg-obsidian-900 border border-slate-700 flex items-center justify-center text-geeko-400 shrink-0 mt-0.5">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
                      <span>Small Gifts & openSUSE Goodies</span>
                      <span className="text-[10px] text-amber-300 font-bold bg-amber-950 border border-amber-800 px-1.5 py-0.2">CURATED</span>
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      Official Geeko collector pins, custom desk accessories, cheat sheets, and special contributor merchandise.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Ready to build on openSUSE tracks?
              </span>
              <button
                onClick={onOpenHackathonRegister}
                className="w-full sm:w-auto px-5 py-2.5 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register Hackathon Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Everyone Gets a T-Shirt (100% Free For All) */}
          <div className="bg-obsidian-900 border-2 border-slate-700 p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#173f35] relative">
            <div className="absolute top-0 right-0 bg-pine-800 text-geeko-300 px-3 py-1 text-[11px] font-black uppercase tracking-wider border-b-2 border-l-2 border-slate-700">
              FREE FOR ALL ATTENDEES
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pine-950 border-2 border-geeko-500/80 flex items-center justify-center text-geeko-400">
                  <Shirt className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-geeko-400 font-bold uppercase tracking-wider block">
                    Universal Swag Kit
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    Everyone Gets A T-Shirt
                  </h3>
                </div>
              </div>

              {/* Highlight pill */}
              <div className="inline-block bg-pine-950 border border-geeko-500/60 px-3 py-1 mb-6">
                <span className="text-xs font-bold text-geeko-300 uppercase">
                  Included Free with <span className="text-white font-black">Day 1 Pass & Day 2 Hackathon</span>
                </span>
              </div>

              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                No lucky draws or restrictions — <strong className="text-white">every confirmed attendee and participant receives an official limited-edition openSUSE India – Bengaluru Connect 2027 T-Shirt</strong> at morning badge check-in.
              </p>

              {/* T-Shirt Size Selection Callout Box */}
              <div className="bg-obsidian-950 border-2 border-geeko-500/60 p-5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-geeko-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Shirt className="w-4 h-4" />
                    <span>Select Your Size During Registration</span>
                  </span>
                  <span className="text-[10px] text-slate-400 bg-obsidian-900 px-2 py-0.5 border border-slate-800 font-bold">
                    UNISEX SIZES
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans mb-3.5">
                  When you claim your pass, just indicate your size so we can have your fresh swag kit reserved and ready for you:
                </p>

                {/* Size Preview Chips */}
                <div className="grid grid-cols-5 gap-2 text-center">
                  {(['S', 'M', 'L', 'XL', 'XXL'] as const).map((size) => (
                    <div
                      key={size}
                      className="py-2.5 bg-obsidian-900 border border-slate-700 text-white font-black text-xs hover:border-geeko-500 hover:text-geeko-400 transition-colors shadow-[1px_1px_0px_0px_#173f35]"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Check-in extras */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-geeko-400 shrink-0" />
                  <span>Official conference badge, lanyard, and Geeko sticker packs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-geeko-400 shrink-0" />
                  <span>Digital Certificate of Participation from openSUSE India</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
              <span className="text-[11px] text-slate-400">
                Lock your free entry & T-shirt size:
              </span>
              <button
                onClick={onOpenDay1Register}
                className="w-full sm:w-auto px-5 py-2.5 bg-pine-950 hover:bg-pine-900 text-geeko-300 hover:text-white font-bold text-xs uppercase tracking-wider border-2 border-geeko-500 shadow-[3px_3px_0px_0px_#173f35] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Claim Pass & Pick T-Shirt Size</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3-Part Micro Grid: What else is in the attendee bag */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-obsidian-900 border border-slate-800 p-4 text-left shadow-[2px_2px_0px_0px_#173f35]">
            <div className="text-geeko-400 text-xs font-bold uppercase mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Official T-Shirt</span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              High-quality cotton apparel featuring the 2027 Bengaluru Connect Geeko branding. Given to all attendees.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-slate-800 p-4 text-left shadow-[2px_2px_0px_0px_#173f35]">
            <div className="text-geeko-400 text-xs font-bold uppercase mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Geeko Sticker Packs</span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              Vinyl stickers of openSUSE Leap, Tumbleweed, Zypper, YaST, and openQA for your laptop.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-slate-800 p-4 text-left shadow-[2px_2px_0px_0px_#173f35]">
            <div className="text-geeko-400 text-xs font-bold uppercase mb-1 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>Developer Prize Pool</span>
            </div>
            <p className="text-xs text-slate-300 font-sans">
              Mechanical keyboard, wireless mouse, and developer accessories under ₹5,000 total pool for top hacks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
