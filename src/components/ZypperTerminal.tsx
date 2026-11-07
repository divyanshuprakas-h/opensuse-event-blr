import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, RefreshCw, Layers, FileText } from 'lucide-react';

interface ZypperTerminalProps {
  onPreRegisterTrigger?: () => void;
  onRegisterHackathon?: () => void;
}

export const ZypperTerminal: React.FC<ZypperTerminalProps> = ({
  onPreRegisterTrigger,
  onRegisterHackathon,
}) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'boot' | 'tracks' | 'ascii'>('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400 space-y-1">
          <p className="text-geeko-400 font-bold">openSUSE Tumbleweed // Bengaluru Connect 2027 Console</p>
          <p className="text-xs">
            Type <span className="text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono">zypper in opensuse-blr</span> to register or <span className="text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono">help</span>.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'terminal') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let res: React.ReactNode = null;

    if (trimmed === 'help') {
      res = (
        <div className="space-y-1 text-slate-300 text-xs">
          <p className="text-geeko-400 font-bold">AVAILABLE COMMANDS:</p>
          <p>• <span className="text-geeko-300 font-mono">zypper in opensuse-blr</span> : Launch priority pass registration</p>
          <p>• <span className="text-geeko-300 font-mono">proposal</span> : Launch 18-page proposal OS &amp; GRUB bootloader</p>
          <p>• <span className="text-geeko-300 font-mono">zypper info event</span> : View 250 builder capacity, venue &amp; dates</p>
          <p>• <span className="text-geeko-300 font-mono">zypper lr</span> : List 20H Buildathon repositories &amp; tracks</p>
          <p>• <span className="text-geeko-300 font-mono">geeko</span> : Display openSUSE ASCII Chameleon mascot</p>
          <p>• <span className="text-geeko-300 font-mono">clear</span> : Clear screen</p>
        </div>
      );
    } else if (trimmed === 'proposal' || trimmed === 'boot' || trimmed === 'grub') {
      res = (
        <div className="space-y-1.5 text-slate-200 text-xs">
          <p className="text-geeko-400 font-bold">Booting openSUSE Bengaluru Connect 2027 Proposal OS...</p>
          <p className="text-slate-300">18 sections verified: 20H Buildathon, 6 tracks, itemized ₹2,57,840 budget matrix.</p>
          <a
            href={`${import.meta.env.BASE_URL}proposal/`}
            className="mt-2 inline-flex items-center gap-2 bg-geeko-500 text-obsidian-950 px-3 py-1.5 text-xs font-bold font-mono rounded hover:bg-geeko-400 cursor-pointer shadow-md"
          >
            [LAUNCH INTERACTIVE PROPOSAL OS &amp; BOOTLOADER →]
          </a>
        </div>
      );
    } else if (trimmed === 'clear') {
      setHistory([]);
      return;
    } else if (trimmed.includes('zypper in') || trimmed.includes('zypper install') || trimmed === 'register') {
      res = (
        <div className="space-y-1 text-slate-200 text-xs">
          <p className="text-geeko-400">Loading repository data...</p>
          <p className="text-slate-400">Reading installed packages...</p>
          <p className="text-white font-semibold">Resolving dependencies for 'opensuse-bengaluru-connect-2027'...</p>
          <p className="text-geeko-300">Package 'opensuse-blr-2027-1.0.0-1.x86_64' ready to install.</p>
          <p className="text-yellow-400 font-bold">STATUS: Priority pass queue activated (Strict 250 Cap)!</p>
          <button 
            onClick={onPreRegisterTrigger}
            className="mt-2 inline-flex items-center gap-1.5 bg-geeko-500 text-black px-3 py-1.5 text-xs font-bold font-mono rounded hover:bg-geeko-400 cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>[CLICK HERE TO GENERATE DIGITAL PASS]</span>
          </button>
        </div>
      );
      if (onPreRegisterTrigger) {
        setTimeout(onPreRegisterTrigger, 600);
      }
    } else if (trimmed === 'zypper info' || trimmed === 'zypper info event' || trimmed === 'info') {
      res = (
        <div className="space-y-1 text-slate-300 text-xs">
          <p><span className="text-geeko-400 font-mono font-bold">Package: opensuse-bengaluru-connect-2027</span></p>
          <p>Repository      : openSUSE-India-Bengaluru-2027</p>
          <p>Target Dates    : January 2027 (Two consecutive days)</p>
          <p>Venue           : Newton School of Technology, Bengaluru</p>
          <p>Capacity        : 250 Builders (Site Working Headcount: 280)</p>
          <p>Signature Event : 20-Hour Geeko Buildathon (Day 1 14:30 → Day 2 10:30)</p>
          <p>Budget Envelope : ₹2,57,840 (Direct ₹2,34,400 + 10% Reserve ₹23,440)</p>
          <p>Admission       : 100% Free FOSS Community Gathering</p>
        </div>
      );
    } else if (trimmed === 'zypper lr' || trimmed === 'tracks') {
      res = (
        <div className="space-y-1 text-slate-300 text-xs">
          <p className="text-geeko-400 font-bold"># | Arena Track Code    | Focus &amp; Difficulty               | Status</p>
          <p>--+---------------------+------------------------------------+-------</p>
          <p>1 | 01. Terminal Titans | Linux CLI, Zypper helper, TUI      | OPEN  </p>
          <p>2 | 02. Root Access     | Security, PAM, AppArmor hardening  | OPEN  </p>
          <p>3 | 03. GeekoOps        | DevOps, OBS dashboard, openQA REST | OPEN  </p>
          <p>4 | 04. Desktop Reboot  | Linux desktop UX, a11y, launchers  | OPEN  </p>
          <p>5 | 05. Upstream Heroes | Real Bugzilla &amp; GitHub FOSS PRs    | OPEN  </p>
          <p>6 | 06. Linux Next?     | Community impact, mesh &amp; AI triage | OPEN  </p>
        </div>
      );
    } else if (trimmed === 'geeko') {
      res = (
        <pre className="text-geeko-400 font-mono text-[10px] leading-tight">
{`
          ___
       .-"   "-.
     .'         '.
    /   O     O   \\     openSUSE India
   :               :    Have a lot of fun...
   |   \\_______/   |    Bengaluru Connect '27
    \\             /
     '.         .'
       '-.....-'
`}
        </pre>
      );
    } else {
      res = (
        <p className="text-rose-400 text-xs">
          Command not found: '{trimmed}'. Type <span className="text-white underline">help</span> for available commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: res }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputVal.trim()) {
        handleCommand(inputVal);
      }
    }
  };

  return (
    <div className="rounded-2xl border border-geeko-500/30 bg-[#060c09] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(115,186,37,0.12)] overflow-hidden font-mono flex flex-col h-[400px]">
      
      {/* Sleek Dribbble Window Chrome / Tabs Bar */}
      <div className="bg-[#040806] border-b border-geeko-500/20 px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-geeko-500"></div>
          <span className="text-[11px] text-slate-400 ml-2 font-bold hidden sm:inline">
            geeko@tumbleweed:~
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 text-[11px]">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            zypper.sh
          </button>
          <button
            onClick={() => setActiveTab('tracks')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === 'tracks'
                ? 'bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            tracks.json
          </button>
          <button
            onClick={() => setActiveTab('boot')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === 'boot'
                ? 'bg-geeko-500/20 text-geeko-300 font-bold border border-geeko-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            systemd.log
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      {activeTab === 'terminal' && (
        <div className="flex-1 p-4 overflow-y-auto terminal-scroll text-xs text-slate-200 flex flex-col justify-between">
          <div className="space-y-3">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.command && (
                  <div className="flex items-center gap-2 text-geeko-400 font-semibold">
                    <span className="text-slate-500 font-bold select-none">&gt;</span>
                    <span>{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt input row */}
          <div className="pt-3 border-t border-geeko-500/20 flex items-center gap-2">
            <span className="text-geeko-400 font-bold select-none">&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type zypper in opensuse-blr, proposal, info, clear..."
              className="flex-1 bg-transparent text-white focus:outline-none text-xs placeholder:text-slate-600 font-mono"
              autoFocus
            />
            <button
              onClick={() => inputVal.trim() && handleCommand(inputVal)}
              className="px-2.5 py-1 rounded bg-[#0b261b] hover:bg-geeko-500 hover:text-obsidian-950 text-geeko-300 border border-geeko-500/30 text-[11px] font-bold transition-all cursor-pointer"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab: Tracks JSON */}
      {activeTab === 'tracks' && (
        <div className="flex-1 p-4 overflow-y-auto terminal-scroll text-xs text-slate-300 space-y-2">
          <div className="text-[11px] text-geeko-400 font-bold">// 6 GEEKO BUILDATHON TRACKS SPEC</div>
          <pre className="text-[11px] text-emerald-300 font-mono leading-relaxed">
{`{
  "buildathon": "20 Hours Overnight",
  "window": "Day 1 14:30 to Day 2 10:30",
  "tracks": [
    { "id": "01", "name": "Terminal Titans", "domain": "CLI & Productivity" },
    { "id": "02", "name": "Root Access", "domain": "Security & PAM" },
    { "id": "03", "name": "GeekoOps", "domain": "OBS & openQA Infrastructure" },
    { "id": "04", "name": "Desktop Reboot", "domain": "Desktop UX & a11y" },
    { "id": "05", "name": "Upstream Heroes", "domain": "Real FOSS Upstream PRs" },
    { "id": "06", "name": "Linux Next?", "domain": "Original Open Innovation" }
  ],
  "prizes": { "1st": "₹25,000", "2nd": "₹15,000", "3rd": "₹10,000", "side": "₹6,000" }
}`}
          </pre>
        </div>
      )}

      {/* Tab: Systemd Boot Log */}
      {activeTab === 'boot' && (
        <div className="flex-1 p-4 overflow-y-auto terminal-scroll text-xs text-slate-300 space-y-1.5 font-mono">
          <div className="text-[11px] text-geeko-400 font-bold">// SYSTEMD KERNEL BOOTLOG TELEMETRY</div>
          <p className="text-slate-400">[  0.000000] Linux version 6.12.0-geeko-bengaluru-connect (x86_64)</p>
          <p className="text-emerald-400 font-bold">[  OK  ] Mounted /dev/venue (Newton School of Technology, Bengaluru).</p>
          <p className="text-emerald-400 font-bold">[  OK  ] Configured Wi-Fi Network Interface for 350+ Devices.</p>
          <p className="text-emerald-400 font-bold">[  OK  ] Initialized 20-Hour Geeko Buildathon Engine (83 Team Slots).</p>
          <p className="text-emerald-400 font-bold">[  OK  ] Validated Itemized Budget Matrix: ₹2,57,840.</p>
          <p className="text-emerald-400 font-bold">[  OK  ] Activated QR Passport Quest &amp; Midnight Bug Hunt Sandboxes.</p>
          <div className="pt-2">
            <a
              href={`${import.meta.env.BASE_URL}proposal/`}
              className="text-geeko-300 hover:text-white underline font-bold"
            >
              Open Full Interactive Bootloader &amp; Proposal Deck →
            </a>
          </div>
        </div>
      )}

      {/* Quick Action Chips Footer */}
      <div className="bg-[#040806] border-t border-geeko-500/20 px-3 py-2 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400">
        <span className="font-bold text-slate-500">TRY:</span>
        {['zypper in opensuse-blr', 'proposal', 'info', 'tracks', 'geeko'].map((c) => (
          <button
            key={c}
            onClick={() => handleCommand(c)}
            className="px-2 py-0.5 rounded bg-[#091510] text-geeko-300 hover:bg-geeko-500 hover:text-black border border-geeko-500/20 transition-colors cursor-pointer"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};
