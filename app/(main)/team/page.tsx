import React from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { TeamSection } from '@/components/sections/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Engineering Team | ReplyTentra',
  description: 'Meet the ReplyTentra systems engineering team designing custom automations, CRM pipelines, and full-stack software dashboards.',
  keywords: ['ReplyTentra Team', 'n8n developers', 'Systems engineers'],
};

export default function TeamPage() {
  return (
    <div className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Render Refactored Reusable Team Section */}
        <TeamSection showHeading={true} className="py-0" />

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

