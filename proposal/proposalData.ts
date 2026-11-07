export interface BuildathonTrack {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  level: 'Beginner to Intermediate' | 'Intermediate to Advanced' | 'All Levels';
  summary: string;
  ideas: string[];
  techFocus: string[];
  icon: string;
}

export interface AgendaSlot {
  time: string;
  title: string;
  notes: string;
  category: 'Registration' | 'Keynote/Talk' | 'Lab' | 'Buildathon' | 'Meal' | 'Judging' | 'Ceremony' | 'Rest';
  highlight?: boolean;
}

export interface BudgetLineItem {
  item: string;
  qty: number | string;
  unitRate: number;
  total: number;
  notes?: string;
}

export interface SponsorTier {
  role: string;
  target: number;
  targetFormatted: string;
  deliverables: string;
  confirmed?: boolean;
}

export const PROPOSAL_METADATA = {
  documentTitle: "openSUSE INDIA / FINAL PROPOSAL FOR REVIEW",
  eventName: "Bengaluru Connect 2027",
  edition: "January 2027",
  version: "v1.0.0 (Planning Proposal - 07 Nov 2026)",
  tagline: "Two days of open-source learning, collaboration and building.",
  motto: "Learn. Build. Contribute.",
  dates: "Two consecutive days in January 2027 (Exact dates TBA)",
  venue: "Newton School of Technology, Bengaluru",
  venueSubtext: "College collaboration; venue and basic facilities free",
  venueAddress: "P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Bengaluru 560059",
  communityCap: 250,
  headcountWorking: 280,
  signatureEvent: "Geeko Buildathon: 20 hours (Day 1 2:30 PM to Day 2 10:30 AM)",
  organizers: [
    {
      name: "Divyanshu Prakash",
      role: "Event Coordination & Budget Lead",
      responsibility: "Event coordination, community/funder liaison, website & budget register",
      email: "divyanshuprakash914@gmail.com",
      status: "Core Lead"
    },
    {
      name: "Dushyant Acharya",
      role: "Program & Buildathon Lead",
      responsibility: "Program, speaker/mentor scheduling, Buildathon rules & judging",
      email: "dushyant@example.com",
      status: "Core Lead"
    },
    {
      name: "Rithull Raj Kallat",
      role: "Logistics, Venue & Safety Lead",
      responsibility: "Venue liaison, volunteer rosters, catering, logistics & safety readiness",
      email: "rithull@example.com",
      status: "Core Lead"
    }
  ],
  status: "Decision-ready plan, conditional delivery. Venue, internet and basic facilities provided at no charge.",
  fundingGap: 257840,
  totalBudget: 257840
};

export const DECISION_STATUS = [
  {
    decision: "Program Design",
    position: "Finalized planning format from organizer discussions; 3 talks, 2 parallel labs, 20-hour Buildathon, every-team expo & 6-finalist stage pitches. Session owners & speakers to be recruited."
  },
  {
    decision: "Date and Venue",
    position: "Newton School of Technology, Bengaluru, in collaboration with the college: venue, internet and basic facilities at no charge. January 2027 dates and overnight access remain to be confirmed."
  },
  {
    decision: "Budget Envelope",
    position: "Base planning envelope Rs. 2,57,840 including Rs. 50,000 conditional cash prizes and 10% contingency (Rs. 23,440). Internal adoption remains provisional approval."
  },
  {
    decision: "Funding Strategy",
    position: "Seeking cash and in-kind sponsors. College support is in-kind; no cash sponsorship is confirmed. Current funding gap: Rs. 2,57,840."
  },
  {
    decision: "Delivery Dependencies",
    position: "Written venue and overnight approval, adequate funding, catering, security and emergency arrangements before public confirmation."
  }
];

export const GOALS_MEASURES = [
  {
    goal: "Introduce Linux & openSUSE",
    measure: "Up to 250 attendees; optional entry/exit confidence survey; 100 Starter Lab completions targeted.",
    icon: "terminal"
  },
  {
    goal: "Turn Learning into Practice",
    measure: "250 overnight builders in base case; up to 83 teams of 3–4; target 60+ valid project submissions.",
    icon: "code"
  },
  {
    goal: "Create Community Value",
    measure: "Every submitting team receives expo space; target 10 documented upstream submissions or community-useful follow-ups.",
    icon: "git-pull-request"
  },
  {
    goal: "Build Lasting Participation",
    measure: "Publish opt-in project directory; host a contributor follow-up within 30 days.",
    icon: "users"
  },
  {
    goal: "Deliver Responsibly",
    measure: "Meal counts reconciled, shift coverage maintained and final expense report completed within 14 days.",
    icon: "shield-check"
  }
];

