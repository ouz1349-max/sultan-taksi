// Safe fallback: if no production host is configured, do not emit a preview-domain canonical.
const FALLBACK_SITE_URL = 'https://example.invalid';

function normalizeSiteUrl(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || FALLBACK_SITE_URL;
  return normalizeSiteUrl(siteUrl);
}
