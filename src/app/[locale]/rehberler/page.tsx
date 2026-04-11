import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ContactFooter from '@/components/ContactFooter';
import GuideCard from '@/components/guides/GuideCard';
import GuidesList from '@/components/guides/GuidesList';
import { defaultOgImage } from '@/data/seo';
import { guides } from '@/data/guides';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';
  const title = isTr ? 'Rehberler | Kenan Evren Sultan Taksi' : 'Guides | Kenan Evren Sultan Taxi';
  const description = isTr
    ? 'Kenan Evren çevresinden ulaşım, şehir içi rota ve yerel kullanım notlarını bir araya getiren editoryal rehber merkezi.'
    : 'An editorial guide hub collecting route notes, local travel context, and practical taxi guidance around Kenan Evren and Adana.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/rehberler`,
      languages: {
        tr: '/tr/rehberler',
        en: '/en/rehberler',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/rehberler`,
      images: [
        {
          ...defaultOgImage,
          alt: isTr ? 'Kenan Evren Sultan Taksi rehber merkezi' : 'Kenan Evren Sultan Taxi guide hub',
        },
      ],
    },
  };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isTr = locale === 'tr';

  const [featuredGuide, ...remainingGuides] = guides;

  return (
    <main className="site-shell min-h-screen bg-bg-secondary pt-32">

      {/* ── Hero Başlık ── */}
      <section className="container mx-auto max-w-6xl px-6 pb-14">
        <div className="max-w-2xl">
          <p className="section-kicker mb-4">{isTr ? 'Rehber Merkezi' : 'Guide Hub'}</p>
          <h1 className="font-display text-4xl font-bold leading-[1.0] tracking-[-0.05em] text-white md:text-[3.8rem]">
            {isTr ? 'Yerel rota notları ve şehir rehberleri' : 'Local route notes and city guides'}
          </h1>
          <p className="mt-5 text-base leading-8 text-text/65 md:text-lg">
            {isTr
              ? 'Kenan Evren çevresinden başlayan yolculuklar, Adana içinde işe yarayan kısa planlar ve tekrar dönülüp okunabilecek daha kalıcı notlar.'
              : 'Rides starting around Kenan Evren, short plans inside Adana, and local notes worth returning to.'}
          </p>
        </div>
      </section>

      {/* ── Öne Çıkan Rehber ── */}
      <section className="container mx-auto max-w-6xl px-6 pb-16">
        <GuideCard guide={featuredGuide} locale={locale} featured />
      </section>

      {/* ── Tüm Rehberler (Blog Mantığı: Eşit Grid ve Filtreli) ── */}
      {remainingGuides.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 pb-20">
          <GuidesList guides={remainingGuides} locale={locale} isTr={isTr} />
        </section>
      )}

      <ContactFooter />
    </main>
  );
}
