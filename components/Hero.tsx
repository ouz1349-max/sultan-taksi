"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559297434-2d8a134e0828?q=80&w=2070&auto=format&fit=crop"
          alt="Adana Taxi"
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity grayscale scale-105"
        />
        {/* TODO: Replace with real photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-8xl font-serif text-primary tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("title")}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-text/80 max-w-2xl mx-auto font-sans font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="tel:05302227795"
              className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all gold-glow flex items-center gap-2"
            >
              <Phone size={20} className="group-hover:animate-bounce" />
              <span>{t("ctaCall")}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>

            <a
              href="https://wa.me/905302227795"
              className="group relative px-8 py-4 bg-secondary-bg text-accent border border-accent/30 font-bold rounded-full overflow-hidden transition-all flex items-center gap-2 hover:bg-accent hover:text-black"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
              <span>{t("ctaWhatsapp")}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
