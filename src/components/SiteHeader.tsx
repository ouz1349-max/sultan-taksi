"use client";

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

const SiteHeader = () => {
  const common = useTranslations('common');
  const nav = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const navClass = (href: string) => {
    const target = href === '/' ? `/${locale}` : `/${locale}${href}`;
    const active = href === '/' ? pathname === target : pathname === target || pathname.startsWith(`${target}/`);

    return `text-sm font-semibold transition-colors ${active ? 'text-gold' : 'text-text/78 hover:text-gold'}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 md:px-6">
          <div className="flex items-center gap-8">
            <Link href="/" locale={locale} className="font-display text-lg font-bold tracking-[-0.03em] text-gold md:text-[1.75rem]">
              {common('fullName')}
            </Link>

            <nav className="hidden items-center gap-5 md:flex">
              <Link href="/" locale={locale} className={navClass('/')}>
                {nav('home')}
              </Link>
              <Link href="/galeri" locale={locale} className={navClass('/galeri')}>
                {nav('gallery')}
              </Link>
              <Link href="/rehberler" locale={locale} className={navClass('/rehberler')}>
                {nav('guides')}
              </Link>
              <Link href="/hakkimizda" locale={locale} className={navClass('/hakkimizda')}>
                {nav('about')}
              </Link>
              <Link href="/duyurular" locale={locale} className={navClass('/duyurular')}>
                {nav('announcements')}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
};

export default SiteHeader;
