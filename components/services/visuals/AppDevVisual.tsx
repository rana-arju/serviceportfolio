"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceVisualProps } from "@/lib/data/services-data";

export default function AppDevVisual({ className = "" }: ServiceVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 ${className}`}
    >
      <Image
        src="/services/app-dev.jpg"
        alt="App Development Design Mockup"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}
