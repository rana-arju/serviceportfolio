"use client";

import { motion } from "framer-motion";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function AnalyticsVisual({ className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-[500px] bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded-md" />
            <div className="w-40 h-8 bg-slate-300 dark:bg-slate-800 rounded-md" />
          </div>
          <div className="w-24 h-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-xs font-bold">
            + 24.5%
          </div>
        </div>

        {/* Chart */}
        <div className="h-40 flex items-end justify-between gap-2">
          {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="w-full bg-emerald-500 rounded-t-sm"
            />
          ))}
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 space-y-2">
              <div className="w-20 h-3 bg-slate-200 dark:bg-slate-700 rounded-md" />
              <div className="w-32 h-6 bg-slate-300 dark:bg-slate-800 rounded-md" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
