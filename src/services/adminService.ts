/**
 * openSUSE India – Bengaluru Connect 2027
 * Admin Data Service
 * Manages Participants, Hackathon Teams, and Volunteers
 */

export interface Participant {
  id: string;
  name: string;
  email: string;
  collegeOrCompany: string;
  role: string;
  interest: string;
  tshirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL' | string;
  github?: string;
  status: 'ACTIVE' | 'REVOKED' | 'CHECKED_IN';
  registeredAt: string;
  notifyOnDates?: boolean;
}

export interface HackathonTeam {
  id: string;
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  teamSize: number;
  trackId: string;
  leaderTshirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL' | string;
  members: string[]; // List of member names / emails
  github?: string;
  projectIdea?: string;
  status: 'ACTIVE' | 'REVOKED' | 'SHORTLISTED';
  registeredAt: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  collegeOrCompany: string;
  assignedArea: 'Registration Desk' | 'Workshop Lab Support' | 'Hackathon Mentor' | 'Stage & AV' | 'Swag & Catering' | 'General Logistics';
  tshirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL' | string;
  status: 'CONFIRMED' | 'STANDBY' | 'REVOKED';
  registeredAt: string;
}

const PARTICIPANTS_KEY = 'opensuse_blr_preregistrations';
const TEAMS_KEY = 'opensuse_blr_hackathon_registrations';
const VOLUNTEERS_KEY = 'opensuse_blr_volunteers';
const ADMIN_AUTH_KEY = 'opensuse_admin_auth_session';

// Default initial seed data if storage is completely empty
const SEED_PARTICIPANTS: Participant[] = [
  {
    id: 'OSBLR-2027-6747',
    name: 'Divyanshu Prakash',
    email: '2102508744@svyasa-sas.edu.in',
    collegeOrCompany: 'Newton School of Technology',
    role: 'Organizer / Student',
    interest: 'Both Workshops & Hackathon',
    tshirtSize: 'M',
    github: 'https://github.com/divyanshuprakas-h',
    status: 'ACTIVE',
    registeredAt: '2026-11-06T18:30:00.000Z',
    notifyOnDates: true,
  },
  {
    id: 'OSBLR-2027-2995',
    name: 'Rithull Raj Kallat',
    email: 'rithullkallat@gmail.com',
    collegeOrCompany: 'Hope Hall Foundation School',
    role: 'Open-Source Contributor',
    interest: 'Hands-on Workshops (YaST/OBS)',
    tshirtSize: 'M',
    github: 'https://github.com',
    status: 'ACTIVE',
    registeredAt: '2026-11-06T19:15:00.000Z',
    notifyOnDates: true,
  },
  {
    id: 'OSBLR-2027-1042',
    name: 'Dushyant Acharya',
    email: 'dushyant@example.com',
    collegeOrCompany: 'Newton School of Technology',
    role: 'Organizer / Developer',
    interest: 'Both Workshops & Hackathon',
    tshirtSize: 'L',
    github: 'https://github.com',
    status: 'ACTIVE',
    registeredAt: '2026-11-06T19:45:00.000Z',
    notifyOnDates: true,
  },
  {
    id: 'OSBLR-2027-3180',
    name: 'Ananya Sharma',
    email: 'ananya.s@bmsce.ac.in',
    collegeOrCompany: 'BMS College of Engineering',
    role: 'Software Developer',
    interest: 'Technical Talks Only',
    tshirtSize: 'S',
    github: 'https://github.com/ananya-dev',
    status: 'ACTIVE',
    registeredAt: '2026-11-07T02:10:00.000Z',
    notifyOnDates: true,
  },
  {
    id: 'OSBLR-2027-4921',
    name: 'Vikram Rao',
    email: 'vikram.rao@dell.com',
    collegeOrCompany: 'Dell Technologies',
    role: 'DevOps / SysAdmin',
    interest: 'Hands-on Workshops (YaST/OBS)',
    tshirtSize: 'XL',
    github: '',
    status: 'ACTIVE',
    registeredAt: '2026-11-07T03:00:00.000Z',
    notifyOnDates: true,
  },
];

