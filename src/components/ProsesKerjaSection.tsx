import React from 'react';
import { WORK_STEPS } from '../data/mockData';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  MapPin, 
  FileSpreadsheet, 
  Flame, 
  Truck, 
  Award, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const getStepIcon = (step: number) => {
  switch (step) {
    case 1: return <PhoneCall className="h-6 w-6 text-white" />;
    case 2: return <MapPin className="h-6 w-6 text-white" />;
    case 3: return <FileSpreadsheet className="h-6 w-6 text-white" />;
    case 4: return <Flame className="h-6 w-6 text-white animate-pulse" />;
    case 5: return <Truck className="h-6 w-6 text-white" />;
    case 6: return <Award className="h-6 w-6 text-white" />;
    default: return <Award className="h-6 w-6 text-white" />;
  }
};

export default function ProsesKerjaSection() {
  return (
    <section id="proses" className="py-20 md:py-28 bg-industrial-card relative overflow-hidden">
      {/* Decorative vertical rails */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-industrial-border/60 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-industrial-gray border border-industrial-border px-3 py-1 rounded-full text-xs font-mono text-gray-400">
            <TrendingUp className="h-3 w-3 text-safety-orange" />
            <span>Alur Kerja Profesional</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight" id="proses-title">
            6 Langkah Kerja Mudah <span className="text-safety-orange">Hingga Beres</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Sistem pengerjaan yang terstruktur dan transparan menjamin hasil fabrikasi baja sesuai dengan ekspektasi Anda tanpa rasa khawatir.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-12 lg:space-y-0 relative" id="proses-timeline">
          {WORK_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative"
              >
                {/* Visual Connector Line for Mobile */}
                {index < WORK_STEPS.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-industrial-border lg:hidden" />
                )}

                {/* Left Side (Even steps text, Odd steps blank on desktop) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:text-right lg:order-1' : 'lg:order-3'}`}>
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="space-y-3 pl-14 lg:pl-0"
                    >
                      <span className="text-xs font-mono font-bold text-safety-orange tracking-widest uppercase bg-safety-orange/10 px-3 py-1 rounded-full w-fit ml-auto">
                        TAHAP {step.step}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      <span className="inline-block text-xs font-mono text-gray-500 bg-industrial-dark border border-industrial-border/60 px-3 py-1 rounded-md">
                        {step.subText}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Center Node (Always Step Number Circle) */}
                <div className="lg:col-span-2 flex justify-start lg:justify-center lg:order-2 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Ring highlight */}
                    <div className="absolute inset-0 bg-safety-orange/20 rounded-2xl blur-md scale-125" />
                    
                    {/* Step Icon Hexagon/Box */}
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-safety-orange to-safety-dark border border-safety-light flex items-center justify-center shadow-xl orange-glow">
                      {getStepIcon(step.step)}
                    </div>
                    
                    {/* Tiny index counter */}
                    <span className="absolute -bottom-2 -right-2 bg-industrial-dark border border-industrial-border text-[10px] font-bold font-mono text-gray-300 px-1.5 py-0.5 rounded-md shadow-md">
                      0{step.step}
                    </span>
                  </motion.div>
                </div>

                {/* Right Side (Odd steps text, Even steps blank on desktop) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                  {!isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="space-y-3 pl-14 lg:pl-0"
                    >
                      <span className="text-xs font-mono font-bold text-safety-orange tracking-widest uppercase bg-safety-orange/10 px-3 py-1 rounded-full w-fit">
                        TAHAP {step.step}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      <span className="inline-block text-xs font-mono text-gray-500 bg-industrial-dark border border-industrial-border/60 px-3 py-1 rounded-md">
                        {step.subText}
                      </span>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Survey Shortcut */}
        <div className="mt-20 text-center">
          <a
            href="#survey-form"
            className="inline-flex items-center space-x-3 bg-safety-orange hover:bg-safety-dark text-white font-display font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 orange-glow uppercase text-sm cursor-pointer"
          >
            <span>Mulai Langkah Pertama Anda Sekarang</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
