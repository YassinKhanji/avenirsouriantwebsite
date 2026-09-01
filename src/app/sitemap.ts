import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/data/courses';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avenirsouriant.com';
  const basePages = ['', 'programs', 'register'];

  const staticRoutes = basePages.map((page) => ({
    url: page === '' ? baseUrl : `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  const courseRoutes = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: slug === 'arabic-for-non-speakers' ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
