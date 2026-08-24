'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Orbs - contained to prevent horizontal overflow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -30, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl"
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

