type GuideTrustStripProps = {
  author: string;
  authorRole: string;
  reviewedBy?: string;
  businessNote?: string;
  editorialLabel: string;
  reviewLabel: string;
  businessLabel: string;
};

export default function GuideTrustStrip({
  author,
  authorRole,
  reviewedBy,
  businessNote,
  editorialLabel,
  reviewLabel,
  businessLabel,
}: GuideTrustStripProps) {
  const secondaryNotes = [
    reviewedBy ? `${reviewLabel}: ${reviewedBy}` : null,
    businessNote ? `${businessLabel}: ${businessNote}` : null,
  ].filter(Boolean);

  return (
    <section className="max-w-2xl text-sm leading-7 text-text/62">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold/76">{editorialLabel}</p>
      <p className="mt-3 text-lg font-semibold text-white">{author}</p>
      <p className="mt-1">{authorRole}</p>
      {secondaryNotes.length ? <p className="mt-3 text-text/56">{secondaryNotes.join(' • ')}</p> : null}
    </section>
  );
}