export const BUILDATHON_TRACKS: BuildathonTrack[] = [
  {
    id: "track-1",
    num: "01",
    title: "Terminal Titans",
    subtitle: "Linux CLI and Productivity",
    level: "Beginner to Intermediate",
    summary: "Build a useful command-line tool: file organizer, terminal tutor, backup utility or Zypper helper.",
    ideas: ["Interactive Zypper helper / SAT solver visualizer", "Terminal onboarding & interactive Linux command tutor", "Btrfs snapshot audit & automated backup CLI", "Dotfiles synchronizer and lightweight shell profiler"],
    techFocus: ["Bash / Zsh", "Rust / Go / Python", "CLI TUI (Textual/Ratatui)", "Linux Syscalls"],
    icon: "terminal"
  },
  {
    id: "track-2",
    num: "02",
    title: "Root Access",
    subtitle: "Linux Security and Privacy",
    level: "Intermediate to Advanced",
    summary: "Create a defensive permissions auditor, suspicious-login explainer or hardening assistant. Use only authorized sandbox systems.",
    ideas: ["Defensive Linux permissions & sudoers policy auditor", "Failed SSH / PAM auth anomaly detection & explainer", "AppArmor / SELinux profile generator for openSUSE", "Firewall & open socket hardening assistant with TUI alerts"],
    techFocus: ["PAM / Auth logs", "AppArmor / SELinux", "iptables / nftables", "Sandbox containment"],
    icon: "shield"
  },
  {
    id: "track-3",
    num: "03",
    title: "GeekoOps",
    subtitle: "Automation, DevOps & Infrastructure",
    level: "Intermediate to Advanced",
    summary: "Improve builds, tests, packaging or deployment: OBS status dashboard, openQA explorer or container helper.",
    ideas: ["Open Build Service (OBS) status & build queue monitor", "openQA automated test result inspector & triage tool", "MicroOS / transactional-update container deployment helper", "Podman / distrobox integration dashboard for local dev"],
    techFocus: ["OBS API", "openQA REST", "Podman / Containerfile", "MicroOS / Transactional Updates"],
    icon: "cpu"
  },
  {
    id: "track-4",
    num: "04",
    title: "Desktop Reboot",
    subtitle: "Linux Desktop & User Experience",
    level: "All Levels",
    summary: "Improve onboarding, accessibility or everyday desktop use. Examples: accessible launcher, package discovery or setup assistant.",
    ideas: ["Accessible system tray launcher with high contrast & screen-reader aids", "YaST software center discovery frontend for beginners", "First-boot setup assistant for fresh openSUSE Tumbleweed installs", "Desktop widget displaying system health, Snapper backups & updates"],
    techFocus: ["KDE Plasma / Qt6", "GNOME / GTK4", "Desktop Entry Specs", "Accessibility (a11y) APIs"],
    icon: "monitor"
  },
  {
    id: "track-5",
    num: "05",
    title: "Upstream Heroes",
    subtitle: "Real Open-Source Contributions",
    level: "All Levels",
    summary: "Address an existing issue with code, documentation, tests, translations or accessibility. A submitted contribution qualifies without maintainer merge.",
    ideas: ["Fix reported Bugzilla / GitHub issues in openSUSE packages", "Translate openSUSE documentation & YaST modules to Indian languages", "Write end-to-end integration tests for openQA test suites", "Submit upstream documentation polish & tutorial improvements"],
    techFocus: ["Git workflows", "Bugzilla / GitHub", "Gettext (PO files)", "Upstream PRs & RFCs"],
    icon: "git-merge"
  },
  {
    id: "track-6",
    num: "06",
    title: "What Does Linux Need Next?",
    subtitle: "Open Innovation & Community Impact",
    level: "All Levels",
    summary: "Identify a real Linux/openSUSE community need and build an original response. Explain the users, evidence of need and measurable value.",
    ideas: ["Local mesh peer-to-peer package mirror distribution", "Hardware telemetry & battery optimizer for modern laptops", "FOSS classroom management suite running on openSUSE Leap", "AI-assisted man-page explainer with local offline LLM"],
    techFocus: ["Original Design", "Evidence of Need", "Measurable Impact", "Community Architecture"],
    icon: "sparkles"
  }
];

