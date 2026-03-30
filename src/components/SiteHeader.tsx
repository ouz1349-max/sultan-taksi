"use client";

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MessageCircle } from 'lucide-react';

const SiteHeader = () => {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-5xl">
        <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 md:px-6">
          <Link href="/" locale={locale} className="font-display text-lg font-bold tracking-[-0.03em] text-gold md:text-[1.75rem]">
            {t('fullName')}
          </Link>

          <a
            href="https://wa.me/905302227795"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[42px] items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-gold-light md:inline-flex"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;

