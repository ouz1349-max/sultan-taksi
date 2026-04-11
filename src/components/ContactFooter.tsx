"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';

const ContactFooter = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden border-t border-gold/10 bg-bg-primary pt-24 pb-12">
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 rounded-[2rem] border border-gold/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.3fr_1fr_1.1fr] lg:gap-10 xl:gap-14">
          <div>
            <p className="section-kicker mb-4">{t('common.brand')}</p>
            <h2 className="max-w-md font-display text-[2.5rem] font-bold leading-[0.98] tracking-[-0.05em] text-white md:text-[3.7rem]">
              {t('common.brand')}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-text/70 md:text-lg">
              {t('footer.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${t('common.phone').replace(/\s/g, '')}`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-light"
              >
                <Phone size={16} />
                {t('hero.ctaCall')}
              </a>
              <a
                href="https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/22 px-5 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-black"
              >
                <MapPin size={16} />
                Google Maps
              </a>
            </div>
          </div>

          <div className="border-t border-gold/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/75">{t('hero.ctaCall')}</p>
            <div className="space-y-6">
              <a href={`tel:${t('common.phone').replace(/\s/g, '')}`} className="flex items-center gap-3 text-white transition-colors hover:text-gold">
                <Phone size={18} className="text-gold" />
                <span className="text-2xl font-bold tracking-[-0.03em]">{t('common.phone')}</span>
              </a>
              <div className="flex items-start gap-4 text-text/72">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-gold" />
                <span className="leading-7">{t('common.address')}</span>
              </div>
              <a
                href="https://wa.me/905302227795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text/82 transition-colors hover:text-gold"
              >
                <MessageCircle size={16} className="text-gold" />
                {t('hero.ctaWhatsapp')}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-8 xl:gap-14 border-t border-gold/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-14">
            <div className="flex flex-col gap-10 flex-1">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/75">{t('footer.languageTitle')}</p>
                <div className="space-y-4">
                  <Link
                    href={pathname}
                    locale="tr"
                    className={`flex items-center gap-2 text-sm font-bold tracking-[0.22em] transition-all ${locale === 'tr' ? 'text-gold' : 'text-text/45 hover:text-text/85'}`}
                  >
                    <div className={`h-2 w-2 rounded-full ${locale === 'tr' ? 'bg-gold' : 'border border-text/20 bg-transparent'}`} />
                    {t('footer.langTr')}
                  </Link>
                  <Link
                    href={pathname}
                    locale="en"
                    className={`flex items-center gap-2 text-sm font-bold tracking-[0.22em] transition-all ${locale === 'en' ? 'text-gold' : 'text-text/45 hover:text-text/85'}`}
                  >
                    <div className={`h-2 w-2 rounded-full ${locale === 'en' ? 'bg-gold' : 'border border-text/20 bg-transparent'}`} />
                    {t('footer.langEn')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/75">{t('footer.pagesTitle')}</p>
              <div className="space-y-4">
                <Link href="/" locale={locale} className="block text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.home')}
                </Link>
                <Link href="/galeri" locale={locale} className="block text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.gallery')}
                </Link>
                <Link href="/rehberler" locale={locale} className="block text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.guides')}
                </Link>
                <Link href="/hakkimizda" locale={locale} className="block text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.about')}
                </Link>
                <Link href="/duyurular" locale={locale} className="block text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.announcements')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col-reverse items-center justify-between gap-5 pt-8 md:mt-6 md:flex-row text-center md:text-left text-[0.75rem] font-semibold text-text/50">
          <p>© {new Date().getFullYear()} {t('common.brand')}. {t('footer.rights')}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <Link href="/kvkk" locale={locale} className="transition-colors hover:text-gold">
              {t('footer.kvkk')}
            </Link>
            <Link href="/cerez-politikasi" locale={locale} className="transition-colors hover:text-gold">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
