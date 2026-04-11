import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight, Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import ContactFooter from '@/components/ContactFooter';
import Accordion from '@/components/Accordion';

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
      
      {/* HEADER & PINNED NOTICE (BENTO HERO) */}
      <section className="container mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          
          {/* Lütfen Başlık Kartı (Sol 7 Kolon) */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[2.5rem] border border-gold/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.0))] p-10 lg:col-span-7 xl:p-14">
            <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-gold/10 mix-blend-screen blur-[80px]"></div>
            
            <p className="section-kicker mb-6 inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              {isTr ? 'Duyurular' : 'Announcements'}
            </p>
            <h1 className="max-w-[14ch] font-display text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-[4.5rem]">
              {isTr ? 'Hizmet alanı ve ulaşım notları' : 'Service area and access notes'}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-text/76 md:text-lg">
              {isTr
                ? 'Bu sayfa, hizmet alanı ve çağrı süreciyle ilgili gerçekten işinize yarayan bilgileri kısa ama çok daha düzenli bir yapıda toplar.'
                : 'This page gathers the details that matter most about service area and dispatch flow in a short but much more organized structure.'}
            </p>

            <div className="relative z-10 mt-12 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/galeri`}
                className="group flex min-h-[52px] items-center gap-3 rounded-full bg-gold px-6 py-2 text-sm font-bold text-black transition-all hover:bg-gold-light hover:shadow-[0_0_20px_rgba(207,181,114,0.3)]"
              >
                {isTr ? 'Galeriye Geç' : 'Go to Gallery'}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={`/${locale}/hakkimizda`}
                className="flex min-h-[52px] items-center justify-center rounded-full border border-gold/20 px-6 py-2 text-sm font-semibold text-text/90 transition-all hover:border-gold/50 hover:bg-gold/5 hover:text-white"
              >
                {isTr ? 'Hakkımızda' : 'About'}
              </Link>
            </div>
          </div>

          {/* PINNED GÜNCELLEME (Sağ 5 Kolon) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gold/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-8 lg:col-span-5 xl:p-12">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gold/5 to-transparent opacity-50"></div>
            
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-gold/15 pb-6">
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold/80">
                    {isTr ? 'Geçerli bilgilendirme' : 'Current notice'}
                  </p>
                  <p className="mt-2 text-xl font-display font-medium text-white">{isTr ? '8 Nisan 2026' : 'April 8, 2026'}</p>
                </div>
                <div className="flex h-8 items-center rounded-full border border-gold/20 bg-gold/10 px-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-gold shadow-sm backdrop-blur-md">
                  {isTr ? 'Güncel' : 'Updated'}
                </div>
              </div>
              
              <div className="mt-8 space-y-4 text-[1.05rem] leading-8 text-text/80">
                {isTr ? (
                  <>
                    <p>
                      Sultan Taksi olarak çağrılara hızla yanıt verirken <strong>standart sınırımızı durak çevresindeki 2 km alan</strong> olarak belirledik.
                    </p>
                    <p className="opacity-80">
                      Bu sınır; bekleme süresini daha kontrollü tutmak, size gerçekçi süreler verebilmek ve sürpriz beklentilerin önüne geçerek güvenilir bir ulaşım planı sunmak için elzemdir.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      At Sultan Taxi, we focus on clarity. Our <strong>standard service area is the approximate 2 km zone</strong> around the station.
                    </p>
                    <p className="opacity-80">
                      This boundary helps us keep dispatch times controlled, give you realistic updates, and provide a reliable travel plan without unexpected delays.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                <Clock3 size={16} className="text-gold" />
                <span className="text-sm font-medium text-text/80">{isTr ? 'Hızlı Dönüş' : 'Fast Reply'}</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                <ShieldCheck size={16} className="text-gold" />
                <span className="text-sm font-medium text-text/80">{isTr ? 'Güvenilir Ağ' : 'Reliable'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED NOTES (Asimetrik 3'lü) */}
      <section className="container mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 lg:pl-4">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white/90">
            {isTr ? 'Öne Çıkan Notlar' : 'Highlighted Notes'}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {notes.map((note, index) => {
            const Icon = note.icon;
            // İlk notu diğerlerinden biraz farklı boyutlandırmak asimetri katar
            const isFirst = index === 0;
            return (
              <div
                key={note.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] px-8 py-10 transition-colors hover:border-gold/30 ${isFirst ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Watermark Icon */}
                <Icon
                  size={140}
                  strokeWidth={1}
                  className="absolute -bottom-8 -right-8 z-0 text-white/[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/[0.04]"
                />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 text-gold shadow-inner transition-transform group-hover:scale-105">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white/95">{note.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-text/70">{note.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* KISA REHBER KARTLARI (Editorial Layout) */}
      <section className="border-t border-white/[0.04] bg-bg-primary py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="section-kicker mb-4">{isTr ? 'Tavsiyeler' : 'Advices'}</p>
                <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
                  {isTr ? 'Kısa Rehberler' : 'Quick Guides'}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-text/70">
                  {isTr
                    ? 'Daha konforlu bir yolculuk deneyimi ve hızlı bir iletişim kurabilmek için aklınızda bulunması gereken ufak ipuçları.'
                    : 'Small tips to keep in mind for a more comfortable journey and faster communication.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-8">
              {guideCards.map((card, i) => (
                <article
                  key={card.title}
                  className="group flex flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-8 transition-colors hover:border-gold/20 sm:flex-row sm:items-center sm:gap-10 sm:p-10"
                >
                  <div className="flex-1">
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-widest text-gold/60">0{i + 1}</p>
                    <h3 className="text-xl font-medium leading-tight text-white/90">{card.title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-7 text-text/60">{card.text}</p>
                  </div>
                  <div className="mt-6 flex h-14 w-14 shrink-0 -translate-x-4 items-center justify-center rounded-full border border-gold/15 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:mt-0">
                    <ArrowRight size={20} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIK SORULAN SORULAR (Minimalist Accordion-Alike List) */}
      <section className="container mx-auto max-w-4xl px-6 py-28">
        <div className="text-center">
          <p className="section-kicker mb-4 justify-center">{isTr ? 'Soru - Cevap' : 'Questions & Answers'}</p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-white">
            {isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="mt-16">
          <Accordion items={faqItems.map(item => ({ question: item.q, answer: item.a }))} />
        </div>
      </section>

      {/* CALL TO ACTION (Elegant Wide Panel) */}
      <section className="container mx-auto max-w-7xl px-6 pb-24 text-center">
        <div className="relative overflow-hidden rounded-[3rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-6 py-20 lg:p-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,181,114,0.1)_0%,transparent_60%)]"></div>
          
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white md:text-5xl">
              {isTr ? 'Müsaitliğimizi Kontrol Edin' : 'Check Our Availability'}
            </h2>
            <p className="mt-6 text-lg leading-8 text-text/70">
              {isTr
                ? 'Aracı ve bulunduğu çevreyi daha yakından görmek isterseniz galeri sayfasına geçebilir ya da doğrudan bizi arayabilirsiniz.'
                : 'If you want a closer look at the vehicle and area, go to the gallery page or contact us directly.'}
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${common('phone').replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-base font-bold text-black transition-transform hover:scale-105"
              >
                <Phone size={18} />
                {isTr ? 'Hemen Ara' : 'Call Now'}
              </a>
              <Link
                href={`/${locale}/galeri`}
                className="flex items-center gap-3 rounded-full border border-gold/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold hover:bg-gold/5"
              >
                {isTr ? 'Galeriyi Gör' : 'View Gallery'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
