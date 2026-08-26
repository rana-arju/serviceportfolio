'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Project {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  description: string;
  techs: string[];
  media: {
    type: 'image' | 'youtube';
    url: string;
    thumbnail: string;
  };
  timeline: {
    phase: string;
    title: string;
    description: string;
  }[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
    >
      {/* Media Preview Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950/20 border-b border-border">
        <img
          src={project.media.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550 ease-out"
        />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300" />
        {project.media.type === 'youtube' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-accent/90 text-accent-foreground flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
              {project.industry}
            </span>
            <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-6 mt-6 border-t border-border flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techs.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-muted text-[10px] font-bold text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-foreground transition-colors group/link self-start"
          >
            Read Case Study <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
