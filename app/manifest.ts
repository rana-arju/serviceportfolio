import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ReplyTentra — AI, Automation & Software Engineering Agency',
    short_name: 'ReplyTentra',
    description:
      'ReplyTentra engineers intelligent digital systems — custom AI automations, n8n workflows, GoHighLevel CRM setups, and bespoke SaaS applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
