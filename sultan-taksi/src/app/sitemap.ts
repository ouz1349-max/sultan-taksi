import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sultantaksiadana.com';
  const locales = ['tr', 'en'];

  return locales.map((locale) => ({
    url: `${baseUrl}${locale === 'tr' ? '' : `/${locale}`}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));
}
