import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Users,
  Code2,
  HeartHandshake,
  Shirt,
  Search,
  Filter,
  Download,
  Plus,
  Edit2,
  Trash2,
  Ban,
  RotateCcw,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lock,
  Unlock,
  ArrowLeft,
  X,
  Sparkles,
  Save,
  Check,
  Eye,
  FileSpreadsheet
} from 'lucide-react';
import {
  Participant,
  HackathonTeam,
  Volunteer,
  getParticipants,
  saveParticipant,
  toggleParticipantStatus,
  deleteParticipant,
  getHackathonTeams,
  saveHackathonTeam,
  toggleTeamStatus,
  deleteHackathonTeam,
  getVolunteers,
  saveVolunteer,
  toggleVolunteerStatus,
  deleteVolunteer,
  getTshirtBreakdown,
  exportToCsv,
  isAdminAuthenticated,
  setAdminAuthenticated,
  verifyAdminPassphrase
} from '../services/adminService';
import { sendInstantConfirmationEmail, SENDER_EMAIL } from '../services/emailService';

interface AdminDashboardProps {
  onBackToSite: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToSite }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(isAdminAuthenticated());
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'participants' | 'teams' | 'volunteers' | 'tshirts'>('participants');

  // Data states
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [teams, setTeams] = useState<HackathonTeam[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [expandedTeamId, setExpandedTeamId] = useState<string | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'REVOKED'>('ALL');
  const [trackFilter, setTrackFilter] = useState<string>('ALL');

  // Modals
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null);
  const [editingTeam, setEditingTeam] = useState<HackathonTeam | null>(null);
  const [editingVolunteer, setEditingVolunteer] = useState<Volunteer | null>(null);

  const [isAddParticipantOpen, setIsAddParticipantOpen] = useState(false);
  const [isAddTeamOpen, setIsAddTeamOpen] = useState(false);
  const [isAddVolunteerOpen, setIsAddVolunteerOpen] = useState(false);

  // Feedback Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Load data on mount / tab change
  const refreshData = () => {
    setParticipants(getParticipants());
    setTeams(getHackathonTeams());
    setVolunteers(getVolunteers());
  };

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
    }
  }, [isAuthenticated]);

  // Auth Submit with cryptographic SHA-256 verification
  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;
    setIsVerifying(true);
    const isValid = await verifyAdminPassphrase(pinInput);
    setIsVerifying(false);
    if (isValid) {
      setAdminAuthenticated(true);
      setIsAuthenticated(true);
      setPinError(false);
      refreshData();
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
    onBackToSite();
  };

  const handleExitToSite = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
    onBackToSite();
  };

  /* ----------------- FILTERED DATA ----------------- */

  const filteredParticipants = participants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.collegeOrCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    const matchesTrack = trackFilter === 'ALL' || p.interest.toLowerCase().includes(trackFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesTrack;
  });

  const filteredTeams = teams.filter((t) => {
    const matchesSearch =
      t.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.leaderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.leaderEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.projectIdea && t.projectIdea.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || t.status === statusFilter;
    const matchesTrack = trackFilter === 'ALL' || t.trackId.toLowerCase().includes(trackFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesTrack;
  });

  const filteredVolunteers = volunteers.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.collegeOrCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.assignedArea.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || v.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  /* ----------------- ACTIONS: PARTICIPANTS ----------------- */

  const handleToggleParticipant = (id: string) => {
    const updated = toggleParticipantStatus(id);
    refreshData();
    if (updated) {
      showToast(`Participant ${updated.name} pass set to ${updated.status}`);
    }
  };

  const handleDeleteParticipant = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to completely delete ${name}?`)) {
      deleteParticipant(id);
      refreshData();
      showToast(`Deleted ${name} from records`);
    }
  };

  const handleResendParticipantEmail = async (p: Participant) => {
    showToast(`Sending pass to ${p.email}...`);
    await sendInstantConfirmationEmail({
      recipientEmail: p.email,
      recipientName: p.name,
      passId: p.id,
      tshirtSize: p.tshirtSize,
      eventTrack: p.interest,
      eventType: 'Day 1 Conference Pass',
    });
    showToast(`Pass email successfully dispatched to ${p.email}!`);
  };

  /* ----------------- ACTIONS: TEAMS ----------------- */

  const handleToggleTeam = (id: string) => {
    const updated = toggleTeamStatus(id);
    refreshData();
    if (updated) {
      showToast(`Team ${updated.teamName} set to ${updated.status}`);
    }
  };

  const handleDeleteTeam = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to completely delete team ${name}?`)) {
      deleteHackathonTeam(id);
      refreshData();
      showToast(`Deleted team ${name}`);
    }
  };

  const handleResendTeamEmail = async (t: HackathonTeam) => {
    showToast(`Sending team pass to ${t.leaderEmail}...`);
    await sendInstantConfirmationEmail({
      recipientEmail: t.leaderEmail,
      recipientName: t.leaderName,
      passId: t.id,
      tshirtSize: t.leaderTshirtSize,
      eventTrack: t.trackId,
      eventType: 'Day 2 Hackathon Team Pass',
      teamName: t.teamName,
    });
    showToast(`Team pass successfully dispatched to ${t.leaderEmail}!`);
  };

  /* ----------------- ACTIONS: VOLUNTEERS ----------------- */

  const handleToggleVolunteer = (id: string) => {
    const updated = toggleVolunteerStatus(id);
    refreshData();
    if (updated) {
      showToast(`Volunteer ${updated.name} set to ${updated.status}`);
    }
  };

  const handleDeleteVolunteer = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete volunteer ${name}?`)) {
      deleteVolunteer(id);
      refreshData();
      showToast(`Deleted volunteer ${name}`);
    }
  };

  /* ----------------- CSV EXPORTS ----------------- */

  const handleExportParticipantsCsv = () => {
    const rows = participants.map((p) => [
      p.id,
      p.name,
      p.email,
      p.collegeOrCompany,
      p.role,
      p.interest,
      p.tshirtSize,
      p.status,
      p.github || '',
      p.registeredAt,
    ]);
    exportToCsv(
      `opensuse_participants_${new Date().toISOString().slice(0, 10)}.csv`,
      rows,
      ['Pass ID', 'Name', 'Email', 'College/Company', 'Role', 'Interest', 'T-Shirt Size', 'Status', 'GitHub', 'Registered At']
    );
  };

  const handleExportTeamsCsv = () => {
    const rows = teams.map((t) => [
      t.id,
      t.teamName,
      t.trackId,
      t.teamSize,
      t.leaderName,
      t.leaderEmail,
      t.leaderTshirtSize,
      (t.members || []).join('; '),
      t.github || '',
      t.projectIdea || '',
      t.status,
      t.registeredAt,
    ]);
    exportToCsv(
      `opensuse_hackathon_teams_${new Date().toISOString().slice(0, 10)}.csv`,
      rows,
      ['Hack Pass ID', 'Team Name', 'Track', 'Team Size', 'Leader Name', 'Leader Email', 'Leader T-Shirt', 'Members', 'GitHub', 'Project Idea', 'Status', 'Registered At']
    );
  };

  const handleExportVolunteersCsv = () => {
    const rows = volunteers.map((v) => [
      v.id,
      v.name,
      v.email,
      v.phone || '',
      v.collegeOrCompany,
      v.assignedArea,
      v.tshirtSize,
      v.status,
      v.registeredAt,
    ]);
    exportToCsv(
      `opensuse_volunteers_${new Date().toISOString().slice(0, 10)}.csv`,
      rows,
      ['Volunteer ID', 'Name', 'Email', 'Phone', 'College/Company', 'Assigned Duty Area', 'T-Shirt Size', 'Status', 'Registered At']
    );
  };

  const tshirtStats = getTshirtBreakdown();
  const totalTshirts = Object.values(tshirtStats).reduce((acc, curr) => acc + curr, 0);

  /* ========================================================================= */
  /* LOGIN / AUTH VIEW                                                         */
  /* ========================================================================= */
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col items-center justify-center p-4 font-mono">
        <div className="w-full max-w-md bg-obsidian-900 border-2 border-geeko-500 p-8 shadow-[8px_8px_0px_0px_#173f35] relative">
          
          <button
            onClick={handleExitToSite}
            className="absolute top-4 right-4 text-slate-400 hover:text-white flex items-center gap-1 text-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Site</span>
          </button>

          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 bg-geeko-500 border border-black p-1 flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}geeko.svg`} alt="openSUSE" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-black text-white uppercase tracking-wider">
                openSUSE India // BLR
              </div>
              <div className="text-xs text-geeko-400 font-bold">
                ORGANIZER CONTROL CENTER
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-pine-950/60 border border-geeko-500/40 p-3 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-geeko-400 font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>RESTRICTED ORGANIZER DESK</span>
              </div>
              <p>
                Enter the organizer passphrase to access participants, hackathon teams, volunteer rosters, and revoke permissions.
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                  Organizer Access Passphrase
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError(false);
                  }}
                  placeholder="Enter organizer passphrase"
                  className="w-full bg-obsidian-950 border-2 border-slate-700 focus:border-geeko-500 px-3.5 py-2.5 text-white font-mono text-sm outline-none"
                />
                {pinError && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Incorrect passphrase. Access denied.</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Unlock className="w-4 h-4" />
                <span>{isVerifying ? 'Verifying...' : 'Unlock Control Center'}</span>
              </button>
            </form>

            <div className="pt-2 text-center">
              <button
                onClick={handleExitToSite}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                ← Return to Public Event Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================================= */
  /* MAIN ADMIN CONTROL CENTER                                                 */
  /* ========================================================================= */
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 font-mono flex flex-col selection:bg-geeko-500 selection:text-black">
      
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-geeko-500 text-black px-4 py-2.5 font-bold text-xs uppercase border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="bg-obsidian-900 border-b-2 border-geeko-500 sticky top-0 z-40 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-4 h-4 text-geeko-400" />
              <span className="hidden sm:inline">Back to Site</span>
            </button>

            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img src={`${import.meta.env.BASE_URL}geeko.svg`} alt="openSUSE" className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-sm tracking-tight">openSUSE India</span>
                <span className="bg-geeko-500 text-black px-1.5 py-0.2 text-[10px] font-black uppercase">
                  ADMIN DESK
                </span>
              </div>
              <div className="text-[11px] text-slate-400 hidden sm:block">
                Bengaluru Connect '27 • Host: Newton School of Technology
              </div>
            </div>
          </div>

          {/* Quick Stats Summary Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 text-xs">
            <div className="bg-obsidian-950 border border-slate-800 px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <Users className="w-3.5 h-3.5 text-geeko-400" />
              <span>Participants: <strong className="text-white">{participants.filter(p => p.status === 'ACTIVE').length}</strong></span>
            </div>
            <div className="bg-obsidian-950 border border-slate-800 px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <Code2 className="w-3.5 h-3.5 text-geeko-400" />
              <span>Teams: <strong className="text-white">{teams.filter(t => t.status === 'ACTIVE').length}</strong></span>
            </div>
            <div className="bg-obsidian-950 border border-slate-800 px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <HeartHandshake className="w-3.5 h-3.5 text-geeko-400" />
              <span>Volunteers: <strong className="text-white">{volunteers.filter(v => v.status === 'CONFIRMED').length}</strong></span>
            </div>
            <div className="bg-obsidian-950 border border-slate-800 px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <Shirt className="w-3.5 h-3.5 text-geeko-400" />
              <span>Shirts: <strong className="text-geeko-300">{totalTshirts}</strong></span>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 bg-red-950/60 border border-red-500/50 hover:bg-red-900 text-red-200 text-xs flex items-center gap-1 cursor-pointer shrink-0"
              title="Lock Admin Desk"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-800 pb-3">
          
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => {
                setActiveTab('participants');
                setSearchQuery('');
              }}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'participants'
                  ? 'bg-geeko-500 text-black border-black shadow-[3px_3px_0px_0px_#ffffff]'
                  : 'bg-obsidian-900 text-slate-300 border-slate-800 hover:border-geeko-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Day 1 Participants ({participants.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('teams');
                setSearchQuery('');
              }}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'teams'
                  ? 'bg-geeko-500 text-black border-black shadow-[3px_3px_0px_0px_#ffffff]'
                  : 'bg-obsidian-900 text-slate-300 border-slate-800 hover:border-geeko-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Hackathon Teams ({teams.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('volunteers');
                setSearchQuery('');
              }}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'volunteers'
                  ? 'bg-geeko-500 text-black border-black shadow-[3px_3px_0px_0px_#ffffff]'
                  : 'bg-obsidian-900 text-slate-300 border-slate-800 hover:border-geeko-400 hover:text-white'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Volunteers & Mentors ({volunteers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('tshirts')}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'tshirts'
                  ? 'bg-geeko-500 text-black border-black shadow-[3px_3px_0px_0px_#ffffff]'
                  : 'bg-obsidian-900 text-slate-300 border-slate-800 hover:border-geeko-400 hover:text-white'
              }`}
            >
              <Shirt className="w-4 h-4" />
              <span>T-Shirt Logistics</span>
            </button>
          </div>

          {/* Quick Export Button */}
          <div>
            {activeTab === 'participants' && (
              <button
                onClick={handleExportParticipantsCsv}
                className="px-3 py-1.5 bg-obsidian-900 border border-geeko-500 hover:bg-geeko-500 hover:text-black text-geeko-300 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#173f35]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            )}
            {activeTab === 'teams' && (
              <button
                onClick={handleExportTeamsCsv}
                className="px-3 py-1.5 bg-obsidian-900 border border-geeko-500 hover:bg-geeko-500 hover:text-black text-geeko-300 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#173f35]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Teams CSV</span>
              </button>
            )}
            {activeTab === 'volunteers' && (
              <button
                onClick={handleExportVolunteersCsv}
                className="px-3 py-1.5 bg-obsidian-900 border border-geeko-500 hover:bg-geeko-500 hover:text-black text-geeko-300 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#173f35]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Volunteers CSV</span>
              </button>
            )}
          </div>

        </div>

        {/* Search & Filter Toolbar (for table tabs) */}
        {activeTab !== 'tshirts' && (
          <div className="bg-obsidian-900 border border-slate-800 p-3.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'participants'
                    ? 'Search by name, email, college, pass ID...'
                    : activeTab === 'teams'
                    ? 'Search by team, leader, track, project...'
                    : 'Search volunteers by name, email, duty area...'
                }
                className="w-full bg-obsidian-950 border border-slate-700 focus:border-geeko-500 pl-9 pr-3 py-2 text-xs font-mono text-white outline-none"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold uppercase shrink-0">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-obsidian-950 border border-slate-700 text-xs font-mono text-white px-2.5 py-2 outline-none focus:border-geeko-500"
              >
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">{activeTab === 'volunteers' ? 'Confirmed' : 'Active Pass'}</option>
                <option value="REVOKED">Revoked</option>
              </select>

              {/* Add New Entry Button */}
              {activeTab === 'participants' && (
                <button
                  onClick={() => setIsAddParticipantOpen(true)}
                  className="px-3 py-2 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add Attendee</span>
                </button>
              )}
              {activeTab === 'teams' && (
                <button
                  onClick={() => setIsAddTeamOpen(true)}
                  className="px-3 py-2 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add Team</span>
                </button>
              )}
              {activeTab === 'volunteers' && (
                <button
                  onClick={() => setIsAddVolunteerOpen(true)}
                  className="px-3 py-2 bg-geeko-500 hover:bg-geeko-400 text-black font-black text-xs uppercase flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add Volunteer</span>
                </button>
              )}
            </div>

          </div>
        )}

        {/* TAB 1: DAY 1 PARTICIPANTS TABLE */}
        {activeTab === 'participants' && (
          <div className="bg-obsidian-900 border-2 border-slate-800 overflow-x-auto shadow-[4px_4px_0px_0px_#173f35]">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-obsidian-950 border-b-2 border-slate-800 text-slate-400 uppercase text-[11px]">
                  <th className="py-3 px-3">Pass ID</th>
                  <th className="py-3 px-3">Attendee</th>
                  <th className="py-3 px-3">College / Org</th>
                  <th className="py-3 px-3">Role & Track</th>
                  <th className="py-3 px-3 text-center">T-Shirt</th>
                  <th className="py-3 px-3 text-center">Status</th>
                  <th className="py-3 px-3 text-right">Actions & Permissions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredParticipants.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-slate-400">
                      No participants match your query.
                    </td>
                  </tr>
                ) : (
                  filteredParticipants.map((p) => {
                    const isRevoked = p.status === 'REVOKED';
                    return (
                      <tr
                        key={p.id}
                        className={`hover:bg-slate-800/40 transition-colors ${
                          isRevoked ? 'opacity-60 bg-red-950/10' : ''
                        }`}
                      >
                        <td className="py-3 px-3 font-bold text-geeko-400 whitespace-nowrap">
                          {p.id}
                        </td>
                        <td className="py-3 px-3">
                          <div className={`font-bold text-white ${isRevoked ? 'line-through text-slate-400' : ''}`}>
                            {p.name}
                          </div>
                          <div className="text-[11px] text-slate-400">{p.email}</div>
                          {p.github && (
                            <a
                              href={p.github.startsWith('http') ? p.github : `https://${p.github}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] text-geeko-400 hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <span>GH profile</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </td>
                        <td className="py-3 px-3 text-slate-300">
                          <div>{p.collegeOrCompany || 'N/A'}</div>
                          <div className="text-[10px] text-slate-400">{p.role}</div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="bg-obsidian-950 border border-slate-700 px-2 py-0.5 text-[11px] text-slate-200 block truncate max-w-[200px]">
                            {p.interest}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className="font-bold text-geeko-300 bg-pine-950 border border-geeko-500/40 px-2 py-0.5">
                            {p.tshirtSize}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {isRevoked ? (
                            <span className="bg-red-950 border border-red-500/60 text-red-300 text-[10px] font-bold px-2 py-0.5 uppercase">
                              REVOKED
                            </span>
                          ) : (
                            <span className="bg-geeko-500 text-black text-[10px] font-black px-2 py-0.5 uppercase">
                              ACTIVE
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Resend Email */}
                            <button
                              onClick={() => handleResendParticipantEmail(p)}
                              title="Resend Pass Email"
                              className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white cursor-pointer"
                            >
                              <Mail className="w-3.5 h-3.5 text-geeko-400" />
                            </button>

                            {/* Edit */}
                            <button
                              onClick={() => setEditingParticipant(p)}
                              title="Edit Attendee Details"
                              className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>

                            {/* Revoke / Restore */}
                            <button
                              onClick={() => handleToggleParticipant(p.id)}
                              title={isRevoked ? 'Restore Pass' : 'Revoke Pass'}
                              className={`p-1.5 border cursor-pointer ${
                                isRevoked
                                  ? 'bg-geeko-500 text-black border-black hover:bg-geeko-400'
                                  : 'bg-red-950 border-red-500/60 text-red-300 hover:bg-red-900'
                              }`}
                            >
                              {isRevoked ? <RotateCcw className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleDeleteParticipant(p.id, p.name)}
                              title="Delete Permanently"
                              className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-red-500 text-slate-400 hover:text-red-400 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: DAY 2 HACKATHON TEAMS TABLE */}
        {activeTab === 'teams' && (
          <div className="space-y-4">
            <div className="bg-pine-950/40 border border-geeko-500/30 p-3 text-xs text-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-geeko-400" />
                <span>
                  Click any <strong className="text-white">Team Name</strong> below to view all team members, emails, project idea statements, and GitHub repos.
                </span>
              </div>
              <span className="text-geeko-400 font-bold hidden sm:inline">10-Hour Hackathon Sprint</span>
            </div>

            <div className="bg-obsidian-900 border-2 border-slate-800 overflow-x-auto shadow-[4px_4px_0px_0px_#173f35]">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-obsidian-950 border-b-2 border-slate-800 text-slate-400 uppercase text-[11px]">
                    <th className="py-3 px-3">Team Name (Click to Expand)</th>
                    <th className="py-3 px-3">Pass ID</th>
                    <th className="py-3 px-3">Track</th>
                    <th className="py-3 px-3 text-center">Team Size</th>
                    <th className="py-3 px-3">Team Leader</th>
                    <th className="py-3 px-3 text-center">Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredTeams.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-10 text-slate-400">
                        No hackathon teams match your search.
                      </td>
                    </tr>
                  ) : (
                    filteredTeams.map((t) => {
                      const isRevoked = t.status === 'REVOKED';
                      const isExpanded = expandedTeamId === t.id;

                      return (
                        <React.Fragment key={t.id}>
                          <tr
                            className={`hover:bg-slate-800/40 transition-colors ${
                              isRevoked ? 'opacity-60 bg-red-950/10' : ''
                            } ${isExpanded ? 'bg-pine-950/50' : ''}`}
                          >
                            <td className="py-3 px-3">
                              <button
                                onClick={() => setExpandedTeamId(isExpanded ? null : t.id)}
                                className="font-black text-white hover:text-geeko-400 flex items-center gap-2 text-left cursor-pointer group"
                              >
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-geeko-400 shrink-0" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-geeko-400 shrink-0" />
                                )}
                                <span className={`underline decoration-geeko-500/50 underline-offset-4 ${isRevoked ? 'line-through text-slate-400' : ''}`}>
                                  {t.teamName}
                                </span>
                              </button>
                            </td>

                            <td className="py-3 px-3 font-bold text-geeko-400 whitespace-nowrap">
                              {t.id}
                            </td>

                            <td className="py-3 px-3 text-slate-200">
                              <span className="bg-obsidian-950 border border-slate-700 px-2 py-0.5 text-[11px]">
                                {t.trackId}
                              </span>
                            </td>

                            <td className="py-3 px-3 text-center">
                              <span className="bg-pine-950 border border-geeko-500/40 text-geeko-300 font-bold px-2 py-0.5">
                                {t.teamSize} Member{t.teamSize > 1 ? 's' : ''}
                              </span>
                            </td>

                            <td className="py-3 px-3">
                              <div className="font-bold text-white">{t.leaderName}</div>
                              <div className="text-[11px] text-slate-400">{t.leaderEmail}</div>
                              <div className="text-[10px] text-geeko-400">Leader Shirt: Size {t.leaderTshirtSize}</div>
                            </td>

                            <td className="py-3 px-3 text-center">
                              {isRevoked ? (
                                <span className="bg-red-950 border border-red-500/60 text-red-300 text-[10px] font-bold px-2 py-0.5 uppercase">
                                  REVOKED
                                </span>
                              ) : (
                                <span className="bg-geeko-500 text-black text-[10px] font-black px-2 py-0.5 uppercase">
                                  ACTIVE
                                </span>
                              )}
                            </td>

                            <td className="py-3 px-3 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-1.5">
                                {/* Resend Email */}
                                <button
                                  onClick={() => handleResendTeamEmail(t)}
                                  title="Resend Team Pass Email"
                                  className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white cursor-pointer"
                                >
                                  <Mail className="w-3.5 h-3.5 text-geeko-400" />
                                </button>

                                {/* Edit Team */}
                                <button
                                  onClick={() => setEditingTeam(t)}
                                  title="Edit Team"
                                  className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white cursor-pointer"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                </button>

                                {/* Revoke / Restore */}
                                <button
                                  onClick={() => handleToggleTeam(t.id)}
                                  title={isRevoked ? 'Restore Team' : 'Revoke Team'}
                                  className={`p-1.5 border cursor-pointer ${
                                    isRevoked
                                      ? 'bg-geeko-500 text-black border-black hover:bg-geeko-400'
                                      : 'bg-red-950 border-red-500/60 text-red-300 hover:bg-red-900'
                                  }`}
                                >
                                  {isRevoked ? <RotateCcw className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                                </button>

                                {/* Delete */}
                                <button
                                  onClick={() => handleDeleteTeam(t.id, t.teamName)}
                                  title="Delete Team"
                                  className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-red-500 text-slate-400 hover:text-red-400 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* EXPANDED VIEW: ALL TEAM MEMBERS & DETAILS */}
                          {isExpanded && (
                            <tr className="bg-obsidian-950/90 border-b-2 border-geeko-500/50">
                              <td colSpan={7} className="p-4 sm:p-5">
                                <div className="bg-obsidian-900 border-2 border-geeko-500/60 p-4 space-y-4">
                                  
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                                    <div>
                                      <div className="text-sm font-black text-white uppercase flex items-center gap-2">
                                        <span>TEAM MEMBERS & ROSTER: {t.teamName}</span>
                                        <span className="text-[10px] bg-geeko-500 text-black font-black px-1.5 py-0.2">
                                          {t.id}
                                        </span>
                                      </div>
                                      <div className="text-xs text-slate-400">
                                        Track: <strong className="text-geeko-300">{t.trackId}</strong> • Table Size: {t.teamSize} Member(s)
                                      </div>
                                    </div>

                                    <button
                                      onClick={() => setEditingTeam(t)}
                                      className="px-2.5 py-1 bg-obsidian-950 border border-geeko-500 hover:bg-geeko-500 hover:text-black text-geeko-300 text-xs flex items-center gap-1.5 cursor-pointer w-fit"
                                    >
                                      <Edit2 className="w-3 h-3" />
                                      <span>Edit Members Roster</span>
                                    </button>
                                  </div>

                                  {/* Team Members List */}
                                  <div>
                                    <div className="text-xs font-bold text-slate-300 uppercase mb-2 flex items-center gap-1.5">
                                      <Users className="w-3.5 h-3.5 text-geeko-400" />
                                      <span>Registered Members ({t.members.length > 0 ? t.members.length : 1})</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {/* Leader Box */}
                                      <div className="bg-obsidian-950 border border-geeko-500/50 p-2.5 flex items-center justify-between">
                                        <div>
                                          <div className="font-bold text-white text-xs flex items-center gap-1.5">
                                            <span>{t.leaderName}</span>
                                            <span className="text-[9px] bg-geeko-500 text-black font-black px-1 py-0.2 uppercase">LEADER</span>
                                          </div>
                                          <div className="text-[11px] text-slate-400">{t.leaderEmail}</div>
                                        </div>
                                        <span className="text-xs text-geeko-300 font-bold bg-pine-950 px-2 py-0.5 border border-geeko-500/30">
                                          Size {t.leaderTshirtSize}
                                        </span>
                                      </div>

                                      {/* Other Members */}
                                      {t.members.filter(m => !m.includes(t.leaderEmail)).map((member, idx) => (
                                        <div key={idx} className="bg-obsidian-950 border border-slate-800 p-2.5 flex items-center justify-between">
                                          <div className="text-xs text-slate-200 font-medium">
                                            {member}
                                          </div>
                                          <span className="text-[10px] text-slate-400 uppercase bg-slate-900 px-1.5 py-0.5 border border-slate-800">
                                            Member
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Project Idea Statement & Repo Link */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                                    <div>
                                      <div className="text-[11px] font-bold text-slate-400 uppercase mb-1">
                                        Project Idea / Problem Statement:
                                      </div>
                                      <p className="text-xs text-slate-200 bg-obsidian-950 p-2.5 border border-slate-800 leading-relaxed font-sans">
                                        {t.projectIdea || 'No project description submitted yet.'}
                                      </p>
                                    </div>

                                    <div>
                                      <div className="text-[11px] font-bold text-slate-400 uppercase mb-1">
                                        GitHub Repository / Submission Link:
                                      </div>
                                      {t.github ? (
                                        <a
                                          href={t.github.startsWith('http') ? t.github : `https://${t.github}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-xs text-geeko-400 hover:underline bg-obsidian-950 p-2.5 border border-slate-800 flex items-center justify-between"
                                        >
                                          <span className="truncate">{t.github}</span>
                                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                        </a>
                                      ) : (
                                        <div className="text-xs text-slate-500 bg-obsidian-950 p-2.5 border border-slate-800 italic">
                                          No repository submitted
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: VOLUNTEERS & MENTORS TABLE */}
        {activeTab === 'volunteers' && (
          <div className="bg-obsidian-900 border-2 border-slate-800 overflow-x-auto shadow-[4px_4px_0px_0px_#173f35]">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-obsidian-950 border-b-2 border-slate-800 text-slate-400 uppercase text-[11px]">
                  <th className="py-3 px-3">Volunteer ID</th>
                  <th className="py-3 px-3">Name & Contact</th>
                  <th className="py-3 px-3">College / Affiliation</th>
                  <th className="py-3 px-3">Assigned Duty Area</th>
                  <th className="py-3 px-3 text-center">T-Shirt</th>
                  <th className="py-3 px-3 text-center">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredVolunteers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-slate-400">
                      No volunteers match your query.
                    </td>
                  </tr>
                ) : (
                  filteredVolunteers.map((v) => {
                    const isRevoked = v.status === 'REVOKED';

                    return (
                      <tr
                        key={v.id}
                        className={`hover:bg-slate-800/40 transition-colors ${
                          isRevoked ? 'opacity-60 bg-red-950/10' : ''
                        }`}
                      >
                        <td className="py-3 px-3 font-bold text-geeko-400 whitespace-nowrap">
                          {v.id}
                        </td>
                        <td className="py-3 px-3">
                          <div className={`font-bold text-white ${isRevoked ? 'line-through text-slate-400' : ''}`}>
                            {v.name}
                          </div>
                          <div className="text-[11px] text-slate-400">{v.email}</div>
                          {v.phone && <div className="text-[10px] text-slate-500">{v.phone}</div>}
                        </td>
                        <td className="py-3 px-3 text-slate-300">
                          {v.collegeOrCompany}
                        </td>
                        <td className="py-3 px-3">
                          <span className="bg-pine-950 border border-geeko-500/50 text-geeko-300 font-bold px-2 py-0.5 text-[11px] inline-block">
                            {v.assignedArea}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className="font-bold text-white bg-obsidian-950 border border-slate-700 px-2 py-0.5">
                            {v.tshirtSize}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {isRevoked ? (
                            <span className="bg-red-950 border border-red-500/60 text-red-300 text-[10px] font-bold px-2 py-0.5 uppercase">
                              REVOKED
                            </span>
                          ) : (
                            <span className="bg-geeko-500 text-black text-[10px] font-black px-2 py-0.5 uppercase">
                              CONFIRMED
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setEditingVolunteer(v)}
                              title="Edit Volunteer"
                              className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-geeko-400 text-slate-300 hover:text-white cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => handleToggleVolunteer(v.id)}
                              title={isRevoked ? 'Restore Volunteer' : 'Revoke Volunteer'}
                              className={`p-1.5 border cursor-pointer ${
                                isRevoked
                                  ? 'bg-geeko-500 text-black border-black hover:bg-geeko-400'
                                  : 'bg-red-950 border-red-500/60 text-red-300 hover:bg-red-900'
                              }`}
                            >
                              {isRevoked ? <RotateCcw className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                            </button>

                            <button
                              onClick={() => handleDeleteVolunteer(v.id, v.name)}
                              title="Delete Volunteer"
                              className="p-1.5 bg-obsidian-950 border border-slate-700 hover:border-red-500 text-slate-400 hover:text-red-400 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: T-SHIRT LOGISTICS BREAKDOWN */}
        {activeTab === 'tshirts' && (
          <div className="space-y-6">
            <div className="bg-pine-950/60 border-2 border-geeko-500 p-6 shadow-[6px_6px_0px_0px_#173f35]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                    <Shirt className="w-6 h-6 text-geeko-400" />
                    <span>Official openSUSE India T-Shirt Logistics</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Live tally of confirmed sizes for print order estimation (excluding revoked passes).
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 uppercase">Total Confirmed Shirts</div>
                  <div className="text-3xl font-black text-geeko-400 font-mono">{totalTshirts}</div>
                </div>
              </div>

              {/* Sizes Counter Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {(['S', 'M', 'L', 'XL', 'XXL'] as const).map((size) => {
                  const count = tshirtStats[size] || 0;
                  const pct = totalTshirts > 0 ? Math.round((count / totalTshirts) * 100) : 0;

                  return (
                    <div key={size} className="bg-obsidian-950 border-2 border-slate-800 p-4 text-center">
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                        Size {size}
                      </div>
                      <div className="text-2xl font-black text-white">{count}</div>
                      <div className="text-[10px] text-geeko-400 font-mono mt-1">{pct}% of order</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <span>Free limited-edition community swag distributed at check-in desk.</span>
                <button
                  onClick={handleExportParticipantsCsv}
                  className="px-3.5 py-2 bg-geeko-500 hover:bg-geeko-400 text-black font-black uppercase text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Download Size Manifest CSV</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* EDIT PARTICIPANT MODAL                                                    */}
      {/* ========================================================================= */}
      {editingParticipant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-obsidian-950 border-2 border-geeko-500 p-6 shadow-[8px_8px_0px_0px_#173f35] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-white text-sm uppercase">
                Edit Attendee: {editingParticipant.id}
              </span>
              <button
                onClick={() => setEditingParticipant(null)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveParticipant(editingParticipant);
                setEditingParticipant(null);
                refreshData();
                showToast(`Saved changes for ${editingParticipant.name}`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={editingParticipant.name}
                  onChange={(e) => setEditingParticipant({ ...editingParticipant, name: e.target.value })}
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={editingParticipant.email}
                    onChange={(e) => setEditingParticipant({ ...editingParticipant, email: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">T-Shirt Size</label>
                  <select
                    value={editingParticipant.tshirtSize}
                    onChange={(e) => setEditingParticipant({ ...editingParticipant, tshirtSize: e.target.value as any })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="S">Size S</option>
                    <option value="M">Size M</option>
                    <option value="L">Size L</option>
                    <option value="XL">Size XL</option>
                    <option value="XXL">Size XXL</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">College / Organization</label>
                  <input
                    type="text"
                    value={editingParticipant.collegeOrCompany}
                    onChange={(e) => setEditingParticipant({ ...editingParticipant, collegeOrCompany: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Pass Status</label>
                  <select
                    value={editingParticipant.status}
                    onChange={(e) => setEditingParticipant({ ...editingParticipant, status: e.target.value as any })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="REVOKED">REVOKED</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Track / Interest</label>
                <input
                  type="text"
                  value={editingParticipant.interest}
                  onChange={(e) => setEditingParticipant({ ...editingParticipant, interest: e.target.value })}
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingParticipant(null)}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-geeko-500 text-black font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT TEAM MODAL                                                           */}
      {/* ========================================================================= */}
      {editingTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-obsidian-950 border-2 border-geeko-500 p-6 shadow-[8px_8px_0px_0px_#173f35] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-white text-sm uppercase">
                Edit Team: {editingTeam.teamName} ({editingTeam.id})
              </span>
              <button
                onClick={() => setEditingTeam(null)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveHackathonTeam(editingTeam);
                setEditingTeam(null);
                refreshData();
                showToast(`Saved changes for team ${editingTeam.teamName}`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Team Name</label>
                <input
                  type="text"
                  required
                  value={editingTeam.teamName}
                  onChange={(e) => setEditingTeam({ ...editingTeam, teamName: e.target.value })}
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Leader Name</label>
                  <input
                    type="text"
                    required
                    value={editingTeam.leaderName}
                    onChange={(e) => setEditingTeam({ ...editingTeam, leaderName: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Leader Email</label>
                  <input
                    type="email"
                    required
                    value={editingTeam.leaderEmail}
                    onChange={(e) => setEditingTeam({ ...editingTeam, leaderEmail: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Track</label>
                  <input
                    type="text"
                    value={editingTeam.trackId}
                    onChange={(e) => setEditingTeam({ ...editingTeam, trackId: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Status</label>
                  <select
                    value={editingTeam.status}
                    onChange={(e) => setEditingTeam({ ...editingTeam, status: e.target.value as any })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="REVOKED">REVOKED</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">
                  Team Members List (comma separated)
                </label>
                <textarea
                  rows={2}
                  value={editingTeam.members.join(', ')}
                  onChange={(e) =>
                    setEditingTeam({
                      ...editingTeam,
                      members: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      teamSize: Math.max(1, e.target.value.split(',').filter(Boolean).length),
                    })
                  }
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Project Idea Statement</label>
                <textarea
                  rows={2}
                  value={editingTeam.projectIdea || ''}
                  onChange={(e) => setEditingTeam({ ...editingTeam, projectIdea: e.target.value })}
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500 font-sans"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-geeko-500 text-black font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  Save Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT VOLUNTEER MODAL                                                      */}
      {/* ========================================================================= */}
      {editingVolunteer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-obsidian-950 border-2 border-geeko-500 p-6 shadow-[8px_8px_0px_0px_#173f35] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-white text-sm uppercase">
                Edit Volunteer: {editingVolunteer.name} ({editingVolunteer.id})
              </span>
              <button
                onClick={() => setEditingVolunteer(null)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveVolunteer(editingVolunteer);
                setEditingVolunteer(null);
                refreshData();
                showToast(`Saved volunteer ${editingVolunteer.name}`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={editingVolunteer.name}
                  onChange={(e) => setEditingVolunteer({ ...editingVolunteer, name: e.target.value })}
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={editingVolunteer.email}
                    onChange={(e) => setEditingVolunteer({ ...editingVolunteer, email: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Phone</label>
                  <input
                    type="text"
                    value={editingVolunteer.phone || ''}
                    onChange={(e) => setEditingVolunteer({ ...editingVolunteer, phone: e.target.value })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Assigned Duty Area</label>
                <select
                  value={editingVolunteer.assignedArea}
                  onChange={(e) => setEditingVolunteer({ ...editingVolunteer, assignedArea: e.target.value as any })}
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                >
                  <option value="Registration Desk">Registration Desk</option>
                  <option value="Workshop Lab Support">Workshop Lab Support</option>
                  <option value="Hackathon Mentor">Hackathon Mentor</option>
                  <option value="Stage & AV">Stage & AV</option>
                  <option value="Swag & Catering">Swag & Catering</option>
                  <option value="General Logistics">General Logistics</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">T-Shirt Size</label>
                  <select
                    value={editingVolunteer.tshirtSize}
                    onChange={(e) => setEditingVolunteer({ ...editingVolunteer, tshirtSize: e.target.value as any })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="S">Size S</option>
                    <option value="M">Size M</option>
                    <option value="L">Size L</option>
                    <option value="XL">Size XL</option>
                    <option value="XXL">Size XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Status</label>
                  <select
                    value={editingVolunteer.status}
                    onChange={(e) => setEditingVolunteer({ ...editingVolunteer, status: e.target.value as any })}
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="CONFIRMED">CONFIRMED</option>
                    <option value="STANDBY">STANDBY</option>
                    <option value="REVOKED">REVOKED</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingVolunteer(null)}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-geeko-500 text-black font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  Save Volunteer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADD PARTICIPANT MODAL                                                     */}
      {/* ========================================================================= */}
      {isAddParticipantOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-obsidian-950 border-2 border-geeko-500 p-6 shadow-[8px_8px_0px_0px_#173f35] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-white text-sm uppercase">
                Add Attendee Manually
              </span>
              <button
                onClick={() => setIsAddParticipantOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const newP: Participant = {
                  id: `OSBLR-2027-${Math.floor(1000 + Math.random() * 9000)}`,
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  email: (form.elements.namedItem('email') as HTMLInputElement).value,
                  collegeOrCompany: (form.elements.namedItem('college') as HTMLInputElement).value,
                  role: (form.elements.namedItem('role') as HTMLSelectElement).value,
                  interest: (form.elements.namedItem('interest') as HTMLInputElement).value,
                  tshirtSize: (form.elements.namedItem('tshirtSize') as HTMLSelectElement).value,
                  status: 'ACTIVE',
                  registeredAt: new Date().toISOString(),
                };
                saveParticipant(newP);
                setIsAddParticipantOpen(false);
                refreshData();
                showToast(`Added attendee ${newP.name} [${newP.id}]`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Linus Torvalds"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">T-Shirt Size</label>
                  <select
                    name="tshirtSize"
                    defaultValue="M"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="S">Size S</option>
                    <option value="M">Size M</option>
                    <option value="L">Size L</option>
                    <option value="XL">Size XL</option>
                    <option value="XXL">Size XXL</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">College / Organization</label>
                  <input
                    name="college"
                    type="text"
                    placeholder="Newton School of Tech"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Role</label>
                  <select
                    name="role"
                    defaultValue="Student"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="Student">Student</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="DevOps / SysAdmin">DevOps / SysAdmin</option>
                    <option value="Open-Source Contributor">Open-Source Contributor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Interest / Track</label>
                <input
                  name="interest"
                  type="text"
                  defaultValue="Workshops + 10H Hackathon"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddParticipantOpen(false)}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-geeko-500 text-black font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  Create Pass
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADD VOLUNTEER MODAL                                                       */}
      {/* ========================================================================= */}
      {isAddVolunteerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-obsidian-950 border-2 border-geeko-500 p-6 shadow-[8px_8px_0px_0px_#173f35] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-white text-sm uppercase">
                Add Volunteer Manually
              </span>
              <button
                onClick={() => setIsAddVolunteerOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const newV: Volunteer = {
                  id: `VOL-BLR-${Math.floor(100 + Math.random() * 900)}`,
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  email: (form.elements.namedItem('email') as HTMLInputElement).value,
                  phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
                  collegeOrCompany: (form.elements.namedItem('college') as HTMLInputElement).value,
                  assignedArea: (form.elements.namedItem('assignedArea') as HTMLSelectElement).value as any,
                  tshirtSize: (form.elements.namedItem('tshirtSize') as HTMLSelectElement).value,
                  status: 'CONFIRMED',
                  registeredAt: new Date().toISOString(),
                };
                saveVolunteer(newV);
                setIsAddVolunteerOpen(false);
                refreshData();
                showToast(`Added volunteer ${newV.name}`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Sneha Sharma"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="volunteer@example.com"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="+91 ..."
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Assigned Duty Area</label>
                <select
                  name="assignedArea"
                  defaultValue="Registration Desk"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                >
                  <option value="Registration Desk">Registration Desk</option>
                  <option value="Workshop Lab Support">Workshop Lab Support</option>
                  <option value="Hackathon Mentor">Hackathon Mentor</option>
                  <option value="Stage & AV">Stage & AV</option>
                  <option value="Swag & Catering">Swag & Catering</option>
                  <option value="General Logistics">General Logistics</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">College / Organization</label>
                  <input
                    name="college"
                    type="text"
                    placeholder="College or company name"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">T-Shirt Size</label>
                  <select
                    name="tshirtSize"
                    defaultValue="M"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="S">Size S</option>
                    <option value="M">Size M</option>
                    <option value="L">Size L</option>
                    <option value="XL">Size XL</option>
                    <option value="XXL">Size XXL</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddVolunteerOpen(false)}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-geeko-500 text-black font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  Register Volunteer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADD TEAM MODAL                                                            */}
      {/* ========================================================================= */}
      {isAddTeamOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-obsidian-950 border-2 border-geeko-500 p-6 shadow-[8px_8px_0px_0px_#173f35] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-white text-sm uppercase">
                Add Hackathon Team Manually
              </span>
              <button
                onClick={() => setIsAddTeamOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const membersStr = (form.elements.namedItem('members') as HTMLInputElement).value;
                const membersArr = membersStr.split(',').map((s) => s.trim()).filter(Boolean);
                const leaderEmail = (form.elements.namedItem('leaderEmail') as HTMLInputElement).value;
                const leaderName = (form.elements.namedItem('leaderName') as HTMLInputElement).value;

                const newT: HackathonTeam = {
                  id: `HACK-BLR-${Math.floor(1000 + Math.random() * 9000)}`,
                  teamName: (form.elements.namedItem('teamName') as HTMLInputElement).value,
                  leaderName,
                  leaderEmail,
                  teamSize: Math.max(1, membersArr.length + 1),
                  trackId: (form.elements.namedItem('trackId') as HTMLSelectElement).value,
                  leaderTshirtSize: (form.elements.namedItem('tshirtSize') as HTMLSelectElement).value,
                  members: [`${leaderName} (${leaderEmail}) [Leader]`, ...membersArr],
                  projectIdea: (form.elements.namedItem('projectIdea') as HTMLTextAreaElement).value,
                  status: 'ACTIVE',
                  registeredAt: new Date().toISOString(),
                };
                saveHackathonTeam(newT);
                setIsAddTeamOpen(false);
                refreshData();
                showToast(`Added team ${newT.teamName} [${newT.id}]`);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Team Name *</label>
                <input
                  name="teamName"
                  type="text"
                  required
                  placeholder="e.g. Distro Hackers"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Leader Name *</label>
                  <input
                    name="leaderName"
                    type="text"
                    required
                    placeholder="Leader name"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Leader Email *</label>
                  <input
                    name="leaderEmail"
                    type="email"
                    required
                    placeholder="leader@example.com"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Track</label>
                  <select
                    name="trackId"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="linux-tooling">Track 1: Linux System Tooling</option>
                    <option value="obs-packaging">Track 2: OBS Packaging & YaST</option>
                    <option value="microos-iot">Track 3: MicroOS & Immutable OS</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Leader T-Shirt</label>
                  <select
                    name="tshirtSize"
                    defaultValue="M"
                    className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                  >
                    <option value="S">Size S</option>
                    <option value="M">Size M</option>
                    <option value="L">Size L</option>
                    <option value="XL">Size XL</option>
                    <option value="XXL">Size XXL</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Other Members (comma separated)</label>
                <input
                  name="members"
                  type="text"
                  placeholder="e.g. Rahul Sharma, Priya Nair"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Project Idea Statement</label>
                <textarea
                  name="projectIdea"
                  rows={2}
                  placeholder="What are they building?"
                  className="w-full bg-obsidian-900 border border-slate-700 px-3 py-2 text-white outline-none focus:border-geeko-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddTeamOpen(false)}
                  className="px-4 py-2 bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-geeko-500 text-black font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#ffffff]"
                >
                  Create Team Table Pass
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
