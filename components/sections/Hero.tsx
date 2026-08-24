'use client';
import React from 'react';
import Link from 'next/link';
import { InteractiveSystem } from '@/components/animations/InteractiveSystem';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ArrowRight, Bot, Cpu, Zap, Activity } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full pt-4 pb-10 sm:pt-10 sm:pb-24 md:pt-12 md:pb-28 overflow-hidden bg-background">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
                <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Next-Generation Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                We build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-600 dark:from-accent dark:to-indigo-400">
                  intelligent systems
                </span>{' '}
                that scale business.
              </h1>
            </motion.div>

            {/* Description — shorter on mobile */}
            <motion.div variants={itemVariants}>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                <span className="sm:hidden">
                  ReplyTentra engineers AI agents, workflows, and custom SaaS built around real business problems.
                </span>
                <span className="hidden sm:inline">
                  We don&apos;t just build websites or automations. ReplyTentra engineers high-performance AI agents, workflows, and custom SaaS software designed around real business problems.
                </span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-row gap-3 sm:gap-4">
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm sm:text-base hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                Book a Call <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg bg-card border border-border text-foreground hover:bg-muted font-bold text-sm sm:text-base transition-all duration-200 whitespace-nowrap"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Trust Indicators — hidden on very small screens, shown from sm */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:grid pt-6 border-t border-border grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">AI Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">Custom Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">n8n / Zapier</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">CRM Systems</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Visualizer — hidden on mobile, shown from lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-6 shadow-xl dark:bg-slate-950/20 overflow-hidden">
              <InteractiveSystem />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
