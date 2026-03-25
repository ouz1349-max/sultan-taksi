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
              {isTr ? 'Son güncelleme: 25 Mart 2026' : 'Last updated: March 25, 2026'}
            </p>

            <div className="space-y-6 text-text/90 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '1. Veri Sorumlusu' : '1. Data Controller'}
                </h2>
                <p>
                  {isTr
                    ? 'Bu site kapsamında veri sorumlusu Kenan Evren Sultan Taksi\'dir. İletişim: 0530 222 77 95, adres: Reşatbey, 01119 Çukurova/Adana.'
                    : 'For this website, the data controller is Kenan Evren Sultan Taxi. Contact: +90 530 222 77 95, address: Reşatbey, 01119 Çukurova/Adana.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '2. Hangi Veriler İşlenir?' : '2. What Data Is Processed?'}
                </h2>
                <p>
                  {isTr
                    ? 'Sitede form bulunmamaktadır; ad-soyad veya e-posta gibi veriler web formu üzerinden toplanmaz. Teknik güvenlik amacıyla sunucu kayıtlarında IP, tarayıcı bilgisi ve ziyaret zamanı gibi sınırlı log verileri işlenebilir.'
                    : 'There is no web form on this site; data such as full name or email is not collected via forms. For technical security, limited server log data (such as IP, browser information, and visit time) may be processed.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '3. İşleme Amaçları ve Hukuki Sebep' : '3. Processing Purposes and Legal Basis'}
                </h2>
                <p>
                  {isTr
                    ? 'Veriler; hizmetin sağlanması, iletişim süreçlerinin yürütülmesi, güvenliğin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.'
                    : 'Data is processed for service delivery, communication, security, and compliance with legal obligations.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '4. Üçüncü Taraf Hizmetler' : '4. Third-Party Services'}
                </h2>
                <p>
                  {isTr
                    ? 'Sitede Google Maps haritası gösterilebilir ve kullanıcı WhatsApp bağlantısına yönlendirilebilir. Bu servisler kullanıldığında ilgili üçüncü tarafların kendi gizlilik politikaları geçerlidir.'
                    : 'This site may display Google Maps and redirect users to WhatsApp links. When these services are used, their own privacy policies apply.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '5. İlgili Kişi Hakları ve Başvuru' : '5. Data Subject Rights and Requests'}
                </h2>
                <p>
                  {isTr
                    ? 'KVKK kapsamındaki haklarınıza ilişkin taleplerinizi 0530 222 77 95 üzerinden iletebilirsiniz. Talebiniz yürürlükteki mevzuata uygun şekilde değerlendirilir.'
                    : 'For requests regarding your rights under Turkish data protection law (KVKK), contact +90 530 222 77 95. Requests are handled in line with applicable legislation.'}
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
