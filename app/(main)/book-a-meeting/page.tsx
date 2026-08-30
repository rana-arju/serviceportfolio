import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { ClientBookMeetingPage } from './ClientBookMeetingPage';

export const metadata = constructMetadata({
  title: 'Book a Free Strategy Call | ReplyTentra — AI Automation & CRM Consultation',
  description:
    'Schedule a free 15-minute discovery or 30-minute strategy session with ReplyTentra engineers. Talk about your automation challenges, CRM goals, or custom software requirements.',
  canonical: '/book-a-meeting',
  keywords: [
    'Book Strategy Call ReplyTentra',
    'Free Automation Consultation',
    'AI Automation Discovery Call',
    'GoHighLevel Consultation',
    'n8n Strategy Session',
    'CRM Consultation Call',
    'Hire Automation Agency',
  ],
});

export default function BookMeetingPage() {
  return <ClientBookMeetingPage />;
}

