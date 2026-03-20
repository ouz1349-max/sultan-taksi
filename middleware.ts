import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'tr',
  
  // Don't use a prefix for the default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en)/:path*']
};
