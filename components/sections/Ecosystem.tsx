'use client';
import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'framer-motion';

// Inline SVGs for brand logos
const N8nIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF6D5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" fill="#FF6D5A" />
    <circle cx="5" cy="12" r="2.5" />
    <circle cx="19" cy="12" r="2.5" />
    <line x1="7.5" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="16.5" y2="12" />
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF4F00" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" className="opacity-20" fill="#FF4F00" stroke="none" />
    <line x1="12" y1="7" x2="12" y2="17" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    <line x1="15.5" y1="8.5" x2="8.5" y2="15.5" />
  </svg>
);

const GoHighLevelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#2A5CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v2L14 12v7l-4 3v-10L3 5V3z" />
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5-1.2-2.5-3-2.5-5 0-3.3 2.7-6 6-6h.5M19.5 7.5c1.5 1.2 2.5 3 2.5 5 0 3.3-2.7 6-6 6h-.5" />
    <path d="M12 2v20M2 12h20M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </svg>
);

const AnthropicIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2L2 22h4.5l2.1-4.7h6.8l2.1 4.7H22L12 2zm1.2 12.3H10.8l1.2-2.8 1.2 2.8z" fill="#E0B88F" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2a1 1 0 0 0-1 1 9 9 0 0 1-9 9 1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0 9 9 0 0 1 9-9 1 1 0 0 0 0-2 9 9 0 0 1-9-9 1 1 0 0 0-1-1zm6 1a1 1 0 0 0-1 1 5 5 0 0 1-5 5 1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 5 5 0 0 1 5-5 1 1 0 0 0 0-2 5 5 0 0 1-5-5 1 1 0 0 0-1-1z" fill="#1A73E8" />
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5l-4.5-5.8v5.8H10V8.2h2l4.5 5.8V8.2h2v9.3h-2z" fill="#000000" className="dark:fill-white" />
  </svg>
);

const NodejsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2L4.5 6.3v8.6L12 19.3l7.5-4.4V6.3L12 2zm1.5 12.3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V9.7h3v4.6z" fill="#339933" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <rect width="24" height="24" fill="#3178C6" rx="4" />
    <text x="5" y="17" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">TS</text>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4169E1">
    <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm4.4 7.2c-.3 1-.9 1.7-1.8 2a3.8 3.8 0 0 1 2.2 3.6c0 2.5-2.2 4-5.3 4H7.5V6.7h4.1c3 0 5 1.4 5 3.5a3 3 0 0 1-.2 1z" />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C11.5 4 9 9.5 9 12.5c0 2.2 1.5 4.5 3 6.5 1.5-2 3-4.3 3-6.5C15 9.5 12.5 4 12 2z" fill="#47A248" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M2 10.5V13h2v-2.5H2zm3 0V13h2v-2.5H5zm3 0V13h2v-2.5H8zm3 0V13h2v-2.5h-2zm3 0V13h2v-2.5h-2zm3-3.5V9.5h2V7h-2zm-3 0V9.5h2V7h-2zm-3 0V9.5h2V7H8zm15 3.5c-.5-1-1.5-1.5-2.5-1.5h-1v5.5c1 .5 2 0 2.5-1 1-1.5 1-2.5 1-3z" fill="#2496ED" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14c3 3 9 5 16 0" />
    <path d="M18 10l2 4-4 2" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M12 2C9 2 7 3.5 7 5.5v2.5h5V9h-6C4.5 9 3 10.5 3 12.5S4.5 16 6.5 16H8v-2c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V5.5C18 3.5 16 2 12 2z" fill="#3776AB" />
    <path d="M12 22c3 0 5-1.5 5-3.5v-2.5h-5V15h6c1.5 0 3-1.5 3-3.5S19.5 8 17.5 8H16v2c0 1.5-1 2.5-2.5 2.5h-5C7 12.5 6 13.5 6 15v3.5C6 20.5 8 22 12 22z" fill="#FFE054" />
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3ECF8E">
    <path d="M19 11h-6l5-10H5v12h6l-5 10" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#38BDF8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M8 6a3 3 0 1 1 6 0v2H8V6z" fill="#F24E1E" />
    <path d="M8 12a3 3 0 0 1 6 0v2H8v-2z" fill="#A259FF" />
    <path d="M8 18a3 3 0 1 1 3-3v3H8z" fill="#0ACF83" />
    <path d="M14 12a3 3 0 1 1 6 0v2h-6v-2z" fill="#1ABC9C" />
    <path d="M14 6a3 3 0 1 1 6 0v2h-6V6z" fill="#FF7262" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717" className="dark:fill-white" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#61DAFB" strokeWidth="2">
    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const KubernetesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#326CE5">
    <path d="M12 1.6l9 5.2v10.4l-9 5.2-9-5.2V6.8zm0 3.3L5.4 8.7v6.6L12 19.1l6.6-3.8V8.7z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFCA28">
    <path d="M3.89 15.55L11 2.45c.34-.63 1.25-.63 1.59 0l1.83 3.44-5.26 9.66zM20.11 15.55L13.59 4.3c-.27-.47-.94-.47-1.21 0L3.89 15.55l8.11 4.54a2.2 2.2 0 0 0 2.2 0z" fill="#FFCA28" />
    <path d="M12 20.09c.34 0 .67-.09.96-.27l7.15-4.27-8.11-13.1c-.27-.47-.94-.47-1.21 0z" fill="#FFA000" />
  </svg>
);

