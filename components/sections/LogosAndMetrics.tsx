import React, { useEffect, useRef, useState } from 'react';
import { User, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { useInView } from 'framer-motion';

function AnimatedCounter({ from = 0, to, prefix = '', suffix = '', duration = 2 }: { from?: number; to: number; prefix?: string; suffix?: string; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-50px 0px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && nodeRef.current) {
      setHasAnimated(true);
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeProgress * (to - from) + from);
        if (nodeRef.current) {
          nodeRef.current.textContent = prefix + current + suffix;
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          if (nodeRef.current) nodeRef.current.textContent = prefix + to + suffix;
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, hasAnimated, from, to, duration, prefix, suffix]);

  return <span ref={nodeRef} className="tabular-nums">{prefix}{from}{suffix}</span>;
}

export function LogosAndMetrics() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 z-20 pb-20">
      
      {/* Logos Container */}
      <div className="bg-white dark:bg-slate-900 rounded-t-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Text */}
        <div className="md:w-1/4 w-full text-center md:text-left mb-2 md:mb-0">
          <p className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-tight">
            We work with the <br className="hidden md:block" />
            best <span className="text-indigo-500">tools</span> and <br className="hidden md:block" />
            <span className="text-indigo-500">technologies</span>
          </p>
        </div>

        {/* Logos (Simulated with text/simple shapes for now to match the aesthetic) */}
        <div className="md:w-3/4 flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70">
          
          {/* n8n */}
          <div className="flex items-center gap-1 font-bold text-2xl text-rose-500 tracking-tighter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            n8n
          </div>

          {/* Zapier */}
          <div className="flex items-center text-2xl font-black text-slate-800 dark:text-white tracking-tighter">
            <span className="text-orange-500 mr-0.5">_</span>zapier
          </div>

          {/* HighLevel */}
          <div className="flex items-center gap-1 text-xl font-bold text-slate-800 dark:text-white">
            <div className="flex -space-x-1">
              <div className="w-2 h-6 bg-blue-500 rounded-sm translate-y-1" />
              <div className="w-2 h-8 bg-green-500 rounded-sm" />
            </div>
            HighLevel
          </div>

          {/* OpenAI */}
          <div className="flex items-center gap-1.5 text-xl font-semibold text-slate-800 dark:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            OpenAI
          </div>

          {/* Next.js */}
          <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
            NEXT<span className="font-light">.js</span>
          </div>

          {/* AWS */}
          <div className="text-2xl font-bold text-slate-800 dark:text-white flex flex-col items-center">
            aws
            <svg width="30" height="10" viewBox="0 0 30 10" className="text-orange-500 -mt-1"><path d="M0,5 Q15,15 30,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
        </div>
      </div>

      {/* Metrics Container */}
      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-b-3xl border-x border-b border-slate-100 dark:border-slate-800 p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Metric 1 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white"><AnimatedCounter to={150} suffix="+" /></div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">Projects Delivered</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">Successful projects<br/>completed worldwide</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-400 flex items-center justify-center text-white shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white"><AnimatedCounter to={98} suffix="%" /></div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">Client Satisfaction</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">Clients are happy with our<br/>solutions and support</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white"><AnimatedCounter to={50} suffix="K+" /></div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">Hours Automated</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">We automate repetitive tasks<br/>so you can focus on growth</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center text-white shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white"><AnimatedCounter to={10} prefix="3-" suffix="x" /></div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">Business Growth</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">Our systems help businesses<br/>scale faster and smarter</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
