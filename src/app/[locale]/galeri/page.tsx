import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import GalleryExperience from '@/components/GalleryExperience';

type Props = {
  params: Promise<{ locale: string }>;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sultantaksi.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'galleryPage' });

  return {
    title: locale === 'tr' ? 'Galeri | Kenan Evren Sultan Taksi' : 'Gallery | Kenan Evren Sultan Taxi',
    description: t('intro'),
    category: 'LocalBusiness',
    alternates: {
      canonical: `${SITE_URL}/${locale}/galeri`,
      languages: {
        tr: `${SITE_URL}/tr/galeri`,
        en: `${SITE_URL}/en/galeri`,
      },
    },
    openGraph: {
      title: locale === 'tr' ? 'Galeri | Kenan Evren Sultan Taksi' : 'Gallery | Kenan Evren Sultan Taxi',
      description: t('intro'),
      siteName: 'Kenan Evren Sultan Taksi',
      url: `${SITE_URL}/${locale}/galeri`,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp`,
          width: 1200,
          height: 900,
          alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi galeri görseli' : 'Kenan Evren Sultan Taxi gallery image',
        },
      ],
    },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'galleryPage' });

  const exteriorShots = [
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının Adana Kenan Evren çevresinde ön açıdan görünümü' : 'Front-angle view of a Kenan Evren Sultan Taxi vehicle in the Kenan Evren area of Adana',
      caption: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının temiz dış görünümünü ve ilk bakışta güven veren duruşunu gösteren yakın açı.' : 'A close angle showing the clean exterior of the Kenan Evren Sultan Taxi vehicle and its reassuring first impression.',
    },
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-02.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının yandan görünümü ve çevre ilişkisi' : 'Side view of a Kenan Evren Sultan Taxi vehicle with its surrounding street context',
      caption: locale === 'tr' ? 'Aracın günlük kullanım içindeki duruşunu ve yakın hizmet alanındaki görünürlüğünü gösteren daha dengeli bir kare.' : 'A more balanced frame showing the vehicle in everyday use and how visible it is within the nearby service area.',
    },
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-03.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının yakın sokak içinde görünümü' : 'Kenan Evren Sultan Taxi vehicle in a nearby street setting',
      caption: locale === 'tr' ? 'Yakın sokak içinde kolay fark edilen, ulaşılabilir ve görünür bir taksi hizmeti hissi veren açık kadraj.' : 'An open frame that shows the taxi as visible, easy to notice, and accessible within the nearby streets.',
    },
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-04.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının dış görünümü ve bölge içindeki konumu' : 'Exterior view of a Kenan Evren Sultan Taxi vehicle within the local area',
      caption: locale === 'tr' ? 'Aracın formunu, temizliğini ve bulunduğu bölgede ne kadar görünür olduğunu destekleyen dış çekim.' : 'An exterior frame that reinforces the vehicle shape, cleanliness, and how visible it is in the local area.',
    },
  ];

  const interiorShots = [
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-arac-ici-01.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi araç içi ön koltuk ve konsol düzeni' : 'Interior front-seat and dashboard layout of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Ön koltuk düzenini, konsol yapısını ve araç içindeki temiz kullanım hissini gösteren iç mekân karesi.' : 'An interior frame showing the front-seat layout, dashboard structure, and the sense of a clean cabin.',
    },
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-arac-ici-02.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi araç içi yolcu alanı ve kabin görünümü' : 'Passenger-area and cabin view inside a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Yolcu açısından bakıldığında kabin derinliğini ve araç içi ferahlığı gösteren ikinci iç çekim.' : 'A second interior frame showing cabin depth and the feeling of space from the passenger perspective.',
    },
  ];

  const wideShots = [
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının hizmet verdiği çevrede uzak görünümü' : 'A wider environment shot of a Kenan Evren Sultan Taxi vehicle in the area it serves',
      caption: locale === 'tr' ? 'Durağın bulunduğu çevrede aracın nerede konumlandığını daha net gösteren geniş kadraj.' : 'A wider frame showing more clearly where the taxi sits within the surrounding area.',
    },
    {
      src: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-02.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının uzak sokak ve çevre görünümü' : 'A distant street and surrounding-area view featuring a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Kenan Evren çevresinde hizmet veren taksinin bölge içinde doğal ve görünür biçimde yer aldığı en uzak çekim.' : 'The widest frame, showing the taxi naturally and visibly within the Kenan Evren area it serves.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: locale === 'tr' ? 'Kenan Evren Sultan Taksi Galeri' : 'Kenan Evren Sultan Taxi Gallery',
    description: t('intro'),
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Kenan Evren Sultan Taksi',
      image: `${SITE_URL}/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Çukurova',
        addressRegion: 'Adana',
        addressCountry: 'TR'
      }
    },
    image: [...exteriorShots, ...interiorShots, ...wideShots].map(shot => ({
      '@type': 'ImageObject',
      url: `${SITE_URL}${shot.src}`,
      caption: shot.caption,
      name: shot.alt,
      contentLocation: {
        '@type': 'Place',
        name: 'Kenan Evren, Adana'
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <GalleryExperience
        locale={locale}
        kicker={t('kicker')}
        title={t('title')}
        intro={t('intro')}
        exteriorTitle={t('sequenceTitle')}
        exteriorIntro={t('sequenceIntro')}
        exteriorShots={exteriorShots}
        interiorBadge={t('interiorBadge')}
        interiorTitle={t('interiorTitle')}
        interiorIntro={t('interiorIntro')}
        interiorShots={interiorShots}
        finalTitle={t('finalTitle')}
        finalIntro={t('finalIntro')}
        wideShots={wideShots}
      />
    </>
  );
}
