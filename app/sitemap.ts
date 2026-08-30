import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://replytentra.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Core static pages
  const routes = [
    { path: '',              priority: 1.0,  changeFreq: 'weekly'  as const },
    { path: '/about',        priority: 0.85, changeFreq: 'monthly' as const },
    { path: '/services',     priority: 0.95, changeFreq: 'weekly'  as const },
    { path: '/work',         priority: 0.90, changeFreq: 'weekly'  as const },
    { path: '/team',         priority: 0.75, changeFreq: 'monthly' as const },
    { path: '/contact',      priority: 0.80, changeFreq: 'monthly' as const },
    { path: '/book-a-meeting', priority: 0.90, changeFreq: 'weekly' as const },
  ].map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));

  return routes;
}
