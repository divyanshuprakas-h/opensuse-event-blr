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

// Initial storage defaults
const SEED_PARTICIPANTS: Participant[] = [];
const SEED_TEAMS: HackathonTeam[] = [];
const SEED_VOLUNTEERS: Volunteer[] = [];

/* ----------------- PARTICIPANTS ----------------- */

export function getParticipants(): Participant[] {
  try {
    const raw = localStorage.getItem(PARTICIPANTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Normalize status
    return parsed.map((p) => ({
      ...p,
      status: p.status || 'ACTIVE',
    }));
  } catch {
    return [];
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
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((t) => ({
      ...t,
      status: t.status || 'ACTIVE',
      members: Array.isArray(t.members) ? t.members : (typeof t.memberNames === 'string' ? t.memberNames.split(',') : []),
    }));
  } catch {
    return [];
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
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
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

// Cryptographic SHA-256 hash of organizer access passphrase
// Evaluated in-memory via Web Crypto API. Raw secret is never committed or exposed in bundles.
const ADMIN_PASS_HASH =
  (import.meta as any).env?.VITE_ADMIN_HASH ||
  'a2944fd8244f790d193f80746d69b6b217b8ee06af230cf035736401b8eb8a49';

export async function verifyAdminPassphrase(input: string): Promise<boolean> {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(input.trim());
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    return hashHex === ADMIN_PASS_HASH;
  } catch {
    return false;
  }
}

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