export const DAY1_AGENDA: AgendaSlot[] = [
  { time: "09:00 – 09:30", title: "Check-in & QR Passport Activation", notes: "Collect credentials, digital QR passport activation and welcome refreshments.", category: "Registration" },
  { time: "09:30 – 09:45", title: "Welcome & openSUSE Safety Briefing", notes: "Official opening remarks, venue code of conduct, overnight guidelines & access parameters.", category: "Ceremony" },
  { time: "09:45 – 10:15", title: "Talk 1: Linux Unlocked: Beyond Windows & macOS", notes: "Keynote on Linux ecosystem autonomy, architecture, and why open-source matters.", category: "Keynote/Talk" },
  { time: "10:15 – 10:45", title: "Talk 2: Inside openSUSE: From Desktop to Developer Tools", notes: "Deep dive into Tumbleweed, Leap, MicroOS, YaST, Zypper and Snapper snapshots.", category: "Keynote/Talk" },
  { time: "10:45 – 11:15", title: "Talk 3: From User to Contributor: Building for Open Source", notes: "Guidance on entering upstream FOSS communities, contribution etiquette and tooling.", category: "Keynote/Talk" },
  { time: "11:15 – 11:30", title: "Coffee Break & Geeko Arcade Open", notes: "Refreshments; Geeko Arcade & Quest stations open for casual participation.", category: "Meal" },
  { time: "11:30 – 13:00", title: "Parallel Starter Lab / Idea Lab & Team Formation", notes: "Lab A: Hands-on Zypper & YaST navigation; Lab B: Track brainstorming & team formation for up to 83 teams.", category: "Lab", highlight: true },
  { time: "13:00 – 14:00", title: "Networking Lunch (All 280 Registered Attendees & Crew)", notes: "Full catering for 250 participants + 30 crew/speakers; mentor matchmaking.", category: "Meal" },
  { time: "14:00 – 14:20", title: "Buildathon Briefing: Tracks, Scoring & Mentors", notes: "Official walkthrough of 6 tracks, scoring rubric, commit freeze rules & submission portal.", category: "Ceremony" },
  { time: "14:20 – 14:30", title: "Team Readiness & First Commit Preparation", notes: "Repo initialization, README checks, licensing declarations and countdown.", category: "Ceremony" },
  { time: "14:30", title: "Official Build Start & First Commit Ceremony", notes: "20-Hour Hackathon clock officially starts! Git commit #1 stamped.", category: "Buildathon", highlight: true },
  { time: "14:30 – 17:00", title: "Build Sprint 1 & Mentor Desk Active", notes: "Teams code initial prototypes; mentors circulate; optional Arcade & Quest stations open.", category: "Buildathon" },
  { time: "17:00 – 17:30", title: "Evening Refreshments & Tea/Snacks", notes: "Evening tea and snacks served for all builders and working crew; build continues uninterrupted.", category: "Meal" },
  { time: "17:30 – 18:30", title: "Build Sprint 2 & Technical Mentor Check-ins", notes: "Architecture validation with track mentors; resolve blockers.", category: "Buildathon" },
  { time: "18:30 – 19:30", title: "Hot Dinner Service (Overnight Cohort)", notes: "Staggered dinner service for 250 overnight builders + 30 crew; dietary needs accommodated.", category: "Meal" },
  { time: "19:30 – 23:00", title: "Night Sprint & Optional Progress Milestones", notes: "Focused project work; quiet rest space available for rotation.", category: "Buildathon" },
  { time: "23:00 – 23:30", title: "Late-Night Snacks & Warm Drinks", notes: "Quiet refreshment service to sustain overnight builders.", category: "Meal" },
  { time: "23:30 – 00:00", title: "Midnight Check & Safety Shift Handover", notes: "Staff shift handover; security check; overnight rest area monitored.", category: "Rest" }
];

