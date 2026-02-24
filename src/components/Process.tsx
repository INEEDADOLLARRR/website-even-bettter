import { motion, useScroll, useTransform, useInView } from 'motion/react';
import type { Key } from 'react';
import { useRef, useState, useEffect } from 'react';

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Diagnostic & Vision",
        description: "We begin with an exhaustive structural analysis and aesthetic consultation. Every material limitation and architectural opportunity is mapped out before design begins.",
        image: "https://picsum.photos/seed/diagnostic/800/640"
    },
    {
        step: "02",
        title: "Engineering & Procurement",
        description: "Our engineers design a bespoke membrane and structural plan. Only the highest echelon of materials—from custom-milled zinc to liquid elastomers—are procured.",
        image: "https://picsum.photos/seed/engineering/800/640"
    },
    {
        step: "03",
        title: "Surgical Installation",
        description: "Execution is paramount. Our master craftsmen operate with surgical precision, ensuring weather-tight integrity without disrupting the estate's ongoing operations.",
        image: "https://picsum.photos/seed/installation/800/640"
    },
    {
        step: "04",
        title: "Generational Turnover",
        description: "Upon final inspection, the system is turned over with our uncompromising warranty. The roof is not just replaced; it is architecturally elevated for generations.",
        image: "https://picsum.photos/seed/turnover/800/640"
    }
];

function ProcessStep({ step, title, description, index, setActiveStep }: { step: string, title: string, description: string, index: number, setActiveStep: (i: number) => void, key?: Key }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) setActiveStep(index);
    }, [isInView, index, setActiveStep]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "center center", "end 20%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -10]);

    return (
        <motion.div ref={ref} style={{ opacity, y }} className="py-24 flex flex-col gap-5 transform-gpu will-change-transform">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-white" />
                <span className="font-display text-brand-silver/60 tracking-widest text-xs uppercase">Phase {step}</span>
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight text-brand-white">{title}</h3>
            <p className="text-brand-silver/60 leading-relaxed text-sm md:text-base max-w-lg font-light">{description}</p>
        </motion.div>
    );
}

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section ref={containerRef} id="process" aria-label="Our process" className="relative bg-brand-black text-brand-white">
            <div className="container mx-auto px-6 hidden md:grid grid-cols-2 gap-20 items-start relative pb-32">
                <div className="col-span-1 pt-32 pb-[50vh]">
                    <div className="mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-5"
                        >
                            The Methodology.
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-10 h-[1px] bg-brand-silver/20 origin-left"
                        />
                    </div>
                    <div className="flex flex-col">
                        {PROCESS_STEPS.map((step, i) => (
                            <ProcessStep key={step.step} index={i} setActiveStep={setActiveStep} {...step} />
                        ))}
                    </div>
                </div>

                <div className="col-span-1 border-l border-brand-silver/5 sticky top-0 h-screen flex items-center justify-center pl-20">
                    <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-white/[0.03] border border-brand-white/5 relative">
                        {PROCESS_STEPS.map((step, idx) => (
                            <div
                                key={idx}
                                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                                style={{ opacity: activeStep === idx ? 1 : 0 }}
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="container mx-auto px-6 md:hidden py-24">
                <h2 className="font-display text-3xl font-medium tracking-tight mb-5">The Methodology.</h2>
                <div className="w-10 h-[1px] bg-brand-silver/20 mb-12" />

                <div className="w-full aspect-[4/5] overflow-hidden rounded-xl mb-12 relative">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={idx} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: activeStep === idx ? 1 : 0 }}>
                            <img src={step.image} alt={step.title} width={800} height={640} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col">
                    {PROCESS_STEPS.map((step, i) => (
                        <ProcessStep key={step.step} step={step.step} title={step.title} description={step.description} index={i} setActiveStep={setActiveStep} />
                    ))}
                </div>
            </div>
        </section>
    );
}
