export interface SessionItem {
  id: string;
  time: string;
  title: string;
  type: 'Keynote' | 'Talk' | 'Workshop' | 'Panel' | 'Break' | 'Sprint' | 'Demo';
  isMandatory: boolean; // Mandatory (Core) vs Optional (Elective)
  track: 'General' | 'Ecosystem' | 'Workshops Lab' | 'Packaging' | 'QA' | 'Hackathon';
  description: string;
  speakerOrLead?: string;
  location?: string;
}

export interface PhaseItem {
  id: string;
  phaseNumber: string;
  title: string;
  badge: string;
  description: string;
  topics: string[];
  duration: string;
  iconName: string;
}

export interface TrackItem {
  id: string;
  code: string;
  title: string;
  description: string;
  tech: string[];
}

export interface BudgetCategory {
  category: string;
  amount: string;
  amountInr: number;
  percentage: number;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  org: string;
  avatarSeed: string;
  github?: string;
  linkedin?: string;
  bio: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category: 'Registration' | 'Event' | 'Hackathon' | 'Sponsorship';
}

export const EVENT_CONFIG = {
  name: "openSUSE India – Bengaluru Connect 2027",
  shortName: "Bengaluru Connect '27",
  edition: "2027",
  tagline: "Explore Open Source. Learn openSUSE. Build Together.",
  motto: "Have a lot of fun…",
  dates: "January 2027",
  exactDatesConfirmed: false,
  datesAnnouncementText: "Exact January 2027 dates to be confirmed following community proposal approval. Pre-register for Day 1 or apply separately for the Day 2 Hackathon to receive instant updates.",
  duration: "2 Full Days (Day 1: Talks & Workshops • Day 2: 10H Hackathon)",
  location: "Bengaluru, Karnataka, India",
  venue: "Newton School of Technology",
  venueAddress: "Bengaluru Campus, Karnataka, India",
  expectedAttendees: "300–400 Participants",
  totalBudgetINR: "₹90,000",
  hackathonDuration: "10-Hour Open-Source Sprint",
  organizer: "openSUSE India Community",
  cfpStatus: "CFP OPEN // SUBMIT YOUR TALK",
};

export const EVENT_STATS = [
  { label: "DAY 1 PROGRAM", value: "TALKS & LABS", subtext: "Core Keynotes + Elective Workshops" },
  { label: "DAY 2 HACKATHON", value: "10 HOURS", subtext: "Separate Team & Solo Registration" },
  { label: "CALL FOR PROPOSALS", value: "CFP OPEN", subtext: "Submit Talks, Workshops & Lightning" },
  { label: "EXPECTED CAPACITY", value: "300–400", subtext: "Newton School of Technology" },
];