export const DAY2_AGENDA: AgendaSlot[] = [
  { time: "00:00 – 01:00", title: "Quiet Midnight Build & Mentor Rotation", notes: "Deep focus period with rotating mentor availability.", category: "Buildathon" },
  { time: "01:00 – 01:30", title: "Midnight Bug Hunt (Optional Individual Event)", notes: "30-minute side competition: Rookie (shell script fix) & Expert (sandbox triage). Small cash rewards.", category: "Keynote/Talk", highlight: true },
  { time: "01:30 – 06:30", title: "Quiet Build & Supervised Rest Space", notes: "Overnight coding and managed rest zones. Staffed help and safety desk on continuous duty.", category: "Rest" },
  { time: "06:30 – 07:30", title: "Sunrise Breakfast Service", notes: "Hot breakfast served for overnight builders and crew to power the final stretch.", category: "Meal" },
  { time: "07:30 – 09:30", title: "Ship at Sunrise: Final Sprint & Demo Prep", notes: "Final code polish, test passes, documentation, screenshots and live demo rehearsals.", category: "Buildathon" },
  { time: "09:30 – 10:30", title: "Submission Support & Final Git Verification", notes: "Submission portal guidance; frozen repository commit verification; no extensions permitted.", category: "Buildathon" },
  { time: "10:30", title: "Hard Submission Deadline (Commit Freeze)", notes: "20-Hour Hackathon concludes exactly. Repositories locked for judging.", category: "Ceremony", highlight: true },
  { time: "10:30 – 11:00", title: "Break & Demo Arena Setup", notes: "Teams occupy their numbered expo tables; 6 judging panels briefed.", category: "Registration" },
  { time: "11:00 – 13:00", title: "Every-Team Demo Arena (6 Parallel Judging Lanes)", notes: "Up to 83 teams present live to 6 dual-judge panels (7m demo + buffer) plus People's Choice voting.", category: "Judging", highlight: true },
  { time: "13:00 – 13:15", title: "Top Six Finalists Announced", notes: "Judges aggregate normalized scores; 6 finalist teams selected for stage presentations.", category: "Ceremony" },
  { time: "13:15 – 14:15", title: "Grand Finalist Stage Pitches", notes: "6 teams pitch on the main stage: 7-minute live demo + 3-minute Q&A before all attendees and judges.", category: "Judging", highlight: true },
  { time: "14:15 – 14:30", title: "Judges Deliberation & Community Highlights", notes: "Panel scores finalized; celebration of community stats and openSUSE milestones.", category: "Ceremony" },
  { time: "14:30 – 14:35", title: "Five-Minute Event Highlight Reel", notes: "Cinematic recap video capturing moments from the 20 hours.", category: "Ceremony" },
  { time: "14:35 – 14:50", title: "Awards Ceremony & Trophy Presentation", notes: "1st (₹25k), 2nd (₹15k), 3rd (₹10k) prizes awarded; trophies, certificates & reward T-shirts distributed.", category: "Ceremony", highlight: true },
  { time: "14:50 – 14:55", title: "Next Steps in openSUSE Community", notes: "Invitation to upstream project follow-ups, Discord/Matrix channels and regional sprints.", category: "Ceremony" },
  { time: "14:55 – 15:00", title: "Grand Community Photograph & Farewell", notes: "Group photo with all builders, mentors, volunteers and organizers.", category: "Ceremony" },
  { time: "15:00 – 16:00", title: "Participant Exit, Cleanup & Venue Handover", notes: "Equipment returns, station teardown and formal handover back to Newton School of Technology.", category: "Rest" }
];

export const JUDGING_RUBRIC = [
  { criterion: "Real-World Problem & Usefulness", weight: 25, description: "Addresses an actual pain point in developer workflow, desktop usability, or systems admin with tangible real-world value." },
  { criterion: "Technical Execution & Quality", weight: 25, description: "Clean architecture, functional implementation, robust error handling, tests, and working code delivered during the 20h window." },
  { criterion: "Linux & openSUSE Relevance", weight: 20, description: "Leverages Linux capabilities, integrates with openSUSE tools (Zypper, YaST, OBS, Snapper, MicroOS) or advances FOSS ecosystem." },
  { criterion: "Creativity & Originality", weight: 15, description: "Novel angle, clever engineering or fresh UI/UX thinking compared to existing standard solutions." },
  { criterion: "Documentation, Demo & Future Potential", weight: 15, description: "High-quality README, open-source license, reproducible setup instructions, engaging live demo and realistic maintenance plan." }
];

