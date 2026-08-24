'use client';
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ShieldCheck, Cpu, Database, Activity, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const BENEFITS = [
  {
    title: 'Business-First Engineering',
    desc: 'We map technology choices to business metrics. If it doesn&apos;t save time or generate revenue, we don&apos;t build it.',
  },
  {
    title: 'Custom-Built Solutions',
    desc: 'No generic templates. We build proprietary components, custom scripts, and specific automation connectors.',
  },
  {
    title: 'Complex Integration Expertise',
    desc: 'Experienced in connecting APIs with complex payloads, pagination constraints, webhooks, and rate-limiting rules.',
  },
  {
    title: 'Scalable Software Architecture',
    desc: 'Clean codebases built in TypeScript, containers, and hosted on secure clouds, facilitating future maintenance.',
  },
];

export function WhyReplyTentra() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/20 border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <SectionHeader
              badge="Why Choose Us"
              title="The Systems Partner You Can Trust"
              description="Most agencies stitch ready-made templates. We design, write, test, and optimize custom software workflows tailored specifically to solve operations friction."
            />
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-bold">100% Custom code</span>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-bold">API Integration experts</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-sm hover:shadow transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
