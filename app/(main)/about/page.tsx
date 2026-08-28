import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ShieldCheck, Heart, Users, Target, Compass, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ReplyTentra | Systems Engineering for Business Scale',
  description: 'ReplyTentra was built to design custom-engineered automation environments utilizing n8n, Zapier, GoHighLevel, and standalone applications to unify workflows.',
  keywords: ['About ReplyTentra', 'Systems Engineering', 'Workflows automation', 'ReplyTentra Team'],
};

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Think Deeply',
    desc: 'We inspect underlying operations friction before recommending code or workflow tools.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Intentionally',
    desc: 'No temporary fixes or loose dependencies. We write robust scripts with error handling and logging built-in.',
  },
  {
    icon: Heart,
    title: 'Automate Intelligently',
    desc: 'Automation should simplify workflows, not introduce complex loops or systems overhead.',
  },
  {
    icon: Users,
    title: 'Communicate Clearly',
    desc: 'We align with clients regularly using plain English, mapping architecture blueprints visually.',
  },
];

export default function AboutPage() {
  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            About ReplyTentra
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Systems Engineering for Business Scale
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            ReplyTentra was built around a singular belief: businesses should not be limited by disconnected tools, repetitive manual operations, or legacy software pipelines.
          </p>
        </div>

        {/* Story Section */}
        <div className="p-8 sm:p-12 rounded-2xl border border-border bg-card shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Our Narrative</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We began as a group of developers tired of seeing businesses waste valuable engineering and operational hours manually copy-pasting client data between disconnected CRMs, analytics sheets, and email platforms.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Today, ReplyTentra designs custom-engineered automation environments utilizing n8n, Zapier, GoHighLevel, and standalone Next.js applications to serve as the unified backbones of mid-market companies.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Mission Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-slate-50/50 dark:to-slate-900/10 p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-indigo-500 opacity-80" />
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To empower national and global organizations by transforming operational friction into high-performance, automated ecosystems. We build secure, compliant, and scalable system architectures that eliminate manual overhead, allowing teams to unlock peak productivity.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/5 text-accent border border-accent/10">Global Delivery</span>
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/5 text-indigo-500 border border-indigo-500/10 dark:text-indigo-400">Scale Intent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-slate-50/50 dark:to-slate-900/10 p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-accent opacity-80" />
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To pioneer the future of automated enterprise, serving as the trusted engineering backbone for brands scaling worldwide. We envision a digital landscape where system integrations are flawless, artificial intelligence works contextually, and technology adapts seamlessly to operational strategies.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/5 text-indigo-500 border border-indigo-500/10 dark:text-indigo-400">Zero Maintenance</span>
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/5 text-accent border border-accent/10">Enterprise Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-8">
          <SectionHeader
            title="Core Principles"
            description="The values driving how we design codebases and optimize business logic."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-6 rounded-xl border border-border bg-card flex gap-4 shadow-sm hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
