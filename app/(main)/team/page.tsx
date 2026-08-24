'use client';
import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';

const TEAM_MEMBERS = [
  {
    name: 'Rian Carter',
    role: 'Founder & Head of Systems',
    bio: 'Former systems architect with 10+ years designing enterprise APIs, CRM databases, and microservices.',
  },
  {
    name: 'Aria Thompson',
    role: 'Lead Automation Engineer',
    bio: 'Specialist in custom n8n nodes, Javascript workflow filters, and multi-step pipeline architectures.',
  },
  {
    name: 'Devon Lee',
    role: 'Senior Next.js Developer',
    bio: 'Crafts responsive UI components, real-time analytics graphs, and interactive React client dashboards.',
  },
];

export default function TeamPage() {
  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            Our Engineers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Meet the Team Behind the Systems
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            We are a group of developers, automation experts, and CRM builders focused on shipping high-performance code.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-extrabold text-slate-700 dark:text-slate-300">
                  {m.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-none">{m.name}</h3>
                  <span className="text-xs font-semibold text-accent block mt-1">{m.role}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-muted-foreground hover:text-accent transition-colors"
                >
                  Connect on LinkedIn &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Small Enough / Skilled Enough Block */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border bg-slate-900 text-white dark:bg-slate-950/40 shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">Small Enough to Care. Skilled Enough to Build Big.</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We don&apos;t delegate client projects to junior account managers. You collaborate directly with the senior engineers who design and write the code.
            </p>
          </div>
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 whitespace-nowrap transition-colors"
          >
            Start Collaboration
          </Link>
        </div>

        {/* Hiring CTA */}
        <div className="text-center space-y-4 pt-10">
          <h3 className="text-lg font-bold text-foreground">Interested in Building the Future With Us?</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            We are always looking for skilled n8n workflow builders, custom API developers, and Next.js engineers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-foreground transition-colors"
          >
            Send Us Your Resume &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
