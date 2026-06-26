import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // Default open first

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-industrial-card relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-safety-orange/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-industrial-gray border border-industrial-border px-3 py-1 rounded-full text-xs font-mono text-gray-400">
            <HelpCircle className="h-3 w-3 text-safety-orange" />
            <span>Tanya & Jawab</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight" id="faq-title">
            FAQ <span className="text-safety-orange">Seputar Layanan</span> Las
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Menjawab keraguan Anda. Berikut informasi lengkap mengenai sistem kerja, survey lokasi, penjaminan garansi, dan cakupan wilayah proyek kami.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-industrial-dark border-safety-orange/40 orange-glow' 
                    : 'bg-industrial-dark border-industrial-border/60 hover:border-safety-orange/30'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono text-safety-orange font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-industrial-gray border border-industrial-border transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180 text-safety-orange bg-safety-orange/10 border-safety-orange/20' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Accordion Collapse Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-industrial-border/20">
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? */}
        <div className="mt-12 text-center p-6 bg-industrial-dark border border-industrial-border rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs sm:text-sm text-gray-400">
            Ada pertanyaan lain yang belum terjawab? Hubungi tim admin kami secara langsung.
          </p>
          <a
            href="tel:+6282245263844"
            className="text-xs sm:text-sm font-bold text-safety-orange hover:text-safety-light flex items-center space-x-1.5 transition-colors"
          >
            <Sparkles className="h-4 w-4" />
            <span>Hubungi Call Center</span>
          </a>
        </div>

      </div>
    </section>
  );
}
