import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import ContactFooter from '@/components/ContactFooter';
import GuideCard from '@/components/guides/GuideCard';
import GuideMetaRow from '@/components/guides/GuideMetaRow';
import GuideTrustStrip from '@/components/guides/GuideTrustStrip';
import Accordion from '@/components/Accordion';
import { buildGuideArticleJsonLd, defaultOgImage } from '@/data/seo';
import { getGuideBySlug, getRelatedGuides, guides } from '@/data/guides';
import { getSiteUrl } from '@/lib/site-url';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return ['tr', 'en'].flatMap((locale) =>
    guides.map((guide) => ({
      locale,
      slug: guide.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) return {};

  const content = locale === 'tr' ? guide.tr : guide.en;

  return {
    title: `${content.title} | ${locale === 'tr' ? 'Rehberler' : 'Guides'} | Kenan Evren Sultan ${locale === 'tr' ? 'Taksi' : 'Taxi'}`,
    description: content.seoDescription,
    alternates: {
      canonical: `/${locale}/rehberler/${slug}`,
      languages: {
        tr: `/tr/rehberler/${slug}`,
        en: `/en/rehberler/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.seoDescription,
      url: `/${locale}/rehberler/${slug}`,
      type: 'article',
      images: [
        guide.ogImage
          ? {
              url: guide.ogImage,
              width: 1200,
              height: 630,
              alt: content.heroImageAlt,
            }
          : {
              ...defaultOgImage,
              alt: content.heroImageAlt,
            },
      ],
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const isTr = locale === 'tr';
  const content = isTr ? guide.tr : guide.en;
  const relatedGuides = getRelatedGuides(slug);
  const common = await getTranslations({ locale, namespace: 'common' });
  const siteUrl = getSiteUrl();

  const articleJsonLd = buildGuideArticleJsonLd({ siteUrl, locale, guide });
  const faqJsonLd = content.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main className="site-shell min-h-screen bg-bg-secondary pt-32">
      <article className="container mx-auto max-w-5xl px-6 pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

        <Link
          href={`/${locale}/rehberler`}
          className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-gold/14 px-4 py-2 text-sm font-semibold text-text/76 transition-colors hover:border-gold/20 hover:text-gold"
        >
          <ArrowLeft size={15} />
          {isTr ? 'Rehberlere dön' : 'Back to guides'}
        </Link>

        <header className="mt-8">
          <p className="section-kicker mb-4">{content.categoryLabel}</p>
          <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/70 md:text-lg text-balance">
            {content.intro}
          </p>
          <div className="mt-6">
            <GuideMetaRow
              locale={locale}
              categoryLabel={content.categoryLabel}
              readTime={content.readTime}
              publishedAt={guide.publishedAt}
              updatedAt={guide.updatedAt}
            />
          </div>
        </header>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/[0.05]">
          <div className="relative aspect-[16/8] md:aspect-[21/9]">
            <Image
              src={guide.heroImage}
              alt={content.heroImageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 80vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/60 to-transparent" />
          </div>
        </div>

        <section className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-16">
            {/* Primary Article Content */}
            <div className="space-y-10">
              <p className="text-lg leading-relaxed text-white md:text-xl font-medium tracking-tight border-b border-white/[0.05] pb-10">
                {content.heroLead}
              </p>
              
              <div className="space-y-12 pr-0 lg:pr-8">
                {content.sections.map((section) => (
                  <section key={section.title} className="max-w-3xl">
                    <h2 className="font-display text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text/65 md:text-lg">{section.body}</p>
                  </section>
                ))}
              </div>
            </div>

            {/* Featured Highlight Block */}
            {content.highlight ? (
              <div className="py-10 border-l-2 border-gold/30 pl-8 md:pl-10 bg-white/[0.01] rounded-r-2xl">
                <blockquote className="max-w-3xl text-lg font-medium leading-relaxed text-white/90 md:text-xl tracking-tight italic">
                  {content.highlight}
                </blockquote>
              </div>
            ) : null}

            {/* Stops / Guides Section */}
            {content.stops?.length ? (
              <section className="space-y-12">
                <div className="space-y-4">
                  <p className="section-kicker">{content.stopsTitle ?? (isTr ? 'ÖNE ÇIKAN DURAKLAR' : 'RECOMMENDED STOPS')}</p>
                  {content.stopsIntro ? <p className="max-w-2xl text-base leading-relaxed text-text/80 md:text-lg">{content.stopsIntro}</p> : null}
                </div>
                <div className="space-y-14">
                  {content.stops.map((stop, index) => (
                    <section key={stop.title} className="grid gap-6 md:grid-cols-[60px_1fr] items-baseline">
                      <span className="font-display text-4xl font-bold leading-none text-gold/20">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white md:text-2xl">{stop.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-text/60 md:text-base">{stop.description}</p>
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="sticky top-40 space-y-10">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm shadow-2xl">
              <GuideTrustStrip
                author={guide.author}
                authorRole={content.authorRole}
                reviewedBy={content.reviewedBy}
                businessNote={content.businessNote}
                editorialLabel={isTr ? 'Yayın' : 'Editorial'}
                reviewLabel={isTr ? 'Gözden geçirme' : 'Review'}
                businessLabel={isTr ? 'İşletme notu' : 'Business note'}
              />
            </div>
            
            {content.highlights?.length ? (
              <div className="rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-gold/60">{isTr ? 'HIZLI ÖZET' : 'QUICK HIGHLIGHTS'}</p>
                <ul className="space-y-4">
                  {content.highlights.map((item, i) => (
                    <li key={i} className="text-[0.8rem] leading-relaxed text-text/50 border-l border-gold/15 pl-4">{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </section>

        {/* Footer Content */}
        <div className="mt-20 space-y-20">
          {content.reasons?.length ? (
            <section className="pt-16 border-t border-white/[0.05]">
              <p className="section-kicker mb-6">{content.reasonsTitle ?? (isTr ? 'NEDEN BİZ?' : 'WHY US?')}</p>
              <div className="grid gap-8 md:grid-cols-3">
                {content.reasons.map((reason) => (
                  <p key={reason} className="text-sm leading-relaxed text-text/60 md:text-base">{reason}</p>
                ))}
              </div>
            </section>
          ) : null}

          <section className="rounded-3xl bg-white/[0.02] p-8 md:p-12 border border-white/[0.05]">
            <p className="section-kicker mb-4">{content.takeawayTitle ?? (isTr ? 'Kısa sonuç' : 'Quick takeaway')}</p>
            <p className="max-w-3xl text-lg leading-relaxed text-white md:text-2xl font-medium">{content.takeaway}</p>
            {content.disclaimer ? <p className="mt-6 text-xs leading-relaxed text-text/40 italic">{content.disclaimer}</p> : null}
          </section>

          {content.faqs?.length ? (
            <section>
              <p className="section-kicker mb-6">{isTr ? 'Sık sorulanlar' : 'Frequently asked'}</p>
              <Accordion items={content.faqs} />
            </section>
          ) : null}

          {relatedGuides.length ? (
            <section className="pt-16 border-t border-white/[0.05]">
              <div className="mb-10">
                <p className="section-kicker mb-3">{isTr ? 'Sonraki okuma' : 'Continue reading'}</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {isTr ? 'İlgili rehberler' : 'Related guides'}
                </h2>
              </div>
              <div className="grid gap-10 lg:grid-cols-2">
                {relatedGuides.slice(0, 2).map((relatedGuide) => (
                  <GuideCard key={relatedGuide.slug} guide={relatedGuide} locale={locale} compact />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <section className="mt-24 rounded-[2.5rem] bg-gold p-8 md:p-16 text-black overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{content.ctaTitle}</h2>
              <p className="mt-4 max-w-2xl text-lg font-medium opacity-80">{content.ctaBody}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${common('phone').replace(/\s/g, '')}`}
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-black px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-xl"
              >
                <Phone size={20} />
                {isTr ? 'Hemen ara' : 'Call now'}
              </a>
              <Link
                href={`/${locale}/duyurular`}
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full border-2 border-black/10 px-8 py-4 text-base font-bold text-black transition-colors hover:bg-black/5"
              >
                {isTr ? 'Duyuruları gör' : 'View announcements'}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <ContactFooter />
    </main>
  );
}
