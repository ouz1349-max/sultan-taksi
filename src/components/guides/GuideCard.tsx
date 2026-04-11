import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import type { GuideEntry } from '@/data/guides';
import { formatGuideDate } from '@/data/guides';

type GuideCardProps = {
  guide: GuideEntry;
  locale: string;
  featured?: boolean;
  compact?: boolean;
};

export default function GuideCard({ guide, locale, featured = false, compact = false }: GuideCardProps) {
  const content = locale === 'tr' ? guide.tr : guide.en;
  const href = `/${locale}/rehberler/${guide.slug}`;
  const dateStr = formatGuideDate(guide.publishedAt, locale);

  /* ── FEATURED: Tam genişlik, görsel sağda metin solda ── */
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/[0.07] transition-colors hover:border-gold/20">
        <Link href={href} className="grid lg:grid-cols-[1fr_1fr] min-h-[420px]">
          {/* Sol: İçerik */}
          <div className="flex flex-col justify-between p-8 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 font-semibold uppercase tracking-widest text-gold/90">
                  <Tag size={10} />
                  {content.categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 text-text/45">
                  <Clock size={11} />
                  {content.readTime}
                </span>
                <span className="text-text/35">{dateStr}</span>
              </div>

              <h2 className="font-display text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-white lg:text-[2.6rem]">
                {content.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-text/65 line-clamp-3">{content.excerpt}</p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-gold">
              {locale === 'tr' ? 'Rehberi oku' : 'Read guide'}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Sağ: Görsel */}
          <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden">
            <Image
              src={guide.heroImage}
              alt={content.heroImageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090b10]/80 via-[#090b10]/20 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10]/60 to-transparent lg:hidden" />
          </div>
        </Link>
      </article>
    );
  }

  /* ── COMPACT: Yatay tek satır liste öğesi ── */
  if (compact) {
    return (
      <article className="group flex items-start gap-5 border-t border-white/[0.06] py-5 transition-colors hover:border-gold/15">
        <Link href={href} className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={guide.heroImage}
            alt={content.heroImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="80px"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gold/75 mb-1">
            {content.categoryLabel}
          </p>
          <h3 className="font-display text-[1.1rem] font-bold leading-[1.2] tracking-[-0.03em] text-white line-clamp-2">
            <Link href={href} className="transition-colors hover:text-gold">
              {content.title}
            </Link>
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-[0.72rem] text-gold/70 font-semibold">
            {locale === 'tr' ? 'Devamını oku' : 'Continue reading'}
            <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </article>
    );
  }

  /* ── STANDART: Dikey kartlar (grid içinde) ── */
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.6rem] bg-white/[0.03] border border-white/[0.06] transition-all hover:border-gold/20 hover:bg-white/[0.05]">
      <Link href={href} className="block relative aspect-[16/10] overflow-hidden">
        <Image
          src={guide.heroImage}
          alt={content.heroImageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b10]/70 to-transparent" />
        {/* Category chip üstte */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-gold/90 border border-gold/20">
            {content.categoryLabel}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-[0.72rem] text-text/45 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {content.readTime}
          </span>
          <span className="h-px w-3 bg-text/20" />
          <time dateTime={guide.publishedAt}>{dateStr}</time>
        </div>

        <h3 className="font-display text-[1.5rem] font-bold leading-[1.1] tracking-[-0.04em] text-white flex-1">
          <Link href={href} className="transition-colors hover:text-gold">
            {content.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-7 text-text/62 line-clamp-2">{content.excerpt}</p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold/90 transition-all hover:text-gold group-hover:gap-3"
        >
          {locale === 'tr' ? 'Devamını oku' : 'Continue reading'}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
