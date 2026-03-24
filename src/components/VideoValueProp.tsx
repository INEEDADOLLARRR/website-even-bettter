import { motion } from 'motion/react';
import { Play, Clock, CheckCircle2, ShieldCheck, Sparkles, FileText } from 'lucide-react';

export function VideoValueProp() {
  return (
    <section className="w-full bg-[#030303] py-sp-8 md:py-sp-9 px-6 relative z-10 overflow-hidden border-t border-border-default" aria-labelledby="value-prop-heading">
      
      {/* Subtle Background Glows (Removed for conversion focus) */}
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-sp-8 md:mb-[80px]">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-sp-5 rounded-full bg-white/5 border border-border-default mb-[24px]"
          >
            <ShieldCheck className="w-4 h-4 text-[#A3A3A3]" />
            <span className="text-xs font-bold tracking-widest uppercase text-text-secondary">The MyRoofTop Standard</span>
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             id="value-prop-heading"
             className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-primary max-w-3xl leading-tight"
          >
            We don't just fix roofs.<br/>
            <span className="text-theme italic">We eliminate your risk.</span>
          </motion.h2>
        </div>

        {/* Content Layout: Video Left, Value Props Right */}
        <div className="flex flex-col lg:flex-row gap-sp-7 lg:gap-20 items-stretch">
          
          {/* =========================================
              LEFT COLUMN: VIDEO TEMPLATE
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex-1 w-full max-w-3xl mx-auto lg:mx-0 flex flex-col"
          >
            {/* The Player Container */}
            <div className="relative w-full aspect-video bg-bg-card rounded-2xl overflow-hidden group cursor-pointer border border-border-default shadow-2xl shadow-black/50">
              
              {/* Thumbnail Image (Shows Owner/Crew on job site) */}
              <img 
                src="https://images.unsplash.com/photo-1541888081121-6d63b06bc911?q=80&w=2574&auto=format&fit=crop" 
                alt="See how our team works on a live roof replacement" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlays for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-theme text-text-muted mix-blend-overlay group-hover:bg-theme text-bg-base/0 transition-colors duration-500" />
              
              {/* Central Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-border-hover flex items-center justify-center transform group-hover:scale-110 group-hover:bg-theme text-bg-base/90 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-text-primary ml-2" fill="currentColor" />
                </div>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-end justify-between pointer-events-none">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-border-default w-max">
                     <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-[10px] font-bold tracking-widest uppercase text-text-primary">Live Job Site</span>
                  </div>
                  <p className="text-xl md:text-2xl font-display text-text-primary drop-shadow-lg">Meet your roofing team.</p>
                </div>
                
                {/* Duration Badge */}
                <div className="flex items-center gap-1.5 text-text-primary/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded border border-border-default">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold font-mono">0:58</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-text-secondary/60 mt-4 px-2 italic">
              "We filmed this 60-second video on a recent project in Brooklyn. No actors, just our real team doing real work."
            </p>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: SPECIFIC VALUE PROPOSITIONS
              ========================================= */}
          <div className="flex-[0.8] flex flex-col justify-center gap-sp-5 md:gap-sp-6">
            
            {/* VP 1: Speed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
              className="flex gap-5 md:gap-sp-5 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#97C459]/10 border border-[#97C459]/20 flex items-center justify-center group-hover:bg-[#97C459]/20 transition-colors">
                  <Clock className="w-5 h-5 text-[#97C459]" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-display text-text-primary mb-2 group-hover:text-[#97C459] transition-colors">Emergency repairs within 24 hours</h3>
                <p className="text-base text-text-secondary/80 leading-[1.7]">
                  We answer the phone 7 days a week. If you have an active leak, we guarantee a team will be on-site within 24 hours to secure your home.
                </p>
              </div>
            </motion.div>

            {/* VP 2: Warranty */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.35, ease: 'easeOut' }}
              className="flex gap-5 md:gap-sp-5 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-theme/10 border border-theme/20 flex items-center justify-center group-hover:bg-theme/20 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-theme" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-display text-text-primary mb-2 group-hover:text-theme transition-colors">10-year workmanship guarantee in writing</h3>
                <p className="text-base text-text-secondary/80 leading-[1.7]">
                  Most roofers offer verbal promises. We hand you a legally binding, written guarantee on our installation alongside the manufacturer's material warranty.
                </p>
              </div>
            </motion.div>

            {/* VP 3: Cleanliness */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.35, ease: 'easeOut' }}
              className="flex gap-5 md:gap-sp-5 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-display text-text-primary mb-2 group-hover:text-[#85B7EB] transition-colors">The "No-Mess" property protection promise</h3>
                <p className="text-base text-text-secondary/80 leading-[1.7]">
                  Every shrub is tarped, and every driveway is magnetically swept for nails. We clean up completely at the end of every single work day.
                </p>
              </div>
            </motion.div>

            {/* VP 4: Insurance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.35, ease: 'easeOut' }}
              className="flex gap-5 md:gap-sp-5 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#A3A3A3]/10 border border-[#A3A3A3]/20 flex items-center justify-center group-hover:bg-[#A3A3A3]/20 transition-colors">
                  <FileText className="w-5 h-5 text-[#A3A3A3]" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-display text-text-primary mb-2 group-hover:text-[#A3A3A3] transition-colors">We handle the insurance claims for you</h3>
                <p className="text-base text-text-secondary/80 leading-[1.7]">
                  For storm damage, dealing with adjusters is a nightmare. Our dedicated team handles all the paperwork directly with your insurance at no extra cost.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
