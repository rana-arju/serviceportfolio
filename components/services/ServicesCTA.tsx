"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="relative w-full py-32 px-5 md:px-10 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-slate-950 dark:bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-slate-950 to-blue-900/50" />
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0%, transparent 50%)',
          backgroundSize: '100% 100%'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Have a Business Problem <br className="hidden md:block" /> Worth Solving?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 max-w-2xl"
        >
          Let&apos;s turn your idea, workflow, or business challenge into a system that actually works.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Link
            href="/book-a-meeting"
            className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
          >
            Book a Meeting
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition-colors border border-slate-700 shadow-xl"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
