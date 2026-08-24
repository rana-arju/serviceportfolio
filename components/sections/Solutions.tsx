'use client';
import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_PROJECTS = [
  {
    title: 'AI Lead Automation System',
    industry: 'Enterprise CRM / Sales',
    challenge: 'Over 40 hours spent weekly manually classifying and routing sales leads.',
    solution: 'Built custom AI pipelines utilizing n8n and GPT models to parse inbound leads and route to GHL.',
    result: 'Reduced manual labor by 85% and increased response speed to under 2 minutes.',
    techs: ['n8n', 'GoHighLevel', 'OpenAI API', 'Node.js'],
  },
  {
    title: 'CRM Sales Automation Platform',
    industry: 'Real Estate / Agency Operations',
    challenge: 'Disconnected customer touchpoints and dropoff in lead followups.',
    solution: 'Designed and deployed unified CRM pipelines, SMS/Email sequence workflows, and booking calendars.',
    result: 'Boosted conversion rates by 22% and automated client reminders.',
    techs: ['GoHighLevel', 'Zapier', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'Custom SaaS Customer Dashboard',
    industry: 'Finance / Technology',
    challenge: 'Legacy system lacked client dashboard portal to track analytics.',
    solution: 'Developed dynamic Next.js App Router workspace connected to custom Node API microservices.',
    result: 'Improved client retention by 15% and delivered sub-second page performance.',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Docker'],
  },
];

export function Solutions() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            badge="Featured Case Studies"
            title="Featured Solutions"
            description="Explore our implementation portfolio demonstrating custom backend pipelines and frontend systems."
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-foreground transition-colors group whitespace-nowrap"
          >
            View All Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between"
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

                <div className="space-y-3.5">
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

              <div className="pt-6 mt-8 border-t border-border flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-muted text-xs font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
