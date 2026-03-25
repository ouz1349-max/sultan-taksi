import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import ContactFooter from '@/components/ContactFooter';

export default async function AnnouncementsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isTr = locale === 'tr';
  const faqItems = isTr
    ? [
        {
          q: 'Kenan Evren Sultan Taksi hangi bölgede hizmet veriyor?',
          a: 'Durak çevresindeki yaklaşık 2 km alanda hizmet veriyoruz. Daha uzak talepler için müsaitlik durumuna göre bilgilendirme yapıyoruz.'
        },
        {
          q: 'Araç yönlendirme ne kadar sürüyor?',
          a: 'Yoğunluğa bağlı olarak hizmet alanımız içinde genellikle kısa sürede araç yönlendirmesi yapıyoruz.'
        },
        {
          q: 'Bize nasıl ulaşabilirsiniz?',
          a: 'Bize 0530 222 77 95 numarasından telefonla veya WhatsApp üzerinden 7/24 ulaşabilirsiniz.'
        },
        {
          q: 'Neden Kenan Evren Sultan Taksi?',
          a: 'Hızlı dönüş, net iletişim, güvenli sürüş ve müşteri memnuniyeti odaklı hizmet anlayışımızla bölgedeki yolcuların güvenini kazanıyoruz.'
        }
      ]
    : [
        {
          q: 'What area does Kenan Evren Sultan Taxi serve?',
          a: 'We serve approximately within a 2 km area around our station. Requests from farther locations are handled based on availability.'
        },
        {
          q: 'How quickly can a taxi be dispatched?',
          a: 'Depending on traffic, we usually dispatch quickly within our core service area.'
        },
        {
          q: 'How can you contact us?',
          a: 'You can reach us 24/7 by phone at +90 530 222 77 95 or via WhatsApp.'
        },
        {
          q: 'Why choose Kenan Evren Sultan Taxi?',
          a: 'Passengers choose us for fast response, clear communication, safe driving, and a customer-focused service approach.'
        }
      ];

  return (
    <main className="site-shell min-h-screen bg-bg-primary">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-panel rounded-3xl p-6 md:p-10">
            <p className="text-gold uppercase tracking-[0.28em] text-xs mb-4">
              {isTr ? 'Duyurular' : 'Announcements'}
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
              {isTr ? 'Neden Kenan Evren Sultan Taksi?' : 'Why Kenan Evren Sultan Taxi?'}
            </h1>
            <p className="text-text/80 mb-8">
              {isTr ? 'Son güncelleme: 25 Mart 2026' : 'Last updated: March 25, 2026'}
            </p>

            <div className="space-y-5 text-text/90 leading-relaxed">
              {isTr ? (
                <>
                  <p>
                    Adana&apos;da güvenilir bir taksi aradığınızda, hızlı dönüş ve net iletişimle daima yanınızdayız.
                    Kenan Evren Sultan Taksi olarak çağrılarınızı telefon ve WhatsApp üzerinden 7/24 alıyor,
                    durak çevresindeki yaklaşık 2 km hizmet alanı içinde en kısa sürede araç yönlendirmeye odaklanıyoruz.
                  </p>
                  <p>
                    Bizim için önemli olan, sizi bekletmeden, güvenli ve konforlu bir yolculukla hedefinize ulaştırmak.
                    Bu yüzden sürüş güvenliği, araç temizliği ve müşteri memnuniyeti konularında standartlarımızı sürekli koruyoruz.
                    Eğer Kenan Evren taksi, Kenan Evren Sultan Taksi, Kenan Evren&apos;de taksi çağırma ya da Adana güvenilir taksi
                    gibi bir arama yapıyorsanız, kesinlikle doğru yerdesiniz.
                  </p>
                  <p>
                    Hizmet alanımızı açık ve şeffaf şekilde paylaşıyoruz: öncelikli olarak Kenan Evren çevresi ve yakın noktalar.
                    Daha uzak mesafeler için de müsaitlik durumuna göre sizi bilgilendiriyoruz.
                  </p>
                  <p>Hızlı erişim, güvenli sürüş ve samimi iletişim için buradayız.</p>
                </>
              ) : (
                <>
                  <p>
                    If you are looking for a reliable taxi in Adana, we are always here with fast response and clear communication.
                    As Kenan Evren Sultan Taxi, we receive your calls via phone and WhatsApp 24/7, and we focus on dispatching a taxi quickly
                    within our approximately 2 km service area around the station.
                  </p>
                  <p>
                    What matters most to us is getting you to your destination safely and comfortably without making you wait.
                    For this reason, we consistently maintain our standards in driving safety, vehicle cleanliness, and customer satisfaction.
                    If you are searching for terms like Kenan Evren taxi, Kenan Evren Sultan Taxi, call a taxi in Kenan Evren,
                    or reliable taxi in Adana, you are definitely in the right place.
                  </p>
                  <p>
                    We share our service area clearly and transparently: primarily Kenan Evren and nearby points.
                    For farther distances, we provide feedback based on availability.
                  </p>
                  <p>We are here for fast access, safe driving, and friendly communication.</p>
                </>
              )}
            </div>

            <div className="mt-10 pt-8 border-t border-gold/20">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-5">
                {isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-gold/20 bg-[#0f1522]/55 p-4 md:p-5">
                    <h3 className="text-gold font-bold mb-2">{item.q}</h3>
                    <p className="text-text/88 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold text-black font-semibold hover:bg-gold-light transition-colors"
              >
                {isTr ? 'Ana Sayfaya Dön' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
