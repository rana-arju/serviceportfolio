'use client';

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Mail,
  Calendar,
  Briefcase,
  Plus,
  Trash2,
  Edit2,
  LogOut,
  ChevronRight,
  ExternalLink,
  Save,
  X,
  UserCheck,
  CheckCircle,
  Eye,
  EyeOff,
  Menu
} from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

import { z } from 'zod';

// Local storage keys (aligned with simulated services and dashboard needs)
const CONTACTS_KEY = 'replytentra_contact_submissions';
const BOOKINGS_KEY = 'replytentra_bookings';
const WORKS_KEY = 'replytentra_recent_works';
const AUTH_KEY = 'replytentra_admin_session';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest: string;
  budget: string;
  details: string;
  date: string;
}

interface BookingSubmission {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  details?: string;
  created: string;
}

interface RecentWork {
  id: string;
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  description: string;
  techs: string[];
  mediaType: 'youtube' | 'image';
  mediaUrl: string;
  thumbnail: string;
  timeline: { phase: string; title: string; description: string }[];
  liveUrl?: string;
}

// Zod Schema for dynamic verification
const recentWorkSchema = z.object({
  slug: z.string().min(2, 'Slug must be at least 2 characters').regex(/^[a-z0-9-]+$/, 'Slug must only contain lowercase alphanumeric characters and dashes'),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  industry: z.string().min(2, 'Industry must be at least 2 characters'),
  challenge: z.string().min(10, 'Challenge description must be at least 10 characters'),
  solution: z.string().min(10, 'Solution description must be at least 10 characters'),
  result: z.string().min(5, 'Result description must be at least 5 characters'),
  description: z.string().min(10, 'Short description must be at least 10 characters'),
  techs: z.array(z.string()).min(1, 'Please specify at least one technology tag'),
  mediaType: z.enum(['youtube', 'image']),
  mediaUrl: z.string().min(5, 'Media URL must be configured'),
  thumbnail: z.string().min(5, 'Thumbnail URL must be configured'),
  timeline: z.array(
    z.object({
      phase: z.string().min(1, 'Phase step label is required'),
      title: z.string().min(1, 'Phase title is required'),
      description: z.string().min(1, 'Phase description is required')
    })
  ).min(1, 'Please specify at least one journey timeline step'),
  liveUrl: z.string().url('Live Link must be a valid URL starting with http:// or https://').or(z.literal('')).optional()
});

