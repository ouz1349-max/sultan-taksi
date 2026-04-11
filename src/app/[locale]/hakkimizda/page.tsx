import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';
import { BadgeCheck, Phone } from 'lucide-react';

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
          url: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp',
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
  const isTr = locale === 'tr';

  const principles = isTr
    ? [
        'Yerel bölge bilgisi sayesinde kısa çağrılarda daha net yönlendirme yapılır.',
        'Müsaitlik ve hizmet alanı konusunda açık iletişim korunur.',
        'Araç düzeni, sakin sürüş ve erişilebilirlik hizmet standardının parçasıdır.',
      ]
    : [
        'Local area knowledge helps produce clearer dispatch decisions on shorter requests.',
        'Availability and service coverage are shared with direct communication.',
        'Vehicle order, calm driving, and reachability are part of the service standard.',
      ];

  return (
    <main className="site-shell bg-bg-secondary pt-32">
      {/* 1) BENTO HERO: Büyük görsel solda, başlık ve intro asimetrik kenarda */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Dev Görsel (Sol 7 Kolon) */}
          <div className="group relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] border border-gold/15 bg-black/40 lg:col-span-7 xl:col-span-7">
            <div className="relative aspect-[4/3] w-full lg:aspect-[16/10] lg:h-full">
              <Image
                src="/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp"
                alt={isTr ? 'Kenan Evren Sultan Taksi geniş açı durak ve araç görünümü' : 'Kenan Evren Sultan Taxi wide angle view'}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Intro Kartı (Sağ 5 Kolon) */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] border border-gold/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.0))] p-8 md:p-10 lg:col-span-5 xl:col-span-5 lg:p-12">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gold/10 mix-blend-screen blur-[80px]"></div>
            
            <div className="mb-4 lg:mb-6 flex items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              {t('kicker')}
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white xl:text-[3.5rem] xl:leading-[0.95]">
              {t('title')}
            </h1>
            <p className="mt-6 md:mt-8 text-base leading-relaxed text-text/80 md:text-lg">
              {t('intro')}
            </p>
          </div>
        </div>
      </section>

      {/* 2) HİZMET YAKLAŞIMI (Tam Genişlikte Editorial Blok) */}
      <section className="border-y border-white/[0.04] bg-bg-primary py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:items-start">
            <div className="lg:sticky lg:top-32">
              <div className="mb-6 flex items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold/80">
                <span className="h-px w-6 bg-gold/50"></span>
                {isTr ? 'Hizmet yaklaşımı' : 'Service approach'}
              </div>
              <h2 className="text-2xl md:text-3xl leading-[1.2] font-display font-medium text-white lg:text-[2.5rem] lg:leading-[1.1]">
                {t('p1Text')}
              </h2>
            </div>
            
            <div className="flex flex-col rounded-[1.5rem] md:rounded-[2rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12 border-b border-white/[0.04]">
                <p className="text-base md:text-lg leading-relaxed text-text/80">{t('p2Text')}</p>
              </div>
              <div className="p-6 md:p-10 lg:p-12 bg-white/[0.005]">
                <p className="text-base md:text-lg leading-relaxed text-text/80">{t('p3Text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) NEDEN BİZ? (3'lü Bento Grid Cards) */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 py-16 lg:py-28">
        <div className="mb-10 text-center lg:mb-16">
          <div className="mb-6 flex justify-center text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold/80">
            {isTr ? 'Ayrıcalıklarımız' : 'Our Privileges'}
          </div>
          <h2 className="mx-auto max-w-[20ch] font-display text-2xl md:text-4xl font-bold leading-tight tracking-[-0.03em] text-white lg:text-[3.2rem]">
            {isTr ? 'Kesintisiz kalite, saygı ve üst düzey ulaşım deneyimi.' : 'Uninterrupted quality, respect, and high-end transit experience.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
          {principles.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 lg:p-10"
            >
              <div className="mb-6 md:mb-8 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl border border-gold/20 bg-gold/5 text-gold shadow-inner transition-transform group-hover:scale-105">
                <BadgeCheck size={24} strokeWidth={1.5} className="md:w-[28px] md:h-[28px]" />
              </div>
              <p className="text-balance text-base md:text-[1.1rem] leading-7 md:leading-8 text-text/80">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4) HİZMET STANDARTLARI (Fact Cards) */}
      <section className="border-t border-white/[0.04] bg-bg-primary py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold/80">
                <span className="h-px w-6 bg-gold/50"></span>
                {t('factsLabel')}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.03em] text-white lg:text-[2.8rem]">
                {isTr ? 'Öne çıkan hizmet standartlarımız' : 'Our prominent service standards'}
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {[t('fact1'), t('fact2'), t('fact3'), t('fact4')].map((fact, idx) => (
                <div key={idx} className="flex flex-col justify-center rounded-[1.5rem] md:rounded-[2rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0.0))] p-6 md:p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[0.02] hover:border-gold/10">
                  <p className="text-base md:text-[1.1rem] leading-7 md:leading-8 text-text/80">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5) CALL TO ACTION (Elegant Center Panel) */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 pb-16 pt-16 lg:pb-24 lg:pt-24 text-center">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-6 py-16 md:py-20 lg:p-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,181,114,0.1)_0%,transparent_60%)]"></div>
          
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
              {isTr ? 'Sultan Taksi ile İletişim' : 'Contact Sultan Taxi'}
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-text/70">
              {isTr
                ? 'Rezervasyon yapmak, araç talep etmek veya bulunduğunuz bölgeye en kısa sürede ulaşmamız için doğrudan arayabilirsiniz.'
                : 'Call directly to make a reservation, request a vehicle, or have us reach your location as soon as possible.'}
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:05302227795"
                className="flex items-center gap-3 rounded-full bg-gold px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:scale-105"
              >
                <Phone size={18} className="w-4 h-4 md:w-5 md:h-5" />
                {t('cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
