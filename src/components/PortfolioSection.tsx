import React, { useState } from 'react';
import { PORTFOLIO } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ArrowLeft, ArrowRight, Sparkles, Building2, Flame } from 'lucide-react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'Semua',
    'Pagar',
    'Kanopi',
    'Railing',
    'Tangga',
    'Bracket TV',
    'Videotron',
    'Billboard',
    'Struktur Baja',
    'Proyek Gedung',
  ];

  // Filter portfolio list based on category
  const filteredPortfolio = selectedCategory === 'Semua'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    // Find index in current filtered list for navigation
    const idx = filteredPortfolio.findIndex(item => item.id === id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPortfolio.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredPortfolio[activeLightboxIndex] : null;

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-industrial-dark relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-safety-orange/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-industrial-gray border border-industrial-border px-3 py-1 rounded-full text-xs font-mono text-gray-400">
            <Building2 className="h-3 w-3 text-safety-orange" />
            <span>Dokumentasi Proyek Riil</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight" id="portfolio-title">
            Galeri Proyek <span className="text-safety-orange">Bengkel Las</span> Surabaya
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Kumpulan hasil kerja nyata tim kami di lapangan. Menggunakan material berkualitas premium dengan pengerjaan las super rapi, kuat, dan presisi.
          </p>
        </div>

        {/* Filter Categories Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="portfolio-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-safety-orange text-white border-safety-orange shadow-md orange-glow'
                  : 'bg-industrial-card text-gray-400 border-industrial-border hover:text-white hover:border-safety-orange/40'
              }`}
              id={`portfolio-chip-${cat.toLowerCase().replace(' ', '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item.id)}
                className="bg-industrial-card border border-industrial-border/60 hover:border-safety-orange/30 rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover visual details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <span className="bg-safety-orange text-white text-[10px] font-bold font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                        <ZoomIn className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 space-y-2 relative bg-industrial-card">
                  <span className="text-[10px] text-safety-orange tracking-widest uppercase font-mono font-bold block">
                    PROYEK {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-safety-orange transition-colors duration-200 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state portfolio */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-12 bg-industrial-card border border-industrial-border rounded-2xl">
            <p className="text-gray-400 text-base mb-1">Dokumentasi belum tersedia.</p>
            <p className="text-gray-500 text-xs">Tim kami sedang mendokumentasikan proyek "{selectedCategory}" terbaru kami.</p>
            <button
              onClick={() => setSelectedCategory('Semua')}
              className="mt-4 text-xs font-semibold text-safety-orange hover:underline"
            >
              Kembali ke Semua Kategori
            </button>
          </div>
        )}

        {/* Custom Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxIndex !== null && currentItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
              id="portfolio-lightbox"
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 text-gray-400 hover:text-white bg-industrial-gray/60 p-3 rounded-full border border-industrial-border/40 hover:scale-105 transition-all cursor-pointer"
                aria-label="Close Lightbox"
                id="lightbox-close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main lightbox slider */}
              <div className="relative max-w-5xl w-full flex flex-col items-center justify-center gap-4">
                {/* Image panel */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-industrial-border bg-industrial-card shadow-2xl flex items-center justify-center"
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-[70vh] object-contain max-w-full block"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category overlay badge */}
                  <span className="absolute top-4 left-4 bg-safety-orange text-white text-xs font-bold font-mono px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {currentItem.category}
                  </span>
                </motion.div>

                {/* Left navigation arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 bg-industrial-gray/60 hover:bg-safety-orange text-white p-3 rounded-full border border-industrial-border/40 hover:scale-110 transition-all cursor-pointer"
                  id="lightbox-prev"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 bg-industrial-gray/60 hover:bg-safety-orange text-white p-3 rounded-full border border-industrial-border/40 hover:scale-110 transition-all cursor-pointer"
                  id="lightbox-next"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* Footer description details */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={(e) => e.stopPropagation()}
                  className="text-center max-w-2xl bg-industrial-card/90 border border-industrial-border/60 p-5 rounded-2xl text-white mt-2 shadow-xl backdrop-blur-md"
                >
                  <div className="flex items-center justify-center space-x-2 text-[10px] text-safety-orange font-mono tracking-widest uppercase mb-1 font-bold">
                    <Flame className="h-3.5 w-3.5" />
                    <span>HASIL PEKERJAAN BENGKEL LAS MLETO SATU SURABAYA</span>
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl">{currentItem.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">{currentItem.description}</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
