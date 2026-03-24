import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { useRef, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '#about' },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const borderHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "12%"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} aria-label="Hero" className="relative min-h-screen flex items-center justify-center bg-brand-black text-brand-white overflow-hidden">
      {/* Video background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 transform-gpu overflow-hidden will-change-transform">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://picsum.photos/seed/hero-poster/1920/1080"
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/50 to-brand-black/90 pointer-events-none" />
      </motion.div>

      {/* Cinema borders */}
      <motion.div style={{ height: borderHeight, opacity: borderOpacity }} className="absolute top-0 left-0 right-0 bg-brand-black z-40 pointer-events-none" />
      <motion.div style={{ height: borderHeight, opacity: borderOpacity }} className="absolute bottom-0 left-0 right-0 bg-brand-black z-40 pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        style={{ opacity: textOpacity }}
        className="absolute top-0 left-0 w-full z-50 px-8 py-6 md:px-16 md:py-8 flex items-center justify-between border-b border-brand-white/5"
        aria-label="Main navigation"
      >
        <div className="md:flex-1 flex items-center">
          <a href="/" className="flex items-center gap-2" aria-label="Verrazano Roofing home">
            <div className="w-8 h-8 bg-brand-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <div className="w-3 h-3 bg-brand-black rounded-full" />
            </div>
            <span className="font-display font-semibold text-lg tracking-wide">VERRAZANO</span>
          </a>
        </div>

        {/* Desktop nav - Centered */}
        <div className="hidden md:flex items-center gap-12 text-[13px] font-medium tracking-[0.18em] text-brand-silver uppercase">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="magnetic-underline hover:text-brand-white transition-colors duration-300 pb-1">{link.label}</a>
          ))}
        </div>

        {/* Desktop right — Phone + Theme + CTA */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-5">
          {/* Phone button — white style with interactive effects */}
          <a
            href="tel:18005557663"
            className="cta-secondary flex items-center gap-3 px-7 py-3 rounded-full text-xs tracking-wide whitespace-nowrap"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            (800) 555-ROOF
          </a>

          <ThemeToggle />

          {/* CTA button — primary prominence */}
          <a
            href="#consultation"
            className="cta-primary px-10 py-3.5 rounded-full text-sm font-black tracking-[0.15em] uppercase text-black"
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
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-brand-white/20 text-brand-white"
        >
          {menuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
        </button>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-brand-black/98 flex flex-col"
          >
            <div className="px-5 py-5 flex items-center justify-between border-b border-brand-white/5">
              <span className="font-display font-semibold text-base tracking-wide text-brand-white">VERRAZANO</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-white/10 text-brand-white"
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl font-medium text-brand-white py-3 border-b border-brand-white/5 hover:text-brand-silver transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10 flex flex-col gap-3">
              <a
                href="tel:18005557663"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-brand-black font-bold rounded-xl text-sm"
              >
                <Phone className="w-4 h-4" /> Call Now: (800) 555-ROOF
              </a>
              <a
                href="#consultation"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-4 bg-brand-accent text-white text-center font-semibold rounded-xl text-sm"
              >
                Get Your Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div style={{ opacity: textOpacity }} className="container mx-auto px-5 md:px-6 relative z-10 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        <div className="w-full max-w-[1200px] flex flex-col items-start justify-center -translate-x-3">
          <div className="text-brand-accent font-semibold tracking-[0.2em] text-[10px] md:text-[11px] uppercase mb-8 flex items-center gap-4">
            <span className="w-10 h-[2px] bg-brand-accent" />
            ★★★★★ Rated Best-in-Class
          </div>

          <h1 className="font-display leading-[1.1] font-medium tracking-tight mb-4 text-brand-white">
            <span className="block whitespace-nowrap text-[36px] md:text-[44px] lg:text-[48px]">Stop Small Roof Damage</span>
            <span className="block mt-1 whitespace-nowrap text-brand-white/90 text-[34px] md:text-[40px] lg:text-[44px]">From Turning Into</span>
            <span className="block mt-1 whitespace-nowrap text-brand-accent italic font-light text-[36px] md:text-[44px] lg:text-[48px]">a $10,000 Repair</span>
          </h1>
          <p className="text-brand-silver/60 italic text-[11px] md:text-xs tracking-widest uppercase mb-5">— Free Roof Inspection Within 24 Hours</p>
          <p className="max-w-xl text-brand-silver/70 text-[11px] md:text-xs leading-relaxed mb-8">
            Your roof gets inspected, reported, and repaired fast — backed by a [X]-year guarantee, fully licensed and insured, serving [City] and surrounding areas since [Year].
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7 mt-6 w-full">
            <a href="#projects" className="group px-6 py-4 md:px-7 md:py-5 text-brand-silver hover:text-brand-white font-medium uppercase tracking-[0.2em] text-xs md:text-sm relative overflow-hidden transition-colors duration-300">
              <span className="relative z-10 flex items-center gap-2">
                VIEW OUR WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 opacity-50" />
              </span>
              <span className="absolute bottom-4 left-7 right-11 h-[1px] bg-brand-white/20 group-hover:bg-brand-white transition-colors duration-300" />
            </a>
            <a href="#consultation" className="cta-primary group px-8 py-4 md:px-10 md:py-5 bg-brand-accent text-brand-black font-bold uppercase tracking-[0.2em] rounded-full text-xs md:text-sm">
              <span className="flex items-center gap-4">
                GET MY FREE INSPECTION <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          <div className="mt-8 text-brand-silver/40 tracking-wider text-[9px] md:text-[10px]">
            No obligation · Licensed &amp; Insured · Response within 24 hrs
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="flex items-center justify-end w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-[110%] lg:translate-x-8 xl:w-[120%] xl:translate-x-12 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            style={{ borderRadius: "28px" }}
          >
            <img
              src="/roofer-on-top-of-a-house.png"
              alt="Roof inspection in progress"
              className="w-full h-auto object-cover min-h-[420px] lg:min-h-[540px] object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              style={{ borderRadius: "28px" }}
            />
            {/* Subtle left-side fade so image blends into content */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>



      {/* Scroll indicator */}
      <motion.div
        // Keep scroll indicator under authority bar visually or fade it out
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-32 md:bottom-28 lg:bottom-12 xl:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[15] pointer-events-none hidden md:flex"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-brand-silver/40">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-silver/25 to-transparent" />
      </motion.div>
    </section>
  );
}
