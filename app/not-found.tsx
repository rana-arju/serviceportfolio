'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Bot, Zap, Search } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Zap },
  { label: 'About Us', href: '/about', icon: Bot },
  { label: 'Contact', href: '/contact', icon: Search },
];

function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 42;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const wave = Math.sin(dist / 55 - t * 1.8) * 0.5 + 0.5;
          const alpha = wave * 0.22 + 0.04;
          const radius = wave * 1.2 + 0.6;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${alpha})`;
          ctx.fill();
        }
      }
      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-hidden">

      {/* Animated dot grid */}
      <div className="absolute inset-0 z-0">
        <GridCanvas />
      </div>

      {/* Glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/8 dark:bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/6 rounded-full blur-[80px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-slate-200 dark:border-white/8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="relative w-32 h-8 flex-shrink-0">
            <Image
              src="/reply-tentra-logo.webp"
              alt="ReplyTentra"
              fill
              unoptimized
              className="object-contain brightness-0 dark:brightness-0 dark:invert"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all duration-200"
          >
            <Home className="w-3.5 h-3.5" />
            Go Home
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto w-full">

          {/* Glowing 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-4 select-none"
            aria-hidden="true"
          >
            <span
              className="absolute inset-0 text-[clamp(110px,20vw,220px)] font-black leading-none tracking-tighter text-indigo-400/20 dark:text-indigo-400/12 blur-md"
              style={{ transform: 'translate(-4px, 4px)' }}
            >
              404
            </span>
            <span
              className="absolute inset-0 text-[clamp(110px,20vw,220px)] font-black leading-none tracking-tighter text-purple-400/15 dark:text-purple-400/10 blur-md"
              style={{ transform: 'translate(4px, -3px)' }}
            >
              404
            </span>
            <motion.span
              animate={{
                textShadow: [
                  '0 0 60px rgba(99,102,241,0.35)',
                  '0 0 100px rgba(99,102,241,0.6)',
                  '0 0 60px rgba(99,102,241,0.35)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative block text-[clamp(110px,20vw,220px)] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-indigo-400 to-purple-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400"
            >
              404
            </motion.span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Page Not Found
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Looks like this page{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              got automated away.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track — our AI agents are standing by.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all duration-200 hover:scale-105"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.55 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Or explore these pages
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {QUICK_LINKS.map(({ label, href, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62 + i * 0.07, duration: 0.38 }}
                >
                  <Link
                    href={href}
                    className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-white/3 border border-slate-200 dark:border-white/8 hover:border-indigo-400/40 dark:hover:border-indigo-500/40 hover:bg-indigo-50/60 dark:hover:bg-indigo-500/8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/15 dark:border-indigo-500/25 flex items-center justify-center text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="relative z-10 border-t border-slate-200 dark:border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500">
          <span>© {new Date().getFullYear()} ReplyTentra. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
