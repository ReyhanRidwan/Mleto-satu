import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { 
  Home, 
  Shield, 
  Grid, 
  Lock, 
  Monitor, 
  Tv, 
  Warehouse, 
  Wrench, 
  Settings, 
  Ruler, 
  Boxes, 
  Layers, 
  Hammer, 
  Search, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayananSectionProps {
  onOpenSurvey: (selectedService?: string) => void;
}

// Map service IDs to lucide icons safely
const getIcon = (id: string) => {
  switch (id) {
    case 'pagar-besi': return <Grid className="h-6 w-6 text-safety-orange" />;
    case 'kanopi-besi': return <Home className="h-6 w-6 text-safety-orange" />;
    case 'tangga-besi': return <Layers className="h-6 w-6 text-safety-orange" />;
    case 'railing-tangga': return <Shield className="h-6 w-6 text-safety-orange" />;
    case 'balkon-besi': return <Layers className="h-6 w-6 text-safety-orange" />;
    case 'tralis': return <Grid className="h-6 w-6 text-safety-orange" />;
    case 'pintu-besi': return <Lock className="h-6 w-6 text-safety-orange" />;
    case 'folding-gate': return <Lock className="h-6 w-6 text-safety-orange" />;
    case 'bracket-tv': return <Monitor className="h-6 w-6 text-safety-orange" />;
    case 'rak-besi': return <Boxes className="h-6 w-6 text-safety-orange" />;
    case 'struktur-baja-ringan': return <Ruler className="h-6 w-6 text-safety-orange" />;
    case 'rangka-gudang': return <Warehouse className="h-6 w-6 text-safety-orange" />;
    case 'pasang-videotron': return <Tv className="h-6 w-6 text-safety-orange" />;
    case 'billboard-led': return <Tv className="h-6 w-6 text-safety-orange" />;
    case 'welding-repair': return <Wrench className="h-6 w-6 text-safety-orange" />;
    case 'fabrikasi-custom': return <Settings className="h-6 w-6 text-safety-orange" />;
    default: return <Hammer className="h-6 w-6 text-safety-orange" />;
  }
};

export default function LayananSection({ onOpenSurvey }: LayananSectionProps) {
  const [activeTab, setActiveTab] = useState<'semua' | 'residensial' | 'komersial'>('semua');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'semua', name: 'Semua Layanan' },
    { id: 'residensial', name: 'Residensial / Rumah' },
    { id: 'komersial', name: 'Komersial / Proyek Baja' },
  ];

  // Filtering services based on tab & search query
  const filteredServices = SERVICES.filter(service => {
    // Tab filter
    const matchTab = 
      activeTab === 'semua' ||
      (activeTab === 'residensial' && ['Pagar', 'Kanopi', 'Tangga', 'Railing', 'Bracket TV'].includes(service.category)) ||
      (activeTab === 'komersial' && ['Videotron', 'Billboard', 'Struktur Baja', 'Proyek Gedung'].includes(service.category));

    // Search filter
    const matchSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchTab && matchSearch;
  });

  return (
    <section id="layanan" className="py-20 md:py-28 bg-industrial-dark relative">
      {/* Background patterns */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-safety-orange/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-industrial-gray border border-industrial-border px-3 py-1 rounded-full text-xs font-mono text-gray-400">
            <Sparkles className="h-3 w-3 text-safety-orange" />
            <span>Spesialis Fabrikasi & Konstruksi</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight" id="layanan-title">
            Layanan Las <span className="text-safety-orange">Profesional</span> Surabaya
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Menghadirkan layanan fabrikasi besi dan baja terlengkap dengan jaminan pengerjaan presisi oleh tenaga ahli bersertifikat.
          </p>
        </div>

        {/* Controls: Tabs & Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 bg-industrial-card border border-industrial-border p-1.5 rounded-xl self-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-safety-orange text-white shadow-md orange-glow' 
                    : 'text-gray-400 hover:text-white hover:bg-industrial-gray/50'
                }`}
                id={`layanan-tab-${tab.id}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Cari layanan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-industrial-card border border-industrial-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-safety-orange focus:border-safety-orange transition-all"
              id="layanan-search"
            />
          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="layanan-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-industrial-card border border-industrial-border/60 hover:border-safety-orange/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
              >
                {/* Thin top glow lines on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-safety-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Icon & Preview Image combo */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-industrial-gray rounded-xl group-hover:bg-safety-orange/10 group-hover:text-safety-orange transition-colors duration-300">
                      {getIcon(service.id)}
                    </div>
                    {service.image && (
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-industrial-border group-hover:border-safety-orange/30 transition-all duration-300">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-safety-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenSurvey(service.title)}
                  className="mt-6 flex items-center space-x-2 text-xs font-semibold text-safety-orange hover:text-safety-light tracking-wide transition-colors duration-200 cursor-pointer self-start group/btn"
                >
                  <span>Minta Penawaran</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state search result */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-industrial-card border border-industrial-border rounded-2xl">
            <p className="text-gray-400 text-base mb-2">Layanan las tidak ditemukan.</p>
            <p className="text-gray-500 text-xs">Coba cari dengan kata kunci lain seperti "pagar", "kanopi", atau "tangga".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('semua'); }}
              className="mt-4 text-xs font-semibold text-safety-orange hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
