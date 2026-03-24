import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  const extraReviews = [
    {
      initial: 'R',
      name: 'Robert H.',
      loc: 'Bay Ridge · Flat Roof Repair',
      quote: "Professional from start to finish. The price they quoted was exactly what I paid, and they left the site spotless.",
      platform: 'Google',
      color: '#A3A3A3',
      borderColor: '#A3A3A3'
    },
    {
      initial: 'S',
      name: 'Susan P.',
      loc: 'Sunset Park · Gutter Installation',
      quote: "Friendly crew and very efficient. They finished the whole job in less than a day. Highly recommend for any roofing needs.",
      platform: 'Yelp',
      color: '#A3A3A3',
      borderColor: '#A3A3A3'
    },
    {
      initial: 'K',
      name: 'Kevin J.',
      loc: 'Bensonhurst · Shingle Repair',
      quote: "Great communication throughout the process. They explained what was wrong and how they were going to fix it. Very transparent.",
      platform: 'Google',
      color: '#A3A3A3',
      borderColor: '#A3A3A3'
    }
  ];

  return (
    <section className="w-full bg-bg-base py-sp-8 md:py-sp-9 px-6 relative z-10 overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-sp-8 md:mb-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-sp-5 rounded-full bg-theme/10 border border-theme/20 mb-[24px]"
          >
            <CheckCircle2 className="w-4 h-4 text-theme" />
            <span className="text-xs font-bold tracking-widest uppercase text-theme">100% Verified Local Homeowners</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="reviews-heading" 
            className="text-4xl md:text-5xl font-display font-medium text-text-primary max-w-2xl mb-4 leading-tight"
          >
            What your neighbors<br/>say about us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary/80 text-lg max-w-xl"
          >
            Real customers · real results · every review is verifiable
          </motion.p>
        </div>

        {/* Verification Mix Layout: Video Left, Text Right */}
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[56px]">
          
          {/* =========================================
              LEFT COLUMN: VIDEO TESTIMONIALS
              ========================================= */}
          <div className="flex-1 w-full flex flex-col gap-sp-5">
            
            {/* Video Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="w-full group rounded-2xl overflow-hidden border border-border-default bg-bg-card cursor-pointer hover:border-theme/40 transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-[120px] w-full bg-bg-elevated overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop" 
                  alt="Customer video review" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-border-hover flex items-center justify-center group-hover:bg-theme text-bg-base/90 group-hover:border-theme transition-all duration-300">
                    <Play className="w-4 h-4 text-text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {/* Duration */}
                <span className="absolute bottom-2 right-3 text-[10px] font-mono text-text-primary/70">0:42</span>
              </div>
              {/* Info Footer */}
              <div className="p-4">
                <div className="flex text-[#A3A3A3] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#A3A3A3]" />)}
                </div>
                <p className="text-sm font-medium text-text-primary">Sarah M.</p>
                <p className="text-xs uppercase tracking-wider text-text-secondary mt-0.5">Oak Park · Full Replacement</p>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full group rounded-2xl overflow-hidden border border-border-default bg-bg-card cursor-pointer hover:border-theme/40 transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-[120px] w-full bg-bg-elevated overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop" 
                  alt="Customer video review" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-border-hover flex items-center justify-center group-hover:bg-theme text-bg-base/90 group-hover:border-theme transition-all duration-300">
                    <Play className="w-4 h-4 text-text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-3 text-[10px] font-mono text-text-primary/70">0:38</span>
              </div>
              {/* Info Footer */}
              <div className="p-4">
                <div className="flex text-[#A3A3A3] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#A3A3A3]" />)}
                </div>
                <p className="text-sm font-medium text-text-primary">James R.</p>
                <p className="text-xs uppercase tracking-wider text-text-secondary mt-0.5">Riverside Heights · Emergency Repair</p>
              </div>
            </motion.div>

            {/* Video Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full group rounded-2xl overflow-hidden border border-border-default bg-bg-card cursor-pointer hover:border-theme/40 transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-[120px] w-full bg-bg-elevated overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop" 
                  alt="Customer video review" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-border-hover flex items-center justify-center group-hover:bg-theme text-bg-base/90 group-hover:border-theme transition-all duration-300">
                    <Play className="w-4 h-4 text-text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-3 text-[10px] font-mono text-text-primary/70">0:56</span>
              </div>
              {/* Info Footer */}
              <div className="p-4">
                <div className="flex text-[#A3A3A3] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#A3A3A3]" />)}
                </div>
                <p className="text-sm font-medium text-text-primary">David L.</p>
                <p className="text-xs uppercase tracking-wider text-text-secondary mt-0.5">Downtown · Flat Roof Repair</p>
              </div>
            </motion.div>

          </div>

          {/* =========================================
              RIGHT COLUMN: SCANNABLE TEXT REVIEWS
              ========================================= */}
          <div className="flex-[1.2] flex flex-col gap-sp-5">
            
            <div className="flex flex-col gap-sp-5">
              {/* Text Review 1 */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
                 className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8 hover:border-[#A3A3A3]/50 transition-colors duration-[200ms]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-[#A3A3A3]/20 flex items-center justify-center font-display font-bold text-lg text-[#A3A3A3] border border-[#A3A3A3]/30">
                      M
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-primary">Mike T.</h4>
                      <p className="text-xs font-bold tracking-wider uppercase text-text-secondary">Downtown · Storm Damage</p>
                    </div>
                  </div>
                  {/* Google G Icon SVG */}
                  <svg className="w-6 h-6 opacity-80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex text-[#A3A3A3] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#A3A3A3]" />)}
                </div>
                <blockquote className="text-text-secondary/90 leading-[1.7] italic text-[15px] mb-4">
                  "Called at 8am after the storm, they were at my house by noon. Entire repair done same day. Couldn't believe it."
                </blockquote>
                <a href="#" className="inline-flex items-center text-xs font-bold uppercase text-text-secondary hover:text-text-primary transition-colors underline decoration-white/20 underline-offset-4">
                  Verified Purchase on Google
                </a>
              </motion.div>

              {/* Text Review 2 */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.16, duration: 0.35, ease: 'easeOut' }}
                 className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8 hover:border-[#378ADD]/50 transition-colors duration-[200ms]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-theme/10 flex items-center justify-center font-display font-bold text-lg text-theme border border-theme/30">
                      L
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-primary">Linda K.</h4>
                      <p className="text-xs font-bold tracking-wider uppercase text-text-secondary">North End · Full Replacement</p>
                    </div>
                  </div>
                  {/* Google G Icon SVG */}
                  <svg className="w-6 h-6 opacity-80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex text-[#A3A3A3] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#A3A3A3]" />)}
                </div>
                <blockquote className="text-text-secondary/90 leading-[1.7] italic text-[15px] mb-4">
                  "They handled everything with my insurance. I barely had to do anything. Roof looks incredible."
                </blockquote>
                <a href="#" className="inline-flex items-center text-xs font-bold uppercase text-text-secondary hover:text-text-primary transition-colors underline decoration-white/20 underline-offset-4">
                  Verified Purchase on Google
                </a>
              </motion.div>

              {/* Text Review 3 */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.24, duration: 0.35, ease: 'easeOut' }}
                 className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8 hover:border-[#A3A3A3]/50 transition-colors duration-[200ms]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-[#A3A3A3]/20 flex items-center justify-center font-display font-bold text-lg text-[#A3A3A3] border border-[#A3A3A3]/30">
                      D
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-primary">David C.</h4>
                      <p className="text-xs font-bold tracking-wider uppercase text-text-secondary">Westside · Inspection + Repair</p>
                    </div>
                  </div>
                   {/* Yelp Burst Icon Shape SVG */}
                   <svg className="w-6 h-6 opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11.64 12.06c-1.3-.4-1.89-1.24-1.46-2.58l.61-1.92c.6-1.9.15-3.34-1.25-4.04-1.42-.7-3.04.05-3.8 1.94l-1.07 2.65c-.56 1.4-1.6 1.63-2.92.83l-1.8-1.08c-1.74-1.04-3.52-.36-4.04 1.5-.52 1.83.47 3.52 2.22 3.86l2.36.46c1.4.28 1.86 1.15 1.56 2.5l-.25 1.17c-.4 1.87.5 3.32 1.96 3.42 1.47.1 2.87-1.16 3.27-3.03l.53-2.48c.3-1.4.22-2.19 1.56-2.61l2.42-.77c1.78-.57 2.4-1.9.96-3.23l-1.86-1.7-1.12 1.92c-.37.63-1.3.93-2.3 1.25z" fill="#FF1A1A"/>
                     <path d="M14.54 13.56l2.16.27c2.18.28 3.5 1.4 3.02 3.12-.49 1.7-2.6 2.4-4.8 1.46L13.1 17.6c-1.27-.55-1.95.14-1.7 1.53l.42 2.33c.36 1.96-.54 3.25-2.28 2.87-1.72-.37-2.73-1.88-2.6-3.8l.2-2.8c.12-1.65.65-2.14 1.9-2.02l2.37.22c1.45.14 2 1.08 1.18 2.22-.55.77-1.3 1.57-2.4 2.89L14.54 13.5z" fill="#FF1A1A"/>
                   </svg>
                </div>
                <div className="flex text-[#A3A3A3] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#A3A3A3]" />)}
                </div>
                <blockquote className="text-text-secondary/90 leading-[1.7] italic text-[15px] mb-4">
                  "No mess, no stress. They even swept the driveway after. Will use again without question."
                </blockquote>
                <a href="#" className="inline-flex items-center text-xs font-bold uppercase text-text-secondary hover:text-text-primary transition-colors underline decoration-white/20 underline-offset-4">
                  Verified Purchase on Yelp
                </a>
              </motion.div>
            </div>

            {/* Read More Section */}
            <AnimatePresence>
              {showMore && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col gap-sp-5"
                >
                  {extraReviews.map((review, index) => (
                    <div 
                      key={index}
                      className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8 hover:border-border-hover transition-colors duration-300"
                      style={{ borderLeft: `4px solid ${review.borderColor}` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg border" style={{ backgroundColor: `${review.color}20`, color: review.color, borderColor: `${review.color}30` }}>
                            {review.initial}
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-text-primary">{review.name}</h4>
                            <p className="text-xs font-bold tracking-wider uppercase text-text-secondary">{review.loc}</p>
                          </div>
                        </div>
                        {/* Static Icon for Platform */}
                        <div className="text-text-secondary/40 text-[10px] font-bold uppercase tracking-widest">{review.platform} Review</div>
                      </div>
                      <div className="flex text-[#A3A3A3] mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#A3A3A3]" />)}
                      </div>
                      <blockquote className="text-text-secondary/90 leading-[1.7] italic text-[15px]">
                        "{review.quote}"
                      </blockquote>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 w-full flex items-center justify-center gap-2 py-sp-5 rounded-xl border border-border-default bg-white/5 hover:bg-bg-hover hover:scale-[1.01] text-text-secondary hover:text-text-primary font-bold tracking-wider text-xs uppercase transition-all duration-[180ms] ease"
            >
              {showMore ? (
                <>Show Fewer Reviews <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Read More Success Stories <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
            
          </div>
        </div>

        {/* Bottom Verification Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-10 md:mt-14 opacity-60"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3]"></div>
          <span className="text-xs uppercase tracking-widest text-text-secondary">
            All reviews from real customers · Names and locations verified
          </span>
        </motion.div>

      </div>
    </section>
  );
}
