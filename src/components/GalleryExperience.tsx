"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryExperienceProps = {
  locale: string;
  title: string;
  kicker: string;
  intro: string;
  exteriorTitle: string;
  exteriorIntro: string;
  exteriorShots: GalleryItem[];
  interiorBadge: string;
  interiorTitle: string;
  interiorIntro: string;
  interiorShots: GalleryItem[];
  finalTitle: string;
  finalIntro: string;
  wideShots: GalleryItem[];
};

function GalleryImageCard({
  item,
  onOpen,
  aspectClass,
  priority = false,
}: {
  item: GalleryItem;
  onOpen: () => void;
  aspectClass: string;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full text-left"
      aria-label={item.alt}
    >
      <div className="relative overflow-hidden rounded-[1.35rem] border border-gold/10 bg-black/18">
        <div className={`relative ${aspectClass}`}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={priority}
          />
        </div>
        <div className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-black/50 text-white backdrop-blur-md transition-colors group-hover:border-gold/35 group-hover:text-gold">
          <Expand size={17} />
        </div>
      </div>
      {item.caption ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-text/70">
          {item.caption}
        </p>
      ) : null}
    </button>
  );
}

export default function GalleryExperience({
  locale,
  title,
  kicker,
  intro,
  exteriorTitle,
  exteriorIntro,
  exteriorShots,
  interiorBadge,
  interiorTitle,
  interiorIntro,
  interiorShots,
  finalTitle,
  finalIntro,
  wideShots,
}: GalleryExperienceProps) {
  const allImages = useMemo(
    () => [...exteriorShots, ...interiorShots, ...wideShots],
    [exteriorShots, interiorShots, wideShots]
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = activeIndex === null ? null : allImages[activeIndex];
  const canGoPrev = activeIndex !== null && activeIndex > 0;
  const canGoNext = activeIndex !== null && activeIndex < allImages.length - 1;

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft" && canGoPrev) {
        setActiveIndex((current) =>
          current === null ? current : Math.max(current - 1, 0)
        );
      }

      if (event.key === "ArrowRight" && canGoNext) {
        setActiveIndex((current) =>
          current === null
            ? current
            : Math.min(current + 1, allImages.length - 1)
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, canGoPrev, canGoNext, allImages.length]);

  const step = (delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      const next = current + delta;
      if (next < 0 || next >= allImages.length) return current;
      return next;
    });
  };

  const interiorStart = exteriorShots.length;
  const wideStart = exteriorShots.length + interiorShots.length;

  return (
    <main className="site-shell bg-bg-secondary pt-36 pb-24">
      <section className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="section-kicker mb-4">{kicker}</p>
          <h1 className="max-w-[11ch] font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-white md:text-[4.1rem]">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-text/76 md:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="container mx-auto mt-18 max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker mb-4">{exteriorTitle}</p>
          <p className="text-base leading-8 text-text/72 md:text-lg">
            {exteriorIntro}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {exteriorShots.map((item, index) => (
            <article
              key={item.src}
              className="rounded-[1.8rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4"
            >
              <GalleryImageCard
                item={item}
                onOpen={() => setActiveIndex(index)}
                aspectClass="aspect-[16/10]"
                priority={index === 0}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-20 max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker mb-4">{interiorBadge}</p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-white md:text-[3rem]">
            {interiorTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-text/72 md:text-lg">
            {interiorIntro}
          </p>
        </div>

        <div className="grid gap-5">
          {interiorShots.map((item, index) => (
            <article
              key={item.src}
              className="rounded-[1.8rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4"
            >
              <GalleryImageCard
                item={item}
                onOpen={() => setActiveIndex(interiorStart + index)}
                aspectClass="aspect-[16/10] md:aspect-[16/8]"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-20 max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker mb-4">{finalTitle}</p>
          <p className="text-base leading-8 text-text/72 md:text-lg">
            {finalIntro}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {wideShots.map((item, index) => (
            <article
              key={item.src}
              className="rounded-[1.8rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4"
            >
              <GalleryImageCard
                item={item}
                onOpen={() => setActiveIndex(wideStart + index)}
                aspectClass="aspect-[16/10]"
              />
            </article>
          ))}
        </div>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-[120] bg-black/88 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute inset-0 z-[120] h-full w-full"
            aria-label={locale === "tr" ? "Görseli kapat" : "Close image"}
          />

          <div className="absolute inset-0 z-[121] flex items-center justify-center px-3 py-10 md:px-10 md:py-16">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={!canGoPrev}
              className="mr-2 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/14 bg-black/55 text-white transition-colors hover:border-gold/35 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 md:inline-flex"
              aria-label={locale === "tr" ? "Önceki görsel" : "Previous image"}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="w-full max-w-6xl">
              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0b0d13] shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:rounded-[1.75rem]">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-2 top-2 z-[122] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-black/55 text-white transition-colors hover:border-gold/35 hover:text-gold md:right-3 md:top-3 md:h-11 md:w-11"
                  aria-label={locale === "tr" ? "Kapat" : "Close"}
                >
                  <X size={18} />
                </button>
                <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                  <Image
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
              {activeImage.caption ? (
                <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-text/76 md:text-base">
                  {activeImage.caption}
                </p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              disabled={!canGoNext}
              className="ml-2 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/14 bg-black/55 text-white transition-colors hover:border-gold/35 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 md:inline-flex"
              aria-label={locale === "tr" ? "Sonraki görsel" : "Next image"}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
