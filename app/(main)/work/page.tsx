import React from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ProjectCard, Project } from '@/components/shared/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Featured Work & Case Studies | ReplyTentra',
  description: 'Read detailed breakdowns of custom AI automations and SaaS platform developments shipped by ReplyTentra.',
  keywords: ['ReplyTentra Work', 'AI automation projects', 'SaaS project details'],
};

import { DEFAULT_WORK_PROJECTS } from './ClientWorkPage';

import { ClientWorkPage } from './ClientWorkPage';

export default function WorkPage() {
  return <ClientWorkPage defaultProjects={DEFAULT_WORK_PROJECTS} />;
}
