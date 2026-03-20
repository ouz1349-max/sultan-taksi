"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: "Ahmet Y.",
      comment: "Havaalanı transferi için kullandım. Tam vaktinde geldiler, araç çok temizdi. Adana'nın en iyisi.",
      rating: 5,
    },
    {
      name: "Zeynep K.",
      comment: "Gece geç saatte çağırmama rağmen 5 dakikada kapıdaydılar. Güvenilir ve nazik şoförleri var.",
      rating: 5,
    },
    {
      name: "Michael B.",
      comment: "Best taxi service in Adana! Very professional and helpful for foreign visitors. 24/7 support is real.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 bg-secondary-bg relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            className="text-text/60 font-sans tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-background border border-primary/20 rounded-2xl relative group hover:border-primary/50 transition-colors gold-glow"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-text/80 font-sans italic mb-8 leading-relaxed">
                "{testi.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-serif text-primary font-bold">
                  {testi.name[0]}
                </div>
                <div className="font-serif text-accent">{testi.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* TODO: Replace with real comments from Google */}
      </div>
    </section>
  );
}
