'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Zap, Bot, Cpu, Database } from 'lucide-react';

// Real Brand SVG Icons
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const SERVICES = [
  { name: 'AI & Automation', href: '/services' },
  { name: 'n8n Workflows', href: '/services' },
  { name: 'Zapier Automation', href: '/services' },
  { name: 'GoHighLevel CRM', href: '/services' },
  { name: 'Custom SaaS Dev', href: '/services' },
];

const COMPANY = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Featured Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book a Meeting', href: '/book-a-meeting' },
];

const SOCIALS = [
  { icon: XIcon, label: 'X (Twitter)', href: 'https://x.com/replytentra' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/replytentra' },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/replytentra' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/replytentra' },
];

const STATS = [
  { icon: Bot, value: '50+', label: 'AI Agents Built' },
  { icon: Zap, value: '200+', label: 'Workflows Automated' },
  { icon: Cpu, value: '30+', label: 'SaaS Products' },
  { icon: Database, value: '99%', label: 'Client Retention' },
];

export function Footer() {
  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">

      {/* Top CTA Bar */}
      <div className="relative z-10 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-1">Ready to scale?</p>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Let&apos;s build something remarkable together.
              </h2>
            </div>
            <Link
              href="/book-a-meeting"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>


      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="relative w-36 h-9">
              <Image
                src="/reply-tentra-logo.webp"
                alt="ReplyTentra"
                fill
                unoptimized
                className="object-contain dark:brightness-0 dark:invert brightness-0"
                priority
              />
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              We engineer intelligent digital systems — AI agents, automation pipelines, CRM setups, and custom SaaS — built around real business outcomes.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-500/10 dark:bg-white/5 dark:hover:bg-indigo-500/20 border border-slate-200 hover:border-indigo-400/40 dark:border-white/10 dark:hover:border-indigo-500/40 flex items-center justify-center text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Contact Email */}
            <a
              href="mailto:info@replytentra.com"
              className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              info@replytentra.com
            </a>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-400/50 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-400/50 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Large Brand Watermark — light mode */}
      <div className="relative overflow-hidden select-none pointer-events-none dark:hidden" aria-hidden="true">
        <div
          className="text-center font-black text-[clamp(60px,18vw,200px)] leading-none tracking-tighter"
          style={{
            background: 'linear-gradient(to bottom, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.05) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ReplyTentra
        </div>
      </div>

      {/* Large Brand Watermark — dark mode */}
      <div className="relative overflow-hidden select-none pointer-events-none hidden dark:block" aria-hidden="true">
        <div
          className="text-center font-black text-[clamp(60px,18vw,200px)] leading-none tracking-tighter"
          style={{
            background: 'linear-gradient(to bottom, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ReplyTentra
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} ReplyTentra. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-slate-400 dark:text-slate-500">
              <Link href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
