"use client";

import { motion } from "framer-motion";
import { BrainCircuit, FileText, Database, Globe } from "lucide-react";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function AIVisual({ className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[500px] aspect-square max-h-[500px]">
        {/* Central AI Brain */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 40px rgba(99,102,241,0.4)", "0 0 0 rgba(99,102,241,0)"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center z-30"
        >
          <BrainCircuit className="w-16 h-16 text-white" />
        </motion.div>

        {/* Orbiting Elements */}
        {[
          { icon: <FileText />, label: "Docs", delay: 0 },
          { icon: <Database />, label: "CRM Data", delay: 0.2 },
          { icon: <Globe />, label: "Web API", delay: 0.4 },
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className={`absolute w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center gap-1 z-20`}
            style={{
              top: i === 0 ? '10%' : i === 1 ? '70%' : '50%',
              left: i === 0 ? '50%' : i === 1 ? '20%' : '80%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="text-indigo-500">{node.icon}</div>
            <p className="text-[10px] font-bold text-slate-500">{node.label}</p>
          </motion.div>
        ))}

        {/* Connecting Lines SVG */}
        <svg className="absolute inset-0 w-full h-full z-10" style={{ pointerEvents: 'none' }}>
          <motion.circle cx="50%" cy="50%" r="35%" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="10 10" 
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ transformOrigin: "center" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99,102,241,0.1)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
