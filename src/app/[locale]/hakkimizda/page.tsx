import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Phone, Clock3, MapPin } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  const title = locale === 'tr' ? 'Hakkımızda | Kenan Evren Sultan Taksi' : 'About | Kenan Evren Sultan Taxi';
  const description = t('intro');

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/hakkimizda`,
      languages: {
        tr: '/tr/hakkimizda',
        en: '/en/hakkimizda',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/hakkimizda`,
      images: [
        {
          url: '/images/hero.webp',
          width: 1200,
          height: 630,
          alt: locale === 'tr' ? 'Kenan Evren Sultan Taksi hakkında sayfası' : 'Kenan Evren Sultan Taxi about page',
        },
      ],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aboutPage');

  const facts = [t('fact1'), t('fact2'), t('fact3')];

  return (
    <main className="site-shell bg-bg-secondary pt-36 pb-24">
      <section className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{t('kicker')}</p>
            <h1 className="max-w-[12ch] font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-white md:text-[4rem]">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-text/76 md:text-lg">{t('intro')}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {facts.map((fact) => (
                <div key={fact} className="rounded-full border border-gold/14 bg-white/[0.025] px-4 py-2 text-sm font-semibold text-gold">
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 md:p-8">
            <div className="space-y-8">
              <div className="border-b border-gold/10 pb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold/78">{t('p1Title')}</p>
                <p className="text-base leading-8 text-text/74">{t('p1Text')}</p>
              </div>

              <div className="border-b border-gold/10 pb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold/78">{t('p2Title')}</p>
                <p className="text-base leading-8 text-text/74">{t('p2Text')}</p>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold/78">{t('p3Title')}</p>
                <p className="text-base leading-8 text-text/74">{t('p3Text')}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 rounded-[1.5rem] border border-gold/10 bg-black/16 p-5 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Clock3 size={18} className="mt-1 text-gold" />
                <span className="text-sm leading-7 text-text/72">{t('fact1')}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-gold" />
                <span className="text-sm leading-7 text-text/72">{t('fact2')}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold" />
                <span className="text-sm leading-7 text-text/72">{t('fact3')}</span>
              </div>
            </div>

            <a
              href="tel:05302227795"
              className="mt-8 inline-flex min-h-[50px] items-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-light"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
