import React from 'react';
import { Hammer, Phone, Mail, MapPin, Clock, ArrowUp, Flame } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0B0D] border-t border-industrial-border/60 text-gray-400 relative">
      {/* Visual Stripe Accent (Safety Stripes Pattern) */}
      <div className="h-1 w-full bg-gradient-to-r from-safety-orange via-safety-light to-safety-orange animate-pulse" />

      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Company Profile */}
          <div className="md:col-span-5 space-y-5">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="bg-safety-orange p-2 rounded-lg text-white flex items-center justify-center orange-glow">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                MLETO <span className="text-safety-orange">SATU</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              CV. Bengkel Las Mleto Satu Surabaya adalah perusahaan fabrikasi besi, baja, dan aluminium berbadan hukum resmi. Kami menghadirkan standar pengerjaan konstruksi komersial, pergudangan, hingga rumah mewah dengan hasil las super rapi, kuat, presisi, dan bergaransi resmi.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-safety-orange bg-safety-orange/10 border border-safety-orange/20 px-3 py-1.5 rounded-lg w-fit">
              <Flame className="h-3.5 w-3.5" />
              <span>SPESIALIS LAS BERGARANSI SURABAYA</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Navigasi Proyek</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-safety-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-safety-orange transition-colors">Layanan Las</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-safety-orange transition-colors">Keunggulan Kami</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-safety-orange transition-colors">Galeri Portfolio</a>
              </li>
              <li>
                <a href="#proses" className="hover:text-safety-orange transition-colors">Proses Kerja</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-safety-orange transition-colors">Tanya & Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Hubungi Kami</h4>
            
            <div className="space-y-4 text-sm">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/6282245263844" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start space-x-3 hover:text-safety-orange transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-safety-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-gray-500 font-mono">No. WhatsApp Admin</span>
                  <span className="font-semibold text-white">+62 822-4526-3844</span>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-safety-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500 font-mono">Jam Operasional</span>
                  <span className="font-semibold text-white block">Senin - Minggu</span>
                  <span className="text-xs text-gray-400">08.00 - 20.00 WIB (Survey Terjadwal)</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-safety-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500 font-mono">Workshop Utama</span>
                  <span className="text-white font-semibold">Jl. Mleto No. 1, Sukolilo, Surabaya</span>
                  <span className="block text-xs text-gray-500 mt-1">Jawa Timur, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-industrial-border/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          <div>
            <p>© {new Date().getFullYear()} CV. Bengkel Las Mleto Satu Surabaya. All Rights Reserved.</p>
            <p className="mt-1 text-gray-600">Terdaftar Resmi. Jasa Las & Konstruksi Baja Terbaik di Jawa Timur.</p>
          </div>

          <button
            onClick={handleScrollTop}
            className="bg-industrial-gray hover:bg-safety-orange hover:text-white border border-industrial-border p-3 rounded-xl transition-all flex items-center space-x-2 cursor-pointer group"
            aria-label="Back to Top"
            id="footer-back-to-top"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
