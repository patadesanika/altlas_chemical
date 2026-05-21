import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ShieldCheck, Globe, FlaskConical } from 'lucide-react';

const bannerImg = "/src/assets/images/atlas_chemical_banner_1779280184633.png";

interface HeroProps {
  onExplore: (section: 'home' | 'product' | 'contact') => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20"
    >
      {/* Background Image with Dark Teal/Slate Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="Atlas Chemical Advanced Lab Facility"
          className="w-full h-full object-cover scale-102 filter brightness-[0.45] saturate-[1.1] select-none"
          referrerPolicy="no-referrer"
        />
        {/* Gradients blending background seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/50" />
        
        {/* Ambient neon radial pulse */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-teal-500/5 filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-emerald-500/5 filter blur-[100px]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO 9001 & 14001 Registered Enterprise</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Pioneering the Next Scale of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400">Chemical Synthesis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed"
          >
            Atlas Chemical engineers and delivers high-specification purity solvents, state-of-the-art catalysts, and sustainable functional polymers for global commercial markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => onExplore('product')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-teal-500/25 hover:shadow-teal-400/30 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              Browse Catalog
            </button>
            <button
              onClick={() => onExplore('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/50 text-white font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Trade Proposal
            </button>
          </motion.div>
        </div>

        {/* Sidebar Feature Badges right beside it (Aesthetic spacing) */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4 lg:pl-6 max-w-sm mx-auto w-full">
          {[
            {
              icon: <FlaskConical className="w-5 h-5 text-teal-400" />,
              title: "Extreme Purity Precision",
              desc: "Batch purity tested up to 99.98% across fine chemicals."
            },
            {
              icon: <Globe className="w-5 h-5 text-emerald-400" />,
              title: "Global Supply Chain",
              desc: "Deep-water terminals equipped in Netherlands, US, & SG."
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
              title: "REACH certified",
              desc: "Guaranteed absolute regulatory compliance & safety data sheets."
            }
          ].map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-teal-500/30 transition-all text-left group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl group-hover:bg-teal-500/10 transition-colors">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">{feat.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Bottom Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors cursor-pointer" onClick={() => onExplore('home')}>
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-mono">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>

    </section>
  );
}
