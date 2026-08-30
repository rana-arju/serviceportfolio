"use client";

import { motion } from "framer-motion";
import { Workflow, Mail, MessageSquare, Database, ArrowRight } from "lucide-react";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function AutomationVisual({ className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl" />

      {/* Workflow Diagram */}
      <div className="relative z-10 w-full max-w-[500px] flex flex-col items-center gap-6">
        {/* Trigger */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-4 w-64 z-20 relative"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
            <Workflow className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">New Lead Captured</p>
            <p className="text-xs text-slate-500">Trigger</p>
          </div>
        </motion.div>

        {/* Animated Line 1 */}
        <div className="h-8 w-[2px] bg-slate-200 dark:bg-slate-700 relative">
          <motion.div
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-orange-500 rounded-full"
          />
        </div>

        {/* Processing Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-4 w-64 z-20"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Format Data</p>
            <p className="text-xs text-slate-500">Action</p>
          </div>
        </motion.div>

        {/* Split Lines */}
        <div className="w-64 h-8 relative flex justify-between">
          <div className="w-[2px] h-full bg-slate-200 dark:bg-slate-700 absolute left-8 origin-top rotate-[-30deg]" />
          <div className="w-[2px] h-full bg-slate-200 dark:bg-slate-700 absolute right-8 origin-top rotate-[30deg]" />
        </div>

        {/* End Nodes */}
        <div className="flex gap-8 z-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-3 w-40"
          >
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Send Email</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-3 w-40"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Slack Alert</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
