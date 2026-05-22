import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Beaker, PhoneCall, Layers, Award } from 'lucide-react';
import { ActiveSection } from '../types';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveSection; label: string; icon: ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Layers className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Award className="w-4 h-4" /> },
    { id: 'product', label: 'Product', icon: <Beaker className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: ActiveSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand H1 on Left with Beaker Lab Core Design */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-teal-500/30">
            <Beaker className="w-5 h-5 text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans group-hover:text-teal-400 transition-colors">
           ATLAS CHEMICAL
          </h1>
        </div>

        {/* Desktop Navigation on Right */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/40 backdrop-blur-sm border border-slate-800 rounded-full px-2 py-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-5 py-2 text-sm font-medium transition-colors cursor-pointer text-slate-300 hover:text-white"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabOutline"
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/25 to-emerald-500/20 border border-teal-500/30 rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`${isActive ? 'text-teal-400 font-semibold' : ''} transition-colors`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Call to action or quick inquiry shortcut */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 hover:scale-102 cursor-pointer"
          >
            Trade Inquiry
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/10 text-teal-400 border border-teal-500/30'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full mt-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold py-3 rounded-xl text-center text-sm uppercase tracking-wider"
              >
                Get Custom Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
