import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/soundEffects';

interface BootSequenceProps {
  onBootComplete: () => void;
  defaultMode?: 'fast' | 'full';
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onBootComplete, defaultMode = 'full' }) => {
  const [bootStage, setBootStage] = useState<'grub' | 'kernel' | 'done'>('grub');
  const [selectedGrubIdx, setSelectedGrubIdx] = useState(0);
  const [countdown, setCountdown] = useState(4);
  const [logIndex, setLogIndex] = useState(0);

  const grubOptions = [
    { title: "openSUSE Bengaluru Connect 2027 (Live Proposal OS)", desc: "Standard production boot with interactive 18-page proposal" },
    { title: "Geeko Buildathon 20-Hour Engine (Day 1 14:30 - Day 2 10:30)", desc: "Launch with focus on 6 tracks, rules and commit freeze" },
    { title: "Itemized Financial Matrix (₹2,57,840 Envelope)", desc: "Direct budget audit: catering, operations, prizes, contingency" },
    { title: "Hardware Check: Newton School of Technology Venue", desc: "Diagnostic verification of power, Wi-Fi 350+, safety gates" },
    { title: "Geeko Arcade & Midnight Bug Hunt Station", desc: "Interactive QR passport, 4 games, rookie/expert challenge" },
  ];

  const kernelLogs = [
    { prefix: "[  0.000000]", text: "Linux version 6.12.0-geeko-bengaluru-connect (x86_64) (gcc 14.2.1)", status: "info" },
    { prefix: "[  0.041019]", text: "EFI v2.80 by openSUSE India Community Foundation", status: "info" },
    { prefix: "[  0.092102]", text: "Command line: BOOT_IMAGE=/vmlinuz-opensuse-blr root=UUID=2027-01-blr quiet splash", status: "info" },
    { prefix: "[  0.154210]", text: "Memory allocation: 250 Participants (Site working headcount: 280)", status: "info" },
    { prefix: "[  0.220194]", text: "ACPI: Newton School of Technology detected (Sattva Global City, Mysore Rd)", status: "info" },
    { prefix: "[  0.312984]", text: "systemd[1]: Starting systemd 256.4-geeko...", status: "info" },
    { prefix: "[  OK  ]", text: "Mounted /dev/venue (Newton School of Technology - Free College Collaboration).", status: "ok" },
    { prefix: "[  OK  ]", text: "Mounted /dev/network (350+ Device Wi-Fi, cached package mirrors ready).", status: "ok" },
    { prefix: "[  OK  ]", text: "Started Power Circuit Load Balancers (load-tested, cable-guarded).", status: "ok" },
    { prefix: "[  OK  ]", text: "Registered Organizers: Divyanshu Prakash · Dushyant Acharya · Rithull Raj Kallat.", status: "ok" },
    { prefix: "[  OK  ]", text: "Initialized Geeko Buildathon (20-Hour Clock: Day 1 14:30 to Day 2 10:30).", status: "ok" },
    { prefix: "[  OK  ]", text: "Loaded 6 Innovation Tracks (Terminal Titans, Root Access, GeekoOps...).", status: "ok" },
    { prefix: "[  OK  ]", text: "Initialized 83-Team Demo Arena & 6 Parallel Judging Lanes.", status: "ok" },
    { prefix: "[  OK  ]", text: "Activated QR Geeko Quest & Midnight Bug Hunt (Rookie & Expert Sandboxes).", status: "ok" },
    { prefix: "[  OK  ]", text: "Verified Itemized Catering: 6 Meal Slots for 280 Servings (₹1,20,400).", status: "ok" },
    { prefix: "[  OK  ]", text: "Verified Operations, Security & 25 Reward T-Shirts (₹64,000).", status: "ok" },
    { prefix: "[  OK  ]", text: "Verified Conditional Cash Prizes Pool (₹50,000) + 10% Reserve (₹23,440).", status: "ok" },
    { prefix: "[  OK  ]", text: "Locked Total Planning Envelope: ₹2,57,840.", status: "ok" },
    { prefix: "[  OK  ]", text: "Safety Gates Armed: T-21 Day Approval & T-7 Day Headcount Freeze.", status: "ok" },
    { prefix: "[  OK  ]", text: "Reached target Graphical Interface: openSUSE Bengaluru Connect 2027.", status: "ok" },
    { prefix: "[  OK  ]", text: "Launching Interactive Proposal Workspace...", status: "launch" },
  ];

  // Fast mode skips countdown
  useEffect(() => {
    if (defaultMode === 'fast') {
      onBootComplete();
    }
  }, [defaultMode, onBootComplete]);

  // Countdown timer in GRUB
  useEffect(() => {
    if (bootStage !== 'grub') return;
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          startKernelBoot();
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [bootStage]);

  // Handle keyboard navigation in GRUB
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (bootStage === 'grub') {
        if (e.key === 'ArrowDown') {
          soundManager.playKeyClick();
          setSelectedGrubIdx((prev) => (prev + 1) % grubOptions.length);
        } else if (e.key === 'ArrowUp') {
          soundManager.playKeyClick();
          setSelectedGrubIdx((prev) => (prev - 1 + grubOptions.length) % grubOptions.length);
        } else if (e.key === 'Enter') {
          soundManager.playBootBeep();
          startKernelBoot();
        } else if (e.key === 'Escape') {
          skipBoot();
        }
      } else if (bootStage === 'kernel') {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
          skipBoot();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bootStage]);

  const startKernelBoot = () => {
    setBootStage('kernel');
    soundManager.playBootBeep();
  };

  const skipBoot = () => {
    soundManager.playSuccess();
    setBootStage('done');
    onBootComplete();
  };

  // Stream kernel logs
  useEffect(() => {
    if (bootStage !== 'kernel') return;

    if (logIndex < kernelLogs.length) {
      const delay = logIndex < 6 ? 90 : 65;
      const timer = setTimeout(() => {
        soundManager.playKeyClick();
        setLogIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        soundManager.playSuccess();
        setBootStage('done');
        onBootComplete();
      }, 400);
      return () => clearTimeout(finishTimer);
    }
  }, [bootStage, logIndex]);

  if (bootStage === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#06030f] text-[#f0e8ff] font-mono select-none overflow-hidden flex flex-col justify-between p-4 md:p-8">
      {/* Background CRT scanlines effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#153828_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

      {bootStage === 'grub' ? (
        <div className="relative z-10 max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between">
          {/* Header Title */}
          <div>
            <div className="border border-geeko-500/30 bg-[#0c1813]/80 p-4 rounded-t-lg shadow-[0_0_20px_rgba(115,186,37,0.15)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-geeko-500"></div>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-geeko-400">
                  GNU GRUB version 2.06-openSUSE
                </span>
              </div>
              <span className="text-[10px] md:text-xs text-slate-400">
                UEFI BIOS 2027.01 // BLR-CONNECT
              </span>
            </div>

            {/* ASCII Chameleon & Event Tag */}
            <div className="border-x border-geeko-500/30 bg-[#08120e]/90 p-4 text-center">
              <pre className="text-[9px] sm:text-[11px] leading-[1.1] text-geeko-400 font-mono inline-block text-left opacity-90">
{`   _____ ____  ______ _   __ _____ __  _______ ______ 
  / ___// __ \\/ ____/ | / // ___// / / / ___// ____/ 
  \\__ \\/ / / / __/ /  |/ / \\__ \\/ / / /\\__ \\/ __/    
 ___/ / /_/ / /___/ /|  / ___/ / /_/ /___/ / /___    
/____/\\____/_____/_/ |_/ /____/\\____//____/_____/    
  B E N G A L U R U   C O N N E C T   2 0 2 7`}
              </pre>
              <div className="mt-2 text-xs text-slate-300 font-mono tracking-wide">
                Two days of open-source learning, collaboration and building.
              </div>
              <div className="text-[11px] text-geeko-400 font-mono mt-0.5 font-bold">
                Learn. Build. Contribute. · Newton School of Technology, Bengaluru
              </div>
            </div>

            {/* GRUB Menu Box */}
            <div className="border border-geeko-500/40 bg-[#050b08]/95 p-3 md:p-6 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
              <p className="text-xs text-slate-400 mb-3">
                Use the ↑ and ↓ keys or click to select which entry is highlighted. Press enter to boot or ESC to bypass:
              </p>

              <div className="space-y-1.5">
                {grubOptions.map((opt, idx) => {
                  const isSelected = selectedGrubIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedGrubIdx(idx);
                        soundManager.playKeyClick();
                        startKernelBoot();
                      }}
                      className={`w-full text-left p-2.5 md:p-3 text-xs md:text-sm font-mono transition-all flex items-start gap-3 rounded ${
                        isSelected
                          ? 'bg-geeko-500 text-obsidian-950 font-bold shadow-[0_0_15px_rgba(115,186,37,0.6)]'
                          : 'bg-[#091712]/50 text-slate-300 hover:bg-[#0f2820]/70 hover:text-white border border-transparent hover:border-geeko-500/20'
                      }`}
                    >
                      <span className="font-mono">{isSelected ? '►' : ' '}</span>
                      <div className="flex-1">
                        <div>{opt.title}</div>
                        <div className={`text-[10px] md:text-xs font-normal mt-0.5 ${isSelected ? 'text-emerald-950' : 'text-slate-400'}`}>
                          {opt.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Navigation Bar */}
          <div className="border border-geeko-500/30 bg-[#08120e] p-3 md:p-4 rounded-b-lg flex flex-wrap items-center justify-between gap-3 text-[11px] md:text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-geeko-400 animate-ping"></span>
              <span>
                Automatic boot in <strong className="text-geeko-300 font-bold">{countdown}s</strong>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  soundManager.toggleSound();
                }}
                className="hover:text-geeko-400 text-slate-300 underline underline-offset-4 cursor-pointer"
              >
                Toggle 8-bit Audio
              </button>
              <button
                onClick={skipBoot}
                className="px-3 py-1 bg-geeko-500/20 hover:bg-geeko-500 text-geeko-300 hover:text-obsidian-950 font-bold border border-geeko-500/50 rounded transition-all cursor-pointer"
              >
                Skip Boot [ESC] ⚡
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Kernel Boot Terminal Stream */
        <div className="relative z-10 max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between">
          <div className="border border-emerald-500/30 bg-[#050b08]/95 p-4 md:p-6 rounded-lg h-[80vh] flex flex-col shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-3">
              <div className="text-xs text-geeko-400 font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYSTEMD KERNEL BOOT LOADER — BENGALURU CONNECT 2027</span>
              </div>
              <button
                onClick={skipBoot}
                className="text-[10px] md:text-xs bg-emerald-950 hover:bg-emerald-800 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40"
              >
                Skip [Space] ⚡
              </button>
            </div>

            {/* Scrolling log text */}
            <div className="flex-1 overflow-y-auto font-mono text-[11px] md:text-xs space-y-1.5 terminal-scroll pr-2">
              {kernelLogs.slice(0, logIndex).map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 leading-relaxed">
                  {log.status === 'ok' ? (
                    <span className="text-emerald-400 font-bold select-none">[  OK  ]</span>
                  ) : log.status === 'launch' ? (
                    <span className="text-geeko-400 font-bold animate-pulse select-none">[ READY ]</span>
                  ) : (
                    <span className="text-slate-500 select-none">{log.prefix}</span>
                  )}
                  <span className={log.status === 'ok' ? 'text-slate-200' : log.status === 'launch' ? 'text-geeko-300 font-bold' : 'text-slate-400'}>
                    {log.text}
                  </span>
                </div>
              ))}
              <div className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1"></div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="mt-3 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span>Boot progress:</span>
                <span className="text-emerald-400 font-bold">
                  {Math.round((logIndex / kernelLogs.length) * 100)}%
                </span>
              </div>
              <div className="w-48 bg-emerald-950/60 rounded-full h-1.5 overflow-hidden border border-emerald-500/20">
                <div
                  className="bg-geeko-400 h-full transition-all duration-100 ease-out"
                  style={{ width: `${(logIndex / kernelLogs.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
