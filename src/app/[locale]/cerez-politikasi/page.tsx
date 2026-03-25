import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import ContactFooter from '@/components/ContactFooter';

export default async function CookiePolicyPage({
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
              {isTr ? 'Çerez Politikası' : 'Cookie Policy'}
            </h1>
            <p className="text-text/80 mb-8">
              {isTr
                ? 'Son güncelleme: 25 Mart 2026'
                : 'Last updated: March 25, 2026'}
            </p>

            <div className="space-y-6 text-text/90 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '1. Kapsam' : '1. Scope'}
                </h2>
                <p>
                  {isTr
                    ? 'Bu site form üzerinden kişisel veri toplamaz. Site, bilgilendirme amaçlıdır ve kullanıcıyı telefon/WhatsApp iletişimine yönlendirir.'
                    : 'This site does not collect personal data through web forms. It is informational and directs users to phone or WhatsApp contact.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '2. Kullanılan Çerez Türleri' : '2. Types of Cookies Used'}
                </h2>
                <p>
                  {isTr
                    ? 'Site işlevselliği ve güvenliği için teknik olarak zorunlu olabilecek çerezler veya benzer teknolojiler kullanılabilir.'
                    : 'Technically necessary cookies or similar technologies may be used for site functionality and security.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '3. Kullanılmayan Çerezler' : '3. Cookies Not Used'}
                </h2>
                <p>
                  {isTr
                    ? 'Reklam, yeniden hedefleme veya kullanıcı profilleme amacıyla üçüncü taraf pazarlama çerezleri kullanılmamaktadır.'
                    : 'Third-party marketing cookies for advertising, retargeting, or user profiling are not used.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '4. Tarayıcı Ayarları' : '4. Browser Controls'}
                </h2>
                <p>
                  {isTr
                    ? 'Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Çerezlerin devre dışı bırakılması bazı teknik fonksiyonları etkileyebilir.'
                    : 'You can delete or block cookies in your browser settings. Disabling cookies may affect certain technical functions.'}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isTr ? '5. Güncellemeler' : '5. Updates'}
                </h2>
                <p>
                  {isTr
                    ? 'Bu politika gerektiğinde güncellenebilir. Güncel metin her zaman bu sayfada yayınlanır.'
                    : 'This policy may be updated when needed. The latest version is always published on this page.'}
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
