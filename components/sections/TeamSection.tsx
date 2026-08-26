'use client';
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const TEAM_MEMBERS = [
  {
    name: 'Mohammad Rana Arju',
    role: 'Founder & Head of Systems',
    bio: 'Visionary full stack engineer and automation expert. Specializes in building high-performance Next.js architectures and intelligent business process pipelines.',
    image: 'https://replytentra.com/mohammad-rana-arju.webp',
    linkedin: 'https://www.linkedin.com/in/rana-arju/',
    github: 'https://github.com/rana-arju',
  },
  {
    name: 'Mostafizur Rahman Emon',
    role: 'Co-Founder & Lead Systems Architect',
    bio: 'Expert in cloud infrastructure, high-throughput microservices, and secure API gateways. Leads server automation pipelines and backend scale design.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];

export function TeamSection({ 
  showHeading = true, 
  className = "py-20 sm:py-28 bg-gradient-to-b from-background to-slate-50 dark:to-slate-950/40 border-y border-border/80" 
}: { 
  showHeading?: boolean; 
  className?: string; 
}) {
  return (
    <section className={`${className} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero / Section Header */}
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <SectionHeader
              badge="Our Engineers"
              title="Meet the Team Behind the Systems"
              description="We are a group of developers, automation experts, and CRM builders focused on shipping high-performance code."
              centered
            />
          </div>
        )}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Section with Hover Effects */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={400}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Dark Overlay with Socials on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-4">
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-200"
                          title="LinkedIn Profile"
                        >
                          <LinkedInIcon className="w-5 h-5" />
                        </a>
                      )}
                      {m.github && (
                        <a
                          href={m.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-200"
                          title="GitHub Profile"
                        >
                          <GitHubIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-none flex items-center gap-1">
                      {m.name}
                      {m.name === 'Mohammad Rana Arju' && (
                        <a href="https://replytentra.com/founder" target="_blank" rel="noopener noreferrer" className="inline-flex text-accent hover:text-accent/80 ml-1">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </h3>
                    <span className="text-xs font-semibold text-accent block mt-1.5">{m.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </div>

              {/* Action Button at the Bottom */}
              <div className="px-6 pb-6 pt-3 mt-auto border-t border-border/50">
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-accent transition-colors group/link"
                >
                  <span>Connect Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
