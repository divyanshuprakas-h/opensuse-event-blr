import React, { useState } from 'react';
import { ArrowLeft, Trophy, Sparkles, ArrowRight, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface PageBuildathonProps {
  onBackToHome: () => void;
}

export const PageBuildathon: React.FC<PageBuildathonProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'tracks' | 'register'>('tracks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    college: '',
    track: 'Terminal Titans',
    teamType: 'squad',
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
    <div className="w-full min-h-screen bg-[#f5f6ed] flex flex-col justify-between p-6 sm:p-12 relative overflow-y-auto select-none animate-fadeIn">
      
      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between z-20 mb-6">
        {/* Top Tag: 05 / BUILDATHON */}
        <div className="bg-[#10351f] text-white text-xs sm:text-sm font-mono font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-br-2xl shadow-lg -mt-6 -ml-6 sm:-mt-12 sm:-ml-12 tracking-wider">
          05 / GEEKO BUILDATHON
        </div>

        {/* Back Button [ ← Return to Home ] */}
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          title="Return to Home Menu"
          className="px-3.5 py-2 rounded-xl bg-white/80 hover:bg-white border-2 border-[#10351f]/20 text-[#10351f] font-mono text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm active:translate-y-0.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>RETURN TO HOME</span>
        </button>
      </div>

      {/* Main Content Stage */}
      <div className="max-w-4xl mx-auto w-full space-y-6 my-auto py-4">
        
        {/* Mode Sub-Tabs */}
        <div className="flex bg-[#e4e8d8] p-1.5 rounded-2xl border border-[#10351f]/20 text-xs sm:text-sm font-mono font-bold">
          <button
            onClick={() => { playButtonThud(); setActiveTab('tracks'); }}
            className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'tracks' ? 'bg-[#10351f] text-white shadow-md' : 'text-[#10351f]/80 hover:bg-black/5'
            }`}
          >
            01. 6 TRACKS &amp; ₹50,000 PRIZES
          </button>
          <button
            onClick={() => { playButtonThud(); setActiveTab('register'); }}
            className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'register' ? 'bg-[#10351f] text-white shadow-md' : 'text-[#10351f]/80 hover:bg-black/5'
            }`}
          >
            02. REGISTRATION &amp; PASS
          </button>
        </div>

        {activeTab === 'tracks' ? (
          <div className="space-y-6">
            {/* Prize Podiums */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#10351f] to-[#1c493e] text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#8fe038]" />
                  <span className="font-display font-black text-base sm:text-lg uppercase tracking-wider">
                    ₹50,000 BUILDATHON PRIZE POOL
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8fe038] font-bold bg-white/10 px-3 py-1 rounded-full">
                  20-Hour Sprint
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center font-mono">
                <div className="bg-white/10 p-3 sm:p-4 rounded-2xl border border-white/15">
                  <div className="text-xs text-slate-300">2nd PLACE</div>
                  <div className="text-lg sm:text-2xl font-black text-white mt-0.5">₹15,000</div>
                  <div className="text-[10px] sm:text-xs text-[#8fe038] mt-1">Swag Pack</div>
                </div>
                <div className="bg-[#73ba25]/25 p-3 sm:p-4 rounded-2xl border-2 border-[#73ba25] transform -translate-y-1.5 shadow-lg">
                  <div className="text-xs text-[#8fe038] font-bold">★ 1st PLACE ★</div>
                  <div className="text-xl sm:text-3xl font-black text-white mt-0.5">₹25,000</div>
                  <div className="text-[10px] sm:text-xs text-slate-200 mt-1">Champion Trophy</div>
                </div>
                <div className="bg-white/10 p-3 sm:p-4 rounded-2xl border border-white/15">
                  <div className="text-xs text-slate-300">3rd PLACE</div>
                  <div className="text-lg sm:text-2xl font-black text-white mt-0.5">₹10,000</div>
                  <div className="text-[10px] sm:text-xs text-[#8fe038] mt-1">Swag Pack</div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-center text-slate-300 font-mono mt-3">
                + ₹6,000 in Side Quest bounties (Bug Hunt &amp; Quiz) &amp; 25 Exclusive Commemorative T-Shirts
              </div>
            </div>

            {/* 6 Tracks Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tracks.map((t) => (
                <div
                  key={t.id}
                  className="p-4 rounded-2xl bg-white border border-[#10351f]/15 hover:border-[#73ba25] transition-all shadow-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#73ba25]">TRACK {t.id}</span>
                    <span className="text-xs font-mono text-slate-400">{t.level}</span>
                  </div>
                  <h4 className="font-display font-black text-base text-[#10351f] mt-1 group-hover:text-[#73ba25] transition-colors">
                    {t.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#10351f]/70 mt-1">{t.subtitle}</p>
                  <div className="mt-3 text-xs font-mono text-slate-500 bg-[#f5f6ed] p-2 rounded-xl">
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
                className="py-3.5 px-8 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
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
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#10351f]/15 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Linus Torvalds"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f6ed] border border-[#10351f]/20 text-xs sm:text-sm font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. linus@kernel.org"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f6ed] border border-[#10351f]/20 text-xs sm:text-sm font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1.5">GitHub / GitLab Username *</label>
                    <input
                      required
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="e.g. torvalds"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f6ed] border border-[#10351f]/20 text-xs sm:text-sm font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1.5">College / Organization *</label>
                    <input
                      required
                      type="text"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="e.g. Newton School of Technology"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f6ed] border border-[#10351f]/20 text-xs sm:text-sm font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1.5">Preferred Track</label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f6ed] border border-[#10351f]/20 text-xs sm:text-sm font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    >
                      {tracks.map((t) => (
                        <option key={t.id} value={t.title}>
                          Track {t.id}: {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#10351f] mb-1.5">T-Shirt Size</label>
                    <select
                      value={formData.tshirt}
                      onChange={(e) => setFormData({ ...formData, tshirt: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f6ed] border border-[#10351f]/20 text-xs sm:text-sm font-mono text-[#10351f] focus:outline-none focus:ring-2 focus:ring-[#73ba25]"
                    >
                      {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                        <option key={sz} value={sz}>
                          Size {sz} (Commemorative openSUSE Connect)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#eef1e1] border border-[#10351f]/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#10351f]">20-Hour Overnight Hackathon Option</div>
                    <div className="text-xs text-[#10351f]/70 font-mono">Includes campus sleeping zone, midnight snacks &amp; RedBull</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.overnight}
                    onChange={(e) => setFormData({ ...formData, overnight: e.target.checked })}
                    className="w-5 h-5 accent-[#73ba25] cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-sm uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>MINT OFFICIAL BUILDER PASS</span>
                </button>
              </form>
            ) : (
              /* MINTED PASS SCREEN */
              <div className="p-6 sm:p-8 rounded-3xl bg-[#10351f] text-white space-y-5 shadow-2xl border-2 border-[#73ba25]">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#73ba25] flex items-center justify-center text-[#10351f] font-black text-sm">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#73ba25] font-bold">DIGITAL BADGE ISSUED</div>
                      <div className="font-display font-black text-base sm:text-lg uppercase">openSUSE Bengaluru Connect '27</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-[#8fe038] font-bold bg-white/10 px-3 py-1 rounded-full">
                    {submittedPass.passId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-xs sm:text-sm pt-2">
                  <div>
                    <span className="text-slate-400 text-xs block">NAME</span>
                    <span className="font-bold text-white text-base">{submittedPass.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">EMAIL</span>
                    <span className="text-white truncate block">{submittedPass.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">TRACK</span>
                    <span className="text-[#8fe038] font-bold">{submittedPass.track}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">COLLEGE / AFFILIATION</span>
                    <span className="text-white truncate block">{submittedPass.college}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/30 border border-white/10 font-mono text-xs flex items-center justify-between">
                  <span>Host: Newton School of Technology (Sattva Global City)</span>
                  <span className="text-[#8fe038] font-bold">Free Entry Verified</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={copyPassInfo}
                    className="flex-1 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-mono text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY PASS'}</span>
                  </button>
                  <button
                    onClick={() => {
                      playButtonThud();
                      setSubmittedPass(null);
                    }}
                    className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs sm:text-sm cursor-pointer"
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
      <div className="max-w-4xl mx-auto w-full pt-6 border-t border-[#10351f]/15 flex items-center justify-between text-xs sm:text-sm font-mono text-[#10351f]/70">
        <button
          onClick={() => {
            playButtonThud();
            onBackToHome();
          }}
          className="flex items-center gap-1.5 hover:text-[#10351f] font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home Menu</span>
        </button>
        <span>250 Cap · Newton School Campus</span>
      </div>
    </div>
  );
};
