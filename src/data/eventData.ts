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
  datesAnnouncementText: "Exact January 2027 dates to be confirmed following community proposal approval. Pre-register to receive instant date updates and priority badge reservation.",
  duration: "2 Full Days",
  location: "Bengaluru, Karnataka, India",
  venue: "Newton School of Technology",
  venueAddress: "Bengaluru Campus, Karnataka, India",
  expectedAttendees: "300–400 Participants",
  totalBudgetINR: "₹90,000",
  hackathonDuration: "10-Hour Overnight / Sprint Hackathon",
  organizer: "openSUSE India Community",
};

export const EVENT_STATS = [
  { label: "EVENT DURATION", value: "2 DAYS", subtext: "Intensive Tech Gathering" },
  { label: "EXPECTED PARTICIPANTS", value: "300–400", subtext: "Devs, Students & Sysadmins" },
  { label: "COMMUNITY HACKATHON", value: "10 HOURS", subtext: "Open-Source Sprint" },
  { label: "ESTIMATED BUDGET", value: "₹90,000", subtext: "Transparent Community Pool" },
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
    q: "When will the exact event dates in January 2027 be locked?",
    a: "We are currently finalizing dates with the venue (Newton School of Technology) and community partners. Pre-registering today locks your reservation priority, and you'll receive an instant email notification as soon as the exact dates are announced."
  },
  {
    category: "Registration",
    q: "Is there any registration fee to attend openSUSE Bengaluru Connect?",
    a: "No! The event is completely free and open to everyone, true to the spirit of open source. Attendance, workshops, food, and hackathon participation are sponsored and community-supported."
  },
  {
    category: "Event",
    q: "Who is this event for? Do I need prior Linux or openSUSE experience?",
    a: "Bengaluru Connect welcomes everyone—from students installing Linux for the very first time, to experienced system administrators, DevOps engineers, and seasoned upstream contributors. Workshops range from fundamentals to advanced topics like OBS and openQA."
  },
  {
    category: "Hackathon",
    q: "Can I participate in the 10-Hour Hackathon if I don't have a team?",
    a: "Absolutely! We will host a team formation session at the start of Phase 3 where solo hackers can pitch ideas, find teammates with complementary skills, or join existing teams."
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
