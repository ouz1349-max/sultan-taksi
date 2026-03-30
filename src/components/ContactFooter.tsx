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
        <div className="grid gap-12 border-b border-gold/10 pb-14 lg:grid-cols-[1.25fr_0.95fr_0.8fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{t('common.brand')}</p>
            <h2 className="max-w-md font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-[3.1rem]">
              {t('common.brand')}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-text/70 md:text-lg">
              {t('footer.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-gold/24 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-black"
              >
                <MapPin size={16} />
                Google Maps
              </a>
              <a
                href="https://wa.me/905302227795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-gold/24 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-black"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/75">{t('hero.ctaCall')}</p>
            <div className="space-y-5 border-t border-gold/10 pt-5">
              <a href={`tel:${t('common.phone').replace(/\s/g, '')}`} className="flex items-center gap-3 text-white transition-colors hover:text-gold">
                <Phone size={18} className="text-gold" />
                <span className="text-2xl font-bold tracking-[-0.03em]">{t('common.phone')}</span>
              </a>
              <div className="flex items-start gap-3 text-text/72">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-gold" />
                <span className="leading-7">{t('common.address')}</span>
              </div>
              <a
                href="https://wa.me/905302227795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text/80 transition-colors hover:text-gold"
              >
                <MessageCircle size={16} className="text-gold" />
                {t('hero.ctaWhatsapp')}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/75">{t('footer.languageTitle')}</p>
              <div className="space-y-3 border-t border-gold/10 pt-5">
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

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/75">{t('footer.legalTitle')}</p>
              <div className="space-y-3 border-t border-gold/10 pt-5">
                <Link href="/duyurular" locale={locale} className="text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.announcements')}
                </Link>
                <Link href="/kvkk" locale={locale} className="text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.kvkk')}
                </Link>
                <Link href="/cerez-politikasi" locale={locale} className="text-sm font-semibold text-text/70 transition-colors hover:text-gold">
                  {t('footer.cookies')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-8 text-center text-[0.7rem] uppercase tracking-[0.28em] text-text/40">
          <p>© {new Date().getFullYear()} {t('common.brand')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