export const PHASES: PhaseItem[] = [
  {
    id: "phase-1",
    phaseNumber: "PHASE 01",
    title: "Technical Talks & Community Engagement",
    badge: "DAY 1 • MORNING",
    duration: "4 Hours",
    iconName: "Terminal",
    description: "Introduces participants to openSUSE, its global governance, and its mission in enterprise and desktop Linux ecosystems. Featuring seasoned contributors and community advocates.",
    topics: [
      "Introduction to openSUSE & the global open-source ecosystem",
      "Diving deep into openSUSE Leap vs. openSUSE Tumbleweed",
      "Linux development, modern system administration & career pathways",
      "Understanding transparent, community-driven software development",
      "Step-by-step guide: How to submit your first openSUSE patch",
      "Joining global openSUSE special interest groups and mentorship initiatives"
    ]
  },
  {
    id: "phase-2",
    phaseNumber: "PHASE 02",
    title: "Hands-on Technical Workshops",
    badge: "DAY 1 • AFTERNOON",
    duration: "4.5 Hours",
    iconName: "Cpu",
    description: "Interactive, guided terminal and configuration workshops. Move past theoretical knowledge and gain real muscle memory with industry-standard openSUSE tools.",
    topics: [
      "Installing, partitioning & tuning openSUSE systems",
      "High-speed package management with Zypper & libzypp",
      "Advanced system administration and control with YaST (Yet another Setup Tool)",
      "OBS Deep-Dive: Building and distributing packages with Open Build Service",
      "Automated OS testing and continuous integration with openQA",
      "Modern Git workflows, collaborative pull requests & review etiquette",
      "Packaging upstream open-source code for global distribution"
    ]
  },
  {
    id: "phase-3",
    phaseNumber: "PHASE 03",
    title: "10-Hour Open-Source Hackathon",
    badge: "DAY 2 • HACKATHON SPRINT",
    duration: "10 Hours",
    iconName: "Code2",
    description: "An intensive sprint where developers, designers, and system builders form teams to build functional prototypes, automation scripts, and open-source solutions.",
    topics: [
      "Form teams of 2–4 or hack solo with dedicated openSUSE mentors",
      "Build real-world utilities, CLI apps, infrastructure manifests, or community tools",
      "Live technical mentorship desk and openSUSE package maintainer reviews",
      "Live prototype demonstrations to a jury of open-source practitioners",
      "Top project awards, openSUSE swag hampers, and direct mentorship forward"
    ]
  }
];

export const DAY1_SESSIONS: SessionItem[] = [
  {
    id: "d1-s1",
    time: "09:00 AM – 09:30 AM",
    title: "Badge Pickup, Welcome Kit & Morning Networking",
    type: "Break",
    isMandatory: true,
    track: "General",
    description: "Check-in at Newton School of Technology, collect official openSUSE Geeko sticker packs and badge lanyards.",
    location: "Main Reception Foyer"
  },
  {
    id: "d1-s2",
    time: "09:30 AM – 10:15 AM",
    title: "Opening Keynote: openSUSE in the Global Open-Source Landscape",
    type: "Keynote",
    isMandatory: true,
    track: "General",
    description: "Mandatory Core Session. Introduction to openSUSE governance, its mission across enterprise and desktop Linux ecosystems, and open-source ethics.",
    speakerOrLead: "Invited openSUSE Community Advocate",
    location: "Auditorium 1"
  },
  {
    id: "d1-s3",
    time: "10:15 AM – 11:00 AM",
    title: "Distribution Architecture: Leap vs. Tumbleweed",
    type: "Talk",
    isMandatory: true,
    track: "Ecosystem",
    description: "Mandatory Core Session. Exploring the engineering differences between rolling release (Tumbleweed) and regular enterprise-paired release (Leap), Snapper snapshots, and developer toolchains.",
    speakerOrLead: "Linux Systems Contributor",
    location: "Auditorium 1"
  },
  {
    id: "d1-s4",
    time: "11:00 AM – 11:15 AM",
    title: "Tea Break & Community Hallway Track",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "Informal networking and discussion with mentors and speakers.",
    location: "Cafeteria & Lounge"
  },
  {
    id: "d1-s5",
    time: "11:15 AM – 01:00 PM",
    title: "Hands-on Workshop: Package Management with Zypper & YaST Control",
    type: "Workshop",
    isMandatory: false,
    track: "Workshops Lab",
    description: "Optional Elective Lab. Installing openSUSE, package operations with Zypper SAT solver, repository management, Btrfs subvolumes, and YaST system control.",
    speakerOrLead: "Community Technical Leads",
    location: "Lab A (Bring Laptop)"
  },
  {
    id: "d1-s6",
    time: "11:15 AM – 01:00 PM",
    title: "Parallel Session: Linux SysAdmin & Modern Open-Source Careers",
    type: "Talk",
    isMandatory: false,
    track: "Ecosystem",
    description: "Optional Elective Talk. How open-source systems engineering, Linux foundation certifications, and upstream contributions accelerate developer careers.",
    speakerOrLead: "Invited Industry Professionals",
    location: "Seminar Hall B"
  },
  {
    id: "d1-s7",
    time: "01:00 PM – 02:00 PM",
    title: "Community Lunch & Lightning Talks (5-Min Slots)",
    type: "Break",
    isMandatory: false,
    track: "General",
    description: "Nutritious on-campus lunch with quick lightning presentations from community attendees.",
    location: "Dining Hall"
  },
  {
    id: "d1-s8",
    time: "02:00 PM – 03:45 PM",
    title: "Hands-on Workshop: Universal Packaging with Open Build Service (OBS)",
    type: "Workshop",
    isMandatory: false,
    track: "Packaging",
    description: "Optional Elective Lab. Learn how to write RPM spec files, package upstream open-source code, and trigger automated builds for multiple Linux distributions using OBS.",
    speakerOrLead: "OBS Maintainers",
    location: "Lab A (Bring Laptop)"
  },
  {
    id: "d1-s9",
    time: "02:00 PM – 03:45 PM",
    title: "Parallel Session: Automated Operating System Testing with openQA",
    type: "Workshop",
    isMandatory: false,
    track: "QA",
    description: "Optional Elective Lab. Deep-dive into openQA computer vision-based visual regression testing and writing automated OS test needles.",
    speakerOrLead: "QA Engineers",
    location: "Lab B"
  },
  {
    id: "d1-s10",
    time: "04:00 PM – 05:00 PM",
    title: "Contributor Pathways Panel & How to Submit Your First openSUSE Patch",
    type: "Panel",
    isMandatory: true,
    track: "General",
    description: "Mandatory Core Wrap-up. Collaborative Git review etiquette, joining openSUSE Special Interest Groups (SIGs), and preparing for Day 2 Hackathon.",
    speakerOrLead: "Organizing Team & Maintainers",
    location: "Auditorium 1"
  }
];