export const CATERING_BUDGET: BudgetLineItem[] = [
  { item: "Welcome Refreshments (Day 1 Morning)", qty: 280, unitRate: 30, total: 8400, notes: "Tea, coffee, biscuits for 250 builders + 30 staff" },
  { item: "Day 1 Buffet Lunch", qty: 280, unitRate: 140, total: 39200, notes: "Nutritious hot vegetarian lunch for all attendees & crew" },
  { item: "Day 1 Evening Snacks & Tea", qty: 280, unitRate: 25, total: 7000, notes: "Mid-sprint tea, cookies and savory snacks" },
  { item: "Day 1 Overnight Dinner", qty: 280, unitRate: 140, total: 39200, notes: "Wholesome vegetarian dinner for overnight builders & crew" },
  { item: "Late-Night Snacks (Day 1 Midnight)", qty: 280, unitRate: 35, total: 9800, notes: "Biscuits, energy bars and hot beverage refills at 23:00" },
  { item: "Day 2 Sunrise Breakfast", qty: 280, unitRate: 60, total: 16800, notes: "Hot breakfast (idli/vada/poha, tea/coffee) before demo sprint" },
  { item: "Drinking Water (Campus R/O Facilities)", qty: 1, unitRate: 0, total: 0, notes: "Provided free by Newton School of Technology" }
];

export const OPERATIONS_BUDGET: BudgetLineItem[] = [
  { item: "Security: Guard-Shift Allowances (4 shifts)", qty: 4, unitRate: 3000, total: 12000, notes: "Professional overnight campus security coverage" },
  { item: "Routine Venue Cleaning", qty: 2, unitRate: 0, total: 0, notes: "Provided in-kind by Newton School of Technology" },
  { item: "First-Aid & Emergency Response Cover", qty: 1, unitRate: 6000, total: 6000, notes: "On-site medical kit, first responder allowance" },
  { item: "Rest-Area Supplies & Comfort Items", qty: 1, unitRate: 4000, total: 4000, notes: "Mattresses, hygiene supplies for quiet rest zone" },
  { item: "Signage, Wayfinding, QR & Demo Labels", qty: 1, unitRate: 5000, total: 5000, notes: "Printed directional signs, QR badges, demo booth cards" },
  { item: "Participant + Support Badges & Lanyards", qty: 280, unitRate: 20, total: 5600, notes: "Custom openSUSE branded participant identity cards" },
  { item: "Custom Vinyl Geeko Stickers", qty: 300, unitRate: 8, total: 2400, notes: "High quality openSUSE Chameleon die-cut vinyl stickers" },
  { item: "Side-Activity Cash Rewards Pool", qty: 1, unitRate: 6000, total: 6000, notes: "Midnight Bug Hunt (₹2k), Arcade (₹2.5k), Quest (₹1.5k)" },
  { item: "Reward T-Shirts (incl. Screen Printing)", qty: 25, unitRate: 300, total: 7500, notes: "High quality commemorative shirts for winners & side quests" },
  { item: "Top-Three Team Custom Trophies", qty: 3, unitRate: 1500, total: 4500, notes: "Laser-engraved acrylic/wood openSUSE trophies" },
  { item: "Printed Certificates & Stationery Pool", qty: 1, unitRate: 2000, total: 2000, notes: "Embossed winner certificates & judging sheets" },
  { item: "Media, Editing & Cloud Storage Allowance", qty: 1, unitRate: 4000, total: 4000, notes: "Equipment, storage for 4K video reel & photos" },
  { item: "Local Logistics, Emergency Transport", qty: 1, unitRate: 5000, total: 5000, notes: "Procurement transit, supply deliveries & contingency transport" }
];

export const BUDGET_SUMMARY = {
  cateringSubtotal: 120400,
  operationsSubtotal: 64000,
  conditionalCashPrizes: 50000,
  directCosts: 234400,
  contingencyRate: "10%",
  contingencyAmount: 23440,
  totalPlanningEnvelope: 257840
};

