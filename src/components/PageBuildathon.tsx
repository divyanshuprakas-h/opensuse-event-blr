import React, { useState } from 'react';
import { ArrowLeft, Trophy, Terminal, Sparkles, Check, ArrowRight, Share2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface PageBuildathonProps {
  onBackToHome: () => void;
  standalone?: boolean;
}

export const PageBuildathon: React.FC<PageBuildathonProps> = ({ onBackToHome, standalone = true }) => {
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
      passId,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    });
  };

  const copyPassInfo = () => {
    if (!submittedPass) return;
    navigator.clipboard.writeText(`openSUSE India Bengaluru Connect 2027 Pass: ${submittedPass.passId} | Attendee: ${submittedPass.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`relative w-full rounded-[32px] border-2 border-[#10351f] p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl select-none bg-[#f5f6ed] text-[#10351f] transition-all ${
        standalone ? 'max-w-3xl mx-auto min-h-[680px]' : 'w-full h-full min-h-[640px]'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Top Tag: 05 / BUILDATHON */}
        <div className="bg-[#10351f] text-white text-[11px] font-mono font-bold px-3.5 py-1.5 rounded-br-2xl -mt-5 -ml-5 sm:-mt-7 sm:-ml-7 shadow-md">
          05 / GEEKO BUILDATHON
        </div>

        {/* Back Button [ ← ] */}
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          title="Return to Home Menu"
          className="w-8 h-8 rounded-xl bg-[#f7f9ee] border-2 border-[#ccd5b8] text-[#14281a] flex items-center justify-center hover:bg-white active:translate-y-0.5 shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Mode Sub-Tabs */}
      <div className="flex bg-[#e4e8d8] p-1 rounded-xl border border-[#10351f]/20 text-xs font-mono font-bold mb-4">
        <button
          onClick={() => { playButtonThud(); setActiveTab('tracks'); }}
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeTab === 'tracks' ? 'bg-[#10351f] text-white shadow-sm' : 'text-[#10351f]/80 hover:bg-black/5'
          }`}
        >
          01. 6 TRACKS &amp; ₹50,000 PRIZES
        </button>
        <button
          onClick={() => { playButtonThud(); setActiveTab('register'); }}
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeTab === 'register' ? 'bg-[#10351f] text-white shadow-sm' : 'text-[#10351f]/80 hover:bg-black/5'
          }`}
        >
          02. REGISTRATION &amp; PASS
        </button>
      </div>

      {/* Main Content Body */}
      <div className="space-y-5 overflow-y-auto pr-1 flex-1">
        {activeTab === 'tracks' ? (
          <div className="space-y-5">
            {/* Prize Podiums */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#10351f] to-[#1c493e] text-white shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#8fe038]" />
                  <span className="font-display font-black text-sm uppercase tracking-wider">
                    ₹50,000 BUILDATHON PRIZE POOL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8fe038] font-bold bg-white/10 px-2 py-0.5 rounded">
                  20-Hour Sprint
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                  <div className="text-[10px] text-slate-300">2nd PLACE</div>
                  <div className="text-base font-black text-white">₹15,000</div>
                  <div className="text-[9px] text-[#8fe038]">Swag Pack</div>
                </div>
                <div className="bg-[#73ba25]/25 p-2.5 rounded-xl border-2 border-[#73ba25] transform -translate-y-1">
                  <div className="text-[10px] text-[#8fe038] font-bold">★ 1st PLACE ★</div>
                  <div className="text-xl font-black text-white">₹25,000</div>
                  <div className="text-[9px] text-slate-200">Champion Trophy</div>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                  <div className="text-[10px] text-slate-300">3rd PLACE</div>
                  <div className="text-base font-black text-white">₹10,000</div>
                  <div className="text-[9px] text-[#8fe038]">Swag Pack</div>
                </div>
              </div>
              <div className="text-[11px] text-center text-slate-300 font-mono mt-2.5">
                + ₹6,000 in Side Quest bounties (Bug Hunt &amp; Quiz) &amp; 25 Exclusive Commemorative T-Shirts
              </div>
            </div>

            {/* 6 Tracks Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tracks.map((t) => (
                <div
                  key={t.id}
                  className="p-3.5 rounded-xl bg-white border border-[#10351f]/15 hover:border-[#73ba25] transition-all shadow-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#73ba25]">TRACK {t.id}</span>
                    <span className="text-[10px] font-mono text-slate-400">{t.level}</span>
                  </div>
                  <h4 className="font-display font-black text-sm text-[#10351f] mt-1 group-hover:text-[#73ba25] transition-colors">
                    {t.title}
                  </h4>
                  <p className="text-xs text-[#10351f]/70 mt-0.5">{t.subtitle}</p>
                  <div className="mt-2 text-[10px] font-mono text-slate-500 bg-[#f5f6ed] p-1.5 rounded">
                    Tech: {t.tech}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => {
                  playButtonThud();
                  setActiveTab('register');
                }}
                className="py-3 px-6 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>CLAIM PARTICIPANT PASS &amp; REGISTER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM & MINTED PASS */
          <div>
            {!submittedPass ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Linus Torvalds"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#10351f]/20 text-xs font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. linus@kernel.org"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#10351f]/20 text-xs font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1">GitHub / GitLab Username *</label>
                    <input
                      required
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="e.g. torvalds"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#10351f]/20 text-xs font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1">College / Organization *</label>
                    <input
                      required
                      type="text"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="e.g. Newton School of Technology"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#10351f]/20 text-xs font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1">Preferred Track</label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#10351f]/20 text-xs font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    >
                      {tracks.map((t) => (
                        <option key={t.id} value={t.title}>
                          Track {t.id}: {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1">T-Shirt Size</label>
                    <select
                      value={formData.tshirt}
                      onChange={(e) => setFormData({ ...formData, tshirt: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#10351f]/20 text-xs font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    >
                      {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                        <option key={sz} value={sz}>
                          Size {sz} (Commemorative openSUSE Connect)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#eef1e1] border border-[#10351f]/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#10351f]">20-Hour Overnight Hackathon Option</div>
                    <div className="text-[11px] text-[#10351f]/70 font-mono">Includes campus sleeping zone, midnight snacks &amp; RedBull</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.overnight}
                    onChange={(e) => setFormData({ ...formData, overnight: e.target.checked })}
                    className="w-4 h-4 accent-[#73ba25]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>MINT OFFICIAL BUILDER PASS</span>
                </button>
              </form>
            ) : (
              /* MINTED PASS SCREEN */
              <div className="p-5 rounded-2xl bg-[#10351f] text-white space-y-4 shadow-xl border-2 border-[#73ba25]">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#73ba25] flex items-center justify-center text-[#10351f] font-black text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#73ba25] font-bold">DIGITAL BADGE ISSUED</div>
                      <div className="font-display font-black text-sm uppercase">openSUSE Bengaluru Connect '27</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#8fe038] font-bold bg-white/10 px-2 py-0.5 rounded">
                    {submittedPass.passId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-1">
                  <div>
                    <span className="text-slate-400 text-[10px] block">NAME</span>
                    <span className="font-bold text-white text-sm">{submittedPass.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">EMAIL</span>
                    <span className="text-white truncate block">{submittedPass.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">TRACK</span>
                    <span className="text-[#8fe038] font-bold">{submittedPass.track}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">COLLEGE / AFFILIATION</span>
                    <span className="text-white truncate block">{submittedPass.college}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/10 font-mono text-[11px] flex items-center justify-between">
                  <span>Host: Newton School of Technology (Sattva Global City)</span>
                  <span className="text-[#8fe038]">Free Entry Verified</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={copyPassInfo}
                    className="flex-1 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY PASS'}</span>
                  </button>
                  <button
                    onClick={() => {
                      playButtonThud();
                      setSubmittedPass(null);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                  >
                    Register Another
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Sub-Bar */}
      <div className="pt-4 border-t border-[#10351f]/15 flex items-center justify-between text-xs font-mono text-[#10351f]/70">
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          className="flex items-center gap-1 hover:text-[#10351f] font-bold cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home Menu</span>
        </button>
        <span>250 Cap · Newton School Campus</span>
      </div>
    </div>
  );
};
