import React, { useState } from 'react';
import { ArrowLeft, Gamepad2, Terminal, Award, Bug, CheckCircle2, RefreshCw, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playButtonThud, playSuccessChime } from '../utils/audio';

interface PagePlaygroundProps {
  onBackToHome: () => void;
  standalone?: boolean;
}

export const PagePlayground: React.FC<PagePlaygroundProps> = ({ onBackToHome, standalone = true }) => {
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
    <div
      className={`relative w-full rounded-[32px] border-2 border-[#10351f] p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl select-none bg-[#f5f6ed] text-[#10351f] transition-all ${
        standalone ? 'max-w-3xl mx-auto min-h-[680px]' : 'w-full h-full min-h-[640px]'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Top Tag: 06 / PLAYGROUND */}
        <div className="bg-[#10351f] text-white text-[11px] font-mono font-bold px-3.5 py-1.5 rounded-br-2xl -mt-5 -ml-5 sm:-mt-7 sm:-ml-7 shadow-md">
          06 / GEEKO PLAYGROUND
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
      <div className="flex bg-[#e4e8d8] p-1 rounded-xl border border-[#10351f]/20 text-xs font-mono font-bold mb-4 gap-1">
        <button
          onClick={() => { playButtonThud(); setActiveTab('escape'); }}
          className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'escape' ? 'bg-[#10351f] text-white shadow-sm' : 'text-[#10351f]/80 hover:bg-black/5'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>ESCAPE ROOM</span>
        </button>
        <button
          onClick={() => { playButtonThud(); setActiveTab('trivia'); }}
          className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'trivia' ? 'bg-[#10351f] text-white shadow-sm' : 'text-[#10351f]/80 hover:bg-black/5'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>TRIVIA BLITZ</span>
        </button>
        <button
          onClick={() => { playButtonThud(); setActiveTab('bughunt'); }}
          className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'bughunt' ? 'bg-[#10351f] text-white shadow-sm' : 'text-[#10351f]/80 hover:bg-black/5'
          }`}
        >
          <Bug className="w-3.5 h-3.5" />
          <span>BUG HUNT</span>
        </button>
      </div>

      {/* Main Content Body */}
      <div className="space-y-5 overflow-y-auto pr-1 flex-1">
        {activeTab === 'escape' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-display font-black uppercase text-[#10351f]">
                  MicroOS Escape Chamber
                </h3>
                <p className="text-xs text-[#10351f]/70 font-mono">
                  Can you decrypt the flag? Hints: <code className="bg-black/5 px-1 py-0.5 rounded font-bold">ls</code>, <code className="bg-black/5 px-1 py-0.5 rounded font-bold">zypper in geeko</code>, and <code className="bg-black/5 px-1 py-0.5 rounded font-bold">cat flag.enc</code>
                </p>
              </div>
              {flagFound && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#73ba25]/20 border border-[#73ba25] text-[#10351f] text-xs font-mono font-bold animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 text-[#73ba25]" />
                  FLAG SOLVED!
                </span>
              )}
            </div>

            {/* Terminal Screen */}
            <div className="bg-[#0b1c11] text-[#9df26a] font-mono text-xs rounded-2xl p-4 border-2 border-[#10351f] shadow-inner h-64 overflow-y-auto flex flex-col justify-between">
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
                  className="px-2.5 py-1 bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-bold rounded text-[10px] uppercase flex items-center gap-1 cursor-pointer"
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
                  onClick={() => setCliInput(cmd)}
                  className="px-2.5 py-1 rounded bg-[#e8e9dc] hover:bg-[#dcdfcb] border border-[#10351f]/20 text-[#10351f] font-bold active:scale-95 transition-all cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'trivia' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-display font-black uppercase text-[#10351f]">
                openSUSE Community Blitz Trivia
              </h3>
              <p className="text-xs text-[#10351f]/70 font-mono">
                Test your Linux and openSUSE pedigree! Score 3/3 to claim the Master Geeko title.
              </p>
            </div>

            <div className="space-y-3">
              {triviaQuestions.map((item, qIdx) => (
                <div key={qIdx} className="p-3.5 rounded-xl bg-white border border-[#10351f]/15 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#10351f] text-[#73ba25] text-xs font-mono font-bold flex items-center justify-center">
                      {qIdx + 1}
                    </span>
                    <h4 className="font-bold text-xs text-[#10351f]">{item.q}</h4>
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
                          className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all active:scale-[0.98] cursor-pointer ${btnStyle}`}
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
                className="px-4 py-2 rounded-xl border border-[#10351f]/20 text-[#10351f] font-mono text-xs font-bold hover:bg-black/5 flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleTriviaSubmit}
                disabled={Object.keys(triviaAnswers).length < triviaQuestions.length}
                className="px-6 py-2.5 rounded-xl bg-[#73ba25] hover:bg-[#64a51e] text-[#10351f] font-display font-black text-xs uppercase tracking-wider shadow-beveled-green active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                Submit Answers
              </button>
            </div>
          </div>
        )}

        {activeTab === 'bughunt' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#10351f] text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#73ba25] text-[#10351f] font-mono font-black text-[10px] uppercase">
                  Day 2 · 01:00 AM - 04:00 AM
                </span>
                <span className="text-xs font-mono text-[#73ba25] font-bold">₹2,000 Cash Pool</span>
              </div>
              <h3 className="text-lg font-display font-black tracking-wide uppercase">
                THE MIDNIGHT BUG HUNT &amp; TRIAGE
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                When the rest of Bengaluru sleeps, open source contributors shine! Hunt down, reproduce, and file verified patches or PRs against openSUSE packages, YaST modules, or Open Build Service issues.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#eef1e1] border border-[#10351f]/20 flex items-center justify-between">
              <div>
                <h4 className="font-display font-black uppercase text-xs text-[#10351f]">
                  Reserve Midnight Bug Hunt Slot
                </h4>
                <p className="text-[11px] text-[#10351f]/70 font-mono">
                  Limited to 40 verified participants with laptops.
                </p>
              </div>
              <button
                onClick={() => {
                  playSuccessChime();
                  setBugHuntRsvp(!bugHuntRsvp);
                  if (!bugHuntRsvp) confetti({ particleCount: 50, spread: 60 });
                }}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer ${
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
        <span>Interactive Zone · Bengaluru Connect 2027</span>
      </div>
    </div>
  );
};
