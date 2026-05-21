import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink, Globe, AlertTriangle, User
} from 'lucide-react';
import { COMPANY_OFFICES } from '../data';
import { CompanyOffice, InquiryForm } from '../types';

export default function ContactSection() {
  const [selectedOffice, setSelectedOffice] = useState<CompanyOffice>(COMPANY_OFFICES[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Contact Form State
  const [formState, setFormState] = useState<InquiryForm>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/3 filter blur-[150px] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Contact Section Header - Exact String Match */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 text-xs font-mono font-bold tracking-[0.3em] uppercase">Connect With Atlas</span>
          
          {/* Main User requested title */}
          <h2 className="mt-4 text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            “Get in Touch We’re Ready to Do Business”
          </h2>
          
          {/* Main User requested subtitle */}
          <p className="mt-5 text-slate-300 text-sm md:text-base leading-relaxed">
            Interested in working with us? Have a product inquiry or trade proposal? Let’s connect
          </p>
        </div>

        {/* Global Distribution SVG Map & Office Selector */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive World Map */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="text-left mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-teal-400">Distribution Infrastructure</span>
              <h3 className="text-lg font-bold text-white mt-1">Interactive Global Logistics Network</h3>
              <p className="text-xs text-slate-400 mt-1">
                Click on highlighted trade nodes to access regional logistics details, specialized desks, and localized routing.
              </p>
            </div>

            {/* Custom SVG World Map Container */}
            <div className="relative w-full aspect-[2/1] bg-slate-900/40 rounded-2xl border border-slate-800/60 overflow-hidden flex items-center justify-center p-4">
              
              {/* Fake Background World Outlines for High Aesthetic Grid */}
              <svg 
                viewBox="0 0 100 50" 
                className="w-full h-full opacity-20 text-teal-500/30"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.4"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Horizontal / Vertical Lat-Long lines */}
                <path d="M 0,10 L 100,10 M 0,20 L 100,20 M 0,30 L 100,30 M 0,40 L 100,40" strokeDasharray="1,1" />
                <path d="M 10,0 L 10,50 M 20,0 L 20,50 M 30,0 L 30,50 M 40,0 L 40,50 M 50,0 L 50,50 M 60,0 L 60,50 M 70,0 L 70,50 M 80,0 L 80,50 M 90,0 L 90,50" strokeDasharray="1,1" strokeWidth="0.2" />

                {/* Abstract simplified continent paths */}
                {/* Americas Block */}
                <path d="M 10,8 Q 15,12 18,17 T 25,24 T 18,32 T 22,42 T 24,48 T 20,44" fill="currentColor" fillOpacity="0.08" />
                {/* Eurasia & Africa */}
                <path d="M 40,6 Q 50,4 62,8 T 75,12 T 88,14 S 82,22 84,28 S 70,36 62,42" fill="currentColor" fillOpacity="0.08" strokeWidth="0.6" />
                <path d="M 45,22 Q 44,28 38,34 T 48,46 T 54,42 T 50,30" fill="currentColor" fillOpacity="0.05" />
                {/* Australia */}
                <path d="M 75,34 Q 82,35 84,40 T 74,44 Z" fill="currentColor" fillOpacity="0.08" />
              </svg>

              {/* Dynamic Coordinate Node Overlays mapping data.ts locations */}
              {COMPANY_OFFICES.map((office) => {
                const isSelected = selectedOffice.id === office.id;
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className="absolute cursor-pointer group"
                    style={{ left: `${office.coords.x}%`, top: `${office.coords.y}%` }}
                  >
                    {/* Ring Pulse for Selected */}
                    {isSelected && (
                      <span className="absolute -inset-2.0 w-6 h-6 rounded-full bg-teal-500/20 animate-ping" />
                    )}
                    {/* Main Node Dot */}
                    <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all shadow-md ${
                      isSelected 
                        ? 'bg-teal-400 border-white scale-110' 
                        : 'bg-slate-900 border-teal-500/70 group-hover:bg-teal-500 group-hover:scale-105'
                    }`} />
                    
                    {/* Absolute label tag */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-4 bg-slate-950/90 text-white border border-slate-800 rounded-md py-0.5 px-2 text-[9px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                      {office.city} ({office.role})
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Quick map helpers */}
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-2 px-1">
              <span>Projection: Equirectangular SVG </span>
              <span className="flex items-center gap-1.5 text-teal-500">
                <Globe className="w-3.5 h-3.5 animate-spin-slow" /> Active distribution channels online
              </span>
            </div>
          </div>

          {/* Right Column: Node Details View */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 md:p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase font-mono tracking-widest text-teal-400 bg-teal-500/10 px-2 py-0.5 border border-teal-500/20 rounded-md">
                  {selectedOffice.role}
                </span>
                <span className="text-xs font-mono text-slate-500">{selectedOffice.city}, {selectedOffice.country}</span>
              </div>

              <h4 className="text-xl font-bold text-white mt-4">{selectedOffice.name}</h4>
              
              <div className="border-t border-slate-800/80 my-5" />

              <div className="space-y-4">
                {/* Physical address label */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Trading Office Address</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{selectedOffice.address}</span>
                  </div>
                </div>

                {/* Telephone Dial */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Inquiry Telephone Desk</span>
                    <a href={`tel:${selectedOffice.phone}`} className="text-xs text-slate-300 hover:text-white transition-colors">
                      {selectedOffice.phone}
                    </a>
                  </div>
                </div>

                {/* Contact Person */}
                {selectedOffice.contactPerson && (
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Representative In Charge</span>
                      <span className="text-xs text-slate-300 font-medium">{selectedOffice.contactPerson}</span>
                    </div>
                  </div>
                )}

                {/* Email details */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Representative Inboxes</span>
                    <div className="flex justify-between items-center mt-0.5">
                      <span className="text-xs text-teal-400 font-mono select-all truncate">
                        {selectedOffice.email}
                      </span>
                      <button
                        onClick={() => handleCopyEmail(selectedOffice.email, selectedOffice.id)}
                        className="p-1 px-2.0 hover:bg-slate-800/60 rounded border border-slate-800 text-slate-400 hover:text-white shrink-0 ml-2 transition-colors flex items-center gap-1 cursor-pointer"
                        title="Copy trade inbox"
                      >
                        {copiedId === selectedOffice.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span className="text-[9px] font-mono leading-none">Copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60">
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Contact this division for direct bill of lading queries, customs compliance documents, packing specifications, or regional port deliveries.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic Trade Inquiry Form Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left instructions block */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">Technical Trade Proposals</h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              We work with industrial partners, commodity buyers, pharmaceutical logistics firms, and distributors. If you would like to initiate custom contract synthesis or trigger contract pricing schemes, select appropriate parameters.
            </p>
            
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left">
              <span className="text-xs text-amber-500 font-bold block uppercase font-mono">⚠️ Safety Warning Protocols</span>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                All high-specification chemical inquiries must detail corporate tax identification numbers. We strictly follow EU and US export control sanctions on highly hazardous chemicals.
              </p>
            </div>
          </div>

          {/* Core Form Section */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-white mb-6">Corporate Inquiry Center</h4>
            
            {success ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-teal-400" />
                </div>
                <h5 className="text-xl font-bold text-white">Proposal Successfully Dispatched!</h5>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you for starting this dialogue. Your inquiry is safely logged on our Rotterdam secure central system. A qualified trade analyst and specialist chemist will contact you in less than 4 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">FullName / Representative</label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ir. Mark van der Berg"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Corporate Contact Email</label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="trade.rep@company.nl"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Company Legal Entity</label>
                  <input 
                    required
                    type="text" 
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Eindhoven Synthesis NV"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Subject Summary</label>
                  <input 
                    required
                    type="text" 
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Bespoke formulation / Bulk logistics quotation request"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Trade Proposal / Product Inquiry Details</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Detail the molecular grades, purity certifications of interest, annual metric quantities required, and requested port of delivery (e.g. FOB Rotterdam)."
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-500 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting Secure Data...' : 'Transmit Trade Proposal'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
