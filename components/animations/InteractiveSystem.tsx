'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bot, Cpu, GitBranch, Database, Sparkles } from 'lucide-react';

export function InteractiveSystem() {
  // Define positions relative to center for clean layout
  const nodes = [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      status: 'Active',
      icon: Bot,
      color: 'from-blue-500 to-cyan-400',
      shadowColor: 'rgba(59, 130, 246, 0.3)',
      className: 'absolute top-6 left-6 md:top-12 md:left-10',
      x: -120,
      y: -110,
    },
    {
      id: 'n8n',
      title: 'AI Workflows',
      status: 'Connected',
      icon: GitBranch,
      color: 'from-emerald-500 to-teal-400',
      shadowColor: 'rgba(16, 185, 129, 0.3)',
      className: 'absolute bottom-6 left-6 md:bottom-12 md:left-10',
      x: -120,
      y: 110,
    },
    {
      id: 'crm',
      title: 'CRM Hub',
      status: 'Synced',
      icon: Database,
      color: 'from-purple-500 to-indigo-400',
      shadowColor: 'rgba(139, 92, 246, 0.3)',
      className: 'absolute top-6 right-6 md:top-12 md:right-10',
      x: 120,
      y: -110,
    },
    {
      id: 'saas',
      title: 'Custom SaaS',
      status: 'Online',
      icon: Cpu,
      color: 'from-rose-500 to-orange-400',
      shadowColor: 'rgba(244, 63, 94, 0.3)',
      className: 'absolute bottom-6 right-6 md:bottom-12 md:right-10',
      x: 120,
      y: 110,
    },
  ];

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 p-4 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md">
      {/* Dynamic tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* SVG Connecting Glow Pipelines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 450" preserveAspectRatio="none">
        {/* Glow Filters */}
        <defs>
          <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-indigo" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer orbital rings for central element */}
        <motion.circle
          cx="250"
          cy="225"
          r="95"
          fill="none"
          stroke="rgba(99, 102, 241, 0.15)"
          strokeWidth="1"
          strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="250"
          cy="225"
          r="135"
          fill="none"
          stroke="rgba(99, 102, 241, 0.08)"
          strokeWidth="1.5"
          strokeDasharray="15 10 5 10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />

        {/* Connecting Lines to Nodes */}
        {/* Left Top Node (AI Agents) */}
        <motion.path
          d="M 250,225 L 120,120"
          fill="none"
          stroke="currentColor"
          className="text-slate-300 dark:text-slate-800"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Left Bottom Node (AI Workflows) */}
        <motion.path
          d="M 250,225 L 120,330"
          fill="none"
          stroke="currentColor"
          className="text-slate-300 dark:text-slate-800"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Right Top Node (CRM Hub) */}
        <motion.path
          d="M 250,225 L 380,120"
          fill="none"
          stroke="currentColor"
          className="text-slate-300 dark:text-slate-800"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Right Bottom Node (Custom SaaS) */}
        <motion.path
          d="M 250,225 L 380,330"
          fill="none"
          stroke="currentColor"
          className="text-slate-300 dark:text-slate-800"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Glowing Pulses along the paths */}
        <motion.circle
          r="3.5"
          fill="#6366f1"
          filter="url(#glow-blue)"
          animate={{
            cx: [250, 120, 250],
            cy: [225, 120, 225],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          r="3.5"
          fill="#10b981"
          filter="url(#glow-blue)"
          animate={{
            cx: [250, 120, 250],
            cy: [225, 330, 225],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.circle
          r="3.5"
          fill="#8b5cf6"
          filter="url(#glow-blue)"
          animate={{
            cx: [250, 380, 250],
            cy: [225, 120, 225],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.circle
          r="3.5"
          fill="#f43f5e"
          filter="url(#glow-blue)"
          animate={{
            cx: [250, 380, 250],
            cy: [225, 330, 225],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
      </svg>

      {/* Floating Elements Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Core Node: Capsule containing the full brand logo */}
        <motion.div
          className="relative z-20 w-32 h-18 sm:w-44 sm:h-22 md:w-48 md:h-24 rounded-2xl bg-white dark:bg-slate-900 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(99,102,241,0.25)] border border-indigo-500/30 p-2 sm:p-4 group cursor-pointer"
          animate={{
            y: [0, -8, 0],
            boxShadow: [
              '0 0 25px rgba(99, 102, 241, 0.2)',
              '0 0 45px rgba(99, 102, 241, 0.45)',
              '0 0 25px rgba(99, 102, 241, 0.2)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent via-indigo-500 to-purple-600 opacity-20 group-hover:opacity-40 blur transition-all duration-300" />
          
          {/* Internal Border Frame */}
          <div className="absolute inset-1 rounded-xl border border-indigo-500/10 dark:border-indigo-500/20" />
          
          {/* Smart tech corner brackets */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-indigo-500/40" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-indigo-500/40" />
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-indigo-500/40" />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-indigo-500/40" />

          {/* Logo container - using full logo webp */}
          <div className="relative z-10 w-full h-8 sm:h-12 flex items-center justify-center px-2">
            <Image
              src="/reply-tentra-logo.webp"
              alt="ReplyTentra Logo"
              width={140}
              height={42}
              priority
              className="object-contain w-20 sm:w-28 md:w-36"
            />
          </div>

          {/* Glowing tech dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Connected Feature Cards */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              className={`${node.className} z-10 w-28 xs:w-32 sm:w-40 md:w-44 p-2 sm:p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, node.id.includes('crm') || node.id.includes('ai') ? 6 : -6, 0]
              }}
              transition={{
                duration: node.id.includes('crm') ? 4.8 : node.id.includes('n8n') ? 5.2 : 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.id.includes('ai') ? 0.2 : 0.6,
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                borderColor: 'rgba(99, 102, 241, 0.4)',
                boxShadow: `0 10px 25px -5px ${node.shadowColor}`
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Icon Container with glowing dynamic gradient border */}
                <div className={`relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${node.color} p-[1px] shadow-sm flex-shrink-0`}>
                  <div className="flex items-center justify-center w-full h-full rounded-[7px] bg-white dark:bg-slate-950">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 dark:text-white" />
                  </div>
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    {node.title}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[8px] sm:text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                      {node.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tiny Tech Decoration */}
              <div className="absolute top-1 right-2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-2.5 h-2.5 text-indigo-500 animate-pulse" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
