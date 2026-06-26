import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LayananSection from './components/LayananSection';
import KeunggulanSection from './components/KeunggulanSection';
import PortfolioSection from './components/PortfolioSection';
import ProsesKerjaSection from './components/ProsesKerjaSection';
import TestimoniSection from './components/TestimoniSection';
import FaqSection from './components/FaqSection';
import SurveyFormSection from './components/SurveyFormSection';
import AdminLogsPanel from './components/AdminLogsPanel';
import Footer from './components/Footer';
import { Hammer, Sparkles, MapPin, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Smooth scroll and auto-populate service on form request
  const handleOpenSurvey = (selectedService?: string) => {
    if (selectedService) {
      setPreselectedService(selectedService);
    }
    const targetElement = document.getElementById('survey-form');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClearPreselected = () => {
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-industrial-dark text-gray-100 font-sans selection:bg-safety-orange selection:text-white flex flex-col justify-between">
      
      {/* 1. Header Sticky Navigation */}
      <Header onOpenSurvey={() => handleOpenSurvey()} />

      {/* Main Body */}
      <main className="flex-grow">
        
        {/* 2. Hero Section Banner */}
        <HeroSection onOpenSurvey={() => handleOpenSurvey()} />

        {/* 3. Safety Stripes Visual Break */}
        <div className="h-2 w-full bg-gradient-to-r from-safety-orange via-safety-light to-safety-orange" />

        {/* 4. Layanan (Services) Grid Section */}
        <LayananSection onOpenSurvey={(service) => handleOpenSurvey(service)} />

        {/* 5. Keunggulan (Advantages) Corporate Checklist Section */}
        <KeunggulanSection />

        {/* 6. Portfolio Filterable Masonry Grid with Lightbox */}
        <PortfolioSection />

        {/* 7. Proses Kerja (Process timeline roadmap) */}
        <ProsesKerjaSection />

        {/* 8. Testimoni (Reviews deck) Section */}
        <TestimoniSection />

        {/* 9. FAQ Accordion List Section */}
        <FaqSection />

        {/* 10. CTA Premium Section (Industrial atmosphere) */}
        <section className="py-20 bg-industrial-card relative overflow-hidden">
          {/* Background Image of CTA */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/cta_background_1782482639889.jpg" 
              alt="Bengkel Las Surabaya Team Projects Background" 
              className="w-full h-full object-cover opacity-15"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/60 to-transparent" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-safety-orange/15 border border-safety-orange/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-safety-orange uppercase tracking-wider"
            >
              <Sparkles className="h-4 w-4" />
              <span>Dapatkan Survey Lokasi Gratis Hari Ini</span>
            </motion.div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Butuh Tukang Las <span className="text-safety-orange">Profesional</span>?
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Jangan ragukan kualitas konstruksi properti Anda. Percayakan pada tim berpengalaman kami untuk mendapatkan hasil rapi, kokoh, bergaransi, dan bebas bocor atau karat.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              {/* Main WA button that goes to form survey first as required */}
              <button
                onClick={() => handleOpenSurvey()}
                className="w-full sm:w-auto bg-safety-orange hover:bg-safety-dark text-white font-display font-extrabold text-sm sm:text-base px-8 py-4.5 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 orange-glow cursor-pointer uppercase"
                id="cta-whatsapp-trigger"
              >
                <MessageSquare className="h-5 w-5 fill-white" />
                <span>Isi Form & Chat WhatsApp</span>
              </button>
              
              <a
                href="tel:+6282245263844"
                className="w-full sm:w-auto bg-industrial-gray hover:bg-industrial-border text-white border border-industrial-border font-display font-bold text-sm sm:text-base px-8 py-4.5 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 cursor-pointer uppercase"
              >
                <Phone className="h-4 w-4 text-safety-orange" />
                <span>Call Center (08.00 - 20.00)</span>
              </a>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 mt-4 border-t border-industrial-border/40 text-left">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-xs text-gray-300 font-semibold">Tukang Las Berlisensi</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-xs text-gray-300 font-semibold">Bahan SNI Pilihan</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-xs text-gray-300 font-semibold">100% Survey Gratis</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="h-5 w-5 text-safety-orange shrink-0" />
                <span className="text-xs text-gray-300 font-semibold">Garansi Resmi 1 Tahun</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Mandatory Survey Form Section */}
        <SurveyFormSection 
          preselectedService={preselectedService} 
          onClearPreselected={handleClearPreselected} 
        />

        {/* 12. Admin Database Logs Submissions Viewer */}
        <AdminLogsPanel />

      </main>

      {/* 13. Footer Block */}
      <Footer />

    </div>
  );
}
