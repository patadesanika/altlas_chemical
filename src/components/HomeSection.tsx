import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Leaf, Cpu, ShieldAlert, Sparkles, Send, CheckCircle2, FlaskConical, Filter, ArrowRight 
} from 'lucide-react';
import { CHEMICAL_PRODUCTS } from '../data';
import { ChemicalProduct } from '../types';

interface HomeSectionProps {
  onLearnMore: (category: ChemicalProduct['category'] | 'All') => void;
}

const INDUSTRIES = [
  {
    id: 'pharma',
    name: 'Pharmaceutical Synthesis',
    icon: <FlaskConical className="w-5 h-5 text-teal-400" />,
    intro: 'Precursors, low-water solvents, and active reagents formulated strictly to exceed USP and HPLC specifications.',
    matchedCategory: 'Solvents',
    stat: '99.98% Analytical Standard'
  },
  {
    id: 'electronics',
    name: 'Advanced Micro-Electronics',
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    intro: 'Semiconductor-grade cleansing compounds with ultra-trace sub-ppb metal levels to optimize silicon wafer yield.',
    matchedCategory: 'Reagents',
    stat: 'Sub-ppb Metals Specification'
  },
  {
    id: 'green',
    name: 'Sustainable Tech & Bio',
    icon: <Leaf className="w-5 h-5 text-emerald-400" />,
    intro: 'Bio-derived alternatives offering reduced environmental emission indicators without compromising industrial performance.',
    matchedCategory: 'Polymers',
    stat: '40% Carbon Footprint Reduction'
  },
  {
    id: 'heavy',
    name: 'Heavy Industrial Coatings',
    icon: <Building2 className="w-5 h-5 text-amber-400" />,
    intro: 'Robust drying accelerators, binders, and specialty additives to withstand harsh oceanic and atmospheric stress.',
    matchedCategory: 'Catalysts',
    stat: 'Heavy Corrosive Defense Grade'
  }
];

export default function HomeSection({ onLearnMore }: HomeSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);
  const [inquiryText, setInquiryText] = useState('');
  const [finderMatchedProducts, setFinderMatchedProducts] = useState<ChemicalProduct[]>(
    CHEMICAL_PRODUCTS.filter(p => p.category === INDUSTRIES[0].matchedCategory)
  );

  const handleIndustryChange = (id: string, category: string) => {
    setSelectedIndustry(id);
    const matched = CHEMICAL_PRODUCTS.filter(p => p.category === category);
    setFinderMatchedProducts(matched);
  };

  return (
    <section id="home-details" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.03),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Visual Title Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-teal-400">Enterprise Core Capabilities</h2>
          <p className="mt-3 text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            Precision Chemistry. Consistent Safety. Global Scale.
          </p>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Atlas Chemical provides raw materials and customized synthesis pipelines that enable breakthrough innovations. We cater to safety-critical sectors across major continuous processes.
          </p>
        </div>

        {/* Dynamic Industry Filter Component (Bento Grid) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Industry Left Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4 px-2">Select Industry Sector</h3>
            {INDUSTRIES.map((ind) => {
              const active = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleIndustryChange(ind.id, ind.matchedCategory)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer select-none ${
                    active 
                      ? 'bg-slate-900 border-teal-500/40 shadow-md shadow-teal-500/5' 
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-800'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border transition-colors ${
                    active ? 'bg-teal-500/10 border-teal-500/30' : 'bg-slate-950/60 border-slate-800'
                  }`}>
                    {ind.icon}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold tracking-wide ${active ? 'text-teal-400' : 'text-white'}`}>
                      {ind.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {ind.intro}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Matches Output Showcase - Dynamic State Render */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800/80 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-teal-500/40 select-none uppercase tracking-widest">
              Live Synthesis Matched
            </div>
            
            <AnimatePresence mode="wait">
              {INDUSTRIES.filter(ind => ind.id === selectedIndustry).map((activeInd) => (
                <motion.div
                  key={activeInd.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-teal-400 uppercase tracking-widest px-2 py-0.5 rounded bg-teal-500/10">
                      Recommend Sector Setup
                    </span>
                    <span className="text-xs text-emerald-400">● {activeInd.stat}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mt-4 tracking-tight">
                    Matched Specialty: {activeInd.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">
                    {activeInd.intro} Our products under the <span className="text-teal-400 font-semibold">{activeInd.matchedCategory}</span> class are certified for instant deployment within this sector.
                  </p>

                  <div className="border-t border-slate-800 my-6" />

                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                    Recommended Catalog Products
                  </h4>
                  
                  <div className="space-y-3">
                    {finderMatchedProducts.map((p) => (
                      <div 
                        key={p.id}
                        className="p-4 bg-slate-950/60 border border-slate-800/60 hover:border-teal-500/40 rounded-xl flex justify-between items-center group transition-all"
                      >
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                            {p.name}
                          </p>
                          <div className="flex gap-4 text-[11px] text-slate-500 mt-1 font-mono">
                            <span>Formula: {p.formula}</span>
                            <span>CAS: {p.casNumber}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onLearnMore(p.category)}
                          className="p-1 px-3 text-[11px] font-bold uppercase tracking-wider text-teal-400 hover:text-teal-300 bg-teal-500/5 hover:bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          Specs <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={() => onLearnMore(activeInd.matchedCategory as any)}
                      className="text-xs text-teal-400 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      View all {activeInd.matchedCategory} solutions <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          </div>
        </div>

        {/* Global Compliance Certifications Panel */}
        <div className="bg-gradient-to-r from-slate-900/60 to-slate-950 border border-slate-800 rounded-3xl p-8 text-left grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="mb-4 lg:mb-0">
            <span className="text-teal-400 text-xs font-mono font-bold tracking-widest uppercase">Verified Audits</span>
            <h3 className="text-xl font-bold text-white mt-1">Regulatory Standards</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              We process and transport strict chemical components strictly under international customs guidelines and security audits.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {[
              { title: "SGS Audited", desc: "Batch purity and chemical compounds verified continuously down to trace particles." },
              { title: "FDA Approved Facility", desc: "Special packaging and sanitization for medical excipients and cosmetic grade synthesis." },
              { title: "REACH Registration", desc: "Full validation of substance hazard registries ensuring global environmental security." }
            ].map((item, id) => (
              <div key={id} className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-teal-500/5 border border-teal-500/20 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                </div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
