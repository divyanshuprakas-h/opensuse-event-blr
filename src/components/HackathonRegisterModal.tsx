import React, { useState } from 'react';
import { X, Code2, CheckCircle2, Sparkles, Terminal, Copy, Check, Users, ShieldAlert, Shirt, Mail } from 'lucide-react';
import { HACKATHON_TRACKS, EVENT_CONFIG } from '../data/eventData';
import { sendInstantConfirmationEmail, generateEmailContent, SENDER_EMAIL, isAutomatedEmailConfigured, getGmailWebComposeUrl } from '../services/emailService';

interface HackathonRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HackathonRegistration {
  id: string;
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  teamSize: number;
  trackId: string;
  leaderTshirtSize: string;
  members: string[];
  github: string;
  projectIdea: string;
  registeredAt: string;
}

export const HackathonRegisterModal: React.FC<HackathonRegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    teamSize: 2,
    trackId: HACKATHON_TRACKS[0].id,
    leaderTshirtSize: 'M',
    memberNames: '',
    github: '',
    projectIdea: '',
  });

  const [submittedHackPass, setSubmittedHackPass] = useState<HackathonRegistration | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.teamName || !formData.leaderName || !formData.leaderEmail) return;

    setIsSubmitting(true);
    const passRecord: HackathonRegistration = {
      id: `HACK-BLR-${Math.floor(1000 + Math.random() * 9000)}`,
      teamName: formData.teamName,
      leaderName: formData.leaderName,
      leaderEmail: formData.leaderEmail,
      teamSize: Number(formData.teamSize),
      trackId: formData.trackId,
      leaderTshirtSize: formData.leaderTshirtSize,
      members: formData.memberNames.split(',').map((s) => s.trim()).filter(Boolean),
      github: formData.github,
      projectIdea: formData.projectIdea,
      registeredAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('opensuse_blr_hackathon_registrations') || '[]');
      existing.push(passRecord);
      localStorage.setItem('opensuse_blr_hackathon_registrations', JSON.stringify(existing));
    } catch {
      // Fallback
    }

    // Trigger immediate background email confirmation from divyanshuprakash914@gmail.com
    await sendInstantConfirmationEmail({
      recipientEmail: passRecord.leaderEmail,
      recipientName: passRecord.leaderName,
      passId: passRecord.id,
      tshirtSize: passRecord.leaderTshirtSize,
      eventTrack: passRecord.trackId,
      eventType: 'Day 2 Hackathon Team Pass',
      teamName: passRecord.teamName,
    });

    setIsSubmitting(false);
    setSubmittedHackPass(passRecord);
  };

  const copyId = () => {
    if (!submittedHackPass) return;
    navigator.clipboard.writeText(submittedHackPass.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-obsidian-950 border-2 border-geeko-500 shadow-[8px_8px_0px_0px_#173f35] text-slate-100 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-geeko-500 text-black px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>DAY 2 // 10-HOUR HACKATHON REGISTRATION</span>
          </div>
          <button
            onClick={onClose}
            className="text-black hover:bg-black hover:text-white p-1 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!submittedHackPass ? (
            <div className="space-y-5">
              
              <div className="bg-pine-900/40 border border-geeko-500/30 p-3.5 text-xs font-mono">
                <div className="text-geeko-400 font-bold mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SEPARATE DAY 2 HACKATHON ENTRY</span>
                </div>
                <p className="text-slate-300">
                  Register your team (1 to 4 members) or enter solo for the 10-hour open-source sprint. Day 2 registration is independent from Day 1 talks & workshops.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Team Name */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Team Name (or Solo Handle) <span className="text-geeko-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    placeholder="e.g. Geeko Kernels / ByteCraft"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                {/* Team Lead Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Team Leader Name <span className="text-geeko-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.leaderName}
                      onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                      placeholder="e.g. Divyanshu"
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Leader Email <span className="text-geeko-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.leaderEmail}
                      onChange={(e) => setFormData({ ...formData, leaderEmail: e.target.value })}
                      placeholder="leader@domain.com"
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* Team Size & Track */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: Number(e.target.value) })}
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    >
                      <option value={1}>1 (Solo Hacker)</option>
                      <option value={2}>2 Members</option>
                      <option value={3}>3 Members</option>
                      <option value={4}>4 Members (Max)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Preferred Track
                    </label>
                    <select
                      value={formData.trackId}
                      onChange={(e) => setFormData({ ...formData, trackId: e.target.value })}
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    >
                      {HACKATHON_TRACKS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.code}: {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* T-Shirt Size for Leader & Team */}
                <div className="bg-pine-950/40 border border-geeko-500/50 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-geeko-300 flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5 text-geeko-400" />
                      <span>Leader T-Shirt Size (Free for all members)</span>
                      <span className="text-geeko-400">*</span>
                    </label>
                    <span className="text-[10px] text-geeko-400 font-bold bg-obsidian-900 border border-slate-700 px-2 py-0.5">
                      FREE T-SHIRTS
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans">
                    All hackathon participants receive free official openSUSE T-shirts. Select leader size below (teammate sizes recorded at check-in):
                  </p>
                  <div className="grid grid-cols-5 gap-2 pt-1">
                    {(['S', 'M', 'L', 'XL', 'XXL'] as const).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, leaderTshirtSize: size })}
                        className={`py-1.5 text-center font-mono font-black text-xs uppercase border-2 transition-all cursor-pointer ${
                          formData.leaderTshirtSize === size
                            ? 'bg-geeko-500 text-black border-black shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-obsidian-900 text-slate-300 border-slate-700 hover:border-geeko-400 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Other Member Names */}
                {formData.teamSize > 1 && (
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Other Teammates' Names & Emails <span className="text-slate-500 lowercase">(comma separated)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.memberNames}
                      onChange={(e) => setFormData({ ...formData, memberNames: e.target.value })}
                      placeholder="e.g. Rahul Sharma (rahul@...), Ananya (ananya@...)"
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>
                )}

                {/* GitHub & Project Idea */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                    GitHub Handle / Repo Link <span className="text-slate-500 lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Rough Project Idea / Problem Statement <span className="text-slate-500 lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.projectIdea}
                    onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
                    placeholder="What open-source tool, CLI utility or openSUSE automation do you plan to build?"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                {/* Immediate Email Notice */}
                <div className="bg-obsidian-900 border border-slate-800 p-2.5 text-xs text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-geeko-400 shrink-0" />
                  <span>
                    Team table pass & T-shirt confirmation can be emailed directly to your inbox with sender <strong className="text-geeko-300 font-bold">{SENDER_EMAIL}</strong>
                  </span>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-geeko-500 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? <span>Reserving Hackathon Table...</span> : <span>Claim Day 2 Hackathon Pass</span>}
                  </button>
                </div>

              </form>

            </div>
          ) : (
            /* Confirmation Pass View */
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 mx-auto bg-geeko-500 text-black border-2 border-black flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Hackathon Registration Confirmed!
                </h3>
                <p className="text-xs font-mono text-geeko-400 mt-1">
                  Team table reservation locked for Day 2 (10-Hour Sprint).
                </p>
              </div>

              {/* Email Confirmation Status Banner */}
              <div className="bg-pine-950/80 border-2 border-geeko-500/80 p-3.5 text-left font-mono text-xs shadow-[3px_3px_0px_0px_#173f35] flex items-start gap-3">
                <div className="w-8 h-8 bg-obsidian-950 border border-geeko-500 flex items-center justify-center text-geeko-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-geeko-400" />
                      <span>{isAutomatedEmailConfigured() ? 'Hackathon Pass Emailed' : 'Hackathon Table Locked & Ready'}</span>
                    </span>
                    <span className="text-[10px] bg-geeko-500 text-black font-black px-1.5 py-0.2 uppercase">
                      {isAutomatedEmailConfigured() ? 'AUTO-SENT' : 'READY TO EMAIL'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Team Pass ID <strong className="text-geeko-300 font-mono">[{submittedHackPass.id}]</strong> and table reservation are locked for <strong className="text-white">{submittedHackPass.leaderEmail}</strong>.
                  </p>
                  <p className="text-[11px] text-geeko-300 font-sans">
                    {isAutomatedEmailConfigured()
                      ? `Automated copy dispatched from ${SENDER_EMAIL}. Check inbox and spam folder.`
                      : `Click "Send / Open Pass in Gmail Web" below to send a copy to your inbox.`}
                  </p>
                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800 flex flex-wrap items-center justify-between gap-1">
                    <span>Organizer: <strong className="text-geeko-400">{SENDER_EMAIL}</strong></span>
                    <span>Day 2 Hackathon</span>
                  </div>
                </div>
              </div>

              <div className="bg-obsidian-900 border-2 border-geeko-500 p-4 font-mono text-left shadow-[4px_4px_0px_0px_#173f35] text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">HACK PASS ID:</span>
                  <span className="text-geeko-400 font-bold">{submittedHackPass.id}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">TEAM:</span>
                  <span className="text-white font-bold">{submittedHackPass.teamName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">TEAM SIZE:</span>
                  <span className="text-slate-200">{submittedHackPass.teamSize} Member(s)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">LEADER T-SHIRT:</span>
                  <span className="text-geeko-300 font-bold">Size {submittedHackPass.leaderTshirtSize} (All members get shirts)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">VENUE:</span>
                  <span className="text-slate-300">Newton School of Technology, BLR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">STATUS:</span>
                  <span className="text-geeko-400 font-bold">PRE-REGISTERED // SEPARATE DAY 2</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={copyId}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-geeko-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Pass Copied' : 'Copy Pass ID'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Close Desk
                </button>

                {/* Primary: Send in Gmail Web */}
                <a
                  href={getGmailWebComposeUrl(
                    submittedHackPass.leaderEmail,
                    generateEmailContent({
                      recipientEmail: submittedHackPass.leaderEmail,
                      recipientName: submittedHackPass.leaderName,
                      passId: submittedHackPass.id,
                      tshirtSize: submittedHackPass.leaderTshirtSize,
                      eventTrack: submittedHackPass.trackId,
                      eventType: 'Day 2 Hackathon Team Pass',
                      teamName: submittedHackPass.teamName
                    }).subject,
                    generateEmailContent({
                      recipientEmail: submittedHackPass.leaderEmail,
                      recipientName: submittedHackPass.leaderName,
                      passId: submittedHackPass.id,
                      tshirtSize: submittedHackPass.leaderTshirtSize,
                      eventTrack: submittedHackPass.trackId,
                      eventType: 'Day 2 Hackathon Team Pass',
                      teamName: submittedHackPass.teamName
                    }).body,
                    SENDER_EMAIL
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-geeko-500 hover:bg-geeko-400 text-black border-2 border-black font-black text-xs font-mono flex items-center justify-center gap-2 cursor-pointer col-span-1 sm:col-span-2 shadow-[3px_3px_0px_0px_#ffffff] transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>✉ Send / Open Pass in Gmail Web</span>
                </a>

                {/* Secondary: Default System Mail Client */}
                <a
                  href={`mailto:${submittedHackPass.leaderEmail}?cc=${SENDER_EMAIL}&subject=${encodeURIComponent(`openSUSE Bengaluru Connect 2027 Hackathon Pass [${submittedHackPass.id}]`)}&body=${encodeURIComponent(generateEmailContent({
                    recipientEmail: submittedHackPass.leaderEmail,
                    recipientName: submittedHackPass.leaderName,
                    passId: submittedHackPass.id,
                    tshirtSize: submittedHackPass.leaderTshirtSize,
                    eventTrack: submittedHackPass.trackId,
                    eventType: 'Day 2 Hackathon Team Pass',
                    teamName: submittedHackPass.teamName
                  }).body)}`}
                  className="py-1.5 px-3 bg-obsidian-900 border border-slate-800 hover:border-slate-600 text-[11px] font-mono text-slate-400 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer col-span-1 sm:col-span-2"
                >
                  <span>Open in Default System Mail App (Apple Mail / Outlook)</span>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
