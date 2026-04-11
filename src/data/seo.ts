import type { GuideEntry } from '@/data/guides';

export const defaultOgImage = {
  url: '/images/hero.webp',
  width: 1200,
  height: 630,
};

export function buildGuideArticleJsonLd({
  siteUrl,
  locale,
  guide,
}: {
  siteUrl: string;
  locale: string;
  guide: GuideEntry;
}) {
  const content = locale === 'tr' ? guide.tr : guide.en;
  const articleUrl = `${siteUrl}/${locale}/rehberler/${guide.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: content.title,
    description: content.seoDescription,
    image: [`${siteUrl}${guide.ogImage ?? guide.heroImage}`],
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    articleSection: content.categoryLabel,
    keywords: guide.tags.join(', '),
    author: {
      '@type': 'Person',
      name: guide.author,
      description: content.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: locale === 'tr' ? 'Kenan Evren Sultan Taksi' : 'Kenan Evren Sultan Taxi',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
      },
    },
  };
}
