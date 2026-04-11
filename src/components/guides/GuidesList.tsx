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
      <div className="mb-8 border-b border-white/[0.07] pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="section-kicker mb-2">{isTr ? 'Tüm Yazılar' : 'All Guides'}</p>
          <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-white md:text-[2.2rem]">
            {isTr ? 'Konulara göre keşfedin' : 'Explore by topics'}
          </h2>
        </div>
        
        {/* Kategori Filtre Butonları */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-gold text-black'
                : 'bg-white/[0.05] text-text/60 hover:bg-white/[0.1] hover:text-white'
            }`}
          >
            {isTr ? 'Tümü' : 'All'}
          </button>
          <button
            onClick={() => setActiveCategory('routes')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === 'routes'
                ? 'bg-gold text-black'
                : 'bg-white/[0.05] text-text/60 hover:bg-white/[0.1] hover:text-white'
            }`}
          >
            {isTr ? 'Ulaşım & Rota' : 'Route Guides'}
          </button>
          <button
            onClick={() => setActiveCategory('local')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === 'local'
                ? 'bg-gold text-black'
                : 'bg-white/[0.05] text-text/60 hover:bg-white/[0.1] hover:text-white'
            }`}
          >
            {isTr ? 'Şehir Rehberi' : 'City Guides'}
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGuides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} locale={locale} />
        ))}
      </div>
    </>
  );
}
