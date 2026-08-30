import React from 'react';

export type JsonLdType =
  | 'Organization'
  | 'ProfessionalService'
  | 'WebSite'
  | 'BreadcrumbList'
  | 'FAQPage'
  | 'Article'
  | 'Person'
  | 'Service'
  | 'ItemList'
  | 'LocalBusiness';

interface JsonLdProps {
  type: JsonLdType;
  data: Record<string, unknown>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Site-wide config ────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'ReplyTentra',
  url: 'https://replytentra.com',
  founder: {
    name: 'Rana Arju',
    jobTitle: 'Founder & CEO',
    url: 'https://www.linkedin.com/in/ranaarju',
  },
  logo: 'https://replytentra.com/reply-tentra-logo.webp',
  email: 'info@replytentra.com',
  description:
    'ReplyTentra engineers intelligent digital systems — custom AI automations, n8n workflows, GoHighLevel CRM setups, and bespoke SaaS applications.',
};

// ── Organization Schema ──────────────────────────────────────────────────────
export const getOrganizationSchema = () => ({
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.logo,
  description: siteConfig.description,
  email: siteConfig.email,
  founder: {
    '@type': 'Person',
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.jobTitle,
    url: siteConfig.founder.url,
  },
  sameAs: [
    'https://twitter.com/replytentra',
    'https://www.facebook.com/replytentra',
    'https://www.linkedin.com/company/replytentra',
    'https://github.com/replytentra',
  ],
});

// ── Professional Service Schema ──────────────────────────────────────────────
export const getProfessionalServiceSchema = () => ({
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: siteConfig.logo,
  email: siteConfig.email,
  areaServed: 'Worldwide',
  serviceType: [
    'AI Automation',
    'n8n Workflow Automation',
    'GoHighLevel CRM Setup',
    'Custom SaaS Development',
    'Business Process Automation',
    'CRM Integration',
    'AI Chatbot Development',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automation & Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Workflow Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GoHighLevel CRM Setup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom SaaS Development' } },
    ],
  },
});

// ── Website Schema (with Sitelinks Searchbox) ───────────────────────────────
export const getWebSiteSchema = () => ({
  name: siteConfig.name,
  alternateName: ['Reply Tentra', 'replytentra.com'],
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/work?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

// ── Site Navigation Schema ───────────────────────────────────────────────────
export const getSiteNavigationSchema = () => ({
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'SiteNavigationElement', position: 1, name: 'Home',          url: `${siteConfig.url}/` },
    { '@type': 'SiteNavigationElement', position: 2, name: 'About',         url: `${siteConfig.url}/about` },
    { '@type': 'SiteNavigationElement', position: 3, name: 'Services',      url: `${siteConfig.url}/services` },
    { '@type': 'SiteNavigationElement', position: 4, name: 'Our Work',      url: `${siteConfig.url}/work` },
    { '@type': 'SiteNavigationElement', position: 5, name: 'Team',          url: `${siteConfig.url}/team` },
    { '@type': 'SiteNavigationElement', position: 6, name: 'Contact',       url: `${siteConfig.url}/contact` },
    { '@type': 'SiteNavigationElement', position: 7, name: 'Book a Meeting',url: `${siteConfig.url}/book-a-meeting` },
  ],
});

// ── Breadcrumb helper ────────────────────────────────────────────────────────
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
