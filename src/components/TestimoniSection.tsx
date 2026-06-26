import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, UserCircle, Users } from 'lucide-react';

const testimonials = [
  {
    id: 't1',
    name: 'Bpk. Hendra Wijaya',
    role: 'Pemilik Cafe & Resto',
    company: 'Monochrome Cafe Surabaya',
    rating: 5,
    content: 'Tangga besi melayang custom dan railing balkon di lantai 2 kafe kami dikerjakan dengan sangat rapi dan kokoh. Desain industrialnya pas sekali dengan konsep kafe kami. Banyak pengunjung yang memuji kerapian las-lasannya. Harga transparan sejak awal, tidak ada biaya tambahan.',
    date: '2 Juni 2026',
    avatar: 'HW'
  },
  {
    id: 't2',
    name: 'Ibu Siska Amelia',
    role: 'Pemilik Rumah Tinggal',
    company: 'Perumahan Citraland Surabaya',
    rating: 5,
    content: 'Sangat puas pasang kanopi alderon double layer dan pagar minimalis modern di rumah kami. Pekerjaannya selesai tepat waktu, las-lasannya penuh dan sangat halus setelah di-gerinda. Survey ke lokasi gratis, diukur detail, dan kami diberikan pilihan bahan besi yang tebal sesuai budget.',
    date: '15 Mei 2026',
    avatar: 'SA'
  },
  {
    id: 't3',
    name: 'Ir. Agus Pratama',
    role: 'Project Manager / Kontraktor',
    company: 'PT Gading Harmoni Developer',
    rating: 5,
    content: 'Kami bermitra dengan Bengkel Las Mleto Satu untuk pengerjaan pagar, kanopi, dan tangga putar besi di 12 ruko komersial baru kami. Hasil kerjanya presisi sesuai dengan blueprint CAD yang kami berikan. Respon administrasinya juga tertata cepat untuk urusan invoicing dan perpajakan.',
    date: '28 April 2026',
    avatar: 'AP'
  },
  {
    id: 't4',
    name: 'Bpk. Samudra Logistik',
    role: 'Kepala Operasional Gudang',
    company: 'PT Samudra Logistik Indonesia',
    rating: 5,
    content: 'Konstruksi baja berat WF untuk atap gudang logistik kami dipercayakan ke Mleto Satu. Perhitungannya matang, erection baja cepat menggunakan alat bantu crane yang aman, dan seluruh tim mengutamakan K3 (keselamatan kerja). Struktur sangat kokoh dan pengerjaan tepat waktu.',
    date: '10 Maret 2026',
    avatar: 'SL'
  },
  {
    id: 't5',
    name: 'Bpk. Rudi Hartono',
    role: 'Kepala Sarana & Prasarana',
    company: 'Kantor BUMN Surabaya',
    rating: 5,
    content: 'Pekerjaan bracket TV heavy-duty custom di ruang rapat utama dan tiang penyangga Videotron LED outdoor dikerjakan dengan sangat kokoh. Bracket-nya bisa disetel fleksibel dan sangat aman untuk monitor 85-inci yang berat. Sangat rekomen untuk pengerjaan instansi profesional.',
    date: '18 Februari 2026',
    avatar: 'RH'
  },
  {
    id: 't6',
    name: 'Ibu Listya Wardhani',
    role: 'Koordinator Developer Perumahan',
    company: 'Citra Gemilang Residence',
    rating: 5,
    content: 'Kerjasama pembuatan pagar keliling perumahan cluster dan pintu lipat gerbang utama kami selesai 3 hari lebih cepat dari deadline. Bengkel Las Mleto Satu Surabaya sangat profesional, komunikatif, dan kooperatif dalam merevisi detail yang kami ajukan di lapangan. Sukses terus!',
    date: '5 Januari 2026',
    avatar: 'LW'
  }
];

export default function TestimoniSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-industrial-dark relative overflow-hidden">
      {/* Decorative safety lines background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-safety-orange/20 to-transparent" />
      <div className="absolute -left-16 top-1/3 w-64 h-64 bg-safety-orange/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-industrial-gray border border-industrial-border px-3 py-1 rounded-full text-xs font-mono text-gray-400">
            <Users className="h-3 w-3 text-safety-orange" />
            <span>Review Kepuasan Klien</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight" id="testimoni-title">
            Dipercaya Ratusan <span className="text-safety-orange">Klien Puas</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Dari pemilik rumah tinggal, pelaku usaha cafe, kontraktor nasional, hingga pengelola gedung industri, berikut adalah apa kata mereka tentang kami.
          </p>
        </div>

        {/* Testimonial Slider Frame */}
        <div className="relative max-w-4xl mx-auto" id="testimoni-slider-container">
          
          <div className="absolute top-0 right-4 text-safety-orange/10 pointer-events-none">
            <Quote className="h-32 w-32 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-industrial-card border border-industrial-border rounded-3xl p-8 sm:p-12 relative z-10 shadow-2xl orange-glow"
            >
              {/* Stars Header */}
              <div className="flex items-center space-x-1.5 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-safety-orange fill-safety-orange" />
                ))}
                <span className="text-xs font-mono text-gray-400 ml-2">Rating {current.rating}.0 / 5.0</span>
              </div>

              {/* Quote Content */}
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed italic mb-8 font-sans">
                "{current.content}"
              </p>

              {/* Client Info Grid */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-industrial-border/60">
                <div className="flex items-center space-x-4">
                  {/* Avatar Letter */}
                  <div className="h-12 w-12 rounded-xl bg-industrial-gray border border-safety-orange/20 text-safety-orange font-display font-bold flex items-center justify-center text-sm">
                    {current.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base leading-none">
                      {current.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1.5">
                      {current.role} — <span className="text-safety-orange">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-xs text-gray-500 font-mono self-start sm:self-center">
                  Tanggal Survey: {current.date}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-4 mt-8 px-2">
            
            {/* Visual indicators (Dots) */}
            <div className="flex space-x-2 sm:mr-auto">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-safety-orange' : 'w-2 bg-industrial-border'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="bg-industrial-card hover:bg-safety-orange hover:text-white text-gray-300 border border-industrial-border p-3 rounded-xl transition-all cursor-pointer"
              aria-label="Previous Testimonial"
              id="testimonial-prev-btn"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="bg-industrial-card hover:bg-safety-orange hover:text-white text-gray-300 border border-industrial-border p-3 rounded-xl transition-all cursor-pointer"
              aria-label="Next Testimonial"
              id="testimonial-next-btn"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>

        {/* Client Logotype Grid representing categories */}
        <div className="mt-20 pt-10 border-t border-industrial-border/40 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
            Melayani Semua Segmen Konstruksi
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-items-center opacity-40 hover:opacity-70 transition-opacity duration-300">
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase">🏠 RESIDENSIAL</span>
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase">🏢 RUKO & KANTOR</span>
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase">🏭 GUDANG & PABRIK</span>
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase">☕ CAFE & RESTO</span>
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase">👷 DEVELOPER / KONTRAKTOR</span>
          </div>
        </div>

      </div>
    </section>
  );
}
