import React, { useState } from 'react';
import { X, Gamepad2, Terminal, Award, Bug, CheckCircle2, RefreshCw, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface ModalPlaygroundProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPlayground: React.FC<ModalPlaygroundProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'escape' | 'trivia' | 'bughunt'>('escape');

  // Terminal Escape state
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ text: string; isUser?: boolean; isError?: boolean; isSuccess?: boolean }>>([
    { text: 'GEEKO ESCAPE ROOM v1.0.4 - openSUSE MicroOS v6.2' },
    { text: 'Type "help" for available commands. Find the secret flag to escape!' },
  ]);
  const [flagFound, setFlagFound] = useState(false);

  // Trivia state
  const [triviaAnswers, setTriviaAnswers] = useState<Record<number, number>>({});
  const [triviaSubmitted, setTriviaSubmitted] = useState(false);

  // Bug Hunt RSVP state
  const [bugHuntRsvp, setBugHuntRsvp] = useState(false);

  if (!isOpen) return null;

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    playButtonThud();

    const cmd = cliInput.trim().toLowerCase();
    const newHistory = [...cliHistory, { text: `$ ${cliInput}`, isUser: true }];

    if (cmd === 'help') {
      newHistory.push(
        { text: 'Commands available:' },
        { text: '  ls                 - List files in current directory' },
        { text: '  cat <file>         - Read file contents' },
        { text: '  zypper in geeko    - Install the Geeko escape module' },
        { text: '  uname -a           - Print kernel information' },
        { text: '  clear              - Clear terminal log' }
      );
    } else if (cmd === 'ls') {
      newHistory.push({ text: 'README.md   kernel.log   flag.enc   system_status.zypp' });
    } else if (cmd === 'cat readme.md') {
      newHistory.push({ text: 'openSUSE Bengaluru Connect 2027 Escape Challenge.' });
      newHistory.push({ text: 'Hint: Can you install the Geeko escape module with zypper?' });
    } else if (cmd === 'cat kernel.log') {
      newHistory.push({ text: '[ 0.000000] Linux version 6.12.8-openSUSE-tumbleweed-amd64' });
      newHistory.push({ text: '[ 1.482021] Geeko chameleon detected at Newton School campus.' });
    } else if (cmd === 'cat flag.enc') {
      if (flagFound) {
        newHistory.push({ text: 'FLAG{GEEKO_LOVES_BENGALURU_2027_OPENSOURCE}', isSuccess: true });
      } else {
        newHistory.push({ text: 'ENCRYPTED: 7G8k9#vL0@qW- Install the geeko module first with "zypper in geeko"!', isError: true });
      }
    } else if (cmd === 'zypper in geeko' || cmd === 'zypper install geeko') {
      newHistory.push({ text: 'Refreshing repository "openSUSE-Tumbleweed-Oss"... done.' });
      newHistory.push({ text: 'Installing package: geeko-escape-cipher-1.0-1.x86_64' });
      newHistory.push({ text: '[ SUCCESS ] Module loaded! Run "cat flag.enc" to decrypt the flag!', isSuccess: true });
      setFlagFound(true);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      playSuccessChime();
    } else if (cmd === 'uname -a') {
      newHistory.push({ text: 'Linux geeko-bengaluru 6.12.8-default #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux' });
    } else if (cmd === 'clear') {
      setCliHistory([{ text: 'Terminal cleared. Type "help" for commands.' }]);
      setCliInput('');
      return;
    } else {
      newHistory.push({ text: `bash: ${cliInput}: command not found. Try "help"`, isError: true });
    }

    setCliHistory(newHistory);
    setCliInput('');
  };

  const triviaQuestions = [
    {
      q: 'What is the beloved chameleon mascot of openSUSE officially named?',
      options: ['Geeko', 'Tux', 'Chami', 'Susee'],
      correct: 0,
    },
    {
      q: 'Which comprehensive installation & configuration tool is unique to openSUSE?',
      options: ['YaST (Yet another Setup Tool)', 'APT', 'Ansible', 'Cockpit'],
      correct: 0,
    },
    {
      q: 'What is openSUSE\'s rolling-release distribution called?',
      options: ['Leap', 'Tumbleweed', 'MicroOS', 'Aeon'],
      correct: 1,
    },
  ];

  const handleTriviaOption = (qIdx: number, optIdx: number) => {
    playButtonThud();
    setTriviaAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleTriviaSubmit = () => {
    setTriviaSubmitted(true);
    const score = Object.entries(triviaAnswers).reduce((acc, [qIdx, ans]) => {
      return acc + (ans === triviaQuestions[Number(qIdx)].correct ? 1 : 0);
    }, 0);

    if (score === triviaQuestions.length) {
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
      playSuccessChime();
    } else {
      playButtonThud();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#fbfbf6] border-2 border-[#10351f] rounded-2xl shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#10351f] text-[#f5f6ed]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#73ba25] flex items-center justify-center text-[#10351f] font-black text-sm shadow-md">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#73ba25] font-bold">
                02.B / INTERACTIVE ZONE
              </div>
              <h2 className="text-xl font-display font-black tracking-wider uppercase text-white">
                GEEKO PLAYGROUND
              </h2>
            </div>
          </div>
          <button
            onClick={() => { playButtonThud(); onClose(); }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/20 active:scale-95"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#10351f]/20 bg-[#f0f1e4] p-1.5 gap-1.5 font-mono text-xs font-bold">
          <button
            onClick={() => { playButtonThud(); setActiveTab('escape'); }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
              activeTab === 'escape'
                ? 'bg-[#10351f] text-white shadow-sm'
                : 'text-[#10351f]/80 hover:bg-black/5'
            }`}
          >
            <Terminal className="w-4 h-4 text-[#73ba25]" />
            <span>TERMINAL ESCAPE</span>
          </button>
          <button
            onClick={() => { playButtonThud(); setActiveTab('trivia'); }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
              activeTab === 'trivia'
                ? 'bg-[#10351f] text-white shadow-sm'
                : 'text-[#10351f]/80 hover:bg-black/5'
            }`}
          >
            <Award className="w-4 h-4 text-[#73ba25]" />
            <span>TRIVIA BLITZ</span>
          </button>
          <button
            onClick={() => { playButtonThud(); setActiveTab('bughunt'); }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
              activeTab === 'bughunt'
                ? 'bg-[#10351f] text-white shadow-sm'
                : 'text-[#10351f]/80 hover:bg-black/5'
            }`}
          >
            <Bug className="w-4 h-4 text-[#73ba25]" />
            <span>MIDNIGHT BUG HUNT</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-[#10351f]">
          {/* TAB 1: TERMINAL ESCAPE */}
          {activeTab === 'escape' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-display font-black uppercase text-[#10351f]">
                    MicroOS Escape Chamber
                  </h3>
                  <p className="text-xs text-[#10351f]/70 font-mono">
                    Can you find the flag? Try: <code className="bg-black/5 px-1 py-0.5 rounded text-[#10351f] font-bold">ls</code>, <code className="bg-black/5 px-1 py-0.5 rounded text-[#10351f] font-bold">zypper in geeko</code>, and <code className="bg-black/5 px-1 py-0.5 rounded text-[#10351f] font-bold">cat flag.enc</code>
                  </p>
                </div>
                {flagFound && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#73ba25]/20 border border-[#73ba25] text-[#10351f] text-xs font-mono font-bold animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 text-[#73ba25]" />
                    FLAG DECRYPTED!
                  </span>
                )}
              </div>

              {/* Terminal Screen */}
              <div className="bg-[#0b1c11] text-[#9df26a] font-mono text-xs rounded-xl p-4 border-2 border-[#10351f] shadow-inner h-64 overflow-y-auto flex flex-col justify-between">
                <div className="space-y-1.5">
                  {cliHistory.map((line, idx) => (
                    <div
                      key={idx}
                      className={`${
                        line.isUser
                          ? 'text-white font-bold'
                          : line.isError
                          ? 'text-red-400'
                          : line.isSuccess
                          ? 'text-[#73ba25] font-black'
                          : 'text-[#a4e27f]'
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCliSubmit} className="mt-3 pt-2 border-t border-[#73ba25]/20 flex items-center gap-2">
                  <span className="text-[#73ba25] font-bold select-none">&gt;</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="Type command here (e.g. ls, help)..."
                    className="flex-1 bg-transparent text-white focus:outline-none placeholder-white/30 font-mono text-xs"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-2 py-1 bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-bold rounded text-[10px] uppercase flex items-center gap-1"
                  >
                    <span>Exec</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>

              {/* Quick Command Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-[#10351f]/60 font-bold">Quick hints:</span>
                {['help', 'ls', 'zypper in geeko', 'cat flag.enc', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      setCliInput(cmd);
                    }}
                    className="px-2.5 py-1 rounded bg-[#e8e9dc] hover:bg-[#dcdfcb] border border-[#10351f]/20 text-[#10351f] font-bold active:scale-95 transition-all"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TRIVIA BLITZ */}
          {activeTab === 'trivia' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-display font-black uppercase text-[#10351f]">
                  openSUSE Community Blitz Trivia
                </h3>
                <p className="text-xs text-[#10351f]/70 font-mono">
                  Test your Linux and openSUSE pedigree! Score 3/3 to claim the Master Geeko status.
                </p>
              </div>

              <div className="space-y-4">
                {triviaQuestions.map((item, qIdx) => (
                  <div key={qIdx} className="p-4 rounded-xl bg-white border border-[#10351f]/20 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#10351f] text-[#73ba25] text-xs font-mono font-bold flex items-center justify-center">
                        {qIdx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-[#10351f]">{item.q}</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                      {item.options.map((opt, optIdx) => {
                        const isSelected = triviaAnswers[qIdx] === optIdx;
                        const isCorrect = item.correct === optIdx;
                        let btnStyle = 'bg-[#f5f6ed] hover:bg-[#eaece0] text-[#10351f] border-[#10351f]/20';

                        if (triviaSubmitted) {
                          if (isCorrect) {
                            btnStyle = 'bg-green-100 border-green-500 text-green-900 font-bold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'bg-red-100 border-red-500 text-red-900 line-through';
                          }
                        } else if (isSelected) {
                          btnStyle = 'bg-[#10351f] text-white font-bold border-[#10351f]';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleTriviaOption(qIdx, optIdx)}
                            className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all active:scale-[0.98] ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {triviaSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    playButtonThud();
                    setTriviaAnswers({});
                    setTriviaSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-[#10351f]/20 text-[#10351f] font-mono text-xs font-bold hover:bg-black/5 flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>

                <button
                  onClick={handleTriviaSubmit}
                  disabled={Object.keys(triviaAnswers).length < triviaQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-sm tracking-wider uppercase shadow-beveled-green active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit Answers
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: MIDNIGHT BUG HUNT */}
          {activeTab === 'bughunt' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#10351f] text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#73ba25] text-[#10351f] font-mono font-black text-xs uppercase">
                    Day 2 · 01:00 AM - 04:00 AM
                  </span>
                  <span className="text-xs font-mono text-[#73ba25] font-bold">₹2,000 Cash Pool</span>
                </div>
                <h3 className="text-xl font-display font-black tracking-wide uppercase">
                  THE MIDNIGHT BUG HUNT &amp; TRIAGE
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  When the rest of Bengaluru sleeps, open source contributors shine! Hunt down, reproduce, and file verified patches or PRs against openSUSE packages, YaST modules, or Open Build Service issues.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#10351f]/20 text-center">
                  <div className="text-2xl font-black text-[#73ba25] font-mono">1</div>
                  <div className="font-bold text-xs mt-1 text-[#10351f]">Target Bugzilla / GitHub</div>
                  <div className="text-[11px] text-[#10351f]/70 mt-0.5">Pick from curated list of confirmed issues</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#10351f]/20 text-center">
                  <div className="text-2xl font-black text-[#73ba25] font-mono">2</div>
                  <div className="font-bold text-xs mt-1 text-[#10351f]">Live Triage Mentorship</div>
                  <div className="text-[11px] text-[#10351f]/70 mt-0.5">Maintainers guide you step-by-step</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#10351f]/20 text-center">
                  <div className="text-2xl font-black text-[#73ba25] font-mono">3</div>
                  <div className="font-bold text-xs mt-1 text-[#10351f]">Cash &amp; Swag Rewards</div>
                  <div className="text-[11px] text-[#10351f]/70 mt-0.5">Instant bounties disbursed at closing</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#eef1e1] border border-[#10351f]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-black uppercase text-sm text-[#10351f]">
                    Reserve Midnight Bug Hunt Slot
                  </h4>
                  <p className="text-xs text-[#10351f]/70 font-mono">
                    Limited to 40 verified participants with laptops.
                  </p>
                </div>
                <button
                  onClick={() => {
                    playSuccessChime();
                    setBugHuntRsvp(!bugHuntRsvp);
                    if (!bugHuntRsvp) confetti({ particleCount: 50, spread: 60 });
                  }}
                  className={`px-5 py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all active:scale-95 ${
                    bugHuntRsvp
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'bg-[#10351f] text-white hover:bg-[#1a4a2c] shadow-beveled'
                  }`}
                >
                  {bugHuntRsvp ? '✓ RSVP CONFIRMED' : 'RESERVE MY SLOT'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#e8e9dc] border-t border-[#10351f]/20 flex items-center justify-between text-xs font-mono text-[#10351f]/70">
          <span>openSUSE India · Bengaluru Connect 2027</span>
          <button
            onClick={() => { playButtonThud(); onClose(); }}
            className="hover:text-[#10351f] font-bold"
          >
            [ ESC / Close ]
          </button>
        </div>
      </div>
    </div>
  );
};
