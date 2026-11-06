import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Play, RefreshCw } from 'lucide-react';

interface ZypperTerminalProps {
  onPreRegisterTrigger?: () => void;
}

export const ZypperTerminal: React.FC<ZypperTerminalProps> = ({ onPreRegisterTrigger }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400 space-y-1">
          <p className="text-geeko-400 font-bold">Welcome to openSUSE Tumbleweed // Bengaluru Connect 2027 Shell</p>
          <p>Type <span className="text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono">zypper in opensuse-blr</span> to register or <span className="text-white bg-slate-800 px-1.5 py-0.5 rounded font-mono">help</span> for commands.</p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let res: React.ReactNode = null;

    if (trimmed === 'help') {
      res = (
        <div className="space-y-1 text-slate-300">
          <p className="text-geeko-400 font-bold">AVAILABLE COMMANDS:</p>
          <p>• <span className="text-geeko-300 font-mono">zypper in opensuse-blr</span> : Launch priority pre-registration</p>
          <p>• <span className="text-geeko-300 font-mono">zypper info event</span> : View event stats, dates & venue</p>
          <p>• <span className="text-geeko-300 font-mono">zypper lr</span> : List event repositories (Tracks & workshops)</p>
          <p>• <span className="text-geeko-300 font-mono">geeko</span> : Display openSUSE ASCII Chameleon</p>
          <p>• <span className="text-geeko-300 font-mono">yast</span> : Launch system control overview</p>
          <p>• <span className="text-geeko-300 font-mono">obs</span> : Open Build Service packaging status</p>
          <p>• <span className="text-geeko-300 font-mono">clear</span> : Clear screen</p>
        </div>
      );
    } else if (trimmed === 'clear') {
      setHistory([]);
      return;
    } else if (trimmed.includes('zypper in') || trimmed.includes('zypper install') || trimmed === 'register') {
      res = (
        <div className="space-y-1 text-slate-200">
          <p className="text-geeko-400">Loading repository data...</p>
          <p className="text-slate-400">Reading installed packages...</p>
          <p className="text-white font-semibold">Resolving dependencies for package 'opensuse-bengaluru-connect-2027'...</p>
          <p className="text-geeko-300">Package 'opensuse-bengaluru-connect-2027-1.0.0-1.x86_64' ready to install.</p>
          <p className="text-yellow-400">STATUS: Pre-registration priority queue activated!</p>
          <button 
            onClick={onPreRegisterTrigger}
            className="mt-2 inline-flex items-center gap-2 bg-geeko-500 text-black px-3 py-1 text-xs font-bold font-mono border border-black hover:bg-geeko-400 cursor-pointer"
          >
            [PRESS ENTER OR CLICK HERE TO OPEN PRE-REGISTRATION PASS FORM]
          </button>
        </div>
      );
      if (onPreRegisterTrigger) {
        setTimeout(onPreRegisterTrigger, 600);
      }
    } else if (trimmed === 'zypper info' || trimmed === 'zypper info event' || trimmed === 'info') {
      res = (
        <div className="space-y-1 text-slate-300">
          <p><span className="text-geeko-400 font-mono font-bold">Information for package opensuse-blr-2027:</span></p>
          <p>Repository      : openSUSE-India-Bengaluru-2027</p>
          <p>Name            : opensuse-bengaluru-connect</p>
          <p>Version         : 2027.01-preview</p>
          <p>Arch            : all-developers</p>
          <p>Proposed Dates  : January 2027 (exact dates to be confirmed)</p>
          <p>Venue           : Newton School of Technology, Bengaluru</p>
          <p>Capacity        : 300–400 Attendees</p>
          <p>Admission       : 100% Free (Community Open Access)</p>
          <p>Summary         : 2 Days, 3 Phases, 10-Hour Hackathon & Technical Workshops</p>
        </div>
      );
    } else if (trimmed === 'zypper lr') {
      res = (
        <div className="space-y-1 text-slate-300">
          <p className="text-geeko-400 font-bold"># | Alias               | Name                         | Enabled | GPG Check</p>
          <p>--+---------------------+------------------------------+---------+----------</p>
          <p>1 | phase-01-talks      | Phase 1: Tech Talks & OBS    | Yes     | (r ) Yes </p>
          <p>2 | phase-02-workshops  | Phase 2: YaST, Zypper & openQA| Yes     | (r ) Yes </p>
          <p>3 | phase-03-hackathon  | Phase 3: 10H Sprint Hackathon| Yes     | (r ) Yes </p>
          <p>4 | openSUSE-conf-india | Road to openSUSE Conf India  | Yes     | (r ) Yes </p>
        </div>
      );
    } else if (trimmed === 'geeko') {
      res = (
        <pre className="text-geeko-400 font-mono text-[11px] leading-tight">
{`
          ___
       .-'   \`'.
      /         \\
     |   O       |    Have a lot of fun...
     \\           /    openSUSE India – Bengaluru Connect 2027
      '.       .'
        \`'---'\`
         /   \\
      .-'     \`-.
     /           \\
`}
        </pre>
      );
    } else if (trimmed === 'yast') {
      res = (
        <div className="space-y-1 text-slate-300">
          <p className="text-geeko-400 font-bold">YaST2 Control Center - Event Modules</p>
          <p>✔ [Hardware]  : Newton School of Technology, Bengaluru</p>
          <p>✔ [Software]  : Open Build Service, Zypper, YaST, openQA, Git</p>
          <p>✔ [Security]  : Inclusive Open Source Code of Conduct</p>
          <p>✔ [Support]   : ₹90,000 community allocation for food & hackathon prizes</p>
        </div>
      );
    } else if (trimmed === 'obs') {
      res = (
        <div className="space-y-1 text-slate-300">
          <p className="text-geeko-400 font-bold">Open Build Service (OBS) status: OK</p>
          <p>Target arches: x86_64, aarch64, riscv64</p>
          <p>Project: home:openSUSE:India:Bengaluru2027</p>
          <p>Packages: talks, workshops, hackathon-starter-kits</p>
          <p className="text-geeko-300">All repos building successfully for openSUSE Leap & Tumbleweed.</p>
        </div>
      );
    } else if (trimmed === 'prizes' || trimmed === 'swag') {
      res = (
        <div className="space-y-1 text-slate-300">
          <p className="text-geeko-400 font-bold">Package 'event-rewards-and-swag':</p>
          <p>• Winners    : Mechanical Keyboard, Wireless Mouse, Developer Gifts (Pool Under ₹5,000)</p>
          <p>• Attendees  : Free Official openSUSE T-Shirt (Sizes S/M/L/XL/XXL)</p>
          <p>• Check-in   : Holographic Geeko Sticker Packs & Conference Badges</p>
          <p className="text-geeko-300">Run 'zypper in opensuse-blr' to claim pass and select your T-shirt size.</p>
        </div>
      );
    } else {
      res = (
        <p className="text-rose-400">
          Command '{cmd}' not recognized. Type <span className="underline text-white font-mono">help</span> or <span className="underline text-white font-mono">zypper in opensuse-blr</span>.
        </p>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output: res
      }
    ]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="bg-obsidian-950 border-2 border-slate-700 text-left font-mono text-xs overflow-hidden shadow-[6px_6px_0px_0px_#173f35]">
      {/* Brutalist Titlebar */}
      <div className="bg-slate-900 border-b-2 border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-700"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-700"></span>
            <span className="w-3 h-3 rounded-full bg-geeko-500 inline-block border border-geeko-600"></span>
          </div>
          <span className="text-slate-400 font-mono text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-geeko-400" />
            geeko@bengaluru-connect-2027:~
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="bg-slate-800 px-2 py-0.5 border border-slate-700">bash 5.2</span>
          <button 
            onClick={() => setHistory([])}
            className="text-slate-400 hover:text-white transition-colors"
            title="Reset Terminal"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 h-64 overflow-y-auto terminal-scroll space-y-3 bg-obsidian-950/90 font-mono">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== undefined && (
              <div className="flex items-center gap-2 text-geeko-400">
                <span className="text-slate-500 select-none">geeko@opensuse-blr:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
            )}
            <div className="pl-0">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick chips */}
      <div className="bg-slate-900/80 border-t border-slate-800 px-3 py-1.5 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="text-slate-500 uppercase">Quick run:</span>
        <button
          onClick={() => handleCommand('zypper in opensuse-blr')}
          className="bg-slate-800 hover:bg-geeko-500 hover:text-black text-slate-300 px-2 py-0.5 border border-slate-700 transition-colors"
        >
          zypper in opensuse-blr
        </button>
        <button
          onClick={() => handleCommand('zypper info event')}
          className="bg-slate-800 hover:bg-geeko-500 hover:text-black text-slate-300 px-2 py-0.5 border border-slate-700 transition-colors"
        >
          zypper info event
        </button>
        <button
          onClick={() => handleCommand('geeko')}
          className="bg-slate-800 hover:bg-geeko-500 hover:text-black text-slate-300 px-2 py-0.5 border border-slate-700 transition-colors"
        >
          geeko
        </button>
      </div>

      {/* Command Input line */}
      <form onSubmit={onSubmit} className="border-t-2 border-slate-800 bg-obsidian-900 flex items-center px-4 py-2">
        <span className="text-geeko-400 font-bold mr-2 select-none">geeko@opensuse-blr:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'zypper in opensuse-blr' or 'help'..."
          className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-slate-600"
        />
        <button 
          type="submit"
          className="text-slate-400 hover:text-geeko-400 p-1"
          aria-label="Send command"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
