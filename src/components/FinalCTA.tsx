import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';
import { useInspectionPopup } from '../context/InspectionPopupContext';

const TRUST_SIGNALS = [
  'Free inspection, no commitment',
  'Same-day available',
  'Serving Brooklyn & Staten Island',
  'Licensed · Insured · 25-yr Guarantee',
];

export function FinalCTA() {
  const { openPopup } = useInspectionPopup();
  return (
    <section
      id="consultation"
      aria-labelledby="final-cta-heading"
      className="w-full bg-[#080808] py-sp-8 md:py-[80px] px-6 relative z-10 overflow-hidden"
    >
      {/*
        Section 11 — The 40% section.
        DO NOT add photos, reviews, animations, urgency copy, countdowns,
        or more than 2 CTA buttons. The power is in the restraint.
      */}

      {/* Very subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[680px] mx-auto flex flex-col items-center text-center gap-7">

        {/* Eyebrow — patience, not urgency */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-primary/35"
        >
          Ready when you are
        </motion.span>

        {/* Headline — acknowledges the thorough reader */}
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
          className="font-display font-medium text-text-primary leading-tight text-3xl md:text-4xl lg:text-5xl"
        >
          You've done your homework.
          <br />
          <span className="text-text-secondary/70 font-light italic">One call is all it takes.</span>
        </motion.h2>

        {/* Subheadline — kills commitment fear + confirms local */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.16, duration: 0.35, ease: 'easeOut' }}
          className="text-text-primary/45 text-[15px] leading-[1.7] max-w-[480px]"
        >
          No sales pitch. No obligation. Just an honest look at what your roof needs
          and exactly what it'll cost. Serving Brooklyn, Staten Island &amp; the Tri-State area.
        </motion.p>

        {/* ── Two CTA buttons — never one, never three ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.24, duration: 0.35, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary — solid fill, call/book action */}
          <button
            onClick={openPopup}
            className="cta-inspection w-full sm:w-auto flex items-center justify-center gap-3 px-[40px] py-[20px] bg-accent text-accent-text text-bg-base font-black rounded-full text-[13px] uppercase tracking-[0.14em] hover:brightness-110 hover:scale-[1.02] transition-all duration-[180ms] ease shadow-lg shadow-white/5 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Book a Free Inspection
          </button>

          {/* Secondary — ghost/outline, message action */}
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-[40px] py-[20px] bg-transparent border border-border-hover text-text-primary/70 hover:text-text-primary hover:border-white/40 font-semibold rounded-full text-[13px] uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Send Us a Message
          </a>
        </motion.div>

        {/* Phone number + availability hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.32, duration: 0.35, ease: 'easeOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <a
            href="tel:18005557663"
            className="text-2xl md:text-3xl font-bold text-text-primary tracking-widest hover:text-theme transition-colors duration-300"
          >
            (800) 555-ROOF
          </a>
          <p className="text-[11px] text-text-muted tracking-wide font-medium">
            Mon–Sat 7am–7pm · Same-day inspections available
          </p>
        </motion.div>

        {/* Trust micro-signals — final reassurance at the moment of commitment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.4, duration: 0.35, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={i} className="flex items-center gap-2 text-[11px] text-text-muted font-medium">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />}
              {signal}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
