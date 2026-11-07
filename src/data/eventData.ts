export interface SessionItem {
  id: string;
  time: string;
  title: string;
  type: 'Keynote' | 'Talk' | 'Workshop' | 'Panel' | 'Break' | 'Sprint' | 'Demo';
  isMandatory: boolean;
  track: string;
  description: string;
  location: string;
  speakerOrLead?: string;
}

export interface TrackItem {
  id: string;
  code: string;
  title: string;
  description: string;
  tech: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export const EVENT_CONFIG = {
  name: "openSUSE India - Bengaluru Connect 2027",
  shortName: "Bengaluru Connect '27",
  edition: "2027",
  tagline: "Explore Open Source. Learn openSUSE. Build Together.",
  motto: "Learn. Build. Contribute.",
  dates: "January 2027",
  datesNotice: "January 2027 (Exact consecutive dates announcing shortly)",
  duration: "2 Days (Day 1: Talks & Labs • Day 2: 20H Geeko Buildathon)",
  location: "Bengaluru, Karnataka, India",
  venue: "Newton School of Technology, Bengaluru",
  venueAddress: "P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Bengaluru 560059",
  expectedAttendees: "250 Builders (Working Site Headcount: 280)",
  organizer: "openSUSE India Community",
};

export const EVENT_STATS = [
  { label: "DURATION", value: "2 DAYS", subtext: "Talks, Labs & 20H Buildathon" },
  { label: "CAPACITY", value: "250 BUILDERS", subtext: "Strict 1-Pool Admission" },
  { label: "BUILDATHON", value: "20 HOURS", subtext: "Day 1 14:30 → Day 2 10:30" },
  { label: "ADMISSION", value: "100% FREE", subtext: "Zero Fees · Pure Open Source" },
];

export const DAY1_SESSIONS: SessionItem[] = [
  {
    id: "d1-1",
    time: "09:00 – 09:30",
    title: "Check-in, QR Passport Activation & Welcome Refreshments",
    type: "Break",
    isMandatory: true,
    track: "General",
    description: "Badge pickup at Newton School of Technology, digital QR quest activation and light breakfast.",
    location: "Main Foyer"
  },
  {
    id: "d1-2",
    time: "09:30 – 09:45",
    title: "Welcome & openSUSE Safety Briefing",
    type: "Keynote",
    isMandatory: true,
    track: "General",
    description: "Event orientation, access boundaries, overnight guidelines, and code of conduct.",
    location: "Auditorium"
  },
  {
    id: "d1-3",
    time: "09:45 – 10:15",
    title: "Talk 1: Linux Unlocked: Beyond Windows & macOS",
    type: "Talk",
    isMandatory: true,
    track: "Architecture",
    description: "Autonomy, performance, and architecture of Linux distributions in modern engineering.",
    location: "Auditorium"
  },
  {
    id: "d1-4",
    time: "10:15 – 10:45",
    title: "Talk 2: Inside openSUSE: From Desktop to Developer Tools",
    type: "Talk",
    isMandatory: true,
    track: "Architecture",
    description: "Deep dive into Tumbleweed, Leap, MicroOS, YaST, Zypper, and Snapper Btrfs rollbacks.",
    location: "Auditorium"
  },
  {
    id: "d1-5",
    time: "10:45 – 11:15",
    title: "Talk 3: From User to Contributor: Building for Open Source",
    type: "Talk",
    isMandatory: true,
    track: "Ecosystem",
    description: "How to find beginner-friendly issues, navigate Git review etiquette, and submit upstream patches.",
    location: "Auditorium"
  },
  {
    id: "d1-6",
    time: "11:15 – 11:30",
    title: "Coffee Break & Geeko Arcade Open",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "Light refreshments; Terminal Escape, Trivia Blitz, and Quest stations open for downtime.",
    location: "Main Foyer"
  },
  {
    id: "d1-7",
    time: "11:30 – 13:00",
    title: "Parallel Starter Lab (Zypper/YaST) & Idea Lab / Team Formation",
    type: "Workshop",
    isMandatory: false,
    track: "Workshops Lab",
    description: "Lab A: Hands-on Zypper SAT solver & YaST. Lab B: Pitch ideas & form teams of 3–4 for up to 83 teams.",
    location: "Labs A & B"
  },
  {
    id: "d1-8",
    time: "13:00 – 14:00",
    title: "Buffet Lunch & Mentor Matchmaking",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "Nutritious vegetarian lunch for all 250 registered attendees and 30 working crew.",
    location: "Dining Hall"
  },
  {
    id: "d1-9",
    time: "14:00 – 14:30",
    title: "Buildathon Briefing & First Commit Ceremony Preparation",
    type: "Panel",
    isMandatory: true,
    track: "General",
    description: "6 tracks overview, scoring rubric, submission portal, and repository initialization.",
    location: "Auditorium"
  },
  {
    id: "d1-10",
    time: "14:30",
    title: "Official Build Start & First Commit Ceremony (20H Clock Starts!)",
    type: "Sprint",
    isMandatory: true,
    track: "Buildathon",
    description: "The 20-hour non-stop Buildathon begins! Git commit #1 stamped for all teams.",
    location: "Hackathon Arena"
  },
  {
    id: "d1-11",
    time: "14:30 – 18:30",
    title: "Build Sprint 1 & Technical Mentor Desk",
    type: "Sprint",
    isMandatory: true,
    track: "Buildathon",
    description: "Teams implement core architecture. Evening tea/snacks served at 17:00.",
    location: "Hackathon Arena"
  },
  {
    id: "d1-12",
    time: "18:30 – 19:30",
    title: "Hot Dinner Service (Overnight Builders & Crew)",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "Staggered dinner service; quiet rest space opened for rotation.",
    location: "Dining Hall"
  },
  {
    id: "d1-13",
    time: "19:30 – 00:00",
    title: "Night Build Sprint & Late Snacks (23:00)",
    type: "Sprint",
    isMandatory: true,
    track: "Buildathon",
    description: "Focused coding through the night; late-night warm snacks served at 23:00; shift handover at 23:30.",
    location: "Hackathon Arena"
  }
];

export const DAY2_SESSIONS: SessionItem[] = [
  {
    id: "d2-1",
    time: "00:00 – 01:00",
    title: "Quiet Midnight Build & Mentor Rotation",
    type: "Sprint",
    isMandatory: false,
    track: "Buildathon",
    description: "Quiet focus period with rotating mentor availability.",
    location: "Hackathon Arena"
  },
  {
    id: "d2-2",
    time: "01:00 – 01:30",
    title: "Midnight Bug Hunt (Optional Rookie & Expert Showdown)",
    type: "Sprint",
    isMandatory: false,
    track: "Hackathon",
    description: "30-minute individual debugging sprint in prepared sandboxes. Cash rewards and badges.",
    location: "Sandbox Zone"
  },
  {
    id: "d2-3",
    time: "01:30 – 06:30",
    title: "Quiet Build & Supervised Rest Space",
    type: "Break",
    isMandatory: false,
    track: "Buildathon",
    description: "Continuous coding and managed quiet rest zones. Staffed help and security desk on active duty.",
    location: "Rest Zones & Arena"
  },
  {
    id: "d2-4",
    time: "06:30 – 07:30",
    title: "Sunrise Breakfast Service",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "Hot breakfast served to power builders for the final stretch.",
    location: "Dining Hall"
  },
  {
    id: "d2-5",
    time: "07:30 – 09:30",
    title: "Ship at Sunrise: Final Polish, Documentation & Tests",
    type: "Sprint",
    isMandatory: true,
    track: "Buildathon",
    description: "Final code polish, test passes, README preparation, and demo script validation.",
    location: "Hackathon Arena"
  },
  {
    id: "d2-6",
    time: "09:30 – 10:30",
    title: "Submission Verification & Final Git Tagging",
    type: "Sprint",
    isMandatory: true,
    track: "Buildathon",
    description: "Submission portal guidance; frozen repository commit verification; no extensions permitted.",
    location: "Hackathon Arena"
  },
  {
    id: "d2-7",
    time: "10:30",
    title: "Hard Submission Deadline (Commit Freeze)",
    type: "Keynote",
    isMandatory: true,
    track: "Buildathon",
    description: "20-Hour Hackathon clock permanently ends. Repositories locked for jury evaluation.",
    location: "Hackathon Arena"
  },
  {
    id: "d2-8",
    time: "11:00 – 13:00",
    title: "Every-Team Demo Arena (6 Parallel Judging Lanes)",
    type: "Demo",
    isMandatory: true,
    track: "Hackathon",
    description: "Up to 83 teams present live to 6 dual-judge panels (7m demo + buffer) plus People's Choice voting.",
    location: "Demo Arena"
  },
  {
    id: "d2-9",
    time: "13:15 – 14:15",
    title: "Grand Finalist Pitches on Main Stage",
    type: "Demo",
    isMandatory: true,
    track: "Hackathon",
    description: "Top 6 finalist teams pitch live on stage before all attendees, mentors, and jury members.",
    location: "Auditorium"
  },
  {
    id: "d2-10",
    time: "14:35 – 15:00",
    title: "Awards Ceremony, Trophies & Community Farewell",
    type: "Keynote",
    isMandatory: true,
    track: "Hackathon",
    description: "Top 3 team cash awards (₹25k, ₹15k, ₹10k), trophies, 25 reward T-shirts, group photo, and closing.",
    location: "Auditorium"
  }
];

export const HACKATHON_TRACKS: TrackItem[] = [
  {
    id: "track-1",
    code: "TRACK // 01",
    title: "Terminal Titans",
    description: "Linux CLI and productivity tools. Build a file organizer, terminal tutor, backup utility or Zypper helper.",
    tech: ["Bash / Zsh", "Rust / Go / Python", "CLI / TUI", "Linux Syscalls"]
  },
  {
    id: "track-2",
    code: "TRACK // 02",
    title: "Root Access",
    description: "Linux security and privacy. Permissions auditors, PAM auth explainers, or AppArmor/SELinux assistants.",
    tech: ["PAM / Auth Logs", "AppArmor / SELinux", "iptables / nftables", "Sandbox Containment"]
  },
  {
    id: "track-3",
    code: "TRACK // 03",
    title: "GeekoOps",
    description: "Automation, DevOps and infrastructure. OBS build status dashboards, openQA explorers, or container helpers.",
    tech: ["OBS API", "openQA REST", "Podman / Containerfile", "MicroOS / Transactional Updates"]
  },
  {
    id: "track-4",
    code: "TRACK // 04",
    title: "Desktop Reboot",
    description: "Linux desktop and user experience. Accessible launchers, package discovery or first-boot setup assistants.",
    tech: ["KDE Plasma / Qt6", "GNOME / GTK4", "Desktop Entry Specs", "Accessibility APIs"]
  },
  {
    id: "track-5",
    code: "TRACK // 05",
    title: "Upstream Heroes",
    description: "Real open-source contributions. Fix existing Bugzilla / GitHub issues with code, documentation or tests.",
    tech: ["Git Workflows", "Bugzilla / GitHub", "Gettext (PO)", "Upstream PRs & RFCs"]
  },
  {
    id: "track-6",
    code: "TRACK // 06",
    title: "What Does Linux Need Next?",
    description: "Open innovation and community impact. Identify an original Linux/openSUSE need and build a measurable solution.",
    tech: ["Original Design", "Evidence of Need", "Measurable Impact", "Community Architecture"]
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "Is there a registration fee or ticket cost?",
    a: "No, 100% free. Admission, workshops, 6-meal catering, mentor support, and hackathon participation are provided at zero charge under openSUSE India and college collaboration."
  },
  {
    q: "How many participants are allowed?",
    a: "Participation is capped at 250 builders in one single registration pool. All 250 may stay overnight for the 20-hour Buildathon. Combined with 30 working crew/mentors, the total site headcount is 280."
  },
  {
    q: "What is the Geeko Buildathon schedule and team size?",
    a: "Teams consist of 3 to 4 builders (up to 83 teams). The continuous 20-hour hackathon starts at 14:30 on Day 1 (First Commit Ceremony) and locks at 10:30 on Day 2 (Commit Freeze). All submitting teams demo live in the Demo Arena."
  },
  {
    q: "What awards and swag are budgeted?",
    a: "Top 3 teams receive ₹25,000 / ₹15,000 / ₹10,000 team cash awards, custom trophies, and winner certificates. Side activities (Bug Hunt, Arcade, Quest) have a separate ₹6,000 reward pool. 25 screen-printed reward T-shirts and stickers are provided."
  },
  {
    q: "Is food provided during the event?",
    a: "Yes, 6 meal services are catered for all 280 people: Day 1 welcome refreshments, lunch, evening tea/snacks, overnight dinner, late-night snacks, and Day 2 breakfast. Please note that Day 2 lunch is not catered (self-funded/nearby options)."
  },
  {
    q: "Where is the venue and how do I reach it?",
    a: "Hosted at Newton School of Technology, P3 Building, S-VYASA Campus, Sattva Global City, Mysore Road, Bengaluru 560059. Accessible via Purple Line Metro (Kengeri / Mailasandra station) + connecting BMTC buses."
  }
];

export const TEAM_MEMBERS = [
  { 
    name: "Divyanshu Prakash", 
    role: "Event Coordination & Budget Lead", 
    github: "https://github.com/divyanshuprakas-h",
    email: "divyanshuprakash914@gmail.com"
  },
  { 
    name: "Dushyant Acharya", 
    role: "Program & Buildathon Lead", 
    github: "https://github.com",
    email: "divyanshuprakash914@gmail.com"
  },
  { 
    name: "Rithull Raj Kallat", 
    role: "Logistics, Venue & Safety Lead", 
    github: "https://github.com",
    email: "divyanshuprakash914@gmail.com"
  },
];
