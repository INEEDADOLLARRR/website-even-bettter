import { motion } from 'motion/react';
import { useInspectionPopup } from '../context/InspectionPopupContext';

export function BreatherCTA() {
  const { openPopup } = useInspectionPopup();
  return (
    <section 
      className="w-full bg-bg-elevated py-sp-8 md:py-[80px] px-6 relative z-10 overflow-hidden" 
      aria-labelledby="breather-cta-heading"
    >
      {/* 
        This section's power comes from extreme whitespace and contrast against the dense preceding components.
        DO NOT ADD photos, reviews, or floating widgets inside this section. Keep it clean.
      */}
      <div className="max-w-[800px] mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[11px] md:text-xs font-medium uppercase tracking-[0.15em] text-text-secondary mb-[24px]"
        >
          Ready to protect your home?
        </motion.span>

        {/* High-Stakes Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          id="breather-cta-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-primary leading-tight mb-sp-6"
        >
          Most homeowners wait too long.<br className="hidden md:block" />
          <span className="text-theme">A 5-minute call today can save you thousands.</span>
        </motion.h2>

        {/* Fear Removing Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl leading-[1.7] max-w-2xl mb-sp-7"
        >
          No sales pressure. No obligation. Just an honest look at what your roof needs — and what it'll cost.
        </motion.p>

        {/* 2 CTA Buttons Max */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-sp-5 mb-sp-7 w-full sm:w-auto"
        >
          {/* Primary - Direct Action */}
          <button className="w-full sm:w-auto bg-accent text-accent-text text-[#111] font-bold tracking-wide px-[40px] py-[20px] pl-10 pr-10 rounded-xl hover:bg-[#E59D00] transition-transform hover:scale-105 active:scale-95 shadow-lg text-lg">
            Call Us Now
          </button>
          
          {/* Secondary - Low Friction Action */}
          <button onClick={openPopup} className="cta-inspection w-full sm:w-auto bg-transparent border border-border-hover text-text-primary font-bold tracking-wide px-[40px] py-[20px] rounded-xl hover:bg-bg-hover transition-colors text-lg">
            Get a Free Quote
          </button>
        </motion.div>

        {/* Trust & Availability Signals */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          {/* Unmissable Phone Number */}
          <a 
            href="tel:5550000000" 
            className="text-2xl md:text-3xl font-bold text-text-primary tracking-widest hover:text-theme transition-colors block"
          >
            (555) 000-0000
          </a>
          
          {/* Availability Context */}
          <p className="text-xs md:text-sm text-text-muted font-medium">
            Available Mon–Sat 7am–7pm · <span className="text-text-secondary">Same-day inspections available</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
