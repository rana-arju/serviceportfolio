"use client";

import { motion } from "framer-motion";
import { Webhook, Bot, Database, Mail, MessageSquare } from "lucide-react";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function N8nVisual({ className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/20 dark:bg-rose-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[500px] bg-slate-100/50 dark:bg-slate-950/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
        <div className="flex flex-col gap-6 relative">
          {/* Vertical connection line */}
          <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-slate-300 dark:bg-slate-700">
            <motion.div
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-4 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
            />
          </div>

          {[
            { icon: <Webhook className="w-5 h-5" />, label: "Webhook", color: "bg-purple-500", delay: 0 },
            { icon: <Bot className="w-5 h-5" />, label: "AI Processing", color: "bg-blue-500", delay: 0.2 },
            { icon: <Database className="w-5 h-5" />, label: "Update Record", color: "bg-emerald-500", delay: 0.4 },
            { icon: <Mail className="w-5 h-5" />, label: "Send Email", color: "bg-amber-500", delay: 0.6 }
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay }}
              className="flex items-center gap-4 relative z-10"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg ${node.color}`}>
                {node.icon}
              </div>
              <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{node.label}</p>
                  <p className="text-xs text-slate-500">n8n Node</p>
                </div>
                <div className="w-12 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
