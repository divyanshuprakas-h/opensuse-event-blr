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
  name: "openSUSE India – Bengaluru Connect 2027",
  shortName: "Bengaluru Connect '27",
  edition: "2027",
  tagline: "Explore Open Source. Learn openSUSE. Build Together.",
  motto: "Have a lot of fun…",
  dates: "January 2027",
  datesNotice: "Target: January 2027 (Exact dates announcing soon)",
  duration: "2 Days (Day 1: Talks & Labs • Day 2: 10H Hackathon)",
  location: "Bengaluru, Karnataka, India",
  venue: "Newton School of Technology",
  venueAddress: "Bengaluru Campus, Karnataka, India",
  expectedAttendees: "300–400 Hackers & Devs",
  organizer: "openSUSE India Community",
};

export const EVENT_STATS = [
  { label: "DURATION", value: "2 DAYS", subtext: "Intensive Tech Gathering" },
  { label: "ATTENDEES", value: "300–400", subtext: "Devs, Students & Sysadmins" },
  { label: "HACKATHON", value: "10 HOURS", subtext: "Separate Day 2 Registration" },
  { label: "ADMISSION", value: "100% FREE", subtext: "Open-Source Community Event" },
];

export const DAY1_SESSIONS: SessionItem[] = [
  {
    id: "d1-1",
    time: "09:00 – 09:30",
    title: "Badge Pickup & Welcome Kit",
    type: "Break",
    isMandatory: true,
    track: "General",
    description: "Check-in at Newton School of Tech, collect badge lanyards and Geeko sticker packs.",
    location: "Main Foyer"
  },
  {
    id: "d1-2",
    time: "09:30 – 10:15",
    title: "Keynote: openSUSE in the Global Open-Source Ecosystem",
    type: "Keynote",
    isMandatory: true,
    track: "General",
    description: "openSUSE governance, global community reach, and open-source infrastructure.",
    location: "Auditorium"
  },
  {
    id: "d1-3",
    time: "10:15 – 11:00",
    title: "Distribution Architecture: Leap vs. Tumbleweed",
    type: "Talk",
    isMandatory: true,
    track: "Architecture",
    description: "Rolling release (Tumbleweed) vs enterprise-aligned regular release (Leap) and Snapper Btrfs rollbacks.",
    location: "Auditorium"
  },
  {
    id: "d1-4",
    time: "11:15 – 01:00",
    title: "Lab A: Zypper Package Management & YaST System Control",
    type: "Workshop",
    isMandatory: false,
    track: "Workshops Lab",
    description: "Hands-on terminal setup: Zypper SAT solver, repo mirrors, subvolumes & YaST administration.",
    location: "Lab A (Bring Laptop)"
  },
  {
    id: "d1-5",
    time: "11:15 – 01:00",
    title: "Talk B: Linux Systems Administration & Open-Source Careers",
    type: "Talk",
    isMandatory: false,
    track: "Ecosystem",
    description: "Career opportunities in open-source systems engineering, DevOps, and Linux infrastructure.",
    location: "Seminar Hall B"
  },
  {
    id: "d1-6",
    time: "01:00 – 02:00",
    title: "Lunch & Community Lightning Talks",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "On-campus lunch with rapid 5-minute attendee lightning presentations.",
    location: "Dining Hall"
  },
  {
    id: "d1-7",
    time: "02:00 – 03:45",
    title: "Lab A: Universal Packaging with Open Build Service (OBS)",
    type: "Workshop",
    isMandatory: false,
    track: "Packaging",
    description: "Writing RPM specs, automated multi-arch builds (x86/ARM), and multi-distro targets.",
    location: "Lab A (Bring Laptop)"
  },
  {
    id: "d1-8",
    time: "02:00 – 03:45",
    title: "Lab B: Automated Operating System Testing with openQA",
    type: "Workshop",
    isMandatory: false,
    track: "QA",
    description: "Visual regression testing and writing automated OS test needles with openQA.",
    location: "Lab B"
  },
  {
    id: "d1-9",
    time: "04:00 – 05:00",
    title: "Contributor Pathways: Submitting Your First openSUSE Patch",
    type: "Panel",
    isMandatory: true,
    track: "General",
    description: "Git review etiquette, openSUSE SIGs, and prep for the Day 2 Hackathon.",
    location: "Auditorium"
  }
];

