"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Layers, LineChart, Rocket } from "lucide-react";

const processSteps = [
  { num: "01", title: "Understand", desc: "We learn your business, goals, and constraints.", icon: <Lightbulb className="w-6 h-6" /> },
  { num: "02", title: "Architect", desc: "We design a scalable system and clear roadmap.", icon: <PenTool className="w-6 h-6" /> },
  { num: "03", title: "Build", desc: "We engineer the solution with rigorous testing.", icon: <Code2 className="w-6 h-6" /> },
  { num: "04", title: "Integrate", desc: "We connect systems and deploy to production.", icon: <Layers className="w-6 h-6" /> },
  { num: "05", title: "Optimize", desc: "We monitor data and refine performance.", icon: <LineChart className="w-6 h-6" /> },
  { num: "06", title: "Scale", desc: "We expand capabilities as your business grows.", icon: <Rocket className="w-6 h-6" /> }
];

export default function ProcessSection() {
  return (
    <section className="w-full py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            We Don&apos;t Just Build. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
              We Understand.
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our systematic approach ensures that every line of code and automated workflow translates to real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Subtle background connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 z-0" />
          
          {processSteps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 group"
            >
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-colors" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-6xl font-black text-slate-100 dark:text-slate-800/50 select-none">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
