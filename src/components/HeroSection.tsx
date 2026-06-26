import React from 'react';
import { motion } from 'motion/react';
import { Hammer, Calendar, Flame, CheckCircle, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenSurvey: () => void;
}

export default function HeroSection({ onOpenSurvey }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden industry-grid">
      {/* Absolute ambient lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-safety-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-[450px] h-[450px] bg-safety-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Headlines and CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-safety-orange/10 border border-safety-orange/30 px-3 py-1.5 rounded-full text-safety-orange font-mono text-xs font-semibold tracking-wider uppercase"
            >
              <Flame className="h-3.5 w-3.5 animate-pulse" />
              <span>Sertifikasi Ahli & Garansi Resmi</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
              id="hero-headline"
            >
              Ahlinya Jasa Las <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange via-safety-light to-white">
                Profesional
              </span>{' '}
              di Surabaya
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
              id="hero-subheadline"
            >
              Melayani berbagai pekerjaan fabrikasi besi, pagar, kanopi, railing, tangga, balkon, pintu besi, bracket TV, hingga proyek struktur rangka baja dan videotron dengan hasil rapi, kuat, dan bergaransi.
            </motion.p>

            {/* Value Checkpoints */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <div className="flex items-center space-x-2.5 text-gray-300">
                <CheckCircle className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-sm font-medium">Bahan SNI Pilihan (Hollow Tebal)</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-300">
                <CheckCircle className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-sm font-medium">Hasil Las Halus & Presisi Tinggi</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-300">
                <CheckCircle className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-sm font-medium">Gratis Survey & Estimasi RAB</span>
              </div>
              <div className="flex items-center space-x-2.5 text-gray-300">
                <CheckCircle className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-sm font-medium">Garansi Perawatan Resmi 1 Tahun</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={onOpenSurvey}
                className="bg-safety-orange hover:bg-safety-dark text-white font-display font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 text-sm tracking-wide transition-all duration-300 hover:scale-105 orange-glow cursor-pointer"
                id="hero-cta-konsultasi"
              >
                <Flame className="h-5 w-5" />
                <span>KONSULTASI GRATIS</span>
              </button>
              <button
                onClick={onOpenSurvey}
                className="bg-industrial-gray hover:bg-industrial-border text-white border border-industrial-border hover:border-safety-orange/50 font-display font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 text-sm tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
                id="hero-cta-survey"
              >
                <Calendar className="h-5 w-5 text-safety-orange" />
                <span>MINTA SURVEY LOKASI</span>
              </button>
            </motion.div>

            {/* Quick Stat Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-industrial-border/60 max-w-lg"
            >
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-safety-orange">15+</div>
                <div className="text-xs text-gray-400 font-mono tracking-tight">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">1,200+</div>
                <div className="text-xs text-gray-400 font-mono tracking-tight">Proyek Selesai</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">100%</div>
                <div className="text-xs text-gray-400 font-mono tracking-tight">Puas Bergaransi</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Hero Image Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background design elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-safety-orange to-safety-light opacity-10 rounded-2xl blur-xl" />
            
            {/* Main Picture Frame */}
            <div className="relative border-2 border-industrial-border rounded-2xl overflow-hidden shadow-2xl bg-industrial-card orange-glow group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-safety-orange to-transparent z-20" />
              
              <img
                src="/src/assets/images/hero_banner_1782482666454.jpg"
                alt="Bengkel Las Mleto Satu Surabaya Steel Construction Project"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 inline-self-start">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-300">Live dari Proyek Rangka Baja</span>
                  </div>
                  <p className="text-xs font-semibold text-white mt-1">Erection Konstruksi Balok Baja WF Surabaya</p>
                </div>
              </div>
            </div>

            {/* Industrial corner highlights */}
            <div className="absolute -top-3 -left-3 h-6 w-6 border-t-2 border-l-2 border-safety-orange" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-safety-orange" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