export const DAY2_SESSIONS: SessionItem[] = [
  {
    id: "d2-s1",
    time: "08:30 AM – 09:15 AM",
    title: "Hackathon Check-in, Team Matchmaking & Breakfast",
    type: "Break",
    isMandatory: true,
    track: "Hackathon",
    description: "Check-in for registered hackathon participants. Solo hackers join the team formation session to form teams of 2–4.",
    location: "Innovation Hub"
  },
  {
    id: "d2-s2",
    time: "09:15 AM – 09:45 AM",
    title: "Hackathon Kickoff: 5 Track Challenges & Rules Announcement",
    type: "Keynote",
    isMandatory: true,
    track: "Hackathon",
    description: "Mandatory Kickoff. Briefing on the 5 open-source tracks, mentorship desk, and evaluation rubrics.",
    location: "Main Auditorium"
  },
  {
    id: "d2-s3",
    time: "09:45 AM – 01:00 PM",
    title: "Sprint Phase 1: Architecture, Prototyping & Mentor Reviews",
    type: "Sprint",
    isMandatory: true,
    track: "Hackathon",
    description: "10-Hour Hacking underway. On-site openSUSE mentors circulate to help with system APIs, packaging, and tooling.",
    location: "Hacking Arena"
  },
  {
    id: "d2-s4",
    time: "01:00 PM – 02:00 PM",
    title: "Hackers Working Lunch & Mid-Sprint Checkpoint",
    type: "Break",
    isMandatory: false,
    track: "Hackathon",
    description: "Fuel and hydration for hacking teams.",
    location: "Dining Hall"
  },
  {
    id: "d2-s5",
    time: "02:00 PM – 06:00 PM",
    title: "Sprint Phase 2: Feature Polish, Packaging & README Documentation",
    type: "Sprint",
    isMandatory: true,
    track: "Hackathon",
    description: "Finalizing prototypes, containerizing or writing RPM specs, and preparing repository demonstrations.",
    location: "Hacking Arena"
  },
  {
    id: "d2-s6",
    time: "06:00 PM – 06:30 PM",
    title: "Code Freeze & Public Repository Submissions",
    type: "Sprint",
    isMandatory: true,
    track: "Hackathon",
    description: "All code must be pushed to a public GitHub / GitLab / Codeberg repository under an open-source license.",
    location: "Hacking Arena"
  },
  {
    id: "d2-s7",
    time: "06:30 PM – 08:00 PM",
    title: "Live Prototype Demonstrations Before Jury",
    type: "Demo",
    isMandatory: true,
    track: "Hackathon",
    description: "Teams present a live 4-minute working demonstration to the jury of mentors and openSUSE contributors.",
    location: "Auditorium 1"
  },
  {
    id: "d2-s8",
    time: "08:00 PM – 08:30 PM",
    title: "Awards Ceremony, Swag Distribution & Closing Vision",
    type: "Keynote",
    isMandatory: true,
    track: "Hackathon",
    description: "Top project awards, certificates of excellence, Geeko merchandise hampers, and roadmap forward to openSUSE Conf India.",
    location: "Auditorium 1"
  }
];

