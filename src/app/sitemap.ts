import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sultan-taksi.vercel.app';
  const locales = ['tr', 'en'] as const;
  const localizedPaths = ['', '/galeri', '/hakkimizda', '/duyurular', '/kvkk', '/cerez-politikasi'];

  return locales.flatMap((locale) =>
    localizedPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.6,
    }))
  );
}
