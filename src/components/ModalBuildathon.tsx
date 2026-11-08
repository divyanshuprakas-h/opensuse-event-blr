import React, { useState } from 'react';
import { X, Trophy, Terminal, Sparkles, Check, ArrowRight, Share2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface ModalBuildathonProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalBuildathon: React.FC<ModalBuildathonProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tracks' | 'register'>('tracks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    college: '',
    track: 'Terminal Titans',
    teamType: 'squad', // squad | solo
    teamName: '',
    overnight: true,
    tshirt: 'L',
  });
  const [submittedPass, setSubmittedPass] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const tracks = [
    { id: '01', title: 'Terminal Titans', subtitle: 'Linux CLI & Productivity', level: 'Beginner to Intermediate', tech: 'Bash, Rust, Python, Zypper, TUI' },
    { id: '02', title: 'Root Access', subtitle: 'Security, Privacy & Hardening', level: 'Intermediate to Advanced', tech: 'PAM, SELinux, Auditd, Firewalld' },
    { id: '03', title: 'GeekoOps', subtitle: 'Automation, DevOps & OBS', level: 'Intermediate to Advanced', tech: 'OBS API, openQA, Podman, CI/CD' },
    { id: '04', title: 'Desktop Reboot', subtitle: 'Linux Desktop & User Experience', level: 'All Levels Welcome', tech: 'KDE Plasma, GNOME, Wayland, Qt/GTK' },
    { id: '05', title: 'Upstream Heroes', subtitle: 'Real Open-Source Contributions', level: 'All Levels Welcome', tech: 'Git PR, Bugzilla, Kernel, Docs' },
    { id: '06', title: 'What Does Linux Need Next?', subtitle: 'Open Innovation & Community Impact', level: 'All Levels Welcome', tech: 'FOSS Architecture, AI/ML, Impact' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessChime();
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#73ba25', '#8fe038', '#10351f', '#ffffff'],
    });

    const passId = `GEEKO-BLR-#${Math.floor(Math.random() * 80) + 170}`;
    setSubmittedPass({
      ...formData,
      id: passId,
    });
  };

  const copyId = () => {
    if (!submittedPass) return;
    navigator.clipboard.writeText(submittedPass.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          playButtonThud();
          onClose();
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#f5f6ed] rounded-[28px] border-2 border-[#2b4c30] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto select-none">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playButtonThud();
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] flex items-center justify-center hover:bg-white active:translate-y-0.5 cursor-pointer shadow-sm"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-5">
          <div className="inline-block bg-[#10351f] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
            SIGNATURE HACKATHON // 20 HOURS NON-STOP
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#10351f] uppercase tracking-tight">
            Geeko Buildathon '27
          </h2>
          <p className="text-xs sm:text-sm text-[#2b4c30] font-medium">
            Day 1 14:30 First Commit Ceremony → Day 2 10:30 Commit Freeze.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-6 border-b border-[#b8c5a2] pb-3">
          <button
            onClick={() => setActiveTab('tracks')}
            className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase transition-all cursor-pointer ${
              activeTab === 'tracks'
                ? 'bg-[#10351f] text-white shadow-sm'
                : 'bg-[#f7f9ee] text-[#14281a] border border-[#ccd5b8] hover:bg-white'
            }`}
          >
            6 Tracks &amp; Prizes
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase transition-all cursor-pointer ${
              activeTab === 'register'
                ? 'bg-[#10351f] text-white shadow-sm'
                : 'bg-[#f7f9ee] text-[#14281a] border border-[#ccd5b8] hover:bg-white'
            }`}
          >
            Register Team / Solo
          </button>
        </div>

        {/* TAB 1: TRACKS & PRIZES */}
        {activeTab === 'tracks' && (
          <div className="space-y-6">
            {/* Prize Podiums Row */}
            <div className="p-4 rounded-2xl bg-[#eaf0dc] border border-[#b8c5a2] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#10351f]">
                <span className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span>TOTAL BUILDATHON PRIZE POOL: ₹50,000</span>
                </span>
                <span className="text-[#5c971c]">TOP 3 TEAMS</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1 font-display">
                <div className="p-2.5 rounded-xl bg-white border border-[#ccd5b8]">
                  <div className="text-[10px] text-slate-500 font-bold">1ST PLACE</div>
                  <div className="text-lg font-black text-amber-600">₹25,000</div>
                  <div className="text-[10px] text-slate-600">Trophy + Shirts</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#ccd5b8]">
                  <div className="text-[10px] text-slate-500 font-bold">2ND PLACE</div>
                  <div className="text-lg font-black text-slate-700">₹15,000</div>
                  <div className="text-[10px] text-slate-600">Trophy + Shirts</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#ccd5b8]">
                  <div className="text-[10px] text-slate-500 font-bold">3RD PLACE</div>
                  <div className="text-lg font-black text-amber-800">₹10,000</div>
                  <div className="text-[10px] text-slate-600">Trophy + Shirts</div>
                </div>
              </div>
            </div>

            {/* 6 Tracks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tracks.map((t) => (
                <div key={t.id} className="p-3.5 rounded-xl bg-[#f7f9ee] border border-[#ccd5b8] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold text-[#5c971c]">TRACK #{t.id}</span>
                    <span className="text-slate-500">{t.level}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#14281a]">{t.title}</h4>
                  <p className="text-[11px] text-slate-600 font-medium">{t.subtitle}</p>
                  <div className="text-[10px] font-mono text-[#2b4c30] pt-1">
                    Tech: {t.tech}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('register')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-geeko-500 to-geeko-400 text-white font-display font-black text-xs uppercase tracking-wider shadow-beveled-green active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>PROCEED TO TEAM REGISTRATION</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: REGISTRATION FORM */}
        {activeTab === 'register' && (
          <div>
            {!submittedPass ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Linus Torvalds"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono text-[#14281a] outline-none focus:border-[#73ba25]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono text-[#14281a] outline-none focus:border-[#73ba25]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                      GitHub Handle
                    </label>
                    <input
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="github.com/username"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono text-[#14281a] outline-none focus:border-[#73ba25]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                      College / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="e.g. Newton School / IIIT-B"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono text-[#14281a] outline-none focus:border-[#73ba25]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                    Select Preferred Track *
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono text-[#14281a] outline-none"
                  >
                    {tracks.map((t) => (
                      <option key={t.id} value={t.title}>
                        #{t.id} {t.title} ({t.subtitle})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                      Participation Mode
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, teamType: 'squad' })}
                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold border transition-all ${
                          formData.teamType === 'squad'
                            ? 'bg-[#10351f] text-white border-[#10351f]'
                            : 'bg-white text-[#14281a] border-[#ccd5b8]'
                        }`}
                      >
                        Team (3-4)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, teamType: 'solo' })}
                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold border transition-all ${
                          formData.teamType === 'solo'
                            ? 'bg-[#10351f] text-white border-[#10351f]'
                            : 'bg-white text-[#14281a] border-[#ccd5b8]'
                        }`}
                      >
                        Solo Hacker
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#14281a] mb-1">
                      T-Shirt Size
                    </label>
                    <select
                      value={formData.tshirt}
                      onChange={(e) => setFormData({ ...formData, tshirt: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono text-[#14281a] outline-none"
                    >
                      <option value="S">Small (S)</option>
                      <option value="M">Medium (M)</option>
                      <option value="L">Large (L)</option>
                      <option value="XL">Extra Large (XL)</option>
                      <option value="XXL">Double XL (XXL)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-geeko-500 to-geeko-400 text-white font-display font-black text-xs uppercase tracking-wider shadow-beveled-green active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>⚡ CONFIRM REGISTRATION &amp; GET BUILDER PASS</span>
                  </button>
                </div>
              </form>
            ) : (
              /* MINTED BUILDER PASS */
              <div className="space-y-4 text-center">
                <div className="p-5 rounded-2xl bg-[#eaf0dc] border-2 border-[#73ba25] shadow-lg text-left space-y-3 font-mono">
                  <div className="flex items-center justify-between border-b border-[#b8c5a2] pb-2">
                    <span className="font-display font-bold text-xs text-[#10351f]">
                      openSUSE INDIA // BENGALURU CONNECT '27
                    </span>
                    <span className="bg-[#10351f] text-white text-[10px] px-2 py-0.5 rounded font-bold">
                      BUILDER PASS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 block">ATTENDEE</span>
                      <strong className="text-[#14281a] text-sm">{submittedPass.name}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">PASS ID</span>
                      <strong className="text-[#5c971c] text-sm">{submittedPass.id}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">TRACK</span>
                      <span className="text-slate-800">{submittedPass.track}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">T-SHIRT SIZE</span>
                      <span className="text-slate-800">Size {submittedPass.tshirt} (Reserved)</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-dashed border-[#b8c5a2] flex items-center justify-between text-[11px] text-slate-600">
                    <span>VENUE: Newton School of Technology</span>
                    <span className="text-[#5c971c] font-bold">ADMISSION: FREE</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={copyId}
                    className="flex-1 py-2.5 rounded-xl bg-white border border-[#ccd5b8] text-xs font-mono font-bold text-[#14281a] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Pass ID Copied' : 'Copy Pass ID'}</span>
                  </button>

                  <button
                    onClick={() => setSubmittedPass(null)}
                    className="px-4 py-2.5 rounded-xl bg-[#10351f] text-white text-xs font-mono font-bold cursor-pointer"
                  >
                    Register Another
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
