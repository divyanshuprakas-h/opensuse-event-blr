import React, { useState } from 'react';
import { X, Mic, CheckCircle2, Sparkles, Terminal, Copy, Check, FileText, ArrowRight } from 'lucide-react';

interface CFPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CFPSubmission {
  id: string;
  name: string;
  email: string;
  organization: string;
  title: string;
  format: string;
  audience: string;
  abstract: string;
  bio: string;
  github: string;
  submittedAt: string;
}

export const CFPModal: React.FC<CFPModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    title: '',
    format: '30-Min Technical Talk',
    audience: 'All Levels',
    abstract: '',
    bio: '',
    github: '',
  });

  const [submittedCFP, setSubmittedCFP] = useState<CFPSubmission | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.title || !formData.abstract) return;

    setIsSubmitting(true);
    const cfpRecord: CFPSubmission = {
      id: `CFP-BLR-${Math.floor(1000 + Math.random() * 9000)}`,
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('opensuse_blr_cfp_submissions') || '[]');
      existing.push(cfpRecord);
      localStorage.setItem('opensuse_blr_cfp_submissions', JSON.stringify(existing));
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedCFP(cfpRecord);
    }, 400);
  };

  const copyId = () => {
    if (!submittedCFP) return;
    navigator.clipboard.writeText(submittedCFP.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-obsidian-950 border-2 border-geeko-500 shadow-[8px_8px_0px_0px_#173f35] text-slate-100 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="bg-geeko-500 text-black px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 fill-black" />
            <span>CALL FOR PROPOSALS (CFP) // DESK</span>
          </div>
          <button
            onClick={onClose}
            className="text-black hover:bg-black hover:text-white p-1 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!submittedCFP ? (
            <div className="space-y-5">
              
              <div className="bg-pine-900/40 border border-geeko-500/30 p-3.5 text-xs font-mono">
                <div className="text-geeko-400 font-bold mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SHARE YOUR PASSION AT BENGALURU CONNECT 2027</span>
                </div>
                <p className="text-slate-300">
                  We are accepting talk and workshop submissions across Linux administration, distribution development, packaging (OBS), automated testing (openQA), developer productivity, and open-source ethics.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Speaker Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name <span className="text-geeko-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Richard Brown"
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address <span className="text-geeko-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="speaker@domain.com"
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* Organization / College */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Organization / University / Project <span className="text-slate-500 lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. openSUSE Contributor / Newton School of Technology"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                {/* Proposal Title */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Session / Talk Title <span className="text-geeko-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Building Next-Gen Desktop Workflows with Tumbleweed & Snapper"
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                {/* Format & Target Audience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Presentation Format
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    >
                      <option value="30-Min Technical Talk">30-Min Technical Talk (Day 1)</option>
                      <option value="60-Min Hands-on Workshop">60-Min Hands-on Workshop (Day 1)</option>
                      <option value="10-Min Lightning Talk">10-Min Lightning Talk (Day 1 Lunch)</option>
                      <option value="Hackathon Mentor / Jury">Day 2 Hackathon Mentor / Track Jury</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Target Audience Level
                    </label>
                    <select
                      value={formData.audience}
                      onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    >
                      <option value="All Levels">All Levels (Beginner Friendly)</option>
                      <option value="Intermediate">Intermediate (Linux / Git familiarity)</option>
                      <option value="Advanced">Advanced (Kernel / Systems / Packaging)</option>
                    </select>
                  </div>
                </div>

                {/* Abstract */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Abstract & Key Takeaways <span className="text-geeko-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    placeholder="Briefly describe what your session covers and what attendees will learn..."
                    className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                  />
                </div>

                {/* Speaker Bio & GitHub */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Speaker Short Bio
                    </label>
                    <input
                      type="text"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      placeholder="Brief background / role"
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1">
                      GitHub Profile / Website
                    </label>
                    <input
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full bg-obsidian-900 border-2 border-slate-700 focus:border-geeko-500 px-3 py-2 font-mono text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-geeko-500 text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? <span>Recording Proposal...</span> : <span>Submit CFP Proposal</span>}
                  </button>
                </div>

              </form>

            </div>
          ) : (
            /* Confirmation card */
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 mx-auto bg-geeko-500 text-black border-2 border-black flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Proposal Submitted Successfully!
                </h3>
                <p className="text-xs font-mono text-geeko-400 mt-1">
                  Your CFP has been logged with the openSUSE India organizing committee.
                </p>
              </div>

              <div className="bg-obsidian-900 border-2 border-geeko-500 p-4 font-mono text-left shadow-[4px_4px_0px_0px_#173f35] text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">PROPOSAL ID:</span>
                  <span className="text-geeko-400 font-bold">{submittedCFP.id}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">TITLE:</span>
                  <span className="text-white font-bold truncate max-w-xs">{submittedCFP.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">FORMAT:</span>
                  <span className="text-slate-300">{submittedCFP.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">STATUS:</span>
                  <span className="text-amber-400 font-bold">In Review by Committee</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={copyId}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-geeko-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'ID Copied' : 'Copy Proposal ID'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-geeko-500 text-black border-2 border-black font-mono font-bold text-xs uppercase cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
