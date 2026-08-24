'use client';
import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '../ui/SectionHeader';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: `Honestly, I was skeptical at first — we'd tried other automation vendors and got burned. But ReplyTentra actually sat down, understood our ops, and built something that just... works. Our pipeline that used to take 3 hours now runs in under 90 seconds. I can't imagine going back.`,
    author: 'Sarah Jenkins',
    role: 'VP of Operations',
    company: 'NexusTech Global',
    avatar: '/testimonial-sarah.jpg',
    stars: 5,
  },
  {
    quote: `We needed a client portal that didn't look like it was built in 2015. The team delivered something genuinely impressive — fast, clean, and our clients actually compliment it now. Marcus from engineering said it was the best-structured codebase we'd ever received from an agency. High praise from him.`,
    author: 'Marcus Vance',
    role: 'Co-Founder',
    company: 'FinFlow Systems',
    avatar: '/testimonial-marcus.jpg',
    stars: 5,
  },
  {
    quote: `My support team was drowning. We were handling 400+ enquiries a week manually. ReplyTentra built voice and chat agents that now handle most of the first-touch responses — and honestly, customers don't even realize. My team is finally focused on the hard cases. Game changer.`,
    author: 'Elena Rostova',
    role: 'Director of CX',
    company: 'Veloce Logistics',
    avatar: '/testimonial-elena.jpg',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/20 border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Social Proof"
          title="Don't just take our word for it"
          description="Real feedback from the people who've worked with us — no marketing fluff, just honest experiences."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-indigo-500/20 dark:hover:border-indigo-500/25 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: stars + quote */}
              <div className="space-y-4">
                <StarRating count={t.stars} />

                {/* Quote marks — decorative */}
                <span
                  className="absolute top-5 right-6 text-6xl font-black text-indigo-500/8 dark:text-indigo-400/10 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="text-sm sm:text-[15px] text-foreground leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Bottom: avatar + name */}
              <div className="pt-6 mt-6 border-t border-border flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all duration-300">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-none">
                    {t.author}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.role},{' '}
                    <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                      {t.company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
