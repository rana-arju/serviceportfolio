'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '../shared/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Services', href: '/services', desc: 'Expert AI workflows, CRM, and SaaS' },
  { name: 'Work', href: '/work', desc: 'Check our premium client projects' },
  { name: 'About', href: '/about', desc: 'Who we are and our mission' },
  // { name: 'Team', href: '/team', desc: 'Meet our automation engineers' },
  { name: 'Contact', href: '/contact', desc: 'Get in touch for a custom plan' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Lock both html and body to handle overflow-x: clip on html element
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: 40, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 150,
        damping: 18,
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-0'
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-accent relative py-1 ${
                  isActive ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & ThemeToggle buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold text-sm transition-all duration-200"
          >
            Book a Meeting
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-2 text-foreground focus:outline-none hover:text-accent transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Panel Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 180 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] sm:w-[350px] bg-background/95 dark:bg-slate-950/95 backdrop-blur-md border-l border-border p-6 shadow-2xl md:hidden flex flex-col"
            >
              {/* Header inside Drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <Logo />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Navigation Menu"
                  className="p-2 text-foreground hover:text-accent transition-colors focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Staggered Navigation Links */}
              <motion.nav 
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex-grow py-8 space-y-6 flex flex-col justify-start"
              >
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group block py-2 rounded-lg transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-lg font-bold transition-colors ${
                            isActive ? 'text-accent' : 'text-foreground group-hover:text-accent'
                          }`}>
                            {link.name}
                          </span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-accent transition-all duration-200" />
                        </div>
                        {/* Sub-text under links to improve quality */}
                        <p className="text-xs text-muted-foreground mt-0.5 group-hover:text-accent/80 transition-colors">
                          {link.desc}
                        </p>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Bottom Meeting CTA in Drawer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-border mt-auto"
              >
                <Link
                  href="/book-a-meeting"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
                >
                  Book a Meeting <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
