import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import StatsCounter from '@/components/StatsCounter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import ContactFooter from '@/components/ContactFooter';

export default async function IndexPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kenan Evren Sultan Taksi',
    image: 'https://sultantaksiadana.com/images/hero.png',
    '@id': 'https://sultantaksiadana.com',
    url: 'https://sultantaksiadana.com',
    telephone: '+905302227795',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Reşatbey, 01119 Çukurova/Adana',
      addressLocality: 'Adana',
      postalCode: '01119',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.99596464522967,
      longitude: 35.31295965406494
    },
    areaServed: [
      'Çukurova',
      'Seyhan',
      'Yüreğir',
      'Sarıçam'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '22'
    },
    sameAs: [
      'https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana'
    ]
  };

  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <MapSection />
      <ContactFooter />
    </main>
  );
}
