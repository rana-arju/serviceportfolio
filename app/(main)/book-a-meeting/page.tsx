import React from 'react';
import type { Metadata } from 'next';
import { ClientBookMeetingPage } from './ClientBookMeetingPage';

export const metadata: Metadata = {
  title: 'Book a Strategy Call | ReplyTentra - CRM & AI Automation Consultation',
  description: 'Book your 15-minute discovery or 30-minute operations strategy call. Let our engineers build custom workflows that help scale your business operations.',
  keywords: ['Book a Call', 'Cal.com Booking', 'CRM Consultation', 'AI Automation strategy call'],
};

export default function BookMeetingPage() {
  return <ClientBookMeetingPage />;
}