const LOGO_MAP: Record<string, React.ReactNode> = {
  'n8n': <N8nIcon />,
  'Zapier': <ZapierIcon />,
  'GoHighLevel': <GoHighLevelIcon />,
  'OpenAI': <OpenAIIcon />,
  'Anthropic': <AnthropicIcon />,
  'Gemini': <GeminiIcon />,
  'Next.js': <NextjsIcon />,
  'Node.js': <NodejsIcon />,
  'TypeScript': <TypeScriptIcon />,
  'PostgreSQL': <PostgreSQLIcon />,
  'MongoDB': <MongoDBIcon />,
  'Docker': <DockerIcon />,
  'AWS': <AWSIcon />,
  'Python': <PythonIcon />,
  'Supabase': <SupabaseIcon />,
  'Tailwind CSS': <TailwindIcon />,
  'Figma': <FigmaIcon />,
  'GitHub': <GitHubIcon />,
  'React': <ReactIcon />,
  'Kubernetes': <KubernetesIcon />,
  'Firebase': <FirebaseIcon />,
};

const PLATFORMS = [
  { name: 'n8n', category: 'Workflow Engine' },
  { name: 'Zapier', category: 'Connector API' },
  { name: 'GoHighLevel', category: 'CRM & Pipeline' },
  { name: 'OpenAI', category: 'Large Language Models' },
  { name: 'Anthropic', category: 'AI Reasoning' },
  { name: 'Gemini', category: 'Multimodal AI' },
  { name: 'Next.js', category: 'Frontend Platform' },
  { name: 'Node.js', category: 'Systems Layer' },
  { name: 'TypeScript', category: 'Type Safety' },
  { name: 'PostgreSQL', category: 'Structured Database' },
  { name: 'MongoDB', category: 'Document Storage' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'AWS', category: 'Cloud Infrastructure' },
  { name: 'Python', category: 'Backend & AI' },
  { name: 'Supabase', category: 'Backend Database' },
  { name: 'Tailwind CSS', category: 'UI Styling' },
  { name: 'Figma', category: 'UI/UX Design' },
  { name: 'GitHub', category: 'Version Control' },
  { name: 'React', category: 'Frontend Library' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Firebase', category: 'Backend Platform' },
];

export function Ecosystem() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-slate-50 dark:to-slate-950/40 border-y border-border/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-6">
            <SectionHeader
              badge="Integrations Hub"
              title="Trusted Technology Ecosystem"
              description="We connect custom SaaS development, pipelines, and AI reasoning models together into a singular, highly optimized business engine."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {PLATFORMS.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-3.5"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-border/50 shadow-inner">
                    {LOGO_MAP[platform.name] || (
                      <span className="text-xs font-bold text-muted-foreground">
                        {platform.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-foreground leading-tight truncate">
                      {platform.name}
                    </span>
                    <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mt-1 truncate">
                      {platform.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
