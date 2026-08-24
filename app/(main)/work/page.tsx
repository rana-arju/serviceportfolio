'use client';
import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  techs: string[];
}

export const WORK_PROJECTS: Project[] = [
  {
    slug: 'ai-lead-automation-system',
    title: 'AI Lead Automation System',
    industry: 'Enterprise CRM / Sales',
    challenge: 'Over 40 hours spent weekly manually classifying and routing sales leads from scattered contact forms.',
    solution: 'Built custom AI pipelines utilizing self-hosted n8n and OpenAI models to parse inbound leads and synchronize CRM databases.',
    result: 'Reduced manual labor by 85% and increased response speed to under 2 minutes.',
    techs: ['n8n', 'GoHighLevel', 'OpenAI API', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'crm-sales-automation-platform',
    title: 'CRM Sales Automation Platform',
    industry: 'Real Estate / Agency Operations',
    challenge: 'Disconnected customer touchpoints and dropoff in lead followups caused loss of potential bookings.',
    solution: 'Designed and deployed unified CRM pipelines, SMS/Email sequence workflows, and custom calendar booking portals.',
    result: 'Boosted conversion rates by 22% and automated client reminders.',
    techs: ['GoHighLevel', 'Zapier', 'PostgreSQL', 'TypeScript'],
  },
  {
    slug: 'custom-saas-dashboard',
    title: 'Custom SaaS Customer Dashboard',
    industry: 'Finance / Technology',
    challenge: 'Legacy systems lacked client dashboard portal to track analytics and invoice history.',
    solution: 'Developed dynamic Next.js App Router workspace connected to custom Node API microservices.',
    result: 'Improved client retention by 15% and delivered sub-second page performance.',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Docker', 'AWS'],
  },
];

export default function WorkPage() {
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
          {WORK_PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    {project.industry}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider block">Challenge</span>
                    <p className="text-sm text-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider block">What We Built</span>
                    <p className="text-sm text-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider block">Result</span>
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{project.result}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-border flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-muted text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-foreground transition-colors group self-start"
                >
                  Read Architecture Breakdown <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
