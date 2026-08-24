'use client';
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand the Business',
    desc: 'We map operational workflows, identifying bottlenecks, manual tasks, and software stack integrations.',
  },
  {
    step: '02',
    title: 'Design the System',
    desc: 'We engineer a blueprint connecting CRM pipelines, n8n automations, database architecture, and custom frontend apps.',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    desc: 'Our engineers set up pipelines, configure AI agents, build Custom SaaS, and connect tools with clean APIs.',
  },
  {
    step: '04',
    title: 'Automate & Optimize',
    desc: 'We activate workflows, test edge-cases, implement validation layers, and optimize script performance.',
  },
  {
    step: '05',
    title: 'Scale with Confidence',
    desc: 'We hand over the ecosystem with complete documentation and live monitoring to scale business operations.',
  },
];

export function HowWeThink() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/20 border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Philosophy"
          title="How We Think"
          description="Operational workflows and software architectures built with engineering maturity."
          centered
        />

        {/* Timeline Line & Grid layout */}
        <div className="mt-20 relative border-l border-border max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Floating Step Badge */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs flex items-center justify-center border border-border shadow-md">
                {step.step}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
