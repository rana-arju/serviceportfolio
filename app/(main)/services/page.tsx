import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Bot, Layers, Code } from 'lucide-react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Our Services | ReplyTentra — AI Automation, n8n, GoHighLevel & SaaS Development',
  description:
    'We design, build, and support business pipelines, CRM integrations, and full-stack SaaS applications using n8n, GoHighLevel, Zapier, and React/Next.js systems. Get a free audit.',
  canonical: '/services',
  keywords: [
    'AI Automation Services',
    'n8n Workflow Automation',
    'GoHighLevel CRM Setup',
    'CRM Customization Agency',
    'SaaS Development Agency',
    'Business Process Automation',
    'Zapier Automation Agency',
    'Custom Software Development',
    'AI Chatbot Development',
  ],
});

const SERVICE_SECTIONS = [
  {
    category: 'AI & Automation',
    icon: Bot,
    items: [
      {
        title: 'AI Workflow Automation',
        description: 'Design automated processes to process documents, drafts, and responses using GPT, Anthropic, or custom local reasoning models.',
        for: 'Operations teams bogged down by manual document review, classification, and drafting.',
        outcome: '80% reduction in manual data mapping and instantly classified data queues.',
        tech: ['OpenAI', 'Anthropic', 'n8n', 'Python'],
      },
      {
        title: 'n8n Workflow Automation',
        description: 'Develop custom nodes, loops, webhooks, and complex branch pipelines to integrate tools without subscription bloat.',
        for: 'Businesses looking for scalable, self-hosted, or cloud operations integrations.',
        outcome: 'Centralized workflow orchestration running 24/7 with zero human intervention.',
        tech: ['n8n', 'Node.js', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Zapier Automation',
        description: 'Connect standard SaaS tools quickly with error handling, custom scripts, filters, and multi-step actions.',
        for: 'Rapid prototyping and connecting mainstream apps.',
        outcome: 'Reliable integrations deployed in days instead of weeks.',
        tech: ['Zapier', 'Webhooks', 'JavaScript'],
      },
    ],
  },
  {
    category: 'GoHighLevel & CRM',
    icon: Layers,
    items: [
      {
        title: 'GoHighLevel Setup & CRM Customization',
        description: 'Configure clean contact pipelines, custom fields, calendars, and dashboards tailored to your sales process.',
        for: 'Sales teams needing a single source of truth without overlapping CRM tool costs.',
        outcome: 'Unified customer journey with full lead attribution metrics.',
        tech: ['GoHighLevel CRM', 'Mailgun', 'Twilio'],
      },
      {
        title: 'Lead Management & Appointment Automation',
        description: 'Integrate custom calendar booking systems with automatic SMS/Email confirmations and follow-up sequences.',
        for: 'Service providers looking to eliminate calendar back-and-forth.',
        outcome: '30% increase in scheduled meetings and zero missed follow-ups.',
        tech: ['GoHighLevel', 'Cal.com', 'Zapier'],
      },
    ],
  },
  {
    category: 'Custom Development',
    icon: Code,
    items: [
      {
        title: 'SaaS Platforms & Web Applications',
        description: 'Build robust, highly interactive client portals, dashboards, and scalable database applications.',
        for: 'Startups and enterprises launching custom software products.',
        outcome: 'Production-ready software utilizing sub-second React SSR render speeds.',
        tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      },
      {
        title: 'API Integrations & Custom Dashboards',
        description: 'Design unified backend aggregators to pull scattered data from multiple software systems into a single dashboard.',
        for: 'Management requiring live performance reporting.',
        outcome: 'Single analytical panel updating in real-time with verified metrics.',
        tech: ['Node.js', 'Next.js', 'Docker', 'AWS'],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Intelligent Systems & custom software
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            We design, build, and support business pipelines, CRM integrations, and full-stack SaaS applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {SERVICE_SECTIONS.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div key={sec.category} className="space-y-10">
                {/* Section Header */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {sec.category}
                  </h2>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {sec.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="space-y-3.5 pt-4 border-t border-border/60">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider block">Who it&apos;s for</span>
                            <p className="text-xs text-foreground mt-0.5">{item.for}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-extrabold uppercase text-muted-foreground tracking-wider block">Expected Outcome</span>
                            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">{item.outcome}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 mt-8 border-t border-border flex flex-wrap gap-1.5 items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.tech.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-muted text-[10px] font-semibold text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/book-a-meeting"
                          className="text-xs font-bold text-accent hover:text-foreground transition-colors"
                        >
                          Book Custom Setup &rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
