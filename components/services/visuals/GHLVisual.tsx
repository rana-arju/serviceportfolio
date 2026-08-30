"use client";

import { motion } from "framer-motion";
import { Filter, Users, Calendar, DollarSign } from "lucide-react";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function GHLVisual({ className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[400px] flex flex-col gap-4">
        {[
          { icon: <Filter className="w-5 h-5" />, label: "Lead Capture", width: "100%", delay: 0 },
          { icon: <Users className="w-5 h-5" />, label: "Nurture Campaign", width: "85%", delay: 0.1 },
          { icon: <Calendar className="w-5 h-5" />, label: "Appointment Booked", width: "70%", delay: 0.2 },
          { icon: <DollarSign className="w-5 h-5" />, label: "Sale Closed", width: "55%", delay: 0.3 }
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: step.delay, duration: 0.5, ease: "easeOut" }}
            style={{ width: step.width, margin: "0 auto", transformOrigin: "center" }}
            className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <div className="text-blue-600 dark:text-blue-400">
              {step.icon}
            </div>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{step.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
