import { motion } from 'motion/react';
import { MapPin, Star } from 'lucide-react';

// Gallery imagery — local verified project photos
const PHOTOS = {
  beforeAfter: "/images/proof/photo1.jpg", // biggest grid
  crew: "/images/proof/photo2.png",
  material: "/images/proof/photo3.jpg",
  homeowner: "/images/proof/photo4.jpg",
  leadership: "/images/proof/photo5.jpg",
  truck: "/images/proof/photo6.jpg"
};

export function LocalProofGallery() {
  return (
    <section className="w-full bg-bg-base py-sp-8 md:py-sp-9 px-6 relative z-10 overflow-hidden" aria-labelledby="gallery-heading">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* === SECTION HEADER === */}
        <div className="flex flex-col items-center text-center mb-sp-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-sp-5 rounded-full bg-theme/10 border border-theme/20"
          >
            <MapPin className="w-4 h-4 text-theme" />
            <span className="text-xs font-bold tracking-widest uppercase text-theme">Brooklyn's Trusted Roofer</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="gallery-heading" 
            className="text-3xl md:text-5xl font-display font-medium text-text-primary max-w-2xl"
          >
            Real Roofs. Real Neighbors.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-text-secondary/80 max-w-xl"
          >
            We don't use stock photos. See the actual transformations we've completed right here in our community.
          </motion.p>
        </div>

        {/* === LIVE METRICS STRIP === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-sp-5 mb-sp-8"
        >
          {/* Metric 1 */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-bg-card border border-border-default hover:border-theme/30 transition-colors">
            <span className="text-4xl md:text-5xl font-display font-medium text-text-primary mb-2">500<span className="text-theme">+</span></span>
            <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">Roofs Completed in Brooklyn</span>
          </div>
          {/* Metric 2 */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-bg-card border border-border-default hover:border-theme/30 transition-colors">
            <span className="text-4xl md:text-5xl font-display font-medium text-text-primary mb-2">25<span className="text-theme">+</span></span>
            <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">Years Serving New York</span>
          </div>
          {/* Metric 3 */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-bg-card border border-border-default hover:border-theme/30 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl md:text-5xl font-display font-medium text-text-primary">4.9</span>
              <Star className="w-8 h-8 text-theme fill-theme" />
            </div>
            <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">Average Google Rating</span>
          </div>
        </motion.div>

        {/* === ALTERNATING PHOTO GRID === */}
        {/* 
        {/* Desktop: Masonry-style grid utilizing span variations.
          Mobile: Single column stack. */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-sp-5 md:h-[900px]">
          
          {/* Item 1: Before/After (Large Feature) - Type 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-bg-card border border-border-default"
          >
            <img src={PHOTOS.beforeAfter} alt="Before and after complete roof replacement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="inline-block px-3 py-1 bg-theme text-bg-base text-text-primary text-xs font-bold tracking-wider uppercase rounded mb-3">Full Replacement</div>
              <h3 className="text-xl md:text-3xl font-display text-text-primary mb-2">Park Slope · Full Replacement · March 2025</h3>
              <p className="text-sm text-text-primary/80 font-medium flex items-center gap-2">
                <MapPin className="w-3 h-3 text-theme" /> Verified Local Project
              </p>
            </div>
          </motion.div>

          {/* Item 2: Crew Working - Type 2 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl bg-bg-card border border-border-default min-h-[250px]"
          >
            <img src={PHOTOS.crew} alt="Our crew installing GAF Timberline shingles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <p className="text-sm font-display text-text-primary mb-1 leading-tight">Bay Ridge · Emergency Repair · February 2025</p>
              <p className="text-xs text-text-secondary font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-theme/60" /> Verified Site
              </p>
            </div>
          </motion.div>

          {/* Item 3: Material Close Up - Type 5 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl bg-bg-card border border-border-default min-h-[250px]"
          >
            <img src={PHOTOS.material} alt="Close up of architectural shingles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <p className="text-sm font-display text-text-primary mb-1 leading-tight">Dyker Heights · Flashing + Gutters · January 2025</p>
              <p className="text-xs text-text-secondary font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-theme/60" /> Verified Detail
              </p>
            </div>
          </motion.div>

          {/* Item 4: Homeowner - Type 3 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl bg-bg-card border border-border-default min-h-[250px]"
          >
            <img src={PHOTOS.homeowner} alt="Smiling homeowner shaking hands" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full">
               <div className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md text-text-primary border border-border-hover text-[10px] uppercase font-bold tracking-wider rounded-sm mb-2">
                "Best decision I made."
              </div>
              <p className="text-sm text-text-primary font-display mb-1 leading-tight">Bensonhurst · Roof Restoration · March 2025</p>
              <p className="text-xs text-text-secondary font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-theme/60" /> Licensed Work
              </p>
            </div>
          </motion.div>

          {/* Item 5: Leadership - Type 6 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl bg-bg-card border border-border-default min-h-[250px]"
          >
            <img src={PHOTOS.leadership} alt="MyRoofTop Owner" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <p className="text-sm font-display text-text-primary mb-1 leading-tight">Sunset Park · Final Inspection · March 2025</p>
              <p className="text-xs text-text-secondary font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-theme/60" /> Owner Verified
              </p>
            </div>
          </motion.div>

          {/* Item 6: Truck - Type 4 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl bg-bg-card border border-border-default min-h-[250px]"
          >
            <img src={PHOTOS.truck} alt="Company truck parked at job site" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <p className="text-sm font-display text-text-primary mb-1 leading-tight">Bay Ridge · Shingle Installation · February 2025</p>
              <p className="text-xs text-text-secondary font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-theme/60" /> Bay Ridge Crew
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
