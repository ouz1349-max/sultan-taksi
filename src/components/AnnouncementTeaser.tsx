"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

const AnnouncementTeaser = () => {
  const locale = useLocale();
  const t = useTranslations("announcementTeaser");

  return (
    <section className="relative z-20 -mt-12 px-6 pb-8 md:-mt-16 md:pb-14">
      <div className="mx-auto max-w-5xl">
        <div className="glass-panel rounded-[30px] border border-gold/16 px-5 py-5 md:px-8 md:py-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker mb-4">{t("kicker")}</p>
              <h2 className="font-display text-[1.9rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.4rem]">
                {t("title")}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-text/78 md:text-base md:leading-8">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <div className="rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-gold/80">
                {t("date")}
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href="/duyurular"
                  locale={locale}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-gold-light"
                >
                  {t("cta")}
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/galeri"
                  locale={locale}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/20 px-5 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-black"
                >
                  {t("secondaryCta")}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementTeaser;

