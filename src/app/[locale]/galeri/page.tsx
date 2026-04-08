import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import GalleryExperience from '@/components/GalleryExperience';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'galleryPage' });

  return {
    title: locale === 'tr' ? 'Galeri | Kenan Evren Sultan Taksi' : 'Gallery | Kenan Evren Sultan Taxi',
    description: t('intro'),
    alternates: {
      canonical: `/${locale}/galeri`,
      languages: {
        tr: '/tr/galeri',
        en: '/en/galeri',
      },
    },
    openGraph: {
      title: locale === 'tr' ? 'Galeri | Kenan Evren Sultan Taksi' : 'Gallery | Kenan Evren Sultan Taxi',
      description: t('intro'),
      url: `/${locale}/galeri`,
      images: [
        {
          url: '/images/gallery/sultan-taksi-01.webp',
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
      src: '/images/gallery/sultan-taksi-01.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının ön açıdan görünümü' : 'Front-angle view of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Aracın kimliğini ve temiz dış görünümünü öne çıkaran yakın açı.' : 'A close angle that highlights the vehicle identity and clean exterior.',
    },
    {
      src: '/images/gallery/sultan-taksi-02.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının yandan görünümü' : 'Side view of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Çevreyle birlikte daha dengeli görünen, günlük kullanım hissi veren bir kare.' : 'A more balanced frame that shows the car in everyday street context.',
    },
    {
      src: '/images/gallery/sultan-taksi-03.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının sokak içindeki görünümü' : 'Kenan Evren Sultan Taxi vehicle within the nearby street context',
      caption: locale === 'tr' ? 'Yakın çevrede kolay fark edilen duruşu gösteren açık sokak kadrajı.' : 'An open street frame that shows how visible the taxi is nearby.',
    },
    {
      src: '/images/gallery/sultan-taksi-04.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının başka bir dış görünümü' : 'Another exterior street view of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Araç formunu ve bölgedeki görünürlüğünü destekleyen dış çekim.' : 'An exterior frame that reinforces the vehicle shape and local visibility.',
    },
  ];

  const interiorShots = [
    {
      src: '/images/gallery/arac-ici-01.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi araç içi ön koltuk ve konsol görünümü' : 'Interior front-seat and dashboard view of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Ön bölümdeki düzeni ve kabin hissini gösteren araç içi kare.' : 'An interior frame showing the front cabin layout and overall order.',
    },
    {
      src: '/images/gallery/arac-ici-02.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi araç içi yolcu alanı görünümü' : 'Passenger-area interior view of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Yolcu gözünden bakıldığında kabin derinliğini gösteren ikinci iç çekim.' : 'A second interior frame that shows the cabin depth from the passenger perspective.',
    },
  ];

  const wideShots = [
    {
      src: '/images/gallery/sultan-taksi-05.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının uzak çevre görünümü' : 'A wider environment shot of a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Durağın bulunduğu çevredeki görünürlüğü güçlendiren daha geniş kadraj.' : 'A wider frame that places the taxi clearly in its surrounding area.',
    },
    {
      src: '/images/gallery/sultan-taksi-06.webp',
      alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi aracının uzak sokak görünümü' : 'A distant street view featuring a Kenan Evren Sultan Taxi vehicle',
      caption: locale === 'tr' ? 'Hizmet verdiği çevre içinde doğal biçimde görünen en uzak çekim.' : 'The widest frame, showing the taxi naturally within the area it serves.',
    },
  ];

  return (
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
  );
}
