'use client';
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowRight, Sparkles, Database, Layers, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

export function CapabilitiesMap() {
  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive Blueprint"
          title="Our Connected Capabilities"
          description="ReplyTentra is not just a collection of services. We coordinate AI, workflows, systems, and product development into a singular scale architecture."
          centered
        />

        {/* Capability Connect System */}
        <div className="mt-16 max-w-4xl mx-auto relative px-4 sm:px-8 py-12 rounded-2xl border border-border bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10 text-center">
            
            {/* Step 1: AI */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-foreground">AI Integration</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">LLMs, Reasoning & Vector Search</p>
            </motion.div>

            {/* Link arrow */}
            <div className="hidden md:flex justify-center text-accent">
              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>

            {/* Step 2: Automation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto">
                <GitMerge className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-foreground">Pipelines</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">n8n / Zapier Integrations</p>
            </motion.div>

            {/* Link arrow */}
            <div className="hidden md:flex justify-center text-accent">
              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>

            {/* Step 3: Systems */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-foreground">Scalable CRM</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Custom GHL Setup & Databases</p>
            </motion.div>

          </div>

          <div className="mt-10 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
              Engineered Pipeline Workflow Flowing Live &rarr;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
