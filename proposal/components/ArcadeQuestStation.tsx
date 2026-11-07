import React, { useState } from 'react';
import { GEEKO_ARCADE_GAMES } from '../proposalData';
import { soundManager } from '../utils/soundEffects';

export const ArcadeQuestStation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'arcade' | 'quest' | 'bughunt'>('arcade');
  
  // Interactive mini Terminal Escape game state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "openSUSE Arcade Simulator v1.0",
    "Type 'help' to inspect available commands. Objective: Unlock the Geeko Vault.",
  ]);
  const [vaultUnlocked, setVaultUnlocked] = useState(false);

  // Interactive Trivia Blitz state
  const [triviaAnswered, setTriviaAnswered] = useState<number | null>(null);
  const [triviaFeedback, setTriviaFeedback] = useState<string>('');

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    soundManager.playKeyClick();

    if (!cmd) return;

    let response = "";
    if (cmd === 'help') {
      response = "Available: ls, cat key.txt, zypper se chameleon, unlock, clear";
    } else if (cmd === 'ls') {
      response = "drwxr-xr-x 2 geeko geeko  4096 Jan 2027  .\n-rw-r--r-- 1 geeko geeko   128 Jan 2027  key.txt\n-rwxr-xr-x 1 geeko geeko  2048 Jan 2027  vault.sh";
    } else if (cmd === 'cat key.txt') {
      response = "VAULT_PASSCODE: GEEKO_BENGALURU_2027";
    } else if (cmd === 'zypper se chameleon' || cmd === 'zypper') {
      response = "S | Name        | Summary                     | Type\n--+-------------+-----------------------------+------\ni | geeko-core  | openSUSE Mascot & Chameleon | package";
    } else if (cmd === 'unlock' || cmd === 'unlock geeko_bengaluru_2027' || cmd === './vault.sh') {
      setVaultUnlocked(true);
      soundManager.playSuccess();
      response = "[SUCCESS] Vault Unlocked! XP +150 awarded to your Geeko Quest Passport!";
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      response = `Command not recognized: '${cmd}'. Type 'help' for instructions.`;
    }

    setTerminalHistory((prev) => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput('');
  };

  const handleTriviaClick = (optionIdx: number) => {
    soundManager.playSelect();
    setTriviaAnswered(optionIdx);
    if (optionIdx === 1) {
      soundManager.playSuccess();
      setTriviaFeedback("Correct! The openSUSE mascot is 'Geeko', a friendly chameleon.");
    } else {
      setTriviaFeedback("Not quite! The mascot is 'Geeko' the chameleon.");
    }
  };

  return (
    <section id="arcade" className="py-8 scroll-mt-20 font-mono">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-geeko-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-geeko-400"></span>
            <span>SECTION 06 // SIDE ACTIVITIES & GAMIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Geeko Arcade, Quest & Midnight Bug Hunt
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Gamified engagement for downtime & networking. Quest points and bug hunt rewards never affect hackathon scoring.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#08130e] border border-geeko-500/30 text-xs">
          <button
            onClick={() => {
              soundManager.playKeyClick();
              setActiveTab('arcade');
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === 'arcade'
                ? 'bg-geeko-500 text-obsidian-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Geeko Arcade (4 Games)
          </button>
          <button
            onClick={() => {
              soundManager.playKeyClick();
              setActiveTab('quest');
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === 'quest'
                ? 'bg-geeko-500 text-obsidian-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Geeko Quest Passport
          </button>
          <button
            onClick={() => {
              soundManager.playKeyClick();
              setActiveTab('bughunt');
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === 'bughunt'
                ? 'bg-geeko-500 text-obsidian-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Midnight Bug Hunt
          </button>
        </div>
      </div>

      {/* Tab 1: Geeko Arcade */}
      {activeTab === 'arcade' && (
        <div className="space-y-6">
          {/* 4 Arcade Game Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GEEKO_ARCADE_GAMES.map((game) => (
              <div
                key={game.id}
                className="p-4 rounded-xl border border-geeko-500/20 bg-[#07130e] flex flex-col justify-between hover:border-geeko-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                    <span className="px-2 py-0.5 rounded bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/30">
                      {game.type}
                    </span>
                    <span>{game.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">{game.name}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {game.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-geeko-500/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Difficulty:</span>
                  <span className="text-emerald-400 font-bold">{game.difficulty}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Playable Terminal Escape Mini-Simulation */}
          <div className="rounded-xl border border-geeko-500/30 bg-[#040906] p-4 sm:p-6 shadow-inner">
            <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3 mb-4 text-xs">
              <div className="flex items-center gap-2 text-geeko-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-geeko-500"></span>
                <span>INTERACTIVE ARCADE PREVIEW: TERMINAL ESCAPE</span>
              </div>
              <span className="text-[10px] text-slate-400">Try typing: ls, cat key.txt, unlock</span>
            </div>

            <div className="bg-[#020503] p-4 rounded-lg border border-geeko-500/20 text-xs text-emerald-300 min-h-[160px] max-h-[220px] overflow-y-auto terminal-scroll space-y-1 mb-3">
              {terminalHistory.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap leading-relaxed font-mono">
                  {line}
                </div>
              ))}
              {vaultUnlocked && (
                <div className="p-2 mt-2 bg-emerald-950/80 border border-emerald-400 text-emerald-200 font-bold rounded">
                  🎉 TROPHY UNLOCKED: GEEKO HACKER BADGE
                </div>
              )}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex gap-2">
              <span className="text-geeko-400 font-bold self-center text-sm font-mono">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type command here (e.g. ls, cat key.txt, unlock)..."
                className="flex-1 bg-[#091510] border border-geeko-500/30 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-geeko-400 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-geeko-500 hover:bg-geeko-400 text-obsidian-950 font-bold text-xs rounded transition-all cursor-pointer font-mono"
              >
                EXEC
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tab 2: Geeko Quest Passport */}
      {activeTab === 'quest' && (
        <div className="rounded-xl border border-geeko-500/20 bg-[#07130e] p-6 text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3">
            <h3 className="text-base font-bold text-geeko-400">
              Geeko Quest: QR-Based Digital Passport
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              No App Install Required
            </span>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm">
            A mobile-friendly webpage opens seamlessly from the attendee registration QR pass. Participants complete fun, structured quests across the event to earn XP and collectible openSUSE digital badges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#0a1a12] border border-geeko-500/10 space-y-2">
              <div className="text-geeko-300 font-bold">SAMPLE QUEST MISSIONS:</div>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                <li>• <strong>Terminal Explorer:</strong> Run your first Zypper package query in the Starter Lab.</li>
                <li>• <strong>Meet a Contributor:</strong> Introduce yourself to an openSUSE maintainer & collect a stamp.</li>
                <li>• <strong>Community Camaraderie:</strong> Assist a neighbouring team with an environment issue.</li>
                <li>• <strong>Upstream Scout:</strong> Find an open good-first-issue on openSUSE GitHub/Bugzilla.</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#0a1a12] border border-geeko-500/10 space-y-2">
              <div className="text-emerald-300 font-bold">OPERATING & INTEGRITY RULES:</div>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                <li>• <strong>Verification:</strong> Designated volunteers verify task completion before awarding XP.</li>
                <li>• <strong>Rate Limits:</strong> Unique participant ID checking; one claim per mission.</li>
                <li>• <strong>Wall of Fame:</strong> Public leaderboard is strictly opt-in.</li>
                <li>• <strong>Scoring Separation:</strong> Quest points NEVER influence Hackathon judging scores.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Midnight Bug Hunt */}
      {activeTab === 'bughunt' && (
        <div className="rounded-xl border border-geeko-500/20 bg-[#07130e] p-6 text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-geeko-500/20 pb-3">
            <h3 className="text-base font-bold text-amber-400">
              Midnight Bug Hunt (Day 2 · 01:00 – 01:30 IST)
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
              Individual 30-Min Sprint
            </span>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm">
            An optional, adrenaline-fueled 30-minute individual debugging competition held in the quiet hours of the hackathon with dedicated Rookie and Expert tracks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#0d1c14] border border-amber-500/20 space-y-2">
              <div className="text-amber-300 font-bold flex items-center justify-between">
                <span>ROOKIE CHALLENGE</span>
                <span className="text-[10px] text-slate-400">Cash Award: ₹1,000</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Analyze and repair a broken Linux Bash shell script with logic errors, bad syntax, and improper pipe handling. Submit your diff against automated test assertions.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0d1c14] border border-amber-500/20 space-y-2">
              <div className="text-amber-300 font-bold flex items-center justify-between">
                <span>EXPERT CHALLENGE</span>
                <span className="text-[10px] text-slate-400">Cash Award: ₹1,000</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Triage an isolated sandbox system with systemd service failure, corrupted permissions, or network socket conflict. Fix the misconfiguration and pass the automated health checks.
              </p>
            </div>
          </div>

          <div className="p-3 rounded bg-[#0a1510] border border-geeko-500/20 text-[11px] text-slate-400">
            <strong>Ranking Criteria:</strong> Correct solutions ranked by completeness, then timestamp. Conducted exclusively within prepared sandboxes (zero access to venue network systems).
          </div>
        </div>
      )}
    </section>
  );
};
