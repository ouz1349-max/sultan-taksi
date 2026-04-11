"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type AccordionItemProps = {
  question: string;
  answer: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItemProps[];
  className?: string;
  itemClassName?: string;
  showNumbers?: boolean;
};

export default function Accordion({ items, className = "", itemClassName = "", showNumbers = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`overflow-hidden rounded-[2rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] transition-colors hover:border-gold/30 ${itemClassName}`}
          >
            <button
              onClick={() => toggleOpen(index)}
              className="group/btn flex w-full items-center justify-between gap-4 px-6 py-6 text-left outline-none transition-colors focus-visible:bg-gold/5 focus-visible:ring-2 focus-visible:ring-gold md:px-8 md:py-8"
              type="button"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4 md:items-center">
                {showNumbers && (
                  <span className="font-display text-2xl leading-none text-gold/35 transition-colors group-hover/btn:text-gold/50">
                    0{index + 1}
                  </span>
                )}
                <h3 className="text-lg font-medium leading-tight text-white/95 md:text-xl">
                  {item.question}
                </h3>
              </div>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <div className={`px-6 pb-6 text-base leading-8 text-text/75 md:px-8 md:pb-8 ${showNumbers ? 'md:pl-[5.25rem]' : ''}`}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
