import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass, HeartPulse, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import { CERTIFICATIONS, TIMELINE_MILESTONES } from '../data';

export default function AboutSection() {
  const [selectedYear, setSelectedYear] = useState(TIMELINE_MILESTONES[0].year);

  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* About Section Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="lg:w-1/2">
            <span className="text-teal-400 text-xs font-bold tracking-[0.3em] uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white mt-3 tracking-tight leading-tight">
              Powering Industry with Molecular Rigor to Elevate Standards
            </h2>
          </div>
          <div className="lg:w-1/2 text-slate-400 text-sm md:text-base space-y-4">
            <p>
              Since our establishment, Atlas Chemical has built a stellar reputability for providing specialized chemical formulations required by pharmaceuticals, high precision engineering, and consumer coatings manufacturers.
            </p>
            <p>
              By combining high automation, rigorous quality monitoring, and a highly agile deep-water harbor logistics operation, we minimize impurities, stabilize critical reactions, and safeguard transport risks for our trade partners worldwide.
            </p>
          </div>
        </div>

        {/* Corporate Core Anchors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
              title: "Rigorous Standards",
              desc: "From input validation to analytical gas chromatography batches, zero leakage is tolerated."
            },
            {
              icon: <Compass className="w-5 h-5 text-indigo-400" />,
              title: "Ethical Supply Logistics",
              desc: "Maintaining seamless track-and-trace containers across Europe, Americas, and Asia."
            },
            {
              icon: <HeartPulse className="w-5 h-5 text-emerald-400" />,
              title: "Green Chemistry Path",
              desc: "Replacing hazardous synthesis pathways with eco-compatible reagents and bio-solvents."
            },
            {
              icon: <Award className="w-5 h-5 text-amber-400" />,
              title: "Global Custom Synthesis",
              desc: "Co-developing compounds with client R&D teams in our purpose-built Zurich laboratories."
            }
          ].map((item, id) => (
            <div 
              key={id} 
              className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/20 transition-all text-left flex flex-col justify-between h-full hover:translate-y-[-2px] duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Milestone Timeline */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-10 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span className="text-xs text-teal-400 font-mono tracking-widest uppercase">The Atlas Lineage</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-1">Milestones & Innovations</h3>
            </div>
            
            {/* Year selector buttons */}
            <div className="flex flex-wrap gap-2">
              {TIMELINE_MILESTONES.map((t) => {
                const isSelected = selectedYear === t.year;
                return (
                  <button
                    key={t.year}
                    onClick={() => setSelectedYear(t.year)}
                    className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/15'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {t.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive display detailing the selected milestone */}
          <div className="border border-slate-800/60 rounded-2xl bg-slate-900/40 p-6 md:p-8 min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              {TIMELINE_MILESTONES.filter((t) => t.year === selectedYear).map((milestone) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid md:grid-cols-12 gap-6 items-center w-full"
                >
                  <div className="md:col-span-3 text-left">
                    <span className="text-4xl md:text-5xl font-extrabold text-teal-400 leading-none">
                      {milestone.year}
                    </span>
                    <p className="text-xs text-slate-500 font-mono mt-1 tracking-wider uppercase">Atlas Record Year</p>
                  </div>
                  <div className="md:col-span-9 text-left">
                    <h4 className="text-lg font-bold text-white leading-tight flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal-400 shrink-0" />
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Global Certifications & Audited Benchmarks Shelf */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase text-center mb-8">
            Certified Facilities & Compliance Standards
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.id} 
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-left flex items-start gap-3.5"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{cert.subtitle}</p>
                  <span className="inline-block mt-2 font-mono text-[9px] px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-teal-400 rounded">
                    {cert.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