const SEED_TEAMS: HackathonTeam[] = [
  {
    id: 'HACK-BLR-4821',
    teamName: 'Geeko Kernels',
    leaderName: 'Divyanshu Prakash',
    leaderEmail: 'divyanshuprakash914@gmail.com',
    teamSize: 3,
    trackId: 'linux-tooling',
    leaderTshirtSize: 'M',
    members: [
      'Divyanshu Prakash (divyanshuprakash914@gmail.com) [Leader]',
      'Rahul Sharma (rahul@pes.edu)',
      'Priya Nair (priya.n@gmail.com)',
    ],
    github: 'https://github.com/divyanshuprakas-h/geeko-cli',
    projectIdea: 'A high-speed Rust-based terminal monitor for openSUSE package repos & Zypper mirrors.',
    status: 'ACTIVE',
    registeredAt: '2026-11-06T20:00:00.000Z',
  },
  {
    id: 'HACK-BLR-2094',
    teamName: 'OBS Automated',
    leaderName: 'Dushyant Acharya',
    leaderEmail: 'dushyant@example.com',
    teamSize: 2,
    trackId: 'obs-packaging',
    leaderTshirtSize: 'L',
    members: [
      'Dushyant Acharya (dushyant@example.com) [Leader]',
      'Kiran Patel (kiran.p@gmail.com)',
    ],
    github: 'https://github.com/dushyant/obs-bot',
    projectIdea: 'Automated Open Build Service package build dispatcher for GitHub releases.',
    status: 'ACTIVE',
    registeredAt: '2026-11-06T21:10:00.000Z',
  },
  {
    id: 'HACK-BLR-7312',
    teamName: 'MicroOS Titans',
    leaderName: 'Rohan Verma',
    leaderEmail: 'rohan.v@rvce.edu.in',
    teamSize: 4,
    trackId: 'microos-iot',
    leaderTshirtSize: 'XL',
    members: [
      'Rohan Verma (rohan.v@rvce.edu.in) [Leader]',
      'Nikhil Nair (nikhil@rvce.edu.in)',
      'Tanvi Hegde (tanvi@rvce.edu.in)',
      'Samarth K (samarth@rvce.edu.in)',
    ],
    github: 'https://github.com/rohan-v/microos-edge',
    projectIdea: 'Immutable edge IoT container deployment system using openSUSE MicroOS.',
    status: 'ACTIVE',
    registeredAt: '2026-11-07T01:30:00.000Z',
  },
];

const SEED_VOLUNTEERS: Volunteer[] = [
  {
    id: 'VOL-BLR-101',
    name: 'Jaidev Basandrai',
    email: 'jaidev@nst.edu.in',
    phone: '+91 98765 43210',
    collegeOrCompany: 'Newton School of Technology',
    assignedArea: 'Stage & AV',
    tshirtSize: 'L',
    status: 'CONFIRMED',
    registeredAt: '2026-11-06T15:00:00.000Z',
  },
  {
    id: 'VOL-BLR-102',
    name: 'Sneha Narayanan',
    email: 'sneha.n@rvce.edu.in',
    phone: '+91 98111 22334',
    collegeOrCompany: 'RV College of Engineering',
    assignedArea: 'Registration Desk',
    tshirtSize: 'M',
    status: 'CONFIRMED',
    registeredAt: '2026-11-06T16:20:00.000Z',
  },
  {
    id: 'VOL-BLR-103',
    name: 'Adarsh Kumar',
    email: 'adarsh.k@pes.edu',
    phone: '+91 99000 88776',
    collegeOrCompany: 'PES University',
    assignedArea: 'Workshop Lab Support',
    tshirtSize: 'XL',
    status: 'CONFIRMED',
    registeredAt: '2026-11-06T17:40:00.000Z',
  },
  {
    id: 'VOL-BLR-104',
    name: 'Meera Joshi',
    email: 'meera.j@gmail.com',
    phone: '+91 98450 11223',
    collegeOrCompany: 'Freelance Linux Engineer',
    assignedArea: 'Hackathon Mentor',
    tshirtSize: 'S',
    status: 'CONFIRMED',
    registeredAt: '2026-11-07T00:15:00.000Z',
  },
];

/* ----------------- PARTICIPANTS ----------------- */

export function getParticipants(): Participant[] {
  try {
    const raw = localStorage.getItem(PARTICIPANTS_KEY);
    if (!raw) {
      localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(SEED_PARTICIPANTS));
      return SEED_PARTICIPANTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(SEED_PARTICIPANTS));
      return SEED_PARTICIPANTS;
    }
    // Normalize status
    return parsed.map((p) => ({
      ...p,
      status: p.status || 'ACTIVE',
    }));
  } catch {
    return SEED_PARTICIPANTS;
  }
}

export function saveParticipant(participant: Participant): void {
  const current = getParticipants();
  const index = current.findIndex((p) => p.id === participant.id);
  if (index >= 0) {
    current[index] = participant;
  } else {
    current.unshift(participant);
  }
  localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(current));
}

export function toggleParticipantStatus(id: string): Participant | null {
  const current = getParticipants();
  const target = current.find((p) => p.id === id);
  if (target) {
    target.status = target.status === 'ACTIVE' ? 'REVOKED' : 'ACTIVE';
    localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(current));
    return target;
  }
  return null;
}