export const HACKATHON_TRACKS: TrackItem[] = [
  {
    id: "track-1",
    code: "TRACK // 01",
    title: "Linux & Developer Productivity Tools",
    description: "Build command-line utilities, TUI tools, shell enhancements, debugging aids, or developer productivity workflows tailored for Linux.",
    tech: ["Bash", "Rust", "Go", "Python", "CLI / TUI"]
  },
  {
    id: "track-2",
    code: "TRACK // 02",
    title: "Open-Source Automation & System Utilities",
    description: "Create automated administration scripts, system monitors, backup solutions, kernel tweak tools, or YaST / systemd integration modules.",
    tech: ["Systemd", "Ansible", "Zypper Hooks", "Btrfs Tools"]
  },
  {
    id: "track-3",
    code: "TRACK // 03",
    title: "Cloud-Native & Infrastructure Technologies",
    description: "Develop containerized microservices, Kubernetes operators, immutable OS scripts (MicroOS), or lightweight edge deployment recipes.",
    tech: ["Podman", "K8s", "MicroOS", "Terraform"]
  },
  {
    id: "track-4",
    code: "TRACK // 04",
    title: "Open-Source Applications & Community Solutions",
    description: "Engineer practical desktop apps, educational platforms, accessibility utilities, or web platforms benefiting the Indian tech community.",
    tech: ["GTK", "Qt", "Web / Electron", "Accessibility"]
  },
  {
    id: "track-5",
    code: "TRACK // 05",
    title: "openSUSE Ecosystem Integrations",
    description: "Build OBS packaging automations, openQA test cases, YaST extension modules, or openSUSE documentation generators.",
    tech: ["OBS API", "openQA Perl", "Ruby YaST", "RPM Spec"]
  }
];

