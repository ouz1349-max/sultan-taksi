import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Phone } from 'lucide-react';
import ContactFooter from '@/components/ContactFooter';
import { getSiteUrl } from '@/lib/site-url';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';
  const title = isTr ? 'Hakkımızda | Kenan Evren Sultan Taksi' : 'About | Kenan Evren Sultan Taxi';
  const description = isTr
    ? 'Kenan Evren Sultan Taksi’nin yerel hizmet anlayışı, şeffaf iletişim yaklaşımı ve yolculuk standartları.'
    : 'Kenan Evren Sultan Taxi’s local service approach, transparent communication, and ride standards.';

  const siteUrl = getSiteUrl();
  const path = `/${locale}/hakkimizda`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        tr: `${siteUrl}/tr/hakkimizda`,
        en: `${siteUrl}/en/hakkimizda`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [
        {
          url: `${siteUrl}/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp`,
          width: 1200,
          height: 630,
          alt: isTr ? 'Kenan Evren Sultan Taksi hakkında sayfası' : 'Kenan Evren Sultan Taxi about page',
        },
      ],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isTr = locale === 'tr';

  const principles = isTr
    ? [
        {
          title: 'Yerel bölge bilgisi',
          text:
            'Kenan Evren, Güzelyalı, Reşatbey ve Çukurova çevresindeki sokakları, yoğun saatleri ve pratik buluşma noktalarını bilmek yolculuğun ilk dakikasından itibaren fark yaratır.',
        },
        {
          title: 'Açık iletişim',
          text:
            'Araç müsaitliği, bekleme süresi, ödeme tercihi, bagaj durumu ve güzergah beklentisi konusunda yolcuyla net konuşmayı hizmetin temel parçası olarak görüyoruz.',
        },
        {
          title: 'Kurallara uygun sürüş',
          text:
            'Taksimetre kullanımı, yolcu kapasitesi, hız sınırı ve trafik kuralları bizim için pazarlık konusu değildir. Güvenli ve düzenli yolculuk, her mesafede aynı önemdedir.',
        },
      ]
    : [
        {
          title: 'Local area knowledge',
          text:
            'Knowing Kenan Evren, Güzelyalı, Reşatbey, and Çukurova streets, peak hours, and practical meeting points makes a difference from the first minute.',
        },
        {
          title: 'Clear communication',
          text:
            'Vehicle availability, waiting time, payment needs, luggage, and route expectations should be discussed clearly. We treat this as a core part of service.',
        },
        {
          title: 'Rule-compliant driving',
          text:
            'Taximeter use, passenger capacity, speed limits, and traffic rules are not negotiable. Safe and orderly travel matters on every distance.',
        },
      ];

  const standards = isTr
    ? [
        'Kısa mesafe veya uzun rota ayrımı yapmadan aynı ciddiyetle hizmet vermek.',
        'Bagaj, çocuk, evcil hayvan veya refakatçi gibi özel durumları çağrı anında doğru yönetmek.',
        'Araç temizliği, sakin sürüş ve saygılı iletişimi günlük standardın parçası yapmak.',
        'Kesin süre veya sabit fiyat vaadi yerine taksimetre ve trafik gerçekliğini açıkça anlatmak.',
      ]
    : [
        'Serving short and long routes with the same level of care.',
        'Managing luggage, children, pets, or companion needs correctly during the call.',
        'Treating vehicle cleanliness, calm driving, and respectful communication as daily standards.',
        'Explaining taximeter and traffic reality instead of promising exact times or fixed fares.',
      ];

  return (
    <main className="site-shell bg-bg-secondary pt-32">
      <section className="container mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-kicker mb-5">{isTr ? 'Hakkımızda' : 'About'}</p>
            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white md:text-6xl">
              {isTr
                ? 'Mahalle durağı ciddiyetiyle çalışan yerel taksi hizmeti'
                : 'A local taxi service with neighborhood-rank discipline'}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-text/76 md:text-lg md:leading-9">
              {isTr
                ? 'Kenan Evren Sultan Taksi olarak amacımız sadece bir adrese gitmek değil; yolcunun ihtiyacını doğru anlayan, zamanı ve kuralları gerçekçi yöneten, ulaşılabilir bir durak deneyimi sunmaktır.'
                : 'At Kenan Evren Sultan Taxi, our goal is not only to reach an address. We aim to understand the passenger’s need correctly, manage timing and rules realistically, and provide a reachable rank experience.'}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="tel:+905302227795"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-light"
              >
                <Phone size={16} />
                {isTr ? 'Telefonla Ara' : 'Call'}
              </a>
              <Link
                href={`/${locale}/rehberler`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/25 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
              >
                {isTr ? 'Rehberleri İncele' : 'View Guides'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/12 bg-black/25">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp"
                alt={isTr ? 'Kenan Evren Sultan Taksi durak ve araç görünümü' : 'Kenan Evren Sultan Taxi vehicle and rank view'}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.05] bg-bg-primary py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="section-kicker mb-4">{isTr ? 'Yaklaşım' : 'Approach'}</p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl">
                {isTr ? 'Bizim için iyi hizmet, önce doğru beklenti kurmaktır.' : 'For us, good service starts with clear expectations.'}
              </h2>
            </div>
            <div className="space-y-8 text-base leading-8 text-text/76 md:text-lg md:leading-9">
              <p>
                {isTr
                  ? 'Taksi hizmetinde kalite yalnızca aracın temizliğiyle ölçülmez. Aracın ne zaman gelebileceği, hangi noktadan yolcu alabileceği, bagajın sığıp sığmayacağı ve ücretin nasıl oluşacağı da en az sürüş konforu kadar önemlidir.'
                  : 'Taxi-service quality is not measured only by vehicle cleanliness. Arrival timing, pickup point, luggage suitability, and how the fare is formed matter as much as ride comfort.'}
              </p>
              <p>
                {isTr
                  ? 'Bu yüzden iletişimde süslü vaatler yerine açık bilgi vermeyi tercih ediyoruz. Anlık yoğunluk, trafik, hava durumu ve araç müsaitliği değişebilir; yolcunun buna göre gerçekçi plan yapabilmesi bizim için önemlidir.'
                  : 'That is why we prefer clear information over polished promises. Demand, traffic, weather, and vehicle availability can change; helping passengers plan realistically matters to us.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{isTr ? 'Çalışma İlkeleri' : 'Principles'}</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">
              {isTr ? 'Durağın günlük refleksi' : 'The rank’s daily reflex'}
            </h2>
          </div>
          <div className="divide-y divide-white/[0.08]">
            {principles.map((item, index) => (
              <article key={item.title} className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[5rem_1fr]">
                <div className="font-display text-3xl text-gold/45">0{index + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white/92">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-text/70">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.05] bg-bg-primary py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="section-kicker mb-4">{isTr ? 'Standartlar' : 'Standards'}</p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl">
                {isTr ? 'Abartmadan, net ve sürdürülebilir hizmet.' : 'Clear, grounded, and sustainable service.'}
              </h2>
            </div>
            <ul className="divide-y divide-white/[0.08]">
              {standards.map((standard) => (
                <li key={standard} className="py-5 first:pt-0 last:pb-0">
                  <p className="text-base leading-8 text-text/76">{standard}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="border-l border-gold/30 pl-6 md:pl-10">
          <p className="section-kicker mb-4">{isTr ? 'Son söz' : 'Final note'}</p>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            {isTr
              ? 'İyi bir taksi durağı, yolculuk başlamadan önce güven verir.'
              : 'A good taxi rank creates trust before the ride begins.'}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text/72 md:text-lg md:leading-9">
            {isTr
              ? 'Bize ulaştığınızda amacımız en hızlı vaadi vermek değil; bulunduğunuz noktaya, ihtiyacınıza ve o anki araç durumuna göre en doğru bilgiyi paylaşmaktır.'
              : 'When you contact us, our aim is not to make the fastest promise. It is to share the most accurate information based on your location, need, and current vehicle availability.'}
          </p>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
