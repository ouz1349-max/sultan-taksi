import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight, Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
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
    ? 'Hizmet alanı, erişim ve çağrı süreciyle ilgili güncel notları ve kısa rehber bilgileri bu sayfada bulabilirsiniz.'
    : 'Find current notes and short guide content about service area, access, and dispatch flow on this page.';

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

  const notes = isTr
    ? [
        {
          icon: MapPin,
          title: 'Hizmet alanı',
          text: 'Standart hizmet alanımız, Kenan Evren çevresindeki yaklaşık 2 km bölgedir.',
        },
        {
          icon: Clock3,
          title: 'Çağrı süreci',
          text: 'Yakın bölgelerde çağrılara daha hızlı dönüş yapılır; yoğunluk durumuna göre net bilgi verilir.',
        },
        {
          icon: MessageCircle,
          title: 'İletişim kanalı',
          text: 'Telefon ve WhatsApp hattı gün boyunca aktif tutulur; müsaitlik varsa açık şekilde paylaşılır.',
        },
      ]
    : [
        {
          icon: MapPin,
          title: 'Service area',
          text: 'Our standard service area is the approximate 2 km zone around Kenan Evren.',
        },
        {
          icon: Clock3,
          title: 'Dispatch flow',
          text: 'Requests from nearby areas receive faster responses, with clear timing shared based on demand.',
        },
        {
          icon: MessageCircle,
          title: 'Contact line',
          text: 'Phone and WhatsApp stay active throughout the day, with direct updates when support is available.',
        },
      ];

  const guideCards = isTr
    ? [
        {
          title: 'Yakın bölgeden taksi çağırırken',
          text: 'Konumunuzu kısa ve net paylaşmanız, çağrı sürecini hızlandırır. Özellikle bina adı, sokak ya da kolay tarif edilen bir nokta vermeniz faydalıdır.',
        },
        {
          title: 'Alan dışı taleplerde nasıl ilerliyoruz',
          text: 'Yaklaşık 2 km alan dışındaki taleplerde otomatik söz verilmiyor. Önce uygunluk kontrol ediliyor, sonra net dönüş yapılıyor.',
        },
        {
          title: 'Gece saatlerinde iletişim',
          text: 'Hat açık kalır; ancak yoğunluk ve araç uygunluğu anlık değişebilir. Bu yüzden en doğru bilgi çağrı anında paylaşılır.',
        },
      ]
    : [
        {
          title: 'When calling from the nearby area',
          text: 'Sharing your location clearly helps speed up dispatch. A building name, street, or easy landmark usually makes the process smoother.',
        },
        {
          title: 'How we handle requests outside the core zone',
          text: 'Requests beyond the approximate 2 km zone are not promised automatically. Availability is checked first, then confirmed clearly.',
        },
        {
          title: 'Contact during late hours',
          text: 'The line stays open, but traffic and vehicle availability can change in real time. The most accurate update is shared during the call.',
        },
      ];

  const faqItems = isTr
    ? [
        {
          q: 'Kenan Evren Sultan Taksi hangi bölgede hizmet veriyor?',
          a: 'Durak çevresindeki yaklaşık 2 km alanda hizmet veriyoruz. Daha uzak talepler için uygunluk kontrolü yapıldıktan sonra net bilgi paylaşıyoruz.',
        },
        {
          q: 'Araç yönlendirme ne kadar sürüyor?',
          a: 'Yoğunluğa göre değişir; ancak yakın bölgelerde daha hızlı yönlendirme yapmaya odaklanıyoruz ve süreyi çağrı sırasında açık şekilde iletiyoruz.',
        },
        {
          q: 'Bize nasıl ulaşabilirsiniz?',
          a: '0530 222 77 95 numarasından telefonla ya da WhatsApp üzerinden 7/24 ulaşabilirsiniz.',
        },
      ]
    : [
        {
          q: 'What area does Kenan Evren Sultan Taxi serve?',
          a: 'We serve the approximate 2 km area around the station. Requests from farther points are answered after a quick availability check.',
        },
        {
          q: 'How long does dispatch usually take?',
          a: 'It depends on demand, but we focus on faster dispatch within nearby areas and share the expected timing clearly during the call.',
        },
        {
          q: 'How can you reach us?',
          a: 'You can contact us 24/7 by phone at +90 530 222 77 95 or through WhatsApp.',
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
      <section className="container mx-auto max-w-6xl px-6 pb-18">
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{isTr ? 'Duyurular' : 'Announcements'}</p>
            <h1 className="max-w-[10ch] font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-white md:text-[4.1rem]">
              {isTr ? 'Hizmet alanı ve ulaşım notları' : 'Service area and access notes'}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-text/76 md:text-lg">
              {isTr
                ? 'Bu sayfa, hizmet alanı ve çağrı süreciyle ilgili gerçekten işinize yarayan bilgileri kısa ama daha düzenli bir yapıda toplar.'
                : 'This page gathers the details that matter most about service area and dispatch flow in a short but more useful structure.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/galeri`}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-gold/18 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
              >
                {isTr ? 'Galeriye Geç' : 'Go to Gallery'}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={`/${locale}/hakkimizda`}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-gold/12 px-4 py-2 text-sm font-semibold text-text/82 transition-colors hover:border-gold/20 hover:text-gold"
              >
                {isTr ? 'Hakkımızda' : 'About'}
              </Link>
              <Link
                href={`/${locale}`}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-gold/12 px-4 py-2 text-sm font-semibold text-text/82 transition-colors hover:border-gold/20 hover:text-gold"
              >
                {isTr ? 'Ana Sayfa' : 'Home'}
              </Link>
            </div>

            <div className="mt-10 space-y-5">
              {notes.map((note) => {
                const Icon = note.icon;
                return (
                  <div
                    key={note.title}
                    className="rounded-[1.45rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/16 bg-black/18 text-gold">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h2 className="text-base font-semibold text-white md:text-lg">{note.title}</h2>
                        <p className="mt-2 text-sm leading-7 text-text/72 md:text-[0.96rem]">{note.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-gold/10 pb-5">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold/78">
                  {isTr ? 'Geçerli bilgilendirme' : 'Current notice'}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{isTr ? '8 Nisan 2026' : 'April 8, 2026'}</p>
              </div>
              <div className="rounded-full border border-gold/16 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-gold/80">
                {isTr ? 'Güncel' : 'Updated'}
              </div>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-text/82">
              {isTr ? (
                <>
                  <p>
                    Kenan Evren Sultan Taksi olarak çağrılara hızlı ve açık yanıt vermeye odaklanıyoruz. Standart hizmet alanımız, durak çevresindeki yaklaşık 2 km bölgedir.
                  </p>
                  <p>
                    Bu sınır; bekleme süresini daha kontrollü tutmak, yakın bölgelerde daha öngörülebilir araç yönlendirme yapmak ve gereksiz söz vermemek için önemlidir.
                  </p>
                  <p>
                    Daha uzak mesafelerde ise otomatik onay vermek yerine önce uygunluğu değerlendiriyor, ardından net bilgi paylaşıyoruz.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    At Kenan Evren Sultan Taxi, we focus on answering requests clearly and quickly. Our standard service area is the approximate 2 km zone around the station.
                  </p>
                  <p>
                    That boundary helps us keep dispatch times more controlled, stay predictable in nearby areas, and avoid vague promises.
                  </p>
                  <p>
                    For farther distances, we check availability first and then respond with a clear answer instead of giving automatic approval.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-gold/10 bg-black/12 p-4">
                <MapPin size={18} className="text-gold" />
                <p className="mt-3 text-sm leading-7 text-text/74">
                  {isTr ? 'Yaklaşık 2 km ana hizmet alanı' : 'Approximate 2 km core service area'}
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-gold/10 bg-black/12 p-4">
                <Phone size={18} className="text-gold" />
                <p className="mt-3 text-sm leading-7 text-text/74">
                  {isTr ? '7/24 açık telefon hattı' : '24/7 phone line'}
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-gold/10 bg-black/12 p-4">
                <ShieldCheck size={18} className="text-gold" />
                <p className="mt-3 text-sm leading-7 text-text/74">
                  {isTr ? 'Net ve kontrollü yönlendirme yaklaşımı' : 'A clear and controlled dispatch approach'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {guideCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.8rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6"
            >
              <p className="section-kicker mb-3">{isTr ? 'Kısa Rehber' : 'Quick Guide'}</p>
              <h2 className="text-xl font-semibold leading-8 text-white">{card.title}</h2>
              <p className="mt-3 text-base leading-8 text-text/74">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{isTr ? 'Soru - Cevap' : 'Questions & Answers'}</p>
            <h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-white md:text-[3rem]">
              {isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-text/72 md:text-lg">
              {isTr
                ? 'Hizmet alanı ve çağrı süreciyle ilgili en sık sorulan soruların kısa cevapları burada.'
                : 'Short answers to the most common questions about service area and dispatch flow.'}
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.q}
                className="rounded-[1.8rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5 md:p-6"
              >
                <h3 className="text-lg font-semibold leading-7 text-white">{item.q}</h3>
                <p className="mt-2 text-base leading-8 text-text/76">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="section-kicker mb-3">{isTr ? 'Sonraki Adım' : 'Next Step'}</p>
            <p className="max-w-2xl text-base leading-8 text-text/76 md:text-lg">
              {isTr
                ? 'Aracı ve bulunduğu çevreyi daha yakından görmek isterseniz galeri sayfasına geçebilir ya da doğrudan bizi arayabilirsiniz.'
                : 'If you want a closer look at the vehicle and the surrounding area, continue to the gallery page or contact us directly.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/galeri`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/20 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
            >
              {isTr ? 'Galeriyi Gör' : 'View Gallery'}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${common('phone').replace(/\s/g, '')}`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-light"
            >
              {isTr ? 'Hemen Ara' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