export const ATTENDANCE_SENSITIVITY = [
  { headcount: "150 Participants (All Builders)", dayNightServings: "180 / 180", catering: 77400, totalWithContingency: 208340 },
  { headcount: "200 Participants (All Builders)", dayNightServings: "230 / 230", catering: 98900, totalWithContingency: 233090 },
  { headcount: "250 Participants (Cap / Base Case)", dayNightServings: "280 / 280", catering: 120400, totalWithContingency: 257840 }
];

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    role: "Prize Partner",
    target: 50000,
    targetFormatted: "₹50,000",
    deliverables: "Fund ₹25k / ₹15k / ₹10k hackathon team awards; prime website recognition, award ceremony stage co-branding, slide deck logo.",
    confirmed: false
  },
  {
    role: "Food Partner",
    target: 100000,
    targetFormatted: "₹1,00,000",
    deliverables: "Fund the comprehensive 6-meal catering pipeline for 280 attendees; prominent catering area signage, website logo, custom meal-token branding.",
    confirmed: false
  },
  {
    role: "Community Partners (2× Slots)",
    target: 25000,
    targetFormatted: "₹25,000 each",
    deliverables: "Two available slots (₹50,000 total). Website banner logo, opening remarks acknowledgment, dedicated demo table space in expo foyer.",
    confirmed: false
  },
  {
    role: "T-Shirt & Swag Partner",
    target: 8250,
    targetFormatted: "₹8,250",
    deliverables: "Covers 25 premium printed reward shirts + 10% contingency; logo printed on winner sleeve/tag, awards stage acknowledgment.",
    confirmed: false
  },
  {
    role: "Operations Partner",
    target: 49590,
    targetFormatted: "₹49,590",
    deliverables: "Funds critical security, first-aid, badge production & logistic reserves; website/banner logo & official operations sponsor tribute.",
    confirmed: false
  }
];

export const GEEKO_ARCADE_GAMES = [
  {
    id: "game-1",
    name: "Terminal Escape",
    duration: "5–10 mins",
    type: "Command-Line Puzzle",
    description: "Navigate through simulated Linux filesystem rooms using cd, grep, awk, and chmod to find hidden access keys.",
    difficulty: "Medium"
  },
  {
    id: "game-2",
    name: "Linux Trivia Blitz",
    duration: "3–5 mins",
    type: "Rapid Fire Quiz",
    description: "Test your speed on Linux history, Linus Torvalds lore, openSUSE release code names, and open-source licenses.",
    difficulty: "Casual"
  },
  {
    id: "game-3",
    name: "Command Match",
    duration: "3–5 mins",
    type: "Pattern Matching",
    description: "Race against the clock pairing obscure terminal commands and flags with their exact system outputs.",
    difficulty: "Easy"
  },
  {
    id: "game-4",
    name: "Find the Geeko",
    duration: "5–10 mins",
    type: "Physical QR Clue Trail",
    description: "Follow cryptographic QR clues placed in permitted public areas of Newton School of Technology to unlock the secret Geeko badge.",
    difficulty: "Fun Explorer"
  }
];

export const TIMELINE_MILESTONES = [
  { period: "7–20 Nov 2026", task: "Core team ratifies provisional envelope; launch sponsor outreach pipeline; document zero-cost college agreement; establish transparent financial channel.", owner: "Core Team" },
  { period: "21 Nov – 10 Dec 2026", task: "Obtain written catering & security quotations; recruit speakers, track mentors & judges; register sponsor pledges.", owner: "Program & Logistics Leads" },
  { period: "T−35 to T−21 Days", task: "Lock exact January dates; verify essential funding; pass official Go/No-Go Gate 1; open 250-cap builder applications.", owner: "Core Team" },
  { period: "T−20 to T−8 Days", task: "Test offline VM images, Quest QR systems & judging score sheets; assign volunteer shifts; verify participant dietary data.", owner: "Technical & Volunteer Leads" },
  { period: "T−7 Days", task: "Freeze headcounts and caterer meal contracts; pass Go/No-Go Gate 2; validate safety roster and cash reserves.", owner: "Logistics & Budget Owner" },
  { period: "T−1 Day", task: "Venue walkthrough at Newton School of Tech; load-test power circuits; test Wi-Fi for 350+ devices; test AV; stage emergency prep.", owner: "All Leads" },
  { period: "Event Days (T, T+1)", task: "Deliver 20h Buildathon, 3 talks, 2 labs, 6-meal catering, Demo Arena and stage pitches strictly to published schedule.", owner: "Duty Leads" },
  { period: "T+2 to T+14 Days", task: "Settle all vendor bills; disburse approved prizes; issue digital verified certificates; publish public expense outcome report.", owner: "Finance & Media" },
  { period: "By T+30 Days", task: "Publish open project directory; host contributor onboarding session to transition top projects into active upstream FOSS repositories.", owner: "Community Lead" }
];
