import React from 'react';
import type { Metadata } from 'next';
import { ClientContactPage } from './ClientContactPage';

export const metadata: Metadata = {
  title: 'Contact Our Automation Engineers | ReplyTentra',
  description: 'Reach out to the ReplyTentra systems engineering team. Share details about your current operations friction, CRM databases, or custom SaaS goals.',
  keywords: ['Contact ReplyTentra', 'Automation enquiry', 'Hire workflow engineers'],
};

export default function ContactPage() {
  return <ClientContactPage />;
}
