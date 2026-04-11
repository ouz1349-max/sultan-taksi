import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site-url';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Kenan Evren Sultan Taksi',
  description: 'Kenan Evren çevresinde yaklaşık 2 km hizmet alanında güvenilir 7/24 taksi hizmeti.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Kenan Evren Sultan Taksi',
    description: 'Kenan Evren çevresinde yaklaşık 2 km hizmet alanında güvenilir 7/24 taksi hizmeti.',
    url: siteUrl,
    siteName: 'Kenan Evren Sultan Taksi',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kenan Evren Sultan Taksi aracı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenan Evren Sultan Taksi',
    description: 'Kenan Evren çevresinde yaklaşık 2 km hizmet alanında güvenilir 7/24 taksi hizmeti.',
    images: ['/images/hero.webp'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
