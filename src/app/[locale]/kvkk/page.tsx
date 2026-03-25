import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import ContactFooter from '@/components/ContactFooter';

export default async function KvkkPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isTr = locale === 'tr';

  return (
    <main className="site-shell min-h-screen bg-bg-primary">
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-panel rounded-3xl p-6 md:p-10">
            <p className="text-gold uppercase tracking-[0.28em] text-xs mb-4">
              {isTr ? 'Yasal Bilgilendirme' : 'Legal Notice'}
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
              {isTr ? 'KVKK Aydınlatma Metni' : 'Privacy Notice (KVKK)'}
            </h1>
            <p className="text-text/80 mb-8">
              {isTr
                ? 'Son güncelleme: 25 Mart 2026'
                : 'Last updated: March 25, 2026'}
            </p>

            <div className="space-y-6 text-text/90 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '1. Veri Sorumlusu ve Amaç' : '1. Data Controller and Purpose'}
                </h2>
                <p>
                  {isTr
                    ? 'Bu internet sitesi, Kenan Evren Sultan Taksi hizmetleri hakkında bilgilendirme sağlamak ve kullanıcıyı telefon/WhatsApp üzerinden iletişime yönlendirmek amacıyla hazırlanmıştır.'
                    : 'This website provides information about Kenan Evren Sultan Taxi services and directs users to contact via phone or WhatsApp.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '2. Sitede Toplanan Veriler' : '2. Data Collected on the Site'}
                </h2>
                <p>
                  {isTr
                    ? 'Sitede ad-soyad, e-posta veya form yoluyla kişisel veri toplama yapılmamaktadır. Rezervasyon ve talep işlemleri doğrudan telefon ya da WhatsApp üzerinden yürütülür.'
                    : 'No personal data is collected on this site through web forms, name fields, or email fields. Booking and requests are handled directly by phone or WhatsApp.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '3. Teknik Log Verileri' : '3. Technical Log Data'}
                </h2>
                <p>
                  {isTr
                    ? 'Sunucu kayıtları güvenlik ve teknik süreklilik amacıyla IP adresi, tarayıcı bilgisi ve ziyaret zamanı gibi sınırlı teknik verileri otomatik olarak işleyebilir.'
                    : 'Server logs may process limited technical data such as IP address, browser information, and visit time for security and operational continuity.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '4. İletişim Kanalları ve KVKK Talepleri' : '4. Contact Channels and KVKK Requests'}
                </h2>
                <p>
                  {isTr
                    ? 'WhatsApp veya telefon üzerinden paylaşılan kişisel veriler yalnızca hizmetin yürütülmesi, iletişim sağlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir. KVKK kapsamındaki talepleriniz için 0530 222 77 95 numarası üzerinden bizimle iletişime geçebilirsiniz.'
                    : 'Personal data shared via WhatsApp or phone is processed only for service delivery, communication, and legal obligations. For requests under Turkish data protection law (KVKK), contact us at +90 530 222 77 95.'}
                </p>
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
