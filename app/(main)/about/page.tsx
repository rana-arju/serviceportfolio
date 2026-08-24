'use client';
import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ShieldCheck, Heart, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

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
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card flex gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
