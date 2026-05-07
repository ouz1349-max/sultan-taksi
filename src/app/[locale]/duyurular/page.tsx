import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight, CalendarDays, Phone } from 'lucide-react';
import ContactFooter from '@/components/ContactFooter';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  const title = isTr
    ? 'Duyurular | Kenan Evren Sultan Taksi'
    : 'Announcements | Kenan Evren Sultan Taxi';
  const description = isTr
    ? 'Kenan Evren Sultan Taksi için nadir operasyon duyuruları, hizmet notları ve güncel bilgilendirmeler.'
    : 'Occasional operating notices, service notes, and current updates for Kenan Evren Sultan Taxi.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/duyurular`,
      languages: {
        tr: '/tr/duyurular',
        en: '/en/duyurular',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/duyurular`,
      images: [
        {
          url: '/images/hero.webp',
          width: 1200,
          height: 630,
          alt: isTr
            ? 'Kenan Evren Sultan Taksi duyurular sayfası'
            : 'Kenan Evren Sultan Taxi announcements page',
        },
      ],
    },
  };
}

export default async function AnnouncementsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isTr = locale === 'tr';
  const common = await getTranslations({ locale, namespace: 'common' });

  const latestNotice = isTr
    ? {
        date: '7 Mayıs 2026',
        title: 'Duyurular sayfası yalnızca operasyon notları için kullanılacak',
        body:
          'Haftalık veya 15 günlük içerikler artık rehberler bölümünde yayınlanacak. Bu sayfa; bayram yoğunluğu, hizmet düzeni değişikliği, özel dönem çalışma notları veya iletişim bilgisi güncellemesi gibi nadir ama önemli duyurular için korunuyor.',
      }
    : {
        date: 'May 7, 2026',
        title: 'Announcements will be used only for operating notices',
        body:
          'Weekly or biweekly content will now live under Guides. This page is kept for occasional but important notices such as holiday density, service changes, special-period operating notes, or contact updates.',
      };

  const rows = isTr
    ? [
        {
          title: 'Rehber içerikleri nerede yayınlanacak?',
          text:
            'Havalimanı, otogar, kısa mesafe, gece taksi, bagajlı yolculuk ve benzeri kalıcı yazılar rehberler sayfasında toplanacak.',
        },
        {
          title: 'Bu sayfaya ne zaman yeni duyuru eklenir?',
          text:
            'Yalnızca kullanıcıyı doğrudan etkileyen güncel bir operasyon bilgisi olduğunda: özel dönem yoğunluğu, geçici hizmet notu veya iletişim değişikliği gibi.',
        },
        {
          title: 'Anlık araç müsaitliği burada yazacak mı?',
          text:
            'Hayır. Anlık araç durumu siteye işlenmeyecek. En güncel müsaitlik bilgisi telefon veya WhatsApp üzerinden paylaşılır.',
        },
      ]
    : [
        {
          title: 'Where will guide content be published?',
          text:
            'Evergreen articles about airport trips, bus terminal rides, short distances, night taxis, luggage, and similar topics will live under Guides.',
        },
        {
          title: 'When will a new announcement be added here?',
          text:
            'Only when there is a current operating note that directly affects passengers, such as special-period density, temporary service notes, or contact changes.',
        },
        {
          title: 'Will real-time vehicle availability be posted here?',
          text:
            'No. Live vehicle availability will not be published on the site. The current availability update is shared by phone or WhatsApp.',
        },
      ];

  const faqItems = isTr
    ? [
        {
          q: 'Duyurular sayfası blog gibi mi kullanılacak?',
          a: 'Hayır. Düzenli yazılar rehberler bölümünde yayınlanacak. Duyurular sayfası sadece nadir operasyon notları için kalacak.',
        },
        {
          q: 'Güncel araç durumu bu sayfadan takip edilir mi?',
          a: 'Hayır. Araç müsaitliği anlık değişir; en doğru bilgi telefon veya WhatsApp görüşmesinde verilir.',
        },
        {
          q: 'Yeni duyuru eklenmezse sayfanın amacı nedir?',
          a: 'Sayfa, ileride önemli bir hizmet notu gerektiğinde hazır bir kurumsal alan sağlar. Ana içerik merkezi yine rehberlerdir.',
        },
      ]
    : [
        {
          q: 'Will this page be used like a blog?',
          a: 'No. Regular articles will be published under Guides. Announcements will stay reserved for occasional operating notes.',
        },
        {
          q: 'Can I follow vehicle availability here?',
          a: 'No. Availability changes in real time; the most accurate update is shared by phone or WhatsApp.',
        },
        {
          q: 'What is the purpose if no new notice is added?',
          a: 'It keeps a clear business space ready for important service notes. The main content center remains Guides.',
        },
      ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <main className="site-shell min-h-screen bg-bg-secondary pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="container mx-auto max-w-6xl px-6 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="section-kicker mb-5">{isTr ? 'Duyurular' : 'Announcements'}</p>
          <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white md:text-6xl">
            {isTr ? 'Nadir ama önemli hizmet notları' : 'Occasional but important service notes'}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-text/74 md:text-lg md:leading-9">
            {isTr
              ? 'Sultan Taksi içeriklerinin ana merkezi rehberler sayfasıdır. Duyurular bölümü ise sık güncellenen bir blog değil; gerektiğinde yolcuları etkileyen kısa ve net operasyon notları için ayrılmış ikincil bir alandır.'
              : 'Guides are the main content center for Sultan Taxi. Announcements are not a frequently updated blog; this is a secondary space reserved for short operating notes that may affect passengers.'}
          </p>
        </div>
      </section>

      <section className="border-y border-white/[0.05] bg-bg-primary py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gold">
                <CalendarDays size={18} />
                {latestNotice.date}
              </div>
              <h2 className="mt-5 max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl">
                {latestNotice.title}
              </h2>
            </div>
            <div className="border-l border-gold/25 pl-6 md:pl-10">
              <p className="text-base leading-8 text-text/76 md:text-lg md:leading-9">{latestNotice.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/rehberler`}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-light"
                >
                  {isTr ? 'Rehberlere Git' : 'Go to Guides'}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${common('phone').replace(/\s/g, '')}`}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/25 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
                >
                  <Phone size={16} />
                  {isTr ? 'Telefonla Ara' : 'Call'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{isTr ? 'Kapsam' : 'Scope'}</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">
              {isTr ? 'Bu sayfada ne beklemelisiniz?' : 'What should you expect here?'}
            </h2>
          </div>
          <div className="divide-y divide-white/[0.08]">
            {rows.map((row) => (
              <article key={row.title} className="py-7 first:pt-0 last:pb-0">
                <h3 className="text-xl font-semibold text-white/92">{row.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-text/70">{row.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.05] bg-bg-primary py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="section-kicker mb-4">{isTr ? 'Soru - Cevap' : 'Questions'}</p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {isTr ? 'Kısa cevaplar' : 'Short answers'}
          </h2>
          <div className="mt-10 divide-y divide-white/[0.08]">
            {faqItems.map((item) => (
              <article key={item.q} className="py-7 first:pt-0 last:pb-0">
                <h3 className="text-lg font-semibold text-white/90">{item.q}</h3>
                <p className="mt-3 text-base leading-8 text-text/70">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
