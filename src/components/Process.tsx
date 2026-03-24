import { motion } from 'motion/react';
import { Phone, FileText, Home, ArrowRight } from 'lucide-react';
import { useInspectionPopup } from '../context/InspectionPopupContext';


export function Process() {
  const { openPopup } = useInspectionPopup();
  return (
    <section className="w-full bg-bg-base py-sp-8 md:py-sp-9 px-6 relative z-10 overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-sp-8 md:mb-sp-9 space-y-[16px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-sp-5 rounded-full bg-bg-card border border-border-default"
          >
            <span className="w-2 h-2 rounded-full bg-theme text-bg-base" />
            <span className="text-xs font-bold tracking-widest uppercase text-text-secondary">Simple · Fast · No obligation</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
            id="process-heading" 
            className="font-display font-medium text-text-primary max-w-2xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="block text-3xl md:text-4xl">Here's exactly what happens</span>
            <span className="block mt-1 text-xl md:text-2xl text-text-secondary italic font-light">when you call us.</span>
          </motion.h2>
        </div>

        {/* The 3-Step Horizontal Layout */}
        <div className="relative flex flex-col md:flex-row items-stretch md:items-start justify-between gap-[40px] md:gap-[40px] mb-sp-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 flex-1 flex flex-col items-center text-center max-w-[320px] mx-auto"
          >
            {/* Icon + Number Badge */}
            <div className="relative mb-[24px]">
              <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Phone className="w-10 h-10 text-accent" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-display font-bold text-sm border-2 border-surface">
                1
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary mb-3">Book a free inspection</h3>
            <p className="text-base text-text-secondary/90 leading-[1.7] mb-3">
              We come to you — <strong className="text-text-primary font-medium">no obligation, no sales pressure.</strong>
            </p>
            <p className="text-sm text-accent/80 italic font-medium">Same day or next morning</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 flex-1 flex flex-col items-center text-center max-w-[320px] mx-auto"
          >
            {/* Icon + Number Badge */}
            <div className="relative mb-[24px]">
              <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <FileText className="w-10 h-10 text-accent" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-display font-bold text-sm border-2 border-surface">
                2
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary mb-3">Get a detailed quote</h3>
            <p className="text-base text-text-secondary/90 leading-[1.7] mb-3">
              Get a <strong className="text-text-primary font-medium">written breakdown</strong> of exactly what needs fixing and the cost.
            </p>
            <p className="text-sm text-accent/80 italic font-medium">Within 24 hours</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 flex-1 flex flex-col items-center text-center max-w-[320px] mx-auto"
          >
            {/* Icon + Number Badge */}
            <div className="relative mb-[24px]">
              <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Home className="w-10 h-10 text-accent" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-display font-bold text-sm border-2 border-surface">
                3
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary mb-3">Enjoy a leak-free home</h3>
            <p className="text-base text-text-secondary/90 leading-[1.7] mb-3">
              We handle everything from start to finish — <strong className="text-text-primary font-medium">clean-up included.</strong>
            </p>
            <p className="text-sm text-accent/80 italic font-medium">Most jobs done in 1–2 days</p>
          </motion.div>

        </div>

        {/* CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.32, duration: 0.35, ease: 'easeOut' }}
          className="max-w-4xl mx-auto mt-[48px] md:mt-[80px] bg-gradient-to-r from-bg-card to-bg-lift border border-theme/10 rounded-2xl p-[24px] md:p-[32px] flex flex-col md:flex-row items-center justify-between gap-sp-5 shadow-2xl shadow-black/40"
        >
          <div className="text-center md:text-left">
            <h4 className="text-[18px] md:text-[20px] font-display font-medium text-theme mb-[4px]">Ready to start step 1?</h4>
            <p className="text-[14px] text-text-secondary/70">The process is easy. The inspection is completely free.</p>
          </div>
          <button 
            onClick={openPopup}
            className="cta-inspection w-full md:w-auto bg-[#C5A059] hover:bg-[#B48F48] text-black whitespace-nowrap px-[36px] py-[16px] rounded-xl text-[14px] font-black tracking-[0.15em] uppercase flex items-center justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a Free Inspection <ArrowRight className="w-[16px] h-[16px] ml-[8px]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
