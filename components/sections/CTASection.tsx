'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-950/40 border-t border-border transition-colors duration-300 relative overflow-hidden">
      {/* Visual background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(79,70,229,0.06),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(56,189,248,0.08),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
          Get Started
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto text-foreground">
          Have a Complex Operational Idea? Let&apos;s Build the Systems Behind It.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Book a strategy call to review operational blockages and outline a custom integration map.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Book a Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
