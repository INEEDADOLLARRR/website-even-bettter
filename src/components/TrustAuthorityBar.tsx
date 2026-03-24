import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Shield, Award } from 'lucide-react';

export function TrustAuthorityBar() {
  return (
    <section className="w-full bg-bg-base border-y border-border-default relative z-20 overflow-hidden" aria-label="Trust and Authority">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full bg-theme text-bg-base/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex flex-col xl:flex-row divide-y xl:divide-y-0 xl:divide-x divide-white/10">
          
          {/* =========================================
              PART 1: TRUST STRIP (Emotional / Social)
              ========================================= */}
          <motion.a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex-[1.2] py-[20px] md:py-sp-5 px-[20px] md:px-[24px] flex flex-col md:flex-row items-start md:items-center gap-sp-6 group hover:bg-bg-hover transition-all duration-500"
          >
            {/* Premium Google Widget */}
            <div className="flex items-center gap-5 bg-white rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-border-default w-full md:w-auto transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="flex-shrink-0 bg-white p-1 rounded-lg">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-theme mb-0.5">
                  <span className="text-lg leading-none">★</span><span className="text-lg leading-none">★</span><span className="text-lg leading-none">★</span><span className="text-lg leading-none">★</span><span className="text-lg leading-none">★</span>
                </div>
                <span className="text-xs font-bold text-black/80 font-sans tracking-tight">5.0 GOOGLE RATING</span>
              </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="flex flex-col gap-2">
              <p className="font-display italic text-2xl md:text-3xl text-text-primary leading-tight tracking-tight group-hover:text-theme transition-colors duration-500">
                &ldquo;Fixed our leak same day! Pure professionals.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="font-sans font-semibold text-xs text-text-secondary tracking-widest uppercase">
                  Sarah M.
                </span>
                <span className="w-1.5 h-[1px] bg-theme text-text-muted" />
                <span className="font-sans text-xs text-text-secondary/50 tracking-wide">
                  Brooklyn, NY
                </span>
              </div>
            </div>
          </motion.a>

          {/* =========================================
              PART 2: AUTHORITY STACK (Rational / Logical)
              ========================================= */}
          <div className="flex-[1.8] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            
            {/* 1. License Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
              className="flex flex-col items-start justify-center p-[20px] md:p-[24px] gap-3 bg-gradient-to-br from-theme/[0.05] to-transparent hover:from-theme/[0.15] transition-all duration-700 group/item"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-full bg-theme text-text-muted group-hover/item:bg-theme text-text-muted transition-colors">
                  <ShieldCheck className="w-5 h-5 text-theme" />
                </div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-theme/80">LICENSE</span>
              </div>
              <span className="font-display text-2xl md:text-3xl font-medium text-text-primary group-hover/item:text-theme transition-colors duration-500">
                #CR12345
              </span>
              <span className="text-xs text-text-secondary/40 font-medium tracking-wide">Verified Contractor</span>
            </motion.div>

            {/* 2. Insurance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.16, ease: 'easeOut' }}
              className="flex flex-col items-start justify-center p-[20px] md:p-[24px] gap-3 hover:bg-bg-hover transition-all duration-700 group/item"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-full bg-[#A3A3A3]/10 group-hover/item:bg-[#A3A3A3]/20 transition-colors">
                  <Shield className="w-5 h-5 text-[#A3A3A3]" />
                </div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#A3A3A3]/80">PROTECTION</span>
              </div>
              <span className="font-display text-2xl md:text-3xl font-medium text-text-primary leading-tight">
                Fully Insured
              </span>
              <span className="text-xs text-text-secondary/40 font-medium tracking-wide">Liability & Workers' Comp</span>
            </motion.div>

            {/* 3. Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col items-start justify-center p-[20px] md:p-[24px] gap-3 hover:bg-bg-hover transition-all duration-700 group/item"
            >
               <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-full bg-text-secondary/10 group-hover/item:bg-text-secondary/20 transition-colors">
                  <Award className="w-5 h-5 text-text-secondary" />
                </div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-text-secondary/80">CERTIFIED</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-[#E24B4A] flex items-center justify-center text-[11px] font-bold text-text-primary shadow-lg shadow-[#E24B4A]/20">G</div>
                <span className="font-display text-2xl md:text-3xl font-medium text-text-primary leading-tight">
                  Master Elite
                </span>
              </div>
              <span className="text-xs text-text-secondary/40 font-medium tracking-wide">Top 2% Globally</span>
            </motion.div>

            {/* 4. Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.32, ease: 'easeOut' }}
              className="flex flex-col items-start justify-center p-[20px] md:p-[24px] gap-3 hover:bg-bg-hover transition-all duration-700 group/item"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-full bg-text-secondary/10 group-hover/item:bg-text-secondary/20 transition-colors">
                  <Calendar className="w-5 h-5 text-text-secondary" />
                </div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-text-secondary/80">LEGACY</span>
              </div>
              <span className="font-display text-2xl md:text-3xl font-medium text-text-primary">
                25<span className="text-theme">+</span> Years
              </span>
              <span className="text-xs text-text-secondary/40 font-medium tracking-wide">Serving Brooklyn, NY</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
