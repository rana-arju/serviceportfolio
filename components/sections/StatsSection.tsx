'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Bot, Zap, Cpu, Database } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { icon: Bot, value: 50, suffix: '+', label: 'AI Agents Built', description: 'Intelligent systems deployed for operations' },
  { icon: Zap, value: 200, suffix: '+', label: 'Workflows Automated', description: 'Hours saved daily across client businesses' },
  { icon: Cpu, value: 30, suffix: '+', label: 'SaaS Products', description: 'Custom platforms engineered and launched' },
  { icon: Database, value: 99, suffix: '%', label: 'Client Retention', description: 'Partnerships built on measurable success' },
];

function AnimatedCounter({ from = 0, to, suffix = '', duration = 2 }: { from?: number; to: number; suffix?: string; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-50px 0px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && nodeRef.current) {
      setHasAnimated(true);
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        
        // easeOutQuart easing
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(easeProgress * (to - from) + from);
        if (nodeRef.current) {
          nodeRef.current.textContent = current + suffix;
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          if (nodeRef.current) nodeRef.current.textContent = to + suffix;
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, hasAnimated, from, to, duration, suffix]);

  return <span ref={nodeRef} className="tabular-nums">{from}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-border overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-indigo-500 dark:text-indigo-400 uppercase bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 mb-4"
          >
            By The Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Delivering scale at the speed of thought
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400"
          >
            We don&apos;t just consult; we build. Here is a snapshot of the systems we&apos;ve engineered for ambitious businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map(({ icon: Icon, value, suffix, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group flex flex-col items-center text-center p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-indigo-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                <Icon className="w-6 h-6" />
              </div>
              
              <div className="relative">
                <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">
                  <AnimatedCounter to={value} suffix={suffix} />
                </h3>
                <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
                  {label}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
