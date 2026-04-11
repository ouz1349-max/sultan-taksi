import { formatGuideDate } from '@/data/guides';

type GuideMetaRowProps = {
  locale: string;
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  compact?: boolean;
};

export default function GuideMetaRow({
  locale,
  categoryLabel,
  readTime,
  publishedAt,
  updatedAt,
  compact = false,
}: GuideMetaRowProps) {
  const tone = compact ? 'text-[0.78rem]' : 'text-sm';

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-text/56 ${tone}`}>
      <span className="font-semibold uppercase tracking-[0.16em] text-gold/78">
        {categoryLabel}
      </span>
      <span className="h-1 w-1 rounded-full bg-gold/45" />
      <time dateTime={publishedAt}>
        {formatGuideDate(publishedAt, locale)}
      </time>
      {updatedAt !== publishedAt ? (
        <>
          <span className="h-1 w-1 rounded-full bg-gold/35" />
          <time dateTime={updatedAt}>{locale === 'tr' ? `Güncellendi ${formatGuideDate(updatedAt, locale)}` : `Updated ${formatGuideDate(updatedAt, locale)}`}</time>
        </>
      ) : null}
      <span className="h-1 w-1 rounded-full bg-gold/35" />
      <span>
        {readTime}
      </span>
    </div>
  );
}
