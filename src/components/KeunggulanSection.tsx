import React from 'react';
import { ADVANTAGES } from '../data/mockData';
import { 
  UserCheck, 
  Shield, 
  Cpu, 
  DollarSign, 
  Compass, 
  Award, 
  Clock, 
  Layers 
} from 'lucide-react';
import { motion } from 'motion/react';

const getAdvantageIcon = (iconName: string) => {
  switch (iconName) {
    case 'UserCheck': return <UserCheck className="h-6 w-6 text-safety-orange" />;
    case 'Shield': return <Shield className="h-6 w-6 text-safety-orange" />;
    case 'Cpu': return <Cpu className="h-6 w-6 text-safety-orange" />;
    case 'DollarSign': return <DollarSign className="h-6 w-6 text-safety-orange" />;
    case 'Compass': return <Compass className="h-6 w-6 text-safety-orange" />;
    case 'Award': return <Award className="h-6 w-6 text-safety-orange" />;
    case 'Clock': return <Clock className="h-6 w-6 text-safety-orange" />;
    case 'Layers': return <Layers className="h-6 w-6 text-safety-orange" />;
    default: return <Award className="h-6 w-6 text-safety-orange" />;
  }
};

export default function KeunggulanSection() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-industrial-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-safety-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-industrial-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-safety-orange/10 border border-safety-orange/30 px-3 py-1 rounded-full text-xs font-mono text-safety-orange font-semibold uppercase">
              <span>Keandalan Konstruksi</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight" id="keunggulan-title">
              Mengapa Memilih Bengkel Las <span className="text-safety-orange">Mleto Satu</span>?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Kami bekerja dengan standar mutu kontraktor sipil profesional. Keamanan struktur, kehalusan finishing, dan integritas penawaran harga adalah fondasi utama kami dalam melayani ratusan proyek residensial, perkantoran, ruko, hingga pabrik di Surabaya.
            </p>
          </div>
        </div>

        {/* Grid of Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="keunggulan-grid">
          {ADVANTAGES.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-industrial-dark border border-industrial-border/50 hover:border-safety-orange/30 rounded-2xl p-6 relative group transition-all duration-300 hover:shadow-lg hover:shadow-black/50"
            >
              {/* Highlight Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-safety-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon Container */}
              <div className="p-3.5 bg-industrial-gray rounded-xl w-fit mb-5 group-hover:bg-safety-orange/15 transition-colors duration-300">
                {getAdvantageIcon(adv.iconName)}
              </div>

              {/* Advantage Info */}
              <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-safety-orange transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                {adv.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-6 right-6 w-8 h-[2px] bg-industrial-border group-hover:bg-safety-orange transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-industrial-dark border border-industrial-border/60 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-safety-orange/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">
              Siap Bermitra untuk Proyek Berskala Besar?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm max-w-2xl">
              Kami menerima pengurusan dokumen penawaran resmi (RAB/PO), faktur pajak (PPN), dan invoice resmi berbadan hukum untuk keperluan tender atau sub-kontrak pembangunan gedung dan pabrik.
            </p>
          </div>
          <a
            href="#survey-form"
            className="bg-safety-orange hover:bg-safety-dark text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shrink-0 uppercase orange-glow"
          >
            Hubungi Kemitraan
          </a>
        </div>

      </div>
    </section>
  );
}