export function deleteParticipant(id: string): void {
  const current = getParticipants().filter((p) => p.id !== id);
  localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(current));
}

/* ----------------- HACKATHON TEAMS ----------------- */

export function getHackathonTeams(): HackathonTeam[] {
  try {
    const raw = localStorage.getItem(TEAMS_KEY);
    if (!raw) {
      localStorage.setItem(TEAMS_KEY, JSON.stringify(SEED_TEAMS));
      return SEED_TEAMS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(TEAMS_KEY, JSON.stringify(SEED_TEAMS));
      return SEED_TEAMS;
    }
    return parsed.map((t) => ({
      ...t,
      status: t.status || 'ACTIVE',
      members: Array.isArray(t.members) ? t.members : (typeof t.memberNames === 'string' ? t.memberNames.split(',') : []),
    }));
  } catch {
    return SEED_TEAMS;
  }
}

export function saveHackathonTeam(team: HackathonTeam): void {
  const current = getHackathonTeams();
  const index = current.findIndex((t) => t.id === team.id);
  if (index >= 0) {
    current[index] = team;
  } else {
    current.unshift(team);
  }
  localStorage.setItem(TEAMS_KEY, JSON.stringify(current));
}

export function toggleTeamStatus(id: string): HackathonTeam | null {
  const current = getHackathonTeams();
  const target = current.find((t) => t.id === id);
  if (target) {
    target.status = target.status === 'ACTIVE' ? 'REVOKED' : 'ACTIVE';
    localStorage.setItem(TEAMS_KEY, JSON.stringify(current));
    return target;
  }
  return null;
}

export function deleteHackathonTeam(id: string): void {
  const current = getHackathonTeams().filter((t) => t.id !== id);
  localStorage.setItem(TEAMS_KEY, JSON.stringify(current));
}

/* ----------------- VOLUNTEERS ----------------- */

export function getVolunteers(): Volunteer[] {
  try {
    const raw = localStorage.getItem(VOLUNTEERS_KEY);
    if (!raw) {
      localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(SEED_VOLUNTEERS));
      return SEED_VOLUNTEERS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(SEED_VOLUNTEERS));
      return SEED_VOLUNTEERS;
    }
    return parsed;
  } catch {
    return SEED_VOLUNTEERS;
  }
}

export function saveVolunteer(volunteer: Volunteer): void {
  const current = getVolunteers();
  const index = current.findIndex((v) => v.id === volunteer.id);
  if (index >= 0) {
    current[index] = volunteer;
  } else {
    current.unshift(volunteer);
  }
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(current));
}

export function toggleVolunteerStatus(id: string): Volunteer | null {
  const current = getVolunteers();
  const target = current.find((v) => v.id === id);
  if (target) {
    target.status = target.status === 'CONFIRMED' ? 'REVOKED' : 'CONFIRMED';
    localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(current));
    return target;
  }
  return null;
}

export function deleteVolunteer(id: string): void {
  const current = getVolunteers().filter((v) => v.id !== id);
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(current));
}

/* ----------------- STATS & LOGISTICS ----------------- */

export function getTshirtBreakdown(): Record<string, number> {
  const breakdown: Record<string, number> = { S: 0, M: 0, L: 0, XL: 0, XXL: 0 };
  const participants = getParticipants();
  const teams = getHackathonTeams();
  const volunteers = getVolunteers();

  participants.forEach((p) => {
    if (p.status !== 'REVOKED' && p.tshirtSize) {
      const size = p.tshirtSize.toUpperCase();
      breakdown[size] = (breakdown[size] || 0) + 1;
    }
  });

  teams.forEach((t) => {
    if (t.status !== 'REVOKED' && t.leaderTshirtSize) {
      const size = t.leaderTshirtSize.toUpperCase();
      breakdown[size] = (breakdown[size] || 0) + 1;
    }
  });

  volunteers.forEach((v) => {
    if (v.status !== 'REVOKED' && v.tshirtSize) {
      const size = v.tshirtSize.toUpperCase();
      breakdown[size] = (breakdown[size] || 0) + 1;
    }
  });

  return breakdown;
}

/* ----------------- CSV EXPORT ----------------- */

export function exportToCsv(filename: string, rows: (string | number)[][], headers: string[]): void {
  const escapeCsv = (val: string | number) => `"${String(val).replace(/"/g, '""')}"`;
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [headers.map(escapeCsv).join(','), ...rows.map((row) => row.map(escapeCsv).join(','))].join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ----------------- ADMIN AUTH ----------------- */

export const DEFAULT_ADMIN_PIN = 'Prakash@2006';

export function isAdminAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAdminAuthenticated(val: boolean): void {
  try {
    if (val) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
    }
  } catch {
    // fallback
  }
}