// Initial default works if local storage is empty, matching work/page.tsx
const DEFAULT_WORKS: RecentWork[] = [
  {
    id: '1',
    slug: 'ai-lead-automation-system',
    title: 'AI Lead Automation System',
    industry: 'Enterprise CRM / Sales',
    challenge: 'Over 40 hours spent weekly manually classifying and routing sales leads from scattered contact forms.',
    solution: 'Built custom AI pipelines utilizing self-hosted n8n and OpenAI models to parse inbound leads and synchronize CRM databases.',
    result: 'Reduced manual labor by 85% and increased response speed to under 2 minutes.',
    description: 'A custom, end-to-end intelligent automation routing framework parsing high-intent inbound inquiries in real time.',
    techs: ['n8n', 'GoHighLevel', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    liveUrl: 'https://github.com',
    timeline: [
      {
        phase: 'Phase 1: Analysis',
        title: 'Lead Flow Mapping',
        description: 'Audited existing incoming lead sources, contact forms, and email channels to map classification taxonomies.',
      }
    ]
  },
  {
    id: '2',
    slug: 'crm-sales-automation-platform',
    title: 'CRM Sales Automation Platform',
    industry: 'Real Estate / Agency Operations',
    challenge: 'Disconnected customer touchpoints and dropoff in lead followups caused loss of potential bookings.',
    solution: 'Designed and deployed unified CRM pipelines, SMS/Email sequence workflows, and custom calendar booking portals.',
    result: 'Boosted conversion rates by 22% and automated client reminders.',
    description: 'An all-in-one client engagement and scheduling automation suite maximizing response rates and workflow retention.',
    techs: ['GoHighLevel', 'Zapier', 'PostgreSQL', 'TypeScript'],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    liveUrl: '',
    timeline: [
      {
        phase: 'Phase 1: Discovery',
        title: 'Pipeline Architecture',
        description: 'Mapped the entire customer journey from initial Facebook/Google ads to final booking.',
      }
    ]
  }
];

export default function AdminDashboard() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState<'SUPER_ADMIN' | 'ADMIN' | 'MODERATOR'>('ADMIN');
  const [authError, setAuthError] = useState('');

  // Active section
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'bookings' | 'works'>('overview');

  // Loaded DB data state
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);
  const [works, setWorks] = useState<RecentWork[]>([]);

  // Detailed Modal views
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<BookingSubmission | null>(null);

  // Validation feedback state
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Recent Work CRUD Modals
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [editingWork, setEditingWork] = useState<RecentWork | null>(null);
  const [workForm, setWorkForm] = useState<Omit<RecentWork, 'id'>>({
    slug: '',
    title: '',
    industry: '',
    challenge: '',
    solution: '',
    result: '',
    description: '',
    techs: [],
    mediaType: 'image',
    mediaUrl: '',
    thumbnail: '',
    timeline: [{ phase: '', title: '', description: '' }],
    liveUrl: ''
  });
  const [newTech, setNewTech] = useState('');

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:6007/api/v1';

  // Hydration effect & Auth loading
  useEffect(() => {
    // Authenticate checks
    const session = localStorage.getItem(AUTH_KEY);
    if (session) {
      const parsed = JSON.parse(session);
      setIsAuthenticated(true);
      setUserRole(parsed.role);
      setUsername(parsed.username);
      
      if (parsed.accessToken) {
        loadRealBackendData(parsed.accessToken);
      } else {
        loadAllData();
      }
    } else {
      loadAllData();
    }
  }, []);

  const loadAllData = () => {
    const contactsData = JSON.parse(localStorage.getItem(CONTACTS_KEY) || '[]');
    const bookingsData = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]');
    let worksData = JSON.parse(localStorage.getItem(WORKS_KEY) || '[]');

    if (worksData.length === 0) {
      localStorage.setItem(WORKS_KEY, JSON.stringify(DEFAULT_WORKS));
      worksData = DEFAULT_WORKS;
    }

    setContacts(contactsData.sort((a: any, b: any) => b.id - a.id));
    setBookings(bookingsData.sort((a: any, b: any) => b.id - a.id));
    setWorks(worksData);
  };

  const loadRealBackendData = async (token: string) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };

      const [contactsRes, bookingsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/contact`, { headers }),
        fetch(`${API_BASE_URL}/booking`, { headers }),
      ]);

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        setContacts(contactsData.data);
      }
      if (bookingsRes.ok) {
        const bookingsData = await bookingsRes.json();
        setBookings(bookingsData.data);
      }

      let worksData = JSON.parse(localStorage.getItem(WORKS_KEY) || '[]');
      if (worksData.length === 0) {
        localStorage.setItem(WORKS_KEY, JSON.stringify(DEFAULT_WORKS));
        worksData = DEFAULT_WORKS;
      }
      setWorks(worksData);
    } catch (error) {
      console.error('Failed to load data from backend:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username, // field bound to username is email address
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      const role = data.user.role;
      const session = {
        username: data.user.displayName || data.user.username,
        email: data.user.email,
        role: role,
        accessToken: data.accessToken,
        time: Date.now(),
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(session));

      setIsAuthenticated(true);
      setUserRole(role);
      setAuthError('');

      loadRealBackendData(data.accessToken);
    } catch (err: any) {
      setAuthError(err.message || 'Invalid email or password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  // CRUD actions for Recent Work
  const openWorkCreate = () => {
    setEditingWork(null);
    setValidationErrors({});
    setWorkForm({
      slug: '',
      title: '',
      industry: '',
      challenge: '',
      solution: '',
      result: '',
      description: '',
      techs: [],
      mediaType: 'image',
      mediaUrl: '',
      thumbnail: '',
      timeline: [{ phase: 'Phase 1: Discovery', title: 'Planning Strategy', description: 'Audited existing flows and requirements.' }],
      liveUrl: ''
    });
    setIsWorkModalOpen(true);
  };

  const openWorkEdit = (work: RecentWork) => {
    setEditingWork(work);
    setValidationErrors({});
    setWorkForm({
      slug: work.slug,
      title: work.title,
      industry: work.industry,
      challenge: work.challenge,
      solution: work.solution,
      result: work.result,
      description: work.description,
      techs: work.techs,
      mediaType: work.mediaType,
      mediaUrl: work.mediaUrl,
      thumbnail: work.thumbnail,
      timeline: work.timeline && work.timeline.length ? work.timeline : [{ phase: '', title: '', description: '' }],
      liveUrl: work.liveUrl || ''
    });
    setIsWorkModalOpen(true);
  };

  const saveWork = (e: React.FormEvent) => {
    e.preventDefault();

    if (userRole === 'MODERATOR') {
      alert('Forbidden: Moderators are not allowed to add/update works.');
      return;
    }

    // Zod Schema verification
    const validationResult = recentWorkSchema.safeParse(workForm);
    if (!validationResult.success) {
      const errorsMap: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path.join('.');
        errorsMap[path] = err.message;
      });
      setValidationErrors(errorsMap);
      return;
    }

    let updatedWorks = [...works];

    if (editingWork) {
      // Edit
      updatedWorks = updatedWorks.map(w => w.id === editingWork.id ? { ...w, ...workForm } : w);
    } else {
      // Add
      const newId = Date.now().toString();
      updatedWorks.push({ id: newId, ...workForm });
    }

    localStorage.setItem(WORKS_KEY, JSON.stringify(updatedWorks));
    setWorks(updatedWorks);
    setIsWorkModalOpen(false);
  };

  const deleteWork = (id: string) => {
    if (userRole === 'MODERATOR') {
      alert('Forbidden: Moderators cannot delete portfolio items.');
      return;
    }

    if (!confirm('Are you sure you want to delete this portfolio item?')) {
      return;
    }

    const updatedWorks = works.filter(w => w.id !== id);
    localStorage.setItem(WORKS_KEY, JSON.stringify(updatedWorks));
    setWorks(updatedWorks);
  };

  const addTimelineStep = () => {
    setWorkForm({
      ...workForm,
      timeline: [...workForm.timeline, { phase: `Phase ${workForm.timeline.length + 1}`, title: '', description: '' }]
    });
  };

  const removeTimelineStep = (index: number) => {
    const updated = workForm.timeline.filter((_, i) => i !== index);
    setWorkForm({ ...workForm, timeline: updated });
  };

  const handleTimelineChange = (index: number, field: string, val: string) => {
    const updated = workForm.timeline.map((step, i) => {
      if (i === index) {
        return { ...step, [field]: val };
      }
      return step;
    });
    setWorkForm({ ...workForm, timeline: updated });
  };

  const addTech = () => {
    if (newTech && !workForm.techs.includes(newTech)) {
      setWorkForm({ ...workForm, techs: [...workForm.techs, newTech] });
      setNewTech('');
    }
  };

  const removeTech = (tech: string) => {
    setWorkForm({ ...workForm, techs: workForm.techs.filter(t => t !== tech) });
  };

  // Login UI
  if (!isAuthenticated) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#030712] px-4 py-12 text-slate-100 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 w-full max-w-md space-y-8 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 p-8 shadow-2xl backdrop-blur-xl animate-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              ReplyTentra Workspace
            </h1>
            <p className="text-slate-400 text-sm">
              Sign in with your role-specific administrator access.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {authError && (
              <div className="rounded-lg border border-red-900 bg-red-950/40 p-3 text-xs text-red-400 font-semibold leading-relaxed">
                {authError}
              </div>
            )}

             <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin@example.com"
                className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-800 bg-[#080b11] pl-4 pr-10 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 focus:outline-none cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-accent py-3 font-bold text-sm text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-accent/20 cursor-pointer"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard layout
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col md:flex-row font-sans overflow-x-hidden">
      <AnimatedBackground />

      {/* Mobile Top Header Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-800/80 bg-[#0b0f19] relative z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white">
            <LayoutDashboard className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="font-black text-sm uppercase tracking-wider text-white">ReplyTentra</h2>
          </div>
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-slate-400 hover:text-white focus:outline-none cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0b0f19]/95 border-r border-slate-800/80 flex flex-col justify-between shrink-0 backdrop-blur-xl transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-black text-sm uppercase tracking-wider text-white">ReplyTentra</h2>
                <span className="text-[10px] font-bold text-slate-400">ADMIN CONTROL CENTER</span>
              </div>
            </div>
            {/* Close Button on Mobile */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => {
                setActiveTab('overview');
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-accent/15 text-accent border-l-4 border-accent pl-3'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('contacts');
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'contacts'
                  ? 'bg-accent/15 text-accent border-l-4 border-accent pl-3'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contacts Form</span>
              {contacts.length > 0 && (
                <span className="ml-auto bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {contacts.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab('bookings');
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'bookings'
                  ? 'bg-accent/15 text-accent border-l-4 border-accent pl-3'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Meeting Bookings</span>
              {bookings.length > 0 && (
                <span className="ml-auto bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {bookings.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab('works');
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'works'
                  ? 'bg-accent/15 text-accent border-l-4 border-accent pl-3'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Recent Works</span>
            </button>
          </nav>
        </div>

        {/* User Info / Logout */}
        <div className="p-6 border-t border-slate-800/80 bg-slate-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-accent">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-200 truncate">{username}</p>
              <span className="text-[10px] font-extrabold tracking-wide text-indigo-400 uppercase">
                {userRole}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-red-950/20 hover:text-red-400 border border-slate-800 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="relative z-10 flex-grow p-6 md:p-10 space-y-8 overflow-y-auto max-h-screen">
        
        {/* Top greeting bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/60 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Workspace Console
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-indigo-400 border border-slate-700 uppercase">
                {userRole}
              </span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Analyze user inquires, calendars, and update recent work items.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-semibold">Switch Theme:</span>
            <button
              onClick={() => {
                const isDark = document.documentElement.classList.contains('dark');
                if (isDark) {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
                } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                }
              }}
              className="p-2.5 rounded-xl border border-slate-800 bg-[#0b0f19] text-slate-300 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none"
              aria-label="Toggle Theme"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 1. OVERVIEW SCREEN */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact forms</span>
                  <p className="text-3xl font-black text-white">{contacts.length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Meetings scheduled</span>
                  <p className="text-3xl font-black text-purple-400">{bookings.length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Featured Projects</span>
                  <p className="text-3xl font-black text-emerald-400">{works.length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Contact Inquiries */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-white">Recent Inquiries</h3>
                  <button onClick={() => setActiveTab('contacts')} className="text-xs text-accent font-bold flex items-center gap-1 hover:underline">
                    View All <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-3">
                  {contacts.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedContact(item)}
                      className="p-4 rounded-xl bg-[#080b11]/60 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer flex justify-between items-start gap-4"
                    >
                      <div className="min-w-0 space-y-1">
                        <p className="text-sm font-bold text-white truncate">{item.name}</p>
                        <p className="text-xs text-slate-400 truncate">{item.interest} • {item.budget}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 whitespace-nowrap font-medium">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                  {contacts.length === 0 && (
                    <p className="text-xs text-slate-500 italic py-4 text-center">No simulated inquiries received yet.</p>
                  )}
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-white">Upcoming Bookings</h3>
                  <button onClick={() => setActiveTab('bookings')} className="text-xs text-purple-400 font-bold flex items-center gap-1 hover:underline">
                    View All <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-3">
                  {bookings.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedBooking(item)}
                      className="p-4 rounded-xl bg-[#080b11]/60 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer flex justify-between items-start gap-4"
                    >
                      <div className="min-w-0 space-y-1">
                        <p className="text-sm font-bold text-white truncate">{item.name}</p>
                        <p className="text-xs text-slate-400 truncate">{item.service} • Slot {item.time}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 whitespace-nowrap font-medium">
                        {item.date}
                      </span>
                    </div>
                  ))}
                  {bookings.length === 0 && (
                    <p className="text-xs text-slate-500 italic py-4 text-center">No meetings scheduled yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CONTACTS TABLE */}
        {activeTab === 'contacts' && (
          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-white">Contact Form Inbound Submissions</h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                {contacts.length} Total
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800/80">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50 border-b border-slate-800 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Sender</th>
                    <th className="px-6 py-4">Interest Area</th>
                    <th className="px-6 py-4">Budget</th>
                    <th className="px-6 py-4">Submitted At</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-sm text-slate-300">
                  {contacts.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-900/20">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-bold text-white">{item.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{item.email}</div>
                          {item.company && <div className="text-[10px] text-slate-500 italic mt-0.5">{item.company}</div>}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-200">{item.interest}</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full bg-slate-900 text-accent text-xs font-bold border border-slate-800">
                          {item.budget}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400">
                        {new Date(item.date).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedContact(item)}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 ml-auto border border-slate-800 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Detail</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {contacts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-500 italic text-xs">
                        No contact submissions recorded in localized storage simulator.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. BOOKINGS TABLE */}
        {activeTab === 'bookings' && (
          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-white">Strategy Session Bookings</h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-purple-400 border border-slate-700">
                {bookings.length} Total
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800/80">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50 border-b border-slate-800 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Service Required</th>
                    <th className="px-6 py-4">Preferred Slot</th>
                    <th className="px-6 py-4">Received At</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-sm text-slate-300">
                  {bookings.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-900/20">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-bold text-white">{item.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{item.email}</div>
                          {item.phone && <div className="text-[10px] text-slate-500 mt-0.5">{item.phone}</div>}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-200">{item.service}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-purple-400">{item.date}</span>
                          <span className="text-[10px] text-slate-400 font-semibold">{item.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400">
                        {new Date(item.created).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedBooking(item)}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 ml-auto border border-slate-800 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Detail</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-500 italic text-xs">
                        No meeting reservations stored in simulator logs.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. RECENT WORKS LIST */}
        {activeTab === 'works' && (
          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0b0f19]/80 shadow-md space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-white">Recent Works Portfolio</h3>
                <p className="text-xs text-slate-400 mt-0.5">Manage case studies dynamically showcased on the main portfolio page.</p>
              </div>

              {userRole !== 'MODERATOR' && (
                <button
                  onClick={openWorkCreate}
                  className="px-4 py-2.5 rounded-xl bg-accent hover:bg-indigo-500 font-bold text-xs text-white flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Case Study</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="rounded-2xl border border-slate-800/80 bg-[#080b11]/85 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {work.thumbnail ? (
                      <div className="h-44 w-full relative">
                        <img
                          src={work.thumbnail}
                          alt={work.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] to-transparent" />
                        <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase border border-slate-800 text-indigo-400">
                          {work.industry}
                        </span>
                      </div>
                    ) : (
                      <div className="h-32 bg-slate-900 border-b border-slate-800 flex items-center justify-center text-slate-500 text-xs italic">
                        No image uploaded
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <h4 className="font-bold text-base text-white">{work.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {work.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {work.techs.map(t => (
                          <span key={t} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 flex gap-2 border-t border-slate-900/60 bg-slate-900/10">
                    <button
                      onClick={() => openWorkEdit(work)}
                      className="flex-1 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-800 transition-colors cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>{userRole === 'MODERATOR' ? 'View Schema' : 'Edit'}</span>
                    </button>
                    
                    {userRole !== 'MODERATOR' && (
                      <button
                        onClick={() => deleteWork(work.id)}
                        className="py-2 px-3 rounded-lg bg-red-950/20 border border-red-900/50 hover:bg-red-900/30 text-red-400 hover:text-red-300 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ============================================================== */}
      {/* 5. SLIDE-OVER DETAIL MODALS */}
      {/* ============================================================== */}

      {/* CONTACT SUBMISSION DETAIL */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedContact(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Inquiry details</span>
              <h3 className="text-xl font-bold text-white">{selectedContact.name}</h3>
              <p className="text-xs text-slate-400">Received on {new Date(selectedContact.date).toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800/80 py-4 text-xs">
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Email Address</span>
                <a href={`mailto:${selectedContact.email}`} className="text-accent font-semibold hover:underline block break-all">
                  {selectedContact.email}
                </a>
              </div>
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Phone Number</span>
                <span className="text-slate-200 font-semibold block">{selectedContact.phone || 'Not Provided'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Company / Team</span>
                <span className="text-slate-200 font-semibold block truncate">{selectedContact.company || 'Not Provided'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Interest Topic</span>
                <span className="text-slate-200 font-semibold block">{selectedContact.interest}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Project Budget Allocation</span>
              <span className="inline-flex px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-accent font-bold text-xs">
                {selectedContact.budget}
              </span>
            </div>

            <div className="space-y-2 bg-[#080b11]/70 rounded-xl p-4 border border-slate-800/60">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Description & Requirements</span>
              <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">{selectedContact.details}</p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setSelectedContact(null)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING RESERVATION DETAIL */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">Strategy call schedule</span>
              <h3 className="text-xl font-bold text-white">{selectedBooking.name}</h3>
              <p className="text-xs text-slate-400">Request generated at {new Date(selectedBooking.created).toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800/80 py-4 text-xs">
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Email Address</span>
                <a href={`mailto:${selectedBooking.email}`} className="text-purple-400 font-semibold hover:underline block break-all">
                  {selectedBooking.email}
                </a>
              </div>
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Phone Number</span>
                <span className="text-slate-200 font-semibold block">{selectedBooking.phone || 'Not Provided'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Company / Organization</span>
                <span className="text-slate-200 font-semibold block truncate">{selectedBooking.company || 'Not Provided'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-400 block uppercase tracking-wider mb-1">Interested Capability</span>
                <span className="text-slate-200 font-semibold block">{selectedBooking.service}</span>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-purple-950/10 border border-purple-900/30 rounded-xl">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block">Reserved Calendar Slot</span>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Meeting Date</span>
                  <span className="text-sm font-bold text-slate-100">{selectedBooking.date}</span>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Est Slot Time</span>
                  <span className="text-sm font-bold text-slate-100">{selectedBooking.time}</span>
                </div>
              </div>
            </div>

            {selectedBooking.details && (
              <div className="space-y-2 bg-[#080b11]/70 rounded-xl p-4 border border-slate-800/60">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Supplied Details</span>
                <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">{selectedBooking.details}</p>
              </div>
            )}

            <div className="pt-4">
              <button
                onClick={() => setSelectedBooking(null)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PORTFOLIO CRUD FORM MODAL */}
      {isWorkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="w-full max-w-3xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto animate-zoom-in">
            <button
              onClick={() => setIsWorkModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Portfolio item builder</span>
              <h3 className="text-xl font-bold text-white">
                {editingWork ? `Edit Portfolio: ${editingWork.title}` : 'Build New Featured Project'}
              </h3>
              <p className="text-xs text-slate-400">
                {userRole === 'MODERATOR' ? 'Viewing items schema mode.' : 'Specify challenges, solutions, timeline items and tags.'}
              </p>
            </div>

            {/* Show dynamic validation errors summary */}
            {Object.keys(validationErrors).length > 0 && (
              <div className="rounded-xl border border-red-900 bg-red-950/40 p-4 text-xs text-red-400 font-semibold space-y-1">
                <span className="font-bold text-red-300 block uppercase tracking-wider">Please fix the following validation errors:</span>
                <ul className="list-disc pl-4 space-y-0.5">
                  {Object.entries(validationErrors).map(([key, msg]) => (
                    <li key={key}>{key}: {msg}</li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={saveWork} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Title */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Project Title</label>
                  <input
                    type="text"
                    required
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.title}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, title: e.target.value });
                      if (validationErrors['title']) {
                        const err = { ...validationErrors };
                        delete err['title'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="e.g. n8n Operations Engine"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Slug URL Reference</label>
                  <input
                    type="text"
                    required
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.slug}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, slug: e.target.value });
                      if (validationErrors['slug']) {
                        const err = { ...validationErrors };
                        delete err['slug'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="e.g. n8n-operations-engine"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Industry */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Industry & Category</label>
                  <input
                    type="text"
                    required
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.industry}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, industry: e.target.value });
                      if (validationErrors['industry']) {
                        const err = { ...validationErrors };
                        delete err['industry'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="e.g. Enterprise Operations / SaaS"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Media Type */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Portfolio Media Type</label>
                  <select
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.mediaType}
                    onChange={(e) => setWorkForm({ ...workForm, mediaType: e.target.value as 'youtube' | 'image' })}
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="image">Static Image (Hosted on Cloudinary)</option>
                    <option value="youtube">Embedded YouTube Video URL</option>
                  </select>
                </div>

                {/* Media Link */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">
                    {workForm.mediaType === 'youtube' ? 'YouTube Embed Link' : 'Cloudinary Image URL(s) - Comma separated for multiple images'}
                  </label>
                  <input
                    type="text"
                    required
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.mediaUrl}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, mediaUrl: e.target.value });
                      if (validationErrors['mediaUrl']) {
                        const err = { ...validationErrors };
                        delete err['mediaUrl'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder={workForm.mediaType === 'youtube' ? 'e.g. https://www.youtube.com/embed/dQw4w9WgXcQ' : 'e.g. https://res.cloudinary.com/img1.jpg, https://res.cloudinary.com/img2.jpg'}
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {workForm.mediaType === 'image' && (
                    <span className="text-[10px] text-slate-500 block leading-tight">
                      To display a gallery slider, paste multiple Cloudinary image URLs separated by commas.
                    </span>
                  )}
                </div>

                {/* Thumbnail */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Thumbnail Image (Cloudinary URL)</label>
                  <input
                    type="text"
                    required
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.thumbnail}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, thumbnail: e.target.value });
                      if (validationErrors['thumbnail']) {
                        const err = { ...validationErrors };
                        delete err['thumbnail'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="e.g. https://res.cloudinary.com/demo/image/upload/sample_thumb.jpg"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Live URL Link */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Live URL Link (Optional)</label>
                  <input
                    type="text"
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.liveUrl || ''}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, liveUrl: e.target.value });
                      if (validationErrors['liveUrl']) {
                        const err = { ...validationErrors };
                        delete err['liveUrl'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="e.g. https://example.com (Leave blank if project has no live website link)"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-300 uppercase tracking-wider">Short Lead Description</label>
                <textarea
                  rows={2}
                  disabled={userRole === 'MODERATOR'}
                  value={workForm.description}
                  onChange={(e) => {
                    setWorkForm({ ...workForm, description: e.target.value });
                    if (validationErrors['description']) {
                      const err = { ...validationErrors };
                      delete err['description'];
                      setValidationErrors(err);
                    }
                  }}
                  placeholder="Overview pitch..."
                  className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Challenge */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Operational Challenge</label>
                  <textarea
                    rows={3}
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.challenge}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, challenge: e.target.value });
                      if (validationErrors['challenge']) {
                        const err = { ...validationErrors };
                        delete err['challenge'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="What friction did the client suffer from?"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Solution */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Custom Solution Implemented</label>
                  <textarea
                    rows={3}
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.solution}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, solution: e.target.value });
                      if (validationErrors['solution']) {
                        const err = { ...validationErrors };
                        delete err['solution'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="How did ReplyTentra engineers solve it?"
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Result */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Quantified Project Result</label>
                  <textarea
                    rows={3}
                    disabled={userRole === 'MODERATOR'}
                    value={workForm.result}
                    onChange={(e) => {
                      setWorkForm({ ...workForm, result: e.target.value });
                      if (validationErrors['result']) {
                        const err = { ...validationErrors };
                        delete err['result'];
                        setValidationErrors(err);
                      }
                    }}
                    placeholder="e.g. Reduced manual labor by 85%."
                    className="w-full rounded-lg border border-slate-800 bg-[#080b11] px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Technologies list */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <label className="font-bold text-slate-300 uppercase tracking-wider block">Tech Stack Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {workForm.techs.map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg flex items-center gap-1.5">
                      <span>{t}</span>
                      {userRole !== 'MODERATOR' && (
                        <button type="button" onClick={() => removeTech(t)} className="text-slate-500 hover:text-red-400 font-bold">×</button>
                      )}
                    </span>
                  ))}
                  {workForm.techs.length === 0 && <span className="text-slate-500 italic">No tag configured.</span>}
                </div>
                {userRole !== 'MODERATOR' && (
                  <div className="flex gap-2 max-w-sm">
                    <input
                      type="text"
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      placeholder="e.g. Next.js, n8n"
                      className="flex-grow rounded-lg border border-slate-800 bg-[#080b11] px-3 py-1.5 text-slate-100 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={addTech}
                      className="px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold"
                    >
                      Add tag
                    </button>
                  </div>
                )}
              </div>

              {/* Custom Timeline steps builder */}
              <div className="space-y-4 border-t border-slate-800/80 pt-4">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">Project Phase Timeline</label>
                  {userRole !== 'MODERATOR' && (
                    <button
                      type="button"
                      onClick={addTimelineStep}
                      className="text-xs text-accent font-bold hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> Add Phase Step
                    </button>
                  )}
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {workForm.timeline.map((step, index) => (
                    <div key={index} className="p-3 border border-slate-800/60 bg-[#080b11]/50 rounded-xl space-y-2 relative">
                      {userRole !== 'MODERATOR' && (
                        <button
                          type="button"
                          onClick={() => removeTimelineStep(index)}
                          className="absolute top-3 right-3 text-slate-500 hover:text-red-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                      
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          disabled={userRole === 'MODERATOR'}
                          value={step.phase}
                          onChange={(e) => handleTimelineChange(index, 'phase', e.target.value)}
                          placeholder="e.g. Phase 1: Analysis"
                          className="rounded-lg border border-slate-800/60 bg-[#06080d] px-2 py-1 text-slate-200"
                        />
                        <input
                          type="text"
                          required
                          disabled={userRole === 'MODERATOR'}
                          value={step.title}
                          onChange={(e) => handleTimelineChange(index, 'title', e.target.value)}
                          placeholder="e.g. Lead Flow mapping"
                          className="rounded-lg border border-slate-800/60 bg-[#06080d] px-2 py-1 text-slate-200"
                        />
                      </div>
                      <input
                        type="text"
                        required
                        disabled={userRole === 'MODERATOR'}
                        value={step.description}
                        onChange={(e) => handleTimelineChange(index, 'description', e.target.value)}
                        placeholder="Description outlining the phase deliverables..."
                        className="w-full rounded-lg border border-slate-800/60 bg-[#06080d] px-2 py-1 text-slate-200"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions footer */}
              <div className="pt-4 border-t border-slate-800/80 flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => setIsWorkModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 font-bold"
                >
                  Close Window
                </button>
                {userRole !== 'MODERATOR' && (
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-accent hover:bg-indigo-500 text-white font-bold shadow-md shadow-accent/20 cursor-pointer"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
