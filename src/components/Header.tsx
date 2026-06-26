import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenSurvey: () => void;
}

export default function Header({ onOpenSurvey }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Proses Kerja', href: '#proses' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <a href="#home" className="flex items-center space-x-3 group" id="nav-logo">
            <div className="bg-safety-orange p-2 rounded-lg text-white font-bold flex items-center justify-center transition-transform duration-300 group-hover:scale-110 orange-glow">
              <Hammer className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white block leading-none">
                MLETO <span className="text-safety-orange">SATU</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase block mt-1 font-mono">
                Bengkel Las Surabaya
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-safety-orange tracking-wide transition-colors duration-200"
                id={`desktop-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenSurvey}
              className="bg-safety-orange hover:bg-safety-dark text-white font-display font-semibold text-xs px-5 py-2.5 rounded-lg flex items-center space-x-2 tracking-wide transition-all duration-300 hover:scale-105 orange-glow"
              id="header-cta-survey"
            >
              <Phone className="h-4 w-4" />
              <span>KONSULTASI GRATIS</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-safety-orange p-2 rounded-md transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-industrial-border/50 absolute left-0 w-full"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-gray-200 hover:text-safety-orange hover:bg-industrial-gray/40 rounded-lg transition-all"
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-industrial-border/40">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenSurvey();
                  }}
                  className="w-full bg-safety-orange hover:bg-safety-dark text-white font-display font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 tracking-wide transition-all"
                  id="mobile-cta-survey"
                >
                  <Phone className="h-4 w-4" />
                  <span>KONSULTASI / SURVEY GRATIS</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
