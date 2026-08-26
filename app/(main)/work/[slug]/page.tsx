'use client';
import React, { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { DEFAULT_WORK_PROJECTS } from '../ClientWorkPage';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Cpu, HelpCircle, Lightbulb, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const local = localStorage.getItem('replytentra_recent_works');
    let loadedProject = null;
    if (local) {
      try {
        const parsed = JSON.parse(local);
        const matched = parsed.find((p: any) => p.slug === slug);
        if (matched) {
          loadedProject = {
            slug: matched.slug,
            title: matched.title,
            industry: matched.industry,
            challenge: matched.challenge,
            solution: matched.solution,
            result: matched.result,
            description: matched.description,
            techs: matched.techs || [],
            media: {
              type: matched.mediaType || 'image',
              url: matched.mediaUrl || matched.thumbnail,
              thumbnail: matched.thumbnail,
            },
            timeline: matched.timeline || [],
            liveUrl: matched.liveUrl || '',
          };
        }
      } catch (e) {
        console.error('Error finding project detail', e);
      }
    }

    if (!loadedProject) {
      const matchDefault = DEFAULT_WORK_PROJECTS.find((p) => p.slug === slug);
      if (matchDefault) {
        loadedProject = {
          ...matchDefault,
          liveUrl: (matchDefault as any).liveUrl || '',
        };
      }
    }
    setProject(loadedProject || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="relative py-24 bg-background min-h-screen flex items-center justify-center">
        <div className="text-slate-400 text-sm animate-pulse">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  // Parse mediaUrls from comma separated image list if type is image
  const imageUrls = project.media.type === 'image'
    ? project.media.url.split(',').map((url: string) => url.trim()).filter(Boolean)
    : [];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Back Link & optional Live Url */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Work
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-indigo-500 font-bold text-xs shadow-md shadow-accent/20 transition-all duration-200"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            {project.industry}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hero Media Container (Video iframe OR Slider Gallery) */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-border bg-card shadow-2xl relative group">
          {project.media.type === 'youtube' ? (
            <iframe
              src={`${project.media.url}?autoplay=0&rel=0`}
              title={project.title}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : imageUrls.length > 1 ? (
            <div className="w-full h-full relative overflow-hidden bg-slate-950">
              {/* Carousel Slides */}
              <img
                src={imageUrls[currentSlide]}
                alt={`${project.title} - Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
              
              {/* Overlay styling elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent pointer-events-none" />

              {/* Navigation arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Counter dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-900/80 border border-slate-800/85 px-3.5 py-2 rounded-full shadow-lg">
                {imageUrls.map((_: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'bg-accent w-4' : 'bg-slate-500 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <img
              src={project.media.url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">

          {/* Detailed Breakdown */}
          <div className="lg:col-span-2 space-y-8">

            {/* The Challenge */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-800 transition-colors duration-200">
              <div className="flex items-center gap-3 text-red-500">
                <HelpCircle className="w-6 h-6" />
                <h3 className="text-lg font-bold text-foreground">The Challenge</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Our Solution */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-800 transition-colors duration-200">
              <div className="flex items-center gap-3 text-accent">
                <Lightbulb className="w-6 h-6" />
                <h3 className="text-lg font-bold text-foreground">Our Solution</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* The Result */}
            <div className="p-8 rounded-2xl border border-emerald-500/20 dark:border-emerald-500/10 bg-emerald-50/5 dark:bg-emerald-950/5 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-lg font-bold">Key Project Outcomes</h3>
              </div>
              <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 leading-relaxed">
                {project.result}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-accent">
                <Cpu className="w-6 h-6" />
                <h3 className="text-lg font-bold text-foreground">Technologies Implemented</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techs.map((tech: string) => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-muted text-xs font-bold text-muted-foreground hover:bg-accent/15 hover:text-accent transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Timeline Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm space-y-6 sticky top-8">
              <h3 className="text-xl font-extrabold text-foreground tracking-tight border-b border-border pb-4">
                Project Journey
              </h3>

              <div className="relative border-l border-border ml-2 pl-6 space-y-8">
                {project.timeline?.map((step: any, idx: number) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                        {step.phase}
                      </span>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                        {step.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Strategy Call Link */}
        <div className="p-8 sm:p-12 rounded-3xl border border-border bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-sm text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Need a Similar Solution Built?</h3>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our systems engineers can design custom integrations mapping your specific business requirements. Let's configure a plan that fits.
          </p>
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
          >
            Schedule Strategy Session
          </Link>
        </div>

      </div>
    </div>
  );
}
