'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Grip, Plus } from 'lucide-react';
import Link from 'next/link';
import { InteractiveSystem } from '@/components/animations/InteractiveSystem';

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center pt-12 pb-12 lg:pt-16 lg:pb-24 overflow-hidden bg-white dark:bg-[#020817] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-[11px] tracking-widest uppercase mb-8 border border-purple-100 dark:border-purple-500/20"
            >
              <Zap className="w-3.5 h-3.5 fill-purple-600" />
              <span>Next-Generation Automation</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#0f172a] dark:text-white leading-[1.15] tracking-tight mb-6"
            >
              We build <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                intelligent systems
              </span> <br className="hidden lg:block" />
              that scale business.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-[480px] font-medium"
            >
              We don't just build websites or automations. 
              ReplyTentra engineers AI agents, workflows, and custom software designed around real business problems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Link href="/book-a-meeting" className="w-full sm:w-auto px-8 py-4 bg-[#0f172a] hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 cursor-pointer">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group hover:shadow-sm cursor-pointer">
                Our Services
                <Grip className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-0"
            >
              <div className="flex -space-x-3 shrink-0">
                <img className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#020817] object-cover shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Avatar" />
                <img className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#020817] object-cover shrink-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="Avatar" />
                <img className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#020817] object-cover shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Avatar" />
                <img className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#020817] object-cover shrink-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Avatar" />
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#020817] bg-[#a78bfa] text-white flex items-center justify-center font-bold text-xs relative z-10 shrink-0">
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-[13px] sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-snug">
                Trusted by growing businesses around the world
              </div>
            </motion.div>

          </div>

          {/* Right Column - Interactive Diagram */}
          <div className="hidden lg:block w-full lg:w-[55%] h-[600px] sm:h-[650px] relative mt-12 lg:mt-0">
            <InteractiveSystem />
          </div>

        </div>
      </div>
    </section>
  );
}
