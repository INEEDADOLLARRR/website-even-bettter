import { motion, useScroll, useTransform, useInView } from 'motion/react';
import type { Key } from 'react';
import { useRef, useState, useEffect } from 'react';

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Free 50-Point Inspection",
        description: "We begin with an exhaustive structural analysis and aesthetic consultation. Every material limitation and architectural opportunity is mapped out before design begins.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800&h=640"
    },
    {
        step: "02",
        title: "Engineering & Procurement",
        description: "Our engineers design a bespoke membrane and structural plan. Only the highest echelon of materials—from custom-milled zinc to liquid elastomers—are procured.",
        image: "https://images.unsplash.com/photo-1518640026222-26210f9227a6?auto=format&fit=crop&q=80&w=800&h=640"
    },
    {
        step: "03",
        title: "Master-Crafted, Zero-Mess Install",
        description: "Execution is paramount. Our master craftsmen operate with surgical precision, ensuring weather-tight integrity without disrupting the estate's ongoing operations.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800&h=640"
    },
    {
        step: "04",
        title: "A Lifetime Warranty You Can Trust",
        description: "Upon final inspection, the system is turned over with our uncompromising warranty. The roof is not just replaced; it is architecturally elevated for generations.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=640"
    }
];

function ProcessStep({ step, title, description, index, activeStep, setActiveStep }: { step: string, title: string, description: string, index: number, activeStep: number, setActiveStep: (i: number) => void, key?: Key }) {
    const ref = useRef<HTMLDivElement>(null);
    // Strict margins to ensure only one step is active in the very center of the viewport
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStep(index);
        }
    }, [isInView, index, setActiveStep]);

    const isActive = activeStep === index;

    return (
        <motion.div
            ref={ref}
            className="py-24 md:py-32 flex flex-col gap-4 origin-left transform-gpu will-change-transform"
            animate={{ opacity: isActive ? 1 : 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="flex items-center gap-4">
                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${isActive ? 'text-white' : 'text-brand-silver'}`}>Phase {step}</span>
            </div>
            <motion.h3
                className={`font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight origin-left transition-all duration-500 ${isActive ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'text-surface-text'}`}
                animate={{ scale: isActive ? 1.05 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {title}
            </motion.h3>
            <p className={`font-sans leading-relaxed text-sm max-w-lg font-light transition-colors duration-500 ${isActive ? 'text-white' : 'text-surface-muted/80'}`}>
                {description}
            </p>
        </motion.div>
    );
}

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    // Track scroll progress for the vertical line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} id="process" aria-label="Our process" className="relative bg-surface text-surface-text transition-colors duration-300">
            {/* Desktop: Scroll-synced experience (>= 1024px) */}
            <div className="container mx-auto px-5 md:px-6 hidden lg:grid grid-cols-2 gap-16 items-start relative pb-[20vh]">

                <div className="col-span-1 pt-32 pb-[50vh] relative pl-10">
                    {/* Vertical Progress Line Architecture */}
                    <div className="absolute left-0 top-32 bottom-[50vh] w-[2px] bg-white/10 origin-top">
                        <motion.div
                            className="w-full h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] origin-top"
                            style={{ scaleY }}
                        />
                    </div>

                    <div className="mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-3xl font-medium tracking-tight mb-4"
                        >
                            A Seamless 4-Step Process to a Lifetime Roof.
                        </motion.h2>
                    </div>

                    <div className="flex flex-col relative">
                        {PROCESS_STEPS.map((step, i) => (
                            <ProcessStep
                                key={step.step}
                                index={i}
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                                {...step}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Synchronized Imagery */}
                <div className="col-span-1 border-l border-white/5 sticky top-0 h-screen flex items-center justify-center pl-16">
                    <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel relative border border-white/10 shadow-2xl">
                        {PROCESS_STEPS.map((step, idx) => {
                            const isActive = activeStep === idx;
                            return (
                                <div
                                    key={idx}
                                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        zIndex: isActive ? 10 : 0
                                    }}
                                >
                                    <div
                                        className="w-full h-full transition-transform duration-[1.5s] ease-out will-change-transform"
                                        style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                                    >
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            width={800}
                                            height={640}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile: Static, High-Contrast Stack (< 1024px) */}
            <div className="container mx-auto px-5 lg:hidden py-20 pb-32">
                <h2 className="font-display text-3xl font-medium tracking-tight mb-3 text-balance">A Seamless 4-Step Process to a Lifetime Roof.</h2>
                <div className="w-12 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-16" />

                <div className="flex flex-col gap-24">
                    {PROCESS_STEPS.map((step, i) => (
                        <div key={i} className="flex flex-col gap-6">
                            {/* Static Image */}
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl relative border border-white/10 shadow-xl">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    width={800}
                                    height={640}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                            </div>

                            {/* Static Text - Full Opacity */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white">Phase {step.step}</span>
                                </div>
                                <h3 className="font-display text-2xl font-medium tracking-tight text-white drop-shadow-md">{step.title}</h3>
                                <p className="font-sans text-white leading-relaxed text-sm font-light">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