export const DAY2_SESSIONS: SessionItem[] = [
  {
    id: "d2-1",
    time: "08:30 – 09:15",
    title: "Hackathon Check-in & Team Matchmaking",
    type: "Break",
    isMandatory: true,
    track: "Hackathon",
    description: "Team check-in. Solo hackers pitch ideas and form teams of 1 to 4 members.",
    location: "Hacking Arena"
  },
  {
    id: "d2-2",
    time: "09:15 – 09:45",
    title: "Sprint Kickoff: Track Briefings & Rules",
    type: "Keynote",
    isMandatory: true,
    track: "Hackathon",
    description: "Briefing on the 5 tracks, mentor availability, code submission requirements, and judging.",
    location: "Main Stage"
  },
  {
    id: "d2-3",
    time: "09:45 – 01:00",
    title: "Hacking Sprint: Phase 1 & Architecture Reviews",
    type: "Sprint",
    isMandatory: true,
    track: "Hackathon",
    description: "Teams start building. Mentors circulate across tables to assist with tooling and APIs.",
    location: "Hacking Arena"
  },
  {
    id: "d2-4",
    time: "01:00 – 02:00",
    title: "Hackers Lunch & Progress Check-in",
    type: "Break",
    isMandatory: false,
    track: "Hackathon",
    description: "Nutritious lunch and quick team check-ins.",
    location: "Dining Hall"
  },
  {
    id: "d2-5",
    time: "02:00 – 06:00",
    title: "Hacking Sprint: Phase 2 & Prototype Polish",
    type: "Sprint",
    isMandatory: true,
    track: "Hackathon",
    description: "Finalizing implementations, writing READMEs, and testing live demos.",
    location: "Hacking Arena"
  },
  {
    id: "d2-6",
    time: "06:00 – 06:30",
    title: "Code Freeze & Git Repository Submissions",
    type: "Sprint",
    isMandatory: true,
    track: "Hackathon",
    description: "All code committed to a public git repo under an open-source license.",
    location: "Hacking Arena"
  },
  {
    id: "d2-7",
    time: "06:30 – 08:00",
    title: "Live Project Demonstrations Before Jury",
    type: "Demo",
    isMandatory: true,
    track: "Hackathon",
    description: "4-minute working demos per team before the panel of technical judges.",
    location: "Auditorium"
  },
  {
    id: "d2-8",
    time: "08:00 – 08:30",
    title: "Awards Ceremony, Swag & Closing",
    type: "Keynote",
    isMandatory: true,
    track: "Hackathon",
    description: "Winning project recognitions, openSUSE swag hampers, and closing roadmap.",
    location: "Auditorium"
  }
];

export const HACKATHON_TRACKS: TrackItem[] = [
  {
    id: "track-1",
    code: "TRACK // 01",
    title: "Linux & Developer Productivity Tools",
    description: "CLI tools, shell enhancements, terminal utilities, or debugging aids.",
    tech: ["Bash", "Rust", "Go", "Python", "CLI / TUI"]
  },
  {
    id: "track-2",
    code: "TRACK // 02",
    title: "Automation & System Utilities",
    description: "Automated admin scripts, system monitors, backup solutions, or systemd tools.",
    tech: ["Systemd", "Ansible", "Zypper Hooks", "Btrfs"]
  },
  {
    id: "track-3",
    code: "TRACK // 03",
    title: "Cloud-Native & Infrastructure",
    description: "Containerized services, Podman/K8s operators, or immutable MicroOS recipes.",
    tech: ["Podman", "K8s", "MicroOS", "Terraform"]
  },
  {
    id: "track-4",
    code: "TRACK // 04",
    title: "Community & Desktop Applications",
    description: "Desktop apps, educational tools, accessibility aids, or community utilities.",
    tech: ["GTK", "Qt", "Web / Electron", "Accessibility"]
  },
  {
    id: "track-5",
    code: "TRACK // 05",
    title: "openSUSE Ecosystem Integrations",
    description: "OBS packaging automations, openQA test cases, or YaST module plugins.",
    tech: ["OBS API", "openQA Perl", "Ruby YaST", "RPM Spec"]
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "Is Day 1 registration separate from the Day 2 Hackathon?",
    a: "Yes. You can register for Day 1 (talks & workshops) independently from Day 2. If you want to participate in the hackathon, please submit a separate hackathon application (teams of 1–4 or solo)."
  },
  {
    q: "What is the difference between Mandatory Core and Optional Elective talks on Day 1?",
    a: "Mandatory Core sessions (keynotes, distribution architecture, contribution panel) are held in the main auditorium for all attendees. Optional Elective sessions are parallel hands-on breakout workshops (OBS vs openQA vs sysadmin) where you choose which skill to learn."
  },
  {
    q: "Is the event free to attend?",
    a: "Yes, 100% free. Admission, workshops, food, and hackathon participation are non-profit and community-supported."
  },
  {
    q: "When will exact dates in January 2027 be announced?",
    a: "We are currently locking exact days with Newton School of Technology. Pre-registering now reserves your priority pass and sends you an email notification the moment dates are finalized."
  },
  {
    q: "Who is organizing and sponsoring Bengaluru Connect 2027?",
    a: "The event is organized and powered by the openSUSE India Community and the openSUSE Project. Further community partners and sponsors will be updated as collaborations are confirmed."
  }
];

export const TEAM_MEMBERS = [
  { 
    name: "Divyanshu Prakash", 
    role: "Lead Organizer", 
    github: "https://github.com/divyanshuprakas-h",
    email: "Divyanshuprakash@opensuse.org"
  },
  { 
    name: "Dushyant Acharya", 
    role: "Co-Organizer & Technical Coordinator", 
    github: "https://github.com" 
  },
  { 
    name: "Rithull Raj Kallat", 
    role: "Co-Organizer & Operations Lead", 
    github: "https://github.com" 
  },
];
