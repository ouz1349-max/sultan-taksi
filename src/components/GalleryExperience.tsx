"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFooter from "./ContactFooter";

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

function GalleryFigure({
  item,
  onOpen,
  priority = false,
}: {
  item: GalleryItem;
  onOpen: () => void;
  priority?: boolean;
}) {
  return (
    <figure className="group flex flex-col h-full">
      <button 
        type="button" 
        onClick={onOpen} 
        className="block w-full text-left" 
        aria-label={item.alt}
      >
        <div className="relative overflow-hidden rounded-[1.5rem] bg-white/5 shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(234,179,8,0.08)] ring-1 ring-white/5">
          <div className="relative aspect-[4/3] w-full bg-[#0d1017]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={priority}
            />
          </div>
          <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:border-gold/50 group-hover:text-gold">
            <Expand size={16} strokeWidth={2.5} />
          </div>
        </div>
      </button>
      {item.caption && (
        <figcaption className="mt-5 text-[0.95rem] leading-7 text-text/70 px-2 flex-grow">
          {item.caption}
        </figcaption>
      )}
    </figure>
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
  const allImages = useMemo(() => [...exteriorShots, ...interiorShots, ...wideShots], [exteriorShots, interiorShots, wideShots]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

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
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft" && canGoPrev) {
        setDirection(-1);
        setActiveIndex((current) => (current === null ? current : Math.max(current - 1, 0)));
      }
      if (event.key === "ArrowRight" && canGoNext) {
        setDirection(1);
        setActiveIndex((current) => (current === null ? current : Math.min(current + 1, allImages.length - 1)));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, canGoPrev, canGoNext, allImages.length]);

  const step = (delta: number) => {
    setDirection(delta);
    setActiveIndex((current) => {
      if (current === null) return current;
      const next = current + delta;
      if (next < 0 || next >= allImages.length) return current;
      return next;
    });
  };

  const interiorStart = exteriorShots.length;
  const wideStart = exteriorShots.length + interiorShots.length;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <main className="site-shell bg-bg-secondary pt-32 pb-24">
      {/* Header Section */}
      <section className="container mx-auto max-w-6xl px-6 pb-20 text-center">
        <p className="section-kicker mb-4 mx-auto">{kicker}</p>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[4rem]">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text/76">{intro}</p>
      </section>

      {/* Exterior Shots */}
      {exteriorShots.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-12 text-center md:text-left border-b border-white/5 pb-8">
            <p className="section-kicker mb-3 md:mx-0 mx-auto">{exteriorTitle}</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white mb-4">
              Ortama Uyum Sağlayan Tasarım
            </h2>
            <p className="max-w-2xl text-base leading-8 text-text/74 mx-auto md:mx-0">
              {exteriorIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {exteriorShots.map((item, index) => (
              <GalleryFigure
                key={item.src}
                item={item}
                onOpen={() => {
                  setDirection(0);
                  setActiveIndex(index);
                }}
                priority={index < 2}
              />
            ))}
          </div>
        </section>
      )}

      {/* Interior Shots */}
      {interiorShots.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-12 text-center md:text-left border-b border-white/5 pb-8">
            <p className="section-kicker mb-3 md:mx-0 mx-auto">{interiorBadge}</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white mb-4">
              {interiorTitle}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-text/74 mx-auto md:mx-0">
              {interiorIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {interiorShots.map((item, index) => (
              <GalleryFigure
                key={item.src}
                item={item}
                onOpen={() => {
                  setDirection(0);
                  setActiveIndex(interiorStart + index);
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Wide Shots */}
      {wideShots.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 pb-12">
          <div className="mb-12 text-center md:text-left border-b border-white/5 pb-8">
            <p className="section-kicker mb-3 md:mx-0 mx-auto">{finalTitle}</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white mb-4">
              Her Noktada Görünürlük
            </h2>
            <p className="max-w-2xl text-base leading-8 text-text/74 mx-auto md:mx-0">
              {finalIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {wideShots.map((item, index) => (
              <GalleryFigure
                key={item.src}
                item={item}
                onOpen={() => {
                  setDirection(0);
                  setActiveIndex(wideStart + index);
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Fullscreen Overlay Modal */}
      <AnimatePresence>
        {activeIndex !== null && activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md"
          >
            <button type="button" onClick={() => setActiveIndex(null)} className="absolute inset-0 z-[120] h-full w-full" aria-label={locale === "tr" ? "Görseli kapat" : "Close image"} />

            <div className="absolute inset-0 z-[121] flex items-center justify-center px-4 py-8 md:px-12 md:py-12 pointer-events-none">
              <button
                type="button"
                onClick={() => step(-1)}
                disabled={!canGoPrev}
                className="mr-4 hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-gold/50 hover:text-gold hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-20 md:inline-flex pointer-events-auto"
                aria-label={locale === "tr" ? "Önceki görsel" : "Previous image"}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="w-full max-w-5xl flex flex-col items-center pointer-events-auto">
                <div className="relative w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0b0d13] shadow-[0_30px_90px_rgba(0,0,0,0.65)] md:rounded-[1.75rem]">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="absolute right-3 top-3 z-[122] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-gold/50 hover:text-gold hover:bg-black/90 md:right-4 md:top-4"
                    aria-label={locale === "tr" ? "Kapat" : "Close"}
                  >
                    <X size={20} />
                  </button>
                  
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;
                      if (swipe && offset.x > 0 && canGoPrev) {
                        step(-1);
                      } else if (swipe && offset.x < 0 && canGoNext) {
                        step(1);
                      }
                    }}
                    className="relative aspect-[4/3] w-full md:aspect-[16/10] cursor-grab active:cursor-grabbing touch-pan-y"
                  >
                    <Image 
                      src={activeImage.src} 
                      alt={activeImage.alt} 
                      fill 
                      unoptimized 
                      className="object-contain pointer-events-none select-none" 
                      sizes="100vw" 
                      priority 
                    />
                  </motion.div>
                </div>
                {activeImage.caption ? (
                  <motion.p 
                    key={`caption-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 max-w-3xl text-center text-[0.95rem] leading-7 text-white/80 md:text-base"
                  >
                    {activeImage.caption}
                  </motion.p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => step(1)}
                disabled={!canGoNext}
                className="ml-4 hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-gold/50 hover:text-gold hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-20 md:inline-flex pointer-events-auto"
                aria-label={locale === "tr" ? "Sonraki görsel" : "Next image"}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactFooter />
    </main>
  );
}
