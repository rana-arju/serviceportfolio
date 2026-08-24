'use client';
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Bot, Cpu, Layers, Zap, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: Bot,
    title: 'AI & Automation',
    items: ['n8n Automations', 'Zapier Workflows', 'AI Agent Setup', 'AI Voice Systems', 'Process Automation'],
    glow: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    icon: Layers,
    title: 'CRM & GoHighLevel',
    items: ['GHL Custom Setup', 'Pipeline Optimization', 'Sales Pipeline Integrations', 'Lead Automation', 'CRM Synchronisation'],
    glow: 'from-indigo-500/10 to-purple-500/10',
  },
  {
    icon: Code,
    title: 'Custom Development',
    items: ['High-End Websites', 'SaaS Platform Dev', 'Web Applications', 'Mobile App Development', 'API Integrations'],
    glow: 'from-violet-500/10 to-fuchsia-500/10',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Capability"
          title="Engineered Services"
          description="We deliver advanced systems engineering tailored around business automation, pipeline CRM structures, and product development."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-border bg-card p-8 shadow-sm overflow-hidden flex flex-col justify-between group"
              >
                {/* Glow backdrop effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-8 mt-8 border-t border-border">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-foreground transition-colors">
                    Explore Capability &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
