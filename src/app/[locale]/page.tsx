import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import AnnouncementTeaser from '@/components/AnnouncementTeaser';
import Features from '@/components/Features';
import StatsCounter from '@/components/StatsCounter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import ContactFooter from '@/components/ContactFooter';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const hero = await getTranslations({ locale, namespace: 'hero' });

  const title =
    locale === 'tr'
      ? 'Kenan Evren Sultan Taksi | 7/24 Hızlı ve Güvenilir Ulaşım'
      : 'Kenan Evren Sultan Taxi | 24/7 Fast and Reliable Transportation';
  const description = hero('subtitle');
  const path = `/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        tr: '/tr',
        en: '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      images: [
        {
          url: '/images/hero.webp',
          width: 1200,
          height: 630,
          alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi ana sayfa görseli' : 'Kenan Evren Sultan Taxi homepage visual',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero.webp'],
    },
  };
}

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const faq = await getTranslations({ locale, namespace: 'faq' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kenan Evren Sultan Taksi',
    image: 'https://sultan-taksi.vercel.app/images/hero.webp',
    '@id': 'https://sultan-taksi.vercel.app',
    url: 'https://sultan-taksi.vercel.app',
    telephone: '+905302227795',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Reşatbey, 01119 Çukurova/Adana',
      addressLocality: 'Adana',
      postalCode: '01119',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.99596464522967,
      longitude: 35.31295965406494,
    },
    areaServed: 'Kenan Evren çevresi (yaklaşık 2 km hizmet alanı)',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '22',
    },
    sameAs: ['https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana'],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [1, 2, 3, 4].map((index) => ({
      '@type': 'Question',
      name: faq(`q${index}`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq(`a${index}`),
      },
    })),
  };

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <AnnouncementTeaser />
      <Features />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <MapSection />
      <ContactFooter />
    </main>
  );
}
