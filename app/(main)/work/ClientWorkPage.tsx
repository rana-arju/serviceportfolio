'use client';
import React from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ProjectCard, Project } from '@/components/shared/ProjectCard';

export const DEFAULT_WORK_PROJECTS: Project[] = [
  {
    slug: 'ai-lead-automation-system',
    title: 'AI Lead Automation System',
    industry: 'Enterprise CRM / Sales',
    challenge: 'Over 40 hours spent weekly manually classifying and routing sales leads from scattered contact forms.',
    solution: 'Built custom AI pipelines utilizing self-hosted n8n and OpenAI models to parse inbound leads and synchronize CRM databases.',
    result: 'Reduced manual labor by 85% and increased response speed to under 2 minutes.',
    description: 'A custom, end-to-end intelligent automation routing framework parsing high-intent inbound inquiries in real time.',
    techs: ['n8n', 'GoHighLevel', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    media: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    },
    timeline: [
      {
        phase: 'Phase 1: Analysis',
        title: 'Lead Flow Mapping',
        description: 'Audited existing incoming lead sources, contact forms, and email channels to map classification taxonomies.',
      },
      {
        phase: 'Phase 2: Development',
        title: 'n8n & OpenAI Integrations',
        description: 'Engineered custom JSON parsing pipelines with OpenAI GPT-4 to extract contact details, budgets, and intent levels.',
      },
      {
        phase: 'Phase 3: Connection',
        title: 'CRM Sync & Routing',
        description: 'Synced parsed leads into GoHighLevel with custom automation triggers to notify correct representatives instantly.',
      },
      {
        phase: 'Phase 4: Launch',
        title: 'A/B Testing & Optimization',
        description: 'Monitored lead processing rates and refined prompt structures to achieve 99% routing accuracy.',
      },
    ],
  },
  {
    slug: 'crm-sales-automation-platform',
    title: 'CRM Sales Automation Platform',
    industry: 'Real Estate / Agency Operations',
    challenge: 'Disconnected customer touchpoints and dropoff in lead followups caused loss of potential bookings.',
    solution: 'Designed and deployed unified CRM pipelines, SMS/Email sequence workflows, and custom calendar booking portals.',
    result: 'Boosted conversion rates by 22% and automated client reminders.',
    description: 'An all-in-one client engagement and scheduling automation suite maximizing response rates and workflow retention.',
    techs: ['GoHighLevel', 'Zapier', 'PostgreSQL', 'TypeScript'],
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    timeline: [
      {
        phase: 'Phase 1: Discovery',
        title: 'Pipeline Architecture',
        description: 'Mapped the entire customer journey from initial Facebook/Google ads to final booking.',
      },
      {
        phase: 'Phase 2: Automation',
        title: 'Campaign & Workflow Setup',
        description: 'Built multi-channel nurture campaigns including instant SMS follow-ups, emails, and voicemail drops.',
      },
      {
        phase: 'Phase 3: Integration',
        title: 'Calendar & Portal Config',
        description: 'Integrated unified calendars with smart buffer times and automated timezone conversion for bookings.',
      },
      {
        phase: 'Phase 4: Delivery',
        title: 'Staff Training & Handover',
        description: 'Provided visual dashboards tracking conversion analytics and held walkthrough training for real estate agents.',
      },
    ],
  },
  {
    slug: 'custom-saas-dashboard',
    title: 'Custom SaaS Customer Dashboard',
    industry: 'Finance / Technology',
    challenge: 'Legacy systems lacked client dashboard portal to track analytics and invoice history.',
    solution: 'Developed dynamic Next.js App Router workspace connected to custom Node API microservices.',
    result: 'Improved client retention by 15% and delivered sub-second page performance.',
    description: 'A ultra-fast financial tracking workspace supporting modern visualization charts and real-time transaction updates.',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Docker', 'AWS'],
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    timeline: [
      {
        phase: 'Phase 1: UX Design',
        title: 'Figma Prototyping',
        description: 'Designed interactive dark-themed dashboard prototypes emphasizing data readability and smooth navigation.',
      },
      {
        phase: 'Phase 2: Frontend',
        title: 'Next.js App Routing',
        description: 'Coded responsive, SEO-optimized dashboards with server-side rendered charts and fluid micro-interactions.',
      },
      {
        phase: 'Phase 3: Backend',
        title: 'API & Docker Setup',
        description: 'Wrote high-throughput Node.js microservices for invoice generation and wrapped them into Docker containers.',
      },
      {
        phase: 'Phase 4: Scaling',
        title: 'AWS Deployment',
        description: 'Deployed onto AWS ECS behind an Application Load Balancer with dynamic auto-scaling policies.',
      },
    ],
  },
];

interface ClientWorkPageProps {
  defaultProjects: Project[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://serviceportfolio-backend.vercel.app/api/v1';

function mapWork(p: any): Project {
  return {
    slug: p.slug,
    title: p.title,
    industry: p.industry,
    challenge: p.challenge,
    solution: p.solution,
    result: p.result,
    description: p.description,
    techs: p.techs || [],
    media: {
      type: p.mediaType || 'image',
      url: p.mediaUrl || p.thumbnail,
      thumbnail: p.thumbnail,
    },
    timeline: p.timeline || [],
    liveUrl: p.liveUrl,
  };
}

export function ClientWorkPage({ defaultProjects }: ClientWorkPageProps) {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchWorks = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/works`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        const data: any[] = json.data || [];
        if (data.length > 0) {
          setProjects(data.map(mapWork));
          return;
        }
      }
    } catch (e) {
      console.error('Failed to fetch works from API:', e);
    }
    // Fallback to default projects
    setProjects(defaultProjects);
    setLoading(false);
  }, [defaultProjects]);

  React.useEffect(() => {
    fetchWorks().finally(() => setLoading(false));

    // Listen for storage events from dashboard updates (same browser)
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'replytentra_works_updated') fetchWorks();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [fetchWorks]);

  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Our Featured Work
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Read detailed breakdowns of custom AI automations and SaaS platform developments shipped by ReplyTentra.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
