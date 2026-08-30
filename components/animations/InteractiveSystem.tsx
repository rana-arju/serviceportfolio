'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Bot, Users, Workflow, Monitor, PieChart, CheckCircle2, BarChart2, Mail, Clock, Check } from 'lucide-react';

export function InteractiveSystem() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[700px] bg-transparent" />;
  }

  return (
    <div className="relative w-full h-[700px] bg-transparent flex items-center justify-center">
      
      {/* Background Dots/Grid for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      
      {/* Glowing Orbs behind the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#8b5cf6]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#3b82f6]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* SVG Connectors with arrows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0 2px 4px rgba(139,92,246,0.3))' }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Arrow heads - scaled perfectly for strokeWidth 0.5 */}
          <marker id="arrow-purple" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="3" markerHeight="3" orient="auto">
            <path d="M0,0 L12,6 L0,12" fill="#a855f7" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="3" markerHeight="3" orient="auto">
            <path d="M0,0 L12,6 L0,12" fill="#3b82f6" />
          </marker>
          <marker id="arrow-emerald" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="3" markerHeight="3" orient="auto">
            <path d="M0,0 L12,6 L0,12" fill="#2dd4bf" />
          </marker>
          
          {/* Gradients for lines */}
          <linearGradient id="grad-crm" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="grad-auto" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
          <linearGradient id="grad-webapp" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="grad-analytics" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="grad-ai" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Outer glowing connections */}
        <g fill="none" strokeWidth="0.5" strokeLinecap="round">
          {/* Top (AI Agents) - Subtle curve to fix SVG vertical gradient bug */}
          <path d="M 50 33 C 50.5 25, 49.5 20, 50 15" stroke="url(#grad-ai)" markerEnd="url(#arrow-purple)" />
          {/* Mid Left (CRM) - S curve dipping down then up to card */}
          <path d="M 33 48 C 25 60, 28 22, 24 22" stroke="url(#grad-crm)" markerEnd="url(#arrow-blue)" />
          {/* Mid Right (Automation) - S curve dipping down then up to card */}
          <path d="M 67 48 C 75 60, 72 22, 76 22" stroke="url(#grad-auto)" markerEnd="url(#arrow-emerald)" />
          {/* Bottom Left (Web/App) - Curve downwards */}
          <path d="M 38 62 C 30 68, 28 70, 24 70" stroke="url(#grad-webapp)" markerEnd="url(#arrow-blue)" />
          {/* Bottom Right (Analytics) - Curve downwards */}
          <path d="M 62 62 C 70 68, 72 70, 76 70" stroke="url(#grad-analytics)" markerEnd="url(#arrow-purple)" />
        </g>

        {/* Dots at origin (on the center ring) */}
        <circle cx="50" cy="33" r="0.8" fill="#c084fc" />
        <circle cx="33" cy="48" r="0.8" fill="#3b82f6" />
        <circle cx="67" cy="48" r="0.8" fill="#2dd4bf" />
        <circle cx="38" cy="62" r="0.8" fill="#06b6d4" />
        <circle cx="62" cy="62" r="0.8" fill="#a855f7" />
      </svg>

      {/* Orbital thin circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-indigo-500/15 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-indigo-500/10 z-0" />

      {/* Realistic 3D Central Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 scale-90">
        <motion.div 
          animate={!prefersReducedMotion ? { y: [-6, 6, -6] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Bottom wide glowing aura */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-[20px] opacity-40" />

          {/* Tier 1 (Base Outer Ring) */}
          <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-blue-500 shadow-[0_25px_50px_rgba(99,102,241,0.5),inset_0_-10px_20px_rgba(0,0,0,0.2),inset_0_10px_20px_rgba(255,255,255,0.4)] flex items-center justify-center p-[8px]">
            {/* Tier 2 (Inner Silver/White Ring) */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-slate-100 to-slate-200 shadow-[0_15px_30px_rgba(0,0,0,0.15),inset_0_-5px_15px_rgba(0,0,0,0.1),inset_0_5px_15px_rgba(255,255,255,0.8)] flex items-center justify-center p-[20px]">
              {/* Tier 3 (Inner Purple Glow Ring) */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-purple-50 shadow-[inset_0_4px_10px_rgba(99,102,241,0.2)] border border-indigo-100/50 p-[12px] flex items-center justify-center">
                 {/* Tier 4 (Top Cap with Logo) */}
                 <div className="relative w-full h-full rounded-full bg-white shadow-[0_10px_25px_rgba(99,102,241,0.15),inset_0_4px_8px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center border border-white">
                    <Image
                      src="/reply-tentra-logo.webp"
                      alt="ReplyTentra Logo"
                      width={120}
                      height={40}
                      className="object-contain drop-shadow-sm"
                      priority
                    />
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Cards Container */}
      <div className="relative w-full h-full z-40 font-sans">
        
        {/* 1. AI Agents (Top) */}
        <motion.div 
          className="absolute top-[3%] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100/80 dark:border-slate-800 p-4 w-[200px] flex gap-4 items-center hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all cursor-pointer scale-95"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        >
          <div className="w-11 h-11 rounded-[14px] bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-800 dark:text-white">AI Agents</div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active</span>
            </div>
          </div>
        </motion.div>

        {/* 2. CRM & Pipeline (Mid-Left) */}
        <motion.div 
          className="absolute top-[16%] left-[10%] -translate-x-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100/80 dark:border-slate-800 p-4 w-[220px] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all cursor-pointer scale-95"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          <div className="flex gap-4 items-center mb-4">
            <div className="w-11 h-11 rounded-[14px] bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-800 dark:text-white">CRM & Pipeline</div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Connected</span>
              </div>
            </div>
          </div>
          {/* Mini Chart Graphic - Animated & Colorful */}
          <div className="flex items-end justify-between h-8 px-1 gap-1">
            {[45, 60, 75, 65, 85, 95, 80, 100, 90, 95].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${h}%`, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.08), type: "spring", bounce: 0.3 }}
                className="w-full rounded-sm bg-gradient-to-t from-blue-500 to-indigo-400 dark:from-blue-600 dark:to-indigo-500 shadow-sm" 
              />
            ))}
          </div>
        </motion.div>

        {/* 3. Automation (Mid-Right) */}
        <motion.div 
          className="absolute top-[16%] left-[90%] -translate-x-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100/80 dark:border-slate-800 p-4 w-[220px] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all cursor-pointer scale-95"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          <div className="flex gap-4 items-center mb-5">
            <div className="w-11 h-11 rounded-[14px] bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Workflow className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-800 dark:text-white">Automation</div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Running</span>
              </div>
            </div>
          </div>
          {/* Flow icons - Exact match */}
          <div className="flex items-center justify-between px-1 opacity-70">
            <Mail className="w-4 h-4 text-slate-500" />
            <div className="flex-1 border-t-2 border-slate-200 border-dashed mx-2" />
            <Mail className="w-4 h-4 text-slate-500" />
            <div className="flex-1 border-t-2 border-slate-200 border-dashed mx-2" />
            <Clock className="w-4 h-4 text-slate-500" />
            <div className="flex-1 border-t-2 border-slate-200 border-dashed mx-2" />
            <div className="w-[18px] h-[18px] rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-emerald-600" /></div>
          </div>
        </motion.div>

        {/* 4. Web / App (Bottom-Left) */}
        <motion.div 
          className="absolute top-[65%] left-[10%] -translate-x-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100/80 dark:border-slate-800 p-4 w-[220px] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all cursor-pointer scale-95"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        >
          <div className="flex gap-4 items-center mb-4">
            <div className="w-11 h-11 rounded-[14px] bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-800 dark:text-white">Web / App</div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Live</span>
              </div>
            </div>
          </div>
          {/* Real Images Mockups */}
          <div className="flex gap-2 h-[60px] items-end mt-1">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
              alt="Web Dashboard" 
              className="w-[65%] h-full object-cover rounded-[6px] shadow-md border border-slate-200 dark:border-slate-800" 
            />
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=400&fit=crop" 
              alt="Mobile App" 
              className="w-[30%] h-[95%] object-cover rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 shrink-0" 
            />
          </div>
        </motion.div>

        {/* 5. Analytics (Bottom-Right) */}
        <motion.div 
          className="absolute top-[65%] left-[90%] -translate-x-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100/80 dark:border-slate-800 p-4 w-[220px] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all cursor-pointer scale-95"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        >
          <div className="flex gap-4 items-center mb-4">
            <div className="w-11 h-11 rounded-[14px] bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <PieChart className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-800 dark:text-white">Analytics</div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Real-time</span>
              </div>
            </div>
          </div>
          {/* Mini Line Chart - Exact match */}
          <div className="w-full h-[40px] relative mt-1">
            <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0,25 Q15,5 30,15 T60,10 T100,2" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0,25 Q15,5 30,15 T60,10 T100,2 L100,30 L0,30 Z" fill="url(#purpleGradNew)" opacity="0.15"/>
              <defs>
                <linearGradient id="purpleGradNew" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* 6. System Connected (Bottom-Center) */}
        <motion.div 
          className="absolute top-[88%] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100/80 dark:border-slate-800 px-6 py-4 flex gap-4 items-center w-max hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all cursor-pointer scale-95"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-800 dark:text-white leading-tight">System Connected</div>
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-1">All systems are operating smoothly</div>
          </div>
          {/* Mini soundwave/pulse graphic */}
          <div className="flex items-center gap-1 ml-6 h-5 opacity-40">
            <div className="w-[3px] h-[30%] bg-emerald-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"/>
            <div className="w-[3px] h-[100%] bg-emerald-500 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"/>
            <div className="w-[3px] h-[60%] bg-emerald-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"/>
            <div className="w-[3px] h-[90%] bg-emerald-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"/>
            <div className="w-[3px] h-[40%] bg-emerald-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"/>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
