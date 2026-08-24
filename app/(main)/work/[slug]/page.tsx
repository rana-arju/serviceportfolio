'use client';
import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { WORK_PROJECTS } from '../page';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = WORK_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Work
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            {project.industry}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Content Details */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border bg-card shadow-xl space-y-8">
          
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">The Challenge</h3>
            <p className="text-base text-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-2.5 pt-6 border-t border-border">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Our Solution</h3>
            <p className="text-base text-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="space-y-2.5 pt-6 border-t border-border">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">The Result</h3>
            <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 leading-relaxed">
              {project.result}
            </p>
          </div>

          <div className="space-y-2.5 pt-6 border-t border-border">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Technology Stack Used</h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techs.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded bg-muted text-xs font-bold text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Strategy Call Link */}
        <div className="p-8 rounded-2xl border border-border bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-sm text-center space-y-4">
          <h3 className="text-lg font-bold text-foreground">Need a Similar Solution Built?</h3>
          <p className="text-sm text-muted-foreground">
            Our systems engineers can design custom integrations mapping your specific business requirements.
          </p>
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Schedule Strategy Session
          </Link>
        </div>

      </div>
    </div>
  );
}
