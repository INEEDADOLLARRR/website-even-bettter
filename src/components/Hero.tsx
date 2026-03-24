import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Phone, Star } from 'lucide-react';
import { useState } from 'react';
import { useInspectionPopup } from '../context/InspectionPopupContext';

// Per guide: Hero section must have NO entrance animation.
// Only button hover states and polished UI interactions apply here.

const NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openPopup } = useInspectionPopup();

  return (
    <section aria-label="Hero" className="relative min-h-[133.33vh] flex items-center justify-center bg-bg-base text-text-primary overflow-hidden">
      {/* Background image — static, no parallax */}
      <div className="absolute inset-0 z-0 bg-bg-base">
        <img src="/hero-bg-4.jpg" alt="MyRoofTop Background" className="absolute inset-0 w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav
        className="absolute top-0 left-0 w-full z-50 px-8 py-6 md:px-16 md:py-8 flex items-center justify-between border-b border-border-default"
        aria-label="Main navigation"
      >
        <div className="md:flex-1 flex items-center">
          <a href="/" className="flex items-center gap-2" aria-label="MyRoofTop home">
            <div className="w-8 h-8 bg-text-primary rounded-full flex items-center justify-center transition-transform duration-[180ms] ease hover:scale-105">
              <div className="w-3 h-3 bg-bg-base rounded-full" />
            </div>
            <span className="font-display font-semibold text-lg tracking-wide uppercase">MyRoofTop</span>
          </a>
        </div>

        {/* Desktop nav - Centered */}
        <div className="hidden md:flex items-center gap-sp-7 text-[13px] font-medium tracking-[0.18em] text-text-secondary uppercase">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="magnetic-underline hover:text-text-primary transition-colors duration-[180ms] pb-1">{link.label}</a>
          ))}
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-[40px]">
          {/* Phone button */}
          <a
            href="tel:18005557663"
            className="cta-secondary flex items-center gap-3 px-[32px] py-[14px] rounded-full text-[12px] font-black tracking-[0.1em] uppercase whitespace-nowrap"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Now: (800) 555-ROOF
          </a>

          {/* CTA button */}
          <a
            href="#consultation"
            className="cta-primary px-10 py-3.5 rounded-full text-sm font-black tracking-[0.15em] uppercase text-black transition-all duration-[180ms] ease hover:brightness-110 hover:scale-[1.02]"
            style={{ background: "#C5A059" }}
          >
            Get Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-brand-white/20 text-text-primary"
        >
          {menuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile fullscreen menu — opacity fade only, no horizontal slide */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] bg-bg-base/98 flex flex-col"
          >
            <div className="px-5 py-5 flex items-center justify-between border-b border-border-default">
              <span className="font-display font-semibold text-base tracking-wide text-text-primary uppercase">MyRoofTop</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border-default text-text-primary"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-8 gap-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25, ease: 'easeOut' }}
                  className="font-display text-3xl font-medium text-text-primary py-3 border-b border-border-default hover:text-text-secondary transition-colors duration-[180ms]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10 flex flex-col gap-3">
              <a
                href="tel:18005557663"
                className="flex items-center justify-center gap-4 w-full py-5 bg-white text-bg-base font-black rounded-xl text-base"
              >
                <Phone className="w-5 h-5" /> Call Now: (800) 555-ROOF
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openPopup();
                }}
                className="cta-inspection block w-full py-sp-5 bg-accent text-accent-text text-text-primary text-center font-semibold rounded-xl text-sm transition-all duration-[180ms] hover:brightness-110"
              >
                Get Your Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content — NO entrance animation per guide */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 relative z-10 pt-[80px] pb-[64px] md:pt-sp-10 md:pb-sp-9 items-center">
        <div className="w-full max-w-4xl flex flex-col items-start text-left lg:pr-4 mx-0 lg:ml-8">
          <div className="text-text-secondary font-semibold tracking-[0.2em] text-[10px] md:text-[11px] uppercase mb-sp-6 flex items-center gap-4">
            <span className="w-10 h-[2px] bg-text-secondary" />
            <span className="text-theme">★★★★★</span> 247 Verified Google Reviews
          </div>

          <h1 className="font-display leading-[1.1] font-medium tracking-tight mb-[24px] text-text-primary" style={{ letterSpacing: '-0.02em' }}>
            {/* Longest */}
            <span className="block text-[34px] md:text-[46px] lg:text-[56px] whitespace-nowrap">Stop Small Roof Damage</span>
            {/* Medium */}
            <span className="block mt-2 text-text-primary/95 text-[28px] md:text-[38px] lg:text-[46px]">From Turning Into</span>
            {/* Italic emphasis — 80-85% of primary headline size */}
            <span className="block mt-2 text-text-secondary italic font-light text-[22px] md:text-[30px] lg:text-[38px]">a $10,000 Repair</span>
          </h1>
          <p className="text-glow-white text-text-primary italic text-[13px] md:text-sm tracking-[0.25em] uppercase mb-7 font-medium">— Free Roof Inspection Within 24 Hours</p>
          <p className="max-w-xl text-text-secondary/80 text-[12px] md:text-sm leading-[1.7] mb-[40px]">
            Your roof gets inspected, reported, and repaired fast — backed by a 25-year guarantee, fully licensed and insured, serving Brooklyn, Staten Island, and the Tri-State area since 1999.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-sp-5 mt-[32px]">
            <a href="#projects" className="group px-[26px] py-[13px] text-text-secondary hover:text-text-primary font-semibold uppercase tracking-widest text-[11px] md:text-[13px] relative overflow-hidden transition-colors duration-[180ms]">
              <span className="relative z-10 flex items-center gap-2">
                VIEW OUR WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-[180ms] opacity-60" />
              </span>
              <span className="absolute bottom-1.5 left-7 right-10 h-[1.5px] bg-text-primary/20 group-hover:bg-text-primary transition-colors duration-[180ms]" />
            </a>
            <button onClick={openPopup} className="cta-inspection cta-primary group px-[26px] py-[13px] bg-accent text-accent-text shadow-2xl shadow-accent/30 font-black uppercase tracking-[0.15em] rounded-full transition-all duration-[180ms] ease hover:scale-[1.02] active:scale-[0.98] hover:brightness-110 text-[12px] md:text-[14px]">
              <span className="flex items-center gap-3">
                GET MY FREE INSPECTION <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-[180ms]" />
              </span>
            </button>
          </div>

          <div className="mt-8 text-theme/80 font-medium tracking-[0.2em] text-[10px] md:text-[11px] uppercase flex items-center gap-3">
            {/* Static dot — no looping animate-pulse per guide */}
            <span className="w-1.5 h-1.5 rounded-full bg-theme" />
            No obligation · Licensed &amp; Insured · Response within 24hrs
          </div>
        </div>
      </div>

      {/* Float card 1 — short entrance, no parallax */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
        className="hidden lg:block absolute bottom-24 right-[22%] 2xl:right-[28%] z-20 backdrop-blur-2xl bg-bg-lift/60 border border-border-default rounded-3xl p-6 shadow-2xl w-[250px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold tracking-[0.25em] text-theme uppercase flex items-center gap-2">
            FEATURED
          </span>
          <span className="w-2 h-2 rounded-full bg-theme shadow-[0_0_10px_var(--color-theme-glow)]" />
        </div>
        <div className="w-full h-[1px] bg-white/10 mb-5 mt-1" />
        <div className="space-y-3 text-[11px] tracking-widest">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary/40 uppercase">Area</span>
            <span className="text-text-primary font-medium text-right leading-tight">Brooklyn,<br />Staten Island</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-secondary/40 uppercase">Experience</span>
            <span className="text-text-primary font-medium">25+ Years</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-secondary/40 uppercase">Rating</span>
            <span className="text-text-primary font-medium">5.0 Google</span>
          </div>
        </div>
      </motion.div>

      {/* Float card 2 — short entrance, no parallax */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
        className="hidden xl:block absolute top-40 right-[12%] z-20 backdrop-blur-2xl bg-bg-lift/60 border border-border-default rounded-2xl p-6 shadow-2xl w-[260px]"
      >
        <div className="flex flex-col items-start relative">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-theme text-theme" />
            ))}
          </div>
          <div className="text-text-primary font-display text-[22px] font-bold leading-tight mb-1">
            247 Google Reviews
          </div>
          <div className="text-text-secondary/50 text-[14px] font-medium tracking-wide">
            5.0 Rating
          </div>
          <div className="absolute bottom-0 right-0 opacity-40">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — simple static fade */}
      <div className="absolute bottom-32 md:bottom-28 lg:bottom-12 xl:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-[15] pointer-events-none hidden md:flex">
        <span className="text-[9px] tracking-[0.3em] uppercase text-text-secondary/40">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-text-secondary/25 to-transparent" />
      </div>
    </section>
  );
}
