import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { ClientContactPage } from './ClientContactPage';

export const metadata = constructMetadata({
  title: 'Contact ReplyTentra | Hire AI Automation & Systems Engineering Experts',
  description:
    'Get in touch with the ReplyTentra engineering team. Tell us about your automation challenges, CRM integration needs, or custom SaaS goals — we respond within 24 hours.',
  canonical: '/contact',
  keywords: [
    'Contact ReplyTentra',
    'Hire Automation Engineers',
    'AI Automation Inquiry',
    'n8n Specialist Contact',
    'GoHighLevel Expert Hire',
    'CRM Automation Consultation',
    'Custom Software Quote',
  ],
});

export default function ContactPage() {
  return <ClientContactPage />;
}
