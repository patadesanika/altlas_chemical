import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Filter, BookOpen, Send, Download, CheckCircle2, X, FlaskConical, Clipboard, FileText, ChevronRight 
} from 'lucide-react';
import { CHEMICAL_PRODUCTS } from '../data';
import { ChemicalProduct, InquiryForm, ActiveSection } from '../types';

interface ProductSectionProps {
  initialCategory?: 'Solvents' | 'Catalysts' | 'Polymers' | 'Reagents' | 'Agro Chemicals' | 'Vitamins' | 'Security Systems' | 'Organic Produce' | 'All';
  onNavigate?: (section: ActiveSection) => void;
}

export default function ProductSection({ initialCategory = 'All', onNavigate }: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Solvents' | 'Catalysts' | 'Polymers' | 'Reagents' | 'Agro Chemicals' | 'Vitamins' | 'Security Systems' | 'Organic Produce'>(initialCategory as any);

  useEffect(() => {
    setActiveTab(initialCategory as any);
  }, [initialCategory]);

  const [searchTerm, setSearchTerm] = useState('');
  
  // Quote dialog states
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<ChemicalProduct | null>(null);
  const [quoteForm, setQuoteForm] = useState<InquiryForm>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    interestedProduct: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Tabs
  const categories: ('All' | 'Solvents' | 'Catalysts' | 'Polymers' | 'Reagents' | 'Agro Chemicals' | 'Vitamins' | 'Security Systems' | 'Organic Produce')[] = [
    'All', 'Solvents', 'Catalysts', 'Polymers', 'Reagents', 'Agro Chemicals', 'Vitamins', 'Security Systems', 'Organic Produce'
  ];

  // Filtering logic
  const filteredProducts = CHEMICAL_PRODUCTS.filter((prod) => {
    const matchesCategory = activeTab === 'All' || prod.category === activeTab;
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.casNumber.includes(searchTerm) ||
      prod.applications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleInquiryOpen = (prod: ChemicalProduct) => {
    setSelectedProductForInquiry(prod);
    setQuoteForm({
      name: '',
      email: '',
      company: '',
      subject: `Trade Inquiry: ${prod.name}`,
      message: `We would like to request technical specifications, Safety Data Sheets (SDS), and unit pricing details for bulk orders of ${prod.name} (${prod.formula}). Please provide bulk pricing options for packaging variant: ${prod.packaging[0]}.`,
      interestedProduct: prod.name
    });
    setSubmitSuccess(false);
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request proxy
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form on success after brief delaying
      setTimeout(() => {
        setSelectedProductForInquiry(null);
        setSubmitSuccess(false);
      }, 3000);
    }, 1200);
  };

  const handleBuyAction = (prod: ChemicalProduct) => {
    if (onNavigate) {
      onNavigate(prod.actionTarget);
    } else {
      const targetElement = document.getElementById(prod.actionTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="product" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.02),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 text-xs font-bold tracking-[0.3em] uppercase">Enterprise Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            High-Purity Chemicals Catalog
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Search our specialty chemicals by name, molecular formula, or Chemical Abstracts Service (CAS) register numbers. All compounds are dispatched with certified safety data sheets (SDS) and certificate of analysis (COA).
          </p>
        </div>

        {/* Search & Tabs control grid */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-teal-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, CAS, formula..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-teal-500/80 transition-colors"
            />
          </div>

        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-xs text-slate-500 font-mono">
            Showing {filteredProducts.length} of {CHEMICAL_PRODUCTS.length} matching compounds
          </p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-xs text-teal-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-teal-500/30 transition-all p-6 flex flex-col justify-between hover:translate-y-[-2px] duration-300 relative overflow-hidden group"
              >
                {/* Visual Glow in card corners on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/2 rounded-full blur-xl group-hover:bg-teal-500/5 transition-colors" />

                <div>
                  {/* Product Image Header with custom overlays */}
                  {prod.imageUrl && (
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-800/60 relative group/img shrink-0">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Category Chip */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-md border border-teal-500/20">
                      {prod.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      UN Hazard: {prod.safetyClass.split(' ')[1] || 'None'}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors tracking-tight text-left">
                    {prod.name}
                  </h3>

                  {/* Core specs table info */}
                  <div className="mt-4 grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800/50 text-left font-mono">
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase">Chemical Formula</span>
                      <span className="text-xs text-slate-300 font-medium">{prod.formula}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase">CAS Register</span>
                      <span className="text-xs text-slate-300 font-medium">{prod.casNumber}</span>
                    </div>
                    <div className="col-span-2 border-t border-slate-800/50 pt-2 mt-1">
                      <span className="block text-[9px] text-slate-500 uppercase">Purity Spec</span>
                      <span className="text-xs text-teal-400 font-semibold">{prod.purity}</span>
                    </div>
                  </div>

                  {/* Paragraph Desc */}
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed text-left">
                    {prod.description}
                  </p>

                  {/* Packaging List labels */}
                  <div className="mt-4 text-left">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5">Packaging Options:</span>
                    <div className="flex flex-wrap gap-1">
                      {prod.packaging.map((pack, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                          {pack}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Application Tags */}
                  <div className="mt-4 text-left border-t border-slate-800/80 pt-4">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5">Key Applications:</span>
                    <div className="flex flex-wrap gap-1">
                      {prod.applications.map((api, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-teal-900/10 text-teal-400 rounded-md border border-teal-500/10">
                          {api}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Actions Bottom shelf */}
                <div className="grid grid-cols-2 gap-2 mt-6">
                  <button 
                    onClick={() => handleInquiryOpen(prod)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-xs transition-all cursor-pointer text-center"
                  >
                    Inquire Quote
                  </button>
                  <button 
                    onClick={() => handleBuyAction(prod)}
                    className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Buy Product</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State if no product matched */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/20 border border-slate-800 rounded-3xl mt-10">
            <FlaskConical className="w-12 h-12 text-slate-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-semibold text-white">No compound matches standard registry</h3>
            <p className="text-slate-400 text-xs mt-1 max-w-sm mx-auto">
              We regularly expand our synthesis database. Contact our Zurich R&D facility directly to request bespoke formula custom synthesis options.
            </p>
            <button 
              onClick={() => { setActiveTab('All'); setSearchTerm(''); }}
              className="mt-4 text-xs font-semibold text-teal-400 hover:text-white underline cursor-pointer"
            >
              Reset all search filters
            </button>
          </div>
        )}

      </div>

      {/* Inline SDS Inquiry Dialog Overlay */}
      <AnimatePresence>
        {selectedProductForInquiry && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-850 rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProductForInquiry(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-500/10 border border-teal-500/30 rounded-lg">
                  <FileText className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Technical Inquiry Form</h3>
                  <p className="text-xs text-slate-400 font-mono">{selectedProductForInquiry.name}</p>
                </div>
              </div>

              {submitSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-teal-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Request Dispatched Successfully!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Our Rotterdam Trade operations department has registered this request. An analytical Chemist and logistic account manager will contact you at your email within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Corporate Email</label>
                      <input 
                        required
                        type="email" 
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" 
                        placeholder="purchasing@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Company / Entity</label>
                    <input 
                      required
                      type="text" 
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" 
                      placeholder="BioSynthesis Labs Ltd."
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Subject Summary</label>
                    <input 
                      required
                      type="text" 
                      value={quoteForm.subject}
                      onChange={(e) => setQuoteForm({...quoteForm, subject: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" 
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Inquiry Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 resize-none leading-relaxed" 
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 bg-teal-500 hover:bg-teal-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting Registry Data...' : 'Submit Official Inquire'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
