import { Metadata } from 'next';

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://replytentra.com';

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  authors?: string[];
}

export function constructMetadata({
  title = 'ReplyTentra — Premium AI, Automation & Software Engineering Agency',
  description = 'ReplyTentra engineers intelligent digital systems — custom AI automations, n8n workflows, GoHighLevel CRM setups, and bespoke SaaS applications that help businesses operate, scale, and grow.',
  image = '/og-image.png',
  noIndex = false,
  canonical,
  keywords = [
    'AI Automation Agency',
    'n8n Workflow Automation',
    'GoHighLevel CRM Setup',
    'Custom SaaS Development',
    'Business Process Automation',
    'ReplyTentra',
    'Zapier Automation',
    'CRM Integration',
    'AI Chatbot Development',
    'Software Engineering Agency',
    'Workflow Automation Consultant',
    'Digital Systems Engineering',
  ],
  type = 'website',
  publishedTime,
  authors,
}: ConstructMetadataProps = {}): Metadata {
  return {
    title,
    description,
    applicationName: 'ReplyTentra',
    appleWebApp: {
      title: 'ReplyTentra',
      statusBarStyle: 'default',
      capable: true,
    },
    keywords: keywords.join(', '),
    authors: authors
      ? authors.map((a) => ({ name: a }))
      : [{ name: 'Rana Arju' }, { name: 'ReplyTentra Team' }],
    metadataBase: new URL(defaultUrl),
    alternates: {
      canonical: canonical || '/',
    },
    openGraph: {
      title,
      description,
      url: canonical || '/',
      siteName: 'ReplyTentra',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@replytentra',
      site: '@replytentra',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        { url: '/icon.png',    sizes: 'any',   type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple:    '/icon.png',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
