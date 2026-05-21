import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail, Phone, MapPin, Copy, Check, Globe, User, ExternalLink
} from 'lucide-react';
import { COMPANY_OFFICES } from '../data';

export default function ContactSection() {
  const puneOffice = COMPANY_OFFICES[0];
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/3 filter blur-[150px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 text-xs font-mono font-bold tracking-[0.3em] uppercase">Connect With Atlas</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            "Get in Touch We're Ready to Do Business"
          </h2>
          <p className="mt-5 text-slate-300 text-sm md:text-base leading-relaxed">
            Interested in working with us? Have a product inquiry or trade proposal? Let's connect
          </p>
        </div>

        <div id="regional-hub" className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 mb-16 grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Google Map */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="text-left mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-teal-400">Distribution Infrastructure</span>
              <h3 className="text-lg font-bold text-white mt-1">Interactive Global Logistics Network</h3>
              <p className="text-xs text-slate-400 mt-1">
                Our regional hub in Pune, India. Click the button to open full directions in Google Maps.
              </p>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl border border-slate-800/60 overflow-hidden">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(puneOffice.address)}&output=embed&z=14`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${puneOffice.name}`}
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(puneOffice.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-slate-950/90 border border-slate-700 hover:border-teal-500/60 text-white hover:text-teal-400 text-[10px] font-mono px-2.5 py-1.5 rounded-lg transition-all shadow-lg"
              >
                <ExternalLink className="w-3 h-3" /> Open in Google Maps
              </a>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-2 px-1">
              <span>{puneOffice.city}, {puneOffice.country}</span>
              <span className="flex items-center gap-1.5 text-teal-500">
                <Globe className="w-3.5 h-3.5" /> Active distribution channels online
              </span>
            </div>
          </div>

          {/* Right Column: Office Details */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 md:p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase font-mono tracking-widest text-teal-400 bg-teal-500/10 px-2 py-0.5 border border-teal-500/20 rounded-md">
                  {puneOffice.role}
                </span>
                <span className="text-xs font-mono text-slate-500">{puneOffice.city}, {puneOffice.country}</span>
              </div>

              <h4 className="text-xl font-bold text-white mt-4">{puneOffice.name}</h4>

              <div className="border-t border-slate-800/80 my-5" />

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Trading Office Address</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{puneOffice.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Inquiry Telephone Desk</span>
                    <a href={`tel:${puneOffice.phone}`} className="text-xs text-slate-300 hover:text-white transition-colors">
                      {puneOffice.phone}
                    </a>
                  </div>
                </div>

                {puneOffice.contactPerson && (
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Representative In Charge</span>
                      <span className="text-xs text-slate-300 font-medium">{puneOffice.contactPerson}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono font-bold">Representative Inboxes</span>
                    <div className="flex justify-between items-center mt-0.5">
                      <span className="text-xs text-teal-400 font-mono select-all truncate">
                        {puneOffice.email}
                      </span>
                      <button
                        onClick={() => handleCopyEmail(puneOffice.email, puneOffice.id)}
                        className="p-1 px-2.0 hover:bg-slate-800/60 rounded border border-slate-800 text-slate-400 hover:text-white shrink-0 ml-2 transition-colors flex items-center gap-1 cursor-pointer"
                        title="Copy trade inbox"
                      >
                        {copiedId === puneOffice.id ? (
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

      </div>
    </section>
  );
}
