// Safe fallback: if no production host is configured, do not emit a preview-domain canonical.
const FALLBACK_SITE_URL = 'https://example.invalid';

function normalizeSiteUrl(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

export function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;

  if (!configuredSiteUrl && process.env.VERCEL_ENV === 'production') {
    throw new Error('Production deploy requires NEXT_PUBLIC_SITE_URL or SITE_URL.');
  }

  const siteUrl = configuredSiteUrl || FALLBACK_SITE_URL;
  return normalizeSiteUrl(siteUrl);
}
