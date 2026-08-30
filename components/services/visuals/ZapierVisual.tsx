"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function ZapierVisual({ className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-wrap justify-center gap-4 max-w-[400px]">
        {[
          { color: "bg-blue-500", name: "Form" },
          { color: "bg-green-500", name: "Sheets" },
          { color: "bg-purple-500", name: "Slack" },
          { color: "bg-red-500", name: "Mail" },
          { color: "bg-indigo-500", name: "CRM" }
        ].map((app, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className={`w-16 h-16 rounded-2xl ${app.color} shadow-lg flex items-center justify-center text-white font-bold text-xl`}>
              {app.name[0]}
            </div>
            {i !== 4 && (
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="hidden md:block absolute right-[-20px] top-6 text-slate-400"
              >
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Central Hub */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="w-full mt-8 p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-between"
        >
          <div className="flex-1 space-y-2">
            <div className="w-1/2 h-4 bg-orange-500 rounded-md" />
            <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-800 rounded-md" />
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />
        </motion.div>
      </div>
    </div>
  );
}
