"use client";

import { motion } from "framer-motion";

const nodes = [
  { w: 250, h: 250, l: 15, t: 25 },
  { w: 180, h: 180, l: 80, t: 10 },
  { w: 300, h: 300, l: 70, t: 70 },
  { w: 220, h: 220, l: 20, t: 80 },
  { w: 150, h: 150, l: 45, t: 50 },
  { w: 280, h: 280, l: 50, t: 15 }
];

export default function ServicesHero() {
  return (
    <section className="relative w-full pt-28 pb-12 md:pt-36 md:pb-20 px-5 md:px-10 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
      
      {/* Radial Gradient overlay for fading the grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_0%,transparent_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_800px_at_50%_0%,transparent_0%,#020617_100%)]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
          Technology That Works <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
            Around Your Business.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          From custom applications and websites to AI-powered automation and business intelligence, we design and build digital systems that help businesses work smarter and scale with confidence.
        </p>
      </motion.div>
    </section>
  );
}
