import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { ChevronDown, Phone, ShieldCheck } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'How long does a full roof replacement take?',
    a: 'Most full replacements are completed in 1–2 days. We start at 7am, work straight through, and do a complete clean-up before we leave. You\'ll have a weather-tight roof by the evening of day one. Repairs and inspections are much faster — inspections take about 45 minutes, and most repairs are done in 1–4 hours.',
  },
  {
    q: 'Will there be a mess left on my property?',
    a: 'Full clean-up is included on every job — no exceptions. We use magnetic nail sweepers on all driveway and lawn surfaces, collect all debris, and do a final walkthrough with you before leaving. If there is a single nail left behind, we will come back and fix it.',
  },
  {
    q: 'What warranty do you offer on your work?',
    a: 'We offer a 10-year workmanship warranty in writing on all full replacements, plus the manufacturer\'s material warranty — typically 25–50 years for premium shingles. Both warranties are fully transferable if you sell your home, which adds real value to your property.',
  },
  {
    q: 'Are you licensed and insured in New York?',
    a: 'Yes. We carry full general liability and workers\' compensation insurance, and our New York state contractor license has been active since 1999. We\'re happy to provide certificates of insurance and license verification on request — both are yours before we touch a single shingle.',
  },
  {
    q: 'Will there be hidden costs after the quote?',
    a: 'Your written quote is your final price — no surprises, no change orders without your approval. If we uncover unexpected structural damage during the job, we stop work, call you immediately, explain exactly what we found, and get your written sign-off before proceeding. Nothing added without your agreement.',
  },
  {
    q: 'Can I choose my own materials and shingle colour?',
    a: 'Absolutely. At your free inspection we walk you through every available option — shingle brands, profiles, and the full colour range. If you want to match your existing roof exactly or go in a completely different direction, both are possible. You make the final call.',
  },
  {
    q: 'Do I need to be home while the work is done?',
    a: 'You don\'t need to be home for the repair itself — just for the initial walkthrough at the start and the final inspection when we finish. We send you photos throughout the day so you can follow along, and we call you the moment the job is complete and the clean-up is done.',
  },
];

interface FAQItemProps {
  key?: React.Key;
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ q, a, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: 'easeOut' }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
        isOpen
          ? 'border-theme/40 bg-white/[0.04]'
          : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-bg-hover'
      }`}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <span className={`font-medium text-[15px] leading-snug transition-colors duration-200 ${isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-theme transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-text-secondary/70 text-[14px] leading-[1.7] border-t border-white/6 pt-[40px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="w-full bg-bg-lift py-sp-8 md:py-sp-9 px-6 relative z-10 overflow-hidden" aria-labelledby="faq-heading">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-[900px] mx-auto">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-[56px] space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-sp-5 rounded-full bg-white/5 border border-border-default"
          >
            <span className="w-2 h-2 rounded-full bg-theme text-bg-base" />
            <span className="text-xs font-bold tracking-widest uppercase text-text-secondary">Real questions · Real answers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
            id="faq-heading"
            className="text-3xl md:text-5xl font-display font-medium text-text-primary max-w-2xl"
          >
            Questions we get on almost every call
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary/60 text-[14px] max-w-lg leading-[1.7]"
          >
            These aren't questions we made up. They come from actual homeowners who called us. If you're wondering the same thing, the answer is right here.
          </motion.p>
        </div>

        {/* ── PROMOTED SECTION — Insurance (asked on every call) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-sp-6 rounded-3xl border border-theme/30 bg-accent text-accent-text/5 p-8 overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />

          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-theme" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-theme">
              Asked on almost every call
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary mb-4">
            Does my homeowner's insurance cover roof damage?
          </h3>

          <p className="text-text-secondary/80 text-[14px] leading-[1.7] mb-[24px]">
            In most cases, <strong className="text-text-primary font-semibold">yes</strong> — if the damage was caused by a storm, hail, wind, or a fallen tree, your insurance will cover it. We work directly with insurance adjusters and handle the entire claims process for you at no extra charge. Most homeowners end up paying only their deductible. We'll tell you within minutes of the inspection whether your damage qualifies.
          </p>

          <div className="flex flex-wrap gap-2">
            {['We handle the entire claim', 'You pay deductible only', 'Storm & hail damage covered', 'FREE insurance inspection'].map((pill) => (
              <span key={pill} className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-theme text-text-muted border border-theme/25 text-theme">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-sp-6"
        >
          <div className="flex-1 h-px bg-white/8" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-text-secondary/30 font-medium">More questions answered</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        {/* ── FAQ ACCORDION ── */}
        <div className="flex flex-col gap-3 mb-[56px]">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── CTA strip at the bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-border-default bg-white/[0.03] p-8 flex flex-col sm:flex-row items-center justify-between gap-sp-5 text-center sm:text-left"
        >
          <div>
            <p className="text-text-primary font-semibold text-lg mb-1">Still have a question?</p>
            <p className="text-text-secondary/60 text-[13px]">Call us directly — we answer, usually on the first ring.</p>
          </div>
          <a
            href="tel:18005557663"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-sp-5 bg-theme text-bg-base text-bg-base font-black rounded-full text-[13px] uppercase tracking-[0.12em] hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            Call Now: (800) 555-ROOF
          </a>
        </motion.div>

      </div>
    </section>
  );
}
