import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Ticket, Sparkles, Copy, Check, ArrowRight, Share2, Terminal, Shirt, Mail } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';
import { sendInstantConfirmationEmail, generateEmailContent, SENDER_EMAIL, isAutomatedEmailConfigured, getGmailWebComposeUrl } from '../services/emailService';

interface PreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEmail?: string;
}

interface RegistrationRecord {
  id: string;
  name: string;
  email: string;
  collegeOrCompany: string;
  role: string;
  interest: string;
  tshirtSize: string;
  github: string;
  notifyOnDates: boolean;
  registeredAt: string;
}

export const PreRegistrationModal: React.FC<PreRegistrationModalProps> = ({
  isOpen,
  onClose,
  prefilledEmail = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: prefilledEmail,
    collegeOrCompany: '',
    role: 'Student',
    interest: 'Both Workshops & Hackathon',
    tshirtSize: 'M',
    github: '',
    notifyOnDates: true,
  });

  const [submittedPass, setSubmittedPass] = useState<RegistrationRecord | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledEmail) {
      setFormData((prev) => ({ ...prev, email: prefilledEmail }));
    }
  }, [prefilledEmail]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const passRecord: RegistrationRecord = {
      id: `OSBLR-2027-${randomSuffix}`,
      ...formData,
      registeredAt: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('opensuse_blr_preregistrations') || '[]');
      existing.push(passRecord);
      localStorage.setItem('opensuse_blr_preregistrations', JSON.stringify(existing));
    } catch {
      // Fallback
    }

    // Trigger immediate background email confirmation from divyanshuprakash914@gmail.com
    await sendInstantConfirmationEmail({
      recipientEmail: passRecord.email,
      recipientName: passRecord.name,
      passId: passRecord.id,
      tshirtSize: passRecord.tshirtSize,
      eventTrack: passRecord.interest,
      eventType: 'Day 1 Conference Pass',
    });

    setIsSubmitting(false);
    setSubmittedPass(passRecord);
  };

  const copyTicketId = () => {
    if (!submittedPass) return;
    navigator.clipboard.writeText(submittedPass.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    if (!submittedPass) return;
    const text = encodeURIComponent(
      `I just claimed my Early Priority Pass for openSUSE India – Bengaluru Connect 2027 at Newton School of Technology! 🦎💚 Free talks, YaST/Zypper/OBS workshops & 10H Hackathon. #openSUSE #BengaluruConnect2027 #Linux`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 p-3 sm:p-6 flex items-start sm:items-center justify-center"
    >
      {/* Floating Screen-Level Close Button - ALWAYS visible in viewport */}
      <button
        onClick={onClose}
        className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[60] flex items-center gap-1.5 bg-obsidian-950 text-geeko-400 hover:bg-geeko-500 hover:text-black border-2 border-geeko-500 px-3 py-1.5 font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#173f35] cursor-pointer transition-all hover:translate-x-[-1px] hover:translate-y-[1px]"
        aria-label="Close modal"
      >
        <span>CLOSE</span>
        <X className="w-4 h-4 stroke-[3]" />
      </button>

      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[88vh] flex flex-col min-h-0 bg-obsidian-950 border-2 border-geeko-500 shadow-[8px_8px_0px_0px_#173f35] text-slate-100 overflow-hidden my-auto sm:my-6"
      >
        {/* Top Brutalist Bar - Sticky, Always Visible */}
        <div className="bg-geeko-500 text-black px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between border-b-2 border-black shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black inline-block"></span>
            <span>DAY 1 PASS // PRE-REGISTRATION</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 bg-black text-geeko-400 hover:bg-black/80 px-2.5 py-1 text-xs font-mono font-black uppercase tracking-wider border border-black cursor-pointer shadow-[1px_1px_0px_0px_#ffffff] transition-transform active:scale-95"
            aria-label="Close modal"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Content Body - Scrollable */}
        <div className="flex-1 min-h-0 p-6 overflow-y-auto">
          {!submittedPass ? (
            <div>
              {/* Context Banner */}
              <div className="mb-6 bg-pine-900/40 border border-geeko-500/30 p-3.5 text-xs font-mono">
                <div className="flex items-center gap-2 text-geeko-400 font-bold mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>DATES ANNOUNCEMENT IN PROGRESS</span>
                </div>
                <p className="text-slate-300">
                  Target window: <strong className="text-white">January 2027</strong>. By pre-registering now, you lock early priority entry and will receive an email the moment final dates and workshop registrations go live.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-geeko-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Linus Torvalds"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-2.5 font-mono text-sm text-white outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-geeko-400">*</span>
                    <span className="text-[10px] text-slate-400 normal-case ml-2">(where date announcements will be sent)</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-2.5 font-mono text-sm text-white outline-none transition-colors"
                  />
                </div>

                {/* College / Organization */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    College / University / Company <span className="text-geeko-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.collegeOrCompany}
                    onChange={(e) => setFormData({ ...formData, collegeOrCompany: e.target.value })}
                    placeholder="e.g. Newton School of Technology / Dev Corp"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-2.5 font-mono text-sm text-white outline-none transition-colors"
                  />
                </div>

                {/* Grid: Role & Primary Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Primary Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2.5 font-mono text-xs text-white outline-none"
                    >
                      <option value="Student">Student / Undergrad</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="DevOps / SysAdmin">DevOps / SysAdmin</option>
                      <option value="Open-Source Contributor">Open-Source Contributor</option>
                      <option value="Linux Enthusiast / Beginner">First-Time Linux User</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Main Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2.5 font-mono text-xs text-white outline-none"
                    >
                      <option value="Both Workshops & Hackathon">Workshops + 10H Hackathon</option>
                      <option value="Technical Talks Only">Technical Talks & Keynotes</option>
                      <option value="Hands-on Workshops (YaST/OBS)">Hands-on Workshops</option>
                      <option value="10-Hour Hackathon Only">10-Hour Hackathon Sprint</option>
                      <option value="Volunteer / Mentorship">Volunteering / Mentorship</option>
                    </select>
                  </div>
                </div>

                {/* T-Shirt Size (Free for all attendees) */}
                <div className="bg-pine-950/40 border border-geeko-500/50 p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-geeko-300 flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5 text-geeko-400" />
                      <span>T-Shirt Size (Free for Everyone)</span>
                      <span className="text-geeko-400">*</span>
                    </label>
                    <span className="text-[10px] text-geeko-400 font-bold bg-obsidian-900 border border-slate-700 px-2 py-0.5">
                      100% FREE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans">
                    Every confirmed attendee gets an official openSUSE India T-shirt. Choose your size so we reserve yours:
                  </p>
                  <div className="grid grid-cols-5 gap-2 pt-1">
                    {(['S', 'M', 'L', 'XL', 'XXL'] as const).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, tshirtSize: size })}
                        className={`py-2 text-center font-mono font-black text-xs uppercase border-2 transition-all cursor-pointer ${
                          formData.tshirtSize === size
                            ? 'bg-geeko-500 text-black border-black shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-obsidian-900 text-slate-300 border-slate-700 hover:border-geeko-400 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* GitHub (Optional) */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    GitHub Profile URL / Handle <span className="text-[10px] text-slate-500 lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="github.com/your-handle"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                {/* Notification Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifyOnDates}
                      onChange={(e) => setFormData({ ...formData, notifyOnDates: e.target.checked })}
                      className="mt-0.5 accent-geeko-500 w-4 h-4 rounded-none cursor-pointer"
                    />
                    <span>
                      Notify me via email immediately when exact January 2027 dates and workshop tracks are announced.
                    </span>
                  </label>
                </div>

                {/* Immediate Email Notice */}
                <div className="bg-obsidian-900 border border-slate-800 p-2.5 text-xs text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-geeko-400 shrink-0" />
                  <span>
                    Your pass and reserved T-shirt confirmation will be emailed automatically to your inbox from <strong className="text-geeko-300 font-bold">{SENDER_EMAIL}</strong>
                  </span>
                </div>

                {/* Submit button & Cancel */}
                <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 bg-geeko-500 text-black font-mono font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Confirming & Sending Pass to Email...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 fill-black" />
                        <span>Claim Priority Pre-Registration Pass</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="sm:w-28 py-3 bg-obsidian-900 border-2 border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs font-bold uppercase transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Cancel</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Digital Brutalist Pass View */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-geeko-500 text-black font-bold mb-1 border-2 border-black">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Pre-Registration Confirmed!
                </h3>
                <p className="text-xs font-mono text-geeko-400">
                  Priority pass generated. You are locked in for date announcements and workshop seat reservations.
                </p>
              </div>

              {/* Email Confirmation Dispatched Banner */}
              <div className="bg-pine-950/80 border-2 border-geeko-500/80 p-3.5 text-left font-mono text-xs shadow-[3px_3px_0px_0px_#173f35] flex items-start gap-3">
                <div className="w-8 h-8 bg-obsidian-950 border border-geeko-500 flex items-center justify-center text-geeko-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-geeko-400" />
                      <span>Pass Confirmation Emailed</span>
                    </span>
                    <span className="text-[10px] bg-geeko-500 text-black font-black px-1.5 py-0.2 uppercase">
                      SENT
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    A confirmation email with your digital pass ID (<strong className="text-geeko-300 font-mono">{submittedPass.id}</strong>) and reserved <strong className="text-white">T-Shirt Size {submittedPass.tshirtSize}</strong> has been automatically dispatched to <strong className="text-white">{submittedPass.email}</strong>.
                  </p>
                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800 flex flex-wrap items-center justify-between gap-1">
                    <span>From: <strong className="text-geeko-400">{SENDER_EMAIL}</strong></span>
                    <span>Check inbox & spam folder</span>
                  </div>
                </div>
              </div>

              {/* Brutalist Digital Ticket / Pass Card */}
              <div className="relative bg-obsidian-900 border-2 border-geeko-500 p-5 font-mono shadow-[6px_6px_0px_0px_#73ba25] overflow-hidden">
                <div className="absolute top-0 right-0 bg-geeko-500 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-b-2 border-l-2 border-black">
                  EARLY PASS
                </div>

                <div className="flex items-center gap-3 border-b-2 border-slate-800 pb-3 mb-4">
                  <div className="w-10 h-10 bg-pine-900 border border-geeko-500 p-1 flex items-center justify-center">
                    <img src={`${import.meta.env.BASE_URL}geeko.svg`} alt="Geeko" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-[10px] text-geeko-400 font-bold uppercase tracking-wider">
                      openSUSE India // BLR 2027
                    </div>
                    <div className="text-sm font-black text-white">
                      Bengaluru Connect
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">ATTENDEE</span>
                    <span className="font-bold text-white text-sm truncate block">{submittedPass.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">PASS ID</span>
                    <span className="font-bold text-geeko-400 text-sm block">{submittedPass.id}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">T-SHIRT SIZE</span>
                    <span className="font-bold text-geeko-300 text-sm block">Size {submittedPass.tshirtSize} (Reserved)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">VENUE</span>
                    <span className="text-slate-200 block text-[11px]">Newton School of Tech, BLR</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">PROPOSED DATE</span>
                    <span className="text-amber-400 block text-[11px]">January 2027</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">SWAG PACK</span>
                    <span className="text-geeko-400 block text-[11px]">Badge + T-Shirt + Stickers</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-slate-700 pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">TRACK: {submittedPass.interest}</span>
                  <span className="bg-slate-800 text-slate-300 px-2 py-0.5 border border-slate-700">
                    ADMISSION: FREE (COMMUNITY)
                  </span>
                </div>

                {/* Simulated Barcode */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="h-6 flex items-center gap-1 opacity-70">
                    {[3, 1, 4, 2, 5, 2, 1, 4, 3, 2, 4, 1, 3, 5, 2, 4, 2, 1].map((w, i) => (
                      <span key={i} className="h-full bg-geeko-400 inline-block" style={{ width: `${w * 1.5}px` }} />
                    ))}
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono tracking-widest">{submittedPass.id}</span>
                </div>
              </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={copyTicketId}
                    className="py-2.5 px-4 bg-obsidian-900 border-2 border-slate-700 hover:border-geeko-400 text-xs font-mono font-bold text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-geeko-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Pass ID Copied!' : 'Copy Pass ID'}</span>
                  </button>

                  <button
                    onClick={shareOnTwitter}
                    className="py-2.5 px-4 bg-obsidian-900 border-2 border-slate-700 hover:border-geeko-400 text-slate-200 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share on X / Twitter</span>
                  </button>

                  {/* Big Done & Return to Site Button */}
                  <button
                    onClick={onClose}
                    className="col-span-1 sm:col-span-2 py-3 px-4 bg-geeko-500 hover:bg-geeko-400 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#ffffff] transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Done // Return to Website</span>
                  </button>
                </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setSubmittedPass(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Pre-register another attendee
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
