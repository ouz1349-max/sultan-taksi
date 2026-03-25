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
              <p>
                {isTr
                  ? 'Bu internet sitesi, Kenan Evren Sultan Taksi hizmetleri hakkında bilgilendirme sağlamak ve kullanıcıyı telefon/WhatsApp üzerinden iletişime yönlendirmek amacıyla hazırlanmıştır.'
                  : 'This website is prepared to provide information about Kenan Evren Sultan Taxi services and direct users to contact via phone/WhatsApp.'}
              </p>
              <p>
                {isTr
                  ? 'Sitede ad-soyad, e-posta veya form yoluyla kişisel veri toplama yapılmamaktadır. Rezervasyon veya talep işlemleri doğrudan telefon ya da WhatsApp üzerinden yürütülür.'
                  : 'No personal data is collected on this site through name, email, or web forms. Booking and request processes are carried out directly via phone or WhatsApp.'}
              </p>
              <p>
                {isTr
                  ? 'Sunucu kayıtları, güvenlik ve teknik süreklilik amacıyla IP adresi, tarayıcı bilgisi ve ziyaret zamanı gibi sınırlı teknik verileri otomatik olarak işleyebilir.'
                  : 'Server logs may process limited technical data such as IP address, browser details, and visit time for security and operational continuity.'}
              </p>
              <p>
                {isTr
                  ? 'WhatsApp veya telefon üzerinden bizimle paylaşılan kişisel veriler, yalnızca hizmetin yürütülmesi, iletişim sağlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.'
                  : 'Personal data shared with us via WhatsApp or phone is processed only for service delivery, communication, and compliance with legal obligations.'}
              </p>
              <p>
                {isTr
                  ? 'KVKK kapsamındaki talepleriniz için bizimle 0530 222 77 95 numaralı telefondan iletişime geçebilirsiniz.'
                  : 'For requests under Turkish data protection law (KVKK), you can contact us at +90 530 222 77 95.'}
              </p>
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
