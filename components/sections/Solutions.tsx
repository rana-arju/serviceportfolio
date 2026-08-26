'use client';
import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { WORK_PROJECTS } from '@/app/(main)/work/page';

export function Solutions() {
  // Showcase the first 3 featured solutions on the landing page
  const featuredProjects = WORK_PROJECTS.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            badge="Featured Case Studies"
            title="Featured Solutions"
            description="Explore our implementation portfolio demonstrating custom backend pipelines and frontend systems."
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-foreground transition-colors group whitespace-nowrap"
          >
            View All Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

