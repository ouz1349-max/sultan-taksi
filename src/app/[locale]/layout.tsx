import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileActionBar from '@/components/MobileActionBar';
import SiteHeader from '@/components/SiteHeader';
import { Playfair_Display, Barlow } from 'next/font/google';
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-barlow',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'tr' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${barlow.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          {children}
          <WhatsAppButton />
          <MobileActionBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
