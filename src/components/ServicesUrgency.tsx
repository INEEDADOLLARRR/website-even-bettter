import { motion } from 'motion/react';
import { Search, Wrench, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { useInspectionPopup } from '../context/InspectionPopupContext';

export function ServicesUrgency() {
  const { openPopup } = useInspectionPopup();
  return (
    <section className="w-full bg-bg-base py-sp-8 md:py-sp-9 px-6 relative z-10" aria-labelledby="services-heading">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-sp-8 md:mb-sp-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-sp-5.5 rounded-full bg-theme/10 border border-theme/20 mb-sp-6"
          >
            <span className="w-2 h-2 rounded-full bg-theme text-bg-base" />
            <span className="text-xs font-bold tracking-widest uppercase text-theme">What We Do</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="services-heading" 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-primary max-w-3xl mb-[24px] leading-[1.1]"
          >
            Choose the service that fits your situation
          </motion.h2>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-sp-6 lg:gap-[40px] mb-[80px] items-stretch lg:items-center">
          
          {/* Card 1: Inspection */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0A0A0A] border border-border-default rounded-3xl p-10 flex flex-col h-full hover:border-border-hover transition-colors group"
          >
            <div className="w-16 h-16 rounded-2xl bg-bg-card border border-border-default flex items-center justify-center mb-[40px] text-text-primary/80 group-hover:text-text-primary transition-colors">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-display font-medium text-text-primary mb-4">Roof Inspection</h3>
            <p className="text-text-secondary text-base leading-[1.7] mb-[40px] flex-grow">
              Full assessment of your roof's condition with a comprehensive written report.
            </p>
            
            <ul className="flex flex-col gap-5 mb-sp-7">
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-primary/80 leading-snug">Same-day available</span>
              </li>
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-primary/80 leading-snug">Written report included</span>
              </li>
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-primary/80 leading-snug">No obligation to repair</span>
              </li>
            </ul>
            
            <div className="mb-sp-6 pt-6 border-t border-border-default">
              <span className="text-xl font-bold text-text-primary tracking-wide">Free</span>
            </div>
            
            <button onClick={openPopup} className="cta-inspection w-full py-5 rounded-xl bg-bg-card text-text-primary font-bold tracking-wide hover:bg-[#222] transition-colors border border-border-default">
              Book Inspection
            </button>
          </motion.div>

          {/* Card 2: Repair & Patch (Featured) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-bg-card border border-theme/30 rounded-3xl p-10 lg:p-12 flex flex-col h-[105%] lg:-my-8 relative shadow-[0_0_50px_rgba(211,144,0,0.15)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-accent text-bg-base text-xs font-black uppercase tracking-widest py-sp-5 px-6 rounded-full whitespace-nowrap shadow-lg shadow-accent/30" style={{ color: '#111' }}>
              Most Popular
            </div>
            
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-[40px] text-accent group-hover:scale-110 transition-transform relative z-10">
              <Wrench className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-display font-medium text-text-primary mb-4 relative z-10">Repair & Patch</h3>
            <p className="text-text-secondary text-base leading-[1.7] mb-[40px] flex-grow relative z-10">
              Fix leaks, damaged shingles, and flashing — fast, clean, and permanently.
            </p>
            
            <ul className="flex flex-col gap-5 mb-sp-7 relative z-10">
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium text-text-primary/90 leading-snug">Same-day emergency option</span>
              </li>
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium text-text-primary/90 leading-snug">Insurance claims handled</span>
              </li>
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium text-text-primary/90 leading-snug">5-year workmanship guarantee</span>
              </li>
            </ul>
            
            <div className="mb-sp-6 pt-6 border-t border-border-default relative z-10">
              <span className="text-xl font-bold text-text-primary tracking-wide">From $499</span>
            </div>
            
            <button onClick={openPopup} className="cta-inspection w-full py-5 rounded-xl bg-accent text-accent-text text-[#111] font-bold tracking-wide hover:bg-[#E59D00] transition-colors relative z-10 text-lg">
              Book a Repair
            </button>
          </motion.div>

          {/* Card 3: Replacement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0A0A] border border-border-default rounded-3xl p-10 flex flex-col h-full hover:border-border-hover transition-colors group"
          >
            <div className="w-16 h-16 rounded-2xl bg-bg-card border border-border-default flex items-center justify-center mb-[40px] text-text-primary/80 group-hover:text-text-primary transition-colors">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-display font-medium text-text-primary mb-4">Full Replacement</h3>
            <p className="text-text-secondary text-base leading-[1.7] mb-[40px] flex-grow">
              Complete tear-off and re-roof with premium, weather-resistant materials.
            </p>
            
            <ul className="flex flex-col gap-5 mb-sp-7">
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-primary/80 leading-snug">Premium material options</span>
              </li>
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-primary/80 leading-snug">10-year workmanship warranty</span>
              </li>
              <li className="flex items-start gap-4 flex-nowrap">
                <CheckCircle2 className="w-5 h-5 text-theme shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-primary/80 leading-snug">Full site clean-up included</span>
              </li>
            </ul>
            
            <div className="mb-sp-6 pt-6 border-t border-border-default">
              <span className="text-xl font-bold text-text-primary tracking-wide">Free Estimate</span>
            </div>
            
            <button onClick={openPopup} className="cta-inspection w-full py-5 rounded-xl bg-bg-card text-text-primary font-bold tracking-wide hover:bg-[#222] transition-colors border border-border-default">
              Get an Estimate
            </button>
          </motion.div>

        </div>

        {/* Urgency Banner (Contextual) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full bg-bg-card rounded-3xl p-[32px] lg:p-[40px] flex flex-col md:flex-row items-center justify-between gap-sp-6 border border-border-default mb-sp-8 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-sp-5 lg:gap-sp-6 relative z-10 w-full mb-4 md:mb-0">
            <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-border-default flex items-center justify-center shrink-0">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h4 className="text-text-primary font-medium text-xl md:text-2xl leading-tight">
                Storm damage in Brooklyn this week?
              </h4>
              <p className="text-text-secondary text-base md:text-lg">
                We have same-day emergency slots available — call now before they fill.
              </p>
            </div>
          </div>
          
          <button className="shrink-0 w-full md:w-auto bg-white text-black font-bold tracking-wide px-[40px] py-[20px] rounded-xl hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg relative z-10 whitespace-nowrap text-lg">
            Call Emergency Line
          </button>
        </motion.div>

        {/* Final CTA Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-full bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-border-default rounded-3xl p-[40px] lg:p-[48px] flex flex-col md:flex-row items-center justify-between gap-[40px] text-center md:text-left"
        >
          <div className="max-w-3xl">
            <h4 className="text-text-primary font-display font-medium text-3xl mb-4">Not sure which service you need?</h4>
            <p className="text-text-secondary text-lg leading-[1.7]">
              Every visit starts with a free inspection — we'll tell you exactly what your roof needs and what it'll cost, with zero pressure to commit.
            </p>
          </div>
          <button onClick={openPopup} className="cta-inspection shrink-0 w-full md:w-auto bg-accent text-accent-text text-[#111] flex items-center justify-center md:justify-start gap-4 font-bold tracking-wide px-[40px] py-[20px] rounded-xl hover:bg-[#E59D00] transition-colors shadow-lg text-lg">
            Book a Free Inspection <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

