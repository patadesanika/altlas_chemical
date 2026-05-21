import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Beaker, ShieldCheck, Mail, Globe, Sparkles } from 'lucide-react';
import { ActiveSection } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [catalogCategory, setCatalogCategory] = useState<'Solvents' | 'Catalysts' | 'Polymers' | 'Reagents' | 'Agro Chemicals' | 'Vitamins' | 'Security Systems' | 'Organic Produce' | 'All'>('All');

  // Monitor Scroll for Active Nav indicators
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll top arrow
      setShowScrollTop(window.scrollY > 500);

      // Section highlighters
      const sections: ActiveSection[] = ['home', 'about', 'product', 'contact'];
      const scrollPosition = window.scrollY + 250; // trigger offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      // Offset for header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Switch catalog and jump to sections
  const handleLearnMoreCategory = (category: 'Solvents' | 'Catalysts' | 'Polymers' | 'Reagents' | 'All') => {
    setCatalogCategory(category);
    handleNavigate('product');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-teal-500 selection:text-slate-950 scroll-smooth">
      
      {/* Universal Floating Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections Assembly */}
      <main>
        {/* Full-height Immersive Hero */}
        <Hero onExplore={(sec) => handleNavigate(sec as any)} />

        {/* Home Information Details & Industry matching finder */}
        <HomeSection onLearnMore={handleLearnMoreCategory} />

        {/* Corporate Profile & Registry Milestone Lineage */}
        <AboutSection />

        {/* Searchable and Request-enabled Product catalog */}
        <ProductSection initialCategory={catalogCategory} onNavigate={handleNavigate} />

        {/* Trade proposal contact form & Interactive Vector Map */}
        <ContactSection />
      </main>

      {/* Global Corporate Footer */}
      <footer id="corporate-footer" className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-left">
            {/* Column 1 Brand intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                  <Beaker className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-lg font-bold text-white tracking-widest uppercase">Atlas Chemical</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Global molecular supply infrastructure and custom synthesis developers. Leading industrial purity standards since 1998 from Rotterdam Port.
              </p>
            </div>

            {/* Column 2 Navigation Links */}
            <div>
              <h4 className="text-xs font-bold font-mono tracking-widest text-teal-400 uppercase mb-4">Enterprise links</h4>
              <ul className="space-y-2.5 text-xs">
                {['Home', 'About', 'Product', 'Contact'].map((sec) => (
                  <li key={sec}>
                    <button
                      onClick={() => handleNavigate(sec.toLowerCase() as ActiveSection)}
                      className="hover:text-white hover:underline transition-all cursor-pointer"
                    >
                      {sec} Division
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 Technical Certifications */}
            <div>
              <h4 className="text-xs font-bold font-mono tracking-widest text-teal-400 uppercase mb-4">Registry Credentials</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>ISO 9001:2015 Class A</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>ISO 14001:2015 Audited</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>REACH Registered (ECHA)</span>
                </li>
              </ul>
            </div>

            {/* Column 4 Quick inquiries */}
            <div>
              <h4 className="text-xs font-bold font-mono tracking-widest text-teal-400 uppercase mb-4">Corporate Support</h4>
              <div className="space-y-3 text-xs">
                <p className="text-slate-400 text-xs">Have standard trade compliance audits or custom laboratory inquiries?</p>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@atlaschemical.example.com</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] font-mono text-left w-full">
            <div>
              <span>© {new Date().getFullYear()} Atlas Chemical Enterprise Group N.V. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#safety" className="hover:text-slate-300">Safety Protocols</a>
              <a href="#compliance" className="hover:text-slate-300">Trade Compliance</a>
              <a href="#privacy" className="hover:text-slate-300">Data Cryptography</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/15 z-40 transition-all hover:scale-105 cursor-pointer"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
