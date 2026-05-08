import { MetadataRoute } from 'next';
import { guides } from '@/data/guides';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = ['tr', 'en'] as const;
  const staticLastModified = new Date();
  const localizedPaths = ['', '/galeri', '/rehberler', '/hakkimizda', '/kvkk', '/cerez-politikasi'];
  const staticEntries = locales.flatMap((locale) =>
    localizedPaths.map((path) => {
      let changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly';
      if (path === '') changeFrequency = 'weekly';
      else if (path === '/kvkk' || path === '/cerez-politikasi') changeFrequency = 'yearly';

      return {
        url: `${baseUrl}/${locale}${path}`,
        lastModified: staticLastModified,
        changeFrequency,
        priority: path === '' ? 1 : path === '/rehberler' ? 0.8 : 0.6,
      };
    })
  );

  const guideEntries = locales.flatMap((locale) =>
    guides.map((guide) => ({
      url: `${baseUrl}/${locale}/rehberler/${guide.slug}`,
      lastModified: new Date(guide.updatedAt || guide.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...guideEntries];
}
