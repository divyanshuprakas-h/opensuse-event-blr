import React, { useState } from 'react';
import { Gamepad2, Terminal, HelpCircle, Shuffle, Bug, Trophy, Sparkles, Check, X, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ArcadeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'trivia' | 'match' | 'bughunt'>('terminal');

  // Terminal Escape state
  const [termInput, setTermInput] = useState('');
  const [termHistory, setTermHistory] = useState<string[]>([
    "openSUSE Arcade Simulator // Terminal Escape v1.0",
    "Objective: Inspect system logs to find the secret root key and execute ./unlock.sh",
    "Type 'help' to see allowed commands.",
  ]);
  const [escaped, setEscaped] = useState(false);

  // Trivia Blitz state
  const triviaQuestions = [
    {
      q: 'What package manager does openSUSE use natively with SAT solver?',
      options: ['apt', 'zypper', 'pacman', 'dnf'],
      ans: 1,
      fact: 'Zypper uses libsolv, an ultra-fast boolean satisfiability solver.',
    },
    {
      q: 'What animal represents the official openSUSE mascot "Geeko"?',
      options: ['Penguin', 'Chameleon', 'Dragon', 'Fox'],
      ans: 1,
      fact: 'Geeko is a chameleon, symbolizing adaptability across architectures.',
    },
    {
      q: 'Which openSUSE edition is a continuous bleeding-edge rolling release?',
      options: ['Leap', 'Tumbleweed', 'MicroOS', 'Aeon'],
      ans: 1,
      fact: 'Tumbleweed is released daily with fully automated openQA testing.',
    },
  ];
  const [triviaIdx, setTriviaIdx] = useState(0);
  const [triviaScore, setTriviaScore] = useState(0);
  const [triviaSelected, setTriviaSelected] = useState<number | null>(null);
  const [triviaFinished, setTriviaFinished] = useState(false);

  // Command Match state
  const matchItems = [
    { id: 1, cmd: 'zypper dup', purpose: 'Full system upgrade to latest snapshot' },
    { id: 2, cmd: 'snapper rollback', purpose: 'Instant restore to working Btrfs snapshot' },
    { id: 3, cmd: 'chmod +x script.sh', purpose: 'Grant execution permissions' },
    { id: 4, cmd: 'systemctl restart service', purpose: 'Reload system daemon without reboot' },
  ];
  const [selectedCmdId, setSelectedCmdId] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);

  // Terminal submission
  const handleTermSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = termInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...termHistory, `$ ${termInput}`];

    if (cmd === 'help') {
      newHistory.push("Allowed: ls, cat [file], chmod +x unlock.sh, ./unlock.sh, clear");
    } else if (cmd === 'ls') {
      newHistory.push("clue.txt  notes/  unlock.sh  access.log");
    } else if (cmd === 'cat clue.txt' || cmd === 'cat notes' || cmd === 'cat notes/clue.txt') {
      newHistory.push("CLUE: Root token is 'OPENSUSE_BLR_2027'. Run chmod +x unlock.sh then ./unlock.sh");
    } else if (cmd === 'chmod +x unlock.sh') {
      newHistory.push("[OK] File permissions updated: -rwxr-xr-x unlock.sh");
    } else if (cmd === './unlock.sh' || cmd === 'bash unlock.sh') {
      setEscaped(true);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      newHistory.push("[SUCCESS] Door unlocked! You successfully escaped the Terminal Sandbox! +200 XP");
    } else if (cmd === 'clear') {
      setTermHistory([]);
      setTermInput('');
      return;
    } else {
      newHistory.push(`Command not found: '${cmd}'. Type 'help' for instructions.`);
    }

    setTermHistory(newHistory);
    setTermInput('');
  };

  // Trivia answer
  const handleTriviaOption = (idx: number) => {
    if (triviaSelected !== null) return;
    setTriviaSelected(idx);

    const isCorrect = idx === triviaQuestions[triviaIdx].ans;
    if (isCorrect) {
      setTriviaScore((prev) => prev + 100);
    }

    setTimeout(() => {
      if (triviaIdx + 1 < triviaQuestions.length) {
        setTriviaIdx(triviaIdx + 1);
        setTriviaSelected(null);
      } else {
        setTriviaFinished(true);
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      }
    }, 1200);
  };

  // Command match
  const handleCmdSelect = (id: number) => {
    setSelectedCmdId(id);
  };

  const handlePurposeSelect = (id: number) => {
    if (selectedCmdId === id) {
      setMatchedIds([...matchedIds, id]);
      setSelectedCmdId(null);
      if (matchedIds.length + 1 === matchItems.length) {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      }
    } else {
      setSelectedCmdId(null);
    }
  };

  return (
    <section id="arcade" className="py-20 border-b border-white/[0.08] bg-[#070c0a] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-geeko-400 text-xs font-bold uppercase tracking-widest block mb-1">
              // 03. SIDE ACTIVITIES &amp; CHALLENGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Geeko Arcade <span className="text-geeko-400">&amp;</span> Bug Hunt
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            <span className="bg-[#0b1e15] border border-geeko-500/30 px-3 py-1.5 rounded-full text-geeko-300 font-bold">
              ₹6,000 SIDE REWARD POOL // SCREEN-PRINTED SHIRTS
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-geeko-500/15 pb-4">
          {[
            { id: 'terminal', label: 'Terminal Escape', icon: Terminal, badge: 'PLAYABLE' },
            { id: 'trivia', label: 'Trivia Blitz', icon: HelpCircle, badge: 'PLAYABLE' },
            { id: 'match', label: 'Command Match', icon: Shuffle, badge: 'PLAYABLE' },
            { id: 'bughunt', label: 'Midnight Bug Hunt & Quest', icon: Bug, badge: '₹2,000 BOUNTY' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-geeko-500 text-obsidian-950 border-geeko-400 shadow-[0_0_15px_rgba(115,186,37,0.3)]'
                    : 'bg-[#091510] text-slate-300 border-geeko-500/20 hover:border-geeko-400/50 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                    isActive ? 'bg-black text-geeko-400' : 'bg-[#060c09] text-geeko-400'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="bg-[#09130e] border border-geeko-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
          {/* TAB 1: TERMINAL ESCAPE */}
          {activeTab === 'terminal' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-geeko-300 font-bold uppercase flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-geeko-400" />
                  <span>Terminal Escape Room // Status: {escaped ? '🔓 ESCAPED!' : '🔒 LOCKED'}</span>
                </span>
                <button
                  onClick={() => {
                    setTermHistory([
                      "openSUSE Arcade Simulator // Terminal Escape v1.0",
                      "Type 'help' to inspect available commands.",
                    ]);
                    setEscaped(false);
                  }}
                  className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Room</span>
                </button>
              </div>

              {/* Console Screen */}
              <div className="h-60 overflow-y-auto rounded-xl bg-[#050b08] border border-geeko-500/20 p-4 font-mono text-xs text-slate-200 space-y-1.5 shadow-inner">
                {termHistory.map((line, idx) => (
                  <div
                    key={idx}
                    className={
                      line.startsWith('$')
                        ? 'text-geeko-400 font-bold'
                        : line.includes('[SUCCESS]')
                        ? 'text-emerald-300 font-bold'
                        : line.startsWith('CLUE:')
                        ? 'text-amber-300'
                        : 'text-slate-300'
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Command Input Form */}
              <form onSubmit={handleTermSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-geeko-400 font-bold text-xs">
                    $
                  </span>
                  <input
                    type="text"
                    value={termInput}
                    onChange={(e) => setTermInput(e.target.value)}
                    placeholder="type command (e.g. ls, cat clue.txt, help)"
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#060d09] border border-slate-700 focus:border-geeko-400 text-xs text-white outline-none font-mono placeholder:text-slate-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-geeko-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:bg-geeko-400 transition-all cursor-pointer whitespace-nowrap"
                >
                  Execute
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: TRIVIA BLITZ */}
          {activeTab === 'trivia' && (
            <div className="space-y-6">
              {!triviaFinished ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>QUESTION {triviaIdx + 1} OF {triviaQuestions.length}</span>
                    <span className="font-bold text-geeko-400 font-mono">SCORE: {triviaScore} PTS</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#060c09] border border-geeko-500/20 text-base font-bold text-white">
                    {triviaQuestions[triviaIdx].q}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {triviaQuestions[triviaIdx].options.map((opt, i) => {
                      const isSelected = triviaSelected === i;
                      const isCorrect = i === triviaQuestions[triviaIdx].ans;
                      let btnClass = 'bg-[#060c09] border-slate-800 text-slate-200 hover:border-geeko-400';

                      if (triviaSelected !== null) {
                        if (isCorrect) btnClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold';
                        else if (isSelected) btnClass = 'bg-rose-950/60 border-rose-500 text-rose-300';
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleTriviaOption(i)}
                          className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                        >
                          <span>{opt}</span>
                          {triviaSelected !== null && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                          {triviaSelected !== null && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {triviaSelected !== null && (
                    <div className="p-3 rounded-lg bg-[#060c09] border border-geeko-500/30 text-xs text-geeko-300">
                      💡 {triviaQuestions[triviaIdx].fact}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white uppercase">TRIVIA BLITZ COMPLETE!</h4>
                  <p className="text-sm text-slate-300">
                    You scored <strong className="text-geeko-400">{triviaScore}</strong> / 300 Points!
                  </p>
                  <button
                    onClick={() => {
                      setTriviaIdx(0);
                      setTriviaScore(0);
                      setTriviaSelected(null);
                      setTriviaFinished(false);
                    }}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-geeko-500 text-obsidian-950 font-bold text-xs uppercase cursor-pointer"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: COMMAND MATCH */}
          {activeTab === 'match' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Click a command, then select its purpose to pair:</span>
                <span className="text-geeko-400 font-bold">
                  Matched: {matchedIds.length} / {matchItems.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Commands */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                    COMMAND:
                  </span>
                  {matchItems.map((item) => {
                    const isDone = matchedIds.includes(item.id);
                    const isSelected = selectedCmdId === item.id;
                    return (
                      <button
                        key={item.cmd}
                        disabled={isDone}
                        onClick={() => handleCmdSelect(item.id)}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                          isDone
                            ? 'opacity-40 bg-[#060c09] border-emerald-950 text-emerald-500 line-through'
                            : isSelected
                            ? 'bg-[#0d2217] border-geeko-400 text-geeko-300 shadow-sm'
                            : 'bg-[#060c09] border-slate-800 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        $ {item.cmd}
                      </button>
                    );
                  })}
                </div>

                {/* Purpose */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                    PURPOSE:
                  </span>
                  {matchItems.map((item) => {
                    const isDone = matchedIds.includes(item.id);
                    return (
                      <button
                        key={item.purpose}
                        disabled={isDone}
                        onClick={() => handlePurposeSelect(item.id)}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-sans transition-all cursor-pointer ${
                          isDone
                            ? 'opacity-40 bg-[#060c09] border-emerald-950 text-emerald-500 line-through'
                            : 'bg-[#060c09] border-slate-800 text-slate-300 hover:border-geeko-400'
                        }`}
                      >
                        {item.purpose}
                      </button>
                    );
                  })}
                </div>
              </div>

              {matchedIds.length === matchItems.length && (
                <div className="p-3.5 rounded-xl bg-[#0d2217] border border-geeko-500 text-center text-xs text-geeko-300 font-bold">
                  🎉 Perfect Match! All Linux system commands decoded!
                </div>
              )}
            </div>
          )}

          {/* TAB 4: MIDNIGHT BUG HUNT & QUEST */}
          {activeTab === 'bughunt' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#060c09] border border-geeko-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold text-xs uppercase flex items-center gap-1.5">
                    <Bug className="w-4 h-4 text-amber-400" />
                    <span>Midnight Bug Hunt</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    DAY 2 // 01:00 AM
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Individual late-night auditing competition with separate Rookie and Expert sandboxes. Repair broken shell scripts or diagnose crashed services in a safe sandbox.
                </p>
                <div className="p-3 rounded-lg bg-[#091510] border border-geeko-500/20 text-xs text-geeko-300 space-y-1">
                  <div>• <strong>Rookie:</strong> Shell script repair</div>
                  <div>• <strong>Expert:</strong> Permissions &amp; service diagnostics</div>
                  <div className="text-white font-bold pt-1">💰 ₹2,000 Cash Pool + Winner T-Shirts</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#060c09] border border-geeko-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-geeko-400 font-bold text-xs uppercase flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-geeko-400" />
                    <span>Geeko Quest Passport</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-geeko-500/20 text-geeko-300 border border-geeko-500/40">
                    MOBILE DIGITAL
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Mobile-friendly digital passport accessed via QR badge. Complete real-world FOSS missions: run first terminal command, explore openSUSE tools, meet maintainers, and help peers.
                </p>
                <div className="p-3 rounded-lg bg-[#091510] border border-geeko-500/20 text-xs text-geeko-300 space-y-1">
                  <div>• Earn XP and collect commemorative badges</div>
                  <div>• Physical "Find the Geeko" QR clue trail</div>
                  <div className="text-white font-bold pt-1">💰 ₹4,000 Rewards Pool + Geeko Swag</div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
