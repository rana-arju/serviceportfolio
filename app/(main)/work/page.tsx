import React from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ProjectCard, Project } from '@/components/shared/ProjectCard';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Our Work & Case Studies | ReplyTentra — AI Automation & SaaS Projects',
  description:
    'Explore real-world case studies of custom AI automations, n8n workflows, GoHighLevel CRM setups, and SaaS platforms shipped by ReplyTentra engineers.',
  canonical: '/work',
  keywords: [
    'ReplyTentra Case Studies',
    'AI Automation Projects Portfolio',
    'n8n Workflow Projects',
    'GoHighLevel Implementation',
    'SaaS Development Portfolio',
    'Custom Software Projects',
    'Automation Agency Portfolio',
  ],
});

import { DEFAULT_WORK_PROJECTS } from './ClientWorkPage';

import { ClientWorkPage } from './ClientWorkPage';

export default function WorkPage() {
  return <ClientWorkPage defaultProjects={DEFAULT_WORK_PROJECTS} />;
}
