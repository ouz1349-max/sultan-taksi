import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from "@/i18n/config";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';
  
  return {
    title: isTr 
      ? "Sultan Taksi Adana | 7/24 Güvenli Transfer | 0530 222 77 95"
      : "Sultan Taxi Adana | 24/7 Safe Transfer | +90 530 222 77 95",
    description: isTr
      ? "Adana'nın güvenilir taksi hizmeti. 7/24 kesintisiz transfer, 4.9 Google puanı. Hemen ara: 0530 222 77 95"
      : "Adana's trusted taxi service. 24/7 transfer, 4.9 Google rating. Call now: +90 530 222 77 95",
    alternates: {
      canonical: isTr ? '/' : '/en',
      languages: {
        'tr': '/',
        'en': '/en'
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-background text-text selection:bg-primary/30 selection:text-accent antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
