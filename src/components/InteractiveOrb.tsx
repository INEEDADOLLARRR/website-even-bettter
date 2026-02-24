import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ORB_DATA = [
    { id: 0, title: "Liquid Elastomers", angle: 0, description: "Seamless, monolithic rapid-cure membranes engineered for ultimate weather resistance." },
    { id: 1, title: "Custom Fabrication", angle: 72, description: "In-house copper and zinc architectural standing seam fabrication." },
    { id: 2, title: "Thermal Modeling", angle: 144, description: "Infrared diagnostic mapping to isolate efficiency leaks instantly." },
    { id: 3, title: "Structural Engineering", angle: 216, description: "Comprehensive load-bearing analysis for heavy estate roofing." },
    { id: 4, title: "Generational Warranty", angle: 288, description: "Uncompromising 25-50 year full coverage for complete peace of mind." },
];

export function InteractiveOrb() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const handleNodeClick = (index: number) => {
        setActiveIndex(index);
        setRotation(360 - ORB_DATA[index].angle);
    };

    return (
        <section aria-label="Service capabilities" className="py-28 bg-brand-black text-brand-white relative overflow-hidden flex flex-col items-center min-h-[80vh] justify-center">
            <div className="text-center mb-24 z-10 max-w-xl px-6">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-5 flex items-center justify-center gap-4"
                >
                    <span className="w-8 h-[1px] bg-brand-blue" />
                    Interactive Protocol
                    <span className="w-8 h-[1px] bg-brand-blue" />
                </motion.p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-5">
                    Precision Ecosystem.
                </h2>
                <p className="text-brand-silver/50 font-light leading-relaxed text-sm">
                    Explore our comprehensive architectural services.
                </p>
            </div>

            <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px] flex items-center justify-center">
                <motion.div
                    className="absolute inset-0 rounded-full border border-brand-white/5"
                    animate={{ rotate: rotation }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                >
                    {ORB_DATA.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <div key={i} className="absolute inset-0 pointer-events-none" style={{ transform: `rotate(${item.angle}deg)` }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                    <button
                                        onMouseEnter={() => handleNodeClick(i)}
                                        onClick={() => handleNodeClick(i)}
                                        aria-label={item.title}
                                        className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${isActive ? 'bg-brand-white scale-110' : 'bg-brand-black border border-brand-silver/20 hover:border-brand-white/50 hover:scale-105'}`}
                                    >
                                        <motion.div
                                            animate={{ rotate: -rotation - item.angle }}
                                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-500 ${isActive ? 'bg-brand-black' : 'bg-brand-white/60'}`} />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <div className="absolute w-56 md:w-72 text-center z-10 pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-3 text-brand-white">
                                {ORB_DATA[activeIndex].title}
                            </h3>
                            <p className="text-sm text-brand-silver/50 font-light leading-relaxed">
                                {ORB_DATA[activeIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
