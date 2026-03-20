"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function Counter({ value, decimals = 1 }: { value: number; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => 
    current.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function StatsCounter() {
  const t = useTranslations("Stats");

  const stats = [
    { value: 4.9, label: t("google"), decimals: 1 },
    { value: 22, label: t("reviews"), decimals: 0 },
    { value: 24, label: t("service"), decimals: 0, suffix: "/7" },
    { value: 15, label: t("regions"), decimals: 0, prefix: "+" },
  ];

  return (
    <section className="py-20 px-4 bg-background border-y border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-6xl font-serif text-primary">
                {stat.prefix}
                <Counter value={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-text/60 font-sans tracking-widest uppercase">
                {stat.label.split(' ').slice(1).join(' ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
