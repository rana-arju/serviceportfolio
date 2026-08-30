"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Development" },
  { name: "React", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "Node.js", category: "Development" },
  { name: "Python", category: "Development" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "n8n", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "GoHighLevel", category: "CRM" },
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "Docker", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
];

export default function TechnologyEcosystem() {
  return (
    <section className="w-full py-24 px-5 md:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Built With the Right Technology.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We don&apos;t limit ourselves to one stack. We choose the best tools to solve your specific business challenges.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative px-6 py-3 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider hidden sm:inline-block">
                  {tech.category}
                </span>
                <span className="sm:hidden w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="text-base font-semibold text-slate-800 dark:text-slate-200">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
