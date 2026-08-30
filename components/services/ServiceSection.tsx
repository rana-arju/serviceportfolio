"use client";

import { motion } from "framer-motion";
import { ServiceData } from "@/lib/data/services-data";

type ServiceSectionProps = {
  data: ServiceData;
  index: number;
  visual: React.ReactNode;
};

export default function ServiceSection({ data, index, visual }: ServiceSectionProps) {
  const isEven = index % 2 === 1;

  return (
    <section className="w-full py-12 md:py-20 px-5 md:px-10 lg:px-20 overflow-hidden">
      <div className={`max-w-7xl mx-auto flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-20 items-center justify-between`}>
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 w-full flex flex-col justify-center space-y-6 md:space-y-8"
        >
          <div className="space-y-3 md:space-y-4">
            <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              {data.number} &mdash; {data.label}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.2]">
              {data.heading}
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            {data.description}
          </p>

          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.capabilities.map((cap, i) => (
                <li key={i} className="flex items-center gap-2 text-sm md:text-base text-slate-700 dark:text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex-[1.2] w-full h-full flex items-center justify-center mt-6 lg:mt-0"
        >
          {visual}
        </motion.div>

      </div>
    </section>
  );
}
