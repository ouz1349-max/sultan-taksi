'use client';

import { useState } from 'react';
import type { GuideEntry } from '@/data/guides';
import GuideCard from '@/components/guides/GuideCard';

type CategoryType = 'all' | 'routes' | 'local';

export default function GuidesList({
  guides,
  locale,
  isTr,
}: {
  guides: GuideEntry[];
  locale: string;
  isTr: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredGuides = guides.filter((guide) => {
    if (activeCategory === 'all') return true;
    return guide.category === activeCategory;
  });

  return (
    <>
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker mb-2">{isTr ? 'Tüm Yazılar' : 'All Guides'}</p>
          <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-white md:text-[2.2rem]">
            {isTr ? 'Konulara göre keşfedin' : 'Explore by topics'}
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-gold text-black'
                : 'border border-white/10 text-text/60 hover:border-gold/30 hover:text-white'
            }`}
          >
            {isTr ? 'Tümü' : 'All'}
          </button>
          <button
            onClick={() => setActiveCategory('routes')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === 'routes'
                ? 'bg-gold text-black'
                : 'border border-white/10 text-text/60 hover:border-gold/30 hover:text-white'
            }`}
          >
            {isTr ? 'Ulaşım & Rota' : 'Route Guides'}
          </button>
          <button
            onClick={() => setActiveCategory('local')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === 'local'
                ? 'bg-gold text-black'
                : 'border border-white/10 text-text/60 hover:border-gold/30 hover:text-white'
            }`}
          >
            {isTr ? 'Şehir Rehberi' : 'City Guides'}
          </button>
        </div>
      </div>

      <div className="grid gap-x-12 gap-y-20 md:grid-cols-2">
        {filteredGuides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} locale={locale} />
        ))}
      </div>
    </>
  );
}
