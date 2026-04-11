import { MetadataRoute } from 'next';
import { guides } from '@/data/guides';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = ['tr', 'en'] as const;
  const localizedPaths = ['', '/galeri', '/rehberler', '/hakkimizda', '/duyurular', '/kvkk', '/cerez-politikasi'];
  const guidePaths = guides.map((guide) => `/rehberler/${guide.slug}`);

  return locales.flatMap((locale) =>
    [...localizedPaths, ...guidePaths].map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : path.startsWith('/rehberler/') ? 0.7 : 0.6,
    }))
  );
}
