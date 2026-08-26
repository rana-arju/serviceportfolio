'use client';
import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { WORK_PROJECTS } from '../page';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Cpu, HelpCircle, Lightbulb } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Work
        </Link>

        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            {project.industry}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hero Media Container */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-border bg-card shadow-2xl relative">
          {project.media.type === 'youtube' ? (
            <iframe
              src={`${project.media.url}?autoplay=0&rel=0`}
              title={project.title}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <img
              src={project.media.url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          
          {/* Detailed Breakdown */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* The Challenge */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-800 transition-colors duration-200">
              <div className="flex items-center gap-3 text-red-500">
                <HelpCircle className="w-6 h-6" />
                <h3 className="text-lg font-bold text-foreground">The Challenge</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Our Solution */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-800 transition-colors duration-200">
              <div className="flex items-center gap-3 text-accent">
                <Lightbulb className="w-6 h-6" />
                <h3 className="text-lg font-bold text-foreground">Our Solution</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* The Result */}
            <div className="p-8 rounded-2xl border border-emerald-500/20 dark:border-emerald-500/10 bg-emerald-50/5 dark:bg-emerald-950/5 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-lg font-bold">Key Project Outcomes</h3>
              </div>
              <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 leading-relaxed">
                {project.result}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-accent">
                <Cpu className="w-6 h-6" />
                <h3 className="text-lg font-bold text-foreground">Technologies Implemented</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-muted text-xs font-bold text-muted-foreground hover:bg-accent/15 hover:text-accent transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Timeline Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-6 sticky top-8">
              <h3 className="text-xl font-extrabold text-foreground tracking-tight border-b border-border pb-4">
                Project Journey
              </h3>

              <div className="relative border-l border-border ml-2 pl-6 space-y-8">
                {project.timeline?.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                        {step.phase}
                      </span>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                        {step.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Strategy Call Link */}
        <div className="p-8 sm:p-12 rounded-3xl border border-border bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-sm text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Need a Similar Solution Built?</h3>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our systems engineers can design custom integrations mapping your specific business requirements. Let's configure a plan that fits.
          </p>
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
          >
            Schedule Strategy Session
          </Link>
        </div>

      </div>
    </div>
  );
}