export const BUDGET_BREAKDOWN: BudgetCategory[] = [
  {
    category: "Venue & Operational Logistics",
    amount: "₹25,000",
    amountInr: 25000,
    percentage: 28,
    description: "Power infrastructure, high-density Wi-Fi routers, lab access coordination, banners, signage, badges & lanyards."
  },
  {
    category: "Participant Refreshments & Catering",
    amount: "₹25,000",
    amountInr: 25000,
    percentage: 28,
    description: "Nutritious lunch, evening high-tea, midnight hackathon snacks, beverages, and hydration stations for both days."
  },
  {
    category: "openSUSE Branded Merchandise & Swag",
    amount: "₹18,000",
    amountInr: 18000,
    percentage: 20,
    description: "Official Geeko stickers, t-shirts, enamel pins, keychains, and contributor welcome packs for attendees."
  },
  {
    category: "Technical Infrastructure & AV",
    amount: "₹10,000",
    amountInr: 10000,
    percentage: 11,
    description: "Projectors, stage audio systems, workshop recording rigs, and streaming setup for remote viewers."
  },
  {
    category: "Hackathon Prizes & Recognitions",
    amount: "₹8,000",
    amountInr: 8000,
    percentage: 9,
    description: "Trophies, certificates of excellence, tech accessories, and goodies for winning hackathon teams."
  },
  {
    category: "Speaker Hospitality & Local Travel",
    amount: "₹4,000",
    amountInr: 4000,
    percentage: 4,
    description: "Local commute allowances, speaker welcome kits, and mentor mementos."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Divyanshu Prakash",
    role: "Lead Organizer",
    org: "openSUSE India Community",
    avatarSeed: "divyanshu",
    github: "https://github.com/divyanshuprakas-h",
    bio: "Passionate open-source advocate, systems enthusiast, and student community builder championing Linux and developer tooling in Bengaluru."
  },
  {
    name: "Dushyant Acharya",
    role: "Co-Organizer & Technical Coordinator",
    org: "openSUSE India Community",
    avatarSeed: "dushyant",
    github: "https://github.com",
    bio: "Linux engineer and community organizer driving hands-on workshop design, packaging tutorials, and mentor management."
  },
  {
    name: "Rithull Raj Kallat",
    role: "Co-Organizer & Operations Lead",
    org: "openSUSE India Community",
    avatarSeed: "rithull",
    github: "https://github.com",
    bio: "Open-source contributor heading logistics, venue coordination at Newton School of Technology, and hackathon execution."
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Registration",
    q: "Can I register for Day 1 only, or do I have to join the Day 2 Hackathon as well?",
    a: "You can register for Day 1 only, apply for the Day 2 Hackathon separately, or choose to attend both! Day 1 registration provides access to all technical talks and workshops. The Day 2 Hackathon has a separate registration flow for teams and solo hackers."
  },
  {
    category: "Event",
    q: "What is the difference between Mandatory (Core) and Optional (Elective) sessions on Day 1?",
    a: "Mandatory Core sessions (such as the Keynote, Distribution Architecture, and Contributor Panel) provide foundational understanding for all participants in the main auditorium. Optional Elective sessions are parallel hands-on workshops (like OBS packaging vs openQA testing) where you can pick the specific track you want to dive into."
  },
  {
    category: "Event",
    q: "How does the Call for Proposals (CFP) work on this website?",
    a: "Our CFP is officially open! If you are a Linux contributor, developer, or student with an interesting project, tutorial, or tool, you can submit a 30-min talk, 60-min workshop, or 10-min lightning talk directly through the CFP portal on this site."
  },
  {
    category: "Registration",
    q: "When will the exact event dates in January 2027 be locked?",
    a: "We are currently finalizing dates with the venue (Newton School of Technology) and community partners. Pre-registering today locks your reservation priority, and you'll receive an instant email notification as soon as the exact dates are announced."
  },
  {
    category: "Registration",
    q: "Is there any registration fee to attend openSUSE Bengaluru Connect?",
    a: "No! The event is completely free and open to everyone, true to the spirit of open source. Attendance, workshops, food, and hackathon participation are sponsored and community-supported."
  },
  {
    category: "Hackathon",
    q: "Can I participate in the 10-Hour Hackathon if I don't have a team?",
    a: "Absolutely! You can register as a solo hacker. On the morning of Day 2, we host an in-person matchmaking session where solo participants can pitch ideas and team up (teams of 1–4)."
  },
  {
    category: "Event",
    q: "What is the connection between this event and openSUSE Conf India?",
    a: "Bengaluru Connect 2027 is designed to build momentum, foster new contributors, and establish regional community roots leading directly up to the national openSUSE Conf India."
  },
  {
    category: "Sponsorship",
    q: "How can our organization sponsor or partner with Bengaluru Connect 2027?",
    a: "We welcome academic institutions, tech companies, and open-source foundations. Check our transparent ₹90,000 INR budget breakdown and reach out via our sponsorship contact section to receive the partnership prospectus."
  }
];
