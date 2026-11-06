import React from 'react';
import { Calendar, BellRing, Sparkles, MapPin, CheckCircle, Clock } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

interface DateStatusBannerProps {
  onOpenPreRegister: () => void;
}

export const DateStatusBanner: React.FC<DateStatusBannerProps> = ({ onOpenPreRegister }) => {
  return (
    <div className="bg-obsidian-900 border-2 border-geeko-500/60 p-6 sm:p-8 font-mono shadow-[6px_6px_0px_0px_#173f35] relative overflow-hidden">
      
      {/* Decorative corner tag */}
      <div className="absolute top-0 right-0 bg-geeko-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest border-b border-l border-black">
        DATE STATUS: PROPOSED // ANNOUNCING SOON
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Information */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-geeko-400 font-bold text-xs">
            <Clock className="w-4 h-4 text-geeko-400" />
            <span>EVENT TIMELINE // JANUARY 2027</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
            Official Dates Announcement In Progress
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {EVENT_CONFIG.datesAnnouncementText}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-geeko-400" />
              Venue Confirmed: Newton School of Technology
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-geeko-400" />
              Duration: 2 Full Days
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-geeko-400" />
              Target Window: January 2027
            </span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="shrink-0 w-full md:w-auto">
          <button
            onClick={onOpenPreRegister}
            className="w-full md:w-auto px-6 py-3.5 bg-geeko-500 hover:bg-geeko-400 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BellRing className="w-4 h-4" />
            <span>Notify Me When Dates Lock</span>
          </button>
        </div>

      </div>
    </div>
  );
};
